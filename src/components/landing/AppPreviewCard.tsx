import { Flame, TrendingUp } from "lucide-react";

import { cn } from "@/lib/utils";

// A static look-alike of the student dashboard's topic-mastery heatmap, so the
// landing page can show the product without screenshots going stale.
const topics = [
  ["Kinematics", 86],
  ["Laws of Motion", 72],
  ["Work & Energy", 64],
  ["Rotation", 41],
  ["Gravitation", 78],
  ["Thermodynamics", 55],
  ["Waves", 33],
  ["Electrostatics", 69],
  ["Current Elec.", 91],
] as const;

function tint(pct: number) {
  if (pct >= 80) return "bg-brand-primary text-white";
  if (pct >= 65) return "bg-brand-hero-teal text-white";
  if (pct >= 50) return "bg-brand-secondary text-brand-primary-darker";
  if (pct >= 40) return "bg-brand-medium-bg text-brand-medium-text";
  return "bg-brand-hard-bg text-brand-hard-text";
}

export function AppPreviewCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full max-w-sm rounded-2xl border border-brand-border-light bg-white p-5 shadow-[0_30px_60px_-25px_rgba(0,83,91,0.45)]",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-text-muted">
            Physics · Topic mastery
          </p>
          <p className="text-lg font-bold text-brand-text-primary">
            65% <span className="text-sm font-medium text-brand-success">+8% this week</span>
          </p>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-brand-warning-bg px-2.5 py-1 text-xs font-bold text-brand-warning">
          <Flame className="size-3.5" /> 12 day streak
        </span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-1.5">
        {topics.map(([name, pct]) => (
          <div key={name} className={cn("rounded-lg px-2 py-2", tint(pct))}>
            <p className="truncate text-[10px] font-medium opacity-90">{name}</p>
            <p className="text-sm font-bold">{pct}%</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-xl bg-brand-page-bg px-3 py-2.5 text-xs text-brand-text-secondary">
        <TrendingUp className="size-4 text-brand-primary" />
        Next up: <span className="font-semibold">Waves — 15 practice questions</span>
      </div>
    </div>
  );
}
