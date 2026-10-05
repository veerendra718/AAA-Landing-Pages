import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const variants = [
  {
    href: "/landing/v1",
    name: "V1 · Academy first",
    body: "Leads with Arjunaa's history, values, faculty and results. The app is introduced as the classroom, extended.",
    image: "/images/landing/a-hero.jpg",
  },
  {
    href: "/landing/v2",
    name: "V2 · Classroom + App",
    body: "Two paths from the first screen: join a batch or learn online. Blended-learning story throughout.",
    image: "/images/landing/b-hero.jpg",
  },
  {
    href: "/landing/v3",
    name: "V3 · Smart learning",
    body: "Product first: goal picker, mastery map, streaks and rewards. The centre appears as \"Prefer a classroom?\"",
    image: "/images/landing/b-band-2.jpg",
  },
];

export default function LandingIndex() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <p className="text-xs font-bold uppercase tracking-[2.5px] text-brand-primary">Demo</p>
      <h1 className="mt-2 font-(family-name:--font-display) text-4xl font-bold text-brand-primary-darker">
        Landing page variations
      </h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {variants.map((v) => (
          <Link
            key={v.href}
            href={v.href}
            className="group overflow-hidden rounded-2xl border border-brand-border-light bg-white transition-shadow hover:shadow-xl"
          >
            <div className="relative aspect-[16/10]">
              <Image src={v.image} alt="" fill sizes="(min-width: 768px) 360px, 100vw" className="object-cover" />
            </div>
            <div className="p-5">
              <p className="flex items-center justify-between font-semibold text-brand-text-primary">
                {v.name}
                <ArrowRight className="size-4 text-brand-primary transition-transform group-hover:translate-x-1" />
              </p>
              <p className="mt-2 text-sm leading-relaxed text-brand-text-muted">{v.body}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
