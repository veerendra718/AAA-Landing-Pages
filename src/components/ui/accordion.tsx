import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

type AccordionCtx = {
  openValue: string | null;
  toggle: (value: string) => void;
};

const AccordionContext = React.createContext<AccordionCtx | null>(null);
const ItemContext = React.createContext<{ value: string } | null>(null);

function useAccordion() {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) throw new Error("Accordion primitives must be rendered inside <Accordion>");
  return ctx;
}

function useItem() {
  const ctx = React.useContext(ItemContext);
  if (!ctx) throw new Error("AccordionTrigger must be rendered inside <AccordionItem>");
  return ctx;
}

/** Only the single-collapsible behaviour the landing FAQ needs. */
function Accordion({
  className,
  children,
  defaultValue,
  type,
  collapsible,
  ...props
}: Omit<React.ComponentProps<"div">, "defaultValue"> & {
  type?: "single" | "multiple";
  collapsible?: boolean;
  /** The item open on first render. */
  defaultValue?: string;
}) {
  void type;
  void collapsible;

  const [openValue, setOpenValue] = React.useState<string | null>(defaultValue ?? null);

  const value = React.useMemo<AccordionCtx>(
    () => ({
      openValue,
      toggle: (next) => setOpenValue((current) => (current === next ? null : next)),
    }),
    [openValue],
  );

  return (
    <AccordionContext.Provider value={value}>
      <div data-slot="accordion" className={className} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({
  className,
  value,
  children,
  ...props
}: React.ComponentProps<"div"> & { value: string }) {
  const { openValue } = useAccordion();
  const open = openValue === value;

  return (
    <ItemContext.Provider value={{ value }}>
      <div
        data-slot="accordion-item"
        data-state={open ? "open" : "closed"}
        className={cn("border-b last:border-b-0", className)}
        {...props}
      >
        {children}
      </div>
    </ItemContext.Provider>
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  const { openValue, toggle } = useAccordion();
  const { value } = useItem();
  const open = openValue === value;

  return (
    <h3 className="flex flex-1">
      <button
        type="button"
        aria-expanded={open}
        data-state={open ? "open" : "closed"}
        onClick={() => toggle(value)}
        className={cn(
          "flex flex-1 items-center justify-between gap-4 py-4 text-left transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200" />
      </button>
    </h3>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const { openValue } = useAccordion();
  const { value } = useItem();
  const open = openValue === value;

  return (
    <div
      data-state={open ? "open" : "closed"}
      className={cn(
        "grid transition-all duration-300 ease-out",
        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
      )}
      {...props}
    >
      <div className="overflow-hidden">
        <div className={cn("pb-4", className)}>{children}</div>
      </div>
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
