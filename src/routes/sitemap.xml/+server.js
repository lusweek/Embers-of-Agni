// Förbättrar SEO enligt chat GPT
// src/routes/sitemap.xml/+server.js

const pages = [
  "",
  "eldshow",
  "eldshow/stora-showen",
  "eldshow/lilla-showen",
  "workshops",
  "om-oss",
  "bibliotek",
  "info-innan-bokning",
  "boka"
];

const BASE_URL = "https://vildaflammor.se";

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        const url = `${BASE_URL}/${page}`;
        return `
        <url>
          <loc>${page === "" ? BASE_URL : url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>`;
      })
      .join("")}
  </urlset>
  `;

  return new Response(body.trim(), {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
