import type { Localized } from "@/i18n/localized";

export type Persona = {
  title: Localized<string>;
  description: Localized<string>;
};

export const whoIsThisFor: Persona[] = [
  {
    title: {
      id: "Orang tua yang anaknya lulus SMA/SMK tahun ini",
      en: "Parents whose child graduates high school or vocational school this year",
    },
    description: {
      id: "Ingin memahami pilihan skill digital yang relevan dan cara mendampingi anak mengambil keputusan tanpa memaksa.",
      en: "You want relevant digital skill options and ways to support decisions without pressure.",
    },
  },
  {
    title: {
      id: "Siswa SMA/SMK yang bingung setelah lulus",
      en: "High-school or vocational students unsure after graduation",
    },
    description: {
      id: "Ingin tahu skill apa yang cocok untuk dipelajari, bagaimana memulainya, dan seperti apa jalur karier digital di Indonesia.",
      en: "You want to know which skills to learn, how to start, and what digital careers look like in Indonesia.",
    },
  },
  {
    title: {
      id: "Mahasiswa atau fresh graduate",
      en: "University students or fresh graduates",
    },
    description: {
      id: "Sudah lulus tapi masih mencari arah, atau ingin meninjau ulang skill yang dipelajari agar lebih relevan dengan dunia kerja digital.",
      en: "You graduated but still need direction—or want to realign skills with digital work.",
    },
  },
  {
    title: {
      id: "Anak muda yang ingin switch karier",
      en: "Young professionals planning a career switch",
    },
    description: {
      id: "Sudah bekerja di bidang non-digital, tapi ingin transisi ke skill digital. Butuh gambaran realistis dan roadmap yang jelas.",
      en: "You work outside digital today but want a realistic path and clear roadmap into digital roles.",
    },
  },
];