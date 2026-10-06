"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export type HeroSlide = {
  id: string;
  /** The tab label under the slides, e.g. "In the classroom". */
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  content: React.ReactNode;
};

/** How long each slide shows before the next, in ms. Matches `hero-progress` in index.css. */
const INTERVAL = 7000;

/**
 * The home page hero as a slow, looping carousel. Every slide sits in the same
 * grid cell, so the hero is as tall as its tallest slide and nothing below
 * jumps when it changes; the inactive slide fades out and is made `inert`, so
 * it can't be tabbed into or read twice.
 *
 * It advances on its own, pausing while the pointer or keyboard focus is
 * inside it and for anyone who prefers reduced motion. The tabs below double
 * as the progress bar and as manual controls, with a pause button for WCAG
 * 2.2.2 (auto-moving content can be stopped).
 */
export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [stopped, setStopped] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const playing = !hovered && !stopped && !reducedMotion;

  useEffect(() => {
    if (!playing) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % slides.length), INTERVAL);
    return () => window.clearTimeout(t);
  }, [playing, index, slides.length]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Ways to learn at Arjunaa Academy"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setHovered(false);
      }}
    >
      <div className="grid">
        {slides.map((s, i) => (
          <div
            key={s.id}
            id={`hero-slide-${s.id}`}
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

      {/* Tabs: which slide is showing, how long until the next, and a way to pick one. */}
      <div className="mt-8 flex items-center justify-center gap-2">
        <div role="tablist" aria-label="Choose a slide" className="flex gap-2 rounded-full border border-brand-border-light bg-white/80 p-1.5 shadow-sm backdrop-blur">
          {slides.map((s, i) => {
            const on = i === index;
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={on}
                aria-controls={`hero-slide-${s.id}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "relative flex items-center gap-2 overflow-hidden rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  on ? "bg-brand-primary text-white" : "text-brand-text-secondary hover:text-brand-primary",
                )}
              >
                <s.icon className="size-4" />
                {s.label}
                {on && playing && (
                  <span
                    key={index}
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-white/70 [animation:hero-progress_7s_linear_forwards]"
                  />
                )}
              </button>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => setStopped((v) => !v)}
          aria-label={stopped ? "Play the slideshow" : "Pause the slideshow"}
          className="flex size-10 items-center justify-center rounded-full border border-brand-border-light bg-white/80 text-brand-text-secondary shadow-sm transition-colors hover:text-brand-primary"
        >
          {stopped ? <Play className="size-4" /> : <Pause className="size-4" />}
        </button>
      </div>
    </div>
  );
}
