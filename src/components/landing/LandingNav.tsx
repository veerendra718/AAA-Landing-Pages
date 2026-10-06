"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, type LucideIcon, Mail, Menu, Phone } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { academy, loginUrl, registerUrl } from "./data";
import { type NavGroup, siteMenu } from "./site-menu";

export type NavLink = { href: string; label: string };

/** The header's call to action. With an `icon` it is a solid brand pill ("Book
 *  a visit"); without one it keeps the animated hover pill ("Start free"). */
export type NavCta = NavLink & { icon?: LucideIcon };

export function LandingNav({
  links = [],
  cta = { href: registerUrl, label: "Start free" },
  announcement = "Admissions open for 2026–27 · JEE · NEET · KCET · Foundation",
  homeHref = "#top",
}: {
  /**
   * In-page anchor links for the page itself. Deliberately kept out of the
   * desktop row — the site menu alone keeps that row scannable — so they are
   * offered in the mobile drawer under "On this page" instead.
   */
  links?: NavLink[];
  cta?: NavCta;
  announcement?: string;
  homeHref?: string;
}) {
  const [open, setOpen] = useState(false);
  // Which desktop dropdown is open, so hover and keyboard agree.
  const [menu, setMenu] = useState<string | null>(null);
  const { pathname } = useLocation();

  // A dropdown stays open on hover, so navigating by keyboard can leave it
  // hanging over the page you just moved to. Close it on every route change.
  useEffect(() => setMenu(null), [pathname]);

  // "In this section" — the group whose base path the page sits under. The
  // longest match wins so two neighbouring items can never light up at once;
  // no two groups overlap now that Careers sits under About Us, and the rule
  // is what keeps it that way if the menu gains nested sections later.
  const activeGroup = useMemo(() => {
    const matches = (href: string) => {
      const base = href.split("#")[0].replace(/\/$/, "");
      return pathname === base || pathname.startsWith(`${base}/`);
    };
    let best = "";
    for (const group of siteMenu) {
      if (matches(group.href) && group.href.length > best.length) best = group.href;
    }
    return best;
  }, [pathname]);

  return (
    <>
      <div className="hidden bg-brand-primary-darker text-xs text-white/90 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <p>{announcement}</p>
          <div className="flex items-center gap-5">
            <a
              href={`tel:+91${academy.phones[0]}`}
              className="flex items-center gap-1.5 hover:text-white"
            >
              <Phone className="size-3.5" />
              {academy.phones[0]}
            </a>
            <a
              href={`mailto:${academy.email}`}
              className="flex items-center gap-1.5 hover:text-white"
            >
              <Mail className="size-3.5" />
              {academy.email}
            </a>
          </div>
        </div>
      </div>

      <header
        className="sticky top-0 z-40 border-b border-brand-border-light bg-white/85 backdrop-blur-md"
        onMouseLeave={() => setMenu(null)}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
          <Link href={homeHref} className="flex shrink-0 items-center gap-2.5">
            <Image
              src="/images/aaa_logo_v2.png"
              alt=""
              width={40}
              height={40}
              className="size-10"
            />
            <span className="leading-tight">
              <span className="block font-(family-name:--font-display) text-lg font-bold uppercase tracking-tight text-brand-primary-darker">
                Arjunaa Academy
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[2px] text-brand-primary">
                for Achievers
              </span>
            </span>
          </Link>

          {/* `ml-auto` takes the free space `justify-between` would otherwise
              hand out across this row, so the menu ends up hard against the
              actions on the right instead of stranded in the middle of the
              header. Below `lg` the menu is `hidden` and its `ml-auto` goes
              inert with it, leaving `justify-between` to hold the logo and the
              drawer button at the two ends. */}
          <nav className="ml-auto hidden items-center gap-0.5 lg:flex xl:gap-1" aria-label="Main">
            {siteMenu.map((group) => (
              <DesktopGroup
                key={group.label}
                group={group}
                open={menu === group.label}
                active={activeGroup === group.href}
                currentPath={pathname}
                onShow={() => setMenu(group.label)}
                onHide={() => setMenu(null)}
              />
            ))}
          </nav>

          {/* A hairline so the CTA still reads as its own thing now that the
              menu sits right against it. Hidden with the menu. */}
          <span
            aria-hidden="true"
            className="hidden h-5 w-px bg-brand-border-light lg:block"
          />

          <div className="hidden items-center gap-1.5 xl:flex">
            <Button asChild variant="ghost" size="sm" className="text-brand-text-secondary hover:text-brand-primary">
              <Link href={loginUrl}>Login</Link>
            </Button>
            {cta.icon ? (
              /* A booking CTA is a plain solid pill with its icon — calm and
                 clear rather than animated, and the same height as Login. */
              <Button asChild size="sm" className="px-4 has-[>svg]:px-4">
                <Link href={cta.href}>
                  <cta.icon /> {cta.label}
                </Link>
              </Button>
            ) : (
              <InteractiveHoverButton
                asChild
                text={cta.label}
                /* Sized for this row: the width follows the label (`w-auto px-8`,
                   never narrower than `min-w-40`) so "Book a visit" fits as
                   well as "Start free", and the side padding leaves room for the
                   arrow that slides in on hover. `h-9 py-0` matches the Login
                   button beside it without the overflow-hidden clipping the line
                   box, `leading-9` centres the label in that height, and the
                   darker brand fill makes the `bg-primary` circle that wipes
                   across on hover actually visible. The resting dot is moved from
                   20% to 10% so it sits in the side padding instead of on the
                   first letter of a longer label; the 1.8x scale still covers the
                   whole pill on hover from there. */
                className="h-9 w-auto min-w-40 whitespace-nowrap border-0 bg-brand-primary-dark px-8 py-0 text-sm leading-9 text-white [&>div:last-child]:left-[10%]"
              >
                <Link href={cta.href}>{cta.label}</Link>
              </InteractiveHoverButton>
            )}
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="font-(family-name:--font-display) text-xl text-brand-primary-darker">
                  Arjunaa Academy
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-5 px-4 pb-6" aria-label="Main">
                {siteMenu.map((group) => (
                  <div key={group.label}>
                    <Link
                      href={group.href}
                      onClick={() => setOpen(false)}
                      aria-current={activeGroup === group.href ? "page" : undefined}
                      className={cn(
                        "block text-sm font-bold tracking-wide uppercase",
                        activeGroup === group.href
                          ? "text-brand-primary"
                          : "text-brand-primary-darker",
                      )}
                    >
                      {group.label}
                    </Link>
                    {group.items.length > 0 && (
                      <div className="mt-1.5 flex flex-col border-l border-brand-border-light pl-3">
                        {group.items.map((item) => {
                          const itemPath = item.href.split("#")[0].replace(/\/$/, "");
                          // An item that points at a section of a page (…/online#jee) is never
                          // "the current page" — otherwise all of them would light up at once.
                          const isCurrent = !item.href.includes("#") && pathname === itemPath;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setOpen(false)}
                              aria-current={isCurrent ? "page" : undefined}
                              className={cn(
                                "rounded-lg px-2 py-2 text-sm",
                                isCurrent
                                  ? "bg-brand-subtle-bg font-semibold text-brand-primary"
                                  : "text-brand-text-secondary hover:bg-brand-subtle-bg hover:text-brand-primary",
                              )}
                            >
                              {item.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
                {links.length > 0 && (
                  <div>
                    <span className="block text-sm font-bold tracking-wide text-brand-primary-darker uppercase">
                      On this page
                    </span>
                    <div className="mt-1.5 flex flex-col border-l border-brand-border-light pl-3">
                      {links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="rounded-lg px-2 py-2 text-sm text-brand-text-secondary hover:bg-brand-subtle-bg hover:text-brand-primary"
                        >
                          {l.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </nav>
              <div className="flex flex-col gap-2 px-4 pb-8">
                <Button asChild>
                  <Link href={cta.href} onClick={() => setOpen(false)}>
                    {cta.icon && <cta.icon />}
                    {cta.label}
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={loginUrl}>Login</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}

/**
 * One header item. Every group in the menu has children today, so each opens a
 * dropdown; a group with none would render as a plain link instead of an empty
 * panel. The menu opens on hover and on keyboard focus, so the items stay
 * reachable by Tab.
 */
function DesktopGroup({
  group,
  open,
  active,
  currentPath,
  onShow,
  onHide,
}: {
  group: NavGroup;
  open: boolean;
  /** The current page sits inside this group. */
  active: boolean;
  currentPath: string;
  onShow: () => void;
  onHide: () => void;
}) {
  // Any sub-page at all earns a dropdown; with none, the item is a plain link.
  const isDropdown = group.items.length > 0;

  // The current section is a tinted pill rather than a rule under the label —
  // the underline read as a stray dash hanging off the text. The tint is the
  // same one the dropdown marks its current item with and the sub-nav its own
  // hover, so "current" looks the same throughout. Hover is that tint at half
  // strength, which is what keeps a hovered item from looking selected. The
  // padding is here for the tint, not for a pseudo-element, so nothing needs
  // `relative`.
  const labelClass = (isCurrent: boolean) =>
    cn(
      "rounded-md px-2.5 py-2 text-sm font-medium whitespace-nowrap transition-colors xl:px-3",
      isCurrent
        ? "bg-brand-subtle-bg text-brand-primary"
        : "text-brand-text-secondary hover:bg-brand-subtle-bg/50 hover:text-brand-primary",
    );

  if (!isDropdown) {
    return (
      <Link href={group.href} className={labelClass(active)} aria-current={active ? "page" : undefined}>
        {group.shortLabel ? (
          <>
            <span className="xl:hidden">{group.shortLabel}</span>
            <span className="hidden xl:inline">{group.label}</span>
          </>
        ) : (
          group.label
        )}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={onShow}
      onFocus={onShow}
      onKeyDown={(e) => {
        // Escape closes and returns focus to the trigger, so the menu is
        // dismissible without moving the mouse at all.
        if (e.key === "Escape" && open) {
          onHide();
          e.currentTarget.querySelector("a")?.focus();
        }
      }}
      onBlur={(e) => {
        // Close only once focus has left the whole group, not when it moves
        // between two items inside it.
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) onHide();
      }}
    >
      <Link
        href={group.href}
        className={cn(labelClass(active), "flex items-center gap-1")}
        aria-current={active ? "page" : undefined}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {group.shortLabel ? (
          <>
            <span className="xl:hidden">{group.shortLabel}</span>
            <span className="hidden xl:inline">{group.label}</span>
          </>
        ) : (
          group.label
        )}
        <ChevronDown
          className={cn("size-3.5 transition-transform", open && "rotate-180")}
        />
      </Link>
      {open && (
        <div className="absolute top-full left-1/2 w-72 -translate-x-1/2 pt-2">
          <div className="overflow-hidden rounded-2xl border border-brand-border-light bg-white p-2 shadow-xl shadow-brand-primary/5">
            {group.items.map((item) => {
              const itemPath = item.href.split("#")[0].replace(/\/$/, "");
              const isCurrent = !item.href.includes("#") && currentPath === itemPath;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isCurrent ? "page" : undefined}
                  className={cn(
                    "group block rounded-xl px-3 py-2.5 transition-colors",
                    isCurrent ? "bg-brand-subtle-bg" : "hover:bg-brand-subtle-bg",
                  )}
                >
                  <span
                    className={cn(
                      "block text-sm font-semibold",
                      isCurrent
                        ? "text-brand-primary"
                        : "text-brand-text-primary group-hover:text-brand-primary",
                    )}
                  >
                    {item.label}
                  </span>
                  {item.blurb && (
                    <span className="mt-0.5 block text-xs leading-snug text-brand-text-muted">
                      {item.blurb}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

