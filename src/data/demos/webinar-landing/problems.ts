import type { Localized } from "@/i18n/localized";

export type Problem = {
  title: Localized<string>;
  description: Localized<string>;
};

export const problems: Problem[] = [
  {
    title: {
      id: "Terlalu banyak pilihan skill digital",
      en: "Too many digital skill options",
    },
    description: {
      id: "Anak (atau Anda) bingung menentukan dari mana mulai karena info tersebar di mana-mana.",
      en: "Your child (or you) struggle to know where to start because information is scattered everywhere.",
    },
  },
  {
    title: {
      id: "Informasi acara webinar tidak lengkap",
      en: "Webinar listings lack clear detail",
    },
    description: {
      id: "Banyak webinar cuma jual tapi tidak jelas membahas apa, siapa pembicaranya, dan apa yang akan dibawa pulang.",
      en: "Many webinars sell hype without stating the agenda, speakers, or concrete takeaways.",
    },
  },
  {
    title: {
      id: "Takut salah pilih kursus atau bootcamp",
      en: "Fear of choosing the wrong course or bootcamp",
    },
    description: {
      id: "Sudah bayar mahal tapi ternyata tidak sesuai, atau tidak menghasilkan portofolio yang relevan.",
      en: "You paid a premium but the program did not fit—or failed to produce a relevant portfolio.",
    },
  },
  {
    title: {
      id: "Anak tidak terbuka soal rencana masa depannya",
      en: "Your child will not open up about future plans",
    },
    description: {
      id: "Orang tua sulit mengajak diskusi karena anak belum punya gambaran yang jelas.",
      en: "Parents find it hard to start conversations when the child has no clear picture yet.",
    },
  },
  {
    title: {
      id: "Tidak ada yang membahas dari sudut pandang orang tua",
      en: "Little content speaks to parents",
    },
    description: {
      id: "Banyak konten skill digital sasaran anak muda, tapi tidak ada yang membahas bagaimana orang tua bisa mendampingi dengan benar.",
      en: "Most digital skills content targets youth, not how parents can guide without pushing.",
    },
  },
];