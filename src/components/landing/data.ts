// Demo content for the landing-page variations. Academy facts come from
// aaaedu.in; everything marked DUMMY is placeholder until the real names,
// ranks and numbers are supplied.

export const academy = {
  name: "Arjunaa Academy for Achievers",
  shortName: "Arjunaa Academy",
  appName: "AAA Lakshya",
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

// Where every sign-up link goes ("Start free", "Try AAA Lakshya free",
// "Create account", the V3 goal picker): the student app's registration.
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

export const stats = [
  { value: 3000, suffix: "+", label: "Students trained" },
  { value: 40, suffix: "%", label: "Qualify JEE Main & NEET" },
  { value: 1000, suffix: "+", label: "Alumni in top-100 STEM universities" },
  { value: 100, suffix: "%", label: "Board exam pass rate" },
];

export const classroomHighlights = [
  {
    title: "Batches of 30, max",
    body: "Small enough that every teacher knows every student by name and by weak topic.",
  },
  {
    title: "1,700+ training hours",
    body: "A full, structured programme — concept classes, problem sessions and revision cycles.",
  },
  {
    title: "Faculty from IITs, NITs & IISc",
    body: "Taught by alumni of India's top institutes and NEET toppers.",
  },
  {
    title: "17+ tests a year",
    body: "Exam-pattern tests with detailed solutions and a one-on-one review.",
  },
  {
    title: "Doubts cleared 24/7",
    body: "Ask in class, at the doubt desk, or in the app — whenever you're stuck.",
  },
  {
    title: "~30% lower fees",
    body: "More hours, more tests and personal mentoring for less than the big chains.",
  },
];

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

export const values = [
  {
    title: "Commitment",
    body: "Your child's dream becomes our commitment.",
  },
  {
    title: "Culture",
    body: "Treating students like professionals & caring for them like parents.",
  },
  {
    title: "Catalyze",
    body: "Tell them, they forget. Show them, they remember and understand.",
  },
];

// `href` points at the /landing/courses page for the same programme, so the
// footer and the programme cards can send visitors to the detail page instead
// of dumping every one of them on the same on-page anchor.
/** The exams the packages prepare for — the only ones the site lists. */
export const exams = ["KCET", "NEET", "JEE Main", "JEE Advanced"];

export const appFeatures = [
  {
    title: "Live & recorded classes",
    body: "Missed a class at the centre? Watch it in the app — same teacher, same notes.",
  },
  {
    title: "Tests that feel like the real exam",
    body: "Full-screen, timed, exam-pattern tests with instant results and solutions.",
  },
  {
    title: "Topic-wise mastery",
    body: "See exactly which topics are strong and which need work — no guessing.",
  },
  {
    title: "Mistake book & revision",
    body: "Every wrong answer is saved so you can revise it before it costs marks.",
  },
];

// DUMMY — replace with real faculty.
export const faculty = [
  { name: "Dr. S. Raghavendra", subject: "Physics", from: "IISc Bengaluru", years: 14 },
  { name: "Prof. M. Kavitha", subject: "Chemistry", from: "NIT Karnataka", years: 11 },
  { name: "Mr. Arvind Rao", subject: "Mathematics", from: "IIT Madras", years: 12 },
  { name: "Dr. Priya Shenoy", subject: "Biology", from: "NEET Top-500, MBBS", years: 9 },
];

// Openings of the aaaedu.in testimonials, for the carousel. The full text
// lives in about-data.ts (testimonialsFull).
export const mission =
  "To provide cost-effective world class education in order to create professionally superior manpower and to instil within students deep foundational values of good character to bring out Principle-Centred Leaders in the society.";

export const vision =
  "To become leaders in the field of education and create a Brand of Principle centred Teachers, leaders and entrepreneurs for creating a sustainable, self-sufficient community.";

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

export const vrddhi = {
  name: "Vrddhi",
  meaning: "Prosperity, development, improvement in the career of a child",
  since: 2012,
  format: [
    { label: "Questions", value: "35" },
    { label: "Duration", value: "1 hour" },
    { label: "Mode", value: "Objective" },
  ],
  subjects: ["Mental Ability", "Mathematics", "Physics", "Chemistry", "Biology"],
  rewards: [
    "Scholarships on admission",
    "Best-school trophies by stream and zone",
    "Medals for school toppers, trophies for zonal toppers",
    "Certificates for every participant",
  ],
};

// The contact form's "Select Your Request*" options, word for word as
// aaaedu.in/contact-us lists them. Its "Course*" options are the packages
// (courses-data.ts), not aaaedu.in's older course list.
export const enquiryRequests = ["Call Back", "Home Visit", "Visit Our Center", "Connect Online"] as const;


// A typical week for a classroom student — shows where the app fits.
export const academyWeek = [
  { where: "centre", title: "Concept classes", body: "Small-batch lectures at Vijayanagar, taught by IIT/NIT/IISc faculty." },
  { where: "app", title: "Practice & notes", body: "Class notes, recorded lectures and chapter practice in AAA Lakshya." },
  { where: "centre", title: "Doubt desk", body: "Stay back after class and clear doubts face to face." },
  { where: "app", title: "Fortnightly test", body: "Exam-pattern test in the app; results and solutions instantly." },
  { where: "centre", title: "Mentor review", body: "Your mentor walks through the test report with you — and your parents." },
] as const;

export const journey = [
  { step: "Counselling visit", body: "Meet a mentor at the centre and pick the right programme." },
  { step: "Diagnostic test", body: "A short test tells us where you stand, topic by topic." },
  { step: "Classes + app", body: "Learn in a small batch; practise and revise in AAA Lakshya." },
  { step: "Test & review", body: "Fortnightly tests, each followed by a one-on-one review." },
  { step: "Exam day", body: "Walk in having already sat the exam dozens of times." },
];

export type FaqTopic = "visits" | "courses" | "fees" | "app";

export const faqTopics: { id: FaqTopic; label: string }[] = [
  { id: "visits", label: "Visits & admission" },
  { id: "courses", label: "Courses & batches" },
  { id: "fees", label: "Fees & scholarships" },
  { id: "app", label: "AAA Lakshya app" },
];

/** `link` is the natural next step after reading the answer, when there is one.
 *  Hrefs are routes or external URLs, never on-page anchors, because V1, V2 and
 *  V3 all render this list and don't share the same sections. */
export const faqs: {
  q: string;
  a: string;
  topic: FaqTopic;
  link?: { href: string; label: string; external?: boolean };
}[] = [
  {
    q: "Where is the centre?",
    a: "Our centre is in Vijayanagar, Bengaluru — 3rd Floor, CHBCS 1st Layout, 5th Main. Book a visit or call 76766 42258 so a mentor is free to meet you. We can also come to you — ask for a home visit.",
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
    a: "KCET, NEET, JEE Main and JEE Advanced, for Class 11 and Class 12 — one exam at a time, or several together in the Sakala, Sarvam and Sarvotthama courses. Each runs in the classroom at Vijayanagar and online.",
    topic: "courses",
    link: { href: "/landing/courses", label: "See all courses" },
  },
  {
    q: "What is the batch size?",
    a: "A maximum of 30 students per batch, so teachers can follow each student's progress.",
    topic: "courses",
    link: { href: "/landing/courses", label: "See classroom courses" },
  },
  {
    q: "How are the fees compared to other institutes?",
    a: "Roughly 30% lower than the large coaching chains, while including more hours, more tests and personal mentoring.",
    topic: "fees",
  },
  {
    q: "What is Vrddhi?",
    a: "Vrddhi is our inter-school talent search and scholarship-cum-admission test, held every year since 2012. It's a 1-hour, 35-question objective paper covering Mental Ability, Maths, Physics, Chemistry and Biology.",
    topic: "fees",
  },
  {
    q: "Do classroom students get the AAA Lakshya app?",
    a: "Yes — every enrolled student gets AAA Lakshya on the web and on the mobile app. It doesn't replace the classroom; it carries it home: class recordings and notes, fortnightly tests, topic-wise analysis and a mistake book to revise from.",
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
