# AAA Landing Pages (standalone)

A standalone Vite + React SPA containing the Arjunaa Academy landing pages,
ported out of the `aaa_frontend_cloned` Next.js repo (branch `landing-page`).
Content, layout and brand tokens were copied verbatim — nothing here was
re-invented, so the pages match the app's design language by construction.

## Run

```bash
npm install
npm run dev        # http://localhost:3000  → redirects to /landing
npm run build      # type-safe production build into dist/
npm run preview    # serve dist/ locally
```

## Routes

Identical to the Next.js app router structure:

| Path | Page |
| --- | --- |
| `/landing` | Variation picker (V1 / V2 / V3) |
| `/landing/v1` | Academy first — history, values, faculty, results |
| `/landing/v2` | Classroom + app, blended learning |
| `/landing/v3` | Smart learning, product first |
| `/landing/about` | About index |
| `/landing/about/mission-vision` | Mission & Vision |
| `/landing/about/leadership` | Leadership |
| `/landing/about/testimonials` | Testimonials |
| `/landing/about/careers` | Careers |

## How the port works

The copied components still say `next/image`, `next/link`, `next/navigation`
and `import type { Metadata } from "next"`. Vite aliases those to shims:

| Import | Shim | Behaviour |
| --- | --- | --- |
| `next/link` | `src/shims/link.tsx` | Router link for paths in `src/route-paths.ts`; plain `<a>` for external URLs (the student app's login/register), `#anchors`, `tel:`, `mailto:` |
| `next/image` | `src/shims/image.tsx` | `<img>` with lazy loading; `fill` keeps the absolute-inset pattern |
| `next/navigation` | `src/shims/navigation.ts` | Wraps `useNavigate` |
| `next` | `src/shims/next.ts` | `Metadata` type only; the `export const metadata` in each page is inert here |

The real `<head>` metadata lives in `index.html`.

`src/components/ui/*` are hand-written stand-ins for the shadcn primitives the
landing components use (accordion, carousel, button, input, label, sheet,
sonner). They reproduce the same class recipes, so the visual result matches the
repo. The carousel is a CSS scroll-snap track rather than Embla, and the sheet
is a plain fixed panel rather than Radix — same look, no Radix dependency.

## Before this goes live

`src/components/landing/data.ts` carries the academy facts pulled from
aaaedu.in plus three placeholder blocks marked `// DUMMY`:

- `academy.whatsapp` — placeholder number, used by the floating chat button and centre section
- `branch.hours` — aaaedu.in publishes no visiting hours; placeholder hours (Mon–Sat, 9 AM–7 PM) are shown **without** a badge, so confirm them before launch
- `faculty` — four invented faculty profiles (V1 only)

Only `faculty` still renders an amber dashed **SAMPLE DATA** badge
(`SampleDataBadge.tsx`, on V1). The WhatsApp number and the hours show with no
badge at all, so check both before launch. Once the faculty list is real, delete
that `<SampleDataBadge />` call site and then the component itself.

Note that `facultyMembers` in `about-data.ts` is **real** — actual names, photos
and biographies from aaaedu.in, used by `/landing/about/leadership`. It is not
placeholder data and carries no badge. Don't confuse it with the invented
`faculty` list in `data.ts`.

The lead form (`VisitForm.tsx`) is demo-only by design, exactly as it was in the
repo: it validates with zod, waits 500ms, shows a toast and resets. Nothing is
sent anywhere. Wire `onSubmit` to a real endpoint when one exists.

## Deploying

This is an SPA with history-based routing, so the host must rewrite unknown
paths to `index.html` (Netfly `_redirects`: `/* /index.html 200`; Vercel
`vercel.json` rewrites; nginx `try_files $uri /index.html;`).
