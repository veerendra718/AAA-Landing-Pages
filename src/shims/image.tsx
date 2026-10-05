import { useState } from "react";

import { cn } from "@/lib/utils";

type ImageProps = {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  quality?: number | string;
  className?: string;
  style?: React.CSSProperties;
  loading?: "eager" | "lazy";
  onError?: React.ReactEventHandler<HTMLImageElement>;
};

/** next/image stand-in. `fill` reproduces the layout-intrinsic pattern: the
 *  parent must be position:relative, the img stretches to it.
 *  Includes fallback state if an asset fails to load, preventing raw browser broken-icon styling. */
export default function Image({
  src,
  alt,
  width,
  height,
  fill = false,
  priority,
  sizes,
  className,
  style,
  loading,
  onError,
}: ImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        style={style}
        className={cn(
          "flex items-center justify-center bg-slate-100 text-slate-400 select-none",
          fill ? "absolute inset-0 size-full" : "inline-flex",
          className,
        )}
      >
        <span className="text-xs tracking-wide uppercase font-medium truncate px-2">
          {alt || "Image"}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      sizes={sizes}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      loading={loading ?? (priority ? "eager" : "lazy")}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      style={style}
      className={cn(fill && "absolute inset-0 size-full object-cover", className)}
      onError={(e) => {
        setHasError(true);
        onError?.(e);
      }}
    />
  );
}
