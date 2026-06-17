import fs from "fs";

function patchPages(path, isId) {
  let s = fs.readFileSync(path, "utf8");

  if (isId) {
    s = s.replace(
      /eyebrowDark:\s*\n\s*"Website, landing page, dan dashboard untuk bisnis yang ingin terlihat lebih serius.",/,
      'eyebrowDark:\n        "Website & landing page untuk bisnis yang ingin dipercaya sejak klik pertama.",',
    );
    s = s.replace(
      /description:\s*\n\s*"AppVibe Studio membantu UMKM, bisnis jasa, edukasi, klinik, properti, dan personal brand membangun website, landing page, dan dashboard yang rapi, responsif, serta mudah dikembangkan sesuai kebutuhan bisnis.",/,
      'description:\n        "Kami bantu UMKM dan bisnis jasa punya halaman resmi yang rapi—dengan CTA WhatsApp jelas—supaya calon pelanggan lebih mudah percaya dan mulai chat.",',
    );
    s = s.replace(
      /tagline:\s*\n\s*"Mulai dari website sederhana. Bisa dikembangkan bertahap sesuai kebutuhan bisnis.",/,
      'tagline:\n        "Konsultasi awal gratis · Mulai dari satu layanan · Tanpa paksaan project besar",',
    );
    if (!s.includes("finalCta:")) {
      s = s.replace(
        /meta: \{\n      title: "AppVibe Studio — Website dan App Bisnis untuk UMKM",/,
        `finalCta: {
      title:
        "Calon pelanggan menilai bisnis dari link pertama. Siap tampil lebih meyakinkan?",
      subtitle:
        "Diskusi singkat via WhatsApp: kami bantu pilih mulai dari company profile, landing page iklan, atau dashboard leads.",
      proofPoints: [
        "Respons WA ≤ 24 jam (hari kerja)",
        "Mulai bertahap",
        "Fokus inquiry & konversi",
      ],
    },
    meta: {
      title: "AppVibe Studio — Website dan App Bisnis untuk UMKM",`,
      );
    }
  } else {
    s = s.replace(
      /eyebrowDark:\s*\n\s*"Websites, landing pages, and dashboards for businesses ready to look the part.",/,
      'eyebrowDark:\n        "Websites and landing pages built for trust from the first click.",',
    );
    s = s.replace(
      /description:\s*\n\s*"AppVibe Studio helps growing businesses across services, education, healthcare, real estate, and personal brands ship clean, responsive websites, landing pages, and dashboards built to grow with the business.",/,
      'description:\n        "We help service businesses ship a credible web presence—with clear WhatsApp CTAs—so prospects trust you faster and start a conversation.",',
    );
    s = s.replace(
      /tagline:\s*\n\s*"Start with a simple website. Grow it deliberately as the business asks for more.",/,
      'tagline:\n        "Free intro consult · Start with one deliverable · No pressure for a big build",',
    );
    if (!s.includes("finalCta:")) {
      s = s.replace(
        /meta: \{\n      title: "AppVibe Studio — Websites and Business Apps for Growing Teams",/,
        `finalCta: {
      title:
        "Prospects judge your business from the first link. Ready to look credible?",
      subtitle:
        "A short WhatsApp chat: we'll help you choose company profile, ad landing page, or a simple leads dashboard.",
      proofPoints: [
        "Weekday WA reply ≤ 24h",
        "Start lean, grow later",
        "Inquiry & conversion focused",
      ],
    },
    meta: {
      title: "AppVibe Studio — Websites and Business Apps for Growing Teams",`,
      );
    }
  }

  if (!s.includes("finalCta:")) {
    console.warn("finalCta not inserted in", path);
  }

  s = s.replace(
    /meta: LocalizedPageMeta;\n  };\n  services:/,
    `meta: LocalizedPageMeta;
    finalCta: {
      title: string;
      subtitle: string;
      proofPoints: string[];
    };
  };
  services:`,
  );

  fs.writeFileSync(path, s);
  console.log("patched", path);
}

function patchCommon(path, isId) {
  let s = fs.readFileSync(path, "utf8");
  if (isId) {
    s = s.replace(
      'consult: "Konsultasi via WhatsApp",',
      'consult: "Konsultasi gratis via WhatsApp",',
    );
    s = s.replace(
      'label: "Konsultasi Sekarang",',
      'label: "Chat konsultasi gratis",',
    );
  } else {
    s = s.replace(
      'consult: "Consult on WhatsApp",',
      'consult: "Free consult on WhatsApp",',
    );
    s = s.replace(
      'label: "Consult now",',
      'label: "Free consult on WhatsApp",',
    );
  }
  fs.writeFileSync(path, s);
  console.log("patched", path);
}

patchPages("src/i18n/locales/id/pages.ts", true);
patchPages("src/i18n/locales/en/pages.ts", false);
patchCommon("src/i18n/locales/id/common.ts", true);
patchCommon("src/i18n/locales/en/common.ts", false);