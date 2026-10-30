import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// BASE_PATH is the URL prefix the site is served under. GitHub Pages project sites live at
// /<repo>/; the deploy workflow sets it from actions/configure-pages (empty for a custom domain).
const base = process.env["BASE_PATH"] ? `${process.env["BASE_PATH"].replace(/\/+$/, "")}/` : "/";

export default defineConfig({
  base,
  plugins: [
    // Must run before the React plugin so it can generate src/routeTree.gen.ts.
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
  ],
  resolve: { tsconfigPaths: true },
});
