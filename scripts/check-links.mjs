// Static link audit: every internal /landing href used anywhere in src/ must
// be a route the app actually serves. Run with: node scripts/check-links.mjs
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const src = join(root, "src");

function walk(dir) {
  return readdirSync(dir).flatMap((e) => {
    const p = join(dir, e);
    return statSync(p).isDirectory() ? walk(p) : /\.(ts|tsx)$/.test(p) ? [p] : [];
  });
}

const paths = new Set(
  [...readFileSync(join(src, "route-paths.ts"), "utf8").matchAll(/"([^"]+)"/g)].map(
    (m) => m[1],
  ),
);

// Routes declared in the router must match the list, or a page 404s anyway.
const app = readFileSync(join(src, "app.tsx"), "utf8");
const declared = new Set(
  [...app.matchAll(/<Route path="([^"*]+)"/g)].map((m) => m[1]),
);

// Routes the shim link.tsx maps to real router routes (auth stubs etc. are
// handled separately by the app shell).
const external = new Set(["/login", "/register"]);

const bad = [];
const missingFromRouter = [];

for (const [list, set] of [
  [paths, declared],
  [declared, paths],
]) {
  for (const p of list) {
    if (!set.has(p)) missingFromRouter.push(`${p} (in ${list === paths ? "route-paths, not router" : "router, not route-paths"})`);
  }
}

// Routes need inbound links too, or a header trim silently strands them. Links
// live in two shapes: JSX `href="..."` attributes and `href: "..."` entries in
// the data files that drive the menus and sub-navs.
const linked = new Set();

for (const file of walk(src)) {
  const text = readFileSync(file, "utf8");
  const refs = [
    ...text.matchAll(/href=\{?["'`](\/[^"'`$]+)["'`]/g),
    ...text.matchAll(/to=\{?["'`](\/[^"'`$]+)["'`]/g),
    ...text.matchAll(/href:\s*["'`](\/[^"'`$]+)["'`]/g),
  ];
  for (const m of refs) {
    const href = m[1].split("#")[0];
    if (href === "/" || external.has(href)) continue;
    linked.add(href);
    if (!paths.has(href)) {
      const line = text.slice(0, m.index).split("\n").length;
      bad.push(`${relative(root, file)}:${line} -> ${m[1]}`);
    }
  }
}

// The landing-page variants are reached from the index screen, not the menu.
const variants = new Set(["/landing", "/landing/v1", "/landing/v3"]);
const orphans = [...paths].filter((p) => !linked.has(p) && !variants.has(p));

console.log(`${paths.size} routes, ${declared.size} declared in router`);
if (missingFromRouter.length) {
  console.log("\nROUTE TABLE MISMATCH:");
  for (const m of missingFromRouter) console.log("  - " + m);
}
if (bad.length) {
  console.log(`\nBROKEN LINKS (${bad.length}):`);
  for (const b of bad) console.log("  - " + b);
}
if (orphans.length) {
  console.log(`\nUNREACHABLE ROUTES (${orphans.length}) — no link points at them:`);
  for (const o of orphans) console.log("  - " + o);
}
if (!bad.length && !missingFromRouter.length && !orphans.length) {
  console.log("\nOK: every internal link resolves and every route is reachable.");
}
