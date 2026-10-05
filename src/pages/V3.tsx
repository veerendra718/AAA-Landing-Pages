import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookMarked,
  Brain,
  Crown,
  Flame,
  Gift,
  LineChart,
  Medal,
  Timer,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { AppPreviewCard } from "@/components/landing/AppPreviewCard";
import { CentreSection } from "@/components/landing/CentreSection";
import { academy, registerUrl } from "@/components/landing/data";
import { FaqSection } from "@/components/landing/FaqSection";
import { FloatingContact } from "@/components/landing/FloatingContact";
import { GoalStart } from "@/components/landing/GoalStart";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingNav } from "@/components/landing/LandingNav";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { StatsBand } from "@/components/landing/StatsBand";
import { Testimonials } from "@/components/landing/Testimonials";
import { ToppersSection } from "@/components/landing/ToppersSection";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "AAA Lakshya by Arjunaa Academy | Personalised JEE, NEET & KCET practice",
  description:
    "Exam-pattern tests, topic-wise mastery and a mistake book that tells you exactly what to study next — backed by Arjunaa Academy's classrooms.",
};

const links = [
  { href: "#how", label: "How it works" },
  { href: "#rewards", label: "Rewards" },
  { href: "#results", label: "Results" },
  { href: "#centre", label: "Classroom" },
  { href: "#faq", label: "FAQ" },
];

const pillars = [
  {
    icon: Timer,
    kicker: "Practise",
    title: "Tests that feel like exam day",
    body: "Full-screen, timed tests in the exact JEE, NEET and KCET patterns — with negative marking, sections and instant solutions.",
    image: "/images/landing/a-walkthrough.jpg",
    alt: "Student taking a test on a tablet",
  },
  {
    icon: Brain,
    kicker: "Understand",
    title: "See every topic, not just a score",
    body: "After each test, your mastery map updates topic by topic, so you know which chapter is costing you marks.",
    preview: true,
  },
  {
    icon: BookMarked,
    kicker: "Revise",
    title: "A mistake book that fills itself",
    body: "Every wrong answer lands in your mistake book with the solution — revise them before the next test and watch them disappear.",
    image: "/images/landing/b-walkthrough.jpg",
    alt: "Student reviewing mistakes in the app",
  },
];

// DUMMY leaderboard.
const leaders = [
  { name: "Ananya R.", xp: 4820 },
  { name: "Karthik S.", xp: 4610 },
  { name: "You", xp: 4395, you: true },
  { name: "Meghana V.", xp: 4210 },
];

export default function LandingV3() {
  return (
    <div id="top">
      <LandingNav links={links} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,var(--brand-subtle-bg)_0%,transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(10,124,133,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,124,133,0.06)_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className="relative mx-auto max-w-5xl px-4 pb-10 pt-16 text-center md:px-6 md:pt-24">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-border-teal bg-white px-3 py-1 text-xs font-semibold text-brand-primary">
            <Zap className="size-3.5" /> {academy.appName} · by {academy.name}
          </p>
          <h1 className="mx-auto mt-6 max-w-4xl font-(family-name:--font-display) text-4xl font-bold leading-[1.05] tracking-tight text-brand-primary-darker text-balance sm:text-6xl lg:text-7xl">
            Crack JEE, NEET &amp; KCET with practice that{" "}
            <span className="relative whitespace-nowrap text-brand-primary">
              knows you
              <svg viewBox="0 0 200 12" className="absolute -bottom-2 left-0 h-3 w-full text-brand-warning" preserveAspectRatio="none" aria-hidden>
                <path d="M2 9 Q 100 1 198 7" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            .
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-text-muted">
            Every test tells {academy.appName} which topics you&apos;ve mastered
            and which are costing you marks — then it tells you what to do next.
          </p>
          <div className="mt-10">
            <GoalStart />
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-20 md:px-6">
          <div className="relative mx-auto aspect-[16/8] max-w-5xl overflow-hidden rounded-[28px] border border-brand-border-light shadow-[0_50px_100px_-40px_rgba(0,83,91,0.55)]">
            <Image
              src="/images/landing/b-band-2.jpg"
              alt="Student practising on a laptop at home"
              fill
              priority
              sizes="(min-width: 1024px) 1000px, 100vw"
              className="object-cover"
            />
          </div>
          <AppPreviewCard className="absolute -bottom-2 right-6 hidden w-80 lg:block xl:right-0" />
          <div className="absolute bottom-10 left-6 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl md:flex xl:left-0">
            <span className="flex size-10 items-center justify-center rounded-xl bg-brand-success-bg text-brand-success">
              <LineChart className="size-5" />
            </span>
            <div className="text-left">
              <p className="text-xs text-brand-text-muted">Mock test #14</p>
              <p className="text-sm font-bold text-brand-text-primary">
                212 / 300 <span className="font-medium text-brand-success">▲ 26</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section id="how" className="scroll-mt-20 bg-brand-page-bg py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="How it works"
            title="Practise. Understand. Revise. Repeat."
            subtitle="The loop our toppers follow — built into one app."
          />
          <div className="mt-16 space-y-20">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className={cn(
                    "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
                    i % 2 === 1 && "lg:[&>*:first-child]:order-2",
                  )}
                >
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-primary shadow-sm">
                      <Icon className="size-3.5" /> {i + 1}. {p.kicker}
                    </span>
                    <h3 className="mt-4 font-(family-name:--font-display) text-3xl font-bold text-brand-primary-darker md:text-4xl">
                      {p.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-lg leading-relaxed text-brand-text-muted">{p.body}</p>
                  </div>
                  {p.preview ? (
                    <div className="flex justify-center rounded-[28px] bg-linear-to-br from-brand-subtle-bg to-white p-10">
                      <AppPreviewCard />
                    </div>
                  ) : (
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
                      <Image src={p.image!} alt={p.alt!} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rewards */}
      <section id="rewards" className="scroll-mt-20 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Stay motivated"
            title="Streaks, badges and a leaderboard worth chasing"
            subtitle="Consistency beats cramming. We make showing up every day the fun part."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            <div className="rounded-3xl border border-brand-border-light bg-white p-6">
              <p className="flex items-center gap-2 font-semibold text-brand-text-primary">
                <Crown className="size-5 text-[#e0a526]" /> Batch leaderboard
              </p>
              <ol className="mt-5 space-y-2">
                {leaders.map((l, i) => (
                  <li
                    key={l.name}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-3 py-2.5",
                      l.you ? "bg-brand-subtle-bg ring-1 ring-brand-border-teal" : "bg-brand-page-bg",
                    )}
                  >
                    <span className="w-5 text-sm font-bold text-brand-text-muted">{i + 1}</span>
                    <span className="flex-1 text-sm font-semibold text-brand-text-primary">{l.name}</span>
                    <span className="text-sm font-bold text-brand-primary tabular-nums">
                      {l.xp.toLocaleString("en-IN")} XP
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-3xl border border-brand-border-light bg-white p-6">
              <p className="flex items-center gap-2 font-semibold text-brand-text-primary">
                <Medal className="size-5 text-brand-primary" /> Badges you&apos;ll earn
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { icon: Flame, label: "7-day streak", tone: "bg-brand-warning-bg text-brand-warning" },
                  { icon: Award, label: "First 100%", tone: "bg-[#fff3cd] text-[#b8860b]" },
                  { icon: Zap, label: "Speedster", tone: "bg-brand-info-bg text-brand-info" },
                  { icon: Brain, label: "Topic master", tone: "bg-brand-success-bg text-brand-success" },
                  { icon: BookMarked, label: "Mistake slayer", tone: "bg-brand-subtle-bg text-brand-primary" },
                  { icon: Crown, label: "Top 3", tone: "bg-[#f3e8ff] text-[#7c3aed]" },
                ].map(({ icon: Icon, label, tone }) => (
                  <div key={label} className="flex flex-col items-center gap-2 text-center">
                    <span className={cn("flex size-14 items-center justify-center rounded-2xl", tone)}>
                      <Icon className="size-6" />
                    </span>
                    <span className="text-[11px] font-medium leading-tight text-brand-text-secondary">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-brand-primary p-6 text-white">
              <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-white/10 blur-2xl" />
              <Gift className="relative size-7" />
              <p className="relative mt-4 font-(family-name:--font-display) text-3xl font-bold">
                Study together, save together
              </p>
              <p className="relative mt-3 text-white/80">
                Invite a friend to {academy.appName}. When they subscribe, you both
                get a discount on your plan.
              </p>
              <Button asChild variant="inverse" className="relative mt-6">
                <Link href={registerUrl}>
                  Get your invite link <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <StatsBand />
      <ToppersSection />

      <CentreSection
        eyebrow="Prefer a classroom?"
        title="Learn in person at Arjunaa Academy"
        subtitle="Small batches of 30 at our Vijayanagar centre, taught by IIT, NIT and IISc alumni — with AAA Lakshya included."
      />

      <Testimonials />
      <FaqSection />

      <section className="px-4 py-20 text-center md:px-6">
        <h2 className="mx-auto max-w-3xl font-(family-name:--font-display) text-4xl font-bold text-brand-primary-darker md:text-5xl">
          Your next mock test could be your best one.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href={registerUrl}>
              Start free <ArrowRight />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#visit">Talk to a mentor</a>
          </Button>
        </div>
      </section>

      <LandingFooter />
      <FloatingContact />
    </div>
  );
}
