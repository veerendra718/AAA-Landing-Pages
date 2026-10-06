import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocation } from "react-router-dom";
import {
  ArrowRight,
  BookOpenText,
  Building2,
  CalendarCheck,
  Check,
  ChevronDown,
  ClipboardCheck,
  Clock,
  Gift,
  MonitorPlay,
  PhoneCall,
  Smartphone,
  Sparkles,
  Tag,
  UserCheck,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  classroomClasses,
  classroomDetails,
  classroomIncludes,
  classroomPrice,
  onlineClasses,
  onlineExams,
  onlinePlans,
  packageFilterSlug,
  packagesFor,
  planComparison,
  type PlanCell,
  type OnlineExam,
  type OnlinePackage,
  type PackageClass,
  type PackagePrice,
} from "./courses-data";
import { WeekLoop } from "./AppShowcase";
import { CourseEnquiryForm, type EnquiryIntent } from "./CourseEnquiryForm";
import { academy, registerUrl } from "./data";
import { SectionHeading } from "./SectionHeading";

export type PackageMode = "online" | "classroom";

export const formatPrice = (rupees: number) => `₹${rupees.toLocaleString("en-IN")}`;

const highlights = {
  online: [
    { icon: UserCheck, text: "Same faculty as the classroom" },
    { icon: MonitorPlay, text: "Live classes + video lectures" },
    { icon: Gift, text: "Free plan · 7-day trial of paid plans" },
  ],
  classroom: [
    { icon: Building2, text: "Taught at the Vijayanagar centre" },
    { icon: UserCheck, text: "Batches of up to 30" },
    { icon: Smartphone, text: `${academy.appName} Advanced plan free` },
  ],
};

/** The strip under a packages page's title: what every package gives, and two actions. */
export function OnlineHighlights({
  jumpHref,
  jumpLabel,
  mode = "online",
}: {
  jumpHref: string;
  jumpLabel: string;
  mode?: PackageMode;
}) {
  return (
    <div className="px-4 pt-2 md:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-3xl border border-brand-border-light bg-white p-5 md:flex-row md:items-center md:justify-between md:p-6">
        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          {highlights[mode].map((h) => (
            <li key={h.text} className="flex items-center gap-2 text-sm font-medium text-brand-text-secondary">
              <span className="flex size-8 items-center justify-center rounded-lg bg-brand-subtle-bg text-brand-primary">
                <h.icon className="size-4" />
              </span>
              {h.text}
            </li>
          ))}
        </ul>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Button asChild size="lg" variant="outline">
            <a href={jumpHref}>{jumpLabel}</a>
          </Button>
          <Button asChild size="lg">
            {mode === "online" ? (
              <Link href={registerUrl}>
                Start free <ArrowRight />
              </Link>
            ) : (
              <Link href="/landing/contact#enquire">
                <CalendarCheck /> Book a visit
              </Link>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

const planFeatures = (id: "free" | "standard" | "advanced") => onlinePlans.find((p) => p.id === id)!.features;

/**
 * One plan of a package, laid out like the AAA app's own plan cards:
 * a tier pill, the plan name, the price with its current discount, the
 * features, and the action at the foot.
 */
function PlanCard({
  tier,
  price,
  featured = false,
}: {
  tier: "free" | "standard" | "advanced";
  price?: PackagePrice;
  featured?: boolean;
}) {
  const name = tierNames[tier];
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-[2rem] bg-white p-6 md:p-7",
        featured
          ? "border-2 border-brand-primary shadow-[0_24px_50px_-24px_rgba(0,83,91,0.45)]"
          : "border border-brand-border-teal",
      )}
    >
      {featured && (
        <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-brand-primary px-4 py-1.5 text-xs font-bold tracking-wide whitespace-nowrap text-white uppercase">
          <Sparkles className="size-3.5" /> Most complete
        </span>
      )}
      <span
        className={cn(
          "w-fit rounded-full px-3 py-1 text-xs font-semibold",
          tier === "free" ? "bg-brand-page-bg text-brand-text-secondary" : "bg-brand-primary text-white",
        )}
      >
        {name}
      </span>
      <p className="mt-4 text-2xl font-extrabold text-brand-text-primary">{name} Plan</p>
      {/* As on the classroom cards: the price the student pays leads, the
          price before the discount is struck through beside the saving. */}
      <p className="mt-2 flex flex-wrap items-baseline gap-x-2">
        <span className="text-4xl font-bold tracking-tight text-brand-text-primary">
          {price ? formatPrice(price.price - price.off) : "₹0"}
        </span>
        {price && <span className="text-sm text-brand-text-muted">7-day free trial</span>}
      </p>
      {price ? (
        <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
          <span className="text-brand-text-muted line-through">{formatPrice(price.price)}</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-success-bg px-2.5 py-0.5 text-xs font-bold text-brand-success">
            <Tag className="size-3" /> {price.offLabel ?? `${formatPrice(price.off)} off`}
          </span>
        </p>
      ) : (
        <span className="mt-2 text-xs font-semibold text-brand-text-muted">No payment needed</span>
      )}
      <ul className="mt-6 flex-1 space-y-3.5">
        {planFeatures(tier).map((f) => (
          <li key={f} className="flex items-start gap-3 text-[15px] text-brand-text-secondary">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white">
              <Check className="size-3" strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>
      <Button
        asChild
        size="lg"
        variant={featured ? "default" : "outline"}
        className="mt-8 w-full rounded-2xl"
      >
        <Link href={registerUrl}>{tier === "free" ? "Sign up free" : "Start 7-day free trial"}</Link>
      </Button>
    </div>
  );
}

const tierNames = { free: "Free", standard: "Standard", advanced: "Advanced" } as const;

/** A package's heading, then its plans side by side: Free, Standard and (where offered) Advanced. */
/** One cell of the comparison: a tick, a cross, or the plan's limit. */
function PlanCellView({ value }: { value: PlanCell }) {
  if (value === true)
    return (
      <span className="inline-flex size-5 items-center justify-center rounded-full bg-brand-primary text-white">
        <Check className="size-3" strokeWidth={3} />
        <span className="sr-only">Included</span>
      </span>
    );
  if (value === false)
    return (
      <span className="inline-flex size-5 items-center justify-center rounded-full bg-brand-page-bg text-brand-text-muted">
        <X className="size-3" strokeWidth={3} />
        <span className="sr-only">Not included</span>
      </span>
    );
  return (
    <span className="text-sm text-brand-text-secondary">{value}</span>
  );
}

/**
 * Every plan's limits side by side, from the app's own "Compare Plans" table.
 * The Advanced column is left out for a course sold without it. On a phone the table scrolls sideways with
 * the feature names held in place.
 */
function PlanComparison({ hasAdvanced }: { hasAdvanced: boolean }) {
  const tiers = (["free", "standard", "advanced"] as const).filter((t) => t !== "advanced" || hasAdvanced);
  return (
    <div className="overflow-x-auto rounded-3xl border border-brand-border-light bg-white">
      <table className={cn("w-full text-left", hasAdvanced ? "min-w-[640px]" : "min-w-[480px]")}>
        <thead>
          <tr className="border-b border-brand-border-light">
            <th scope="col" className="sticky left-0 z-10 bg-white px-5 py-4 text-xs font-bold uppercase tracking-wide text-brand-text-muted">
              Feature
            </th>
            {tiers.map((t) => (
              <th
                key={t}
                scope="col"
                className="px-4 py-4 text-center text-sm font-bold text-brand-text-primary"
              >
                {tierNames[t]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planComparison.map((r) => (
            <tr key={r.feature} className="border-t border-brand-border-light first:border-t-0">
              <th scope="row" className="sticky left-0 z-10 bg-white px-5 py-3 text-sm font-medium text-brand-text-primary">
                {r.feature}
              </th>
              {tiers.map((t) => (
                <td key={t} className="px-4 py-3 text-center">
                  <PlanCellView value={r[t]} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** The plan comparison with its hide / show button; open from the start. */
function ComparisonBlock({ id, hasAdvanced }: { id: string; hasAdvanced: boolean }) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="mt-6 text-center">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-1.5 rounded-full border border-brand-border-teal bg-white px-5 py-2.5 text-sm font-semibold text-brand-primary transition-colors hover:bg-brand-subtle-bg"
        >
          {open ? "Hide plan comparison" : "Compare all plan features"}
          <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} />
        </button>
      </div>
      <div id={id} hidden={!open} className="mt-6">
        <PlanComparison hasAdvanced={hasAdvanced} />
      </div>
    </>
  );
}

/**
 * A course's heading and its plans side by side. `comparison` puts the plan
 * comparison under the cards — used when the course is the only one shown;
 * with several, the comparison is shown once after all of them instead.
 */
function PackagePlans({ pkg, cls, comparison }: { pkg: OnlinePackage; cls: PackageClass; comparison: boolean }) {
  const p = pkg.prices[cls]!;
  return (
    <article id={pkg.slug} className="scroll-mt-24">
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="font-(family-name:--font-display) text-3xl font-bold text-brand-primary-darker">{pkg.name}</h3>
        <ul className="flex flex-wrap gap-1.5" aria-label="Prepares for">
          {pkg.exams.map((e) => (
            <li key={e} className="rounded-full bg-brand-subtle-bg px-3 py-1 text-xs font-semibold text-brand-primary-darker">
              {e}
            </li>
          ))}
        </ul>
        {!p.advanced && (
          <span className="text-sm text-brand-text-muted">Offered in Free and Standard only</span>
        )}
      </div>
      <div className={cn("mt-8 grid gap-6", p.advanced ? "md:grid-cols-3" : "md:grid-cols-2 lg:max-w-4xl")}>
        <PlanCard tier="free" />
        <PlanCard tier="standard" price={p.standard} featured={!p.advanced} />
        {p.advanced && <PlanCard tier="advanced" price={p.advanced} featured />}
      </div>
      {comparison && <ComparisonBlock id={`${pkg.slug}-${cls}-compare`} hasAdvanced={!!p.advanced} />}
      <Link
        href={`${classroomClasses.find((c) => c.id === cls)!.href}#${packageFilterSlug(pkg)}`}
        className="group mt-6 flex flex-col gap-2 rounded-2xl border border-brand-border-light bg-brand-page-bg px-5 py-4 transition-colors hover:border-brand-border-teal hover:bg-white sm:flex-row sm:items-center sm:justify-between"
      >
        <span className="flex items-center gap-3 text-sm text-brand-text-secondary">
          <Building2 className="size-5 shrink-0 text-brand-primary" />
          <span>
            <span className="font-semibold text-brand-text-primary">Prefer the classroom?</span> {pkg.name} is also
            taught at Vijayanagar — {formatPrice(classroomPrice(pkg, cls).price)}, with the Advanced plan free.
          </span>
        </span>
        <span className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-primary">
          Classroom version <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </article>
  );
}

const advancedFeatures = planFeatures("advanced").filter((f) => !f.startsWith("Everything in"));

/**
 * A classroom package as a compact card, so packages sit side by side: the
 * name and exams, what the course is about (subjects, timings, tests), the
 * price after its discount, and the two ways to act on it. What every classroom package includes is shown
 * once, below the cards (`ClassroomIncludes`), rather than in every card.
 */
function ClassroomCard({
  pkg,
  cls,
  onEnquire,
}: {
  pkg: OnlinePackage;
  cls: PackageClass;
  onEnquire: (intent: EnquiryIntent) => void;
}) {
  const price = classroomPrice(pkg, cls);
  const info = classroomClasses.find((c) => c.id === cls)!;
  const online = onlineClasses.find((c) => c.id === cls)!;
  const details = classroomDetails[pkg.slug];

  return (
    <article
      id={pkg.slug}
      className="flex h-full scroll-mt-40 flex-col rounded-3xl border border-brand-border-light bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand-border-teal hover:shadow-[0_28px_60px_-28px_rgba(0,83,91,0.45)]"
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-primary">
        {info.label} · {info.course}
      </p>
      <h3 className="mt-1 font-(family-name:--font-display) text-2xl font-bold text-brand-primary-darker">{pkg.name}</h3>

      <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Prepares for">
        {pkg.exams.map((e) => (
          <li key={e} className="rounded-full bg-brand-subtle-bg px-2.5 py-0.5 text-xs font-semibold text-brand-primary-darker">
            {e}
          </li>
        ))}
      </ul>

      {details && (
        <>
          <p className="mt-4 text-sm leading-relaxed text-brand-text-secondary">{details.summary}</p>
          <dl className="mt-4 space-y-2.5 border-t border-brand-border-light pt-4 text-sm">
            {[
              { icon: BookOpenText, label: "Subjects", value: details.subjects },
              { icon: Clock, label: "Timings", value: details.schedule },
              { icon: ClipboardCheck, label: "Tests", value: details.tests },
            ].map((d) => (
              <div key={d.label} className="flex items-start gap-2.5">
                <dt className="flex shrink-0 items-center">
                  <d.icon className="size-4 text-brand-primary" />
                  <span className="sr-only">{d.label}</span>
                </dt>
                <dd className="text-brand-text-secondary">{d.value}</dd>
              </div>
            ))}
          </dl>
        </>
      )}

      {/* The price the student pays leads; the price before the discount is
          shown struck through beside the saving. */}
      <div className="mt-5 rounded-2xl bg-brand-page-bg p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-muted">You pay</p>
        <p className="mt-0.5 text-3xl font-bold tracking-tight text-brand-primary-darker">
          {formatPrice(price.price - price.off)}
        </p>
        <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
          <span className="text-brand-text-muted line-through">{formatPrice(price.price)}</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-success-bg px-2 py-0.5 text-xs font-bold text-brand-success">
            <Tag className="size-3" /> {price.offLabel ?? `${formatPrice(price.off)} off`}
          </span>
        </p>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
        <Button className="rounded-xl" onClick={() => onEnquire("enrol")}>
          Enroll now
        </Button>
        <Button variant="outline" className="rounded-xl" onClick={() => onEnquire("callback")}>
          <PhoneCall /> Callback
        </Button>
      </div>
      <Link
        href={`${online.href}#${packageFilterSlug(pkg)}`}
        className="mt-3 inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-brand-text-muted hover:text-brand-primary"
      >
        <MonitorPlay className="size-3.5" /> Or online, from {formatPrice(pkg.prices[cls]!.standard.price)}
      </Link>
    </article>
  );
}

/** What every classroom package includes, shown once below the package cards. */
export function ClassroomIncludes() {
  const appFeatures = [...planFeatures("standard").slice(0, 3), ...advancedFeatures];
  const list = (title: string, Icon: typeof Building2, items: string[]) => (
    <div className="rounded-3xl border border-brand-border-light bg-white p-6 md:p-7">
      <p className="flex items-center gap-3 font-semibold text-brand-text-primary">
        <span className="flex size-10 items-center justify-center rounded-xl bg-brand-primary text-white">
          <Icon className="size-5" />
        </span>
        {title}
      </p>
      <ul className="mt-5 space-y-3">
        {items.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm leading-snug text-brand-text-secondary">
            <span className="mt-px flex size-4 shrink-0 items-center justify-center rounded-full bg-brand-subtle-bg text-brand-primary">
              <Check className="size-2.5" strokeWidth={3.5} />
            </span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="bg-brand-page-bg px-4 py-14 md:px-6 md:py-16">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="In every course" title="What every classroom course includes" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {list("In the classroom", Building2, classroomIncludes)}
          {list(`${academy.appName} Advanced plan — free`, Smartphone, appFeatures)}
        </div>
      </div>
      {/* How the classroom and the app fit together over a week. */}
      <div className="mx-auto max-w-7xl">
        <WeekLoop />
      </div>
    </section>
  );
}

/**
 * One class's packages and prices, narrowed by exam or to the combined
 * packages. Each filter carries an id (the exam's slug, or "combined"), so a
 * link like …/online/class-11#neet scrolls to the filters and selects NEET.
 */
export function PackageFinder({ cls, mode = "online" }: { cls: PackageClass; mode?: PackageMode }) {
  // An exam, or "combined" (packages covering several exams). There is no
  // "all" view: the page opens on the first exam.
  const [filter, setFilter] = useState<OnlineExam | "combined">(onlineExams[0].exam);
  // The classroom package whose Enroll / Callback button was pressed, if any —
  // one side panel serves every card.
  const [enquiry, setEnquiry] = useState<{ pkg: OnlinePackage; intent: EnquiryIntent } | null>(null);
  const { hash, key } = useLocation();

  useEffect(() => {
    if (hash === "#combined") return setFilter("combined");
    const match = onlineExams.find((e) => `#${e.slug}` === hash);
    if (match) setFilter(match.exam);
  }, [hash, key]);

  const exam = filter === "combined" ? null : filter;
  // An exam shows only that exam's own packages; the packages covering
  // several exams are listed once, under "Combined courses".
  const shown = packagesFor(cls).filter((p) =>
    filter === "combined" ? p.exams.length > 1 : p.exams.length === 1 && p.exams[0] === exam,
  );

  const pill = (on: boolean) =>
    cn(
      "scroll-mt-32 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
      on ? "bg-brand-primary text-white" : "text-brand-text-secondary hover:text-brand-primary",
    );

  return (
    <section id="prices" className="scroll-mt-24 px-4 py-14 md:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Courses & prices"
          title="Find your course"
          subtitle={
            mode === "online"
              ? "Pick the exam you're writing. Every course has a free plan, and Standard and Advanced come with a 7-day free trial."
              : "Pick the exam you're writing — each course has one price."
          }
        />

        {/* Stays under the header while the packages scroll past. */}
        <div className="sticky top-[65px] z-30 -mx-4 mt-8 flex justify-center bg-white/90 px-4 py-3 backdrop-blur-md">
          <div
            role="group"
            aria-label="Exam"
            className="flex max-w-full flex-wrap justify-center gap-1 rounded-3xl border border-brand-border-light bg-white p-1 sm:rounded-full"
          >
            {onlineExams.map((e) => (
              <button
                key={e.slug}
                id={e.slug}
                type="button"
                aria-pressed={filter === e.exam}
                onClick={() => setFilter(e.exam)}
                className={pill(filter === e.exam)}
              >
                {e.exam}
              </button>
            ))}
            <button
              id="combined"
              type="button"
              aria-pressed={filter === "combined"}
              onClick={() => setFilter("combined")}
              className={pill(filter === "combined")}
            >
              Combined courses
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-brand-text-muted" aria-live="polite">
          {shown.length} {shown.length === 1 ? "course" : "courses"} for{" "}
          <span className="font-semibold text-brand-text-primary">{filter === "combined" ? "combined courses" : filter}</span>
        </p>

        {mode === "online" ? (
          <div className="mt-8 space-y-16">
            {shown.map((pkg) => (
              <PackagePlans key={pkg.slug} pkg={pkg} cls={cls} comparison={shown.length === 1} />
            ))}
            {/* Several courses: one comparison after all of them — the limits are the same for every course. */}
            {shown.length > 1 && (
              <section aria-labelledby={`compare-${cls}-heading`}>
                <h3
                  id={`compare-${cls}-heading`}
                  className="text-center font-(family-name:--font-display) text-3xl font-bold text-brand-primary-darker"
                >
                  Compare plans
                </h3>
                <p className="mt-2 text-center text-brand-text-muted">
                  The same for every course above.
                  {shown
                    .filter((p) => !p.prices[cls]?.advanced)
                    .map((p) => ` ${p.name} has no Advanced plan.`)}
                </p>
                <ComparisonBlock
                  key={filter}
                  id={`compare-${cls}`}
                  hasAdvanced={shown.some((p) => p.prices[cls]?.advanced)}
                />
              </section>
            )}
          </div>
        ) : (
          // Centred, so an exam with one or two packages doesn't sit off to the left.
          <div className="mx-auto mt-8 flex max-w-6xl flex-wrap items-stretch justify-center gap-5">
            {shown.map((pkg) => (
              <div key={pkg.slug} className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]">
                <ClassroomCard pkg={pkg} cls={cls} onEnquire={(intent) => setEnquiry({ pkg, intent })} />
              </div>
            ))}
          </div>
        )}

        {mode === "classroom" && (
          <Sheet open={!!enquiry} onOpenChange={(o) => !o && setEnquiry(null)}>
            <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-md">
              {enquiry && (
                <>
                  <SheetHeader className="border-b border-brand-border-light">
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-primary">
                      {classroomClasses.find((c) => c.id === cls)!.label} · Classroom
                    </p>
                    <SheetTitle className="font-(family-name:--font-display) text-2xl text-brand-primary-darker">
                      {enquiry.pkg.name}
                    </SheetTitle>
                    <SheetDescription>
                      {enquiry.pkg.exams.join(" · ")} — you pay{" "}
                      {formatPrice(classroomPrice(enquiry.pkg, cls).price - classroomPrice(enquiry.pkg, cls).off)}
                    </SheetDescription>
                  </SheetHeader>
                  <CourseEnquiryForm
                    key={enquiry.pkg.slug}
                    id={`enquiry-${enquiry.pkg.slug}`}
                    course={`${enquiry.pkg.name} — ${classroomClasses.find((c) => c.id === cls)!.label} classroom (${formatPrice(classroomPrice(enquiry.pkg, cls).price)})`}
                    intent={enquiry.intent}
                    onIntentChange={(intent) => setEnquiry({ ...enquiry, intent })}
                    onSent={() => setEnquiry(null)}
                    className="p-6"
                  />
                </>
              )}
            </SheetContent>
          </Sheet>
        )}

        <p className="mt-14 text-center text-sm text-brand-text-muted">
          Not sure which course fits?{" "}
          <Link href="/landing/contact#enquire" className="font-semibold text-brand-primary hover:text-brand-primary-darker">
            Talk to a mentor
          </Link>{" "}
          — they'll suggest one based on the student's target exams.
        </p>
      </div>
    </section>
  );
}

/**
 * The two class cards that open a hub — online or classroom — each leading to
 * that class's packages page.
 */
export function ClassPicker({ mode }: { mode: PackageMode }) {
  const classes = mode === "online" ? onlineClasses : classroomClasses;
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {classes.map((c) => {
        const packages = packagesFor(c.id);
        const from = Math.min(
          ...packages.map((p) => (mode === "online" ? p.prices[c.id]!.standard.price : classroomPrice(p, c.id).price)),
        );
        return (
          <Link
            key={c.id}
            href={c.href}
            className="group flex flex-col rounded-3xl border border-brand-border-light bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-border-teal hover:shadow-[0_24px_50px_-24px_rgba(0,83,91,0.4)] md:p-7"
          >
            <span className="flex items-start justify-between gap-4">
              <span className="flex items-center gap-4">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-primary font-(family-name:--font-display) text-2xl font-bold text-white">
                  {c.id}
                </span>
                <span>
                  <span className="block font-(family-name:--font-display) text-2xl font-bold text-brand-primary-darker">
                    {c.label}
                  </span>
                  <span className="block text-sm text-brand-text-muted">
                    {c.course} · {packages.length} courses
                  </span>
                </span>
              </span>
              <span className="text-right">
                <span className="block text-xs text-brand-text-muted">from</span>
                <span className="block text-xl font-bold text-brand-text-primary">{formatPrice(from)}</span>
              </span>
            </span>
            <span className="mt-6 flex flex-wrap gap-1.5">
              {packages.map((p) => (
                <span
                  key={p.slug}
                  className="rounded-full bg-brand-subtle-bg px-2.5 py-0.5 text-xs font-semibold text-brand-primary-darker"
                >
                  {p.name}
                </span>
              ))}
            </span>
            <span className="mt-6 flex items-center justify-between gap-3 border-t border-brand-border-light pt-5">
              <span className="flex items-center gap-1.5 text-sm text-brand-text-secondary">
                {mode === "classroom" ? (
                  <>
                    <Smartphone className="size-4 text-brand-primary" /> {academy.appName} Advanced free
                  </>
                ) : (
                  <>
                    <Gift className="size-4 text-brand-primary" /> Free plan in every course
                  </>
                )}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                See courses
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
