import type { Localized } from "@/i18n/localized";

export type Bonus = {
  title: Localized<string>;
  description: Localized<string>;
  format: Localized<string>;
  highlight?: Localized<string>;
};

export const bonuses: Bonus[] = [
  {
    title: {
      id: "Checklist Minat Skill Digital",
      en: "Digital Skills Interest Checklist",
    },
    description: {
      id: "PDF 8 halaman dengan 30+ pertanyaan untuk menggali minat dan kecenderungan skill yang cocok — bisa dipakai orang tua dan anak bersama.",
      en: "An 8-page PDF with 30+ questions to explore interests and suitable skills—for parents and children together.",
    },
    format: { id: "PDF · 8 halaman", en: "PDF · 8 pages" },
    highlight: { id: "Bisa langsung dipakai", en: "Ready to use" },
  },
  {
    title: {
      id: "Template Roadmap Belajar 30 Hari",
      en: "30-Day Learning Roadmap Template",
    },
    description: {
      id: "Template terstruktur untuk 30 hari pertama belajar skill digital pilihan Anda. Termasuk target mingguan, resource, dan cara tracking progress.",
      en: "A structured template for your first 30 days—weekly targets, resources, and progress tracking.",
    },
    format: { id: "Notion / Google Sheet", en: "Notion / Google Sheet" },
  },
  {
    title: {
      id: "Panduan Diskusi Orang Tua dan Anak",
      en: "Parent–Child Discussion Guide",
    },
    description: {
      id: "PDF dengan 20 pertanyaan pemantik dan tips komunikasi untuk orang tua yang ingin berdiskusi tanpa membuat anak merasa dipaksa.",
      en: "A PDF with 20 conversation starters and communication tips so discussions feel supportive, not forced.",
    },
    format: { id: "PDF · 12 halaman", en: "PDF · 12 pages" },
    highlight: { id: "Worth it untuk orang tua", en: "Especially for parents" },
  },
  {
    title: {
      id: "Daftar Platform Belajar Terkurasi",
      en: "Curated Learning Platform List",
    },
    description: {
      id: "Rekomendasi 25+ platform dan resource belajar gratis atau terjangkau untuk skill digital pemula di Indonesia, dikurasi oleh tim.",
      en: "25+ free or affordable platforms for beginner digital skills in Indonesia, curated by our team.",
    },
    format: { id: "Spreadsheet / Notion", en: "Spreadsheet / Notion" },
  },
];