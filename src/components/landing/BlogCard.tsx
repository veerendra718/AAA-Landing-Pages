import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { formatBlogDate, postHref, type BlogSummary } from "./blog-data";
import { BlogCover } from "./BlogCover";

/** One post in a grid: cover, date, title and the opening lines. The whole
 *  card is the link. */
export function BlogCard({ post, priority = false }: { post: BlogSummary; priority?: boolean }) {
  return (
    <Link
      href={postHref(post.slug)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-brand-border-light bg-white card-hover"
    >
      {/* 1.91:1 is the shape most covers were made in. */}
      <BlogCover
        post={post}
        ratio={1.91}
        priority={priority}
        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
      />
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="flex items-center gap-2 text-xs font-semibold text-brand-text-muted">
          <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" /> {post.readMinutes} min read
          </span>
        </p>
        <h2 className="mt-3 font-(family-name:--font-display) text-xl font-bold leading-snug text-brand-primary-darker transition-colors group-hover:text-brand-primary">
          {post.title}
        </h2>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-brand-text-secondary">{post.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-primary">
          Read article
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
