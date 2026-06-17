import type { Localized } from "@/i18n/localized";

export type FollowUpStep = {
  number: string;
  title: Localized<string>;
  timing: Localized<string>;
  description: Localized<string>;
};

export const followUpSteps: FollowUpStep[] = [
  {
    number: "1",
    title: {
      id: "Submit form pendaftaran",
      en: "Submit the registration form",
    },
    timing: { id: "Sekarang", en: "Now" },
    description: {
      id: "Isi 6 field form (nama, WhatsApp, email, domisili, status, pertanyaan). Setelah submit, halaman sukses akan muncul dengan ringkasan data dan CTA WhatsApp untuk konfirmasi.",
      en: "Complete six fields (name, WhatsApp, email, city, status, question). After submit, a success view shows your summary and a WhatsApp confirmation CTA.",
    },
  },
  {
    number: "2",
    title: {
      id: "Konfirmasi via WhatsApp",
      en: "Confirm via WhatsApp",
    },
    timing: { id: "1–2 jam setelah submit", en: "1–2 hours after submit" },
    description: {
      id: "Anda akan menerima pesan WhatsApp dari tim SkillPath Studio untuk konfirmasi slot. Balas 'OKE' untuk finalisasi, atau tanya apa pun via chat.",
      en: "SkillPath Studio will message you on WhatsApp to confirm your seat. Reply OK to finalize or ask anything in chat.",
    },
  },
  {
    number: "3",
    title: {
      id: "Reminder H-1",
      en: "Day-before reminder",
    },
    timing: {
      id: "Jumat, 20 Juni 2026 · 12.00 WIB",
      en: "Friday, 20 June 2026 · 12:00 PM WIB",
    },
    description: {
      id: "Pesan berisi link Zoom, rundown acara, dan tips teknis (install Zoom, cek audio/video). Plus bonus Checklist Minat Skill Digital langsung dikirim.",
      en: "Message with Zoom link, rundown, and tech tips (install Zoom, check audio/video). Digital Skills Interest Checklist bonus sent.",
    },
  },
  {
    number: "4",
    title: {
      id: "Reminder H-1 jam",
      en: "One-hour reminder",
    },
    timing: {
      id: "Sabtu, 21 Juni 2026 · 18.00 WIB",
      en: "Saturday, 21 June 2026 · 6:00 PM WIB",
    },
    description: {
      id: "Reminder 1 jam sebelum acara. Bonus Template Roadmap 30 Hari dikirim via WhatsApp agar Anda bisa langsung pakai saat webinar.",
      en: "Reminder one hour before start. 30-Day Roadmap template sent on WhatsApp for use during the webinar.",
    },
  },
  {
    number: "5",
    title: {
      id: "Acara webinar berlangsung",
      en: "Live webinar",
    },
    timing: {
      id: "Sabtu, 21 Juni 2026 · 19.00 WIB",
      en: "Saturday, 21 June 2026 · 7:00 PM WIB",
    },
    description: {
      id: "Webinar 2 jam via Zoom. Sesi Q&A di 30 menit terakhir. Sisa slot, bonus Panduan Diskusi Orang Tua, dan daftar Platform Belajar Terkurasi dikirim setelah acara.",
      en: "Two hours on Zoom with 30 minutes of Q&A. Remaining bonuses (parent guide, platform list) sent after the session.",
    },
  },
  {
    number: "6",
    title: {
      id: "Follow-up setelah webinar",
      en: "Post-webinar follow-up",
    },
    timing: {
      id: "Minggu, 22 Juni 2026",
      en: "Sunday, 22 June 2026",
    },
    description: {
      id: "Link rekaman webinar dikirim ke semua peserta (hadir maupun tidak). Plus ringkasan Q&A dan info program mentoring lanjutan (opsional, tidak memaksa).",
      en: "Recording link for all registrants. Q&A summary and optional mentoring program info—no obligation.",
    },
  },
];