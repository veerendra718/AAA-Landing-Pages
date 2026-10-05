// Contact details for the Vijayanagar campus, the one campus this build
// presents. The address, email and phones are aaaedu.in's own (all three sit in
// its footer), and the four ways to enquire are the "Select Your Request"
// options on its Contact Us form.
//
// aaaedu.in's Contact Us is a single link with no children, and this page
// matches it: address, phones, email, map and the enquiry form. The material the
// academy publishes elsewhere reads as programmes and admission rather than as
// contact details, so in this build it sits under /landing/courses — the day
// scholar & residential programme and the batches on the admissions page.

import { academy } from "./data";

export const contactHead = {
  // The address itself is `branch.address` in data.ts — one copy, so this page
  // can't drift from the rest of the site (it once read "3rd Floor … 1st Floor").
  email: academy.email,
  phones: academy.phones,
  // The site asks enquirers for a convenient date & time, so scheduling is
  // handled by the team rather than a self-serve calendar.
  note: "Tell us a date and time that suits you and a mentor will call you back.",
};

/**
 * Details on the site are the Vijayanagar campus's, so a family outside the
 * areas it is convenient for is pointed at the academy's live online classes
 * rather than at a campus this build does not describe.
 */
export const campusNote =
  "These details are for the Vijayanagar campus. If you are further out, the same courses run as live online classes — ask for a video counselling session and the team will arrange it.";

/** How a conversation can start — the academy's own four options. */
export const enquiryWays = [
  { title: "Call back", body: "Leave a number and a convenient time; a mentor calls you." },
  { title: "Home visit", body: "A counsellor comes to your home to explain the programme." },
  { title: "Visit our centre", body: "Walk through Vijayanagar, meet faculty, sit in on a class." },
  { title: "Connect online", body: "A video call with the admissions team, wherever you are." },
];
