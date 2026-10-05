import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { highlightResults } from "./v2-data";

/**
 * A slow, endless strip of real results under the hero — the proof a parent
 * looks for first. The list is rendered twice so the loop is seamless; the
 * copy is hidden from assistive tech. Hovering pauses it, and reduced-motion
 * users get a plain horizontal scroller instead.
 */
export function ResultsTicker() {
  return (
    <div className="border-y border-brand-border-light bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:px-6">
        <Link
          href="/landing/achievers"
          className="hidden shrink-0 items-center gap-1.5 rounded-full bg-brand-primary-darker px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-primary md:flex"
        >
          Our achievers <ArrowRight className="size-3.5" />
        </Link>
        <div className="group relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] motion-reduce:overflow-x-auto motion-reduce:no-scrollbar">
          <div className="flex w-max animate-[ticker_60s_linear_infinite] gap-3 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[0, 1].map((copy) => (
              <ul key={copy} className="flex gap-3" aria-hidden={copy === 1 || undefined}>
                {highlightResults.map((r) => (
                  <li
                    key={`${copy}-${r.name}`}
                    className="flex shrink-0 items-center gap-2.5 rounded-full border border-brand-border-light bg-brand-page-bg py-1 pl-1 pr-4"
                  >
                    <Image
                      src={r.image}
                      alt=""
                      width={32}
                      height={32}
                      className="size-8 rounded-full object-cover object-top"
                    />
                    <span className="text-xs leading-tight">
                      <span className="block font-semibold text-brand-text-primary">{r.name}</span>
                      <span className="text-brand-text-muted">
                        <span className="font-semibold text-brand-primary">{r.result}</span>
                        {r.college && <> · {r.college}</>}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
