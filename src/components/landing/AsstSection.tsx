import Image from "next/image";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { asst, whatsappWith } from "./data";
import { WhatsAppIcon } from "./WhatsAppIcon";

/**
 * ASST, the academy's scholarship-cum-admission test — the hook that big
 * coaching chains build a whole campaign around. All copy is the academy's
 * (`asst` in data.ts). No date is shown: the academy announces each one.
 */
export function AsstSection({ id = "asst" }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-20 px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-[32px] border border-brand-border-teal bg-linear-to-br from-brand-subtle-bg via-white to-white p-6 md:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:p-14">
        <div className="relative aspect-[11/10] overflow-hidden rounded-[24px] shadow-xl shadow-brand-primary/10 lg:aspect-auto lg:h-full">
          <Image
            src="/images/landing/vrddhi-prize-distribution.jpg"
            alt="Scholarship test prize distribution: students with certificates and a trophy"
            fill
            sizes="(min-width: 1024px) 540px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[2.5px] text-brand-primary">
            Scholarship test
          </p>
          <h2 className="mt-3 font-(family-name:--font-display) text-3xl font-bold leading-tight tracking-tight text-brand-primary-darker md:text-[42px]">
            ASST: Secure Your Admission Scholarship
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-text-muted md:text-lg">
            Give your child’s academic journey the ultimate launchpad. The Arjunaa Scholastic &amp;
            Scholarship Test (ASST) is our premier talent search and scholarship-cum-admission test,
            designed to bring prosperity, development, and accelerated career growth to every young
            achiever.
          </p>
          <p className="mt-3 text-base leading-relaxed text-brand-text-muted md:text-lg">
            Parents can register their child online and visit our centre for the assessment.
          </p>

          <h3 className="mt-8 text-sm font-bold text-brand-text-primary">Exam Details</h3>
          <dl className="mt-3 grid gap-3 sm:grid-cols-3">
            {asst.details.map((d) => (
              <div key={d.label} className="rounded-2xl border border-brand-border-light bg-white px-4 py-3 card-hover">
                <dt className="text-[11px] font-semibold uppercase tracking-wide text-brand-text-muted">{d.label}</dt>
                <dd className="mt-1 text-sm font-semibold leading-snug text-brand-primary-darker">{d.value}</dd>
              </div>
            ))}
          </dl>

          <h3 className="mt-7 text-sm font-bold text-brand-text-primary">Choose Your Stream</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {asst.streams.map((s) => (
              <div key={s.name} className="rounded-2xl border border-brand-border-light bg-white px-4 py-3 card-hover">
                <p className="font-semibold text-brand-primary-darker">
                  {s.name} <span className="text-sm font-normal text-brand-text-muted">({s.note})</span>
                </p>
                <p className="mt-1 text-sm text-brand-text-secondary">
                  <span className="font-semibold text-brand-text-primary">Subjects:</span> {s.subjects.join(" · ")}
                </p>
              </div>
            ))}
          </div>

          <h3 className="mt-7 text-sm font-bold text-brand-text-primary">Scholarship Benefits</h3>
          <ul className="mt-3 grid gap-2.5">
            {asst.benefits.map((b) => (
              <li key={b.title} className="flex items-start gap-2 text-sm text-brand-text-secondary">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-success-bg text-brand-success">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                <span>
                  <span className="font-semibold text-brand-text-primary">{b.title}:</span> {b.text}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a
                href={whatsappWith("Hi, please tell me the next ASST scholarship test date and how to register.")}
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
