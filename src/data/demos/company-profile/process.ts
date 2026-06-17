import type { Localized } from "@/i18n/localized";

export type ProcessStep = {
  number: string;
  title: Localized<string>;
  description: Localized<string>;
  duration: Localized<string>;
  deliverables: Localized<string[]>;
};

export const process: ProcessStep[] = [
  {
    number: "01",
    title: { id: "Konsultasi Awal", en: "Initial consultation" },
    description: {
      id: "Diskusi gratis 30–45 menit untuk memahami kondisi bisnis, tantangan utama, dan ekspektasi Anda. Tidak ada komitmen di tahap ini.",
      en: "A free 30–45 minute conversation to understand your business, main challenges, and expectations. No commitment at this stage.",
    },
    duration: { id: "30–45 menit", en: "30–45 minutes" },
    deliverables: {
      id: [
        "Pemahaman awal tentang kondisi bisnis Anda",
        "Rekomendasi 1–2 layanan yang paling relevan",
        "Estimasi timeline dan budget",
      ],
      en: [
        "Initial read on your business situation",
        "Recommendation of 1–2 most relevant services",
        "Estimated timeline and budget",
      ],
    },
  },
  {
    number: "02",
    title: { id: "Diagnosis Mendalam", en: "In-depth diagnosis" },
    description: {
      id: "Sesi 1–2 minggu untuk memetakan kondisi aktual: proses kerja, dokumen yang ada, dan pain point utama. Output: peta kondisi yang jelas.",
      en: "One to two weeks mapping how work actually runs: processes, existing documents, and priority pain points. Output: a clear current-state map.",
    },
    duration: { id: "1–2 minggu", en: "1–2 weeks" },
    deliverables: {
      id: [
        "Peta proses kerja visual",
        "Daftar pain point prioritas",
        "Rekomendasi quick wins",
      ],
      en: [
        "Visual workflow map",
        "Prioritized pain point list",
        "Quick-win recommendations",
      ],
    },
  },
  {
    number: "03",
    title: { id: "Eksekusi dan Pendampingan", en: "Execution and coaching" },
    description: {
      id: "Implementasi sesuai scope yang disepakati, dengan check-in rutin dan feedback loop. Anda tidak ditinggal sendirian di tengah eksekusi.",
      en: "Implementation within agreed scope, with regular check-ins and feedback. You are not left alone mid-execution.",
    },
    duration: {
      id: "2–8 minggu (tergantung scope)",
      en: "2–8 weeks (depending on scope)",
    },
    deliverables: {
      id: [
        "Dokumen kerja (SOP, template, dashboard)",
        "Sesi check-in mingguan",
        "Adjustments berdasarkan feedback Anda",
      ],
      en: [
        "Working documents (SOPs, templates, dashboards)",
        "Weekly check-in sessions",
        "Adjustments based on your feedback",
      ],
    },
  },
  {
    number: "04",
    title: { id: "Serah Terima dan Akses Lanjutan", en: "Handover and light support" },
    description: {
      id: "Semua deliverable diserahkan lengkap dengan panduan penggunaan. Kami tetap tersedia untuk konsultasi ringan selama 30 hari setelah serah terima.",
      en: "All deliverables are handed over with usage guides. We remain available for light consultation for 30 days after handover.",
    },
    duration: {
      id: "1 minggu + 30 hari support",
      en: "1 week + 30 days support",
    },
    deliverables: {
      id: [
        "Semua dokumen final",
        "Panduan penggunaan dan update",
        "Akses chat untuk konsultasi ringan",
      ],
      en: [
        "All final documents",
        "Usage and update guide",
        "Chat access for light consultation",
      ],
    },
  },
];