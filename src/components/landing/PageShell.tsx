import { CalendarCheck } from "lucide-react";

import { ClosingCta } from "./ClosingCta";
import { FloatingContact } from "./FloatingContact";
import { LandingFooter } from "./LandingFooter";
import { LandingNav } from "./LandingNav";

const home = "/landing/v2";
// Every inner page books through the Contact page's own form rather than
// sending people back to the home page. On Contact itself the same link just
// scrolls down to that form.
const visit = "/landing/contact#enquire";

/**
 * The shared chrome for every sub-site of the header menu — About Us,
 * Achievers, Courses and Contact Us all render through this, so a section page
 * is only ever its own `<section>` content.
 *
 * There is deliberately no sticky section sub-nav and no breadcrumb: moving
 * between pages is left to the header menu and its dropdowns.
 *
 * No `links` are handed to the nav: the landing page's in-page anchors are not
 * on this page.
 */
export function PageShell({
  title,
  subtitle,
  closingCta = true,
  children,
}: {
  title: string;
  subtitle?: string;
  /** The teal "Book a visit" banner above the footer. Off on the Contact page,
   *  which is itself the booking form. */
  closingCta?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div id="top">
      <LandingNav
        homeHref={home}
        cta={{ href: visit, label: "Book a visit", icon: CalendarCheck }}
      />

      <section className="relative overflow-hidden bg-linear-to-b from-brand-subtle-bg/70 via-white to-white">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[480px] rounded-full bg-brand-secondary/40 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-10 md:px-6 md:pt-14">
          <h1 className="max-w-3xl font-(family-name:--font-display) text-4xl font-bold leading-tight tracking-tight text-balance text-brand-primary-darker md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-pretty text-brand-text-muted md:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      {children}

      {closingCta && (
        <ClosingCta
          visitHref={visit}
          subtitle="Admissions for 2026–27 are open at the Vijayanagar centre. Come and see how we teach before you decide."
        />
      )}

      <LandingFooter />
      <FloatingContact />
    </div>
  );
}
