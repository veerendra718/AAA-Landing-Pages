"use client";

import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { facultyMembers } from "./about-data";

type Subject = "Physics" | "Chemistry" | "Mathematics" | "Biology" | "Engineering";

/** The subject a faculty member teaches, read from their role as the academy
 *  words it ("Senior Faculty, Chemistry", "Faculty, IIT-JEE Mathematics"). */
function subjectOf(role: string): Subject {
  if (/physics/i.test(role)) return "Physics";
  if (/chemistry/i.test(role)) return "Chemistry";
  if (/math/i.test(role)) return "Mathematics";
  if (/bio/i.test(role)) return "Biology";
  return "Engineering";
}

const faculty = facultyMembers.map((f) => ({ ...f, subject: subjectOf(f.role) }));
const subjects = (["Physics", "Chemistry", "Mathematics", "Biology", "Engineering"] as const).filter(
  (s) => faculty.some((f) => f.subject === s),
);

/**
 * The faculty, filterable by subject. Each card is only the photo, name,
 * designation and qualification — no biography.
 */
export function FacultyGrid() {
  const [subject, setSubject] = useState<Subject | "all">("all");
  const shown = subject === "all" ? faculty : faculty.filter((f) => f.subject === subject);

  const chip = (active: boolean) =>
    cn(
      "shrink-0 rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors",
      active
        ? "border-brand-primary bg-brand-primary text-white"
        : "border-brand-border-light bg-white text-brand-text-secondary hover:border-brand-border-teal hover:text-brand-primary",
    );

  return (
    <>
      <div
        role="group"
        aria-label="Filter faculty by subject"
        className="mt-10 flex justify-start gap-2 overflow-x-auto pb-1 [scrollbar-width:none] sm:justify-center"
      >
        <button type="button" aria-pressed={subject === "all"} onClick={() => setSubject("all")} className={chip(subject === "all")}>
          All <span className="opacity-70">({faculty.length})</span>
        </button>
        {subjects.map((s) => (
          <button key={s} type="button" aria-pressed={subject === s} onClick={() => setSubject(s)} className={chip(subject === s)}>
            {s}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {shown.map((f) => {
          return (
            <article
              key={f.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-brand-border-light bg-white card-hover"
            >
              <div className="relative aspect-[4/5] bg-brand-subtle-bg">
                <Image
                  src={f.image}
                  alt={f.name}
                  fill
                  sizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 100vw"
                  className="object-cover object-top"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[11px] font-bold text-brand-primary shadow">
                  {f.subject}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-lg font-semibold text-brand-text-primary">{f.name}</p>
                <p className="text-sm font-medium text-brand-primary">{f.role}</p>
                <p className="mt-3 flex gap-2 text-xs leading-relaxed text-brand-text-muted">
                  <GraduationCap className="size-4 shrink-0 text-brand-primary" />
                  {f.qualification}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
