// Content used only by the V2 landing page (classroom + app). Every result
// below is a real entry from achievers-data.ts (aaaedu.in's achiever list),
// quoted with the exam it was published under.

export type HighlightResult = {
  name: string;
  result: string;
  college?: string;
  image: string;
};

export const highlightResults: HighlightResult[] = [
  { name: "Lakshmi Pooshan", result: "JEE Main 99.38%ile", college: "IIT Bombay", image: "/images/landing/achievers/pMNsapGX4PVyPZOePJ84GvIHQdljYtNALXHte10D.jpg" },
  { name: "Mithil G", result: "JEE Main 99.06%ile", college: "IIT Kanpur", image: "/images/landing/achievers/DHEsCkhXKLMPqT7RkPK7aGpI8Ry2GrktYMOjr7S9.jpg" },
  { name: "Nila Subramani", result: "JEE Main AIR 81", college: "CEPT", image: "/images/landing/achievers/2AiKGLrTfpfXwou1VDCs019EP4PcVHftLMr22KhB.png" },
  { name: "Prajwal Y. R.", result: "KCET Rank 57", college: "NITK", image: "/images/landing/achievers/szdnr8YYAJWl0hO9aqA0wP7qfAokBtwJVZJu137w.png" },
  { name: "Navaneeth M", result: "JEE Main AIR 945", college: "NIT Calicut", image: "/images/landing/achievers/77fZ6dKD9fAAlAZDjtVvwso6jvZ4onVknqntD8tM.webp" },
  { name: "Deepshika", result: "JEE Advanced AIR 3084", college: "IISER Mohali", image: "/images/landing/achievers/ZxhrPYuFGUZvd73VSRl8dAduL2YywOjBh2tSjYcA.webp" },
  { name: "Abhinav", result: "JEE Advanced AIR 7124", college: "IIT Kharagpur", image: "/images/landing/achievers/tuyWSS6UazynEaJswWXwLYA8JmkCyDjPqnRL93m1.jpg" },
  { name: "Praharaj Ipsita", result: "JEE Advanced AIR 7160", college: "IIT Kharagpur", image: "/images/landing/achievers/dcl2sK4aVXMEtqX6C8R397fptEESeZhtGLGzatAz.jpg" },
  { name: "Sreesha Rao", result: "JEE Main 98.87%ile", college: "BITS Goa", image: "/images/landing/achievers/2JeXT04V3qM9fCEdk8P2il52OrJhtX7BMGwNlpru.jpg" },
  { name: "Nandish Pai", result: "JEE Advanced AIR 8689", college: "IIT Bhubaneswar", image: "/images/landing/achievers/yPvmLvPm9wy3Z46yjuBSHgZMVMPnh5p4NeV0PiVQ.png" },
];

/** Colleges our alumni went on to, from the same list — for the hero's proof line. */
export const alumniColleges = ["IIT Bombay", "IIT Kanpur", "IIT Kharagpur", "NITK", "BITS", "IISER"];

/** The headline figures aaaedu.in publishes, worded as it words them. */
export const headlineStats = [
  { value: 3000, suffix: "+", label: "Students enrolled" },
  { value: 1000, suffix: "+", label: "Alumni at top-100 STEM universities" },
  { value: 40, suffix: "%", label: "Qualify JEE Main & NEET", note: "~3× the national average" },
  { value: 100, suffix: "%", label: "Board exam pass", note: "60% with distinction" },
];
