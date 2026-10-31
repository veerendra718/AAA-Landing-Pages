// Content used only by the V2 landing page (classroom + app).

import { achieverSections } from "./achievers-display";

export type HighlightResult = {
  name: string;
  result: string;
  college?: string;
  image: string;
};

/** How each exam is named in front of a result ("KCET Rank 21"). */
const examLabel: Record<string, string> = {
  "jee-advanced": "JEE Advanced",
  "jee-mains": "JEE Main",
  neet: "NEET",
  "k-cet": "KCET",
};

const perExam = 3;

/**
 * The results ticker (and the hero's faces): the top results from the
 * brochure lists, taken round-robin — every exam's best, then every exam's
 * next — so the strip runs from the toppers down. The lists are already
 * sorted best first. A student shows once, under their first (best-placed)
 * result; their other exams move on to the next student.
 */
function pickHighlights(): HighlightResult[] {
  const seen = new Set<string>();
  const next = achieverSections.map(() => 0);
  const picked: HighlightResult[] = [];
  for (let round = 0; round < perExam; round++) {
    achieverSections.forEach((g, gi) => {
      let s = g.students[next[gi]];
      while (s && seen.has(s.name)) s = g.students[++next[gi]];
      if (!s) return;
      next[gi]++;
      seen.add(s.name);
      picked.push({ name: s.name, result: `${examLabel[g.slug] ?? g.name} ${s.rank}`, college: s.college, image: s.image });
    });
  }
  return picked;
}

export const highlightResults = pickHighlights();

/** Colleges our alumni went on to, from the same list — for the hero's proof line. */
export const alumniColleges = ["IIT Bombay", "IIT Kanpur", "IIT Kharagpur", "NITK", "BITS", "IISER"];

/** The headline figures aaaedu.in publishes, worded as it words them. Figures
 *  under 50% are left out at the client's request. */
export const headlineStats = [
  { value: 3000, suffix: "+", label: "Students enrolled" },
  { value: 1000, suffix: "+", label: "Alumni at top-100 STEM universities" },
  { value: 100, suffix: "%", label: "Board exam pass", note: "60% with distinction" },
];
