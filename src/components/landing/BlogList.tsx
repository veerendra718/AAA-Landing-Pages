import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { BlogCard } from "./BlogCard";
import { blogPage, blogPageCount, blogPageHref, blogPosts } from "./blog-data";
import { PageShell } from "./PageShell";

/**
 * The Knowledge Desk list: 12 posts a page, newest first, with numbered pages
 * as on aaaedu.in. Takes the page number rather than reading the URL itself,
 * so the same component serves this SPA and a Next.js page that reads
 * `searchParams`.
 */
export function BlogList({ page }: { page: number }) {
  const posts = blogPage(page);

  return (
    <PageShell
      title="Knowledge Desk"
      lead="Latest from our blogs"
      subtitle="Explore The Latest Updates About NEET, JEE, IIT Exams And Foundation Courses."
      // People here are choosing something to read; the "Book a visit" banner
      // waits for them at the end of each article instead.
      closingCta={false}
    >
      <section className="px-4 pb-16 md:px-6 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold text-brand-text-muted">
            {blogPosts.length} articles
            {blogPageCount > 1 && ` · page ${page} of ${blogPageCount}`}
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <BlogCard key={post.slug} post={post} priority={i < 3} />
            ))}
          </div>

          {blogPageCount > 1 && <Pagination page={page} />}
        </div>
      </section>
    </PageShell>
  );
}

function Pagination({ page }: { page: number }) {
  const pages = Array.from({ length: blogPageCount }, (_, i) => i + 1);

  return (
    <nav aria-label="Blog pages" className="mt-12 flex items-center justify-between gap-3 sm:justify-center">
      <Step to={page > 1 ? page - 1 : null} label="Previous page">
        <ChevronLeft className="size-4" /> <span className="hidden sm:inline">Previous</span>
      </Step>

      {/* Phones get "3 / 8"; wider screens every page number (there are 8). */}
      <span className="text-sm font-semibold text-brand-text-muted sm:hidden">
        {page} / {blogPageCount}
      </span>
      <ol className="hidden items-center gap-1.5 sm:flex">
        {pages.map((n) => (
          <li key={n}>
            <Link
              href={blogPageHref(n)}
              aria-label={`Page ${n}`}
              aria-current={n === page ? "page" : undefined}
              className={cn(
                "inline-flex size-10 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                n === page
                  ? "bg-brand-primary text-white"
                  : "text-brand-text-secondary hover:bg-brand-subtle-bg hover:text-brand-primary",
              )}
            >
              {n}
            </Link>
          </li>
        ))}
      </ol>

      <Step to={page < blogPageCount ? page + 1 : null} label="Next page">
        <span className="hidden sm:inline">Next</span> <ChevronRight className="size-4" />
      </Step>
    </nav>
  );
}

/** Previous / Next. At either end it stays in place, greyed and not a link. */
function Step({ to, label, children }: { to: number | null; label: string; children: React.ReactNode }) {
  const className =
    "inline-flex h-10 items-center gap-1 rounded-full border border-brand-border-light bg-white px-4 text-sm font-semibold text-brand-text-secondary transition-colors";
  if (to === null) {
    return (
      <span aria-hidden className={cn(className, "opacity-40")}>
        {children}
      </span>
    );
  }
  return (
    <Link
      href={blogPageHref(to)}
      aria-label={label}
      className={cn(className, "hover:border-brand-border-teal hover:text-brand-primary")}
    >
      {children}
    </Link>
  );
}
