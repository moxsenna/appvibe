import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const sitemapPath = path.join(root, "scripts/generate-sitemap.mjs");
let s = fs.readFileSync(sitemapPath, "utf8");

if (s.includes("loadBlogTags")) {
  console.log("sitemap tags already patched");
  process.exit(0);
}

const insert = `
function loadBlogTags() {
  const gen = path.join(root, "src/data/blog/posts.generated.ts");
  if (!fs.existsSync(gen)) return { id: [], en: [] };
  const raw = fs.readFileSync(gen, "utf8");
  const m = raw.match(
    /export const blogPostsGenerated[^=]*=\\s*(\\[[\\s\\S]*?\\])\\s*as BlogPost\\[\\]/,
  );
  if (!m) return { id: [], en: [] };
  const posts = JSON.parse(m[1]);
  const byLang = { id: new Set(), en: new Set() };
  for (const p of posts) {
    if (p.lang === "id" || p.lang === "en") {
      for (const t of p.tags ?? []) byLang[p.lang].add(t);
    }
  }
  return {
    id: [...byLang.id].sort(),
    en: [...byLang.en].sort(),
  };
}
`;

s = s.replace(
  "function loadBlogSlugs() {",
  insert + "\nfunction loadBlogSlugs() {",
);

const loop = `
const blogTags = loadBlogTags();
for (const tag of blogTags.id) {
  const q = encodeURIComponent(tag);
  blocks.push(
    urlBlock(
      \`\${SITE}/blog?tag=\${q}\`,
      \`/blog?tag=\${q}\`,
      \`/en/blog?tag=\${q}\`,
      "weekly",
      "0.55",
    ),
  );
}
`;

s = s.replace(
  "console.log(\"wrote\", out, \"urls:\", blocks.length);",
  loop + '\nconsole.log("wrote", out, "urls:", blocks.length);',
);

fs.writeFileSync(sitemapPath, s);
console.log("patched generate-sitemap.mjs");