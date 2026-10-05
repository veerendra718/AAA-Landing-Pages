import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Clock,
  House,
  Mail,
  MapPin,
  Navigation,
  Phone,
  PhoneCall,
  Video,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { campusNote, contactHead, enquiryWays } from "@/components/landing/contact-data";
import { academy, branch, whatsappUrl } from "@/components/landing/data";
import { PageShell } from "@/components/landing/PageShell";
import { VisitForm } from "@/components/landing/VisitForm";
import { WhatsAppIcon } from "@/components/landing/WhatsAppIcon";

// In the order `enquiryWays` lists them: call back, home visit, centre, online.
const wayIcons = [PhoneCall, House, Building2, Video];

const row =
  "flex items-center gap-4 rounded-2xl border border-brand-border-light bg-white p-4 transition-colors hover:border-brand-border-teal";
const rowIcon =
  "flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-subtle-bg text-brand-primary";

/**
 * Contact Us. The form comes first — it is what most people land here for —
 * with the direct lines beside it. Below, everything about coming in: a full
 * width map, the address, hours and how to get here. No closing "Book a visit"
 * banner: this page is the booking form.
 */
export default function Contact() {
  return (
    <PageShell
      title="Contact Us"
      subtitle="Talk to a mentor about a batch, a visit, or whether your child should start with Foundation or go straight into JEE, NEET or KCET."
      closingCta={false}
    >
      {/* Enquire */}
      <section className="px-4 pb-16 pt-4 md:px-6">
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <div id="enquire" className="scroll-mt-24">
            <VisitForm />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-(family-name:--font-display) text-2xl font-bold text-brand-primary-darker">
                Or reach us directly
              </h2>
              <div className="mt-4 space-y-3">
                {academy.phones.map((p, i) => (
                  <a key={p} href={`tel:+91${p}`} className={row}>
                    <span className={rowIcon}>
                      <Phone className="size-5" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-xs font-semibold uppercase tracking-wide text-brand-text-muted">
                        {i === 0 ? "Call the centre" : "Or call"}
                      </span>
                      <span className="block font-semibold text-brand-text-primary">+91 {p}</span>
                    </span>
                    <ArrowRight className="size-4 text-brand-primary" />
                  </a>
                ))}
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className={row}>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#25d366]/10 text-[#25d366]">
                    <WhatsAppIcon className="size-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-wide text-brand-text-muted">
                      WhatsApp
                    </span>
                    <span className="block font-semibold text-brand-text-primary">Chat with a mentor</span>
                  </span>
                  <ArrowRight className="size-4 text-brand-primary" />
                </a>
                <a href={`mailto:${contactHead.email}`} className={row}>
                  <span className={rowIcon}>
                    <Mail className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-wide text-brand-text-muted">
                      Write to us
                    </span>
                    <span className="block truncate font-semibold text-brand-text-primary">
                      {contactHead.email}
                    </span>
                  </span>
                  <ArrowRight className="size-4 text-brand-primary" />
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-brand-page-bg p-6">
              <h2 className="font-semibold text-brand-text-primary">Four ways to start</h2>
              <p className="mt-1 text-sm text-brand-text-muted">
                Pick one in the form — whichever suits your family.
              </p>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {enquiryWays.map((w, i) => {
                  const Icon = wayIcons[i];
                  return (
                    <li key={w.title} className="flex gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white text-brand-primary">
                        <Icon className="size-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-brand-text-primary">{w.title}</span>
                        <span className="mt-0.5 block text-sm leading-relaxed text-brand-text-muted">{w.body}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visiting */}
      <section className="bg-brand-page-bg px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[2.5px] text-brand-primary">Visit the centre</p>
            <h2 className="mt-3 font-(family-name:--font-display) text-3xl font-bold text-brand-primary-darker md:text-4xl">
              Come and sit in on a class
            </h2>
            <p className="mt-4 leading-relaxed text-brand-text-secondary">
              Most families decide after seeing the centre rather than after a
              phone call. A visit takes an hour: you meet the faculty who will
              teach the batch, see the material, and a mentor runs a short
              diagnostic so you leave knowing exactly where the student stands.
            </p>
          </div>

          <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="min-h-80 overflow-hidden rounded-3xl border border-brand-border-light bg-white">
              <iframe
                title="Map to Arjunaa Academy, Vijayanagar"
                src={branch.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="size-full min-h-80 border-0"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-3xl border border-brand-border-light bg-white p-6">
                <span className="rounded-full bg-brand-subtle-bg px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-brand-primary">
                  {branch.label}
                </span>
                <h3 className="mt-3 font-(family-name:--font-display) text-xl font-bold text-brand-primary-darker">
                  {academy.shortName}, {branch.name}
                </h3>
                <p className="mt-2 flex gap-2 text-sm leading-relaxed text-brand-text-secondary">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand-primary" />
                  {branch.address}
                </p>
                <p className="mt-2 flex gap-2 text-sm leading-relaxed text-brand-text-secondary">
                  <Clock className="mt-0.5 size-4 shrink-0 text-brand-primary" />
                  <span>
                    {branch.hours}
                    <span className="mt-0.5 block text-brand-text-muted">{contactHead.note}</span>
                  </span>
                </p>
                <Button asChild size="sm" className="mt-5">
                  <a href={branch.mapsUrl} target="_blank" rel="noreferrer">
                    <Navigation /> Get directions
                  </a>
                </Button>
              </div>

              <div className="rounded-3xl border border-brand-border-light bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-muted">
                  Easy to reach from
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {branch.areasServed.map((a) => (
                    <span
                      key={a}
                      className="rounded-full bg-brand-subtle-bg px-2.5 py-1 text-xs font-medium text-brand-primary-darker"
                    >
                      {a}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-brand-text-muted">{campusNote}</p>
              </div>
            </div>
          </div>

          {/* Before you come */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link href="/landing/courses/admissions" className={row}>
              <span className={rowIcon}>
                <Clock className="size-5" />
              </span>
              <span className="flex-1">
                <span className="block font-semibold text-brand-text-primary">Which batch?</span>
                <span className="block text-sm text-brand-text-muted">
                  Foundation through to NEET — see every batch and its timings.
                </span>
              </span>
              <ArrowRight className="size-4 text-brand-primary" />
            </Link>
            <Link href="/landing/courses/residential" className={row}>
              <span className={rowIcon}>
                <House className="size-5" />
              </span>
              <span className="flex-1">
                <span className="block font-semibold text-brand-text-primary">Day scholar or residential?</span>
                <span className="block text-sm text-brand-text-muted">
                  The two-year integrated programme runs both ways — compare them.
                </span>
              </span>
              <ArrowRight className="size-4 text-brand-primary" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
