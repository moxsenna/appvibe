import type { Localized } from "@/i18n/localized";

export type WhyUsItem = {
  title: Localized<string>;
  description: Localized<string>;
};

export const whyUs: WhyUsItem[] = [
  {
    title: {
      id: "Visual dan informasi yang konsisten",
      en: "Consistent visuals and information",
    },
    description: {
      id: "Setiap listing punya foto, spesifikasi, dan status yang seragam — calon pembeli tidak perlu membandingkan dokumen yang berbeda format.",
      en: "Every listing uses the same photo layout, specifications, and status format — buyers are not juggling documents in different formats.",
    },
  },
  {
    title: {
      id: "Detail unit yang lengkap dan jujur",
      en: "Complete, upfront unit details",
    },
    description: {
      id: "Luas, kamar, harga, dan status tersedia di satu tempat. Tidak ada info yang disembunyikan — yang belum tersedia akan kami sampaikan terus terang.",
      en: "Area, bedrooms, pricing, and availability live in one place. Nothing is hidden — if a unit is not available, we say so clearly.",
    },
  },
  {
    title: {
      id: "Inquiry terarah via WhatsApp",
      en: "Structured WhatsApp inquiries",
    },
    description: {
      id: "Form survei 7 field yang sudah terstruktur: nama, unit pilihan, jadwal kunjungan, dan kebutuhan — admin tidak perlu klarifikasi dari awal.",
      en: "A structured seven-field visit form: name, preferred unit, visit timing, and intent — so the team does not start from zero on every chat.",
    },
  },
  {
    title: {
      id: "Satu link resmi untuk iklan dan share",
      en: "One official link for ads and sharing",
    },
    description: {
      id: "Listing yang sama bisa dishare di Instagram, iklan Meta, dan broadcast WhatsApp — calon pembeli langsung melihat detail unit, bukan cuma nomor kontak.",
      en: "The same listing link works for Instagram, Meta ads, and WhatsApp broadcasts — prospects see unit details, not only a phone number.",
    },
  },
];