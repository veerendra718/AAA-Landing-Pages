import { TriangleAlert } from "lucide-react";

import { cn } from "@/lib/utils";

/** Marks content that was invented for this demo rather than taken from
 *  aaaedu.in — see the `// DUMMY` blocks in data.ts.
 *
 *  Intentionally loud and off-palette: a footnote in brand grey sat at the
 *  bottom of these sections and was easy to miss. Delete this component and
 *  its call sites once real data replaces the placeholders. */
export function SampleDataBadge({
  label,
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border-2 border-dashed border-brand-warning bg-brand-warning-bg px-3 py-1 text-[10px] font-bold uppercase tracking-[1px] text-brand-hard-text",
        className,
      )}
    >
      <TriangleAlert className="size-3 shrink-0" />
      {label ?? "Sample data — replace before publishing"}
    </span>
  );
}
