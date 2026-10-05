import Link from "next/link";
import { ArrowRight, CalendarCheck, Check, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { academy, registerUrl } from "./data";

const visitIncludes = [
  "Meet the faculty who will teach you",
  "Sit in on a live demo class",
  "Free one-to-one counselling session",
  "See the classrooms, labs and doubt desk",
];

/**
 * The teal banner that closes the landing page and every section page. Split in
 * two: the pitch and the actions on the left, what a visit actually involves on
 * the right, so "Book a visit" is a concrete offer rather than a slogan. Both
 * buttons are the same height and shape so they read as a pair.
 */
export function ClosingCta({
  visitHref,
  subtitle,
  secondary,
}: {
  /** Where "Book a visit" goes — `#visit` on the landing page itself. */
  visitHref: string;
  subtitle: string;
  /** Replaces the default "Start free online" button. */
  secondary?: React.ReactNode;
}) {
  return (
    <section className="px-4 py-20 md:px-6">
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 overflow-hidden rounded-[32px] bg-brand-primary px-6 py-12 text-white md:px-12 md:py-14 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
        <div className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-10 size-80 rounded-full bg-brand-hero-teal/50 blur-3xl" />

        <div className="relative">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
            <span className="size-1.5 rounded-full bg-brand-secondary" />
            Admissions open · 2026–27
          </p>
          <h2 className="mt-5 font-(family-name:--font-display) text-3xl font-bold leading-tight text-balance md:text-[44px]">
            {academy.tagline}.
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-white/80">{subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" variant="inverse">
              <Link href={visitHref}>
                <CalendarCheck /> Book a visit
              </Link>
            </Button>
            {secondary ?? (
              <Button asChild size="lg" variant="inverse-outline">
                <Link href={registerUrl}>
                  Start free online <ArrowRight />
                </Link>
              </Button>
            )}
          </div>

          <a
            href={`tel:+91${academy.phones[0]}`}
            className="mt-6 inline-flex items-center gap-2 text-sm text-white/75 hover:text-white"
          >
            <Phone className="size-4" />
            Prefer to talk first? Call <span className="font-semibold text-white">{academy.phones[0]}</span>
          </a>
        </div>

        <div className="relative rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm md:p-7">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-brand-secondary">
            <CalendarCheck className="size-4" />
            Your free visit
          </p>
          <ul className="mt-5 space-y-3.5">
            {visitIncludes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-snug">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white text-brand-primary">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-white/15 pt-4 text-xs text-white/70">
            A visit takes about an hour. Can&apos;t come in? We&apos;ll visit you at home or meet online.
          </p>
        </div>
      </div>
    </section>
  );
}
