"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type Achiever, type AchieverSlug } from "./achievers-data";
import { achieverSections as achieverGroups } from "./achievers-display";
import { SectionHeading } from "./SectionHeading";
import { AchieverCard } from "./AchieversShared";

/** Cards shown per tab. 12 divides cleanly into the 2 / 3 / 4 / 6 column grid
 *  at every breakpoint, so no row is left half-empty. The full gallery lives
 *  on /landing/achievers. */
const previewSize = 12;

// One tab per exam and no "All": a mixed view repeated students who appear
// under two exams, and read as a jumble rather than a set of results.
type Tab = AchieverSlug;

const tabs: { id: Tab; label: string }[] = achieverGroups.map((g) => ({
  id: g.slug as Tab,
  label: g.name,
}));

type ShownStudent = { key: string; student: Achiever };

function previewFor(tab: Tab): ShownStudent[] {
  const group = achieverGroups.find((g) => g.slug === tab);
  if (!group) return [];
  return group.students.slice(0, previewSize).map((student) => ({
    key: `${group.slug}-${student.name}-${student.rank}`,
    student,
  }));
}

export function ToppersSection() {
  // Opens on the first exam in display order (JEE Advanced).
  const [tab, setTab] = useState<Tab>(tabs[0].id);
  const group = achieverGroups.find((g) => g.slug === tab);
  const shown = previewFor(tab);
  const count = group?.students.length ?? 0;
  const href = group ? `/landing/achievers/${group.slug}` : "/landing/achievers";

  return (
    <section id="results" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Results"
          title="Achievers from our classrooms"
          subtitle="Ranks and colleges exactly as the academy publishes them — KCET, NEET, JEE Main and JEE Advanced."
        />

        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Filter results by exam"
            className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-brand-border-light bg-brand-page-bg p-1"
            onKeyDown={(e) => {
              // Roving focus, in the order the tabs read left to right.
              const at = tabs.findIndex((t) => t.id === tab);
              let next: number;
              if (e.key === "ArrowLeft") next = (at - 1 + tabs.length) % tabs.length;
              else if (e.key === "ArrowRight") next = (at + 1) % tabs.length;
              else if (e.key === "Home") next = 0;
              else if (e.key === "End") next = tabs.length - 1;
              else return;
              e.preventDefault();
              setTab(tabs[next].id);
              e.currentTarget.querySelectorAll<HTMLElement>('[role="tab"]')[next]?.focus();
            }}
          >
            {tabs.map((t) => (
              <button
                key={t.id}
                id={`toppers-tab-${t.id}`}
                role="tab"
                aria-selected={tab === t.id}
                aria-controls="toppers-panel"
                tabIndex={tab === t.id ? 0 : -1}
                onClick={() => setTab(t.id)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-semibold transition-colors",
                  tab === t.id
                    ? "bg-brand-primary text-white shadow"
                    : "text-brand-text-secondary hover:text-brand-primary",
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {group && (
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-brand-text-muted italic line-clamp-2">
            “{group.quote}”
          </p>
        )}

        <div
          id="toppers-panel"
          role="tabpanel"
          aria-labelledby={`toppers-tab-${tab}`}
          tabIndex={0}
          className="mt-10 grid grid-cols-2 gap-4 focus-visible:outline-none sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
        >
          {shown.map(({ key, student }) => (
            <AchieverCard key={key} student={student} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline">
            <Link href={href}>
              See all {count} {group?.name} results
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
