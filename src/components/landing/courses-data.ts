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
  note: `Live online classes for JEE, NEET, KCET and Foundation, taught by the same faculty as the Vijayanagar classroom — with every test, note and recorded lecture in ${academy.appName}. For students who can't travel to the centre.`,
};

export type OnlineCourse = {
  slug: string;
  href: string;
  /** The classroom page for the same course. */
  classroomHref: string;
  label: string;
  eyebrow: string;
  image: string;
  exams: string[];
};

/**
 * The online courses are what the AAA Lakshya app itself offers, which is
 * narrower than the classroom: the app's exams are JEE Main, JEE Advanced,
 * NEET and KCET (plus Foundation at sign-up) — no CBSE, ICSE or State Board.
 * So these are written out here rather than derived from the classroom
 * `courses`, whose KCET course also covers the boards and whose exam lists
 * include BITSAT, NSTSE and the like.
 */
export const onlineCourses: OnlineCourse[] = [
  {
    slug: "jee",
    href: "/landing/courses/online#jee",
    classroomHref: "/landing/courses/jee",
    label: "IIT-JEE Main & Advanced",
    eyebrow: "Class 11, 12 & Droppers",
    image: "/images/landing/a-track-0.jpg",
    exams: ["JEE Main", "JEE Advanced"],
  },
  {
    slug: "neet",
    href: "/landing/courses/online#neet",
    classroomHref: "/landing/courses/neet",
    label: "NEET",
    eyebrow: "Class 11, 12 & Droppers",
    image: "/images/landing/a-track-1.jpg",
    exams: ["NEET"],
  },
  {
    slug: "kcet",
    href: "/landing/courses/online#kcet",
    classroomHref: "/landing/courses/kcet-boards",
    label: "KCET",
    eyebrow: "1st & 2nd PUC",
    image: "/images/landing/a-track-2.jpg",
    exams: ["KCET"],
  },
  {
    slug: "foundation",
    href: "/landing/courses/online#foundation",
    classroomHref: "/landing/courses/foundation",
    label: "IIT & NEET Foundation",
    eyebrow: "Class 8, 9 & 10",
    image: "/images/landing/a-track-3.jpg",
    exams: ["Foundation for JEE", "Foundation for NEET"],
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
 * The app's three plans, with the headline features the app's own plan page
 * lists for each. Prices are per package — see `onlinePackages`. Quotas are
 * configured by the academy and can change, so none are quoted.
 */
export const onlinePlans = [
  {
    id: "free",
    name: "Free",
    note: "No payment needed",
    features: ["Limited content access", "Basic chapter quizzes", "Community support"],
  },
  {
    id: "standard",
    name: "Standard",
    note: "7-day free trial",
    features: [
      "Unlimited HD video lectures",
      "10,000+ practice questions",
      "Weekly chapter-wise tests",
      "Live classes",
      "Performance analytics — scores & time",
    ],
  },
  {
    id: "advanced",
    name: "Advanced",
    note: "7-day free trial",
    highlight: true,
    features: [
      "Everything in Standard",
      "AI-powered mock exams",
      "1-on-1 doubt sessions, weekly per subject",
      "Detailed analytics with peer comparison",
      "Priority access to live classes",
    ],
  },
];

export type OnlinePackage = {
  name: string;
  /** The package's batch label, as the app shows it. */
  batch: string;
  /** Net price in rupees per tier (GST included); `onSale` = a discount is active. */
  tiers: { id: "free" | "standard" | "advanced"; price: number; onSale?: boolean }[];
};

/**
 * The packages the AAA Lakshya app sells, with their net prices (what the
 * student pays, GST included). Copied from the app's admin catalogue
 * (Catalog → Packages, UAT, Oct 2026) — the catalogue lives in the backend and
 * has no public endpoint, so update these by hand when prices change.
 */
export const onlinePackages: OnlinePackage[] = [
  {
    name: "KCET and NEET 2 Year Program",
    batch: "KCET and NEET 26-28",
    tiers: [
      { id: "free", price: 0 },
      { id: "standard", price: 76700, onSale: true },
      { id: "advanced", price: 103014, onSale: true },
    ],
  },
  {
    name: "KCET Crash Course",
    batch: "KCET",
    tiers: [
      { id: "free", price: 0 },
      { id: "standard", price: 17700 },
      { id: "advanced", price: 23600 },
    ],
  },
  {
    name: "KCET Integrated 2 Year Course",
    batch: "KCET 26-28",
    tiers: [
      { id: "free", price: 0 },
      { id: "standard", price: 21240, onSale: true },
      { id: "advanced", price: 31860, onSale: true },
    ],
  },
  {
    name: "NEET Crash Course",
    batch: "NEET 26-27",
    tiers: [
      { id: "free", price: 0 },
      { id: "standard", price: 22420, onSale: true },
    ],
  },
  {
    name: "NEET Integrated 2 Year Course",
    batch: "NEET 26-28",
    tiers: [
      { id: "free", price: 0 },
      { id: "standard", price: 40120, onSale: true },
      { id: "advanced", price: 55460, onSale: true },
    ],
  },
];

/** Getting started, as the app's own sign-up works. */
export const onlineSteps = [
  { title: "Create a free account", body: "Sign up on AAA Lakshya with your name, email and mobile number." },
  { title: "Pick your class and package", body: "Choose your class, then the package — JEE, NEET, KCET or Foundation." },
  { title: "Start learning", body: "Begin on the Free plan, or try Standard or Advanced free for 7 days." },
];

/** Classroom and online, side by side. */
export const formatComparison = [
  { label: "Teachers", classroom: "Academy faculty at Vijayanagar", online: "The same faculty, live online" },
  { label: "Classes", classroom: "In person, batches of up to 30", online: "Live online, plus video lectures" },
  { label: "Getting started", classroom: "Counselling visit, then enrol", online: "Sign up free, 7-day trial of paid plans" },
  { label: "Tests", classroom: `Exam-pattern tests in ${academy.appName}`, online: `Exam-pattern tests in ${academy.appName}` },
  { label: "Doubts", classroom: "Doubt desk after class, face to face", online: "Online, with weekly 1-on-1 sessions on Advanced" },
  { label: "Counselling", classroom: "At the centre, with a mentor", online: "Video counselling session" },
  { label: "Best for", classroom: "Students who can reach Vijayanagar", online: "Students further away" },
];
