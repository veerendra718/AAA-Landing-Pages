import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Atom,
  CalendarDays,
  Check,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Leaf,
  Mail,
  Scale,
  Sigma,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { careers, facultyMembers } from "@/components/landing/about-data";
import { AboutShell } from "@/components/landing/AboutShell";
import { academy } from "@/components/landing/data";
import { SectionHeading } from "@/components/landing/SectionHeading";

export const metadata: Metadata = {
  title: "Careers | Arjunaa Academy for Achievers",
  description: "Teach at Arjunaa Academy for Achievers — mission-focused people, real ownership and room to grow.",
};

const reasonIcons = [HeartPulse, Users, GraduationCap, Scale];

// A few plain facts about the place, beside the intro.
const facts = [
  { icon: CalendarDays, value: String(academy.founded), label: "Teaching since" },
  { icon: Users, value: String(facultyMembers.length), label: "Faculty today" },
  { icon: GraduationCap, value: "30", label: "Max batch size" },
];

// The subjects the current faculty teach (see `facultyMembers` in about-data.ts).
const subjects = [
  { label: "Physics", icon: Atom },
  { label: "Chemistry", icon: FlaskConical },
  { label: "Mathematics", icon: Sigma },
  { label: "Biology", icon: Leaf },
];

// What an application email should cover. The mailto pre-fills the same list.
const include = [
  "Your CV",
  "The subjects you teach",
  "The classes and exams you've taught (e.g. PUC, JEE, NEET)",
  "Years of teaching experience",
  "A phone number we can reach you on",
];

const applyHref = `mailto:${academy.email}?subject=${encodeURIComponent(
  "Careers at AAA — application",
)}&body=${encodeURIComponent(
  [
    "Hello AAA team,",
    "",
    "I'd like to be considered for a teaching role.",
    "",
    "Subjects I teach:",
    "Classes / exams I've taught:",
    "Years of experience:",
    "Phone:",
    "",
    "My CV is attached.",
  ].join("\n"),
)}`;

export default function CareersPage() {
  return (
    <AboutShell
      title="Careers"
      subtitle="Our success lies in our people. Help us train the next generation of achievers."
      closingCta={false}
    >
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 md:px-6 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Careers" title={careers.title} />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-brand-text-muted">
              {careers.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-3">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="flex flex-col-reverse rounded-2xl border border-brand-border-light bg-white p-4"
                >
                  <dt className="mt-1 text-xs text-brand-text-muted">{f.label}</dt>
                  <dd className="flex items-center gap-2 font-(family-name:--font-display) text-2xl font-bold text-brand-primary-darker">
                    <f.icon className="size-5 text-brand-primary" />
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
            <Button asChild size="lg" className="mt-8">
              <a href="#apply">
                How to apply <ArrowRight />
              </a>
            </Button>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
            <Image
              src="/images/landing/b-band-1.jpg"
              alt="A teacher explaining chemistry at the board"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-page-bg py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading eyebrow="Why choose us" title="Why join AAA?" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {careers.reasons.map((r, i) => {
              const Icon = reasonIcons[i];
              return (
                <div key={r.title} className="rounded-2xl bg-white p-6 md:p-8">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <Icon className="size-5" />
                  </span>
                  <p className="mt-4 text-lg font-semibold text-brand-text-primary">{r.title}</p>
                  <p className="mt-1.5 leading-relaxed text-brand-text-muted">{r.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              align="left"
              eyebrow="Who we look for"
              title="Subjects we teach"
              subtitle="Our faculty teach JEE, NEET, KCET and Foundation batches across four subjects."
            />
            <Button asChild variant="outline">
              <Link href="/landing/about/leadership#faculty">
                Meet the faculty <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {subjects.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-3 rounded-2xl border border-brand-border-light bg-white p-5"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-subtle-bg text-brand-primary">
                  <s.icon className="size-5" />
                </span>
                <span className="font-semibold text-brand-text-primary">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="scroll-mt-24 bg-brand-page-bg py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading eyebrow="Current openings" title="Explore a bright career at AAA" />
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-[1.1fr_1fr]">
            <div className="flex flex-col justify-center rounded-3xl bg-brand-primary-darker p-8 text-white md:p-10">
              <p className="text-xs font-bold uppercase tracking-[2px] text-brand-secondary">
                No open positions right now
              </p>
              <p className="mt-3 font-(family-name:--font-display) text-2xl font-bold leading-snug md:text-3xl">
                We&rsquo;re always glad to hear from passionate teachers.
              </p>
              <p className="mt-3 leading-relaxed text-white/75">
                Send your CV and the subjects you teach, and we&rsquo;ll reach out
                when a role opens up.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button asChild size="lg" variant="inverse">
                  <a href={applyHref}>
                    <Mail /> Email your CV
                  </a>
                </Button>
                <a href={`mailto:${academy.email}`} className="text-sm text-white/75 hover:text-white">
                  {academy.email}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-brand-border-light bg-white p-8">
              <p className="font-semibold text-brand-text-primary">What to include</p>
              <p className="mt-1 text-sm text-brand-text-muted">
                The email button fills these in for you to complete.
              </p>
              <ul className="mt-5 space-y-3">
                {include.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-brand-text-secondary">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-success-bg text-brand-success">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </AboutShell>
  );
}
