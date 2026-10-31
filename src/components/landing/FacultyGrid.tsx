"use client";

import { GraduationCap } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { facultyMembers } from "./about-data";
import { FacultyPhoto } from "./FacultyPhoto";

const faculty = facultyMembers;
// The subjects in the order the list first names them.
const subjects = [...new Set(faculty.map((f) => f.subject))];

/**
 * The faculty, filterable by subject. Each card is the photo, subject, name
 * and qualification.
 */
export function FacultyGrid() {
  const [subject, setSubject] = useState<string>("all");
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
                <FacultyPhoto member={f} sizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 100vw" />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[11px] font-bold text-brand-primary shadow">
                  {f.subject}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-lg font-semibold text-brand-text-primary">{f.name}</p>
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
