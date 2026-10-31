import Image from "next/image";

import { cn } from "@/lib/utils";
import { type FacultyMember } from "./about-data";

/** "K V Chandrashekaraiah" -> "KC": the first and last words' first letters. */
function initials(name: string) {
  const words = name.split(/\s+/).filter(Boolean);
  return (words[0][0] + (words.length > 1 ? words[words.length - 1][0] : "")).toUpperCase();
}

/**
 * A faculty member's photo, filling its (relatively positioned) parent. Until
 * the academy's photos arrive, a tinted tile with their initials stands in.
 */
export function FacultyPhoto({
  member,
  sizes,
  className,
}: {
  member: FacultyMember;
  sizes: string;
  className?: string;
}) {
  if (member.image) {
    return (
      <Image src={member.image} alt={member.name} fill sizes={sizes} className={cn("object-cover object-top", className)} />
    );
  }
  return (
    <div
      role="img"
      aria-label={member.name}
      className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-brand-subtle-bg to-brand-secondary/40"
    >
      <span className="font-(family-name:--font-display) text-5xl font-bold tracking-tight text-brand-primary/80">
        {initials(member.name)}
      </span>
    </div>
  );
}
