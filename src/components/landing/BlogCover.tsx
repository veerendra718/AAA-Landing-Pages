import Image from "next/image";

import { cn } from "@/lib/utils";

import type { BlogSummary } from "./blog-data";

/**
 * A post's cover, always shown whole. The covers carry their headline as text
 * inside the picture, and they come in every shape from 4:5 to 3:1, so
 * cropping them to one frame cuts words off. The frame keeps its `ratio`; a
 * cover of a different shape sits inside it at its own shape, and a blurred
 * copy of itself fills the spare space instead of a flat band.
 */
export function BlogCover({
  post,
  ratio,
  sizes,
  priority = false,
  className,
}: {
  post: BlogSummary;
  /** The frame's width ÷ height. */
  ratio: number;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const own = post.imageWidth / post.imageHeight;
  // Within 3% the cover fills the frame; the sliver lost is never text.
  const fits = Math.abs(own - ratio) / ratio < 0.03;

  return (
    <div
      className={cn("relative overflow-hidden bg-brand-subtle-bg", className)}
      style={{ aspectRatio: ratio }}
    >
      {!fits && (
        <Image
          src={post.image}
          alt=""
          fill
          sizes="64px"
          className="scale-125 opacity-70 blur-2xl"
        />
      )}
      <Image
        src={post.image}
        alt={post.imageAlt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(fits ? "object-cover" : "object-contain", "transition-transform duration-500 group-hover:scale-[1.03]")}
      />
    </div>
  );
}
