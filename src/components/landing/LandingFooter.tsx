import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, MapPin, Navigation, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { academy, branch, branchCount, exams, loginUrl, programs, socials, whatsappUrl } from "./data";
import { socialIcons } from "./social-icons";
import { WhatsAppIcon } from "./WhatsAppIcon";

const coursesLinks = [
  ...programs.map((p) => ({ href: p.href, label: p.title })),
  { href: "/landing/courses/residential", label: "Day Scholar & Residential" },
  { href: "/landing/courses/admissions", label: "Admissions & Batches" },
];

const academyLinks = [
  { href: "/landing/about", label: "About Us" },
  { href: "/landing/about/mission-vision", label: "Mission & Vision" },
  { href: "/landing/about/leadership", label: "Leadership & Faculty" },
  { href: "/landing/achievers", label: "Achievers" },
  { href: "/landing/about/testimonials", label: "Testimonials" },
  { href: "/landing/about/careers", label: "Careers" },
  { href: "/landing/contact", label: "Contact Us" },
];

/**
 * Site footer. The top band is the brand and the three quickest ways to reach
 * the academy; below it, every page on the site grouped the way the header menu
 * groups them, and the full contact details. Social links are the ones in
 * aaaedu.in's own footer.
 */
export function LandingFooter() {
  return (
    <footer className="bg-brand-primary-darker text-white/75">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Brand + quick contact */}
        <div className="grid gap-8 border-b border-white/10 py-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-full bg-white">
                <Image src="/images/aaa_logo_v2.png" alt="" width={40} height={40} />
              </span>
              <div className="leading-tight">
                <p className="font-(family-name:--font-display) text-xl font-bold uppercase text-white">
                  Arjunaa Academy
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[2px] text-brand-secondary">
                  for Achievers · Since {academy.founded}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed">
              &ldquo;{academy.tagline}.&rdquo; Small-batch classroom coaching at our{" "}
              Vijayanagar centre in Bengaluru, with the{" "}
              {academy.appName} app for practice and revision at home.
            </p>
            <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Exams we prepare for">
              {exams.slice(0, 6).map((e) => (
                <li
                  key={e}
                  className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] font-medium text-white/80"
                >
                  {e}
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex gap-2" aria-label="Follow us">
              {socials.map((s) => {
                const Icon = socialIcons[s.id];
                return (
                  <li key={s.id}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white"
                    >
                      <Icon className="size-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white">Talk to a mentor</p>
            <p className="mt-1 text-sm">Questions about a batch, fees or a visit? We&apos;ll help.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Button asChild size="sm" variant="inverse">
                <a href={`tel:+91${academy.phones[0]}`}>
                  <Phone /> Call
                </a>
              </Button>
              <Button asChild size="sm" variant="inverse-outline" className="border">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <WhatsAppIcon className="size-4 text-[#25d366]" /> WhatsApp
                </a>
              </Button>
              <Button asChild size="sm" variant="inverse-outline" className="border">
                <a href={branch.mapsUrl} target="_blank" rel="noreferrer">
                  <Navigation /> Directions
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Site links + contact details */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.3fr]">
          <FooterColumn title="Courses" links={coursesLinks} />
          <FooterColumn title="The academy" links={academyLinks} />

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[2px] text-brand-secondary">
              Our centre
            </p>
            <ul className="space-y-3.5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-secondary" />
                <span>
                  {branch.address}
                  <a
                    href={branch.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block font-semibold text-white hover:text-brand-secondary"
                  >
                    Get directions →
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-brand-secondary" />
                <span className="flex flex-col gap-1">
                  {academy.phones.map((p) => (
                    <a key={p} href={`tel:+91${p}`} className="hover:text-white">
                      +91 {p}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-brand-secondary" />
                <a href={`mailto:${academy.email}`} className="hover:text-white">
                  {academy.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs md:flex-row md:px-6">
          <p>
            &copy; {new Date().getFullYear()} {academy.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <span className="text-white/50">{academy.appName}:</span>
            <Link href={loginUrl} className="hover:text-white">
              Student login
            </Link>
            <a href="#top" className="inline-flex items-center gap-1 hover:text-white">
              Back to top <ArrowUp className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="mb-4 text-xs font-bold uppercase tracking-[2px] text-brand-secondary">{title}</p>
      <ul className="space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
