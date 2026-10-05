"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Building2,
  ClipboardCheck,
  Flame,
  LineChart,
  NotebookPen,
  PlayCircle,
  Smartphone,
  Sparkles,
  Trophy,
  UserCheck,
  Users,
} from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { academy, academyWeek, loginUrl } from "./data";
import { SectionHeading } from "./SectionHeading";

/**
 * Classroom + AAA Lakshya, for V2. The week loop shows where the app sits
 * between classes; below it, the app's real features (named as the app names
 * them — My Tests, Detailed Analysis, Predictions, My Mistakes, Recommendations,
 * Recordings, Notes) each drive a phone mock-up drawn in code, so the page shows
 * the product without screenshots that go stale. The screens hold sample data
 * and say so.
 */

const features = [
  {
    id: "tests",
    icon: ClipboardCheck,
    title: "Exam-pattern tests",
    body: "Fortnightly JEE, NEET and KCET-pattern tests, timed like the real exam, with solutions the moment you submit.",
  },
  {
    id: "analysis",
    icon: LineChart,
    title: "Analysis & predicted score",
    body: "Subject, topic and difficulty-wise analysis after every test, a predicted exam score, and where you stand in your batch.",
  },
  {
    id: "mistakes",
    icon: NotebookPen,
    title: "Mistake book → custom tests",
    body: "Every wrong answer is saved. Turn them into a custom test and fix them before the exam finds them.",
  },
  {
    id: "classes",
    icon: PlayCircle,
    title: "Recordings & notes",
    body: "Missed a class or lost the thread? Watch the recording and read the notes — same teacher, same board.",
  },
  {
    id: "smart",
    icon: Sparkles,
    title: "What to study next",
    body: "Recommended chapters, questions and videos from your weak topics — or a Smart Test built from them.",
  },
] as const;

type FeatureId = (typeof features)[number]["id"];

const forParents = [
  { icon: UserCheck, title: "Registered as guardians", body: "Parents are added at sign-up, so they're never out of the loop." },
  { icon: LineChart, title: "Every report in one place", body: "Test scores, topic analysis and attendance — not just a rank on paper." },
  { icon: Users, title: "Monthly parent–teacher meeting", body: "A mentor walks you through the reports and the plan for next month." },
];

export function AppShowcase({ id = "app" }: { id?: string }) {
  const [active, setActive] = useState<FeatureId>("tests");

  return (
    <section id={id} className="scroll-mt-20 bg-brand-page-bg py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow={`Classroom + ${academy.appName}`}
          title="What's taught in class keeps going at home"
          subtitle={`${academy.appName} isn't a separate course. It comes with every classroom programme, so practice, tests and revision carry on between classes — and nothing your teacher explains is lost.`}
        />

        <WeekLoop />

        {/* Feature list driving the phone */}
        <div className="mt-16 grid items-center gap-10 rounded-[32px] border border-brand-border-light bg-white p-5 sm:p-8 lg:grid-cols-[1.1fr_auto] lg:gap-16 lg:p-12">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-brand-subtle-bg px-3 py-1 text-xs font-semibold text-brand-primary">
              <Smartphone className="size-3.5" /> Included for every enrolled student · web & mobile
            </p>
            <h3 className="mt-4 font-(family-name:--font-display) text-2xl font-bold text-brand-primary-darker md:text-3xl">
              Inside {academy.appName}
            </h3>

            <div role="tablist" aria-label="App features" aria-orientation="vertical" className="mt-6 space-y-2">
              {features.map((f) => {
                const on = active === f.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    role="tab"
                    id={`app-tab-${f.id}`}
                    aria-selected={on}
                    aria-controls="app-screen"
                    onClick={() => setActive(f.id)}
                    onMouseEnter={() => setActive(f.id)}
                    className={cn(
                      "flex w-full cursor-pointer gap-4 rounded-2xl border p-4 text-left transition-all",
                      on
                        ? "border-brand-border-teal bg-brand-subtle-bg/60 shadow-sm"
                        : "border-transparent hover:bg-brand-page-bg",
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors",
                        on ? "bg-brand-primary text-white" : "bg-brand-primary/10 text-brand-primary",
                      )}
                    >
                      <f.icon className="size-5" />
                    </span>
                    <span>
                      <span className="block font-semibold text-brand-text-primary">{f.title}</span>
                      <span
                        className={cn(
                          "mt-0.5 block text-sm leading-relaxed text-brand-text-muted",
                          !on && "max-lg:line-clamp-1",
                        )}
                      >
                        {f.body}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 px-1 text-xs text-brand-text-muted">
              <span className="flex items-center gap-1.5">
                <Flame className="size-3.5 text-brand-warning" /> Streaks
              </span>
              <span className="flex items-center gap-1.5">
                <Trophy className="size-3.5 text-brand-primary" /> Badges & leaderboard
              </span>
              <span>Rewards for steady practice</span>
            </p>
          </div>

          <div className="flex flex-col items-center">
            <PhoneFrame>
              <div id="app-screen" role="tabpanel" aria-labelledby={`app-tab-${active}`} className="h-full">
                <Screen id={active} />
              </div>
            </PhoneFrame>
            <p className="mt-4 text-[11px] text-brand-text-muted">Illustrative screens with sample data</p>
          </div>
        </div>

        {/* For parents */}
        <div className="mt-8 grid gap-6 rounded-[32px] bg-brand-primary-darker p-6 text-white sm:p-8 lg:grid-cols-[0.9fr_2fr] lg:items-center lg:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[2px] text-brand-secondary">For parents</p>
            <p className="mt-2 font-(family-name:--font-display) text-2xl font-bold leading-snug md:text-3xl">
              See the progress before the results do.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-3">
            {forParents.map((p) => (
              <li key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p.icon className="size-5 text-brand-secondary" />
                <p className="mt-3 font-semibold">{p.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-white/70">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 text-center text-sm text-brand-text-muted">
          Already enrolled?{" "}
          <Link href={loginUrl} className="inline-flex items-center gap-1 font-semibold text-brand-primary hover:text-brand-primary-darker">
            Log in to {academy.appName} <ArrowRight className="size-3.5" />
          </Link>
        </p>
      </div>
    </section>
  );
}

/** One typical week, alternating between the centre and the app. */
function WeekLoop() {
  return (
    <div className="mt-14">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm font-bold uppercase tracking-[2px] text-brand-primary-darker">A week at Arjunaa</p>
        <div className="flex items-center gap-4 text-xs text-brand-text-muted">
          <span className="flex items-center gap-1.5">
            <span className="size-3 rounded-full bg-brand-primary" /> In class
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-3 rounded-full border-2 border-brand-primary bg-white" /> In {academy.appName}
          </span>
        </div>
      </div>
      <ol className="relative mt-6 grid gap-3 lg:grid-cols-5 lg:before:absolute lg:before:left-[10%] lg:before:right-[10%] lg:before:top-7 lg:before:h-px lg:before:bg-brand-border-teal">
        {academyWeek.map((s, i) => {
          const atCentre = s.where === "centre";
          return (
            <li
              key={s.title}
              className="relative flex gap-4 rounded-2xl bg-white p-4 lg:flex-col lg:items-center lg:gap-3 lg:bg-transparent lg:p-0 lg:text-center"
            >
              <span
                className={cn(
                  "relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl ring-4 ring-brand-page-bg",
                  atCentre ? "bg-brand-primary text-white" : "border-2 border-brand-primary bg-white text-brand-primary",
                )}
              >
                {atCentre ? <Building2 className="size-6" /> : <Smartphone className="size-6" />}
              </span>
              <div className="lg:w-full lg:flex-1 lg:rounded-2xl lg:bg-white lg:p-4">
                <p className="text-[11px] font-bold uppercase tracking-wide text-brand-primary">
                  {i + 1} · {atCentre ? "In class" : "In the app"}
                </p>
                <p className="mt-0.5 font-semibold text-brand-text-primary">{s.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-brand-text-muted">{s.body}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function PhoneFrame({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative w-[272px] shrink-0 rounded-[44px] bg-brand-text-primary p-2.5 shadow-[0_40px_80px_-30px_rgba(0,83,91,0.55)] sm:w-[288px]",
        className,
      )}
    >
      <div className="relative h-[540px] overflow-hidden rounded-[36px] bg-brand-page-bg sm:h-[572px]">
        <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-brand-text-primary" />
        {children}
      </div>
    </div>
  );
}

function AppBar({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="bg-brand-primary px-4 pb-4 pt-10 text-white">
      <div className="flex items-center justify-between text-[10px] text-white/70">
        <span className="font-bold tracking-wide">{academy.appName.toUpperCase()}</span>
        <span className="flex size-6 items-center justify-center rounded-full bg-white/20 text-[10px] font-bold">A</span>
      </div>
      <p className="mt-2 text-base font-bold leading-tight">{title}</p>
      {sub && <p className="mt-0.5 text-[11px] text-white/75">{sub}</p>}
    </div>
  );
}

const card = "rounded-xl bg-white p-3 shadow-sm ring-1 ring-brand-border-light";

function Screen({ id }: { id: FeatureId }) {
  switch (id) {
    case "tests":
      return (
        <>
          <AppBar title="My Tests" sub="JEE Main · Class 12 batch" />
          <div className="space-y-2.5 p-3">
            <div className={cn(card, "border-l-4 border-brand-primary")}>
              <p className="text-[10px] font-bold uppercase text-brand-primary">Due Saturday</p>
              <p className="mt-0.5 text-sm font-bold text-brand-text-primary">Fortnightly Test #15</p>
              <p className="text-[11px] text-brand-text-muted">JEE Main pattern · 75 Qs · 3 hrs</p>
              <span className="mt-2 inline-block rounded-lg bg-brand-primary px-3 py-1 text-[11px] font-semibold text-white">
                Start test
              </span>
            </div>
            <div className={card}>
              <p className="text-[10px] font-bold uppercase text-brand-text-muted">Last result · Test #14</p>
              <div className="mt-1 flex items-end justify-between">
                <p className="text-2xl font-bold text-brand-text-primary">
                  212<span className="text-sm font-medium text-brand-text-muted">/300</span>
                </p>
                <p className="text-xs font-bold text-brand-success">▲ 26 vs #13</p>
              </div>
              <div className="mt-2 grid grid-cols-3 gap-1.5 text-center text-[10px]">
                {[
                  ["Physics", "68"],
                  ["Chemistry", "81"],
                  ["Maths", "63"],
                ].map(([s, v]) => (
                  <div key={s} className="rounded-lg bg-brand-page-bg py-1.5">
                    <p className="font-bold text-brand-text-primary">{v}</p>
                    <p className="text-brand-text-muted">{s}</p>
                  </div>
                ))}
              </div>
            </div>
            {[
              ["Chapter test · Rotation", "Hard", "bg-brand-hard-bg text-brand-hard-text"],
              ["DPP · Electrostatics", "Medium", "bg-brand-medium-bg text-brand-medium-text"],
              ["PYQ · JEE Main 2025 Shift 1", "Mixed", "bg-brand-easy-bg text-brand-easy-text"],
            ].map(([t, d, c]) => (
              <div key={t} className={cn(card, "flex items-center justify-between")}>
                <p className="text-xs font-semibold text-brand-text-primary">{t}</p>
                <span className={cn("rounded-full px-2 py-0.5 text-[9px] font-bold", c)}>{d}</span>
              </div>
            ))}
          </div>
        </>
      );
    case "analysis":
      return (
        <>
          <AppBar title="Detailed analysis" sub="Fortnightly Test #14" />
          <div className="space-y-2.5 p-3">
            <div className={cn(card, "flex items-center gap-3")}>
              <div className="flex size-14 shrink-0 items-center justify-center rounded-full border-[5px] border-brand-primary border-r-brand-subtle-bg text-sm font-bold text-brand-primary-darker">
                96.4
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-brand-text-muted">Predicted percentile</p>
                <p className="text-xs text-brand-text-secondary">Based on your last 5 tests</p>
                <p className="mt-0.5 text-[11px] font-semibold text-brand-success">Improving ↑</p>
              </div>
            </div>
            <div className={card}>
              <p className="text-[10px] font-bold uppercase text-brand-text-muted">Subject-wise accuracy</p>
              {[
                ["Chemistry", 81],
                ["Physics", 68],
                ["Maths", 63],
              ].map(([s, v]) => (
                <div key={s} className="mt-2">
                  <div className="flex justify-between text-[11px]">
                    <span className="font-medium text-brand-text-secondary">{s}</span>
                    <span className="font-bold text-brand-text-primary">{v}%</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-brand-subtle-bg">
                    <div className="h-full rounded-full bg-brand-primary" style={{ width: `${v}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className={card}>
              <p className="text-[10px] font-bold uppercase text-brand-text-muted">Topics needing attention</p>
              <div className="mt-2 grid grid-cols-2 gap-1.5">
                {[
                  ["Waves", 33, "bg-brand-hard-bg text-brand-hard-text"],
                  ["Rotation", 41, "bg-brand-medium-bg text-brand-medium-text"],
                  ["Integration", 48, "bg-brand-medium-bg text-brand-medium-text"],
                  ["Kinematics", 86, "bg-brand-primary text-white"],
                ].map(([t, v, c]) => (
                  <div key={t as string} className={cn("rounded-lg px-2 py-1.5", c as string)}>
                    <p className="truncate text-[10px] font-medium opacity-90">{t}</p>
                    <p className="text-xs font-bold">{v}%</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={cn(card, "flex items-center justify-between")}>
              <p className="text-[11px] text-brand-text-secondary">Batch rank</p>
              <p className="text-sm font-bold text-brand-primary-darker">4 of 28</p>
            </div>
          </div>
        </>
      );
    case "mistakes":
      return (
        <>
          <AppBar title="My Mistakes" sub="24 questions to revise" />
          <div className="space-y-2 p-3">
            {[
              ["Physics", "Rotation", "Torque about a non-centre point"],
              ["Physics", "Waves", "Beat frequency of two tuning forks"],
              ["Chemistry", "Organic", "SN1 vs SN2 — which product?"],
              ["Maths", "Integration", "Definite integral by parts"],
              ["Chemistry", "Equilibrium", "Kp from degree of dissociation"],
            ].map(([s, t, q]) => (
              <div key={q} className={card}>
                <div className="flex items-center gap-1.5">
                  <span className="rounded bg-brand-hard-bg px-1.5 py-0.5 text-[9px] font-bold text-brand-hard-text">✕ Wrong</span>
                  <span className="text-[10px] font-semibold text-brand-primary">
                    {s} · {t}
                  </span>
                </div>
                <p className="mt-1 text-xs font-medium text-brand-text-primary">{q}</p>
              </div>
            ))}
            <div className="rounded-xl bg-brand-primary p-3 text-center text-white shadow">
              <p className="text-xs font-bold">Create a test from my mistakes</p>
              <p className="text-[10px] text-white/75">24 questions · ~40 min</p>
            </div>
          </div>
        </>
      );
    case "classes":
      return (
        <>
          <AppBar title="Recordings & notes" sub="From your classes this week" />
          <div className="space-y-2.5 p-3">
            <div className="relative overflow-hidden rounded-xl bg-brand-primary-darker p-3 text-white">
              <p className="text-[10px] font-bold uppercase text-brand-secondary">Continue watching</p>
              <p className="mt-1 text-sm font-bold">Rotational dynamics — torque</p>
              <p className="text-[11px] text-white/70">Physics · 52 min</p>
              <div className="mt-2 h-1 rounded-full bg-white/20">
                <div className="h-full w-[62%] rounded-full bg-brand-secondary" />
              </div>
              <PlayCircle className="absolute right-3 top-3 size-8 text-white/80" />
            </div>
            {[
              ["Chemistry", "Chemical equilibrium — Le Chatelier", "47 min", 100],
              ["Maths", "Definite integrals — properties", "58 min", 35],
              ["Biology", "Plant kingdom — classification", "44 min", 0],
            ].map(([s, t, d, p]) => (
              <div key={t as string} className={cn(card, "flex gap-3")}>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-subtle-bg text-brand-primary">
                  <PlayCircle className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold text-brand-primary">{s}</p>
                  <p className="truncate text-xs font-semibold text-brand-text-primary">{t}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="h-1 flex-1 rounded-full bg-brand-subtle-bg">
                      <div className="h-full rounded-full bg-brand-primary" style={{ width: `${p}%` }} />
                    </div>
                    <span className="text-[9px] text-brand-text-muted">{d}</span>
                  </div>
                </div>
              </div>
            ))}
            <div className={cn(card, "flex items-center gap-3")}>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-info-bg text-brand-info">
                <BookOpenText className="size-5" />
              </span>
              <div>
                <p className="text-xs font-semibold text-brand-text-primary">Class notes · Rotation</p>
                <p className="text-[10px] text-brand-text-muted">PDF · 14 pages</p>
              </div>
            </div>
          </div>
        </>
      );
    case "smart":
      return (
        <>
          <AppBar title="Recommended for you" sub="From your last 3 tests" />
          <div className="space-y-2.5 p-3">
            <div className="rounded-xl bg-linear-to-br from-brand-primary to-brand-hero-teal p-3 text-white shadow">
              <p className="flex items-center gap-1 text-[10px] font-bold uppercase text-brand-secondary-light">
                <Sparkles className="size-3" /> Smart Test
              </p>
              <p className="mt-1 text-sm font-bold">20 questions from your 3 weakest topics</p>
              <p className="text-[11px] text-white/80">Waves · Rotation · Integration</p>
              <span className="mt-2 inline-block rounded-lg bg-white px-3 py-1 text-[11px] font-semibold text-brand-primary">
                Start · 30 min
              </span>
            </div>
            {[
              ["Chapter", "Waves — revise superposition", "Accuracy 33%"],
              ["Questions", "15 practice questions · Rotation", "Medium"],
              ["Video", "Integration by parts, step by step", "12 min"],
            ].map(([k, t, m]) => (
              <div key={t} className={card}>
                <p className="text-[10px] font-bold uppercase text-brand-primary">{k}</p>
                <p className="mt-0.5 text-xs font-semibold text-brand-text-primary">{t}</p>
                <p className="text-[10px] text-brand-text-muted">{m}</p>
              </div>
            ))}
            <div className={cn(card, "flex items-center justify-between")}>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-brand-text-primary">
                <Flame className="size-4 text-brand-warning" /> 12-day streak
              </span>
              <span className="text-[10px] text-brand-text-muted">Keep it going</span>
            </div>
          </div>
        </>
      );
  }
}


/** The analysis screen in a phone, for the hero's classroom + app picture. */
export function HeroPhone({ className }: { className?: string }) {
  return (
    <PhoneFrame className={className}>
      <Screen id="analysis" />
    </PhoneFrame>
  );
}
