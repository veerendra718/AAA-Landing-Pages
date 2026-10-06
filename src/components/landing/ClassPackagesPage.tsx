import Link from "next/link";
import { ArrowLeftRight, ArrowRight, Building2, MonitorPlay } from "lucide-react";

import { admissionSteps, classroomClasses, onlineClasses, type PackageClass } from "./courses-data";
import { ClassroomIncludes, OnlineHighlights, PackageFinder, type PackageMode } from "./OnlinePackages";
import { PageShell } from "./PageShell";
import { SectionHeading } from "./SectionHeading";

/**
 * One class's packages page, online or classroom:
 * /landing/courses/online/class-11 and class-12, and /landing/courses/class-11
 * and class-12. Each lists only that class's packages, so there is no class
 * switch on the page — only links across to the other class and the other format.
 */
export function ClassPackagesPage({ cls, mode }: { cls: PackageClass; mode: PackageMode }) {
  const classes = mode === "online" ? onlineClasses : classroomClasses;
  const info = classes.find((c) => c.id === cls)!;
  const other = classes.find((c) => c.id !== cls)!;
  const otherFormat = (mode === "online" ? classroomClasses : onlineClasses).find((c) => c.id === cls)!;

  return (
    <PageShell title={info.title} subtitle={info.note}>
      {/* The classroom pages go straight to the packages; their title already
          says what every package includes. */}
      {mode === "online" && <OnlineHighlights jumpHref="#prices" jumpLabel="See courses" mode={mode} />}

      <PackageFinder cls={cls} mode={mode} />

      {mode === "classroom" && <ClassroomIncludes />}

      {mode === "classroom" && (
        <section className="px-4 py-14 md:px-6 md:py-16">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="How to join" title="From first call to first class" />
            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {admissionSteps.map((st, i) => (
                <li key={st.step} className="rounded-2xl border border-brand-border-light bg-white p-5 card-hover">
                  <span className="flex size-9 items-center justify-center rounded-full bg-brand-primary font-(family-name:--font-display) font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="mt-3 font-semibold text-brand-text-primary">{st.step}</p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-text-muted">{st.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <div className="px-4 py-14 md:px-6">
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
          <Link
            href={other.href}
            className="group flex items-center justify-between gap-4 rounded-3xl border border-brand-border-light bg-white p-6 card-hover"
          >
            <span>
              <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-primary">
                <ArrowLeftRight className="size-4" /> Looking for {other.label}?
              </span>
              <span className="mt-1 block text-brand-text-secondary">
                {other.label} courses are a {other.course}, priced separately.
              </span>
            </span>
            <ArrowRight className="size-5 shrink-0 text-brand-primary transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href={otherFormat.href}
            className="group flex items-center justify-between gap-4 rounded-3xl border border-brand-border-light bg-white p-6 card-hover"
          >
            <span>
              <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-primary">
                {mode === "online" ? <Building2 className="size-4" /> : <MonitorPlay className="size-4" />}
                {mode === "online" ? "Prefer the classroom?" : "Studying from home?"}
              </span>
              <span className="mt-1 block text-brand-text-secondary">
                {mode === "online"
                  ? `The same courses at Vijayanagar, with the Advanced plan free.`
                  : `The same courses online, with Free, Standard and Advanced plans.`}
              </span>
            </span>
            <ArrowRight className="size-5 shrink-0 text-brand-primary transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
