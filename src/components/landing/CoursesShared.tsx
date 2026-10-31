import { classroomExtras, coursesHead } from "./courses-data";
import { ClassPicker, OnlineHighlights, OtherClassroomCourses } from "./OnlinePackages";
import { PageShell } from "./PageShell";
import { SectionHeading } from "./SectionHeading";

/** The Classroom Courses hub: the Class 11 and Class 12 packages. */
export function CoursesOverview() {
  return (
    <PageShell
      title={coursesHead.title}
      subtitle={coursesHead.note}
    >
      <OnlineHighlights jumpHref="#classes" jumpLabel="Choose your class" mode="classroom" />

      {/* Packages by class */}
      <section id="classes" className="scroll-mt-24 px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Choose your class"
            title="Which class are you in?"
            subtitle={`Siddhartha, Saadhaka, Shushrutha and Shreshta, taught in the classroom — one fee per course, per annum, + ${classroomExtras}.`}
          />
          <div className="mt-10">
            <ClassPicker mode="classroom" />
          </div>
        </div>
      </section>

      <div className="bg-brand-page-bg">
        <OtherClassroomCourses />
      </div>
    </PageShell>
  );
}
