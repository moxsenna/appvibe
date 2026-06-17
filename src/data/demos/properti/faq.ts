import type { Localized } from "@/i18n/localized";

export type FAQ = {
  question: Localized<string>;
  answer: Localized<string>;
};

export const faqs: FAQ[] = [
  {
    question: {
      id: "Apakah harga di website sama dengan harga final?",
      en: "Is the price on the website the final price?",
    },
    answer: {
      id: "Harga di website adalah kisaran berdasarkan tipe dan kondisi unit saat listing dibuat. Harga final dikonfirmasi saat survei lokasi atau pertemuan dengan tim GrahaNusa, karena bisa ada perubahan tergantung kondisi aktual dan negosiasi.",
      en: "Website pricing is a range based on unit type and condition when the listing was published. Final pricing is confirmed during a site visit or meeting with GrahaNusa, and may change with actual condition and negotiation.",
    },
  },
  {
    question: {
      id: "Apakah bisa survei lokasi langsung?",
      en: "Can I visit the property in person?",
    },
    answer: {
      id: "Bisa. Isi form inquiry singkat di halaman listing atau halaman survei, pilih unit dan jadwal kunjungan — tim GrahaNusa akan menghubungi untuk konfirmasi slot dan arah menuju lokasi.",
      en: "Yes. Complete the short inquiry form on the listing or visit page, choose a unit and preferred timing — the GrahaNusa team will confirm the slot and share directions.",
    },
  },
  {
    question: {
      id: "Bagaimana jika unit yang saya incar sudah tidak tersedia?",
      en: "What if the unit I want is no longer available?",
    },
    answer: {
      id: "Tim GrahaNusa akan membantu merekomendasikan unit lain dengan tipe, lokasi, dan budget yang mirip. Anda juga bisa melihat listing serupa di halaman listing dengan filter yang sama.",
      en: "The GrahaNusa team will recommend similar units by type, location, and budget. You can also browse related listings with the same filters on the listings page.",
    },
  },
  {
    question: {
      id: "Apakah GrahaNusa juga melayani renovasi atau bangun?",
      en: "Does GrahaNusa handle renovation or construction?",
    },
    answer: {
      id: "Ya. GrahaNusa Properti & Karya juga melayani jasa renovasi, bangun rumah, dan interior. Detail layanan ada di listing Renovasi Rumah Cendana dan Interior Apartemen Senopati.",
      en: "Yes. GrahaNusa Properti & Karya also offers renovation, home construction, and interior services. See Renovasi Rumah Cendana and Interior Apartemen Senopati for examples.",
    },
  },
  {
    question: {
      id: "Apakah ada biaya konsultasi awal?",
      en: "Is there a fee for the initial consultation?",
    },
    answer: {
      id: "Tidak. Konsultasi awal via WhatsApp gratis, dan survei lokasi untuk unit yang diminati tidak dipungut biaya. Anda hanya membayar jika lanjut ke tahap negosiasi atau DP.",
      en: "No. Initial WhatsApp consultation is free, and site visits for units you are considering are not charged. Fees apply only if you proceed to negotiation or a deposit.",
    },
  },
];