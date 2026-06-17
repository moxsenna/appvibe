import fs from "fs";

function patchId() {
  let s = fs.readFileSync("src/i18n/locales/id/pages.ts", "utf8");
  s = s.replace(
    /blog: \{\s*hero: \{\s*eyebrow: "Engineering",[\s\S]*?backToIndex: "Kembali ke blog",\s*\},/,
    `blog: {
    hero: {
      eyebrow: "Insight bisnis",
      title: "Tips website, landing page, dan konversi",
      description:
        "Panduan singkat untuk UMKM dan bisnis jasa — fokus pada kepercayaan calon pelanggan, CTA WhatsApp, dan halaman yang enak dibaca.",
    },
    meta: {
      title: "Blog | AppVibe Studio",
      description:
        "Artikel tentang landing page, WhatsApp CTA, dan digital presence untuk bisnis Indonesia.",
    },
    empty: "Belum ada artikel dalam bahasa ini.",
    backToIndex: "Kembali ke blog",
    readArticle: "Baca artikel",
    articleCta: {
      title: "Mau halaman seperti ini untuk bisnis Anda?",
      subtitle:
        "Konsultasi gratis via WhatsApp — kami bantu susun landing page atau company profile yang rapi.",
    },
  },`,
  );
  s = s.replace(
    /blog: \{\s*hero: LocalizedHero;\s*meta: LocalizedPageMeta;\s*empty: string;\s*backToIndex: string;\s*\};/,
    `blog: {
    hero: LocalizedHero;
    meta: LocalizedPageMeta;
    empty: string;
    backToIndex: string;
    readArticle: string;
    articleCta: { title: string; subtitle: string };
  };`,
  );
  fs.writeFileSync("src/i18n/locales/id/pages.ts", s);
}

function patchEn() {
  let s = fs.readFileSync("src/i18n/locales/en/pages.ts", "utf8");
  s = s.replace(
    /blog: \{\s*hero: \{[\s\S]*?backToIndex: "[^"]+",\s*\},/,
    `blog: {
    hero: {
      eyebrow: "Business insights",
      title: "Websites, landing pages & conversion tips",
      description:
        "Short guides for service businesses — trust, WhatsApp CTAs, and pages that are pleasant to read.",
    },
    meta: {
      title: "Blog | AppVibe Studio",
      description:
        "Articles on landing pages, WhatsApp CTAs, and digital presence for growing teams.",
    },
    empty: "No articles in this language yet.",
    backToIndex: "Back to blog",
    readArticle: "Read article",
    articleCta: {
      title: "Want a page like this for your business?",
      subtitle:
        "Free consult on WhatsApp — we'll help you shape a credible landing page or company profile.",
    },
  },`,
  );
  fs.writeFileSync("src/i18n/locales/en/pages.ts", s);
}

patchId();
patchEn();
console.log("blog copy patched");