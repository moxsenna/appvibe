import type { Localized } from "@/i18n/localized";

export type Benefit = {
  title: Localized<string>;
  description: Localized<string>;
  bringHome: Localized<string>;
};

export const benefits: Benefit[] = [
  {
    title: {
      id: "Peta skill digital untuk pemula",
      en: "Beginner digital skills map",
    },
    description: {
      id: "Pemahaman singkat tentang 6–8 skill digital pemula yang paling relevan untuk tahap belajar awal, lengkap dengan ekspektasi waktu dan jalur karier.",
      en: "A concise view of six to eight beginner digital skills—time expectations and realistic career paths included.",
    },
    bringHome: {
      id: "Tidak lagi bingung 'mulai dari mana'",
      en: "Clarity on where to start",
    },
  },
  {
    title: {
      id: "Ide portofolio pertama",
      en: "First portfolio ideas",
    },
    description: {
      id: "Contoh portofolio sederhana yang bisa dibuat dalam 30–60 hari, bahkan untuk yang baru mulai belajar. Plus tips bagaimana cara menyusunnya.",
      en: "Simple portfolio examples you can build in 30–60 days as a beginner, plus how to structure them.",
    },
    bringHome: {
      id: "Punya contoh konkret yang bisa ditiru",
      en: "Concrete examples to follow",
    },
  },
  {
    title: {
      id: "Kerangka diskusi keluarga",
      en: "Family conversation framework",
    },
    description: {
      id: "Template dan pertanyaan pemantik untuk orang tua dan anak berdiskusi tentang rencana belajar dan karier, tanpa terasa memaksa.",
      en: "Templates and starter questions for parents and children to discuss learning and careers without pressure.",
    },
    bringHome: {
      id: "Diskusi lebih ringan, tidak saling menyalahkan",
      en: "Lighter conversations, less blame",
    },
  },
  {
    title: {
      id: "Daftar platform belajar terkurasi",
      en: "Curated learning platforms",
    },
    description: {
      id: "Rekomendasi platform dan resource belajar yang gratis atau terjangkau, sudah dikurasi untuk level pemula Indonesia.",
      en: "Free or affordable platforms curated for beginners in Indonesia.",
    },
    bringHome: {
      id: "Hemat waktu cari resource, langsung mulai",
      en: "Less time searching, faster start",
    },
  },
  {
    title: {
      id: "Roadmap 90 hari persiapan kerja",
      en: "90-day job-readiness roadmap",
    },
    description: {
      id: "Garis besar roadmap 90 hari untuk membangun kesiapan kerja digital, dari belajar skill sampai portofolio dan CV.",
      en: "A 90-day outline from learning skills to portfolio and CV for digital job readiness.",
    },
    bringHome: {
      id: "Ada target realistis yang bisa dicapai",
      en: "Realistic milestones you can hit",
    },
  },
  {
    title: {
      id: "Akses komunitas alumni",
      en: "Alumni community access",
    },
    description: {
      id: "Kesempatan untuk bergabung dengan komunitas alumni webinar (WhatsApp group) untuk diskusi lanjutan dan update info.",
      en: "Optional alumni WhatsApp community for follow-up discussion and updates.",
    },
    bringHome: {
      id: "Tidak merasa sendirian dalam proses",
      en: "You are not alone in the process",
    },
  },
];