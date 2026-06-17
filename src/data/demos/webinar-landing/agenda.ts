import type { Localized } from "@/i18n/localized";

export type AgendaItem = {
  number: string;
  title: Localized<string>;
  description: Localized<string>;
  duration: Localized<string>;
  type: "session" | "qna" | "break";
};

export const agenda: AgendaItem[] = [
  {
    number: "01",
    title: {
      id: "Kenapa banyak remaja bingung arah setelah lulus",
      en: "Why many teens feel lost after graduation",
    },
    description: {
      id: "Membuka webinar dengan diskusi real tentang kenapa pilihan skill terasa overwhelming, dan apa yang sebenarnya dibutuhkan di tahap awal.",
      en: "Opening with an honest look at why skill choices feel overwhelming and what matters at the start.",
    },
    duration: { id: "15 menit", en: "15 min" },
    type: "session",
  },
  {
    number: "02",
    title: {
      id: "Peta skill digital untuk pemula",
      en: "Beginner digital skills map",
    },
    description: {
      id: "Gambaran 6–8 skill digital pemula yang paling relevan: apa yang dipelajari, ekspektasi waktu, dan jalur karier yang realistis.",
      en: "Six to eight relevant beginner skills—what to learn, time expectations, and realistic career paths.",
    },
    duration: { id: "20 menit", en: "20 min" },
    type: "session",
  },
  {
    number: "03",
    title: {
      id: "Pentingnya portofolio sejak hari pertama",
      en: "Why portfolios matter from day one",
    },
    description: {
      id: "Membongkar kenapa portofolio lebih penting dari sertifikat, dan contoh portofolio sederhana yang bisa dibuat dalam 30–60 hari.",
      en: "Why portfolios often beat certificates alone, with simple examples you can build in 30–60 days.",
    },
    duration: { id: "20 menit", en: "20 min" },
    type: "session",
  },
  {
    number: "04",
    title: {
      id: "Cara orang tua mendampingi tanpa memaksa",
      en: "How parents guide without pushing",
    },
    description: {
      id: "Template dan framework untuk berdiskusi dengan anak tentang rencana belajar, lengkap dengan pertanyaan pemantik yang ringan.",
      en: "Templates and light starter questions for discussing learning plans with your child.",
    },
    duration: { id: "15 menit", en: "15 min" },
    type: "session",
  },
  {
    number: "05",
    title: {
      id: "Roadmap 90 hari kesiapan kerja",
      en: "90-day job-readiness roadmap",
    },
    description: {
      id: "Garis besar roadmap 90 hari yang bisa langsung dijalankan: dari pilih skill, belajar, buat portofolio, sampai siap apply kerja.",
      en: "A runnable 90-day outline—from choosing a skill to portfolio and applying for work.",
    },
    duration: { id: "20 menit", en: "20 min" },
    type: "session",
  },
  {
    number: "06",
    title: {
      id: "Sesi Q&A terbuka",
      en: "Open Q&A",
    },
    description: {
      id: "Waktu untuk bertanya langsung ke pembicara. Topik: skill spesifik, platform belajar, cara memulai, atau diskusi keluarga.",
      en: "Ask the speakers directly—specific skills, platforms, getting started, or family discussions.",
    },
    duration: { id: "30 menit", en: "30 min" },
    type: "qna",
  },
];