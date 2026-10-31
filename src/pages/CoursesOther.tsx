import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AdmissionSteps } from "@/components/landing/ClassPackagesPage";
import { classroomClasses, otherCoursesPage } from "@/components/landing/courses-data";
import { OtherClassroomCourses } from "@/components/landing/OnlinePackages";
import { PageShell } from "@/components/landing/PageShell";

/** The classroom courses outside the Class 11 & 12 packages, with their fees. */
export default function CoursesOther() {
  return (
    <PageShell title={otherCoursesPage.title} subtitle={otherCoursesPage.note}>
      <OtherClassroomCourses />

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
