// Content for the /landing/courses pages: the Class 11 and Class 12 packages,
// sold as classroom courses at the Vijayanagar centre and as online courses in
// AAA app, with the admission steps and the online-vs-classroom comparison.

import { academy } from "./data";

/** The admission steps, mirroring the academy's counselling-first process. */
export const admissionSteps = [
  {
    step: "Choose a course",
    body: "Pick the batch that matches the class and exam — or call and describe the student, and the team will recommend one.",
  },
  {
    step: "Ask how you want to talk",
    body: "Call back, a visit to our centre, or connect online.",
  },
  {
    step: "Counselling & diagnostic test",
    body: "A mentor explains the programme and a short test shows where the student stands, topic by topic.",
  },
  {
    step: "ASST scholarship",
    body: "Sit the Arjunaa Scholastic & Scholarship Test (ASST) to earn fee waivers on your admission based on performance scores.",
  },
  {
    step: "Enrol",
    body: "Complete the admission form, collect the material, and the AAA app is included.",
  },
];

// ---------------------------------------------------------------------------
// Online courses
//
// The same four courses, taught live online through AAA app. aaaedu.in has
// no separate online catalogue; everything below restates what the site already
// says — the same faculty teach the live online classes, and AAA app carries
// live and recorded classes, tests, notes and doubt support. No fees, dates or
// batch details are invented. Hrefs are written out in full so
// scripts/check-links.mjs can read them.
// ---------------------------------------------------------------------------

export const onlineBase = "/landing/courses/online";

export const onlineHead = {
  title: "Online courses",
  note: `Eight courses for KCET, NEET, JEE Main and JEE Advanced — one exam, or several prepared together — taught live by the same faculty as the Vijayanagar classroom, with every test, note and recorded lecture in the ${academy.appName} app.`,
};

export type OnlineExam = "KCET" | "NEET" | "JEE Main" | "JEE Advanced";

export type OnlineExamInfo = {
  /** Also the id of this exam's filter on the class pages (…/class-11#neet). */
  slug: string;
  exam: OnlineExam;
  eyebrow: string;
  image: string;
};

/**
 * The four exams the packages prepare for, online and in the classroom — the
 * only exams the site lists.
 */
export const onlineExams: OnlineExamInfo[] = [
  {
    slug: "kcet",
    exam: "KCET",
    eyebrow: "Engineering · Karnataka",
    image: "/images/landing/a-track-2.jpg",
  },
  {
    slug: "jee-main",
    exam: "JEE Main",
    eyebrow: "Engineering · NITs",
    image: "/images/landing/a-track-0.jpg",
  },
  {
    slug: "jee-advanced",
    exam: "JEE Advanced",
    eyebrow: "Engineering · IITs",
    image: "/images/landing/a-track-3.jpg",
  },
  {
    slug: "neet",
    exam: "NEET",
    eyebrow: "Medical",
    image: "/images/landing/a-track-1.jpg",
  },
];

/**
 * What the app gives an online student, grouped the way a student uses it.
 * Names follow the AAA app itself (its sidebar and plan pages): Live
 * Classes, Practice Quizzes, Chapter Tests, Daily Practice Problems, Previous
 * Year Papers, Full Mock Tests, Custom Tests, My Mistakes, Analytics, Peer
 * Comparison, Badges, Leaderboard and Rewards.
 */
export const appFeatureGroups = [
  {
    title: "Learn",
    body: "Taught live by the academy's own faculty — the same teachers as the classroom.",
    items: ["Live classes", "Video lectures by subject & topic", "Recordings of past classes", "My Notes"],
  },
  {
    title: "Practise",
    body: "Every kind of test, in the exact pattern of the exam you're preparing for.",
    items: ["Practice quizzes", "Chapter tests", "Daily practice problems", "Previous year papers", "Full mock tests", "Custom tests"],
  },
  {
    title: "Improve",
    body: "Know exactly what to fix after every test, not just the score.",
    items: ["My Mistakes", "Analytics & predicted score", "Peer comparison", "Recommended next steps"],
  },
  {
    title: "Stay on track",
    body: "Small wins that keep daily practice going through a two-year preparation.",
    items: ["Badges", "Leaderboard", "Rewards"],
  },
];

/**
 * The app's three plans, with the features the app's own plan page lists for
 * each, in its wording (Oct 2026). Prices are per package — see
 * `onlinePackages`. Quotas are configured by the academy and can change, so
 * none are quoted.
 */
export const onlinePlans = [
  {
    id: "free",
    name: "Free",
    features: ["Limited content access", "Basic chapter quizzes", "Community support"],
  },
  {
    id: "standard",
    name: "Standard",
    features: [
      "Unlimited HD Video Lectures",
      "10,000+ Practice Questions",
      "Weekly Chapter-wise Tests",
      "Advanced Performance Analytics",
    ],
  },
  {
    id: "advanced",
    name: "Advanced",
    features: [
      "Everything in Standard",
      "AI-Powered Mock Exams",
      "1-on-1 Doubt Sessions",
      "Advanced Performance Analytics",
    ],
  },
] as const;

/**
 * A tier's price and its current discount, in rupees, as the academy's price
 * list gives them. `offLabel` replaces the "₹X off" wording where the list
 * words the discount differently (e.g. "10% off").
 */
export type PackagePrice = { price: number; off: number; offLabel?: string };

export type PackageClass = "11" | "12";

export type OnlinePackage = {
  /** Also the card's element id on the online page. */
  slug: string;
  name: string;
  exams: OnlineExam[];
  /** Shown on the card when the package is sold for one class only. */
  note?: string;
  /**
   * Prices per class. Class 11 is the 2-year course (Class 11 + 12); Class 12
   * is the one-year course. A package missing a class isn't sold for it, and a
   * missing `advanced` means the package has no Advanced tier.
   */
  prices: Partial<Record<PackageClass, { standard: PackagePrice; advanced?: PackagePrice }>>;
};

/**
 * The packages the AAA app sells, from the academy's price list
 * (Oct 2026). The catalogue lives in the backend and has no public endpoint,
 * so update these by hand when prices change. Sakala Class 12 Advanced is
 * listed as "10% off", and shown that way. Sarvam's 2-year package is
 * listed with no class set and is shown under Class 11 with the other
 * 2-year courses.
 */
export const onlinePackages: OnlinePackage[] = [
  {
    slug: "siddhartha",
    name: "Siddhartha",
    exams: ["KCET"],
    prices: {
      "11": { standard: { price: 7999, off: 800 }, advanced: { price: 39999, off: 4000 } },
      "12": { standard: { price: 4999, off: 500 }, advanced: { price: 24999, off: 2500 } },
    },
  },
  {
    slug: "siddhartha-fasttrack",
    name: "Siddhartha Fasttrack",
    note: "Class 12 only",
    exams: ["KCET"],
    prices: {
      "12": { standard: { price: 4999, off: 500 } },
    },
  },
  {
    slug: "shushrutha",
    name: "Shushrutha",
    exams: ["NEET"],
    prices: {
      "11": { standard: { price: 9999, off: 1000 }, advanced: { price: 49999, off: 5000 } },
      "12": { standard: { price: 6499, off: 650 }, advanced: { price: 32499, off: 3250 } },
    },
  },
  {
    slug: "saadhaka",
    name: "Saadhaka",
    exams: ["JEE Main"],
    prices: {
      "11": { standard: { price: 14999, off: 1500 }, advanced: { price: 69999, off: 7000 } },
      "12": { standard: { price: 9499, off: 1000 }, advanced: { price: 47499, off: 5000 } },
    },
  },
  {
    slug: "shreshta",
    name: "Shreshta",
    exams: ["JEE Advanced"],
    prices: {
      "11": { standard: { price: 19999, off: 2500 }, advanced: { price: 99999, off: 12500 } },
      "12": { standard: { price: 12499, off: 1250 }, advanced: { price: 62499, off: 8000 } },
    },
  },
  {
    slug: "sakala",
    name: "Sakala",
    exams: ["KCET", "NEET"],
    prices: {
      "11": { standard: { price: 14999, off: 1500 }, advanced: { price: 74999, off: 7500 } },
      "12": { standard: { price: 9999, off: 1000 }, advanced: { price: 49999, off: 5000, offLabel: "10% off" } },
    },
  },
  {
    slug: "sarvam",
    name: "Sarvam",
    exams: ["KCET", "NEET", "JEE Main"],
    prices: {
      "11": { standard: { price: 26999, off: 2700 }, advanced: { price: 134999, off: 13500 } },
      "12": { standard: { price: 17999, off: 1800 }, advanced: { price: 89999, off: 9000 } },
    },
  },
  {
    slug: "sarvotthama",
    name: "Sarvotthama",
    exams: ["KCET", "NEET", "JEE Main", "JEE Advanced"],
    prices: {
      "11": { standard: { price: 42999, off: 4300 }, advanced: { price: 214999, off: 21500 } },
      "12": { standard: { price: 28999, off: 2900 }, advanced: { price: 144999, off: 14500 } },
    },
  },
];

/** Getting started, as the app's own sign-up works. */
export const onlineSteps = [
  { title: "Create a free account", body: "Sign up on the AAA app with your name, email and mobile number." },
  { title: "Pick your class and course", body: "Open the Class 11 (2-year) or Class 12 page, then choose the course for the exams you are writing." },
  { title: "Start learning", body: "Begin on the Free plan, or try Standard or Advanced free for 7 days." },
];

/** Classroom and online, side by side. */
export const formatComparison = [
  { label: "Teachers", classroom: "Academy faculty at Vijayanagar", online: "The same faculty, live online" },
  { label: "Classes", classroom: "In person, batches of up to 30", online: "Live online, plus video lectures" },
  { label: "Getting started", classroom: "Counselling visit, then enrol", online: "Sign up free, 7-day trial of paid plans" },
  { label: "Fees", classroom: "One fee per course, per annum", online: "Free, Standard or Advanced plan" },
  { label: "App access", classroom: `${academy.appName} app Advanced plan access`, online: `${academy.appName} app, on the plan you choose` },
  { label: "Tests", classroom: `Exam-pattern tests in the ${academy.appName} app`, online: `Exam-pattern tests in the ${academy.appName} app` },
  { label: "Doubts", classroom: "Doubt desk after class, face to face", online: "Online, with weekly 1-on-1 sessions on Advanced" },
  { label: "Counselling", classroom: "At the centre, with a mentor", online: "Video counselling session" },
  { label: "Best for", classroom: "Students who can reach Vijayanagar", online: "Students further away" },
];

/** The packages for `exam` alone — not the combined packages that also cover it. */
export const examPackages = (exam: OnlineExam) =>
  onlinePackages.filter((p) => p.exams.length === 1 && p.exams[0] === exam);

/**
 * The lowest Standard price of `exam`'s own packages,
 * in one class or across both.
 */
export function lowestPriceFor(exam: OnlineExam, cls?: PackageClass): number {
  return Math.min(
    ...examPackages(exam)
      .flatMap((p) => (cls ? [p.prices[cls]] : Object.values(p.prices)))
      .flatMap((c) => (c ? [c.standard.price] : [])),
  );
}

export type OnlineClassInfo = {
  id: PackageClass;
  href: string;
  label: string;
  /** How long the course runs. */
  course: string;
  title: string;
  /** Shown in bold above the note. */
  lead?: string;
  /** Paragraphs separated by a blank line. */
  note: string;
};

/** Each class has its own online page, listing only that class's packages. */
export const onlineClasses: OnlineClassInfo[] = [
  {
    id: "11",
    href: "/landing/courses/online/class-11",
    label: "Class 11",
    course: "2-year course",
    title: "Class 11 online courses",
    note: `Two-year courses for KCET, NEET, JEE Main and JEE Advanced, taught live online by our classroom faculty — from Class 11 through Class 12 to the exam.`,
  },
  {
    id: "12",
    href: "/landing/courses/online/class-12",
    label: "Class 12",
    course: "1-year course",
    title: "Class 12 online courses",
    note: `One-year courses for KCET, NEET, JEE Main and JEE Advanced, taught live online by our classroom faculty — focused on the final year before the exam.`,
  },
];

/** The packages sold for a class. */
export const packagesFor = (cls: PackageClass) => onlinePackages.filter((p) => p.prices[cls]);

/** The id of the filter a package sits under on a class page (its exam, or "combined"). */
export function packageFilterSlug(pkg: OnlinePackage): string {
  if (pkg.exams.length > 1) return "combined";
  return onlineExams.find((e) => e.exam === pkg.exams[0])!.slug;
}

// ---------------------------------------------------------------------------
// Classroom packages
//
// Four of the packages are also taught in the classroom at Vijayanagar, as one
// course with no Free / Standard / Advanced tiers, and classroom students get the
// AAA app Advanced plan access.
//
// Fees are from the academy's classroom fee list (Oct 2026): a yearly fee and
// the discounted fee, the same for Class 11 and Class 12. The academy wants
// every classroom fee shown as per annum (`perAnnum`). `label` and
// `classroomExtras` are the list's own wording.
// ---------------------------------------------------------------------------

export const classroomFees: Record<string, { label: string; price: number; discounted: number }> = {
  siddhartha: { label: "K-CET + JEE Mains or NEET", price: 125000, discounted: 110000 },
  saadhaka: { label: "JEE Mains Rankers Batch", price: 160000, discounted: 140000 },
  shushrutha: { label: "NEET Rankers Batch", price: 175000, discounted: 150000 },
  shreshta: { label: "JEE Mains + Advanced Rankers Batch", price: 190000, discounted: 160000 },
};

/** Shown after every classroom fee. */
export const perAnnum = "p.a.";

/** What comes with every classroom course's fee, as the fee list words it. */
export const classroomExtras = "Free app + Free crash course";

/** The packages taught in the classroom, in the online catalogue's order. */
export const classroomPackagesFor = (cls: PackageClass) => packagesFor(cls).filter((p) => classroomFees[p.slug]);

/** A classroom package's yearly fee and its discount. */
export function classroomPrice(pkg: OnlinePackage): PackagePrice {
  const fee = classroomFees[pkg.slug];
  return { price: fee.price, off: fee.price - fee.discounted };
}

export type OtherCourseFee = {
  /** Which option the fee is for, when a course has several (a board). */
  option?: string;
  price: number;
  /** The fee after discount, when there is one. */
  discounted?: number;
  perAnnum: boolean;
};

/**
 * The other classroom courses on the academy's fee list (Oct 2026), outside the
 * Class 11 & 12 packages, in the list's own wording. Sarthaka's State board fee
 * is blank on the list, so it isn't shown until the academy sends it.
 */
export const otherClassroomCourses: {
  slug: string;
  name: string;
  label: string;
  fees: OtherCourseFee[];
  extras?: string;
}[] = [
  {
    slug: "kcet-crash-course",
    name: "KCET Crash course",
    label: "for PCM",
    fees: [{ price: 18000, perAnnum: true }],
    extras: "Free app access",
  },
  {
    slug: "sumedha",
    name: "Sumedha",
    label: "JEE NEET Weekend Foundation Batch Class 9 & Class 10",
    fees: [{ price: 57500, discounted: 50000, perAnnum: true }],
  },
  {
    slug: "sarthaka",
    name: "Sarthaka",
    label: "Class X Board tuitions for ICSE, CBSE & State",
    fees: [
      { option: "ICSE", price: 42000, discounted: 37500, perAnnum: true },
      { option: "CBSE", price: 33000, discounted: 30000, perAnnum: true },
    ],
  },
];

/** What a classroom package includes, beyond the free app plan. */
export const classroomIncludes = [
  "Live classes with the academy's faculty at Vijayanagar",
  "Batches of up to 30 students",
  "Doubt desk after class, face to face",
  "Counselling with a mentor at the centre",
];

/** The page for the classroom courses outside Class 11 & 12 (`otherClassroomCourses`). */
export const otherCoursesPage = {
  href: "/landing/courses/other",
  title: "Other courses",
  note: "A KCET crash course, a weekend foundation batch for Class 9 & 10, and Class X board tuitions — taught at our Vijayanagar centre.",
};

/** Each class's classroom packages page, mirroring `onlineClasses`. */
export const classroomClasses: OnlineClassInfo[] = [
  {
    id: "11",
    href: "/landing/courses/class-11",
    label: "Class 11",
    course: "2-year course",
    title: "Class 11 classroom courses",
    lead: "Give Your Child the Ultimate Competitive Edge",
    note: [
      "Master the Class 11 and 12 curriculum alongside rigorous training for KCET, NEET, and JEE Main/Advanced.",
      `Our Vijayanagar classroom program combines small-batch personal mentorship with modern technology. By securing a seat in our physical batches, your ward receives complimentary, full access to the ${academy.appName} App’s Advanced features—extending their learning far beyond the classroom walls at zero extra cost.`,
    ].join("\n\n"),
  },
  {
    id: "12",
    href: "/landing/courses/class-12",
    label: "Class 12",
    course: "1-year course",
    title: "Class 12 classroom courses",
    note: `One-year courses for KCET, NEET, JEE Main and JEE Advanced, taught in small batches at our Vijayanagar centre — focused on the final year, with the ${academy.appName} app Advanced plan access.`,
  },
];

/**
 * What each classroom package is about, shown on its card.
 *
 * DUMMY: the academy hasn't sent per-package details yet — the summaries,
 * timings and test schedules below are placeholders written from what each
 * package covers. Replace them with the real batch details when they arrive.
 */
export const classroomDetails: Record<string, { summary: string; subjects: string; schedule: string; tests: string }> = {
  siddhartha: {
    summary: "KCET preparation with JEE Main or NEET alongside, taught with the PU syllabus.",
    subjects: "Physics · Chemistry · Maths or Biology",
    schedule: "Mon – Sat · 3 hours a day",
    tests: "Weekly KCET-pattern tests",
  },
  shushrutha: {
    summary: "NCERT-first NEET coaching, with concepts taught before memory.",
    subjects: "Physics · Chemistry · Biology",
    schedule: "Mon – Sat · 3 hours a day",
    tests: "Weekly NEET-pattern tests",
  },
  saadhaka: {
    summary: "JEE Main preparation for the NITs and top engineering colleges.",
    subjects: "Physics · Chemistry · Maths",
    schedule: "Mon – Sat · 3.5 hours a day",
    tests: "Fortnightly JEE Main mocks",
  },
  shreshta: {
    summary: "Deep problem-solving for students aiming at the IITs.",
    subjects: "Physics · Chemistry · Maths",
    schedule: "Mon – Sat · 4 hours a day",
    tests: "Fortnightly JEE Advanced papers",
  },
};

/**
 * What each online plan includes, row by row — the app's own "Compare Plans"
 * table (Oct 2026), without its price row (prices are per course, on the plan
 * cards). The limits are the same for every course. `true` / `false` render
 * as a tick / a cross.
 */
export type PlanCell = string | boolean;

export const planComparison: { feature: string; free: PlanCell; standard: PlanCell; advanced: PlanCell }[] = [
  { feature: "Free trial", free: "—", standard: "7 days", advanced: "7 days" },
  { feature: "Video lectures", free: "Sample only", standard: "Full library", advanced: "Full + early access" },
  { feature: "Practice quizzes", free: "1 / month", standard: "20 / month", advanced: "Unlimited" },
  { feature: "Chapter tests", free: "1 / month", standard: "20 / month", advanced: "Unlimited" },
  { feature: "Previous year papers", free: "1 / month", standard: "20 / month", advanced: "Unlimited" },
  { feature: "Full mock tests", free: "1 / month", standard: "20 / month", advanced: "Unlimited" },
  { feature: "Daily practice problems", free: "1 / month", standard: "20 / month", advanced: "Unlimited" },
  { feature: "Custom tests", free: false, standard: "20 / month", advanced: "Unlimited" },
  { feature: "Analytics", free: "Basic", standard: "Basic", advanced: "Detailed + peer comparison" },
  { feature: "Live classes", free: false, standard: "20 / month", advanced: "Unlimited" },
  { feature: "1-on-1 doubt sessions", free: false, standard: false, advanced: "Weekly, per subject" },
  { feature: "Adaptive learning", free: false, standard: true, advanced: true },
  { feature: "Badges & tokens", free: false, standard: "1× earning", advanced: "1.6× earning" },
];
