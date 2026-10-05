// Anchor audit: renders every route and checks that each fragment link
// ("#visit", "/landing/v2#programs") lands on an element id that the target
// page really renders. Broken in-page anchors are invisible to typecheck,
// check-links (which strips the fragment) and the browser — the link just does
// nothing when clicked. Usage: node scripts/check-anchors.mjs
import { readFileSync } from "node:fs";
import { createServer } from "vite";

// The router table is the single source of truth, so this stays in step with
// app.tsx instead of keeping a second copy of the route list.
const app = readFileSync("src/app.tsx", "utf8");
const componentFiles = new Map(
  [...app.matchAll(/^import (\w+) from "@\/pages\/(\w+)";$/gm)].map((m) => [m[1], `/src/pages/${m[2]}.tsx`]),
);
const routes = [...app.matchAll(/<Route path="([^"*]+)" element=\{<(\w+) \/>\} \/>/g)].map(
  ([, path, component]) => [path, componentFiles.get(component)],
);

const unresolved = routes.filter(([, file]) => !file);
if (unresolved.length) {
  console.error(`Could not map to a file: ${unresolved.map(([p]) => p).join(", ")}`);
  process.exit(1);
}

const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "silent",
});

const React = await import("react");
const { renderToString } = await import("react-dom/server");
const RR = await import("react-router-dom");
const MemoryRouter = RR.MemoryRouter ?? RR.default?.MemoryRouter;

// Route -> the set of element ids its markup exposes.
const idsByRoute = new Map();
const fragments = [];
let failed = 0;

for (const [route, file] of routes) {
  try {
    const Page = (await server.ssrLoadModule(file)).default;
    const html = renderToString(
      React.createElement(MemoryRouter, { initialEntries: [route] }, React.createElement(Page)),
    );
    idsByRoute.set(route, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));

    // Every href in this page's markup, kept with the page so a bare "#x" can
    // be resolved against the page that owns it.
    for (const m of html.matchAll(/href="([^"]*)"/g)) {
      const href = m[1];
      // Only this app's own links matter. A "#" inside a wa.me payload or an
      // HTML-escaped quote is not a fragment of ours to resolve.
      if (!/^[#/]/.test(href)) continue;
      const [path, frag] = href.split("#");
      if (!frag) continue;
      fragments.push({ from: route, path: path || route, frag });
    }
  } catch (e) {
    failed++;
    console.log(`FAIL ${route} — ${e.message}`);
  }
}

await server.close();

// "…/v2#programs" points at another route; "#visit" points at this page. Both
// have to land on an id that exists.
const broken = fragments.filter(({ path, frag }) => !idsByRoute.get(path)?.has(frag));

console.log(`${routes.length} routes rendered, ${fragments.length} fragment links checked`);
if (broken.length) {
  console.log(`\nBROKEN ANCHORS (${broken.length}):`);
  for (const b of broken) {
    const known = [...(idsByRoute.get(b.path) ?? [])].filter((i) => !i.startsWith("radix")).join(", ");
    console.log(`  - ${b.from} -> ${b.path}#${b.frag}` + (idsByRoute.has(b.path) ? `\n      ${b.path} ids: ${known || "(none)"}` : `\n      ${b.path} is not a route`));
  }
  process.exitCode = 1;
} else {
  console.log("\nOK: every fragment link lands on an element id that exists.");
}
