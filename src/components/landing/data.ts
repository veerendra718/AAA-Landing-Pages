// Demo content for the landing-page variations. Academy facts come from
// aaaedu.in; everything marked DUMMY is placeholder until the real names,
// ranks and numbers are supplied.

export const academy = {
  name: "Arjunaa Academy for Achievers",
  shortName: "Arjunaa Academy",
  appName: "AAA",
  tagline: "To be the best, Get trained by the best",
  founded: 2012,
  phones: ["7676642258", "8197554516"],
  email: "info@aaaedu.in",
  // aaaedu.in's own WhatsApp link (api.whatsapp.com/send?phone=7676642258).
  // Bare 10 digits like `phones`; whatsappUrl adds the 91 country code.
  whatsapp: "7676642258",
};

// The academy's social profiles, as linked from aaaedu.in's footer.
export const socials = [
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/arjunaa_academy_for_achievers/" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/channel/UCcPOkcZ_YGpTMcVnLJQYLPA" },
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/www.aaaedu.in/" },
  { id: "linkedin", label: "LinkedIn", href: "https://in.linkedin.com/company/arjunaa-academy-for-achievers" },
  { id: "x", label: "X (Twitter)", href: "https://twitter.com/academy_arjunaa" },
] as const;

/** A WhatsApp chat with the academy, opened with `text` already typed. */
export function whatsappWith(text: string) {
  return `https://wa.me/91${academy.whatsapp}?text=${encodeURIComponent(text)}`;
}

// Where every "Login" / "Student login" link on the site goes: the student
// dashboard's sign-in, which returns to the dashboard afterwards.
export const loginUrl = "https://feature.samvitai.com/login?callbackUrl=%2Fdashboard";

// Where every sign-up link goes ("Start free", "Try AAA app free",
// "Create account"): the student app's registration.
export const registerUrl = "https://feature.samvitai.com/register";

export const branch = {
  name: "Vijayanagar",
  label: "Our centre",
  address:
    "3rd Floor, No. 02, CHBCS 1st Layout, 5th Main, Vijayanagar, Bengaluru, Karnataka",
  // Google Maps directions to the academy's own listing. (aaaedu.in links a
  // goo.gl short link, which no longer opens since Google retired goo.gl.)
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Arjunaa+Academy+for+Achievers%2C+Vijayanagar%2C+Bengaluru",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Arjunaa+Academy+for+Achievers,+CHBCS+1st+Layout,+Vijayanagar,+Bengaluru&z=15&output=embed",
  // No visiting hours: aaaedu.in doesn't publish any, so none are shown until
  // the academy confirms them.
  areasServed: [
    "Rajajinagar",
    "Magadi Road",
    "Nagarbhavi",
    "Basaveshwaranagar",
    "Chandra Layout",
    "Attiguppe",
    "Moodalapalya",
    "Hosakerehalli",
    "Srinagar",
    "Hanumanthanagar",
  ],
  // AI-generated placeholder — its sign reads "Arjuna Academy", so it must not
  // be shown until a real photo of the centre replaces it (docs/assets-needed.md).
  image: "/images/landing/b-band-3.jpg",
};

export const about = {
  title: "Best coaching centre for KCET, NEET, JEE Main & JEE Advanced",
  paragraphs: [
    "Arjunaa Academy for Achievers (AAA) is a premier coaching institute in Bangalore for KCET, NEET-UG and JEE (Main + Advanced), for Class 11 and 12. Since 2012 we've focused on building a strong foundation of knowledge and concepts, and a real appetite for research.",
    "Every student gets personalised training, with 24/7 support online and offline. We treat students like professionals and care for them like parents — keeping education exciting, relevant and stress-free.",
    "We provide value-based education, stressing character and values alongside core competency, so our students grow into responsible, character-driven citizens.",
  ],
  image: "/images/landing/about/classroom.jpg",
  enrolled: "3k+",
  // The first paragraph, trimmed to the lead the intro section shows; the
  // programme list it used to carry is `programmes`, and the other two
  // paragraphs are condensed into `highlights`.
  lead: "Since 2012 we've built a strong foundation of knowledge and concepts — and a real appetite for research — in students across Bengaluru.",
  programmes: [
    "KCET",
    "NEET-UG",
    "JEE Main",
    "JEE Advanced",
  ],
  highlights: [
    {
      title: "Personal, not mass-produced",
      body: "Personalised training with 24/7 support, online and offline. We treat students like professionals and care for them like parents.",
    },
    {
      title: "Character alongside competence",
      body: "Value-based education, so students grow into responsible, character-driven citizens — without the stress.",
    },
  ],
};

/** The core values, in the brochure's words (AAA 26 Brochure) — the Mission &
 *  Vision page. */
export const coreValues = [
  "Dedication to the success of our students which will cascade automatically on AAA and you as an individual.",
  "Creative/Innovative teaching methods and modules which differentiates us from rest of the world.",
  "Trust, Mutual Respect, Commitment and Personal Responsibility (Ownership) in everything we do.",
];

// `href` points at the /landing/courses page for the same programme, so the
// footer and the programme cards can send visitors to the detail page instead
// of dumping every one of them on the same on-page anchor.
/** The exams the packages prepare for — the only ones the site lists. */
export const exams = ["KCET", "NEET", "JEE Main", "JEE Advanced"];

// Openings of the aaaedu.in testimonials, for the carousel. The full text
// lives in about-data.ts (testimonialsFull).
/** "Who we are?", in the brochure's words (AAA 26 Brochure). */
export const whoWeAre =
  "Arjunaa Academy for Achievers (AAA), is a leading and Google's Highest Rated Institute for IIT, NEET, Olympiads, NTSE and Foundation. AAA was started by Mr. Hareesh P. K., B.Tech (E&C) & M.Tech (VLSI) alumnus of NITK Surathkal with the vision of transforming the nation by transforming education & the students who are the future torch bearers.";

export const mission =
  "To provide cost-effective world class education in order to create professionally superior manpower and to instil within students deep foundational values of good character to bring out Principle-Centered Leaders in the society.";

export const vision =
  "To become leaders in the field of education and create a brand of Principle Centered Teachers, Leaders and Entrepreneurs for creating a sustainable, self-sufficient community.";

// "Why choose us", as listed on aaaedu.in.
export const whyChoose = [
  { title: "Quality education", body: "1,700+ hours of training and high-quality, updated study material." },
  { title: "Small batches of 30", body: "Personal attention guaranteed — every teacher knows every student." },
  { title: "Faculty from IITs, NITs & IISc", body: "Passionate teachers, including IISc research scientists." },
  { title: "Best results", body: "Ranks in JEE, NEET and KCET every year — from our own classrooms." },
  { title: "17+ tests a year", body: "JEE and NEET pattern tests with detailed solutions." },
  { title: "24/7 doubt support", body: "Doubts cleared both online and offline, whenever you're stuck." },
  { title: "Individual mentorship", body: "A mentor for every student, with value education built in." },
  { title: "30% lower fees", body: "The most reasonable fee among Bengaluru's serious institutes." },
];

/** ASST, the academy's scholarship-cum-admission test, in the academy's wording (Oct 2026). */
export const asst = {
  name: "ASST",
  heading: "ASST: Secure Your Admission Scholarship",
  intro: [
    "Give your child’s academic journey the ultimate launchpad. The Arjunaa Scholastic & Scholarship Test (ASST) is our premier talent search and scholarship-cum-admission test, designed to bring prosperity, development, and accelerated career growth to every young achiever.",
    "Parents can register their child online and visit our centre for the assessment.",
  ],
  details: [
    { label: "Duration", value: "1.5 Hours (90 Minutes)" },
    { label: "Format", value: "Objective Type (MCQs)" },
    { label: "Venue", value: "At the Arjunaa Academy Centre" },
  ],
  streams: [
    { name: "JEE Track", note: "For Engineering Aspirants", subjects: ["Mental Ability", "Mathematics", "Physics", "Chemistry"] },
    { name: "NEET Track", note: "For Medical Aspirants", subjects: ["Mental Ability", "Biology", "Physics", "Chemistry"] },
  ],
  benefits: [
    { title: "Admission Scholarships", text: "Earn substantial fee waivers on your admission based on performance scores." },
  ],
};

// The contact form's "Select Your Request*" options, word for word as
// aaaedu.in/contact-us lists them. Its "Course*" options are the packages
// (courses-data.ts), not aaaedu.in's older course list.
export const enquiryRequests = ["Call Back", "Visit Our Center", "Connect Online"] as const;


// A typical week for a classroom student — shows where the app fits.
export const academyWeek = [
  { where: "centre", title: "Concept classes", body: "Small-batch lectures at Vijayanagar, taught by IIT/NIT/IISc faculty." },
  { where: "app", title: "Practice & notes", body: "Class notes, recorded lectures and chapter practice in the AAA app." },
  { where: "centre", title: "Doubt desk", body: "Stay back after class and clear doubts face to face." },
  { where: "app", title: "Weekly test", body: "Exam-pattern test in the app; results and solutions instantly." },
  { where: "centre", title: "Mentor review", body: "Your mentor walks through the test report with you — and your parents." },
] as const;

export type FaqTopic = "visits" | "courses" | "online" | "fees" | "app";

export const faqTopics: { id: FaqTopic; label: string }[] = [
  { id: "visits", label: "Visits & admission" },
  { id: "courses", label: "Courses & batches" },
  { id: "online", label: "Online courses" },
  { id: "fees", label: "Fees & scholarships" },
  { id: "app", label: "AAA app" },
];

/** `link` is the natural next step after reading the answer, when there is one.
 *  Hrefs are routes or external URLs, never on-page anchors, so a link works
 *  wherever the list is rendered. */
export const faqs: {
  q: string;
  /** Shown in bold above the answer. */
  lead?: string;
  /** Paragraphs separated by a blank line. */
  a: string;
  /** Titled bullet lists after the answer. */
  lists?: { title: string; items: (string | { text: string; sub: string[] })[] }[];
  topic: FaqTopic;
  link?: { href: string; label: string; external?: boolean };
}[] = [
  {
    q: "Where is the centre?",
    a: "Our centre is in Vijayanagar, Bengaluru — 3rd Floor, CHBCS 1st Layout, 5th Main. Book a visit or call 76766 42258 so a mentor is free to meet you.",
    topic: "visits",
    link: { href: branch.mapsUrl, label: "Get directions", external: true },
  },

  {
    q: "Where are the classes held?",
    a: `At our Vijayanagar centre in Bengaluru — ${branch.address}. Students who live further away can join the same faculty's live online classes.`,
    topic: "visits",
  },
  {
    q: "Which exams do you prepare for?",
    a: "KCET, NEET, JEE Main and JEE Advanced, for Class 11 and Class 12. In the classroom at Vijayanagar and online: Siddhartha, Saadhaka, Shushrutha and Shreshta — plus Siddhartha Fasttrack online for Class 12.",
    topic: "courses",
    link: { href: "/landing/courses/class-11", label: "See classroom courses" },
  },
  {
    q: "What is the batch size?",
    a: "A maximum of 30 students per batch, so teachers can follow each student's progress.",
    topic: "courses",
    link: { href: "/landing/courses/class-11", label: "See classroom courses" },
  },
  {
    q: "Can my child study online instead of coming to Vijayanagar?",
    a: "Yes. The same courses are taught live online by the same faculty, for Class 11 and Class 12 — KCET, NEET, JEE Main and JEE Advanced.",
    topic: "online",
    link: { href: "/landing/courses/online/class-11", label: "See online courses" },
  },
  {
    q: "Is there a free plan?",
    a: "Yes. Every online course has a free plan with limited content, basic chapter quizzes and community support. Standard and Advanced unlock the full course, and both come with a 7-day free trial.",
    topic: "online",
    link: { href: registerUrl, label: "Start free", external: true },
  },
  {
    q: "What's the difference between Standard and Advanced?",
    a: "Standard gives limited access — for example, 20 live classes and 20 of each kind of test a month. Advanced makes everything unlimited and adds advanced features like 1-on-1 doubt sessions and detailed analytics. See the comparison table for the full details.",
    topic: "online",
    link: { href: "/landing/courses/online/class-11", label: "Compare plans and prices" },
  },
  {
    q: "What if my child misses a live class?",
    a: "Every lecture is recorded, so it can be watched later in the AAA app, along with the notes and practice for that chapter.",
    topic: "online",
  },
  {
    q: "How are the fees compared to other institutes?",
    a: "Roughly 30% lower than the large coaching chains, while including more hours, more tests and personal mentoring.",
    topic: "fees",
  },
  {
    q: "What is ASST?",
    lead: asst.heading,
    a: asst.intro.join("\n\n"),
    lists: [
      { title: "Exam Details", items: asst.details.map((d) => `${d.label}: ${d.value}`) },
      {
        title: "Choose Your Stream",
        items: asst.streams.map((t) => ({
          text: `${t.name} (${t.note})`,
          sub: [`Subjects: ${t.subjects.join(" · ")}`],
        })),
      },
      { title: "Scholarship Benefits", items: asst.benefits.map((b) => `${b.title}: ${b.text}`) },
    ],
    topic: "fees",
  },
  {
    q: "Do classroom students get the AAA app?",
    a: "Yes — every enrolled student gets the AAA app, on the web and on mobile. It doesn't replace the classroom; it carries it home: class recordings and notes, weekly tests, topic-wise analysis and a mistake book to revise from.",
    topic: "app",
    link: { href: loginUrl, label: "Student login" },
  },
  {
    q: "Can parents follow progress?",
    a: "Yes — through the student's mentor at the centre. Progress is discussed with parents at the monthly parent–teacher meetings, and you can call the centre to talk to the mentor at any time.",
    topic: "visits",
  },
];

export const whatsappUrl = `https://wa.me/91${academy.whatsapp}?text=${encodeURIComponent(
  "Hi, I'd like to know more about Arjunaa Academy courses.",
)}`;
