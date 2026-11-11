// Imports the Knowledge Desk blog from the old site (aaaedu.in) into this repo.
//
// The old site's blog pages are filled from a public JSON API. This pulls every
// post from it once and writes:
//   src/content/blogs/index.json         the list page's data: one small entry per post
//   src/content/blogs/posts/<slug>.json  one file per article, loaded only when opened
//   public/images/landing/blogs/         the cover images and the images inside articles
//
// The article HTML was pasted into the old CMS from a word processor and carries
// its own fonts, colours and sizes as inline styles. Those are stripped so the
// site's own article styling applies; the text itself is not changed. Links back
// to aaaedu.in are pointed at the matching page here.
//
// Re-run whenever the old site gets new posts: node scripts/import-blogs.mjs
// Images already downloaded are not fetched again.
import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sanitizeHtml from "sanitize-html";

const API = "https://server-api.aaaedu.in/api/v1/blog?total=500&sort=-published_on&page=1";
const root = process.cwd();
const contentDir = join(root, "src/content/blogs");
const postsDir = join(contentDir, "posts");
const imageDir = join(root, "public/images/landing/blogs");
const inlineDir = join(imageDir, "inline");
const imageUrl = "/images/landing/blogs";

const BLOG = "/landing/knowledge-desk";

// ── fetch ────────────────────────────────────────────────────────────────────

const res = await fetch(API, { headers: { Accept: "application/json" } });
if (!res.ok) throw new Error(`Blog API answered ${res.status}`);
const { data, meta } = await res.json();
if (data.length !== meta.total) {
  throw new Error(`Got ${data.length} of ${meta.total} posts — raise "total" in the API URL`);
}
const posts = data.filter((p) => p.is_active);
const slugs = new Set(posts.map((p) => p.slug));

// ── helpers ──────────────────────────────────────────────────────────────────

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** The API's "2026, 15 Mar" → "2026-03-15". */
function isoDate(published) {
  const m = published.match(/^(\d{4}),\s*(\d{1,2})\s+([A-Za-z]{3})/);
  if (!m) throw new Error(`Unreadable date: ${published}`);
  const month = MONTHS.indexOf(m[3]) + 1;
  if (!month) throw new Error(`Unreadable month: ${published}`);
  return `${m[1]}-${String(month).padStart(2, "0")}-${m[2].padStart(2, "0")}`;
}

const decode = (s) =>
  s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&rsquo;|&lsquo;/g, "'")
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

/** Whitespace runs collapse, as they do when the old site renders them. */
const clean = (s) => decode(s ?? "").replace(/\s+/g, " ").trim();

/** The opening of the article, cut at a word. The card clamps it to three lines. */
function excerpt(text, max = 220) {
  const t = clean(text);
  if (t.length <= max) return t;
  return t.slice(0, t.lastIndexOf(" ", max)).replace(/[\s,;:–—-]+$/, "") + "…";
}

async function download(url, file) {
  if (existsSync(file)) return;
  const r = await fetch(url);
  if (!r.ok) throw new Error(`Image ${url} answered ${r.status}`);
  writeFileSync(file, Buffer.from(await r.arrayBuffer()));
}

// Old blog links sometimes use a slug the post had before it was renamed —
// "5-handy-tips-…" for today's "handy-tips-…". Numbers and number words are
// dropped from both sides to match them up.
const loose = (slug) =>
  slug
    .split("-")
    .filter((w) => !/^\d+$/.test(w) && !["one", "two", "three", "five", "ten", "amp"].includes(w))
    .map((w) => (w === "your" ? "youre" : w))
    .join("-");
const byLoose = new Map(posts.map((p) => [loose(p.slug), p.slug]));

// aaaedu.in pages that have a counterpart here.
const pageMap = {
  "/": "/landing/v2",
  "/course/iit-jee-main-advanced-coaching": "/landing/courses/class-11",
  "/vijayanagar-bangalore/course/iit-jee-main-advanced-coaching": "/landing/courses/class-11",
  "/course/kcet-jee-neet-kvpy-program": "/landing/courses/class-11",
  "/course/jee-neet-kvpy-integrated-pu-cbse-colleges": "/landing/courses/class-11",
  "/vijayanagar-bangalore/course/jee-neet-kvpy-integrated-pu-cbse-colleges": "/landing/courses/class-11",
  "/vijayanagar-bangalore/course/jee-neet-kvpy-integrated-residential-pu-cbse-colleges":
    "/landing/courses/class-11",
  "/2-year-integrated-day-scholar-and-residential-program": "/landing/courses/class-11",
  "/course/class-10-foundation-program": "/landing/courses/class-9-10",
  "/course/aaa-digital-live-classes": "/landing/courses/online/class-11",
  "/jee-top-achievers": "/landing/achievers",
};

const unmatched = [];

/** Where an article link should go here, or null to keep only its text. */
function rewriteHref(href, slug) {
  const h = decode(href).trim();
  const m = h.match(/^https?:\/\/(?:www\.)?aaaedu\.in(\/[^?#]*)?/i);
  if (!m) return h; // another site
  const path = (m[1] || "/").replace(/\/+$/, "") || "/";
  const blog = path.match(/^\/knowledge-desk\/([^/]+)$/);
  if (blog) {
    const target = slugs.has(blog[1]) ? blog[1] : byLoose.get(loose(blog[1]));
    if (target) return `${BLOG}/${target}`;
    unmatched.push(`${slug}: ${h} → the blog list`);
    return BLOG;
  }
  if (pageMap[path]) return pageMap[path];
  unmatched.push(`${slug}: ${h} → link removed, text kept`);
  return null;
}

/** Cleans one article's HTML; collects its inline images to download. */
function cleanBody(html, slug, images) {
  let out = sanitizeHtml(html, {
    allowedTags: [
      "p", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "li", "strong", "em", "a", "br",
      "blockquote", "table", "thead", "tbody", "tr", "th", "td", "figure", "figcaption", "img",
      "sub", "sup",
    ],
    allowedAttributes: {
      a: ["href", "target", "rel"],
      img: ["src", "alt"],
      td: ["colspan", "rowspan"],
      th: ["colspan", "rowspan"],
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    transformTags: {
      // The page title is the only h1.
      h1: "h2",
      b: "strong",
      i: "em",
      a: (tagName, attribs) => {
        const href = attribs.href ? rewriteHref(attribs.href, slug) : null;
        // A link with nowhere to go here keeps its text.
        if (!href) return { tagName: "span", attribs: {} };
        const external = /^https?:\/\//.test(href);
        return {
          tagName: "a",
          attribs: external ? { href, target: "_blank", rel: "noopener noreferrer" } : { href },
        };
      },
      img: (tagName, attribs) => {
        const src = attribs.src ?? "";
        const name = src.split("/").pop();
        images.push({ url: src, file: name });
        // The CMS filled empty alt text with the file name.
        const alt = attribs.alt && attribs.alt !== name ? attribs.alt : "";
        return { tagName: "img", attribs: { src: `${imageUrl}/inline/${name}`, alt } };
      },
    },
  });

  out = out
    .replace(/<span>([\s\S]*?)<\/span>/g, "$1")
    // Empty paragraphs and headings the word processor left as spacers.
    .replace(/<(p|h[2-6]|strong|em)>(?:\s|&nbsp;|<br \/>)*<\/\1>/g, "")
    .replace(/<(p|h[2-6]|strong|em)>(?:\s|&nbsp;|<br \/>)*<\/\1>/g, "")
    // Wide tables scroll sideways on phones instead of widening the page.
    .replace(/<table>/g, '<div class="table-wrap"><table>')
    .replace(/<\/table>/g, "</table></div>")
    .trim();
  return out;
}

// ── write ────────────────────────────────────────────────────────────────────

rmSync(postsDir, { recursive: true, force: true });
mkdirSync(postsDir, { recursive: true });
mkdirSync(inlineDir, { recursive: true });

const index = [];

for (const p of posts) {
  const images = [];
  const html = cleanBody(p.description, p.slug, images);
  const words = clean(p.description_unfiltered).split(" ").length;

  const ext = p.image.split(".").pop().toLowerCase();
  const cover = `${p.slug}.${ext}`;
  await download(p.image, join(imageDir, cover));
  for (const img of images) await download(img.url, join(inlineDir, img.file));

  const entry = {
    slug: p.slug,
    title: clean(p.heading || p.name),
    date: isoDate(p.published),
    excerpt: excerpt(p.description_unfiltered),
    image: `${imageUrl}/${cover}`,
    imageAlt: clean(p.image_alt) || clean(p.heading || p.name),
    readMinutes: Math.max(1, Math.round(words / 200)),
  };
  index.push(entry);

  writeFileSync(
    join(postsDir, `${p.slug}.json`),
    JSON.stringify(
      {
        ...entry,
        author: clean(p.author_name),
        metaTitle: clean(p.meta_title) || entry.title,
        metaDescription: clean(p.meta_description) || entry.excerpt,
        html,
      },
      null,
      2,
    ) + "\n",
  );
}

// Newest first. The API already sorts this way; posts from the same day keep
// its order, which is the order the old site lists them in.
index.sort((a, b) => b.date.localeCompare(a.date));
writeFileSync(
  join(contentDir, "index.json"),
  JSON.stringify(index, null, 2) + "\n",
);

console.log(`Imported ${index.length} posts.`);
if (unmatched.length) {
  console.log(`\nLinks to aaaedu.in with no page here (${unmatched.length}):`);
  for (const u of unmatched) console.log("  - " + u);
}
