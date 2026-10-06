import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { facultyMembers, leaders } from "./about-data";
import { SectionHeading } from "./SectionHeading";

/**
 * The people who teach, for V2: the two founders, then the faculty as a row of
 * photo cards (a snap scroller on small screens, a grid from `lg`). Everything
 * comes from about-data.ts — names, roles, qualifications and photos as
 * aaaedu.in publishes them. Full bios live on /landing/about/leadership.
 */
export function FacultyShowcase({ id = "faculty" }: { id?: string }) {
  const shown = facultyMembers.slice(0, 8);

  return (
    <section id={id} className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="Faculty"
            title="Taught by people who've cracked these exams"
            subtitle="Alumni of IITs, NITs, IISc and BITS, research scientists and NEET toppers — led by engineers who see education as a service. The same faculty teach the Vijayanagar classroom batches and the live online classes."
          />
          <Button asChild variant="outline">
            <Link href="/landing/about/leadership">
              Meet the full team <ArrowRight />
            </Link>
          </Button>
        </div>

        {/* Founders */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {leaders.map((l) => (
            <article
              key={l.name}
              className="flex items-center gap-4 rounded-3xl border border-brand-border-light bg-brand-page-bg p-3 pr-5"
            >
              <div className="relative size-20 shrink-0 overflow-hidden rounded-2xl sm:size-24">
                <Image
                  src={l.image}
                  alt={`${l.name}, ${l.role}`}
                  fill
                  sizes="96px"
                  className="object-cover"
                  style={{ objectPosition: l.imagePosition }}
                />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-wide text-brand-primary">{l.role}</p>
                <p className="text-lg font-semibold text-brand-text-primary">{l.name}</p>
                <p className="mt-0.5 text-xs leading-snug text-brand-text-muted">{l.credentials}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Faculty */}
      <ul className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-4 lg:overflow-visible">
        {shown.map((f) => (
          <li
            key={f.name}
            className="group w-[62vw] shrink-0 snap-start overflow-hidden rounded-3xl border border-brand-border-light bg-white sm:w-[38vw] lg:w-auto"
          >
            <div className="relative aspect-[4/4.2] overflow-hidden bg-brand-subtle-bg">
              <Image
                src={f.image}
                alt={f.name}
                fill
                sizes="(min-width: 1024px) 300px, 62vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-4">
              <p className="font-semibold text-brand-text-primary">{f.name}</p>
              <p className="text-sm font-medium text-brand-primary">{f.role}</p>
              <p className="mt-2 flex gap-1.5 text-xs leading-snug text-brand-text-muted">
                <GraduationCap className="size-3.5 shrink-0" />
                {f.qualification}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
