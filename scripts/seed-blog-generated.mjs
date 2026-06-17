/**
 * Fallback when npm deps missing — mirrors content/blog only (business-focused).
 */
import fs from "fs";

const OUT = "src/data/blog/posts.generated.ts";

const seed = [
  {
    slug: "landing-page-whatsapp-cta",
    lang: "id",
    title: "Landing page + WhatsApp: CTA yang benar-benar menghasilkan chat",
    description:
      "Struktur halaman, copy tombol, dan pesan WA pertama — pola yang kami pakai untuk UMKM dan bisnis jasa.",
    date: "2026-06-18",
    tags: ["konversi", "landing-page", "whatsapp"],
    ogImage: "/og/blog/landing-page-whatsapp-cta-id.svg",
    html: "<p>Artikel lengkap — jalankan <code>npm run blog:build</code> setelah <code>npm install</code>.</p>",
  },
  {
    slug: "landing-page-whatsapp-cta",
    lang: "en",
    title: "Landing pages + WhatsApp: CTAs that actually start conversations",
    description:
      "Page structure, button copy, and the first WhatsApp message — patterns we use for service businesses.",
    date: "2026-06-18",
    tags: ["conversion", "landing-page", "whatsapp"],
    ogImage: "/og/blog/landing-page-whatsapp-cta-en.svg",
    html: "<p>Full article — run <code>npm run blog:build</code> after <code>npm install</code>.</p>",
  },
];

fs.writeFileSync(
  OUT,
  `/* AUTO-GENERATED — run scripts/build-blog.mjs */
import type { BlogPost } from "@/types/blog";

export const blogPostsGenerated: BlogPost[] = ${JSON.stringify(seed, null, 2)} as BlogPost[];
`,
);
console.log("seeded", seed.length, "posts");