import * as React from "react";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

type SheetCtx = { open: boolean; setOpen: (open: boolean) => void };

const Context = React.createContext<SheetCtx | null>(null);

function useSheet() {
  const ctx = React.useContext(Context);
  if (!ctx) throw new Error("Sheet primitives must be rendered inside <Sheet>");
  return ctx;
}

function Sheet({
  open: openProp,
  onOpenChange,
  children,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}) {
  const [uncontrolled, setUncontrolled] = React.useState(false);
  const open = openProp ?? uncontrolled;

  const value = React.useMemo<SheetCtx>(
    () => ({
      open,
      setOpen: (next) => {
        onOpenChange?.(next);
        if (openProp === undefined) setUncontrolled(next);
      },
    }),
    [open, openProp, onOpenChange],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

type TriggerProps = React.ComponentProps<"button"> & { asChild?: boolean };

function SheetTrigger({ asChild, className, children, ...props }: TriggerProps) {
  const { setOpen } = useSheet();
  const onClick = () => setOpen(true);

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(child, {
      onClick,
      className: cn(className, child.props.className),
    } as React.Attributes & { className?: string });
  }

  return (
    <button type="button" onClick={onClick} className={className} {...props}>
      {children}
    </button>
  );
}

const sideClasses = {
  right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=open]:animate-in",
  left: "inset-y-0 left-0 h-full w-3/4 border-r",
  top: "inset-x-0 top-0 border-b",
  bottom: "inset-x-0 bottom-0 border-t",
} as const;

function SheetContent({
  side = "right",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & { side?: keyof typeof sideClasses }) {
  const { open, setOpen } = useSheet();

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  if (!open) return null;

  return (
    <>
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className="fixed inset-0 z-50 bg-black/45"
      />
      <div
        role="dialog"
        aria-modal="true"
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "fixed z-50 flex flex-col bg-background text-foreground shadow-lg",
          "animate-[sheet-slide-right_200ms_ease-out]",
          sideClasses[side],
          className,
        )}
        {...props}
      >
        {children}
        <SheetClose>
          <span
            aria-label="Close menu"
            className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="size-4" />
          </span>
        </SheetClose>
      </div>
    </>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-6 text-left", className)}
      {...props}
    />
  );
}

function SheetTitle({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      data-slot="sheet-title"
      className={cn("text-lg font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  );
}

function SheetDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="sheet-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function SheetClose({
  asChild,
  className,
  children,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const { setOpen } = useSheet();
  const onClick = () => setOpen(false);

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(child, {
      onClick,
      className: cn(className, child.props.className),
    } as React.Attributes & { className?: string });
  }

  return (
    <button type="button" onClick={onClick} className={className} {...props}>
      {children}
    </button>
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
};
