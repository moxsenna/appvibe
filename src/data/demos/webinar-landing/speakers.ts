import type { Localized } from "@/i18n/localized";

export type Speaker = {
  initials: string;
  name: string;
  role: Localized<string>;
  bio: Localized<string>;
  expertise: Localized<string[]>;
  gradient: string;
};

export const speakers: Speaker[] = [
  {
    initials: "AP",
    name: "Alif Pratama",
    role: {
      id: "Digital Talent Mentor",
      en: "Digital Talent Mentor",
    },
    bio: {
      id: "Praktisi pelatihan skill digital yang sudah membantu 1.200+ peserta pemula memahami jalur belajar, portofolio, dan persiapan karier digital. Berpengalaman 7 tahun di industri edutech dan konten kreator.",
      en: "A digital skills trainer who has helped 1,200+ beginners map learning paths, portfolios, and career preparation. Seven years in edtech and creator industries.",
    },
    expertise: {
      id: ["Skill Digital Pemula", "Portofolio", "Career Mapping"],
      en: ["Beginner Digital Skills", "Portfolio", "Career Mapping"],
    },
    gradient: "from-violet-500 to-blue-500",
  },
  {
    initials: "DK",
    name: "Dina Kartika, S.Pd.",
    role: {
      id: "Learning Coach & Former School Counselor",
      en: "Learning Coach & Former School Counselor",
    },
    bio: {
      id: "Mantan konselor sekolah dengan 10 tahun pengalaman mendampingi siswa SMA/SMK. Sekarang fokus membantu orang tua dan anak berdiskusi tentang rencana karier dengan cara yang sehat.",
      en: "Former school counselor with ten years supporting high-school students. Now helps parents and children discuss career plans in a healthy way.",
    },
    expertise: {
      id: ["Diskusi Keluarga", "Bimbingan Karier", "Komunikasi Orang Tua-Anak"],
      en: ["Family Discussions", "Career Guidance", "Parent–Child Communication"],
    },
    gradient: "from-cyan-500 to-emerald-500",
  },
];