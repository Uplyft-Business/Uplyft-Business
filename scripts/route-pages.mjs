// Writes dist/<route>.html for every top-level page in src/routes/, as a copy of dist/index.html.
// GitHub Pages serves /resources from resources.html with a 200, so deep links load normally
// instead of only through the 404.html fallback (which search engines and link previews skip).
import { copyFileSync, readdirSync } from "node:fs";

const routes = readdirSync("src/routes")
  .filter((f) => f.endsWith(".tsx") && !f.startsWith("__") && f !== "index.tsx" && !f.includes("$"))
  .map((f) => f.replace(/\.tsx$/, ""));

for (const route of routes) {
  copyFileSync("dist/index.html", `dist/${route}.html`);
}
console.log(`route pages: ${routes.join(", ")}`);
