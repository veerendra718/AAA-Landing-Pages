"use client";

import { Mail, MapPin, Navigation, Phone, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { academy, branch, whatsappUrl } from "./data";
import { SectionHeading } from "./SectionHeading";
import { VisitForm } from "./VisitForm";
import { WhatsAppIcon } from "./WhatsAppIcon";

/**
 * Where the centre is and how to get in touch, beside the visit form. The map
 * leads — the entrance photo already opens the page in the hero — with the
 * address floating over it, then one tile per way of reaching the academy.
 *
 * The floating address card can be closed to see the whole map. That is plain
 * component state, so the card is back after a refresh. Below `sm` the card sits
 * under the map rather than over it and is the only place the address shows, so
 * there it has no close button and can't be hidden.
 */
export function CentreSection({
  eyebrow = "Offline centre",
  title = "Visit us in Vijayanagar",
  subtitle = "Meet the faculty, see the classrooms and talk to a mentor before you decide.",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  const [addressOpen, setAddressOpen] = useState(true);

  const tile =
    "flex items-start gap-3 rounded-2xl border border-brand-border-light bg-white p-4 transition-colors hover:border-brand-border-teal";
  const tileIcon =
    "flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-subtle-bg text-brand-primary";

  return (
    <section id="centre" className="scroll-mt-20 bg-brand-page-bg py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.35fr_1fr]">
          <div className="space-y-4">
            {/* Map with the address over it */}
            <div className="relative overflow-hidden rounded-3xl border border-brand-border-light bg-white">
              <iframe
                title="Map to Arjunaa Academy, Vijayanagar"
                src={branch.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[4/3] w-full border-0 sm:aspect-[16/10]"
              />
              <div
                className={cn(
                  "border-t border-brand-border-light bg-white p-5 sm:absolute sm:bottom-4 sm:left-4 sm:max-w-sm sm:rounded-2xl sm:border sm:pr-12 sm:shadow-xl",
                  !addressOpen && "sm:hidden",
                )}
              >
                <button
                  type="button"
                  onClick={() => setAddressOpen(false)}
                  aria-label="Close address card"
                  className="absolute right-3 top-3 hidden size-8 cursor-pointer items-center justify-center rounded-full text-brand-text-muted transition-colors hover:bg-brand-subtle-bg hover:text-brand-primary-darker focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none sm:flex"
                >
                  <X className="size-4" />
                </button>
                <span className="rounded-full bg-brand-subtle-bg px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-brand-primary">
                  {branch.label}
                </span>
                <h3 className="mt-2 font-(family-name:--font-display) text-xl font-bold text-brand-primary-darker">
                  {academy.shortName}, {branch.name}
                </h3>
                <p className="mt-1.5 flex gap-2 text-sm leading-relaxed text-brand-text-secondary">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand-primary" />
                  {branch.address}
                </p>
                <Button asChild size="sm" className="mt-4">
                  <a href={branch.mapsUrl} target="_blank" rel="noreferrer">
                    <Navigation /> Get directions
                  </a>
                </Button>
              </div>
            </div>

            {/* One tile per way of reaching us */}
            <div className="grid gap-3 sm:grid-cols-3">
              <a href={`tel:+91${academy.phones[0]}`} className={tile}>
                <span className={tileIcon}>
                  <Phone className="size-5" />
                </span>
                <span className="text-sm">
                  <span className="block font-semibold text-brand-text-primary">Call us</span>
                  <span className="block text-brand-text-muted">{academy.phones[0]}</span>
                </span>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className={tile}>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#25d366]/10 text-[#25d366]">
                  <WhatsAppIcon className="size-5" />
                </span>
                <span className="text-sm">
                  <span className="block font-semibold text-brand-text-primary">WhatsApp</span>
                  <span className="block text-brand-text-muted">Chat with a mentor</span>
                </span>
              </a>
              <a href={`mailto:${academy.email}`} className={tile}>
                <span className={tileIcon}>
                  <Mail className="size-5" />
                </span>
                <span className="min-w-0 text-sm">
                  <span className="block font-semibold text-brand-text-primary">Email</span>
                  <span className="block truncate text-brand-text-muted">{academy.email}</span>
                </span>
              </a>
            </div>

            <div className="rounded-2xl border border-brand-border-light bg-white p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-text-muted">
                Easy to reach from
              </p>
              <div className="flex flex-wrap gap-1.5">
                {branch.areasServed.map((a) => (
                  <span
                    key={a}
                    className="rounded-full bg-brand-subtle-bg px-2.5 py-1 text-xs font-medium text-brand-primary-darker"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div id="visit" className="scroll-mt-24 lg:sticky lg:top-24">
            <VisitForm />
            <p className="mt-5 text-center text-sm text-brand-text-muted">
              Classes run at the Vijayanagar campus. Learning from further
              away? The same faculty teach the live online classes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
