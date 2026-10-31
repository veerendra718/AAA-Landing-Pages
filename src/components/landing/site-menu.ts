// The site-wide header menu, mirroring the navigation on aaaedu.in. Labels
// follow aaaedu.in's own wording wherever a page here corresponds to one there.
//
// The top-level row carries the section hubs and nothing else — courses as two
// of them, classroom and online. aaaedu.in
// files Careers inside About Us; here, at the academy's request, it is a tab
// of its own (its page stays at /landing/about/careers).
//
// A group's top-level item links to its landing page, so that page is not
// repeated as the group's first dropdown entry. A group with no children of its
// own renders as a plain link rather than an empty dropdown — Contact Us is
// in that state. Contact matches aaaedu.in, whose Contact Us
// is a single link with the address, phones, email and enquiry form on one page.
//
import { sectionBySlug } from "./achievers-display";
import {
  classroomClasses,
  classroomExtras,
  classroomPackagesFor,
  classroomPrice,
  onlineClasses,
  onlineFeesTbd,
  class910Page,
  packagesFor,
  type PackageClass,
  perAnnum,
} from "./courses-data";

export type NavLeaf = {
  href: string;
  label: string;
  /** One line of context shown under the label in the open menu. */
  blurb?: string;
};

export type NavGroup = {
  label: string;
  /** A shorter label for the desktop header on smaller laptops (1024–1279px),
   *  where the full row is tight. The full label shows everywhere else. */
  shortLabel?: string;
  /** Where the top-level item itself links — and, for a `labelOnly` group,
   *  just the path its pages sit under, so the item is marked current there. */
  href: string;
  /** The top-level item only opens the dropdown; only its sub-pages link. */
  labelOnly?: boolean;
  /** Sub-pages shown under the top-level link. Empty renders a plain link. */
  items: NavLeaf[];
};

const aboutGroup: NavGroup = {
  label: "About Us",
  href: "/landing/about",
  items: [
    {
      href: "/landing/about/mission-vision",
      label: "Mission & Vision",
      blurb: "Principle-centred leaders, not only rank holders",
    },
    {
      href: "/landing/about/leadership",
      label: "Leadership & Faculty",
      blurb: "Founders and the senior faculty",
    },
    {
      href: "/landing/about/testimonials",
      label: "Testimonials",
      blurb: "What students and principals say",
    },
  ],
};

// A tab of its own, though its page sits under /landing/about: the header marks
// the longest matching href current, so this, not About Us, lights up there.
const careersGroup: NavGroup = {
  label: "Careers",
  href: "/landing/about/careers",
  items: [],
};

/** How many achievers a results page lists. */
const achieverTotal = (slug: string) => sectionBySlug(slug)?.students.length ?? 0;

const achieversGroup: NavGroup = {
  label: "Achievers",
  href: "/landing/achievers",
  items: [
    {
      href: "/landing/achievers/jee-mains",
      label: "JEE Mains",
      blurb: `${achieverTotal("jee-mains")} percentile results`,
    },
    {
      href: "/landing/achievers/jee-advanced",
      label: "JEE Advanced",
      blurb: `${achieverTotal("jee-advanced")} ranked results`,
    },
    {
      href: "/landing/achievers/neet",
      label: "NEET",
      blurb: `${achieverTotal("neet")} toppers — medical colleges`,
    },
    {
      href: "/landing/achievers/k-cet",
      label: "K-CET",
      blurb: `${achieverTotal("k-cet")} ranks, into NITK, IIT Bombay, BITS Goa`,
    },
  ],
};

// Courses are split by format into two menus, the way allen.in's header
// separates "Classroom Courses" from "Online Courses". Classroom is a dropdown
// of its two class pages, and so is Online.
// Hrefs are written out in full so
// scripts/check-links.mjs can see every hub is linked.
// The classroom packages by class — the same packages as online, priced per
// class. The course pages by exam are reached from the /landing/courses hub.
function classroomClassItem(cls: PackageClass): NavLeaf {
  const info = classroomClasses.find((c) => c.id === cls)!;
  const from = Math.min(...classroomPackagesFor(cls).map((p) => classroomPrice(p).price));
  return {
    href: info.href,
    label: `${info.label} courses`,
    blurb: `${info.course} · from ₹${from.toLocaleString("en-IN")} ${perAnnum} + ${classroomExtras}`,
  };
}

// There is no classroom hub page, so the item is a label over its two class
// pages, not a link. Its href is only the path both pages sit under.
const classroomGroup: NavGroup = {
  label: "Classroom Courses",
  shortLabel: "Classroom",
  href: "/landing/courses",
  labelOnly: true,
  items: [
    classroomClassItem("11"),
    classroomClassItem("12"),
    {
      href: "/landing/courses/class-9-10",
      label: class910Page.title,
      blurb: "Class 9 & 10 foundation · Class X boards",
    },
  ],
};

// The online courses are split by class: Class 11 (2-year) and Class 12 each
// have their own page listing only that class's packages.
function onlineClassItem(cls: PackageClass): NavLeaf {
  const info = onlineClasses.find((c) => c.id === cls)!;
  const packages = packagesFor(cls);
  const from = Math.min(...packages.map((p) => p.prices[cls]!.standard.price));
  return {
    href: info.href,
    label: info.label,
    blurb: `${info.course} · ${packages.length} courses${onlineFeesTbd ? "" : ` · from ₹${from.toLocaleString("en-IN")}`}`,
  };
}

// No online hub page either: the item is a label over its two class pages.
const onlineGroup: NavGroup = {
  label: "Online Courses",
  shortLabel: "Online",
  href: "/landing/courses/online",
  labelOnly: true,
  items: [onlineClassItem("11"), onlineClassItem("12")],
};

// No children: the site describes the Vijayanagar campus, and its contact page
// carries every detail a family needs for it. The day scholar & residential
// programme and the batches on offer are course material, so they sit under
// Courses.
const contactGroup: NavGroup = {
  label: "Contact Us",
  href: "/landing/contact",
  items: [],
};

export const siteMenu: NavGroup[] = [
  classroomGroup,
  onlineGroup,
  achieversGroup,
  aboutGroup,
  careersGroup,
  contactGroup,
];
