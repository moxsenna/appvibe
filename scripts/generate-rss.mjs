/**
 * Build Atom feeds for ID/EN blog → public/feed/blog-id.xml, blog-en.xml
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const SITE =
  process.env.VITE_SITE_URL?.replace(/\/$/, "") || "https://appvibe.web.id";
const APP = process.env.VITE_APP_NAME || "AppVibe Studio";
const MAX_ITEMS = 50;

function escapeXml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function loadPosts() {
  const gen = path.join(root, "src/data/blog/posts.generated.ts");
  const raw = fs.readFileSync(gen, "utf8");
  const m = raw.match(
    /export const blogPostsGenerated[^=]*=\s*(\[[\s\S]*?\])\s*as BlogPost\[\]/,
  );
  if (!m) throw new Error("Could not parse posts.generated.ts");
  return JSON.parse(m[1]);
}

function blogPath(lang, slug) {
  return lang === "en" ? `/en/blog/${slug}` : `/blog/${slug}`;
}

function feedForLang(lang, posts) {
  const filtered = posts
    .filter((p) => p.lang === lang)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, MAX_ITEMS);

  const indexPath = lang === "en" ? "/en/blog" : "/blog";
  const feedPath = lang === "en" ? "/feed/blog-en.xml" : "/feed/blog-id.xml";
  const title =
    lang === "en"
      ? `${APP} — Business insights`
      : `${APP} — Insight bisnis`;
  const subtitle =
    lang === "en"
      ? "Landing pages, WhatsApp CTAs, and digital presence for growing businesses."
      : "Landing page, WhatsApp CTA, dan digital presence untuk bisnis Indonesia.";

  const updated =
    filtered[0]?.date
      ? new Date(filtered[0].date).toISOString()
      : new Date().toISOString();

  const entries = filtered
    .map((p) => {
      const link = `${SITE}${blogPath(lang, p.slug)}`;
      const published = p.date
        ? new Date(p.date).toISOString()
        : updated;
      const summary = escapeXml(p.description);
      return `  <entry>
    <title>${escapeXml(p.title)}</title>
    <link href="${escapeXml(link)}" rel="alternate" type="text/html"/>
    <id>${escapeXml(link)}</id>
    <published>${published}</published>
    <updated>${published}</updated>
    <summary type="html">${summary}</summary>
  </entry>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(title)}</title>
  <subtitle>${escapeXml(subtitle)}</subtitle>
  <link href="${SITE}${feedPath}" rel="self" type="application/atom+xml"/>
  <link href="${SITE}${indexPath}" rel="alternate" type="text/html"/>
  <id>${SITE}${indexPath}</id>
  <updated>${updated}</updated>
  <author><name>${escapeXml(APP)}</name></author>
${entries}
</feed>
`;
}

const posts = loadPosts();
const outDir = path.join(root, "public/feed");
fs.mkdirSync(outDir, { recursive: true });

for (const lang of ["id", "en"]) {
  const xml = feedForLang(lang, posts);
  const file = lang === "en" ? "blog-en.xml" : "blog-id.xml";
  fs.writeFileSync(path.join(outDir, file), xml);
  console.log("rss:", file, "items:", posts.filter((p) => p.lang === lang).length);
}