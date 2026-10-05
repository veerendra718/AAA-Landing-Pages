// One-off generator: turns the achiever JSON pulled from
// server-api.aaaedu.in/api/v1/achiever/student into a static TS data module,
// downloading each student's photo into public/images/landing/achievers so the
// site doesn't hotlink the source server.
//
// Usage: node generate-achievers.mjs <in.json> <projectRoot>

import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const [, , inFile, root] = process.argv;
if (!inFile || !root) {
  console.error("usage: node generate-achievers.mjs <in.json> <projectRoot>");
  process.exit(1);
}

const raw = JSON.parse((await readFileUtf8(inFile)).replace(/^\uFEFF/, ""));
const list = Array.isArray(raw) ? raw : raw.data;

const imgDir = join(root, "public", "images", "landing", "achievers");
await mkdir(imgDir, { recursive: true });

const cats = new Map();
for (const s of list) {
  const c = s.categories?.[0];
  if (!c) continue;
  if (!cats.has(c.slug)) cats.set(c.slug, { name: c.name, heading: c.heading, blurb: c.description, students: [] });
  cats.get(c.slug).students.push(s);
}

/** Download one image; returns the local file name, or null if it failed. */
async function grab(url, dir) {
  const base = decodeURIComponent(new URL(url).pathname.split("/").pop());
  try {
    const res = await fetch(url);
    if (!res.ok) return { base, ok: false };
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 64) return { base, ok: false };
    await writeFile(join(dir, base), buf);
    return { base, ok: true };
  } catch {
    return { base, ok: false };
  }
}

function q(s) {
  return String(s ?? "").replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

/** The API ships some values HTML-entity encoded (e.g. "NITK, E &amp; C"),
 *  which React would then escape again and show literally on the cards. */
function decode(s) {
  return String(s ?? "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&amp;/g, "&");
}

/** Single-line the site's multi-sentence category descriptions. */
function oneLine(s) {
  return String(s ?? "")
    .replace(/\s+/g, " ")
    .replace(/^“|”$/g, "")
    .trim();
}

const groups = [];
let downloaded = 0;
let failed = 0;

for (const [slug, g] of cats) {
  const students = [];
  for (const s of g.students) {
    const got = await grab(s.image, imgDir);
    if (!got.ok) {
      failed += 1;
      continue;
    }
    downloaded += 1;
    students.push({
      name: decode(s.name).trim(),
      rank: decode(s.rank).trim(),
      college: decode(s.college).trim(),
      image: `/images/landing/achievers/${got.base}`,
    });
  }
  groups.push({ slug, ...g, clean: students });
}

const body = groups
  .map((g) => {
    const rows = g.clean
      .map(
        (s) =>
          `    { name: "${q(s.name)}", rank: "${q(s.rank)}", college: "${q(s.college)}", image: "${q(s.image)}" },`,
      )
      .join("\n");
    return `  {
    slug: "${q(g.slug)}",
    name: "${q(g.name)}",
    heading: "${q(oneLine(decode(g.heading)))}",
    quote: "${q(oneLine(decode(g.blurb)))}",
    students: [
${rows}
    ],
  },`;
  })
  .join("\n");

const out = `// The achievers shown on aaaedu.in, read from its public achiever API and
// checked in as static data. Photos were downloaded into
// /images/landing/achievers. Regenerate with scripts/generate-achievers.mjs.

export type Achiever = {
  name: string;
  /** Rank / AIR / percentile, exactly as the academy publishes it. */
  rank: string;
  /** College or remark, empty when the site leaves it blank. */
  college: string;
  image: string;
};

export type AchieverGroup = {
  slug: string;
  name: string;
  heading: string;
  quote: string;
  students: Achiever[];
};

export const achieverGroups = [
${body}
];

export type AchieverSlug = (typeof achieverGroups)[number]["slug"];

export function groupBySlug(slug: string) {
  return achieverGroups.find((g) => g.slug === slug);
}

export const achieverCount = achieverGroups.reduce((n, g) => n + g.students.length, 0);
`;

await writeFile(join(root, "src", "components", "landing", "achievers-data.ts"), out, "utf8");
console.log(`groups=${groups.length} students=${downloaded} failed=${failed}`);

async function readFileUtf8(p) {
  const { readFile } = await import("node:fs/promises");
  return readFile(p, "utf8");
}
