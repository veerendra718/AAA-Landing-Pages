import { CalendarCheck, Phone } from "lucide-react";

import { academy, whatsappUrl } from "./data";
import { WhatsAppIcon } from "./WhatsAppIcon";

/**
 * The bottom bar on phones: call, WhatsApp and book a visit, always one tap
 * away — the pattern most Indian coaching sites use on mobile. Hidden from
 * `md` up, where the header CTA and the floating buttons do the same job.
 * Pages using it should pad their bottom on mobile (`pb-16 md:pb-0`).
 */
export function MobileActionBar({ visitHref = "#visit" }: { visitHref?: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-[1fr_1fr_1.4fr] gap-2 border-t border-brand-border-light bg-white/95 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_-12px_rgba(0,83,91,0.25)] backdrop-blur-md md:hidden">
      <a
        href={`tel:+91${academy.phones[0]}`}
        className="flex h-11 items-center justify-center gap-1.5 rounded-xl border border-brand-border-light text-sm font-semibold text-brand-primary-darker"
      >
        <Phone className="size-4" /> Call
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex h-11 items-center justify-center gap-1.5 rounded-xl bg-[#25d366]/10 text-sm font-semibold text-[#128c4a]"
      >
        <WhatsAppIcon className="size-4" /> WhatsApp
      </a>
      <a
        href={visitHref}
        className="flex h-11 items-center justify-center gap-1.5 rounded-xl bg-brand-primary text-sm font-semibold text-white"
      >
        <CalendarCheck className="size-4" /> Book a visit
      </a>
    </div>
  );
}
