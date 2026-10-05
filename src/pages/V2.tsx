import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpenText,
  Building2,
  CalendarCheck,
  CalendarDays,
  Check,
  ClipboardCheck,
  GraduationCap,
  LineChart,
  MapPin,
  NotebookPen,
  Smartphone,
  Trophy,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { AboutIntro } from "@/components/landing/AboutIntro";
import { AppPreviewCard } from "@/components/landing/AppPreviewCard";
import { CentreSection } from "@/components/landing/CentreSection";
import { ClosingCta } from "@/components/landing/ClosingCta";
import { CountUp } from "@/components/landing/CountUp";
import { leaders } from "@/components/landing/about-data";
import { academy, academyWeek, branch, loginUrl, registerUrl } from "@/components/landing/data";
import { FaqSection } from "@/components/landing/FaqSection";
import { FloatingContact } from "@/components/landing/FloatingContact";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingNav } from "@/components/landing/LandingNav";
import { ProgramsGrid } from "@/components/landing/ProgramsGrid";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { Testimonials } from "@/components/landing/Testimonials";
import { ToppersSection } from "@/components/landing/ToppersSection";
import { WhyChoose } from "@/components/landing/WhyChoose";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Arjunaa Academy for Achievers | JEE & NEET classroom coaching in Vijayanagar, Bengaluru",
  description:
    "Small-batch IIT-JEE, NEET and KCET coaching in Vijayanagar since 2012 — with the AAA Lakshya app included for tests, notes and revision at home.",
};

const links = [
  { href: "#about", label: "This page" },
  { href: "#why", label: "Why Arjunaa" },
  { href: "#programs", label: "Programmes" },
  { href: "#app", label: "Classroom + App" },
  { href: "#centre", label: "Centre" },
];

// Only facts no other section on this page states — small batches, faculty,
// tests and doubt support are covered once, in "Why Arjunaa".
const heroPoints = [
  `${academy.appName} app included`,
  "Day-scholar & residential options",
  "Foundation from Class VIII",
  "Home visit or online meeting",
];

// What the app adds between classes. Wording follows the app's own feature
// descriptions elsewhere on the site.
const appFeatures = [
  {
    icon: ClipboardCheck,
    title: "Exam-pattern tests",
    body: "Timed JEE, NEET and KCET-pattern tests, with solutions the moment you submit.",
  },
  {
    icon: LineChart,
    title: "Topic-wise mastery",
    body: "After every test, see which chapters are strong and which need work.",
  },
  {
    icon: BookOpenText,
    title: "Notes & recorded lectures",
    body: "Class notes and recordings, so a missed or hazy lesson is never lost.",
  },
  {
    icon: NotebookPen,
    title: "Mistake book",
    body: "Every wrong answer is saved so you can revise it before it costs marks.",
  },
];

// The hero's proof strip. `note` is one line of context under each figure;
// the results figure links to the achievers so it can be checked.
const proof: {
  value: number;
  suffix?: string;
  plain?: boolean;
  label: string;
  note: string;
  icon: typeof Users;
  href?: string;
}[] = [
  {
    value: academy.founded,
    plain: true,
    label: "Training achievers since",
    note: `${new Date().getFullYear() - academy.founded} years in Bengaluru`,
    icon: CalendarDays,
  },
  {
    value: 3000,
    suffix: "+",
    label: "Students enrolled",
    note: "JEE, NEET, KCET & Foundation",
    icon: Users,
  },
  {
    value: 1000,
    suffix: "+",
    label: "Alumni at top STEM universities",
    note: "Among the world's top 100",
    icon: GraduationCap,
  },
  {
    value: 40,
    suffix: "%+",
    label: "Qualify JEE Main & NEET",
    note: "See every result",
    icon: Trophy,
    href: "/landing/achievers",
  },
  {
    value: 100,
    suffix: "%",
    label: "Board exam pass",
    note: "60%+ with distinction",
    icon: Award,
  },
];


const gallery = [
  { src: "/images/landing/a-track-0.jpg", caption: "Concept classes" },
  { src: "/images/landing/a-track-1.jpg", caption: "Biology lab" },
  { src: "/images/landing/b-band-1.jpg", caption: "Chemistry at the board" },
  { src: "/images/landing/a-track-2.jpg", caption: "Peer study groups" },
  { src: "/images/landing/b-hero.jpg", caption: "Mentor sessions" },
  { src: "/images/landing/a-track-3.jpg", caption: "Hands-on physics" },
];

export default function LandingV2() {
  return (
    <div id="top">
      <LandingNav
        links={links}
        cta={{ href: "#visit", label: "Book a visit", icon: CalendarCheck }}
        announcement="Admissions open for 2026–27 · JEE · NEET · KCET · Foundation"
      />

      {/* Hero — the centre first, the app alongside */}
      <section className="relative overflow-hidden bg-linear-to-b from-brand-subtle-bg/70 via-white to-white">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[520px] rounded-full bg-brand-secondary/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 top-1/2 size-80 rounded-full bg-brand-subtle-bg blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-14 pt-10 md:px-6 md:pt-16 lg:grid-cols-[1fr_1.05fr] lg:pb-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-border-teal bg-white px-3 py-1 text-xs font-semibold text-brand-primary shadow-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-success opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-brand-success" />
              </span>
              Admissions open 2026–27 · JEE · NEET · KCET
            </p>
            <h1 className="mt-5 font-(family-name:--font-display) text-4xl font-bold leading-[1.05] tracking-tight text-brand-primary-darker text-balance sm:text-5xl lg:text-[64px]">
              Real classrooms. Real teachers.{" "}
              <span className="relative whitespace-nowrap text-brand-primary">
                And an app
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-brand-secondary"
                >
                  <path d="M2 9 C 50 2, 150 2, 198 8" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span>{" "}
              that keeps up.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-text-muted">
              IIT-JEE, NEET and KCET coaching at our Vijayanagar centre since{" "}
              {academy.founded}. Every classroom student also gets{" "}
              <span className="font-semibold text-brand-primary">{academy.appName}</span> —
              for tests, notes and revision at home.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="shadow-lg shadow-brand-primary/20">
                <a href="#visit">
                  <CalendarCheck /> Book a visit
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#app">
                  <Smartphone /> See how the app helps
                </a>
              </Button>
            </div>

            <ul className="mt-8 grid max-w-xl gap-x-6 gap-y-2.5 text-sm text-brand-text-secondary sm:grid-cols-2">
              {heroPoints.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-success-bg text-brand-success">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>

            <a
              href={branch.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-start gap-2 text-sm text-brand-text-muted transition-colors hover:text-brand-primary"
            >
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-primary" />
              <span>
                {branch.name} centre · CHBCS 1st Layout, 5th Main ·{" "}
                <span className="font-semibold whitespace-nowrap text-brand-primary">Get directions →</span>
              </span>
            </a>
          </div>

          {/* Photo collage */}
          <div className="relative">
            <div className="grid grid-cols-[1.4fr_1fr] grid-rows-2 gap-3 sm:gap-4">
              <div className="relative row-span-2 min-h-[340px] overflow-hidden rounded-[24px] shadow-xl shadow-brand-primary/10 sm:min-h-[480px]">
                <Image
                  src={branch.image}
                  alt="Students arriving at the Arjunaa Academy centre"
                  fill
                  priority
                  sizes="(min-width: 1024px) 380px, 60vw"
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-[24px]">
                <Image src="/images/landing/a-hero.jpg" alt="A physics class in progress" fill sizes="(min-width: 1024px) 260px, 40vw" className="object-cover" />
              </div>
              <div className="relative overflow-hidden rounded-[24px]">
                <Image src="/images/landing/a-track-1.jpg" alt="Students in the biology lab" fill sizes="(min-width: 1024px) 260px, 40vw" className="object-cover" />
              </div>
            </div>
            <div className="absolute -left-3 bottom-8 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-brand-border-light sm:flex lg:-left-8">
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand-subtle-bg text-brand-primary">
                <CalendarCheck className="size-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-brand-text-primary">Free demo class</p>
                <p className="text-xs text-brand-text-muted">Sit in before you decide</p>
              </div>
            </div>
            <div className="absolute -right-2 -top-4 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-brand-border-light md:flex lg:-right-6">
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand-success-bg text-brand-success">
                <LineChart className="size-5" />
              </span>
              <div>
                <p className="text-xs text-brand-text-muted">In the app · Test #14</p>
                <p className="text-sm font-bold text-brand-text-primary">
                  212 / 300 <span className="font-medium text-brand-success">▲ 26</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Proof strip — a raised card rather than a full-width band */}
        <div className="relative mx-auto max-w-7xl px-4 pb-4 md:px-6">
          <div className="grid grid-cols-2 gap-x-2 gap-y-7 rounded-3xl border border-brand-border-light bg-white px-3 py-7 shadow-xl shadow-brand-primary/5 sm:grid-cols-3 md:px-4 lg:grid-cols-5 lg:divide-x lg:divide-brand-border-light">
            {proof.map((p) => {
              const note = (
                <span className="mt-1 block text-xs text-brand-text-muted">{p.note}</span>
              );
              return (
                <div key={p.label} className="flex flex-col items-center px-3 text-center">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-brand-subtle-bg text-brand-primary">
                    <p.icon className="size-5" />
                  </span>
                  <p className="mt-3 font-(family-name:--font-display) text-3xl font-bold leading-none text-brand-primary-darker md:text-[34px]">
                    {p.plain ? p.value : <CountUp value={p.value} suffix={p.suffix} />}
                  </p>
                  <div className="mt-2 text-sm font-semibold leading-snug text-brand-text-primary">
                    {p.label}
                    {p.href ? (
                      <Link
                        href={p.href}
                        className="mt-1 flex items-center justify-center gap-1 text-xs font-semibold text-brand-primary hover:text-brand-primary-darker"
                      >
                        {p.note} <ArrowRight className="size-3.5" />
                      </Link>
                    ) : (
                      note
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <AboutIntro id="about" />

      <WhyChoose id="why" />

      {/* Life at the academy */}
      <section className="overflow-hidden py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Life at the centre"
            title="Where the learning actually happens"
            subtitle="Labs, whiteboards, doubt desks and study groups — the parts of preparation an app alone can't give you."
          />
        </div>
        <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] md:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:overflow-visible">
          {gallery.map((g) => (
            <figure
              key={g.caption}
              className="group relative aspect-[4/3] w-[78vw] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[46vw] lg:w-auto"
            >
              <Image
                src={g.src}
                alt={g.caption}
                fill
                sizes="(min-width: 1024px) 400px, 78vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-4 pb-3 pt-10 text-sm font-semibold text-white">
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <ProgramsGrid subtitle="Classroom batches at the Vijayanagar centre, with AAA Lakshya included for every student." />

      {/* Classroom + app, working together */}
      <section id="app" className="scroll-mt-20 bg-brand-page-bg py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow={`Classroom + ${academy.appName}`}
            title="What happens at the centre continues in the app"
            subtitle="Your teachers see your test results before class. You see exactly what to revise after it. Parents join the review."
          />

          {/* One week, as a loop between the two places */}
          <div className="mt-14">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm font-bold uppercase tracking-[2px] text-brand-primary-darker">
                One week at Arjunaa
              </p>
              <div className="flex items-center gap-4 text-xs text-brand-text-muted">
                <span className="flex items-center gap-1.5">
                  <span className="size-3 rounded-full bg-brand-primary" /> At the centre
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="size-3 rounded-full border-2 border-brand-primary bg-white" /> In {academy.appName}
                </span>
              </div>
            </div>
            <ol className="relative mt-6 grid gap-4 lg:grid-cols-5 lg:gap-3 lg:before:absolute lg:before:left-[10%] lg:before:right-[10%] lg:before:top-7 lg:before:h-px lg:before:bg-brand-border-teal">
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
                        atCentre
                          ? "bg-brand-primary text-white"
                          : "border-2 border-brand-primary bg-white text-brand-primary",
                      )}
                    >
                      {atCentre ? <Building2 className="size-6" /> : <Smartphone className="size-6" />}
                    </span>
                    <div className="lg:w-full lg:flex-1 lg:rounded-2xl lg:bg-white lg:p-4">
                      <p className="text-[11px] font-bold uppercase tracking-wide text-brand-primary">
                        {i + 1} · {atCentre ? "At the centre" : "In the app"}
                      </p>
                      <p className="mt-0.5 font-semibold text-brand-text-primary">{s.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-brand-text-muted">{s.body}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* The app itself */}
          <div className="mt-16 grid items-center gap-12 overflow-hidden rounded-[32px] border border-brand-border-light bg-white p-6 md:p-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-brand-subtle-bg px-3 py-1 text-xs font-semibold text-brand-primary">
                <Smartphone className="size-3.5" /> Included for every classroom student
              </p>
              <h3 className="mt-4 font-(family-name:--font-display) text-2xl font-bold text-brand-primary-darker md:text-3xl">
                {academy.appName}: your practice, between classes
              </h3>
              <ul className="mt-7 grid gap-5 sm:grid-cols-2">
                {appFeatures.map((f) => (
                  <li key={f.title} className="flex gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                      <f.icon className="size-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-brand-text-primary">{f.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-brand-text-muted">{f.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-7 flex items-start gap-2 rounded-2xl bg-brand-page-bg px-4 py-3 text-sm text-brand-text-secondary">
                <Users className="mt-0.5 size-4 shrink-0 text-brand-primary" />
                <span>
                  <span className="font-semibold text-brand-text-primary">For parents:</span> your
                  child&apos;s mentor walks you through every test report.
                </span>
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href={registerUrl}>
                    Try {academy.appName} free <ArrowRight />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={loginUrl}>Student login</Link>
                </Button>
              </div>
            </div>

            <div className="relative pb-10 md:pb-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] md:mr-16">
                <Image
                  src="/images/landing/a-walkthrough.jpg"
                  alt={`Student checking the ${academy.appName} dashboard on a tablet in class`}
                  fill
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                />
              </div>
              <AppPreviewCard className="absolute -bottom-2 right-0 hidden w-72 md:block" />
            </div>
          </div>
        </div>
      </section>

      <ToppersSection />

      {/* Founders — a short introduction; the full notes, the motto and the
          faculty live on /landing/about/leadership, and the mission & vision
          on /landing/about/mission-vision, so neither is repeated here. */}
      <section id="leadership" className="scroll-mt-20 bg-brand-page-bg py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              align="left"
              eyebrow="Founders"
              title="Led by engineers who believe education is a service"
            />
            <Button asChild variant="outline">
              <Link href="/landing/about/leadership">
                Meet the leadership & faculty <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {leaders.map((l) => (
              <article
                key={l.name}
                className="flex overflow-hidden rounded-3xl border border-brand-border-light bg-white"
              >
                <div className="relative w-32 shrink-0 sm:w-40">
                  <Image
                    src={l.image}
                    alt={`${l.name}, ${l.role}`}
                    fill
                    sizes="160px"
                    className="object-cover"
                    style={{ objectPosition: l.imagePosition }}
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-lg font-semibold text-brand-text-primary">{l.name}</p>
                  <p className="text-sm font-medium text-brand-primary">{l.role}</p>
                  <p className="mt-1 text-xs text-brand-text-muted">{l.credentials}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CentreSection
        eyebrow="Visit the centre"
        title="Come and see the classrooms"
        subtitle="Meet the faculty, sit in on a demo class and get a free counselling session. Can't come in? We'll visit you at home or meet online."
      />

      <Testimonials />
      <FaqSection />

      {/* Closing CTA */}
      <ClosingCta
        visitHref="#visit"
        subtitle={`Admissions for 2026–27 are open at the Vijayanagar centre. Book a free visit, or start practising in ${academy.appName} today.`}
      />

      <LandingFooter />
      <FloatingContact />
    </div>
  );
}
