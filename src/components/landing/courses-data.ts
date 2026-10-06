// Content for the /landing/courses pages, taken from aaaedu.in's own Courses
// section and the programme cards on its home page. Every course here runs at
// the Vijayanagar head centre — aaaedu.in also lists other locations, but this
// build presents the Vijayanagar centre, so the menu carries courses and
// nothing else.
//
// Two pages under this section are deliberately not entries in `courses` below:
// the day scholar & residential programme (aaaedu.in gives it a page of its own)
// and admissions (its /admission page). Their content does not fit the course
// template, so they carry their own data and pages while still belonging to this
// section — the overview grid and the sub-nav both lead to them.

import { academy } from "./data";

export const coursesBase = "/landing/courses";

export const coursesHead = {
  href: coursesBase,
  title: "Classroom courses",
  note: `The courses below run at the academy's Vijayanagar head centre, with ${academy.appName} included for practice and revision at home. aaaedu.in lists further locations as well; this site describes the Vijayanagar centre.`,
};

export type Course = {
  slug: string;
  /** Full path, written out in full so the static link audit can read it. */
  href: string;
  /** Name as it appears in the header menu. */
  label: string;
  /** Class range, shown as the eyebrow. */
  eyebrow: string;
  /** One line for the menu blurb. */
  blurb: string;
  summary: string;
  image: string;
  /** A result from /landing/achievers, so the claim is checkable. */
  proof: { label: string; value: string; href: string };
  highlights: { title: string; body: string }[];
  syllabus: string[];
  exams: string[];
};


export const courses: Course[] = [
  {
    slug: "jee",
    href: "/landing/courses/jee",
    label: "IIT-JEE Main & Advanced",
    eyebrow: "Class 11, 12 & Droppers",
    blurb: "Two-year integrated PUC + JEE, fortnightly tests",
    summary:
      "A two-year integrated programme that runs the PUC syllabus alongside JEE-pattern tests every fortnight, so board marks and entrance rank are prepared for together rather than one after the other.",
    image: "/images/landing/a-track-0.jpg",
    proof: { label: "JEE Advanced achievers", value: "16", href: "/landing/achievers/jee-advanced" },
    highlights: [
      {
        title: "PUC and JEE, taught together",
        body: "Board syllabus and entrance practice share the same weekly slot, so there is no term where preparation for one stops the other.",
      },
      {
        title: "A test every fortnight",
        body: "JEE-pattern papers on a two-week rhythm, with cumulative analysis after every three tests so a weak chapter is caught early.",
      },
      {
        title: "Droppers sit the same batch",
        body: "A student who has already passed PUC joins the same classroom and the same test series — the batch is not split by age.",
      },
    ],
    syllabus: [
      "Physics — mechanics, optics, electricity, magnetism, modern physics",
      "Chemistry — physical, organic and inorganic, with numerical practice",
      "Mathematics — algebra, calculus, coordinate geometry, vectors, 3D",
      "PUC Physics, Chemistry and Mathematics, to board-exam depth",
    ],
    exams: ["JEE Main", "JEE Advanced", "BITSAT", "State CETs"],
  },
  {
    slug: "neet",
    href: "/landing/courses/neet",
    label: "NEET",
    eyebrow: "Class 11, 12 & Droppers",
    blurb: "NCERT-first biology, lab-backed concepts",
    summary:
      "NCERT-first biology taught from concepts rather than memory, backed by lab sessions, plus full-length NEET mocks on the board-exam pattern.",
    image: "/images/landing/a-track-1.jpg",
    proof: { label: "NEET achievers", value: "16", href: "/landing/achievers/neet" },
    highlights: [
      {
        title: "Biology from the NCERT line by line",
        body: "Every NCERT line is treated as a question, so the exam's most predictable section stops being a memory test.",
      },
      {
        title: "Full-length mocks",
        body: "NEET-pattern papers under exam timing, then a paper discussion with the faculty who set them.",
      },
      {
        title: "Physics taught for medical students",
        body: "The same mechanics and electricity, worked slowly enough that a student new to physical science can follow it.",
      },
    ],
    syllabus: [
      "Botany — diversity, cell biology, genetics, ecology, plant physiology",
      "Zoology — human physiology, genetics, evolution, biology and human health",
      "Chemistry — physical, organic and inorganic at NCERT depth",
      "Physics — mechanics, properties of matter, optics, electricity, modern physics",
    ],
    exams: ["NEET", "AIIMS", "State CETs", "BITSAT"],
  },
  {
    slug: "kcet-boards",
    href: "/landing/courses/kcet-boards",
    label: "KCET & Boards",
    eyebrow: "1st & 2nd PUC · CBSE · ICSE",
    blurb: "Board-first teaching that still covers KCET",
    summary:
      "Board-first teaching for 1st and 2nd PUC, CBSE and ICSE, structured so that every KCET chapter and question pattern is covered inside the same year rather than added on afterwards.",
    image: "/images/landing/a-track-2.jpg",
    proof: { label: "K-CET achievers", value: "24", href: "/landing/achievers/k-cet" },
    highlights: [
      {
        title: "Board depth first",
        body: "PUC, CBSE and ICSE are taught to their own exam standard, because that is where the marks actually are.",
      },
      {
        title: "KCET inside the same year",
        body: "The KCET pattern is not a separate revision stage — each chapter carries its CET-style questions from the first week.",
      },
      {
        title: "Distinction as the target",
        body: "More than 60% of the academy's students score a distinction, which is why the batch tracks board practice tests weekly.",
      },
    ],
    syllabus: [
      "1st PUC — Physics, Chemistry, Mathematics / Biology",
      "2nd PUC — Physics, Chemistry, Mathematics / Biology",
      "CBSE and ICSE equivalents for the same chapters",
      "KCET-specific question patterns and previous-paper analysis",
    ],
    exams: ["K-CET", "CBSE Board Exams", "ICSE Board Exams", "State Board Exams"],
  },
  {
    slug: "foundation",
    href: "/landing/courses/foundation",
    label: "IIT & NEET Foundation",
    eyebrow: "Class 8, 9 & 10",
    blurb: "Early base — Olympiad, NTSE and NSTSE included",
    summary:
      "The foundation years, Class 8 to 10, where the base is built early. Olympiad, NTSE and NSTSE preparation run inside the same batch rather than as an add-on.",
    image: "/images/landing/a-track-3.jpg",
    proof: { label: "NSTSE & NTSE achievers", value: "16", href: "/landing/achievers/nstse" },
    highlights: [
      {
        title: "Foundation, not a preview",
        body: "Class 8 to 10 is taught on its own terms. The aim is genuine command of the syllabus, not an early run at JEE.",
      },
      {
        title: "Olympiad and NTSE in the batch",
        body: "NSTSE, NTSE and Olympiad problems are part of the regular practice set, so no separate preparation is needed.",
      },
      {
        title: "The direct route into JEE & NEET",
        body: "A student who finishes Foundation here moves into the JEE or NEET batch without a bridge course elsewhere.",
      },
    ],
    syllabus: [
      "Mathematics — number systems, algebra, geometry, mensuration, data handling",
      "Science — physics, chemistry and biology at school level, with lab work",
      "NTSE and NSTSE Stage 1 & 2 pattern question sets",
      "Olympiad and NTSE reasoning, language and mental-ability papers",
    ],
    exams: ["NSTSE Stage 1 & 2", "NTSE Stage 1 & 2", "Olympiads", "School Exams"],
  },
];

/**
 * The four programmes above share one page shape and render from `courses`.
 * These two do not fit it, so the overview grid lists them separately — they
 * are the pages aaaedu.in keeps outside its Courses section.
 */
export const coursesExtras = [
  {
    href: "/landing/courses/residential",
    label: "Day Scholar & Residential",
    eyebrow: "Class 11 & 12 · PU & CBSE",
    blurb: "The 2-year integrated programme, both ways",
  },
  {
    href: "/landing/courses/admissions",
    label: "Admissions & Batches",
    eyebrow: "Class 8 to 12 & droppers",
    blurb: "Every batch on offer, and how to enrol",
  },
] as const;

/**
 * The integrated residential programme, as described on aaaedu.in. It is the
 * programme page the academy publishes for day scholars and boarders together,
 * so it sits with the courses rather than with the contact details.
 */
export const residentialProgramme = {
  title: "2-year integrated day scholar & residential programme",
  summary:
    "This integrated programme is designed to help students excel in their board exams — PU and CBSE Class 12 — and is also designed to help them crack competitive exams like KCET, JEE Main, JEE Advanced, NEET and KVPY. The environment is ideal for thorough preparation of the exams.",
  highlights: [
    {
      stat: "1,600+",
      label: "classroom teaching hours",
      body: "With weekly lab sessions and a monthly parent–teacher meeting.",
    },
    {
      stat: "400+",
      label: "problem-solving sessions a year",
      body: "Teacher-assisted JEE, NEET and KVPY sessions to ensure excellent results.",
    },
    {
      stat: "1",
      label: "comprehensive study material",
      body: "A single set of material, with daily practice problems given as home assignments.",
    },
    {
      stat: "40%+",
      label: "clear JEE Main or NEET",
      body: "Alongside a 100% board pass rate and 60%+ distinctions.",
    },
  ],
  benefits: [
    "Faculty are experts and ex-IITians, NITians and NEET toppers.",
    "Career guidance for choosing the best institutes for undergraduate courses.",
    "Board syllabus and competitive syllabus taught as one, so nothing is repeated or missed.",
    "Weekly lab sessions for Physics and Chemistry throughout the two years.",
    "Monthly parent–teacher meetings, so parents see progress before results do.",
  ],
};

/**
 * The batches, grouped as the academy's own enquiry form groups them. Batch
 * names (Sumedha, Sarthak, Siddhartha, Sushrutha) are the academy's.
 */
export const courseBatches = [
  {
    title: "Foundation — Class 8 to 10",
    body: "Built so the JEE and NEET base is laid years before the real exam, with NTSE, NSTSE and Olympiad preparation alongside the school syllabus.",
    courses: [
      "Class 8 — JEE & NEET Foundation (Sumedha batch)",
      "Class 9 — JEE & NEET Foundation (Sumedha batch)",
      "Class 9 — Board tuition (Sarthak batch)",
      "Class 10 — JEE & NEET Foundation (Sumedha batch)",
      "Class 10 — Board tuition (Sarthak batch)",
    ],
  },
  {
    title: "Integrated PU / CBSE — day scholar & residential",
    body: "Two years of board preparation and competitive exam training taught as one programme, at the academy's Vijayanagar centre, as a day scholar or a residential student.",
    courses: [
      "JEE & NEET integrated residential programme — PU / CBSE colleges",
      "JEE & NEET integrated day scholar programme — PU / CBSE colleges",
      "2-year integrated classroom course (Siddhartha batch)",
    ],
  },
  {
    title: "Engineering & medical entrance",
    body: "Coaching for Class 11, 12 and droppers, timed to both the board syllabus and the exam pattern.",
    courses: [
      "JEE Main and JEE Advanced coaching",
      "NEET-UG coaching (Sushrutha batch)",
      "KCET, NEET and IIT-JEE programme",
      "KCET coaching",
    ],
  },
  {
    title: "Online",
    body: "The same faculty and material, delivered live and recorded through AAA Lakshya.",
    courses: ["Arjunaa Academy live online classes"],
  },
];

/** The admission steps, mirroring the academy's counselling-first process. */
export const admissionSteps = [
  {
    step: "Choose a course",
    body: "Pick the batch that matches the class and exam — or call and describe the student, and the team will recommend one.",
  },
  {
    step: "Ask how you want to talk",
    body: "Call back, home visit, visit the centre in Vijayanagar, or a video call.",
  },
  {
    step: "Counselling & diagnostic test",
    body: "A mentor explains the programme and a short test shows where the student stands, topic by topic.",
  },
  {
    step: "Vrddhi scholarship",
    body: "Sit the Vrddhi talent-search test if you want a scholarship on the fee — held every year since 2012.",
  },
  {
    step: "Enrol",
    body: "Complete the admission form, collect the material, and the AAA Lakshya app is included.",
  },
];

export const admissionsNote =
  "Admissions are open for the 2026–27 academic year across all batches. Batch sizes are capped at 30, so seats in a batch close as it fills rather than on a fixed date.";

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

// ---------------------------------------------------------------------------
// Online courses
//
// The same four courses, taught live online through AAA Lakshya. aaaedu.in has
// no separate online catalogue; everything below restates what the site already
// says — the same faculty teach the live online classes, and AAA Lakshya carries
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
 * Names follow the AAA Lakshya app itself (its sidebar and plan pages): Live
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
    slug: "shreshtra",
    name: "Shreshtra",
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
  { label: "Fees", classroom: "One price per course", online: "Free, Standard or Advanced plan" },
  { label: "App access", classroom: `${academy.appName} Advanced plan, free`, online: `${academy.appName} app, on the plan you choose` },
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
    note: `Two-year courses that take a Class 11 student through Class 12 to the exam — live classes with the academy's faculty, and every test, note and recorded lecture in the ${academy.appName} app.`,
  },
  {
    id: "12",
    href: "/landing/courses/online/class-12",
    label: "Class 12",
    course: "1-year course",
    title: "Class 12 online courses",
    note: `One-year courses for the final year before the exam — live classes with the academy's faculty, and every test, note and recorded lecture in the ${academy.appName} app.`,
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
// The same packages are taught in the classroom at Vijayanagar, as one course
// with no Free / Standard / Advanced tiers, and classroom students get the
// AAA app Advanced plan free.
//
// DUMMY: the academy hasn't sent classroom prices yet. Until it does, each
// classroom price is the package's online price doubled — the Advanced price,
// or Standard where there is no Advanced — discount included. Replace
// `classroomPrice` with the real list when it arrives.
// ---------------------------------------------------------------------------

export function classroomPrice(pkg: OnlinePackage, cls: PackageClass): PackagePrice {
  const tiers = pkg.prices[cls]!;
  const base = tiers.advanced ?? tiers.standard;
  return { price: base.price * 2, off: base.off * 2, offLabel: base.offLabel };
}

/** What a classroom package includes, beyond the free app plan. */
export const classroomIncludes = [
  "Live classes with the academy's faculty at Vijayanagar",
  "Batches of up to 30 students",
  "Doubt desk after class, face to face",
  "Counselling with a mentor at the centre",
];

/** Each class's classroom packages page, mirroring `onlineClasses`. */
export const classroomClasses: OnlineClassInfo[] = [
  {
    id: "11",
    href: "/landing/courses/class-11",
    label: "Class 11",
    course: "2-year course",
    title: "Class 11 classroom courses",
    note: `Two-year courses taught in the classroom at Vijayanagar, from Class 11 through Class 12 to the exam — with the ${academy.appName} Advanced plan included free.`,
  },
  {
    id: "12",
    href: "/landing/courses/class-12",
    label: "Class 12",
    course: "1-year course",
    title: "Class 12 classroom courses",
    note: `One-year courses taught in the classroom at Vijayanagar for the final year before the exam — with the ${academy.appName} Advanced plan included free.`,
  },
];
