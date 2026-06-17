import type { Localized } from "@/i18n/localized";

export type Testimonial = {
  id: string;
  name: string;
  role: Localized<string>;
  quote: Localized<string>;
  outcome: Localized<string>;
};

export const testimonials: Testimonial[] = [
  {
    id: "budi-s",
    name: "Budi S.",
    role: {
      id: "Calon pembeli rumah",
      en: "Prospective home buyer",
    },
    quote: {
      id: "Sebelum survei, saya sudah bisa lihat unit, harga, dan fasilitas di website. Jadi saat kunjungan, saya tinggal verifikasi dan tidak buang waktu tanya hal dasar.",
      en: "Before the visit, I could already see the unit, pricing, and amenities on the website. The tour was about verification, not repeating basic questions.",
    },
    outcome: {
      id: "Survei lebih fokus, tidak bolak-balik tanya",
      en: "More focused visits, fewer back-and-forth questions",
    },
  },
  {
    id: "rina-w",
    name: "Rina W.",
    role: {
      id: "Calon pembeli ruko",
      en: "Prospective shophouse buyer",
    },
    quote: {
      id: "Galeri visual dan spec grid-nya membantu saya membandingkan 3 ruko dalam 15 menit. Biasanya saya harus buka-buka PDF dari 3 agen berbeda.",
      en: "The visual gallery and spec grid let me compare three shophouses in fifteen minutes. Usually I would open PDFs from three different agents.",
    },
    outcome: {
      id: "Keputusan lebih cepat dan terstruktur",
      en: "Faster, more structured decisions",
    },
  },
  {
    id: "eko-p",
    name: "Eko P.",
    role: {
      id: "Investor kavling",
      en: "Land-plot investor",
    },
    quote: {
      id: "Form inquiry singkat dengan field unit pilihan dan jadwal kunjungan — admin tidak perlu klarifikasi dari awal. Mereka langsung tahu saya mau lihat kavling yang mana.",
      en: "The short inquiry form captured my unit choice and visit timing — the team did not need to clarify from scratch. They knew which plot I wanted to see.",
    },
    outcome: {
      id: "Respons admin lebih cepat, lebih siap",
      en: "Faster, better-prepared admin responses",
    },
  },
  {
    id: "maya-l",
    name: "Maya L.",
    role: {
      id: "Calon pengguna jasa renovasi",
      en: "Prospective renovation client",
    },
    quote: {
      id: "Website membuat project renovasi terlihat lebih serius. Saya bisa share link ke suami dan dia langsung paham scope dan contoh kerja tanpa harus datang ke kantor.",
      en: "The website made the renovation project feel more credible. I shared the link with my spouse and they understood scope and sample work without visiting the office.",
    },
    outcome: {
      id: "Diskusi keluarga lebih ringan",
      en: "Easier family alignment",
    },
  },
];