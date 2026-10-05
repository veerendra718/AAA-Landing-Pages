// The site-wide header menu, mirroring the navigation on aaaedu.in. Labels
// follow aaaedu.in's own wording wherever a page here corresponds to one there.
//
// The top-level row carries the section hubs and nothing else — courses as two
// of them, classroom and online. aaaedu.in
// files Careers inside About Us rather than beside it, so it is a child of the
// About Us group here too.
//
// A group's top-level item links to its landing page, so that page is not
// repeated as the group's first dropdown entry. A group with no children of its
// own renders as a plain link rather than an empty dropdown — Online Courses
// and Contact Us are in that state. Contact matches aaaedu.in, whose Contact Us
// is a single link with the address, phones, email and enquiry form on one page.
//
import { courses, coursesExtras } from "./courses-data";

export type NavLeaf = {
  href: string;
  label: string;
  /** One line of context shown under the label in the open menu. */
  blurb?: string;
};

export type NavGroup = {
  label: string;
  /** Where the top-level item itself links. */
  href: string;
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
    {
      href: "/landing/about/careers",
      label: "Careers",
      blurb: "Teach with us — real ownership, room to grow",
    },
  ],
};

const achieversGroup: NavGroup = {
  label: "Achievers",
  href: "/landing/achievers",
  items: [
    {
      href: "/landing/achievers/jee-mains",
      label: "JEE Mains",
      blurb: "45 ranked results",
    },
    {
      href: "/landing/achievers/jee-advanced",
      label: "JEE Advanced",
      blurb: "16 ranked results",
    },
    {
      href: "/landing/achievers/neet",
      label: "NEET",
      blurb: "16 toppers — medical & dental colleges",
    },
    {
      href: "/landing/achievers/k-cet",
      label: "K-CET",
      blurb: "24 ranks, into NITK, IIT Bombay, BITS Goa",
    },
    {
      href: "/landing/achievers/nstse",
      label: "NSTSE & NTSE",
      blurb: "16 foundation-level state and national ranks",
    },
  ],
};

// Courses are split by format into two menus, the way allen.in's header
// separates "Classroom Courses" from "Online Courses". Classroom is a dropdown
// of its course pages; Online is a single page, so it is a plain link.
// Hrefs are written out rather than built from `coursesBase` / `onlineBase` so
// scripts/check-links.mjs can see every hub is linked.
const classroomGroup: NavGroup = {
  label: "Classroom Courses",
  href: "/landing/courses",
  items: [
    ...courses.map((c) => ({
      href: c.href,
      label: c.label,
      blurb: c.eyebrow,
    })),
    ...coursesExtras.map((x) => ({ href: x.href, label: x.label, blurb: x.blurb })),
  ],
};

// A plain link, no dropdown: the online courses have no pages of their own —
// they are cards on the one Online Courses page — so listing them as menu
// items would suggest pages that don't exist.
const onlineGroup: NavGroup = {
  label: "Online Courses",
  href: "/landing/courses/online",
  items: [],
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
  aboutGroup,
  classroomGroup,
  onlineGroup,
  achieversGroup,
  contactGroup,
];
