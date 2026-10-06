"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CalendarCheck, MonitorPlay } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  classroomClasses,
  classroomPrice,
  examPackages,
  onlineClasses,
  onlineExams,
  type OnlineExamInfo,
} from "./courses-data";
import { SectionHeading } from "./SectionHeading";

const formats = [
  { id: "classroom", label: "Classroom courses", icon: Building2 },
  { id: "online", label: "Online courses", icon: MonitorPlay },
] as const;

type Format = (typeof formats)[number]["id"];

/**
 * The programme cards: one per exam the packages prepare for — KCET, JEE Main,
 * JEE Advanced and NEET — naming that exam's packages and their starting
 * price, with a button into each class's packages page.
 *
 * Classroom / Online tabs sit above the grid, the way allen.in's course tabs
 * split by format; both show the same exams, priced for that format.
 */
export function ProgramsGrid({
  subtitle = "Classroom batches at the Vijayanagar centre, with the AAA app included for practice at home.",
  showOnline = true,
}: {
  subtitle?: string;
  /** False shows the classroom courses alone, with no format tabs — for pages
   *  that present the app as part of classroom coaching, not a course of its own. */
  showOnline?: boolean;
}) {
  const [format, setFormat] = useState<Format>("classroom");

  return (
    <section id="programs" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading eyebrow="Programmes" title="Find the right programme" subtitle={subtitle} />

        {!showOnline ? (
          <ExamPrograms format="classroom" />
        ) : (
          <>
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
              <ExamPrograms format={format} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}

/** The lowest Standard (online) or classroom price among an exam's own packages. */
function fromPrice(exam: OnlineExamInfo, format: Format) {
  return Math.min(
    ...examPackages(exam.exam).flatMap((p) =>
      classroomClasses.flatMap((c) =>
        p.prices[c.id] ? [format === "online" ? p.prices[c.id]!.standard.price : classroomPrice(p, c.id).price] : [],
      ),
    ),
  );
}

/** One card per exam, naming the packages that cover it, for one format. */
function ExamPrograms({ format }: { format: Format }) {
  const classes = format === "online" ? onlineClasses : classroomClasses;
  const Badge = format === "online" ? MonitorPlay : Building2;

  return (
    <>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {onlineExams.map((c) => (
          <article
            key={c.slug}
            className="group flex flex-col overflow-hidden rounded-3xl border border-brand-border-light bg-white card-hover"
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
                <Badge className="size-3" /> {format === "online" ? "Live online" : "Classroom"}
              </span>
              <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-brand-primary-darker shadow">
                {c.eyebrow}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-bold leading-snug text-brand-text-primary">{c.exam}</h3>
              <p className="mt-1 text-sm text-brand-text-muted">
                Class 11 &amp; 12 · from{" "}
                <span className="font-bold text-brand-text-primary">
                  ₹{fromPrice(c, format).toLocaleString("en-IN")}
                </span>
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Courses">
                {examPackages(c.exam).map((p) => (
                  <li
                    key={p.slug}
                    className="rounded-full bg-brand-subtle-bg px-2.5 py-0.5 text-[11px] font-semibold text-brand-primary-darker"
                  >
                    {p.name}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-5">
                <p className="text-[11px] font-bold uppercase tracking-wide text-brand-text-muted">See courses for</p>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {classes.map((k) => (
                    <Button key={k.id} asChild size="sm" variant={k.id === "11" ? "default" : "outline"}>
                      <Link href={`${k.href}#${c.slug}`}>
                        {k.label} <ArrowRight />
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {format === "online" ? (
        <Link
          href="/landing/courses/online"
          className="group mt-6 flex items-center justify-between gap-4 rounded-2xl border border-brand-border-light bg-brand-page-bg p-5 hover:bg-white card-hover"
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
      ) : (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Link
            href={`${classroomClasses[0].href}#combined`}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-brand-border-light bg-brand-page-bg p-5 hover:bg-white card-hover"
          >
            <span>
              <span className="block text-[11px] font-bold uppercase tracking-wide text-brand-primary">
                Several exams?
              </span>
              <span className="mt-0.5 block font-semibold text-brand-text-primary">
                Sakala, Sarvam and Sarvotthama combine them in one course
              </span>
            </span>
            <ArrowRight className="size-5 shrink-0 text-brand-primary transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="#visit"
            className="group flex items-center justify-between gap-4 rounded-2xl bg-brand-primary p-5 text-white transition-colors hover:bg-brand-primary-dark"
          >
            <span>
              <span className="block text-[11px] font-bold uppercase tracking-wide text-brand-secondary">
                Not sure which fits?
              </span>
              <span className="mt-0.5 block font-semibold">Talk to a mentor</span>
            </span>
            <CalendarCheck className="size-5 shrink-0 transition-transform group-hover:scale-110" />
          </a>
        </div>
      )}
    </>
  );
}
