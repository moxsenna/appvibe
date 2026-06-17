import fs from "fs";

const idPath = "src/i18n/locales/id/pages.ts";
const enPath = "src/i18n/locales/en/pages.ts";

const idBlock = `
  demoDetail: {
    heroSimulationSuffix: " — Demo Simulasi",
    viewCaseStudy: "Lihat Studi Kasus",
    openFullDemo: "Buka Demo Penuh",
    aboutEyebrow: "Tentang demo ini",
    aboutTitle: "Mock interaktif untuk niche {{niche}}",
    aboutBodyAfterSummary:
      "Shell ini menampilkan branding dan tone dari {{brand}} — calon klien bisa merasakan \"ini website jadi\" sebelum memutuskan untuk membangunnya.",
    liveEyebrow: "Demo penuh sudah siap dibuka",
    liveBody:
      "Semua section, interaksi (filter portfolio, modal detail, form inquiry dengan validasi, FAQ accordion), dan data spesifik industri sudah aktif. Klik tombol di bawah untuk langsung membuka pengalaman penuh.",
    comingSoonBody:
      "Konten penuh demo (semua section, form interaktif, dan data spesifik per industri) sedang kami selesaikan secara bertahap. Anda tetap bisa langsung konsultasi dengan AppVibe untuk melihat hasil akhir yang akan disesuaikan untuk bisnis Anda.",
    asideNowEyebrow: "Yang tersedia sekarang",
    asideNowVisual: "Visual tone, palette warna, dan tone copy {{brand}}",
    asideNowCaseStudy: "Studi kasus AppVibe yang menjelaskan logika di balik demo",
    asideNowCta: "CTA konsultasi langsung dengan konteks demo ini",
    asideSoonEyebrow: "Yang akan datang",
    asideSoonBody:
      "Section lengkap, form inquiry, dan mock data realistis sesuai blueprint demo per industri.",
    finalEyebrow: "Lihat studi kasus",
    finalTitle: "Pelajari logika di balik demo {{brand}}",
    finalBody:
      "Studi kasus menjelaskan masalah bisnis, solusi, fitur, dan nilai yang akan Anda dapatkan — selaras dengan demo interaktif ini.",
    openCaseStudy: "Buka Studi Kasus",
    consultWhatsapp: "Konsultasi via WhatsApp",
    backToDemos: "Kembali ke semua demo",
  },
`;

const enBlock = `
  demoDetail: {
    heroSimulationSuffix: " — Simulated Demo",
    viewCaseStudy: "View Case Study",
    openFullDemo: "Open Full Demo",
    aboutEyebrow: "About this demo",
    aboutTitle: "Interactive mock for the {{niche}} niche",
    aboutBodyAfterSummary:
      "This shell shows the branding and tone of {{brand}} — prospects can feel what the finished site is like before they decide to build it.",
    liveEyebrow: "Full demo is ready to explore",
    liveBody:
      "Every section and interaction is live — portfolio filters, detail modals, validated inquiry forms, FAQ accordions, and industry-specific data. Use the button below to open the full experience.",
    comingSoonBody:
      "Full demo content (all sections, interactive forms, and industry mock data) is rolling out in phases. You can still consult with AppVibe now to see what we would tailor for your business.",
    asideNowEyebrow: "Available now",
    asideNowVisual: "Visual tone, color palette, and copy voice for {{brand}}",
    asideNowCaseStudy: "AppVibe case study explaining the logic behind this demo",
    asideNowCta: "Consultation CTA with this demo as context",
    asideSoonEyebrow: "Coming next",
    asideSoonBody:
      "Full sections, inquiry forms, and realistic mock data per industry blueprint.",
    finalEyebrow: "Case study",
    finalTitle: "Understand the thinking behind the {{brand}} demo",
    finalBody:
      "The case study covers the business problem, solution, features, and value — aligned with this interactive demo.",
    openCaseStudy: "Open Case Study",
    consultWhatsapp: "Consult on WhatsApp",
    backToDemos: "Back to all demos",
  },
`;

let id = fs.readFileSync(idPath, "utf8");
if (!id.includes("demoDetail:")) {
  id = id.replace(
    /(\s+filter: \{\r?\n[\s\S]*?resultCount:[^\n]+\r?\n\s+\},\r?\n)(\s+industries:)/,
    `$1${idBlock}$2`,
  );
  id = id.replace(
    /demoIndex: \{\r?\n    hero: LocalizedHero;\r?\n    meta: LocalizedPageMeta;\r?\n    filter: \{[^}]+\};\r?\n  \};/,
    `demoIndex: {
    hero: LocalizedHero;
    meta: LocalizedPageMeta;
    filter: {
      searchPlaceholder: string;
      searchAriaLabel: string;
      resultCount: string;
    };
  };
  demoDetail: {
    heroSimulationSuffix: string;
    viewCaseStudy: string;
    openFullDemo: string;
    aboutEyebrow: string;
    aboutTitle: string;
    aboutBodyAfterSummary: string;
    liveEyebrow: string;
    liveBody: string;
    comingSoonBody: string;
    asideNowEyebrow: string;
    asideNowVisual: string;
    asideNowCaseStudy: string;
    asideNowCta: string;
    asideSoonEyebrow: string;
    asideSoonBody: string;
    finalEyebrow: string;
    finalTitle: string;
    finalBody: string;
    openCaseStudy: string;
    consultWhatsapp: string;
    backToDemos: string;
  };`,
  );
  fs.writeFileSync(idPath, id);
}

let en = fs.readFileSync(enPath, "utf8");
if (!en.includes("demoDetail:")) {
  en = en.replace(
    /(\s+filter: \{\r?\n[\s\S]*?resultCount:[^\n]+\r?\n\s+\},\r?\n)(\s+industries:)/,
    `$1${enBlock}$2`,
  );
  fs.writeFileSync(enPath, en);
}

console.log("dict", id.includes("demoDetail"), en.includes("demoDetail"));