import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, MonitorPlay, Play, Users, Video } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AppShowcase, HeroPhone } from "@/components/landing/AppShowcase";
import { CentreSection } from "@/components/landing/CentreSection";
import { ClosingCta } from "@/components/landing/ClosingCta";
import { CountUp } from "@/components/landing/CountUp";
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

const onlinePillars = [
  {
    title: "Zero Compromise:",
    text: "Learn from the identical IIT, NIT, and IISc mentors teaching our physical batches.",
  },
  {
    title: "Interactive & Live:",
    text: "Real-time engagement built around the same rigorous small-batch curriculum.",
  },
  {
    title: "Full App Support:",
    text: `Total integration with the ${academy.appName} App for on-demand recorded revisions, mock tests, and performance analytics.`,
  },
];

const heroPillars = [
  {
    title: "Elite Faculty:",
    text: "Learn directly from premier IIT, NIT, and IISc minds at our flagship Vijayanagar centre.",
  },
  {
    title: "Hyper-Personalized Focus:",
    text: "Strict small-batch limits mean your child is never just a number in a crowd.",
  },
  {
    title: `The ${academy.appName} Digital Advantage:`,
    text: "Deepen classroom concepts at home with 24/7 access to test analytics, recorded lectures, and smart revision tools.",
  },
];

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
            { id: "classroom", label: "In the classroom", content: <ClassroomHero /> },
            { id: "online", label: "Live online", content: <OnlineHero /> },
          ]}
        />
      </section>

      <ResultsTicker />

      {/* Headline figures, as aaaedu.in publishes them */}
      <section className="bg-white py-10">
        <dl className="mx-auto grid max-w-7xl grid-cols-1 gap-y-8 px-4 sm:grid-cols-3 sm:divide-x sm:divide-brand-border-light md:px-6">
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
        <ToppersSection
          subtitle={
            <>
              <span className="block font-semibold text-brand-primary-darker">
                The Benchmarks of Success: Our Newest Milestone Ranks.
              </span>
              <span className="mt-3 block">
                At Arjunaa Academy, top ranks aren’t accidents; they are engineered. Explore the latest
                wave of exceptional scores and premium college admissions earned by our students in
                KCET, NEET, and IIT-JEE (Main &amp; Advanced).
              </span>
              <span className="mt-3 block">
                Every milestone reflects the power of hyper-personalized elite mentorship, seamlessly
                transforming ambitious students into top-rank holders.
              </span>
            </>
          }
        />
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
        <h1 className="mt-5 font-(family-name:--font-display) text-[40px] font-bold leading-[1.04] tracking-tight text-brand-primary-darker text-balance sm:text-5xl lg:text-[56px]">
          Premium Classroom Coaching.{" "}
          <span className="relative text-brand-primary">
            Seamless App Integration.
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
        <ul className="mt-6 max-w-xl space-y-2.5 text-base leading-relaxed text-brand-text-muted sm:text-lg">
          {heroPillars.map((p) => (
            <li key={p.title}>
              <span className="font-semibold text-brand-primary">{p.title}</span> {p.text}
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-xl text-base font-medium text-brand-text-secondary">
          Cultivating Bengaluru’s next generation of achievers since {academy.founded}.
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

        <AlumniProof />
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
        <h2 className="mt-5 font-(family-name:--font-display) text-[40px] font-bold leading-[1.04] tracking-tight text-brand-primary-darker text-balance sm:text-5xl lg:text-[56px]">
          Same Elite Faculty.{" "}
          <span className="relative text-brand-primary">
            Live Online Flexibility.
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
          Distance shouldn&apos;t limit destiny. If you are located outside the reach of our premier
          Vijayanagar centre, our live online program brings the classroom to you.
        </p>
        <ul className="mt-4 max-w-xl space-y-2.5 text-base leading-relaxed text-brand-text-muted sm:text-lg">
          {onlinePillars.map((p) => (
            <li key={p.title}>
              <span className="font-semibold text-brand-primary">{p.title}</span> {p.text}
            </li>
          ))}
        </ul>

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

        <AlumniProof />
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

/** Proof under both hero slides: real achievers' faces and where they went. */
function AlumniProof() {
  return (
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
  );
}
