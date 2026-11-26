// Kopierar sajtens filer till publiceringsmappen.
// Cloudflare Pages kör "npm run build"; utmappen sätts i Cloudflare-projektet.
// Den gamla SvelteKit-sajten publicerades från .svelte-kit/cloudflare, så vi
// fyller både den och build/ – då funkar det oavsett vilken som är inställd.
import { cpSync, rmSync, readdirSync } from "node:fs";

const utelamna = new Set([
  "node_modules", "scripts", "build", ".svelte-kit", ".git", ".claude", ".gitignore",
  "package.json", "package-lock.json", "bygg.mjs", "dev-server.mjs",
  "README.md", "LASMIG-BYGGE.md"
]);

for (const ut of ["build", ".svelte-kit/cloudflare"]) {
  rmSync(ut, { recursive: true, force: true });
  for (const namn of readdirSync(".")) {
    if (utelamna.has(namn)) continue;
    cpSync(namn, `${ut}/${namn}`, { recursive: true });
  }
}
console.log("Klart: build/ och .svelte-kit/cloudflare/");
