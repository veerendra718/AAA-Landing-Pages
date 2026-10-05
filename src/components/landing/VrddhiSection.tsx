import Image from "next/image";
import { Award, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { vrddhi, whatsappWith } from "./data";
import { WhatsAppIcon } from "./WhatsAppIcon";

/**
 * Vrddhi, the academy's scholarship-cum-admission test — the hook that big
 * coaching chains build a whole campaign around, and the one real event photo
 * aaaedu.in publishes. No date is shown: the academy announces each year's.
 */
export function VrddhiSection({ id = "vrddhi" }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-20 px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[32px] border border-brand-border-teal bg-linear-to-br from-brand-subtle-bg via-white to-white p-6 md:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:p-14">
        <div className="relative">
          <div className="relative aspect-[11/10] overflow-hidden rounded-[24px] shadow-xl shadow-brand-primary/10">
            <Image
              src="/images/landing/vrddhi-prize-distribution.jpg"
              alt="Vrddhi prize distribution: students with certificates and a trophy"
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-brand-border-light sm:left-6">
            <span className="flex size-10 items-center justify-center rounded-xl bg-brand-warning-bg text-brand-warning">
              <Award className="size-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-brand-text-primary">Held every year</p>
              <p className="text-xs text-brand-text-muted">since {vrddhi.since}</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-brand-primary">
            Scholarship test
          </p>
          <h2 className="mt-3 font-(family-name:--font-display) text-3xl font-bold leading-tight tracking-tight text-brand-primary-darker md:text-[42px]">
            Vrddhi: earn a scholarship on your admission
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-text-muted md:text-lg">
            Our inter-school talent search and scholarship-cum-admission test. <em>Vrddhi</em> means
            &ldquo;{vrddhi.meaning.toLowerCase()}&rdquo;.
          </p>

          <dl className="mt-7 grid grid-cols-3 gap-3">
            {vrddhi.format.map((f) => (
              <div key={f.label} className="rounded-2xl border border-brand-border-light bg-white px-3 py-4 text-center">
                <dt className="text-[11px] font-semibold uppercase tracking-wide text-brand-text-muted">{f.label}</dt>
                <dd className="mt-1 font-(family-name:--font-display) text-2xl font-bold text-brand-primary-darker">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-sm text-brand-text-secondary">
            <span className="font-semibold text-brand-text-primary">Subjects:</span> {vrddhi.subjects.join(" · ")}
          </p>

          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {vrddhi.rewards.map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm text-brand-text-secondary">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-success-bg text-brand-success">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {r}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a
                href={whatsappWith("Hi, please tell me the next Vrddhi scholarship test date and how to register.")}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon className="size-4" /> Get the next test date
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#visit">Talk to a mentor</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
