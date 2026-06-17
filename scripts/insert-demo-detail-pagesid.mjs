import fs from "fs";

const path = "src/i18n/locales/id/pages.ts";
let s = fs.readFileSync(path, "utf8");

if (s.includes('heroSimulationSuffix: " — Demo Simulasi"')) {
  console.log("already has demoDetail data");
  process.exit(0);
}

const block = `  demoDetail: {
    heroSimulationSuffix: " — Demo Simulasi",
    viewCaseStudy: "Lihat Studi Kasus",
    openFullDemo: "Buka Demo Penuh",
    aboutEyebrow: "Tentang demo ini",
    aboutTitle: "Mock interaktif untuk niche {{niche}}",
    aboutBodyAfterSummary:
      "Shell ini menampilkan branding dan tone dari {{brand}} — calon klien bisa merasakan \\"ini website jadi\\" sebelum memutuskan untuk membangunnya.",
    liveEyebrow: "Demo penuh sudah siap dibuka",
    liveBody:
      "Semua section, interaksi (filter portfolio, modal detail, form inquiry dengan validasi, FAQ accordion), dan data spesifik industri sudah aktif. Klik tombol di bawah untuk langsung membuka pengalaman penuh.",
    comingSoonBody:
      "Konten penuh demo sedang kami selesaikan secara bertahap. Anda tetap bisa langsung konsultasi dengan AppVibe untuk melihat hasil akhir yang akan disesuaikan untuk bisnis Anda.",
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

const re = /(\n  demoIndex: \{[\s\S]*?\n  \},\r?\n)(\r?\n  industries: \{)/;
if (!re.test(s)) {
  console.error("pattern not found");
  process.exit(1);
}
s = s.replace(re, `$1\n${block}$2`);
fs.writeFileSync(path, s);
console.log("inserted");