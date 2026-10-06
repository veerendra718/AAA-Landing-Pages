import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { achieverCount } from "@/components/landing/achievers-display";
import { achieverSections } from "@/components/landing/achievers-display";
import { AchieverGrid } from "@/components/landing/AchieversShared";
import { PageShell } from "@/components/landing/PageShell";

const base = "/landing/achievers";

/** Preview how many photos each category shows before "See all". Twelve fills
 *  whole rows of the 3-, 4- and 6-column grid. */
const previewSize = 12;

export default function Achievers() {
  return (
    <PageShell
      title="Achievers"
      subtitle={`${achieverCount} students from our classrooms, listed as the academy publishes them — rank or AIR, then the college they went on to.`}
    >
      {/* Jump to a category */}
      <section className="px-4 pb-6 pt-2 md:px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {achieverSections.map((g) => (
            <a
              key={g.slug}
              href={`#${g.slug}`}
              className="group rounded-2xl border border-brand-border-light bg-white px-4 py-5 transition-colors hover:border-brand-border-teal"
            >
              <span className="block font-(family-name:--font-display) text-3xl font-bold text-brand-primary">
                {g.students.length}
              </span>
              <span className="mt-1 flex items-center justify-between gap-2 text-sm font-semibold text-brand-text-primary">
                {g.name}
                <ArrowDown className="size-4 text-brand-primary transition-transform group-hover:translate-y-0.5" />
              </span>
            </a>
          ))}
        </div>
      </section>

      {achieverSections.map((g, i) => (
        <section
          key={g.slug}
          id={g.slug}
          className={`scroll-mt-20 px-4 py-14 md:px-6 ${i % 2 === 0 ? "bg-brand-page-bg" : ""}`}
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[2.5px] text-brand-primary">
                  {g.students.length} students
                </p>
                <h2 className="mt-2 font-(family-name:--font-display) text-3xl font-bold text-brand-primary-darker md:text-4xl">
                  {g.heading}
                </h2>
                <p className="mt-3 text-sm italic leading-relaxed text-brand-text-muted md:text-base">
                  &ldquo;{g.quote}&rdquo;
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href={`${base}/${g.slug}`}>
                  See all {g.students.length}
                  <ArrowUpRight />
                </Link>
              </Button>
            </div>
            <div className="mt-8">
              <AchieverGrid students={g.students.slice(0, previewSize)} />
            </div>
          </div>
        </section>
      ))}
    </PageShell>
  );
}
