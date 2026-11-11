import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { BlogArticle } from "@/components/landing/BlogArticle";
import { blogHref, getBlogPost, type BlogPost } from "@/components/landing/blog-data";

/**
 * /landing/knowledge-desk/:slug. The SPA fetches the article's file in the
 * browser. In Next.js this is a server page instead: generateStaticParams over
 * `blogPosts`, generateMetadata from the post's metaTitle / metaDescription,
 * `await getBlogPost(slug)` (notFound() on null) and the same BlogArticle.
 */
export default function KnowledgeDeskPostPage() {
  const { slug = "" } = useParams();
  const navigate = useNavigate();
  // `undefined` while loading, `null` when there is no such post.
  const [post, setPost] = useState<BlogPost | null | undefined>(undefined);

  useEffect(() => {
    let live = true;
    setPost(undefined);
    getBlogPost(slug).then(
      (p) => live && setPost(p),
      () => live && setPost(null),
    );
    return () => {
      live = false;
    };
  }, [slug]);

  if (post === undefined) return <div className="min-h-screen" />;

  if (post === null) {
    return (
      <main className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="text-xs font-bold tracking-[2px] text-brand-primary uppercase">404</p>
        <h1 className="font-(family-name:--font-display) text-3xl font-bold text-brand-text-primary">
          This article has moved
        </h1>
        <p className="text-sm text-brand-text-secondary">It is not on the Knowledge Desk any more.</p>
        <Link to={blogHref} className="btn-brand mt-2 rounded-md px-6 py-2.5 text-sm font-semibold text-white">
          See all articles
        </Link>
      </main>
    );
  }

  // Links inside the article body are plain HTML, so the router never sees
  // them. Catch clicks on the ones that stay on this site and route them, so
  // they do not reload the whole page.
  function onBodyClick(e: React.MouseEvent) {
    if (e.defaultPrevented) return;
    const a = (e.target as HTMLElement).closest("a");
    const href = a?.getAttribute("href");
    if (!a || !href?.startsWith("/landing/") || a.target) return;
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(href);
  }

  return (
    <div onClick={onBodyClick}>
      <BlogArticle post={post} />
    </div>
  );
}
