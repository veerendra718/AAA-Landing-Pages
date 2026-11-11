/** The SPA routes this site actually serves. Kept separate from the router
 *  table so src/shims/link.tsx can test membership without importing the
 *  pages (which import the shim back). */
export const ROUTE_PATHS = [
  // Redirects to /landing/v2, the only published variation.
  "/landing",
  "/landing/v1",
  "/landing/v3",
  "/landing/v2",
  "/landing/about",
  "/landing/about/mission-vision",
  "/landing/about/leadership",
  "/landing/about/testimonials",
  "/landing/about/careers",
  "/landing/achievers",
  "/landing/achievers/jee-mains",
  "/landing/achievers/jee-advanced",
  "/landing/achievers/neet",
  "/landing/achievers/k-cet",
  "/landing/courses",
  "/landing/courses/class-11",
  "/landing/courses/class-12",
  "/landing/courses/class-9-10",
  "/landing/courses/other",
  "/landing/courses/online",
  "/landing/courses/online/class-11",
  "/landing/courses/online/class-12",
  "/landing/knowledge-desk",
  // One page per article. A `:name` segment stands for any single segment.
  "/landing/knowledge-desk/:slug",
  "/landing/contact",
] as const;

/** Whether `path` (no query or hash) is one of the routes above. */
export function isRoutePath(path: string) {
  const parts = path.split("/");
  return ROUTE_PATHS.some((route) => {
    const pattern = route.split("/");
    return (
      pattern.length === parts.length &&
      pattern.every((seg, i) => (seg.startsWith(":") ? parts[i] !== "" : seg === parts[i]))
    );
  });
}
