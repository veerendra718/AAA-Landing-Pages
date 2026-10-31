import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AdmissionSteps } from "@/components/landing/ClassPackagesPage";
import { classroomClasses, class910Page } from "@/components/landing/courses-data";
import { Class910Courses } from "@/components/landing/OnlinePackages";
import { PageShell } from "@/components/landing/PageShell";

/** The Class 9 & 10 classroom courses, with their fees. */
export default function CoursesClass910() {
  return (
    <PageShell title={class910Page.title} subtitle={class910Page.note}>
      <Class910Courses />

      <div className="bg-brand-page-bg">
        <AdmissionSteps />
      </div>

      <div className="px-4 py-14 md:px-6">
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
          {classroomClasses.map((c) => (
            <Link
              key={c.id}
              href={c.href}
              className="group flex items-center justify-between gap-4 rounded-3xl border border-brand-border-light bg-white p-6 card-hover"
            >
              <span>
                <span className="block text-sm font-bold uppercase tracking-wide text-brand-primary">{c.title}</span>
                <span className="mt-1 block text-brand-text-secondary">
                  {c.course} for KCET, NEET, JEE Main and JEE Advanced.
                </span>
              </span>
              <ArrowRight className="size-5 shrink-0 text-brand-primary transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
