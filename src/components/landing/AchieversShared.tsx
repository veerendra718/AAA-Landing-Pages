"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, GraduationCap, Search, Trophy } from "lucide-react";
import { useState } from "react";

import { type Achiever } from "./achievers-data";
import { achieverCount } from "./achievers-display";
import { achieverSections, formatRank, sectionBySlug } from "./achievers-display";
import { PageShell } from "./PageShell";

const base = "/landing/achievers";

/**
 * One student as a photo card — photo, then name, rank and college. Used by the
 * home page's results preview. The crop sits high (50% 15%) so full-length
 * photos show the face rather than the shirt.
 */
export function AchieverCard({ student }: { student: Achiever }) {
  return (
    <figure className="group flex flex-col overflow-hidden rounded-xl border border-brand-border-light bg-white shadow-sm card-hover">
      <div className="relative aspect-4/5 overflow-hidden bg-brand-subtle-bg">
        <Image
          src={student.image}
          alt={student.name}
          fill
          sizes="(min-width: 1024px) 200px, (min-width: 640px) 25vw, 33vw"
          className="object-cover object-[50%_15%] transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <figcaption className="flex flex-1 flex-col px-2 py-2.5 text-center">
        <span className="block truncate text-xs font-semibold text-brand-text-primary sm:text-[13px]">
          {student.name}
        </span>
        <span className="mt-1 flex items-start justify-center gap-1 text-[11px] font-semibold leading-snug text-brand-primary">
          <Trophy className="mt-px size-3 shrink-0" />
          <span className="line-clamp-2">{formatRank(student.rank)}</span>
        </span>
        {student.college && (
          <span className="mt-0.5 flex items-center justify-center gap-1 text-[11px] text-brand-text-muted">
            <GraduationCap className="size-3 shrink-0 text-brand-primary" />
            <span className="truncate">{student.college}</span>
          </span>
        )}
      </figcaption>
    </figure>
  );
}

/**
 * One student as a compact row — a round head-and-shoulders photo beside the
 * name, rank and college. The achiever pages use this: the source photos range
 * from passport close-ups to full-length phone shots, and a small, high circular
 * crop makes them all read the same size. Every row is the same height whether
 * or not a college is listed.
 */
export function AchieverRow({ student }: { student: Achiever }) {
  return (
    <figure className="flex h-full items-center gap-3.5 rounded-2xl border border-brand-border-light bg-white p-3 card-hover">
      <div className="relative size-16 shrink-0 overflow-hidden rounded-full bg-brand-subtle-bg ring-2 ring-brand-subtle-bg">
        <Image
          src={student.image}
          alt={student.name}
          fill
          sizes="64px"
          className="object-cover object-[50%_12%]"
        />
      </div>
      <figcaption className="min-w-0 flex-1">
        <span className="block truncate text-sm font-semibold text-brand-text-primary">
          {student.name}
        </span>
        <span className="mt-1 inline-flex max-w-full items-center gap-1 rounded-full bg-brand-subtle-bg px-2 py-0.5 text-xs font-semibold text-brand-primary-darker">
          <Trophy className="size-3 shrink-0 text-brand-primary" />
          <span className="truncate">{formatRank(student.rank)}</span>
        </span>
        <span className="mt-1 flex min-h-4 items-center gap-1 text-xs text-brand-text-muted">
          {student.college && (
            <>
              <GraduationCap className="size-3.5 shrink-0 text-brand-primary" />
              <span className="truncate">{student.college}</span>
            </>
          )}
        </span>
      </figcaption>
    </figure>
  );
}

export function AchieverGrid({ students }: { students: Achiever[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {students.map((s) => (
        <AchieverRow key={`${s.name}-${s.rank}`} student={s} />
      ))}
    </div>
  );
}

/** The other result categories, as cards, at the foot of a category page. */
export function AchieverCrossLinks({ except }: { except?: string }) {
  const others = achieverSections.filter((g) => g.slug !== except);
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {others.map((g) => (
        <Link
          key={g.slug}
          href={`${base}/${g.slug}`}
          className="group flex items-center justify-between gap-3 rounded-2xl border border-brand-border-light bg-white p-4 card-hover"
        >
          <span>
            <span className="block font-semibold text-brand-text-primary">{g.name}</span>
            <span className="block text-sm text-brand-text-muted">{g.students.length} students</span>
          </span>
          <ArrowRight className="size-4 shrink-0 text-brand-primary transition-transform group-hover:translate-x-1" />
        </Link>
      ))}
    </div>
  );
}

/** One result category: a search over its students, the gallery, and the
 *  other categories. */
export function AchieverGroupPage({ slug }: { slug: string }) {
  const group = sectionBySlug(slug);
  const [query, setQuery] = useState("");
  if (!group) return null;

  const q = query.trim().toLowerCase();
  const shown = q
    ? group.students.filter(
        (s) => s.name.toLowerCase().includes(q) || s.college.toLowerCase().includes(q),
      )
    : group.students;

  return (
    <PageShell title={group.heading} subtitle={group.quote}>
      <section className="px-4 pb-14 pt-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link
                href={base}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-primary-darker"
              >
                <ArrowLeft className="size-4" /> All results
              </Link>
              <p className="text-sm text-brand-text-muted">
                <span className="font-semibold text-brand-text-primary">{group.students.length}</span>{" "}
                {group.name} achievers · {achieverCount} in total
              </p>
            </div>
            <label className="relative w-full sm:w-72">
              <span className="sr-only">Search by name or college</span>
              <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-brand-text-muted" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or college"
                className="h-10 w-full rounded-full border border-brand-border-light bg-white pl-10 pr-4 text-sm outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
              />
            </label>
          </div>

          <div className="mt-8">
            {shown.length > 0 ? (
              <AchieverGrid students={shown} />
            ) : (
              <p className="rounded-2xl border border-dashed border-brand-border-teal bg-brand-subtle-bg/50 p-8 text-center text-sm text-brand-text-muted">
                No {group.name} achiever matches &ldquo;{query}&rdquo;.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="bg-brand-page-bg px-4 py-14 md:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-(family-name:--font-display) text-2xl font-bold text-brand-primary-darker md:text-3xl">
            Other results
          </h2>
          <div className="mt-6">
            <AchieverCrossLinks except={group.slug} />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
