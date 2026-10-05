// Renders every new page to an HTML string through Vite's SSR pipeline. This
// catches real runtime errors (bad data access, missing router context, hook
// misuse) that typechecking and transform checks cannot.
// Usage: node scripts/ssr-check.mjs
import { createServer } from "vite";

const routes = [
  ["/landing/courses", "/src/pages/Courses.tsx"],
  ["/landing/courses/jee", "/src/pages/CoursesJee.tsx"],
  ["/landing/courses/neet", "/src/pages/CoursesNeet.tsx"],
  ["/landing/courses/kcet-boards", "/src/pages/CoursesKcetBoards.tsx"],
  ["/landing/courses/foundation", "/src/pages/CoursesFoundation.tsx"],
  ["/landing/courses/residential", "/src/pages/CoursesResidential.tsx"],
  ["/landing/courses/admissions", "/src/pages/CoursesAdmissions.tsx"],
  ["/landing/achievers", "/src/pages/Achievers.tsx"],
  ["/landing/achievers/jee-mains", "/src/pages/AchieversJeeMains.tsx"],
  ["/landing/achievers/jee-advanced", "/src/pages/AchieversJeeAdvanced.tsx"],
  ["/landing/achievers/neet", "/src/pages/AchieversNeet.tsx"],
  ["/landing/achievers/k-cet", "/src/pages/AchieversKCet.tsx"],
  ["/landing/achievers/nstse", "/src/pages/AchieversNstse.tsx"],
  ["/landing/contact", "/src/pages/Contact.tsx"],
];

const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "silent",
});

const React = await import("react");
const { renderToString } = await import("react-dom/server");
const RR = await import("react-router-dom");
const MemoryRouter = RR.MemoryRouter ?? RR.default?.MemoryRouter;

let failed = 0;

for (const [route, file] of routes) {
  try {
    const Page = (await server.ssrLoadModule(file)).default;
    const html = renderToString(
      React.createElement(
        MemoryRouter,
        { initialEntries: [route] },
        React.createElement(Page),
      ),
    );

    // Sanity-check the rendered output, not just that it did not throw.
    const title = html.match(/<h1[^>]*>([^<]{3,})/)?.[1];
    const cards = (html.match(/<img/g) ?? []).length;
    const links = (html.match(/href="\/landing/g) ?? []).length;
    const unresolved = html.includes("Text content does not match") ||
      /\bundefined\b|\[object Object\]/.test(html);

    console.log(
      `ok   ${route.padEnd(34)} h1=${(title ?? "MISSING").slice(0, 26).padEnd(27)} imgs=${String(cards).padStart(3)} links=${links}${unresolved ? "  <-- SUSPECT output" : ""}`,
    );
    if (!title || unresolved) failed++;
  } catch (e) {
    failed++;
    console.log(`FAIL ${route}\n     ${e.stack?.split("\n").slice(0, 4).join("\n     ")}`);
  }
}

await server.close();
console.log(failed ? `\n${failed} page(s) need attention.` : "\nAll pages rendered.");
if (failed) process.exitCode = 1;
