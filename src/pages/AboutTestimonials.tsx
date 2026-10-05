import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

import { testimonialsFull } from "@/components/landing/about-data";
import { AboutShell } from "@/components/landing/AboutShell";
import { SectionHeading } from "@/components/landing/SectionHeading";

export const metadata: Metadata = {
  title: "Testimonials | Arjunaa Academy for Achievers",
  description: "What students and school principals say about learning at Arjunaa Academy for Achievers.",
};

/** The opening sentence, shown as the card's pull quote, and the rest. */
function split(message: string) {
  const match = message.match(/^.+?[.!?](?=\s|$)/);
  const lead = match ? match[0] : message;
  return { lead, rest: message.slice(lead.length).trim() };
}

const leaders = testimonialsFull.filter((t) => t.role !== "Student");
const students = testimonialsFull.filter((t) => t.role === "Student");

/**
 * Testimonials, split by who is speaking: the school leaders first, on a dark
 * band, then the students. No star ratings — the academy publishes none, so
 * the old five-star row on every card was invented.
 */
export default function TestimonialsPage() {
  return (
    <AboutShell
      title="Testimonials"
      subtitle="In their own words — students, and the principals of the schools we work with."
    >
      {/* Counts */}
      <div className="px-4 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 text-sm">
          {[
            { href: "#school-leaders", label: `${leaders.length} school leaders` },
            { href: "#students", label: `${students.length} students` },
          ].map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="rounded-full border border-brand-border-light bg-white px-4 py-1.5 font-semibold text-brand-text-secondary transition-colors hover:border-brand-border-teal hover:text-brand-primary"
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>

      {/* School leaders */}
      <section id="school-leaders" className="scroll-mt-24 px-4 pt-12 md:px-6">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-brand-primary-darker px-6 py-12 text-white md:px-12 md:py-14">
          <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-brand-hero-teal/40 blur-3xl" />
          <p className="relative text-xs font-bold uppercase tracking-[2.5px] text-brand-secondary">
            From school leaders
          </p>
          <div className="relative mt-8 grid gap-8 lg:grid-cols-3">
            {leaders.map((t) => {
              const { lead, rest } = split(t.message);
              return (
                <figure key={t.name} className="flex flex-col">
                  <Quote className="size-8 text-brand-secondary" />
                  <blockquote className="mt-4 flex-1">
                    <p className="font-(family-name:--font-display) text-xl leading-snug md:text-2xl">
                      {lead}
                    </p>
                    {rest && <p className="mt-3 text-sm leading-relaxed text-white/75">{rest}</p>}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-white/15 pt-5">
                    <Image
                      src={t.image}
                      alt=""
                      width={48}
                      height={48}
                      className="size-12 rounded-full object-cover object-top ring-2 ring-white/20"
                    />
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-white/70">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      {/* Students */}
      <section id="students" className="scroll-mt-24 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading align="left" eyebrow="From students" title="What it's like to learn here" />
          <div className="mt-10 columns-1 gap-6 md:columns-2 lg:columns-3">
            {students.map((t) => {
              const { lead, rest } = split(t.message);
              return (
                <figure
                  key={t.name}
                  className="mb-6 break-inside-avoid rounded-2xl border border-brand-border-light bg-white p-6 md:p-7"
                >
                  <Quote className="size-7 text-brand-secondary" />
                  <blockquote className="mt-4">
                    <p className="font-(family-name:--font-display) text-xl leading-snug text-brand-primary-darker">
                      {lead}
                    </p>
                    {rest && (
                      <p className="mt-3 leading-relaxed text-brand-text-secondary">{rest}</p>
                    )}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-brand-border-light pt-5">
                    <Image
                      src={t.image}
                      alt=""
                      width={48}
                      height={48}
                      className="size-12 rounded-full object-cover object-top"
                    />
                    <div>
                      <p className="font-semibold text-brand-text-primary">{t.name}</p>
                      <p className="text-sm text-brand-text-muted">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-3xl bg-brand-page-bg p-6 text-center sm:flex-row sm:text-left md:p-8">
            <div>
              <p className="font-semibold text-brand-text-primary">Words are one thing. Results are another.</p>
              <p className="mt-1 text-sm text-brand-text-muted">
                See the ranks and colleges our students went on to.
              </p>
            </div>
            <Link
              href="/landing/achievers"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-primary-darker"
            >
              See our achievers <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </AboutShell>
  );
}
