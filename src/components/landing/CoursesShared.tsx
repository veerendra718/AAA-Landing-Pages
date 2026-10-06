import { coursesHead } from "./courses-data";
import { academy } from "./data";
import { ClassPicker, OnlineHighlights } from "./OnlinePackages";
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
            subtitle={`The same courses as online, taught in the classroom — one price per course, with the ${academy.appName} app Advanced plan access.`}
          />
          <div className="mt-10">
            <ClassPicker mode="classroom" />
          </div>
        </div>
      </section>

    </PageShell>
  );
}
