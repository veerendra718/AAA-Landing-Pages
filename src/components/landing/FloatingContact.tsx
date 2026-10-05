import { Phone } from "lucide-react";

import { academy, whatsappUrl } from "./data";
import { WhatsAppIcon } from "./WhatsAppIcon";

/** The floating pair of contact buttons, on every page. */
export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <a
        href={`tel:+91${academy.phones[0]}`}
        aria-label="Call the academy"
        className="flex size-12 items-center justify-center rounded-full bg-white text-brand-primary shadow-lg ring-1 ring-brand-border-light transition-transform hover:scale-105"
      >
        <Phone className="size-5" />
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex size-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="size-6" />
      </a>
    </div>
  );
}
