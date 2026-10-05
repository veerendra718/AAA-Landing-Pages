import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, HeartHandshake, UserCheck, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { about, academy } from "./data";
import { SectionHeading } from "./SectionHeading";

const highlightIcons = [UserCheck, HeartHandshake];

/**
 * "Who we are". Built to be scanned rather than read: one lead sentence, the
 * programmes as chips and the rest as two short highlights, instead of the three
 * full paragraphs from aaaedu.in (still in `about.paragraphs`). Both photo badges
 * sit inside the image so nothing hangs off its edge. The core values are not
 * repeated here; they belong to /landing/about/mission-vision.
 */
export function AboutIntro({
  id,
  cta = { href: "/landing/about", label: "Read our story" },
}: {
  id?: string;
  cta?: { href: string; label: string };
}) {
  return (
    <section id={id} className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[25/24] overflow-hidden rounded-[28px]">
            <Image
              src={about.image}
              alt="A physics class in progress at the Vijayanagar centre"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
            <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-brand-primary-darker shadow">
              <CalendarDays className="size-3.5 text-brand-primary" />
              Since {academy.founded} · Vijayanagar
            </span>
            <div className="absolute inset-x-4 bottom-4 flex items-center gap-4 rounded-2xl bg-brand-primary-darker/90 px-5 py-4 text-white backdrop-blur-sm sm:inset-x-auto sm:left-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-secondary">
                <Users className="size-6" />
              </span>
              <div>
                <p className="font-(family-name:--font-display) text-3xl font-bold leading-none">
                  {about.enrolled}
                </p>
                <p className="mt-1 text-sm text-white/75">Students enrolled</p>
              </div>
            </div>
          </div>

          <div>
            <SectionHeading align="left" eyebrow="Who we are" title={about.title} />
            <p className="mt-5 text-lg leading-relaxed text-brand-text-secondary">{about.lead}</p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Programmes">
              {about.programmes.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-brand-border-teal bg-brand-subtle-bg/60 px-3 py-1 text-xs font-semibold text-brand-primary-darker"
                >
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-5">
              {about.highlights.map((h, i) => {
                const Icon = highlightIcons[i];
                return (
                  <div key={h.title} className="flex gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-brand-text-primary">{h.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-brand-text-muted">{h.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button asChild size="lg" className="mt-9">
              <Link href={cta.href}>
                {cta.label} <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
