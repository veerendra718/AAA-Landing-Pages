// Contact details for the Vijayanagar campus, the one campus this build
// presents. The address, email and phones are aaaedu.in's own (all three sit in
// its footer), and the four ways to enquire are the "Select Your Request"
// options on its Contact Us form.

import { academy } from "./data";

export const contactHead = {
  // The address itself is `branch.address` in data.ts — one copy, so this page
  // can't drift from the rest of the site (it once read "3rd Floor … 1st Floor").
  email: academy.email,
  phones: academy.phones,
};

/**
 * Details on the site are the Vijayanagar campus's, so a family outside the
 * areas it is convenient for is pointed at the academy's live online classes
 * rather than at a campus this build does not describe.
 */
export const campusNote =
  "These details are for the Vijayanagar campus. If you are further out, the same courses run as live online classes — ask for a video counselling session and the team will arrange it.";
