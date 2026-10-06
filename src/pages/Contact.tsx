import Link from "next/link";
import { ArrowRight, Building2, Mail, MapPin, MonitorPlay, Navigation, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { campusNote, contactHead } from "@/components/landing/contact-data";
import { classroomClasses } from "@/components/landing/courses-data";
import { academy, branch, socials, whatsappUrl } from "@/components/landing/data";
import { PageShell } from "@/components/landing/PageShell";
import { socialIcons } from "@/components/landing/social-icons";
import { VisitForm } from "@/components/landing/VisitForm";
import { WhatsAppIcon } from "@/components/landing/WhatsAppIcon";

const quickActions = [
  {
    href: `tel:+91${academy.phones[0]}`,
    icon: Phone,
    label: "Call us",
    value: `+91 ${academy.phones[0]}`,
    external: false,
  },
  {
    href: whatsappUrl,
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "Chat with a mentor",
    external: true,
  },
  {
    href: `mailto:${contactHead.email}`,
    icon: Mail,
    label: "Email",
    value: contactHead.email,
    external: false,
  },
  {
    href: branch.mapsUrl,
    icon: Navigation,
    label: "Directions",
    value: `${branch.name}, Bengaluru`,
    external: true,
  },
];

const nextSteps = [
  ...classroomClasses.map((c) => ({
    href: c.href,
    icon: Building2,
    title: `${c.label} classroom courses`,
    body: `${c.course} at ${branch.name}, with the ${academy.appName} Advanced plan free.`,
  })),
  {
    href: "/landing/courses/online",
    icon: MonitorPlay,
    title: "Online courses",
    body: "The same courses, taught live online — start on the free plan.",
  },
];

/**
 * Contact Us. Quick actions first — calling, WhatsApp, email and directions are
 * one tap away on a phone, before the long form. Then, as on aaaedu.in, the
 * centre's details and map beside the "Get in Touch with us" form, and links to
 * the packages for anyone not ready to enquire yet. No closing "Book a visit"
 * banner: this page is the booking form.
 */
export default function Contact() {
  return (
    <PageShell
      title="Contact Us"
      subtitle="Questions about the Class 11 or Class 12 courses, in the classroom at Vijayanagar or online? Call, WhatsApp, or send us your details and a mentor will get back to you."
      closingCta={false}
    >
      {/* Quick actions */}
      <section className="px-4 pt-2 md:px-6" aria-label="Reach us directly">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-3 lg:grid-cols-4">
          {quickActions.map((a) => (
            <li key={a.label}>
              <a
                href={a.href}
                {...(a.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group flex h-full items-center gap-3 rounded-2xl border border-brand-border-light bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-brand-border-teal hover:shadow-[0_16px_40px_-20px_rgba(0,83,91,0.4)] md:p-5"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-white">
                  <a.icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-brand-text-muted">
                    {a.label}
                  </span>
                  <span className="block truncate text-sm font-semibold text-brand-text-primary md:text-base">
                    {a.value}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Centre + form */}
      <section className="px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
          {/* The form leads on a phone; on desktop it sits on the right, as on aaaedu.in. */}
          <div id="enquire" className="scroll-mt-24 lg:order-last">
            <VisitForm />
          </div>

          <div className="overflow-hidden rounded-3xl border border-brand-border-light bg-white">
            <div className="h-64 bg-brand-page-bg md:h-72">
              <iframe
                title={`Map to ${academy.shortName}, ${branch.name}`}
                src={branch.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="size-full border-0"
              />
            </div>
            <div className="p-6 md:p-7">
              <span className="rounded-full bg-brand-subtle-bg px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-brand-primary">
                Our centre
              </span>
              <h2 className="mt-3 font-(family-name:--font-display) text-2xl font-bold text-brand-primary-darker">
                {academy.shortName}, {branch.name}
              </h2>

              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex gap-3">
                  <dt className="sr-only">Address</dt>
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand-primary" />
                  <dd className="leading-relaxed text-brand-text-secondary">{branch.address}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="sr-only">Phone</dt>
                  <Phone className="mt-0.5 size-4 shrink-0 text-brand-primary" />
                  <dd className="flex flex-wrap gap-x-4 gap-y-1">
                    {academy.phones.map((p) => (
                      <a key={p} href={`tel:+91${p}`} className="font-semibold text-brand-text-primary hover:text-brand-primary">
                        +91 {p}
                      </a>
                    ))}
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="sr-only">Email</dt>
                  <Mail className="mt-0.5 size-4 shrink-0 text-brand-primary" />
                  <dd>
                    <a href={`mailto:${contactHead.email}`} className="font-semibold text-brand-text-primary hover:text-brand-primary">
                      {contactHead.email}
                    </a>
                  </dd>
                </div>
              </dl>

              <Button asChild className="mt-6">
                <a href={branch.mapsUrl} target="_blank" rel="noreferrer">
                  <Navigation /> Get directions
                </a>
              </Button>

              <div className="mt-7 border-t border-brand-border-light pt-6">
                <p className="text-xs font-bold uppercase tracking-wide text-brand-text-muted">Easy to reach from</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {branch.areasServed.map((a) => (
                    <li
                      key={a}
                      className="rounded-full bg-brand-subtle-bg px-2.5 py-1 text-xs font-medium text-brand-primary-darker"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-brand-text-muted">{campusNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Not ready to enquire yet */}
      <section className="bg-brand-page-bg px-4 py-14 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-(family-name:--font-display) text-2xl font-bold text-brand-primary-darker md:text-3xl">
            Before you get in touch
          </h2>
          <p className="mt-2 text-brand-text-secondary">See the courses and prices for your class.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {nextSteps.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="group flex items-start gap-4 rounded-2xl border border-brand-border-light bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-brand-border-teal"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-subtle-bg text-brand-primary">
                  <n.icon className="size-5" />
                </span>
                <span className="flex-1">
                  <span className="block font-semibold text-brand-text-primary">{n.title}</span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-brand-text-muted">{n.body}</span>
                </span>
                <ArrowRight className="mt-1 size-4 shrink-0 text-brand-primary transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start gap-4 border-t border-brand-border-light pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-semibold text-brand-text-primary">Follow {academy.shortName}</p>
            <ul className="flex flex-wrap gap-2" aria-label="Follow us">
              {socials.map((s) => {
                const Icon = socialIcons[s.id];
                return (
                  <li key={s.id}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="flex size-11 items-center justify-center rounded-full border border-brand-border-light bg-white text-brand-primary transition-colors hover:border-brand-primary hover:bg-brand-primary hover:text-white"
                    >
                      <Icon className="size-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
