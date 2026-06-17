import fs from "fs";

const idPath = "src/i18n/locales/id/pages.ts";
const enPath = "src/i18n/locales/en/pages.ts";

const idProblem = `    problemSection: {
      eyebrow: "Kenapa ini penting",
      title:
        "Bisnis yang bagus tetap bisa terlihat kurang serius kalau tampilan digitalnya belum rapi.",
      intro:
        "Calon pelanggan sering menilai bisnis dari link pertama yang mereka buka. Kalau informasi layanan tercecer, hanya mengandalkan chat manual, atau belum punya halaman resmi, peluang kepercayaan bisa hilang sebelum percakapan dimulai.",
      items: [
        {
          num: "01",
          title: "Belum punya halaman resmi",
          description:
            "Calon pelanggan tidak menemukan tempat yang rapi untuk memahami layanan, produk, harga, dan cara menghubungi Anda.",
        },
        {
          num: "02",
          title: "Terlalu bergantung pada chat manual",
          description:
            "Pertanyaan yang sama terus berulang karena informasi penting belum disusun dalam halaman yang jelas.",
        },
        {
          num: "03",
          title: "Portfolio dan testimoni tidak tertata",
          description:
            "Bukti kerja, galeri, review, dan studi kasus belum disajikan dengan cara yang meyakinkan.",
        },
        {
          num: "04",
          title: "Leads sulit dilacak",
          description:
            "Calon pelanggan datang dari banyak sumber, tetapi belum ada form, status, atau dashboard sederhana untuk mengelolanya.",
        },
        {
          num: "05",
          title: "Iklan tidak punya landing page yang kuat",
          description:
            "Traffic dari iklan atau promosi bisa terbuang jika halaman tujuan tidak fokus pada satu aksi yang jelas.",
        },
      ],
    },
    solutionSection: {
      eyebrow: "Solusi AppVibe",
      title:
        "Kami bukan hanya membuat tampilan. Kami membangun alur digital yang membantu bisnis Anda terlihat siap.",
      intro:
        "Setiap website atau app ringan kami susun dari tiga hal: pesan yang jelas, tampilan yang profesional, dan aksi yang mudah dilakukan pengunjung.",
      pillars: [
        {
          title: "Digital presence",
          description:
            "Website company profile, halaman layanan, galeri, testimoni, dan CTA yang membuat bisnis terlihat lebih kredibel.",
        },
        {
          title: "Conversion page",
          description:
            "Landing page untuk webinar, campaign, produk, atau jasa dengan struktur copy dan CTA yang fokus menghasilkan inquiry.",
        },
        {
          title: "Business workflow",
          description:
            "Form, WhatsApp redirect, dashboard leads, booking, payment, dan automation ringan agar proses bisnis lebih tertata.",
        },
        {
          title: "Scalable foundation",
          description:
            "Mulai dari static website cepat, lalu bisa dikembangkan bertahap ke database, admin panel, dan fitur AI sesuai kebutuhan.",
        },
      ],
    },
`;

const enProblem = `    problemSection: {
      eyebrow: "Why this matters",
      title:
        "A strong business can still look less credible when its digital presence is not polished.",
      intro:
        "Prospects often judge a business from the first link they open. Scattered service information, reliance on manual chat alone, or no official page can erode trust before a conversation even starts.",
      items: [
        {
          num: "01",
          title: "No official web presence",
          description:
            "Prospects cannot find one clear place to understand your services, pricing, and how to reach you.",
        },
        {
          num: "02",
          title: "Over-reliance on manual chat",
          description:
            "The same questions keep coming back because key information is not organized on clear pages.",
        },
        {
          num: "03",
          title: "Portfolio and proof are scattered",
          description:
            "Work samples, galleries, reviews, and case studies are not presented in a convincing structure.",
        },
        {
          num: "04",
          title: "Leads are hard to track",
          description:
            "Inquiries arrive from many channels, but there is no form, status, or simple dashboard to manage them.",
        },
        {
          num: "05",
          title: "Ads lack a focused landing page",
          description:
            "Paid traffic is wasted when the destination page does not drive one clear action.",
        },
      ],
    },
    solutionSection: {
      eyebrow: "The AppVibe approach",
      title:
        "We do more than design screens. We build digital flows that help your business look ready to serve.",
      intro:
        "Every website or lightweight app we ship balances three things: clear messaging, professional presentation, and actions visitors can take easily.",
      pillars: [
        {
          title: "Digital presence",
          description:
            "Company profile sites, service pages, galleries, testimonials, and CTAs that make your business look more credible.",
        },
        {
          title: "Conversion page",
          description:
            "Landing pages for webinars, campaigns, products, or services with copy and CTAs focused on generating inquiries.",
        },
        {
          title: "Business workflow",
          description:
            "Forms, WhatsApp handoff, lead dashboards, booking, payments, and light automation so operations stay organized.",
        },
        {
          title: "Scalable foundation",
          description:
            "Start with a fast static site, then grow step by step into databases, admin panels, and AI features as you need them.",
        },
      ],
    },
`;

const typeBlock = `    problemSection: {
      eyebrow: string;
      title: string;
      intro: string;
      items: { num: string; title: string; description: string }[];
    };
    solutionSection: {
      eyebrow: string;
      title: string;
      intro: string;
      pillars: { title: string; description: string }[];
    };
`;

function insertAfterFeaturedPortfolio(s, block) {
  if (s.includes("problemSection:")) return s;
  return s.replace(
    /(viewAll: "[^"]+",\r?\n    \},\r?\n)(    meta: \{\r?\n      title: "AppVibe Studio)/,
    `$1${block}$2`,
  );
}

let id = fs.readFileSync(idPath, "utf8");
id = insertAfterFeaturedPortfolio(id, idProblem);
if (!id.includes("problemSection: {")) {
  console.error("id insert failed");
  process.exit(1);
}
id = id.replace(
  /(featuredPortfolio: \{\r?\n      eyebrow: string;[\s\S]*?viewAll: string;\r?\n    \};\r?\n)(    faq:)/,
  `$1${typeBlock}    faq:`,
);
if (!id.includes("problemSection: {\n      eyebrow: string")) {
  id = id.replace(
    /(featuredPortfolio: \{\r?\n      eyebrow: string;[\s\S]*?viewAll: string;\r?\n    \};\r?\n)(    meta: LocalizedPageMeta;)/,
    `$1${typeBlock}    meta: LocalizedPageMeta;`,
  );
}
fs.writeFileSync(idPath, id);

let en = fs.readFileSync(enPath, "utf8");
en = insertAfterFeaturedPortfolio(en, enProblem);
fs.writeFileSync(enPath, en);
console.log("dict patched");