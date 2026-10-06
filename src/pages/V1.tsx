import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  CalendarCheck,
  ClipboardCheck,
  GraduationCap,
  HeartHandshake,
  IndianRupee,
  MessagesSquare,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { CentreSection } from "@/components/landing/CentreSection";
import { CountUp } from "@/components/landing/CountUp";
import {
  academy,
  appFeatures,
  classroomHighlights,
  faculty,
  journey,
  registerUrl,
  stats,
  values,
} from "@/components/landing/data";
import { FaqSection } from "@/components/landing/FaqSection";
import { FloatingContact } from "@/components/landing/FloatingContact";
import { SampleDataBadge } from "@/components/landing/SampleDataBadge";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingNav } from "@/components/landing/LandingNav";
import { ProgramsGrid } from "@/components/landing/ProgramsGrid";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { Testimonials } from "@/components/landing/Testimonials";
import { ToppersSection } from "@/components/landing/ToppersSection";

export const metadata: Metadata = {
  title: "Arjunaa Academy for Achievers | IIT-JEE, NEET & KCET coaching, Vijayanagar",
  description:
    "Since 2012 — small batches, faculty from IITs, NITs and IISc, and 40% of students qualifying JEE Main and NEET.",
};

const links = [
  { href: "#why", label: "Why Arjunaa" },
  { href: "#programs", label: "Programmes" },
  { href: "#results", label: "Results" },
  { href: "#faculty", label: "Faculty" },
  { href: "#centre", label: "Centre" },
  { href: "#faq", label: "FAQ" },
];

const highlightIcons = [Users, GraduationCap, Award, ClipboardCheck, MessagesSquare, IndianRupee];
const valueIcons = [Target, HeartHandshake, Sparkles];

export default function LandingV1() {
  return (
    <div id="top">
      <LandingNav links={links} />

      {/* Hero */}
      <section className="relative isolate min-h-[640px] overflow-hidden">
        <Image
          src="/images/landing/a-hero.jpg"
          alt="A physics class in progress at Arjunaa Academy"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-brand-primary-darker via-brand-primary-darker/85 to-brand-primary-darker/20" />
        <div className="mx-auto flex max-w-7xl flex-col justify-center px-4 py-24 md:px-6 md:py-32">
          <p className="text-xs font-bold uppercase tracking-[3px] text-brand-secondary">
            Est. {academy.founded} · KCET · NEET · JEE
          </p>
          <h1 className="mt-5 max-w-2xl font-(family-name:--font-display) text-5xl font-bold leading-[1.02] text-white text-balance md:text-7xl">
            To be the best, get trained by the best.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Over a decade of turning Bengaluru&apos;s students into IITians,
            doctors and engineers — in batches small enough that nobody gets
            left behind.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="inverse">
              <a href="#visit">
                <CalendarCheck /> Book a free counselling visit
              </a>
            </Button>
            <Button asChild size="lg" variant="inverse-outline">
              <a href="#programs">Explore programmes</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats, overlapping the hero */}
      <section className="relative z-10 -mt-16 px-4 md:px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-brand-border-light overflow-hidden rounded-3xl border border-brand-border-light bg-white shadow-[0_30px_60px_-30px_rgba(0,83,91,0.4)] md:grid-cols-4 md:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-7 text-center md:px-6">
              <p className="font-(family-name:--font-display) text-4xl font-bold text-brand-primary">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm text-brand-text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading eyebrow="Our promise" title="Three words we teach by" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <div key={v.title} className="rounded-3xl bg-brand-page-bg p-8 text-center">
                  <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-white text-brand-primary shadow-sm">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-(family-name:--font-display) text-2xl font-bold text-brand-primary-darker">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-brand-text-muted">{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Arjunaa */}
      <section id="why" className="scroll-mt-20 bg-brand-primary-darker py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 md:px-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
              <Image
                src="/images/landing/b-band-1.jpg"
                alt="Teacher explaining a chemistry reaction on the whiteboard"
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-brand-warning px-6 py-4 shadow-xl md:-right-8">
              <p className="font-(family-name:--font-display) text-4xl font-bold">30</p>
              <p className="text-xs font-semibold uppercase tracking-wide">students per batch, max</p>
            </div>
          </div>
          <div>
            <SectionHeading
              tone="dark"
              align="left"
              eyebrow="Why Arjunaa"
              title="Big-institute results. Small-batch attention."
              subtitle="Parents choose us because their child is a name here, not a roll number."
            />
            <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {classroomHighlights.map((h, i) => {
                const Icon = highlightIcons[i];
                return (
                  <div key={h.title} className="flex gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-secondary">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="font-semibold">{h.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-white/70">{h.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ProgramsGrid />
      <ToppersSection />

      {/* Faculty */}
      <section id="faculty" className="scroll-mt-20 bg-brand-page-bg py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Faculty"
            title="Taught by alumni of IITs, NITs and IISc"
            subtitle="Every senior faculty member has cleared the exam they teach — and has spent a decade helping others do the same."
          />
          <div className="mt-6 flex justify-center">
            <SampleDataBadge label="Sample data — faculty names are invented" />
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {faculty.map((f) => (
              <div key={f.name} className="rounded-2xl border border-brand-border-light bg-white p-6">
                <span className="flex size-14 items-center justify-center rounded-full bg-linear-to-br from-brand-primary to-brand-hero-teal font-(family-name:--font-display) text-xl font-bold text-white">
                  {f.subject[0]}
                </span>
                <p className="mt-4 font-semibold text-brand-text-primary">{f.name}</p>
                <p className="text-sm font-medium text-brand-primary">{f.subject}</p>
                <p className="mt-3 text-xs text-brand-text-muted">
                  {f.from} · {f.years} yrs teaching
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading eyebrow="How it works" title="From first visit to exam day" />
          <ol className="relative mt-14 grid gap-8 md:grid-cols-5 md:gap-4 md:before:absolute md:before:inset-x-0 md:before:top-6 md:before:h-px md:before:bg-brand-border-teal">

            {journey.map((j, i) => (
              <li key={j.step} className="relative flex gap-4 md:flex-col md:items-center md:text-center">
                <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-brand-primary bg-white font-bold text-brand-primary">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-brand-text-primary md:mt-2">{j.step}</p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-text-muted">{j.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CentreSection />

      {/* App as an extension of the classroom */}
      <section id="app" className="scroll-mt-20 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 md:px-6 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow={`Included: ${academy.appName}`}
              title="Your classroom, extended"
              subtitle="Every Arjunaa student gets the AAA Lakshya app — so practice, revision and doubt-clearing don't stop when the class does."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {appFeatures.map((f) => (
                <div key={f.title} className="rounded-2xl border border-brand-border-light p-4">
                  <BookOpenCheck className="size-5 text-brand-primary" />
                  <p className="mt-2 text-sm font-semibold text-brand-text-primary">{f.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-brand-text-muted">{f.body}</p>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-8">
              <Link href={registerUrl}>
                Try the app free <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-[0_40px_80px_-30px_rgba(0,83,91,0.5)]">
            <Image
              src="/images/landing/a-walkthrough.jpg"
              alt="Student checking the AAA Lakshya dashboard on a tablet in class"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <Testimonials title="What our families say" />
      <FaqSection />
      <LandingFooter />
      <FloatingContact />
    </div>
  );
}
