import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type CarouselCtx = {
  viewport: React.RefObject<HTMLDivElement | null>;
  scroll: (direction: 1 | -1) => void;
};

const Context = React.createContext<CarouselCtx | null>(null);

function useCarousel() {
  const ctx = React.useContext(Context);
  if (!ctx) throw new Error("Carousel primitives must be rendered inside <Carousel>");
  return ctx;
}

/** Embla-free stand-in: a snap-x scroller, so the previous/next buttons step by
 *  one card and touch drag still works for free. */
function Carousel({
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  opts?: { align?: string; loop?: boolean };
  setApi?: unknown;
}) {
  void props.opts;
  void props.setApi;

  const viewport = React.useRef<HTMLDivElement | null>(null);

  const scroll = React.useCallback((direction: 1 | -1) => {
    const el = viewport.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const step = first ? first.getBoundingClientRect().width + 20 : el.clientWidth * 0.85;
    const max = el.scrollWidth - el.clientWidth;
    // Loop the ends so the carousel reads continuous, matching embla's loop.
    if (direction === 1 && el.scrollLeft >= max - 4) el.scrollTo({ left: 0, behavior: "smooth" });
    else if (direction === -1 && el.scrollLeft <= 4)
      el.scrollTo({ left: max, behavior: "smooth" });
    else el.scrollBy({ left: direction * step, behavior: "smooth" });
  }, []);

  const value = React.useMemo(() => ({ viewport, scroll }), [scroll]);

  return (
    <Context.Provider value={value}>
      <div data-slot="carousel" className={cn("relative", className)}>
        {children}
      </div>
    </Context.Provider>
  );
}

function CarouselContent({ className, children, ...props }: React.ComponentProps<"div">) {
  const { viewport } = useCarousel();

  return (
    <div
      ref={viewport}
      data-slot="carousel-content"
      className={cn("no-scrollbar flex snap-x snap-mandatory overflow-x-auto", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function CarouselItem({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="group"
      data-slot="carousel-item"
      className={cn("shrink-0 snap-start", className)}
      {...props}
    >
      {children}
    </div>
  );
}

const arrowBase =
  "inline-flex size-8 shrink-0 items-center justify-center rounded-full border bg-background text-foreground shadow-xs transition-colors hover:bg-accent absolute top-1/2 -translate-y-1/2";

function CarouselPrevious({ className, ...props }: React.ComponentProps<"button">) {
  const { scroll } = useCarousel();
  return (
    <button
      type="button"
      aria-label="Previous"
      onClick={() => scroll(-1)}
      className={cn(arrowBase, "left-0", className)}
      {...props}
    >
      <ArrowLeft className="size-4" />
    </button>
  );
}

function CarouselNext({ className, ...props }: React.ComponentProps<"button">) {
  const { scroll } = useCarousel();
  return (
    <button
      type="button"
      aria-label="Next"
      onClick={() => scroll(1)}
      className={cn(arrowBase, "right-0", className)}
      {...props}
    >
      <ArrowRight className="size-4" />
    </button>
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
