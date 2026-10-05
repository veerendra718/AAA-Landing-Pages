import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Building2,
  Check,
  ClipboardCheck,
  Gift,
  LineChart,
  MonitorPlay,
  Sparkles,
  Tag,
  Trophy,
  UserCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { AppPreviewCard } from "@/components/landing/AppPreviewCard";
import {
  appFeatureGroups,
  formatComparison,
  onlineCourses,
  onlineHead,
  onlinePackages,
  onlinePlans,
  onlineSteps,
} from "@/components/landing/courses-data";
import { academy, registerUrl } from "@/components/landing/data";
import { PageShell } from "@/components/landing/PageShell";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { cn } from "@/lib/utils";

// In the order `appFeatureGroups` lists them: learn, practise, improve, stay on track.
const groupIcons = [MonitorPlay, ClipboardCheck, LineChart, Trophy];

const tierNames = { free: "Free", standard: "Standard", advanced: "Advanced" } as const;

const formatPrice = (rupees: number) =>
  rupees === 0 ? "Free" : `₹${rupees.toLocaleString("en-IN")}`;

const highlights = [
  { icon: UserCheck, text: "Same faculty as the classroom" },
  { icon: MonitorPlay, text: "Live classes + video lectures" },
  { icon: Gift, text: "Free plan · 7-day trial of paid plans" },
];

/**
 * Online courses — the "Online Courses" header menu's hub, beside the classroom
 * hub at /landing/courses. Details of the app (feature names, the Free /
 * Standard / Advanced plans, the 7-day trial, how sign-up works) are taken from
 * the AAA Lakshya app itself. Package prices come from the app's catalogue (see
 * `onlinePackages`); quotas are configured by the academy, so none are quoted.
 */
export default function CoursesOnline() {
  return (
    <PageShell title={onlineHead.title} subtitle={onlineHead.note}>
      {/* Highlights + primary action */}
      <div className="px-4 pt-2 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-3xl border border-brand-border-light bg-white p-5 md:flex-row md:items-center md:justify-between md:p-6">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {highlights.map((h) => (
              <li key={h.text} className="flex items-center gap-2 text-sm font-medium text-brand-text-secondary">
                <span className="flex size-8 items-center justify-center rounded-lg bg-brand-subtle-bg text-brand-primary">
                  <h.icon className="size-4" />
                </span>
                {h.text}
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="shrink-0">
            <Link href={registerUrl}>
              Start free <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>

      {/* Courses */}
      <section className="px-4 py-14 md:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            align="left"
            eyebrow="Choose your course"
            title="Four courses, taught live online"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {onlineCourses.map((c) => (
              <article
                key={c.slug}
                id={c.slug}
                className="group flex scroll-mt-24 flex-col overflow-hidden rounded-3xl border border-brand-border-light bg-white transition-all hover:border-brand-border-teal hover:shadow-[0_24px_50px_-24px_rgba(0,83,91,0.4)]"
              >
                <div className="relative aspect-[16/8] overflow-hidden">
                  <Image
                    src={c.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 600px, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-brand-primary px-3 py-1 text-xs font-bold text-white shadow">
                    <MonitorPlay className="size-3.5" /> Live online
                  </span>
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand-primary-darker shadow">
                    {c.eyebrow}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-(family-name:--font-display) text-2xl font-bold text-brand-primary-darker">
                    {c.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-text-muted">
                    Live classes with the faculty who teach the {c.label} batches at Vijayanagar —
                    plus video lectures, tests and analytics in {academy.appName}.
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Prepares for">
                    {c.exams.map((e) => (
                      <li
                        key={e}
                        className="rounded-full bg-brand-subtle-bg px-3 py-1 text-xs font-semibold text-brand-primary-darker"
                      >
                        {e}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                    <Button asChild>
                      <Link href={registerUrl}>
                        Start free <ArrowRight />
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/landing/contact#enquire">Talk to a mentor</Link>
                    </Button>
                    <Link
                      href={c.classroomHref}
                      className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-primary-darker"
                    >
                      <Building2 className="size-4" /> Classroom version
                    </Link>
                  </div>
                </div>
              </article>
            ))}
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

      {/* Plans */}
      <section id="plans" className="scroll-mt-24 px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Plans"
            title="Start free. Upgrade when you're ready."
            subtitle="Every plan runs in the same app. The price depends on your course — see the packages below — and paid plans come with a 7-day free trial."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {onlinePlans.map((plan) => (
              <div
                key={plan.id}
                className={cn(
                  "relative flex flex-col rounded-3xl border bg-white p-6 md:p-7",
                  plan.highlight
                    ? "border-brand-primary shadow-[0_24px_50px_-24px_rgba(0,83,91,0.45)]"
                    : "border-brand-border-light",
                )}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-6 flex items-center gap-1 rounded-full bg-brand-primary px-3 py-1 text-xs font-bold text-white">
                    <Sparkles className="size-3.5" /> Most complete
                  </span>
                )}
                <p className="font-(family-name:--font-display) text-2xl font-bold text-brand-primary-darker">
                  {plan.name}
                </p>
                <p className="mt-1 text-sm font-semibold text-brand-primary">{plan.note}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-brand-text-secondary">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-success-bg text-brand-success">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild variant={plan.highlight ? "default" : "outline"} className="mt-7 w-full">
                  <Link href={registerUrl}>
                    {plan.id === "free" ? "Sign up free" : "Start 7-day trial"}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages & prices */}
      <section id="prices" className="scroll-mt-24 bg-brand-page-bg px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Packages & prices"
            title="What each course costs"
            subtitle="Prices are what you pay, GST included. Every package has a free plan to start with."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {onlinePackages.map((pkg) => (
              <article
                key={pkg.name}
                className="flex flex-col rounded-3xl border border-brand-border-light bg-white p-6"
              >
                <h3 className="font-(family-name:--font-display) text-xl font-bold text-brand-primary-darker">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-text-muted">
                  Batch · {pkg.batch}
                </p>
                <dl className="mt-5 flex-1 divide-y divide-brand-border-light border-t border-brand-border-light">
                  {pkg.tiers.map((t) => (
                    <div key={t.id} className="flex items-center justify-between gap-3 py-3">
                      <dt className="text-sm font-medium text-brand-text-secondary">{tierNames[t.id]}</dt>
                      <dd className="flex items-center gap-2">
                        {t.onSale && (
                          <span className="flex items-center gap-1 rounded-full bg-brand-success-bg px-2 py-0.5 text-[11px] font-bold text-brand-success">
                            <Tag className="size-3" /> Sale
                          </span>
                        )}
                        <span className="text-base font-bold text-brand-text-primary">{formatPrice(t.price)}</span>
                      </dd>
                    </div>
                  ))}
                </dl>
                <Button asChild variant="outline" className="mt-5 w-full">
                  <Link href={registerUrl}>
                    Start free <ArrowRight />
                  </Link>
                </Button>
              </article>
            ))}
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
