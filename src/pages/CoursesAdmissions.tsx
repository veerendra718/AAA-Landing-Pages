import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  admissionSteps,
  admissionsNote,
  courseBatches,
} from "@/components/landing/courses-data";
import { academy } from "@/components/landing/data";
import { PageShell } from "@/components/landing/PageShell";

export default function CoursesAdmissions() {
  return (
    <PageShell
      title="Admissions & Batches"
      subtitle={admissionsNote}
    >
      <section className="px-4 py-14 md:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-(family-name:--font-display) text-3xl font-bold text-brand-primary-darker md:text-4xl">
            How admission works
          </h2>
          <p className="mt-3 max-w-2xl text-brand-text-secondary">
            The academy counsels before it enrols, so the batch a student joins
            is chosen on where they stand rather than on a form.
          </p>

          <ol className="mt-10 flex flex-col gap-5">
            {admissionSteps.map((s, i) => (
              <li
                key={s.step}
                className="flex gap-5 rounded-2xl border border-brand-border-light bg-white p-6"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-primary font-(family-name:--font-display) text-lg font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-brand-text-primary">
                    {s.step}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-brand-text-secondary">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-brand-subtle-bg/60 px-4 py-14 md:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-(family-name:--font-display) text-3xl font-bold text-brand-primary-darker md:text-4xl">
            Batches on offer
          </h2>
          <p className="mt-3 max-w-2xl text-brand-text-secondary">
            Grouped as the academy's own enquiry form groups them, taught at the
            Vijayanagar campus. Batch names in brackets are the academy's.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {courseBatches.map((g) => (
              <div
                key={g.title}
                className="rounded-2xl border border-brand-border-light bg-white p-6"
              >
                <h3 className="font-(family-name:--font-display) text-xl font-bold text-brand-primary-darker">
                  {g.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-text-muted">
                  {g.body}
                </p>
                <ul className="mt-4 flex flex-col gap-2 border-t border-brand-border-light pt-4">
                  {g.courses.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2.5 text-sm text-brand-text-secondary"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-primary" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-(family-name:--font-display) text-3xl font-bold text-brand-primary-darker md:text-4xl">
            Not sure which batch?
          </h2>
          <p className="mt-4 text-brand-text-secondary">
            Describe the student — class, board and the exam they are aiming at —
            and the team will name the batch that fits and the hours it runs.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/landing/contact#enquire">
                Send an enquiry
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`tel:+91${academy.phones[0]}`}>
                <Phone /> {academy.phones[0]}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
