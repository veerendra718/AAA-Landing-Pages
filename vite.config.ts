import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const src = fileURLToPath(new URL("./src", import.meta.url));

// The ported AAA landing code was written for Next.js. These aliases map the
// next/* imports onto local shims so the copied components run unmodified in a
// plain React SPA, and "@" keeps pointing at src/ as it does in the repo.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": src,
      "next/image": `${src}/shims/image.tsx`,
      "next/link": `${src}/shims/link.tsx`,
      "next/navigation": `${src}/shims/navigation.ts`,
      next: `${src}/shims/next.ts`,
    },
  },
  build: {
    // Relative asset URLs so the build can be served from any sub-path.
    assetsInlineLimit: 0,
  },
  server: { port: 3000, open: true },
});
