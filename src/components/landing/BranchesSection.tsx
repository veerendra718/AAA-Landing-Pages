"use client";

import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { academy, branch, branchCount, branches, whatsappUrl } from "./data";
import { SectionHeading } from "./SectionHeading";
import { VisitForm } from "./VisitForm";
import { WhatsAppIcon } from "./WhatsAppIcon";

/**
 * Branches and the enquiry form, for V2. The branch picker lists the centres
 * aaaedu.in names, each with the areas it says to enrol from, so a family can
 * find "their" branch by locality. The head centre carries the map; the other
 * two link to a map search because aaaedu.in gives no street address for them.
 */
export function BranchesSection({ id = "branches" }: { id?: string }) {
  const [selected, setSelected] = useState<string>(branches[0].id);
  const current = branches.find((b) => b.id === selected) ?? branches[0];
  const isHead = current.id === "vijayanagar";

  return (
    <section id={id} className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow={`${branchCount} branches · Bengaluru & Mysuru`}
          title="Find your nearest branch"
          subtitle="Sit in on a free demo class, meet the faculty and get a counselling session. Can't come in? We'll visit you at home or meet online."
        />

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.35fr_1fr]">
          <div className="space-y-4">
            {/* Branch picker */}
            <div role="tablist" aria-label="Branches" className="grid gap-2 sm:grid-cols-3">
              {branches.map((b) => {
                const on = b.id === selected;
                return (
                  <button
                    key={b.id}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    aria-controls="branch-panel"
                    onClick={() => setSelected(b.id)}
                    className={cn(
                      "cursor-pointer rounded-2xl border p-4 text-left transition-colors",
                      on
                        ? "border-brand-primary bg-white shadow-sm ring-1 ring-brand-primary"
                        : "border-brand-border-light bg-brand-page-bg hover:border-brand-border-teal hover:bg-white",
                    )}
                  >
                    <span className="block text-[11px] font-bold uppercase tracking-wide text-brand-primary">
                      {b.label}
                    </span>
                    <span className="mt-0.5 block font-semibold leading-snug text-brand-text-primary">{b.name}</span>
                    <span className="mt-1 block text-xs text-brand-text-muted">{b.note}</span>
                  </button>
                );
              })}
            </div>

            <div id="branch-panel" role="tabpanel" className="overflow-hidden rounded-3xl border border-brand-border-light bg-white">
              {isHead && (
                <iframe
                  title="Map to Arjunaa Academy, Vijayanagar"
                  src={branch.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="aspect-[16/9] w-full border-0"
                />
              )}
              <div className="p-5 md:p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-(family-name:--font-display) text-xl font-bold text-brand-primary-darker">
                      {current.name}
                    </h3>
                    <p className="mt-1 flex gap-2 text-sm leading-relaxed text-brand-text-secondary">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-brand-primary" />
                      {current.address}
                    </p>
                  </div>
                  <a
                    href={current.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-brand-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-dark"
                  >
                    <Navigation className="size-4" /> Directions
                  </a>
                </div>
                <p className="mt-5 mb-2 text-xs font-semibold uppercase tracking-wide text-brand-text-muted">
                  Convenient if you live in
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {current.areas.map((a) => (
                    <span
                      key={a}
                      className="rounded-full bg-brand-subtle-bg px-2.5 py-1 text-xs font-medium text-brand-primary-darker"
                    >
                      {a}
                    </span>
                  ))}
                </div>
                <p className="mt-5 flex items-center gap-2 border-t border-brand-border-light pt-4 text-sm text-brand-text-muted">
                  <Clock className="size-4 shrink-0 text-brand-primary" />
                  {branch.hours}
                </p>
              </div>
            </div>

            <p className="text-sm text-brand-text-muted">
              Not listed here? We have {branchCount} branches across Bengaluru and Mysuru — pick
              &ldquo;Not sure&rdquo; in the form and we&apos;ll suggest the nearest.
            </p>

            {/* Ways to reach us */}
            <div className="grid gap-3 sm:grid-cols-3">
              <ContactTile href={`tel:+91${academy.phones[0]}`} icon={<Phone className="size-5" />} title="Call us" sub={academy.phones[0]} />
              <ContactTile
                href={whatsappUrl}
                external
                icon={<WhatsAppIcon className="size-5" />}
                iconClass="bg-[#25d366]/10 text-[#25d366]"
                title="WhatsApp"
                sub="Chat with a mentor"
              />
              <ContactTile href={`mailto:${academy.email}`} icon={<Mail className="size-5" />} title="Email" sub={academy.email} />
            </div>
          </div>

          <div id="visit" className="scroll-mt-24 lg:sticky lg:top-24">
            <VisitForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactTile({
  href,
  icon,
  title,
  sub,
  external,
  iconClass = "bg-brand-subtle-bg text-brand-primary",
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  sub: string;
  external?: boolean;
  iconClass?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="flex items-start gap-3 rounded-2xl border border-brand-border-light bg-brand-page-bg p-4 transition-colors hover:border-brand-border-teal hover:bg-white"
    >
      <span className={cn("flex size-10 shrink-0 items-center justify-center rounded-xl", iconClass)}>{icon}</span>
      <span className="min-w-0 text-sm">
        <span className="block font-semibold text-brand-text-primary">{title}</span>
        <span className="block truncate text-brand-text-muted">{sub}</span>
      </span>
    </a>
  );
}
