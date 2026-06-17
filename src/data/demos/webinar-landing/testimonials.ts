import type { Localized } from "@/i18n/localized";

export type Testimonial = {
  name: Localized<string>;
  role: Localized<string>;
  quote: Localized<string>;
  outcome: Localized<string>;
};

export const testimonials: Testimonial[] = [
  {
    name: { id: "Ibu Ratna", en: "Mrs. Ratna" },
    role: { id: "Orang tua siswa SMA", en: "Parent of a high-school student" },
    quote: {
      id: "Saya jadi lebih paham cara mendampingi anak memilih jalur skill. Sebelumnya selalu terasa berantem, sekarang lebih ringan karena ada kerangka diskusinya.",
      en: "I understand better how to support my child's skill choices. Conversations used to feel tense; the framework makes them lighter.",
    },
    outcome: {
      id: "Komunikasi lebih ringan dengan anak",
      en: "Easier communication with my child",
    },
  },
  {
    name: { id: "Andika, 17 tahun", en: "Andika, 17" },
    role: { id: "Siswa SMA kelas 12", en: "Grade 12 high-school student" },
    quote: {
      id: "Bahasanya mudah dimengerti dan tidak menggurui. Saya jadi punya gambaran konkret mau mulai dari mana setelah lulus nanti.",
      en: "Clear language without talking down. I have a concrete idea where to start after graduation.",
    },
    outcome: {
      id: "Punya target skill yang jelas",
      en: "A clear skill target",
    },
  },
  {
    name: { id: "Ibu Sumi", en: "Mrs. Sumi" },
    role: { id: "Orang tua fresh graduate", en: "Parent of a recent graduate" },
    quote: {
      id: "Anak saya yang baru lulus jadi lebih terbuka untuk diskusi soal rencana. Webinar ini beda dari yang lain karena membahas dari sisi orang tua juga.",
      en: "My newly graduated child is more open about plans. This webinar stands out because it speaks to parents too.",
    },
    outcome: {
      id: "Diskusi keluarga lebih terbuka",
      en: "More open family discussions",
    },
  },
  {
    name: { id: "Riko, 22 tahun", en: "Riko, 22" },
    role: { id: "Career switcher", en: "Career switcher" },
    quote: {
      id: "Saya sudah kerja 2 tahun di bidang non-digital, tapi bingung mulai dari mana untuk switch ke digital. Roadmap 90 hari-nya sangat membantu untuk action plan.",
      en: "Two years in a non-digital role—I did not know where to start switching. The 90-day roadmap became my action plan.",
    },
    outcome: {
      id: "Action plan 90 hari siap dijalankan",
      en: "A 90-day action plan ready to run",
    },
  },
];