// The Knowledge Desk blog, imported from aaaedu.in by scripts/import-blogs.mjs.
//
// Every page reads the blog through this file and nothing else. The posts are
// files in src/content/blogs today; if the blog later moves into the AAA
// backend (with posts written from the admin panel), only these functions
// change — the pages stay as they are.
import list from "@/content/blogs/index.json";

export type BlogSummary = {
  slug: string;
  title: string;
  /** "2026-03-15" */
  date: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  /** The cover's own size in pixels; covers come in many shapes. */
  imageWidth: number;
  imageHeight: number;
  readMinutes: number;
};

export type BlogPost = BlogSummary & {
  author: string;
  metaTitle: string;
  metaDescription: string;
  /** Cleaned article HTML (see scripts/import-blogs.mjs). */
  html: string;
};

/** The blog's address — the old site's /knowledge-desk, under /landing. */
export const blogHref = "/landing/knowledge-desk";
export const postHref = (slug: string) => `${blogHref}/${slug}`;
/** Page 1 is the bare address; the rest keep the old site's ?page=N. */
export const blogPageHref = (page: number) => (page <= 1 ? blogHref : `${blogHref}?page=${page}`);

/** As many as the old site showed on a page. */
export const postsPerPage = 12;

/** Every post, newest first. */
export const blogPosts: BlogSummary[] = list;

export const blogPageCount = Math.max(1, Math.ceil(blogPosts.length / postsPerPage));

/** Reads a ?page= value; anything unreadable or out of range is page 1. */
export function toBlogPage(value: string | null | undefined): number {
  const n = Number(value);
  return Number.isInteger(n) && n >= 1 && n <= blogPageCount ? n : 1;
}

export function blogPage(page: number): BlogSummary[] {
  const start = (page - 1) * postsPerPage;
  return blogPosts.slice(start, start + postsPerPage);
}

export function blogSummary(slug: string): BlogSummary | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

/** The full article. Each one is its own file, fetched only when opened. */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  if (!blogSummary(slug)) return null;
  const mod: { default: BlogPost } = await import(`../../content/blogs/posts/${slug}.json`);
  return mod.default;
}

/** The posts listed under an article: the ones published just before it. */
export function morePosts(slug: string, count = 3): BlogSummary[] {
  const i = blogPosts.findIndex((p) => p.slug === slug);
  const rest = [...blogPosts.slice(i + 1), ...blogPosts.slice(0, Math.max(i, 0))];
  return rest.slice(0, count);
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2026-03-15" → "15 Mar 2026", as the old site wrote dates. Parsed by hand so
 *  the server and the browser can never disagree over a time zone. */
export function formatBlogDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${String(d).padStart(2, "0")} ${months[m - 1]} ${y}`;
}
