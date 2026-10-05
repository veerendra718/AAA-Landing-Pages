import type { Metadata } from "next";
import Image from "next/image";
import { Check, Eye, HeartHandshake, Sparkles, Target } from "lucide-react";

import { leaders } from "@/components/landing/about-data";
import { AboutShell } from "@/components/landing/AboutShell";
import { about, mission, values, vision } from "@/components/landing/data";
import { SectionHeading } from "@/components/landing/SectionHeading";

export const metadata: Metadata = {
  title: "Mission & Vision | Arjunaa Academy for Achievers",
  description:
    "Cost-effective, world-class education that creates professionally superior manpower and Principle-Centred Leaders.",
};

const valueIcons = [Target, HeartHandshake, Sparkles];

export default function MissionVisionPage() {
  const founder = leaders[0];

  return (
    <AboutShell
      title="Mission & Vision"
      subtitle="Education, for us, is a sacred service — competence for the head and values for the heart."
    >
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:px-6 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-[32px] bg-brand-primary-darker p-8 text-white md:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-brand-hero-teal/40 blur-3xl" />
            <span className="relative flex size-14 items-center justify-center rounded-2xl bg-white/10 text-brand-secondary">
              <Target className="size-7" />
            </span>
            <h2 className="relative mt-6 font-(family-name:--font-display) text-4xl font-bold">Mission</h2>
            <p className="relative mt-4 text-lg leading-relaxed text-white/85">{mission}</p>
          </article>
          <article className="relative overflow-hidden rounded-[32px] bg-brand-subtle-bg p-8 md:p-12">
            <div className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full bg-brand-secondary/50 blur-3xl" />
            <span className="relative flex size-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
              <Eye className="size-7" />
            </span>
            <h2 className="relative mt-6 font-(family-name:--font-display) text-4xl font-bold text-brand-primary-darker">
              Vision
            </h2>
            <p className="relative mt-4 text-lg leading-relaxed text-brand-text-secondary">{vision}</p>
          </article>
        </div>
      </section>

      <section className="bg-brand-page-bg py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading eyebrow="Our core values" title="Commitment. Culture. Catalyze." />
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {values.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <div key={v.title} className="rounded-2xl bg-white p-6 md:p-8">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                    <Icon className="size-5" />
                  </span>
                  <p className="mt-4 font-(family-name:--font-display) text-2xl font-bold text-brand-primary-darker">
                    {v.title}
                  </p>
                  <p className="mt-1 leading-relaxed text-brand-text-muted">{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 md:px-6 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
            <Image
              src={about.image}
              alt="A physics class in progress at the Vijayanagar centre"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="How we live it"
              title="Principles every classroom runs on"
              subtitle={`From ${founder.name}, ${founder.role}.`}
            />
            <ul className="mt-8 space-y-4">
              {founder.principles.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white">
                    <Check className="size-3.5" />
                  </span>
                  <span className="font-(family-name:--font-display) text-xl leading-snug text-brand-text-primary">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </AboutShell>
  );
}
