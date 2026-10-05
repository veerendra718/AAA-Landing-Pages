import type { Metadata } from "next";
import Image from "next/image";
import { Quote, Users } from "lucide-react";

import { facultyMembers, leaders } from "@/components/landing/about-data";
import { AboutShell } from "@/components/landing/AboutShell";
import { FacultyGrid } from "@/components/landing/FacultyGrid";
import { SectionHeading } from "@/components/landing/SectionHeading";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Leadership Team & Faculty | Arjunaa Academy for Achievers",
  description:
    "Meet the founders of Arjunaa Academy for Achievers and the faculty from IITs, NITs, BITS and leading universities who teach JEE, NEET and KCET.",
};

/** "Hareesh P. K." -> "hareesh-p-k", for the founders' in-page anchors. */
function slug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function LeadershipPage() {
  return (
    <AboutShell
      title="Leadership Team & Faculty"
      subtitle="The founders who set the academy's direction, and the faculty who teach every batch."
    >
      {/* On this page */}
      <nav aria-label="On this page" className="px-4 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
          {leaders.map((l) => (
            <a
              key={l.name}
              href={`#${slug(l.name)}`}
              className="flex items-center gap-3 rounded-full border border-brand-border-light bg-white py-1.5 pl-1.5 pr-4 transition-colors hover:border-brand-border-teal"
            >
              <Image
                src={l.image}
                alt=""
                width={36}
                height={36}
                className="size-9 rounded-full object-cover"
                style={{ objectPosition: l.imagePosition }}
              />
              <span className="text-sm">
                <span className="block font-semibold leading-tight text-brand-text-primary">{l.name}</span>
                <span className="block text-xs text-brand-text-muted">{l.role}</span>
              </span>
            </a>
          ))}
          <a
            href="#faculty"
            className="flex items-center gap-3 rounded-full border border-brand-border-light bg-white py-1.5 pl-1.5 pr-4 transition-colors hover:border-brand-border-teal"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-brand-subtle-bg text-brand-primary">
              <Users className="size-4" />
            </span>
            <span className="text-sm">
              <span className="block font-semibold leading-tight text-brand-text-primary">Our faculty</span>
              <span className="block text-xs text-brand-text-muted">{facultyMembers.length} teachers</span>
            </span>
          </a>
        </div>
      </nav>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-20 px-4 md:space-y-28 md:px-6">
          {leaders.map((l, i) => (
            <article
              key={l.name}
              id={slug(l.name)}
              className="grid scroll-mt-24 items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
            >
              <div className={cn("lg:sticky lg:top-24", i % 2 === 1 && "lg:order-2")}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-brand-subtle-bg">
                  <Image
                    src={l.image}
                    alt={`${l.name}, ${l.role}`}
                    fill
                    sizes="(min-width: 1024px) 460px, 100vw"
                    className="object-cover"
                    style={{ objectPosition: l.imagePosition }}
                  />
                </div>
                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-[2.5px] text-brand-primary">{l.role}</p>
                  <p className="mt-1 font-(family-name:--font-display) text-3xl font-bold text-brand-primary-darker">
                    {l.name}
                  </p>
                  <p className="mt-1 text-sm text-brand-text-muted">{l.credentials}</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[2.5px] text-brand-primary">{l.noteLabel}</p>
                <p className="mt-5 font-(family-name:--font-display) text-2xl leading-snug text-brand-primary-darker md:text-[28px]">
                  {l.note[0]}
                </p>
                <div className="mt-6 space-y-5 border-l-2 border-brand-border-teal pl-5 text-base leading-relaxed text-brand-text-secondary md:text-[17px]">
                  {l.note.slice(1).map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                {l.principles.length > 0 && (
                  <div className="mt-10 rounded-3xl bg-brand-primary-darker p-6 text-white md:p-8">
                    <Quote className="size-7 text-brand-secondary" />
                    <ul className="mt-4 space-y-3">
                      {l.principles.map((p) => (
                        <li
                          key={p}
                          className="font-(family-name:--font-display) text-xl leading-snug md:text-2xl"
                        >
                          &ldquo;{p}&rdquo;
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="faculty" className="scroll-mt-24 bg-brand-page-bg py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Our faculty"
            title="Taught by people who've been there"
            subtitle="Alumni of IIT Kharagpur, NIT Warangal, MNIT Jaipur, BITS Pilani and leading universities — teaching Physics, Chemistry, Mathematics and Biology."
          />
          <FacultyGrid />
        </div>
      </section>
    </AboutShell>
  );
}
