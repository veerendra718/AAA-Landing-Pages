import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Building2,
  ClipboardCheck,
  LineChart,
  MonitorPlay,
  Trophy,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { AppPreviewCard } from "@/components/landing/AppPreviewCard";
import {
  appFeatureGroups,
  formatComparison,
  onlineHead,
  onlineSteps,
} from "@/components/landing/courses-data";
import { academy, registerUrl } from "@/components/landing/data";
import { ClassPicker, OnlineHighlights } from "@/components/landing/OnlinePackages";
import { PageShell } from "@/components/landing/PageShell";
import { SectionHeading } from "@/components/landing/SectionHeading";

// In the order `appFeatureGroups` lists them: learn, practise, improve, stay on track.
const groupIcons = [MonitorPlay, ClipboardCheck, LineChart, Trophy];

/**
 * Online courses — the "Online Courses" header menu's hub, beside the classroom
 * hub at /landing/courses. The packages themselves live on one page per class
 * (/landing/courses/online/class-11 and class-12); this page sends a student
 * to their class and explains what every package includes. Details of the app
 * (feature names, the plans, the 7-day trial, how sign-up works) are taken
 * from the AAA app itself.
 */
export default function CoursesOnline() {
  return (
    <PageShell title={onlineHead.title} subtitle={onlineHead.note}>
      <OnlineHighlights jumpHref="#classes" jumpLabel="Choose your class" />

      {/* Choose your class */}
      <section id="classes" className="scroll-mt-24 px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Choose your class"
            title="Which class are you in?"
            subtitle="Each class has its own courses and prices. Pick yours to see them."
          />
          <div className="mt-10">
            <ClassPicker mode="online" />
          </div>
        </div>
      </section>

      {/* Inside the app */}
      <section className="bg-brand-page-bg px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow={`Inside ${academy.appName}`}
              title="Everything an online student gets"
              subtitle="The same app classroom students use — live classes, every kind of test, and a clear picture of what to fix next."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {appFeatureGroups.map((g, i) => {
                const Icon = groupIcons[i] ?? BookOpenText;
                return (
                  <div key={g.title} className="rounded-2xl border border-brand-border-light bg-white p-5">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-xl bg-brand-primary text-white">
                        <Icon className="size-5" />
                      </span>
                      <p className="font-semibold text-brand-text-primary">{g.title}</p>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-brand-text-muted">{g.body}</p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {g.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full bg-brand-subtle-bg px-2.5 py-0.5 text-xs font-medium text-brand-primary-darker"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <AppPreviewCard className="max-w-sm" />
          </div>
        </div>
      </section>

      {/* How to start */}
      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="How to start" title="Up and running in three steps" />
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {onlineSteps.map((s, i) => (
              <li key={s.title} className="flex gap-4 rounded-2xl border border-brand-border-light bg-white p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-primary font-(family-name:--font-display) text-lg font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-brand-text-primary">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-text-muted">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Classroom or online */}
      <section className="bg-brand-page-bg px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Classroom or online?" title="The same teaching, two ways" />
          <div className="mt-10 overflow-x-auto rounded-3xl border border-brand-border-light bg-white">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="border-b border-brand-border-light bg-brand-page-bg">
                  <th scope="col" className="w-1/4 px-5 py-4" />
                  <th scope="col" className="px-5 py-4 font-semibold text-brand-primary-darker">
                    <span className="flex items-center gap-2">
                      <Building2 className="size-4 text-brand-primary" /> Classroom
                    </span>
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold text-brand-primary-darker">
                    <span className="flex items-center gap-2">
                      <MonitorPlay className="size-4 text-brand-primary" /> Online
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {formatComparison.map((r) => (
                  <tr key={r.label} className="border-b border-brand-border-light last:border-b-0">
                    <th scope="row" className="px-5 py-4 font-semibold text-brand-text-primary">
                      {r.label}
                    </th>
                    <td className="px-5 py-4 text-brand-text-secondary">{r.classroom}</td>
                    <td className="px-5 py-4 text-brand-text-secondary">{r.online}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href={registerUrl}>
                Start online free <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/landing/courses">
                <Building2 /> See classroom courses
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
