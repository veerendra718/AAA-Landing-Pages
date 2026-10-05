import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  HeartHandshake,
  IndianRupee,
  MessagesSquare,
  Trophy,
  Users,
} from "lucide-react";

import { whyChoose } from "./data";
import { SectionHeading } from "./SectionHeading";

const whyIcons = [BookOpen, Users, GraduationCap, Trophy, ClipboardCheck, MessagesSquare, HeartHandshake, IndianRupee];

/**
 * Light like the sections around it — the old full-bleed dark band with
 * translucent tiles was the one section on the page in a different visual
 * language. The heading sits in a sticky left column; the eight reasons are
 * white cards on the page tint, the same card recipe the rest of the page uses.
 * The headline results are not repeated here — they live in the hero's stats.
 */
export function WhyChoose({
  id,
  eyebrow = "Why Arjunaa",
  title = "Big-institute results. Small-batch attention.",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section id={id} className="scroll-mt-20 bg-brand-page-bg py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-24">
          <SectionHeading
            align="left"
            eyebrow={eyebrow}
            title={title}
            subtitle="The attention of a small academy, with the depth of a big one."
          />
          <Link
            href="/landing/achievers"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-primary-darker"
          >
            See every result <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {whyChoose.map((w, i) => {
            const Icon = whyIcons[i];
            return (
              <div
                key={w.title}
                className="group flex gap-4 rounded-2xl border border-brand-border-light bg-white p-5 transition-colors hover:border-brand-border-teal"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-subtle-bg text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="font-semibold text-brand-text-primary">{w.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-text-muted">{w.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
