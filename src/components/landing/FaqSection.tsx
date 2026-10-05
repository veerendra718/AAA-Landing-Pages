"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { academy, type FaqTopic, faqs, faqTopics, whatsappUrl } from "./data";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Filter = "all" | FaqTopic;

/**
 * Questions parents ask, filterable by topic. The left column is the heading
 * and a real way to ask anything else (call or WhatsApp); the right column is
 * the list, with the first question open so the section never looks empty.
 */
export function FaqSection() {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = filter === "all" ? faqs : faqs.filter((f) => f.topic === filter);
  const filters: { id: Filter; label: string }[] = [{ id: "all", label: "All" }, ...faqTopics];

  return (
    <section id="faq" className="scroll-mt-20 bg-brand-page-bg py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 md:px-6 lg:grid-cols-[1fr_1.5fr] lg:gap-14">
        <div className="lg:sticky lg:top-24">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Questions parents ask us"
            subtitle="Straight answers on visits, courses, fees and the app."
          />

          <div className="mt-8 rounded-3xl border border-brand-border-light bg-white p-6">
            <p className="font-semibold text-brand-text-primary">Still have a question?</p>
            <p className="mt-1 text-sm leading-relaxed text-brand-text-muted">
              Call or WhatsApp us and a mentor will get back to you.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Button asChild size="sm">
                <a href={`tel:+91${academy.phones[0]}`}>
                  <Phone /> Call {academy.phones[0]}
                </a>
              </Button>
              <Button asChild size="sm" variant="outline">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <WhatsAppIcon className="size-4 text-[#25d366]" /> WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div>
          <div
            role="group"
            aria-label="Filter questions by topic"
            className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]"
          >
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors",
                  filter === f.id
                    ? "border-brand-primary bg-brand-primary text-white"
                    : "border-brand-border-light bg-white text-brand-text-secondary hover:border-brand-border-teal hover:text-brand-primary",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Keyed by filter so the first question of each view opens fresh. */}
          <Accordion
            key={filter}
            type="single"
            collapsible
            defaultValue={shown[0]?.q}
            className="mt-5 space-y-3"
          >
            {shown.map((f) => (
              <AccordionItem
                key={f.q}
                value={f.q}
                className="rounded-2xl border border-brand-border-light bg-white px-5 transition-colors last:border-b data-[state=open]:border-brand-border-teal data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-base font-semibold text-brand-text-primary hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-relaxed text-brand-text-secondary">
                  {f.a}
                  {f.link &&
                    (f.link.external ? (
                      <a
                        href={f.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-primary-darker"
                      >
                        {f.link.label} <ArrowRight className="size-4" />
                      </a>
                    ) : (
                      <Link
                        href={f.link.href}
                        className="mt-3 flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-primary-darker"
                      >
                        {f.link.label} <ArrowRight className="size-4" />
                      </Link>
                    ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
