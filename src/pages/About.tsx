import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, Compass, MessageSquareQuote, Quote, Users } from "lucide-react";

import { leaderMotto, leaders } from "@/components/landing/about-data";
import { AboutShell } from "@/components/landing/AboutShell";
import { about } from "@/components/landing/data";
import { SectionHeading } from "@/components/landing/SectionHeading";

export const metadata: Metadata = {
  title: "About Us | Arjunaa Academy for Achievers",
  description:
    "Know more about Bangalore-based Arjunaa Academy for Achievers — our story, leadership, and why students choose AAA for JEE, NEET and KCET coaching.",
};

const explore = [
  {
    href: "/landing/about/mission-vision",
    label: "Mission & Vision",
    body: "Cost-effective, world-class education and Principle-Centred Leaders.",
    icon: Compass,
  },
  {
    href: "/landing/about/leadership",
    label: "Leadership & Faculty",
    body: "Meet the founders and the IIT, NIT and IISc-trained team behind every class.",
    icon: Users,
  },
  {
    href: "/landing/about/testimonials",
    label: "Testimonials",
    body: "What students and school principals say about learning at AAA.",
    icon: MessageSquareQuote,
  },
  {
    href: "/landing/about/careers",
    label: "Careers",
    body: "Teach with us. Mission-focused people, real ownership, room to grow.",
    icon: Briefcase,
  },
];

export default function AboutPage() {
  const founder = leaders[0];

  return (
    <AboutShell
      title="About Arjunaa Academy for Achievers"
      subtitle="Training achievers in Bengaluru since 2012 — with the personal attention of a small academy and the results of a big one."
    >
      {/* Our story — the academy's own words in full. The home page carries a
          condensed version; the values, mission & vision and the founders'
          notes each have their own page, linked below. */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="relative aspect-[25/24] overflow-hidden rounded-[28px]">
            <Image
              src={about.image}
              alt="A physics class in progress at the Vijayanagar centre"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Our story" title={about.title} />
            <div className="mt-6 space-y-4 leading-relaxed text-brand-text-secondary">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leader motto */}
      <section className="px-4 md:px-6">
        <div className="relative mx-auto grid max-w-7xl overflow-hidden rounded-[32px] bg-brand-primary-darker text-white md:grid-cols-[1.4fr_1fr]">
          <div className="pointer-events-none absolute -left-24 -top-24 size-80 rounded-full bg-brand-hero-teal/40 blur-3xl" />
          <div className="relative flex flex-col justify-center p-8 md:p-14">
            <Quote className="size-9 text-brand-secondary" />
            <blockquote className="mt-4 font-(family-name:--font-display) text-3xl font-bold leading-tight text-balance md:text-5xl">
              &ldquo;{leaderMotto}&rdquo;
            </blockquote>
            <Link
              href="/landing/about/leadership"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-secondary hover:text-white"
            >
              Meet our leadership <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="relative min-h-72">
            <Image
              src={founder.image}
              alt={`${founder.name}, ${founder.role}`}
              fill
              sizes="(min-width: 768px) 480px, 100vw"
              className="object-cover"
              style={{ objectPosition: founder.imagePosition }}
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 to-transparent px-6 pb-5 pt-16">
              <p className="font-semibold">{founder.name}</p>
              <p className="text-sm text-white/75">{founder.role}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-20 md:h-28" />

      {/* Explore the rest of About */}
      <section className="bg-brand-page-bg py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading eyebrow="Know us better" title="More about AAA" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {explore.map((e) => (
              <Link
                key={e.href}
                href={e.href}
                className="group flex flex-col rounded-2xl border border-brand-border-light bg-white p-6 transition-shadow hover:shadow-xl"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <e.icon className="size-5" />
                </span>
                <p className="mt-4 flex items-center justify-between font-semibold text-brand-text-primary">
                  {e.label}
                  <ArrowRight className="size-4 text-brand-primary transition-transform group-hover:translate-x-1" />
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-text-muted">{e.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </AboutShell>
  );
}
