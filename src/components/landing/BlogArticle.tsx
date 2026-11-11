import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

import { BlogCard } from "./BlogCard";
import { blogHref, formatBlogDate, morePosts, type BlogPost } from "./blog-data";
import { ClosingCta } from "./ClosingCta";
import { FloatingContact } from "./FloatingContact";
import { LandingFooter } from "./LandingFooter";
import { LandingNav } from "./LandingNav";
import { SectionHeading } from "./SectionHeading";

const home = "/landing/v2";
const visit = "/landing/contact#enquire";

/**
 * One Knowledge Desk article. Built on the same chrome as PageShell, but with
 * its own header — a long article title needs a smaller size than a section
 * name, and a date line.
 *
 * Takes the loaded post rather than a slug, so a Next.js page can await it on
 * the server and this SPA can fetch it in the browser.
 *
 * The body is the imported HTML from aaaedu.in, stripped of its old styling by
 * scripts/import-blogs.mjs; `.blog-body` in index.css styles it.
 */
export function BlogArticle({ post }: { post: BlogPost }) {
  const more = morePosts(post.slug);

  return (
    <div id="top">
      <LandingNav homeHref={home} />

      <article>
        <header className="relative overflow-hidden bg-linear-to-b from-brand-subtle-bg/70 via-white to-white">
          <div className="pointer-events-none absolute -right-40 -top-40 size-[480px] rounded-full bg-brand-secondary/40 blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-4 pb-8 pt-8 md:px-6 md:pt-12">
            <Link
              href={blogHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-primary-darker"
            >
              <ArrowLeft className="size-4" /> Knowledge Desk
            </Link>
            <h1 className="mt-5 font-(family-name:--font-display) text-3xl font-bold leading-tight tracking-tight text-balance text-brand-primary-darker md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 flex flex-wrap items-center gap-2 text-sm font-medium text-brand-text-muted">
              <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
              <span aria-hidden>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="size-4" /> {post.readMinutes} min read
              </span>
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="relative aspect-[1.91/1] overflow-hidden rounded-3xl bg-brand-subtle-bg">
            <Image src={post.image} alt={post.imageAlt} fill priority sizes="(min-width: 896px) 896px, 100vw" />
          </div>
        </div>

        <div
          className="blog-body prose prose-lg mx-auto max-w-3xl px-4 pt-10 md:px-6 md:pt-14"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>

      {more.length > 0 && (
        <section className="mt-16 bg-brand-page-bg py-16 md:mt-24 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <SectionHeading align="left" eyebrow="Knowledge Desk" title="Keep reading" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href={blogHref}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-primary-darker"
              >
                See all articles
              </Link>
            </div>
          </div>
        </section>
      )}

      <ClosingCta
        visitHref={visit}
        subtitle="Admissions for 2026–27 are open at the Vijayanagar centre. Come and see how we teach before you decide."
      />

      <LandingFooter />
      <FloatingContact />
    </div>
  );
}
