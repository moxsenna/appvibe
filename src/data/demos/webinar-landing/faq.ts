import type { Localized } from "@/i18n/localized";

export type FAQ = {
  question: Localized<string>;
  answer: Localized<string>;
};

export const faqs: FAQ[] = [
  {
    question: {
      id: "Apakah webinar ini benar-benar gratis?",
      en: "Is this webinar really free?",
    },
    answer: {
      id: "Ya, 100% gratis. Tidak ada biaya pendaftaran, tidak ada hidden fee. Cukup daftar dan Anda akan dapat link Zoom via WhatsApp H-1 sebelum acara.",
      en: "Yes—100% free. No registration fee or hidden charges. Register and you will receive the Zoom link via WhatsApp the day before.",
    },
  },
  {
    question: {
      id: "Apakah ada rekaman untuk yang tidak bisa hadir?",
      en: "Is there a recording if I cannot attend live?",
    },
    answer: {
      id: "Ya. Semua peserta yang mendaftar (hadir atau tidak) akan menerima link rekaman dalam 2×24 jam setelah webinar selesai, plus ringkasan materi dan Q&A highlights.",
      en: "Yes. All registrants receive the recording within two business days after the webinar, plus material summary and Q&A highlights.",
    },
  },
  {
    question: {
      id: "Bagaimana link Zoom dikirim?",
      en: "How is the Zoom link sent?",
    },
    answer: {
      id: "Setelah submit form, Anda akan diarahkan ke WhatsApp untuk konfirmasi. Link Zoom dikirim via WhatsApp grup event pada H-1 (Jumat, 20 Juni 2026 pukul 12.00 WIB) dan reminder 1 jam sebelum acara.",
      en: "After submitting the form, continue on WhatsApp to confirm. The Zoom link goes to the event WhatsApp group on Friday, 20 June 2026 at 12:00 PM WIB, with a one-hour reminder before start.",
    },
  },
  {
    question: {
      id: "Apakah anak saya perlu hadir langsung atau bisa diwakilkan?",
      en: "Must my child attend live, or can I represent them?",
    },
    answer: {
      id: "Sangat disarankan hadir langsung agar bisa tanya jawab langsung dengan pembicara. Tapi kalau tidak memungkinkan, Anda bisa hadir sebagai orang tua dan anak bisa dapat rekamannya.",
      en: "Live attendance is best for Q&A with speakers. If that is not possible, a parent may attend and the child can watch the recording.",
    },
  },
  {
    question: {
      id: "Apakah cocok untuk yang benar-benar pemula (belum tahu apa-apa)?",
      en: "Is it suitable for complete beginners?",
    },
    answer: {
      id: "Justru itu target utama webinar ini. Materi dirancang untuk orang yang belum tahu mulai dari mana — baik orang tua maupun anak yang belum punya gambaran skill digital.",
      en: "That is the primary audience—parents and students who do not yet know where to start with digital skills.",
    },
  },
  {
    question: {
      id: "Apakah akan ada program lanjutan setelah webinar?",
      en: "Will there be a paid follow-up program?",
    },
    answer: {
      id: "Peserta yang tertarik bisa mendaftar program mentoring 4 minggu (berbayar) yang merupakan kelanjutan webinar. Tapi tidak ada kewajiban — Anda bisa hanya ikut webinar gratisnya saja.",
      en: "Interested attendees may join an optional four-week paid mentoring program. There is no obligation—you may attend only the free webinar.",
    },
  },
  {
    question: {
      id: "Bagaimana jika saya daftar tapi berhalangan hadir?",
      en: "What if I register but cannot attend?",
    },
    answer: {
      id: "Tidak masalah. Anda tetap mendapat link rekaman dan semua bonus (PDF, template, dll). Silakan daftar saja agar mendapat akses ke materi lengkap.",
      en: "No problem—you still receive the recording and all bonuses. Register to secure full materials access.",
    },
  },
  {
    question: {
      id: "Apakah data saya aman dan tidak akan disalahgunakan?",
      en: "Is my data safe and not misused?",
    },
    answer: {
      id: "Data yang Anda berikan (nama, WhatsApp, status) hanya digunakan untuk keperluan webinar: konfirmasi, reminder, dan pengiriman rekaman. Tidak akan dibagikan ke pihak ketiga atau untuk spam.",
      en: "Your name, WhatsApp, and status are used only for confirmation, reminders, and recording delivery—not shared with third parties or for spam.",
    },
  },
];