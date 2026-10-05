import * as React from "react";

import { cn } from "@/lib/utils";

// Pill-shaped to match the header and closing-banner CTAs, so every button on
// the site reads as one family. A trailing icon (the usual → arrow) nudges
// forward on hover, and the button presses in slightly when clicked.
const base =
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all outline-none active:scale-[0.98] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg:not([class*='size-'])]:size-4 hover:[&>svg:last-child:not(:first-child)]:translate-x-0.5";

const variantClasses = {
  default: "btn-brand text-white",
  destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20",
  outline:
    "border border-brand-border-teal bg-white text-brand-primary-darker hover:border-brand-primary hover:bg-brand-subtle-bg/60 hover:text-brand-primary",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  /** Solid white, for the main action on a teal band. */
  inverse: "bg-white text-brand-primary shadow-lg shadow-black/10 hover:bg-brand-subtle-bg",
  /** Outlined white, for the second action on a teal band. */
  "inverse-outline": "border-2 border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10",
  link: "text-primary underline-offset-4 hover:underline",
} as const;

const sizeClasses = {
  default: "h-10 px-5 has-[>svg]:px-4",
  xs: "h-7 gap-1 px-3 text-xs has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-3",
  sm: "h-9 gap-1.5 px-4 has-[>svg]:px-3.5",
  lg: "h-12 px-7 text-base has-[>svg]:px-6",
  icon: "size-9",
  "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
  "icon-sm": "size-8",
  "icon-lg": "size-10",
} as const;

export type ButtonVariant = keyof typeof variantClasses;
export type ButtonSize = keyof typeof sizeClasses;

export function buttonVariants({
  variant = "default",
  size = "default",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(base, variantClasses[variant], sizeClasses[size], className);
}

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
};

/** asChild merges the button styling onto the single child element (a Link in
 *  almost every landing CTA) instead of nesting an <a> inside a <button>. */
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(child, {
      ...props,
      // className is destructured out of props, so it has to be handed to
      // buttonVariants explicitly — otherwise every `asChild` button silently
      // drops the caller's classes and falls back to the variant defaults.
      className: cn(buttonVariants({ variant, size, className }), child.props.className),
    } as React.Attributes & { className?: string });
  }

  return (
    <button
      data-slot="button"
      className={buttonVariants({ variant, size, className })}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
