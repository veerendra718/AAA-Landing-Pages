import Link from "next/link";
import { ArrowRight, CalendarCheck, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  residentialProgramme,
} from "@/components/landing/courses-data";
import { PageShell } from "@/components/landing/PageShell";

const base = "/landing/courses";

export default function CoursesResidential() {
  return (
    <PageShell
      title="Day Scholar & Residential"
      subtitle={residentialProgramme.summary}
    >
      <section className="px-4 py-14 md:px-6">
        <p className="mx-auto mb-8 max-w-7xl border-l-4 border-brand-primary pl-4 font-(family-name:--font-display) text-lg font-semibold text-brand-primary-darker">
          Offered as the {residentialProgramme.title.toLowerCase()}.
        </p>
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {residentialProgramme.highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-2xl border border-brand-border-light bg-white p-6"
            >
              <p className="font-(family-name:--font-display) text-4xl font-bold text-brand-primary">
                {h.stat}
              </p>
              <p className="mt-1 text-sm font-semibold text-brand-text-primary">
                {h.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-text-muted">
                {h.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-subtle-bg/60 px-4 py-14 md:px-6">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-(family-name:--font-display) text-3xl font-bold text-brand-primary-darker md:text-4xl">
              What the programme includes
            </h2>
            <p className="mt-4 leading-relaxed text-brand-text-secondary">
              Two years of board preparation and competitive exam training
              taught as a single programme, so the student is never switching
              between two sets of material or two sets of teachers.
            </p>
          </div>
          <ul className="flex flex-col gap-3">
            {residentialProgramme.benefits.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-2xl border border-brand-border-light bg-white p-4"
              >
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                  <Check className="size-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-brand-text-secondary">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-14 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-(family-name:--font-display) text-3xl font-bold text-brand-primary-darker md:text-4xl">
            Where the programme runs
          </h2>
          <p className="mt-4 leading-relaxed text-brand-text-secondary">
            Both routes are arranged through the academy: a day-scholar seat for
            students who travel in each day, or a residential seat for those who
            stay. Counselling at the Vijayanagar campus settles which one suits a
            student, after the diagnostic test — and the batches are listed in
            full on the admissions page.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/landing/contact#enquire">
                <CalendarCheck /> Book a counselling visit
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={`${base}/admissions`}>
                See the batches <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
