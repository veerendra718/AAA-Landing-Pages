import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-bold uppercase tracking-[2.5px]",
            dark ? "text-brand-secondary" : "text-brand-primary",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-(family-name:--font-display) text-3xl font-bold leading-tight tracking-tight text-balance md:text-[42px]",
          dark ? "text-white" : "text-brand-primary-darker",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed text-pretty md:text-lg",
            dark ? "text-white/80" : "text-brand-text-muted",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
