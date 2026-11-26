// Enkel lokal förhandsvisning på http://localhost:5173 – visar filerna direkt,
// så ändringar syns när man laddar om sidan (ingen omstart behövs).
// Hanterar "fina" adresser (/boka -> boka.html) och _redirects som Cloudflare gör.
import { createServer } from "node:http";
import { readFileSync, existsSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const rot = ".";
const typer = {
  ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript",
  ".webp": "image/webp", ".jpg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml",
  ".woff2": "font/woff2", ".woff": "font/woff", ".ttf": "font/ttf", ".xml": "application/xml",
  ".txt": "text/plain", ".ico": "image/x-icon", ".mp4": "video/mp4", ".json": "application/json"
};
const omdirigeringar = existsSync(join(rot, "_redirects"))
  ? readFileSync(join(rot, "_redirects"), "utf8").split("\n").map(r => r.trim().split(/\s+/)).filter(r => r.length >= 2)
  : [];

createServer((req, res) => {
  const vag = decodeURIComponent(new URL(req.url, "http://x").pathname);
  const omd = omdirigeringar.find(([fran]) => fran === vag);
  if (omd) { res.writeHead(Number(omd[2] || 301), { Location: omd[1] }); return res.end(); }
  const kandidater = [vag, vag + ".html", join(vag, "index.html")];
  for (const k of kandidater) {
    const fil = join(rot, k);
    if (existsSync(fil) && statSync(fil).isFile()) {
      res.writeHead(200, { "Content-Type": typer[extname(fil)] || "application/octet-stream", "Cache-Control": "no-store" });
      return res.end(readFileSync(fil));
    }
  }
  res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  res.end(existsSync(join(rot, "404.html")) ? readFileSync(join(rot, "404.html")) : "404");
}).listen(5173, () => console.log("http://localhost:5173"));
