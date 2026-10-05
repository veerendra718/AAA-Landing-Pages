import * as React from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  /**
   * Renders the single child element as the button itself, the way this
   * project's `Button` does it: the child supplies the behaviour (href, onClick,
   * aria) and the animated layers are rendered into it, so a CTA can stay a real
   * link instead of nesting an <a> inside a <button>. The child's own children
   * are replaced by those layers — `text` is the label.
   */
  asChild?: boolean;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(
  (
    { text = "Button", className, asChild = false, children, ...props },
    ref,
  ) => {
    // `inline-block` is what lets a slotted <a> honour the width and height
    // classes — an inline anchor would ignore them and the absolute layers would
    // collapse; a <button> is already laid out this way. The focus ring mirrors
    // the project's own Button so the control is visible on keyboard focus, and
    // the icon is sized to the label rather than lucide's 24px default.
    const base =
      "group relative inline-block w-32 cursor-pointer overflow-hidden rounded-full border bg-background p-2 text-center font-semibold outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 [&_svg]:size-4";

    const layers = (
      <>
        <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {text}
        </span>
        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
          <span>{text}</span>
          <ArrowRight />
        </div>
        <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-primary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-primary"></div>
      </>
    );

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      // `ref` is not forwarded here: the child is a component, and the Link
      // shim cannot take one. Same trade-off as `Button`'s own asChild.
      return React.cloneElement(
        child,
        {
          ...props,
          className: cn(base, className, child.props.className),
        } as React.Attributes & { className?: string },
        layers,
      );
    }

    return (
      <button
        ref={ref}
        data-slot="interactive-hover-button"
        className={cn(base, className)}
        {...props}
      >
        {layers}
      </button>
    );
  },
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
