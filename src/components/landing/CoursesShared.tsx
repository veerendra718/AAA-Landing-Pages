import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, GraduationCap, Phone, Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  courses,
  coursesExtras,
  coursesHead,
  getCourse,
} from "./courses-data";
import { academy } from "./data";
import { PageShell } from "./PageShell";
import { SectionHeading } from "./SectionHeading";

/** One course page, driven entirely by the slug in courses-data. */
export function CoursePage({ slug }: { slug: string }) {
  const course = getCourse(slug);

  if (!course) {
    throw new Error(`Unknown course slug: ${slug}`);
  }

  return (
    <PageShell
      title={course.label}
      subtitle={course.summary}
    >
      <section className="px-4 py-14 md:px-6">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[2.5px] text-brand-primary">
              {course.eyebrow}
            </p>
            <h2 className="mt-3 font-(family-name:--font-display) text-3xl font-bold text-brand-primary-darker md:text-4xl">
              How this course runs
            </h2>
            <ul className="mt-8 space-y-6">
              {course.highlights.map((h) => (
                <li key={h.title} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-subtle-bg text-brand-primary">
                    <Check className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-brand-text-primary">{h.title}</h3>
                    <p className="mt-1 leading-relaxed text-brand-text-secondary">{h.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
              <Image
                src={course.image}
                alt={`A class in the ${course.label} batch at the Vijayanagar centre`}
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-4 flex items-center gap-4 rounded-2xl bg-brand-primary-darker px-5 py-4 text-white shadow-xl md:-right-6">
              <span className="flex size-12 items-center justify-center rounded-xl bg-white/10 text-brand-secondary">
                <Trophy className="size-6" />
              </span>
              <div>
                <p className="font-(family-name:--font-display) text-3xl font-bold leading-none">
                  {course.proof.value}
                </p>
                <Link
                  href={course.proof.href}
                  className="mt-1 block text-sm text-white/75 underline-offset-4 hover:underline"
                >
                  {course.proof.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-page-bg px-4 py-14 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-brand-border-light bg-white p-6 md:p-8">
            <SectionHeading align="left" eyebrow="Syllabus" title="What is covered" />
            <ul className="mt-6 space-y-3">
              {course.syllabus.map((s) => (
                <li key={s} className="flex gap-3 leading-relaxed text-brand-text-secondary">
                  <Check className="mt-1 size-4 shrink-0 text-brand-primary" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-brand-border-light bg-white p-6 md:p-8">
            <SectionHeading align="left" eyebrow="Exams" title="Prepared for" />
            <ul className="mt-6 space-y-3">
              {course.exams.map((e) => (
                <li key={e} className="flex gap-3 leading-relaxed text-brand-text-secondary">
                  <GraduationCap className="mt-1 size-4 shrink-0 text-brand-primary" />
                  {e}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/landing/contact#enquire">
                  Enquire about this course
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:+91${academy.phones[0]}`}>
                  <Phone /> Call us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

/** The Courses overview: every course that runs at the Vijayanagar centre. */
export function CoursesOverview() {
  return (
    <PageShell
      title={coursesHead.title}
      subtitle={coursesHead.note}
    >
      <section className="px-4 pb-14 pt-2 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2">
          {courses.map((c) => (
            <article
              key={c.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-brand-border-light bg-white transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(0,83,91,0.4)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={c.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 600px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">
                  {c.eyebrow}
                </p>
                <h2 className="mt-1.5 font-(family-name:--font-display) text-2xl font-bold text-brand-text-primary">
                  {c.label}
                </h2>
                <p className="mt-3 flex-1 leading-relaxed text-brand-text-muted">{c.summary}</p>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {c.exams.slice(0, 3).map((e) => (
                    <span
                      key={e}
                      className="rounded-full bg-brand-subtle-bg px-3 py-1 text-xs font-medium text-brand-primary-darker"
                    >
                      {e}
                    </span>
                  ))}
                </div>
                <Link
                  href={c.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary"
                >
                  Course details
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-14 md:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-(family-name:--font-display) text-2xl font-bold text-brand-primary-darker md:text-3xl">
            Also at the centre
          </h2>
          <p className="mt-3 max-w-2xl text-brand-text-secondary">
            Two things a parent asks about before choosing a batch: where the
            student stays, and what joining involves.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {coursesExtras.map((e) => (
              <Link
                key={e.href}
                href={e.href}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-brand-border-light bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(0,83,91,0.4)]"
              >
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-brand-primary">
                    {e.eyebrow}
                  </span>
                  <span className="mt-1.5 block font-(family-name:--font-display) text-xl font-bold text-brand-text-primary">
                    {e.label}
                  </span>
                  <span className="mt-1 block text-sm text-brand-text-muted">
                    {e.blurb}
                  </span>
                </span>
                <ArrowRight className="size-5 shrink-0 text-brand-primary transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
