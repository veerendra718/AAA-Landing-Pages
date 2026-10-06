"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export type HeroSlide = {
  id: string;
  /** Names the slide for screen readers, e.g. "In the classroom". */
  label: string;
  content: React.ReactNode;
};

/** How long each slide shows before the next, in ms. */
const INTERVAL = 5000;

/**
 * The home page hero as a looping carousel. Every slide sits in the same grid
 * cell, so the hero is as tall as its tallest slide and nothing below jumps
 * when it changes; the inactive slide fades out and is made `inert`, so it
 * can't be tabbed into or read twice.
 *
 * It advances every 5 seconds, pausing while the pointer or keyboard focus is
 * inside it and for anyone who prefers reduced motion. Previous / next arrows
 * sit at the sides on wide screens, where there's room beside the content,
 * and centred under the slides elsewhere so they never cover the text. Using
 * an arrow restarts the 5-second wait.
 */
export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const playing = !hovered && !reducedMotion;
  const go = (step: 1 | -1) => setIndex((i) => (i + step + slides.length) % slides.length);

  useEffect(() => {
    if (!playing) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % slides.length), INTERVAL);
    return () => window.clearTimeout(t);
  }, [playing, index, slides.length]);

  const arrow =
    "flex size-11 items-center justify-center rounded-full border border-brand-border-light bg-white/90 text-brand-primary-darker shadow-md backdrop-blur transition-colors hover:border-brand-primary hover:bg-brand-primary hover:text-white";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Ways to learn at Arjunaa Academy"
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setHovered(false);
      }}
    >
      <div className="grid" aria-live={playing ? "off" : "polite"}>
        {slides.map((s, i) => (
          <div
            key={s.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}: ${s.label}`}
            inert={i !== index}
            className={cn(
              "col-start-1 row-start-1 transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none",
              i === index ? "opacity-100" : "pointer-events-none translate-x-4 opacity-0",
            )}
          >
            {s.content}
          </div>
        ))}
      </div>

      {/* Arrows: at the sides where the screen is wide enough, below the slides otherwise. */}
      <div className="mt-8 flex justify-center gap-3 2xl:pointer-events-none 2xl:absolute 2xl:inset-x-6 2xl:top-1/2 2xl:mt-0 2xl:-translate-y-1/2 2xl:justify-between">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className={cn(arrow, "2xl:pointer-events-auto")}
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next slide"
          className={cn(arrow, "2xl:pointer-events-auto")}
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
