"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonialsFull } from "./about-data";
import { SectionHeading } from "./SectionHeading";

/**
 * Whole sentences from the start of a message, stopping once there is enough
 * to read as a quote — so an excerpt never ends mid-sentence on "…". The full
 * text is on /landing/about/testimonials.
 */
function excerpt(message: string, target = 200, max = 320) {
  const sentences = message.match(/[^.!?]+[.!?]+["”’)]*\s*/g) ?? [message];
  let out = "";
  for (const s of sentences) {
    if (out && (out.length >= target || out.length + s.length > max)) break;
    out += s;
  }
  return out.trim();
}

const testimonials = testimonialsFull.map((t) => ({ ...t, quote: excerpt(t.message) }));

export function Testimonials({
  eyebrow = "Stories",
  title = "What students and principals say",
}: {
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section id="stories" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <Carousel opts={{ align: "start", loop: true }} className="mt-12">
          <CarouselContent className="-ml-5">
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="basis-[88%] pl-5 sm:basis-1/2 lg:basis-1/3">
                <figure className="flex h-full flex-col rounded-2xl border border-brand-border-light bg-white p-6">
                  <Quote className="size-7 text-brand-secondary" />
                  <blockquote className="mt-3 flex-1 font-(family-name:--font-display) text-xl leading-snug text-brand-text-primary">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <Image
                      src={t.image}
                      alt=""
                      width={44}
                      height={44}
                      className="size-11 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-brand-text-primary">{t.name}</p>
                      <p className="text-xs text-brand-text-muted">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex justify-center gap-3">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
