import { CountUp } from "./CountUp";
import { stats } from "./data";

export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-brand-primary py-16 text-white">
      <div className="pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 size-96 rounded-full bg-brand-hero-teal/40 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4 md:px-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-(family-name:--font-display) text-4xl font-bold md:text-5xl">
              <CountUp value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm text-white/80">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
