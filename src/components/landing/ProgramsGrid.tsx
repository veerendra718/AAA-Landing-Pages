"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, CalendarCheck, MonitorPlay, Trophy } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { courses, coursesExtras, onlineCourses } from "./courses-data";
import { registerUrl } from "./data";
import { SectionHeading } from "./SectionHeading";

const formats = [
  { id: "classroom", label: "Classroom courses", icon: Building2 },
  { id: "online", label: "Online courses", icon: MonitorPlay },
] as const;

type Format = (typeof formats)[number]["id"];

/**
 * The programme cards. They render from `courses` — the same data as the
 * /landing/courses pages — so the class range, summary, exams and the result
 * each card quotes always match the page it links to. The result is a real
 * count from /landing/achievers and links there, so the claim is checkable.
 * Below the grid, the two course pages that don't fit the card shape and a
 * way out for anyone still unsure.
 *
 * Classroom / Online tabs sit above the grid, the way allen.in's course tabs
 * split by format; the online tab shows the same courses taught live online.
 */
export function ProgramsGrid({
  subtitle = "Classroom batches at the Vijayanagar centre, with the AAA Lakshya app included for practice at home.",
}: {
  subtitle?: string;
}) {
  const [format, setFormat] = useState<Format>("classroom");

  return (
    <section id="programs" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading eyebrow="Programmes" title="Find the right programme" subtitle={subtitle} />

        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Course format"
            className="grid w-full grid-cols-2 gap-1.5 rounded-2xl border border-brand-border-light bg-brand-page-bg p-1.5 sm:w-fit"
          >
            {formats.map((f) => {
              const on = format === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  id={`programs-tab-${f.id}`}
                  aria-selected={on}
                  aria-controls="programs-panel"
                  onClick={() => setFormat(f.id)}
                  className={cn(
                    "flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors",
                    on
                      ? "bg-white text-brand-primary-darker shadow-sm ring-1 ring-brand-border-light"
                      : "text-brand-text-secondary hover:bg-white/60",
                  )}
                >
                  <f.icon className={cn("size-4", on && "text-brand-primary")} />
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <div id="programs-panel" role="tabpanel" aria-labelledby={`programs-tab-${format}`}>
          {format === "classroom" ? <ClassroomPrograms /> : <OnlinePrograms />}
        </div>
      </div>
    </section>
  );
}

/** The classroom tab: the four courses at the centre, then the extras strip. */
function ClassroomPrograms() {
  return (
    <>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((c) => (
          <article
            key={c.slug}
            className="group flex flex-col overflow-hidden rounded-3xl border border-brand-border-light bg-white transition-all hover:-translate-y-1 hover:border-brand-border-teal hover:shadow-[0_24px_50px_-24px_rgba(0,83,91,0.4)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={c.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-brand-primary-darker shadow">
                {c.eyebrow}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-bold leading-snug text-brand-text-primary">{c.label}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-brand-text-muted">
                {c.summary}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Prepares for">
                {c.exams.slice(0, 3).map((e) => (
                  <li
                    key={e}
                    className="rounded-full bg-brand-subtle-bg px-2.5 py-0.5 text-[11px] font-semibold text-brand-primary-darker"
                  >
                    {e}
                  </li>
                ))}
              </ul>

              <Link
                href={c.proof.href}
                className="mt-5 flex items-center gap-2 border-t border-brand-border-light pt-4 text-sm text-brand-text-secondary hover:text-brand-primary"
              >
                <Trophy className="size-4 shrink-0 text-brand-primary" />
                <span>
                  <span className="font-bold text-brand-primary-darker">{c.proof.value}</span>{" "}
                  {c.proof.label}
                </span>
                <ArrowUpRight className="ml-auto size-4 shrink-0" />
              </Link>

              <div className="mt-auto flex items-center gap-2 pt-5">
                <Button asChild size="sm" className="flex-1">
                  <Link href={c.href}>
                    View course <ArrowRight />
                  </Link>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <a href="#visit">Enquire</a>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* The two course pages outside the card shape, and a way out for
          anyone who still can't tell which programme fits. */}
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {coursesExtras.map((x) => (
          <Link
            key={x.href}
            href={x.href}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-brand-border-light bg-brand-page-bg p-5 transition-colors hover:border-brand-border-teal hover:bg-white"
          >
            <span>
              <span className="block text-[11px] font-bold uppercase tracking-wide text-brand-primary">
                {x.eyebrow}
              </span>
              <span className="mt-0.5 block font-semibold text-brand-text-primary">{x.label}</span>
              <span className="mt-0.5 block text-sm text-brand-text-muted">{x.blurb}</span>
            </span>
            <ArrowRight className="size-5 shrink-0 text-brand-primary transition-transform group-hover:translate-x-1" />
          </Link>
        ))}
        <a
          href="#visit"
          className="group flex items-center justify-between gap-4 rounded-2xl bg-brand-primary p-5 text-white transition-colors hover:bg-brand-primary-dark"
        >
          <span>
            <span className="block text-[11px] font-bold uppercase tracking-wide text-brand-secondary">
              Not sure which fits?
            </span>
            <span className="mt-0.5 block font-semibold">Talk to a mentor</span>
            <span className="mt-0.5 block text-sm text-white/75">
              Free counselling and a short diagnostic test
            </span>
          </span>
          <CalendarCheck className="size-5 shrink-0 transition-transform group-hover:scale-110" />
        </a>
      </div>
    </>
  );
}

/** The online tab: the same four courses, taught live online. */
function OnlinePrograms() {
  return (
    <>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {onlineCourses.map((c) => (
          <article
            key={c.slug}
            className="group flex flex-col overflow-hidden rounded-3xl border border-brand-border-light bg-white transition-all hover:-translate-y-1 hover:border-brand-border-teal hover:shadow-[0_24px_50px_-24px_rgba(0,83,91,0.4)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={c.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-brand-primary px-2.5 py-1 text-[11px] font-bold text-white shadow">
                <MonitorPlay className="size-3" /> Live online
              </span>
              <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-brand-primary-darker shadow">
                {c.eyebrow}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-bold leading-snug text-brand-text-primary">{c.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-text-muted">
                Live classes with the same faculty, plus tests, notes and recordings in AAA Lakshya.
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Prepares for">
                {c.exams.slice(0, 3).map((e) => (
                  <li
                    key={e}
                    className="rounded-full bg-brand-subtle-bg px-2.5 py-0.5 text-[11px] font-semibold text-brand-primary-darker"
                  >
                    {e}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center gap-2 pt-5">
                <Button asChild size="sm" className="flex-1">
                  <Link href={c.href}>
                    View course <ArrowRight />
                  </Link>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <Link href={registerUrl}>Start free</Link>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Link
        href="/landing/courses/online"
        className="group mt-6 flex items-center justify-between gap-4 rounded-2xl border border-brand-border-light bg-brand-page-bg p-5 transition-colors hover:border-brand-border-teal hover:bg-white"
      >
        <span>
          <span className="block text-[11px] font-bold uppercase tracking-wide text-brand-primary">
            Classroom or online?
          </span>
          <span className="mt-0.5 block font-semibold text-brand-text-primary">
            See what every online course includes, and compare the two
          </span>
        </span>
        <ArrowRight className="size-5 shrink-0 text-brand-primary transition-transform group-hover:translate-x-1" />
      </Link>
    </>
  );
}
