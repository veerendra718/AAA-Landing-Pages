import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarCheck, Clock, MessageCircle, Phone } from "lucide-react";

import { cn } from "@/lib/utils";

import { BlogCard } from "./BlogCard";
import { BlogCover } from "./BlogCover";
import { blogHref, blogPosts, formatBlogDate, morePosts, postHref, type BlogPost } from "./blog-data";
import { academy, whatsappUrl } from "./data";
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
 * On large screens the article sits beside a sticky sidebar (a "talk to us"
 * card and the latest articles), so the page uses its width without stretching
 * the text into lines too long to read. Phones and tablets get the article
 * alone. There is no closing "Book a visit" banner: the sidebar card already
 * makes that offer.
 *
 * Takes the loaded post rather than a slug, so a Next.js page can await it on
 * the server and this SPA can fetch it in the browser.
 *
 * The body is the imported HTML from aaaedu.in, stripped of its old styling by
 * scripts/import-blogs.mjs; `.blog-body` in index.css styles it.
 */
export function BlogArticle({ post }: { post: BlogPost }) {
  const more = morePosts(post.slug);
  const latest = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 4);

  return (
    <div id="top">
      <LandingNav homeHref={home} />

      <article className="relative">
        {/* The tint behind the header. A fixed height that fades to white, so
            it never ends in a visible line. */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] overflow-hidden bg-linear-to-b from-brand-subtle-bg/70 to-white">
          <div className="absolute -right-40 -top-40 size-[480px] rounded-full bg-brand-secondary/40 blur-3xl" />
        </div>

        <header className="relative mx-auto max-w-6xl px-4 pt-8 md:px-6 md:pt-12">
          <Link
            href={blogHref}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-primary-darker"
          >
            <ArrowLeft className="size-4" /> Knowledge Desk
          </Link>
          <h1 className="mt-5 max-w-4xl font-(family-name:--font-display) text-3xl font-bold leading-tight tracking-tight text-balance text-brand-primary-darker md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 flex flex-wrap items-center gap-2 text-sm font-medium text-brand-text-muted">
            <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-4" /> {post.readMinutes} min read
            </span>
          </p>
        </header>

        <div className="relative mx-auto mt-8 grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-[minmax(0,1fr)_300px] xl:gap-16">
          <div className="min-w-0">
            {/* At its own shape, so nothing is cut off — except that a tall
                cover is held to 3:2 rather than filling the screen. */}
            <BlogCover
              post={post}
              ratio={Math.max(post.imageWidth / post.imageHeight, 1.5)}
              priority
              sizes="(min-width: 1152px) 790px, (min-width: 1024px) 66vw, 100vw"
              className="rounded-3xl"
            />
            <div
              className="blog-body prose prose-lg mt-10 max-w-none md:mt-12"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            {/* Below large screens there is no sidebar, so the card follows the article. */}
            <TalkToUsCard compact className="mt-12 lg:hidden" />
          </div>

          {/* The article list scrolls away; the "Talk to us" card below it then
              stays in view. Only the card is sticky: the whole column is
              taller than a laptop screen, so a sticky column would hide its end. */}
          <aside className="hidden lg:block">
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-3xl border border-brand-border-light bg-white p-6">
                <p className="text-xs font-bold uppercase tracking-[2px] text-brand-primary">Latest articles</p>
                <ul className="mt-4 space-y-4">
                  {latest.map((p) => (
                    <li key={p.slug}>
                      <Link href={postHref(p.slug)} className="group flex gap-3">
                        <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-brand-subtle-bg">
                          <Image src={p.image} alt="" fill sizes="80px" />
                        </div>
                        <div className="min-w-0">
                          <p className="line-clamp-2 text-sm font-semibold leading-snug text-brand-text-primary transition-colors group-hover:text-brand-primary">
                            {p.title}
                          </p>
                          <p className="mt-1 text-xs text-brand-text-muted">{formatBlogDate(p.date)}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={blogHref}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-primary-darker"
                >
                  All articles <ArrowRight className="size-4" />
                </Link>
              </div>
              <div className="sticky top-24">
                <TalkToUsCard />
              </div>
            </div>
          </aside>
        </div>
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

      <LandingFooter />
      <FloatingContact />
    </div>
  );
}

/** The offer to visit or get in touch: sticky in the sidebar on large
 *  screens, and `compact` under the article on phones and tablets, where its
 *  three buttons share one row once there is room. */
function TalkToUsCard({ compact = false, className }: { compact?: boolean; className?: string }) {
  const outline =
    "flex items-center justify-center gap-1.5 rounded-full border border-white/25 px-3 py-2 text-sm font-semibold transition-colors hover:bg-white/10";
  return (
    <div className={cn("rounded-3xl bg-brand-primary-darker text-white", compact ? "p-5 sm:p-6" : "p-6", className)}>
      <p className="text-xs font-bold uppercase tracking-[2px] text-brand-secondary">Talk to us</p>
      <p
        className={cn(
          "mt-3 font-(family-name:--font-display) font-bold leading-snug",
          compact ? "text-xl sm:text-2xl" : "text-2xl",
        )}
      >
        Preparing for NEET, JEE or KCET?
      </p>
      <p className="mt-2 text-sm leading-relaxed text-white/75">
        Visit the Vijayanagar centre, meet the faculty and get a free counselling session.
      </p>
      <div className={cn("mt-5 grid grid-cols-2 gap-2", compact && "sm:grid-cols-[1.4fr_1fr_1fr]")}>
        <Link
          href={visit}
          className={cn(
            "col-span-2 flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-brand-primary-darker transition-colors hover:bg-brand-subtle-bg",
            compact ? "sm:col-span-1" : "mb-1",
          )}
        >
          <CalendarCheck className="size-4" /> Book a free visit
        </Link>
        <a href={`tel:+91${academy.phones[0]}`} className={outline}>
          <Phone className="size-4" /> Call
        </a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={outline}>
          <MessageCircle className="size-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
