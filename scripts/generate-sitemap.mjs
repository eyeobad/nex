import { writeFileSync } from "node:fs"
import { resolve } from "node:path"

const siteUrl = "https://nexdigitals.agency"

const today = new Date().toISOString().split("T")[0]

const pages = [
  { path: "/", changefreq: "monthly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/services", changefreq: "monthly", priority: "0.9" },
  { path: "/services/branding", changefreq: "monthly", priority: "0.8" },
  { path: "/services/web", changefreq: "monthly", priority: "0.8" },
  { path: "/services/seo", changefreq: "monthly", priority: "0.85" },
  { path: "/services/lead", changefreq: "monthly", priority: "0.8" },
  { path: "/services/automation", changefreq: "monthly", priority: "0.75" },
  { path: "/services/analytics", changefreq: "monthly", priority: "0.75" },
  { path: "/process", changefreq: "monthly", priority: "0.7" },
  { path: "/quote", changefreq: "yearly", priority: "0.6" },
  { path: "/blog", changefreq: "weekly", priority: "0.7" },
  { path: "/blog/digital-marketing-for-ecommerce-businesses", changefreq: "weekly", priority: "0.65" },
  { path: "/privacy", changefreq: "yearly", priority: "0.4" },
  { path: "/terms", changefreq: "yearly", priority: "0.4" },
]

const urlSet = pages
  .map(({ path, changefreq, priority }) => {
    const loc = new URL(path, siteUrl).href
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  })
  .join("\n")

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlSet}\n</urlset>\n`

const outputPath = resolve(process.cwd(), "public", "sitemap.xml")
writeFileSync(outputPath, sitemap)

console.log(`Sitemap generated at ${outputPath} with ${pages.length} URLs on ${today}`)
