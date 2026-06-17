import type { Localized } from "@/i18n/localized";

export type WhyUsItem = {
  title: Localized<string>;
  description: Localized<string>;
};

export const whyUs: WhyUsItem[] = [
  {
    title: {
      id: "Pendekatan terukur, bukan teoritis",
      en: "Measured approach, not theory-only",
    },
    description: {
      id: "Setiap rekomendasi berdasarkan observasi langsung dan data yang ada di bisnis Anda. Tidak ada saran 'best practice' generik yang tidak applicable.",
      en: "Every recommendation is grounded in direct observation and your existing data — no generic best practices that do not fit your business.",
    },
  },
  {
    title: {
      id: "Fokus UMKM dan bisnis lokal",
      en: "Focused on SMBs and local businesses",
    },
    description: {
      id: "Kami paham bahwa bisnis kecil butuh solusi yang realistic — bukan konsultasi 6 bulan dengan budget enterprise. Scope, timeline, dan harga disesuaikan dengan skala Anda.",
      en: "Small businesses need realistic solutions — not six-month enterprise engagements. Scope, timeline, and pricing match your scale.",
    },
  },
  {
    title: {
      id: "Copy dan komunikasi tanpa jargon",
      en: "Clear copy without jargon",
    },
    description: {
      id: "Semua deliverables (SOP, template, dashboard) ditulis dengan bahasa yang tim Anda benar-benar bisa pakai. Tidak ada dokumen tebal yang hanya jadi pajangan di rak.",
      en: "Deliverables (SOPs, templates, dashboards) are written in language your team will actually use — not thick documents that sit on a shelf.",
    },
  },
  {
    title: {
      id: "Struktur modular, mudah dikembangkan",
      en: "Modular structure, easy to extend",
    },
    description: {
      id: "Output yang kami buat tidak mengunci Anda ke satu cara kerja. Tambah layanan, ganti proses, atau ubah tools di kemudian hari — semua tetap fleksibel.",
      en: "What we build does not lock you into one way of working. Add services, change processes, or swap tools later — everything stays flexible.",
    },
  },
];