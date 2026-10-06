import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CalendarCheck, Check, MonitorPlay, Play, Users, Video } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AppShowcase, HeroPhone } from "@/components/landing/AppShowcase";
import { CentreSection } from "@/components/landing/CentreSection";
import { ClosingCta } from "@/components/landing/ClosingCta";
import { CountUp } from "@/components/landing/CountUp";
import { onlineClasses, onlinePackages } from "@/components/landing/courses-data";
import { academy, registerUrl, whatsappUrl } from "@/components/landing/data";
import { FacultyShowcase } from "@/components/landing/FacultyShowcase";
import { FaqSection } from "@/components/landing/FaqSection";
import { FloatingContact } from "@/components/landing/FloatingContact";
import { HeroCarousel } from "@/components/landing/HeroCarousel";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingNav } from "@/components/landing/LandingNav";
import { MobileActionBar } from "@/components/landing/MobileActionBar";
import { ProgramsGrid } from "@/components/landing/ProgramsGrid";
import { ResultsTicker } from "@/components/landing/ResultsTicker";
import { Testimonials } from "@/components/landing/Testimonials";
import { ToppersSection } from "@/components/landing/ToppersSection";
import { alumniColleges, headlineStats, highlightResults } from "@/components/landing/v2-data";
import { VrddhiSection } from "@/components/landing/VrddhiSection";
import { WhatsAppIcon } from "@/components/landing/WhatsAppIcon";
import { WhyChoose } from "@/components/landing/WhyChoose";

export const metadata: Metadata = {
  title: "Arjunaa Academy for Achievers | JEE, NEET & KCET classroom coaching in Bengaluru",
  description:
    "Small-batch KCET, NEET and JEE coaching for Class 11 and 12 at our Vijayanagar centre in Bengaluru since 2012 — with the AAA app included for tests, recordings and revision at home.",
};

// Section order follows what a parent checks first: who teaches and what
// results they get, then the programmes, then how classroom and app fit
// together, then where to go.
const links = [
  { href: "#results", label: "Results" },
  { href: "#programs", label: "Programmes" },
  { href: "#app", label: "Classroom + App" },
  { href: "#faculty", label: "Faculty" },
  { href: "#vrddhi", label: "Scholarship test" },
  { href: "#centre", label: "Centre" },
];

// The online slide's points. The price is the lowest online Standard course
// after its discount, so it matches what the course cards show.
const onlineFrom = Math.min(...onlinePackages.flatMap((p) => Object.values(p.prices).map((c) => c!.standard.price - c!.standard.off)));
const onlinePoints = [
  "Same faculty as the classroom",
  "Live classes + every lecture recorded",
  "Free plan · 7-day trial of paid plans",
  `Courses from ₹${onlineFrom.toLocaleString("en-IN")}`,
];

const heroPoints = ["Batches of 30, max", "Day scholar & residential", "Class 11 & 12", `${academy.appName} app included`];

export default function LandingV2() {
  return (
    <div id="top" className="pb-16 md:pb-0">
      <LandingNav
        links={links}
        announcement={`Admissions open for 2026–27 · KCET · NEET · JEE Main · JEE Advanced · Classroom at Vijayanagar · Live online anywhere`}
      />

      {/* Hero — a slow carousel: the classroom first, then the same courses online */}
      <section className="relative overflow-hidden bg-linear-to-b from-brand-subtle-bg/80 via-white to-white pb-12 lg:pb-16">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[520px] rounded-full bg-brand-secondary/40 blur-3xl" />
        <HeroCarousel
          slides={[
            { id: "classroom", label: "In the classroom", icon: Building2, content: <ClassroomHero /> },
            { id: "online", label: "Live online", icon: MonitorPlay, content: <OnlineHero /> },
          ]}
        />
      </section>

      <ResultsTicker />

      {/* Headline figures, as aaaedu.in publishes them */}
      <section className="bg-white py-10">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-4 md:px-6 lg:grid-cols-4 lg:divide-x lg:divide-brand-border-light">
          {headlineStats.map((s) => (
            <div key={s.label} className="px-4 text-center">
              <dd className="font-(family-name:--font-display) text-4xl font-bold leading-none text-brand-primary-darker md:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </dd>
              <dt className="mt-2 text-sm font-semibold text-brand-text-primary">{s.label}</dt>
              {s.note && <p className="mt-0.5 text-xs text-brand-text-muted">{s.note}</p>}
            </div>
          ))}
        </dl>
      </section>

      {/* Backgrounds alternate white / tint from here down. */}
      <div className="bg-brand-page-bg">
        <ToppersSection />
      </div>

      <ProgramsGrid
        subtitle={`Class 11 and Class 12 courses for KCET, NEET, JEE Main and JEE Advanced — in the classroom at Vijayanagar, with the ${academy.appName} app included, or online.`}
      />

      <AppShowcase />

      <FacultyShowcase />

      <WhyChoose id="why" />

      <VrddhiSection />

      <Testimonials />

      <FaqSection />

      <CentreSection />

      <ClosingCta
        visitHref="#visit"
        subtitle={`Admissions for 2026–27 are open at our Vijayanagar centre. Book a visit, or message us on WhatsApp and a mentor will call you back.`}
        secondary={
          <Button asChild size="lg" variant="inverse-outline">
            <Link href={registerUrl}>
              <MonitorPlay className="size-4" /> Start online
            </Link>
          </Button>
        }
      />

      <LandingFooter />
      <FloatingContact className="hidden md:flex" />
      <MobileActionBar />
    </div>
  );
}

/** Hero slide 1: the classroom, with the app alongside it. */
function ClassroomHero() {
  return (
    <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pt-10 md:px-6 md:pt-14 lg:grid-cols-[1.05fr_1fr]">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full border border-brand-border-teal bg-white px-3 py-1 text-xs font-semibold text-brand-primary shadow-sm">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-success opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2 rounded-full bg-brand-success" />
          </span>
          KCET · NEET · JEE Main · JEE Advanced — Class 11 & 12
        </p>
        <h1 className="mt-5 font-(family-name:--font-display) text-[40px] font-bold leading-[1.04] tracking-tight text-brand-primary-darker text-balance sm:text-5xl lg:text-[64px]">
          Taught in the classroom.{" "}
          <span className="relative text-brand-primary">
            Tracked in the app.
            <svg
              aria-hidden="true"
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
              className="absolute -bottom-1 left-0 h-2.5 w-full text-brand-secondary"
            >
              <path d="M2 9 C 50 2, 150 2, 198 8" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-text-muted">
          Small-batch coaching by IIT, NIT &amp; IISc faculty at our Vijayanagar centre in
          Bengaluru since {academy.founded}. Every student also gets the{" "}
          <span className="font-semibold text-brand-primary">{academy.appName} app</span>, so tests,
          recordings and revision carry on at home.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="shadow-lg shadow-brand-primary/20">
            <a href="#visit">
              <CalendarCheck /> Book a visit
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="size-4 text-[#25d366]" /> WhatsApp us
            </a>
          </Button>
        </div>

        <ul className="mt-7 grid max-w-xl gap-x-6 gap-y-2.5 text-sm text-brand-text-secondary sm:grid-cols-2">
          {heroPoints.map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-success-bg text-brand-success">
                <Check className="size-3" strokeWidth={3} />
              </span>
              {t}
            </li>
          ))}
        </ul>

        {/* Proof: real achievers' faces and where they went */}
        <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-brand-border-light pt-6">
          <div className="flex -space-x-2.5">
            {highlightResults.slice(0, 5).map((r) => (
              <Image
                key={r.name}
                src={r.image}
                alt=""
                width={40}
                height={40}
                className="size-10 rounded-full object-cover object-top ring-2 ring-white"
              />
            ))}
          </div>
          <p className="text-sm leading-snug text-brand-text-muted">
            <span className="font-semibold text-brand-text-primary">1,000+ alumni</span> at top STEM
            universities
            <span className="block text-xs">{alumniColleges.join(" · ")}</span>
          </p>
        </div>
      </div>

      {/* Classroom photo with the app over it — the page's idea in one picture.
          The photo is a placeholder until real centre photos arrive
          (docs/assets-needed.md). */}
      <div className="relative pb-10 lg:pb-0">
        <div className="relative aspect-[4/3.4] overflow-hidden rounded-[28px] shadow-xl shadow-brand-primary/10 lg:mr-24">
          <Image
            src="/images/landing/a-hero.jpg"
            alt="A small-batch physics class at Arjunaa Academy"
            fill
            priority
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent px-5 pb-4 pt-16 text-sm font-semibold text-white">
            In class · Concepts, doubts, mentors
          </div>
        </div>
        <div className="absolute left-3 top-3 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-brand-border-light sm:left-4 sm:top-4">
          <span className="flex size-10 items-center justify-center rounded-xl bg-brand-subtle-bg text-brand-primary">
            <Users className="size-5" />
          </span>
          <div>
            <p className="text-sm font-bold text-brand-text-primary">30 students, max</p>
            <p className="text-xs text-brand-text-muted">Every teacher knows every student</p>
          </div>
        </div>
        <div className="absolute -bottom-2 right-0 hidden origin-bottom-right scale-[0.62] sm:block lg:-bottom-16 lg:right-0 lg:scale-[0.7]">
          <HeroPhone />
          <p className="mt-3 text-center text-lg font-semibold text-brand-primary-darker">
            At home · {academy.appName} app
          </p>
        </div>
      </div>
    </div>
  );
}

/** Hero slide 2: the same courses, taught live online. */
function OnlineHero() {
  return (
    <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pt-10 md:px-6 md:pt-14 lg:grid-cols-[1.05fr_1fr]">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full border border-brand-border-teal bg-white px-3 py-1 text-xs font-semibold text-brand-primary shadow-sm">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-500 opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2 rounded-full bg-red-500" />
          </span>
          Live online · Class 11 &amp; 12 · KCET · NEET · JEE
        </p>
        <h2 className="mt-5 font-(family-name:--font-display) text-[40px] font-bold leading-[1.04] tracking-tight text-brand-primary-darker text-balance sm:text-5xl lg:text-[64px]">
          Same faculty.{" "}
          <span className="relative text-brand-primary">
            Live online.
            <svg
              aria-hidden="true"
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
              className="absolute -bottom-1 left-0 h-2.5 w-full text-brand-secondary"
            >
              <path d="M2 9 C 50 2, 150 2, 198 8" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </span>
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-text-muted">
          Can&apos;t come to Vijayanagar? The faculty who teach our classroom batches teach the same
          courses live online — with recorded lectures, every kind of test and analytics in the{" "}
          <span className="font-semibold text-brand-primary">{academy.appName} app</span>.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="shadow-lg shadow-brand-primary/20">
            <Link href="/landing/courses/online">
              <MonitorPlay /> Explore online courses
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={registerUrl}>
              Start free <ArrowRight />
            </Link>
          </Button>
        </div>

        <ul className="mt-7 grid max-w-xl gap-x-6 gap-y-2.5 text-sm text-brand-text-secondary sm:grid-cols-2">
          {onlinePoints.map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-success-bg text-brand-success">
                <Check className="size-3" strokeWidth={3} />
              </span>
              {t}
            </li>
          ))}
        </ul>

        {/* Where to go next: straight into a class's online courses. */}
        <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-brand-border-light pt-6 text-sm">
          <span className="text-brand-text-muted">Online courses for</span>
          {onlineClasses.map((c) => (
            <Link
              key={c.id}
              href={c.href}
              className="inline-flex items-center gap-1 rounded-full border border-brand-border-teal bg-white px-3 py-1 font-semibold text-brand-primary transition-colors hover:bg-brand-subtle-bg"
            >
              {c.label} <ArrowRight className="size-3.5" />
            </Link>
          ))}
        </div>
      </div>

      {/* A live class on screen, with the recording and the app beside it. The
          photo is the same placeholder as the classroom slide's until real
          photos arrive (docs/assets-needed.md). */}
      <div className="relative pb-10 lg:pb-0">
        <div className="overflow-hidden rounded-[28px] bg-brand-primary-darker shadow-xl shadow-brand-primary/10 lg:mr-24">
          <div className="flex items-center gap-1.5 px-4 py-3">
            <span className="size-2.5 rounded-full bg-white/25" />
            <span className="size-2.5 rounded-full bg-white/25" />
            <span className="size-2.5 rounded-full bg-white/25" />
            <span className="ml-3 truncate text-xs font-medium text-white/70">Live class · Physics</span>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/landing/a-hero.jpg"
              alt="A teacher explaining physics on the board, streamed live"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover object-[70%_center]"
            />
            <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-md bg-red-600 px-2 py-1 text-xs font-bold tracking-wide text-white">
              <span className="size-1.5 rounded-full bg-white" /> LIVE
            </span>
            <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-linear-to-t from-black/70 to-transparent px-4 pb-3 pt-12 text-white">
              <span className="flex size-8 items-center justify-center rounded-full bg-white/20">
                <Play className="size-4 fill-white" />
              </span>
              <span className="h-1 flex-1 rounded-full bg-white/30">
                <span className="block h-full w-2/5 rounded-full bg-brand-secondary" />
              </span>
              <span className="text-xs font-semibold">Live</span>
            </div>
          </div>
        </div>
        <div className="absolute left-3 top-14 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-brand-border-light sm:left-4">
          <span className="flex size-10 items-center justify-center rounded-xl bg-brand-subtle-bg text-brand-primary">
            <Video className="size-5" />
          </span>
          <div>
            <p className="text-sm font-bold text-brand-text-primary">Missed a class?</p>
            <p className="text-xs text-brand-text-muted">Every lecture is recorded</p>
          </div>
        </div>
        <div className="absolute -bottom-2 right-0 hidden origin-bottom-right scale-[0.62] sm:block lg:-bottom-16 lg:right-0 lg:scale-[0.7]">
          <HeroPhone />
          <p className="mt-3 text-center text-lg font-semibold text-brand-primary-darker">
            Tests &amp; analytics · {academy.appName} app
          </p>
        </div>
      </div>
    </div>
  );
}
