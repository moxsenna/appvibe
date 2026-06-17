import type { Localized } from "@/i18n/localized";
import { same } from "@/i18n/localized";

const eventName: Localized<string> = {
  id: "Dari Bingung Arah Menjadi Lebih Siap Memilih Skill Digital",
  en: "From Unclear Direction to a Clearer Digital Skills Path",
};

export const campaign = {
  organizer: same("SkillPath Studio"),
  eventTagline: {
    id: "Webinar Gratis",
    en: "Free Webinar",
  },
  eventName,
  eventShortName: {
    id: "Webinar Orientasi Skill Digital",
    en: "Digital Skills Orientation Webinar",
  },
  heroHeadline: {
    id: "Bantu Anak Menemukan Arah Skill Digital yang Lebih Siap untuk Dunia Kerja",
    en: "Help Your Child Find a Digital Skills Direction That Is Ready for Work",
  },
  audience: {
    id: "Orang tua yang ingin anaknya punya arah skill digital setelah lulus sekolah, siswa SMA/SMK yang bingung memilih skill, dan anak muda yang ingin mengenal jalur karier digital.",
    en: "Parents who want their children to have a digital skills direction after school, high-school students unsure which skill to choose, and young adults exploring digital career paths.",
  },
  audienceShort: {
    id: "Orang tua · Siswa SMA/SMK · Fresh grad · Career switcher",
    en: "Parents · High school · Fresh grad · Career switcher",
  },
  date: {
    id: "Sabtu, 21 Juni 2026",
    en: "Saturday, 21 June 2026",
  },
  time: {
    id: "19.00–21.00 WIB",
    en: "7:00–9:00 PM WIB",
  },
  platform: {
    id: "Zoom (link dikirim via WhatsApp)",
    en: "Zoom (link sent via WhatsApp)",
  },
  quota: 150,
  quotaSimulatedRemaining: 63,
  ctaPrimary: {
    id: "Daftar Gratis",
    en: "Register Free",
  },
  ctaSecondary: {
    id: "Tanya via WhatsApp",
    en: "Ask on WhatsApp",
  },
  valueProposition: {
    id: "Webinar gratis 2 jam yang membantu orang tua dan siswa memahami peta skill digital pemula, pentingnya portofolio, dan cara orang tua mendampingi tanpa memaksa.",
    en: "A free two-hour webinar helping parents and students map beginner digital skills, understand portfolios, and support learning without pressure.",
  },
  whatsappPrefill: {
    id: `Halo SkillPath Studio, saya tertarik untuk daftar webinar "Dari Bingung Arah Menjadi Lebih Siap Memilih Skill Digital".

Nama: {{name}}
Nomor WhatsApp: {{phone}}
Status: {{status}}
Nama anak (jika orang tua): {{childOptional}}

Bisa konfirmasi slot dan cara akses Zoom-nya?`,
    en: `Hello SkillPath Studio, I would like to register for the webinar "From Unclear Direction to a Clearer Digital Skills Path".

Name: {{name}}
WhatsApp number: {{phone}}
Status: {{status}}
Child's name (if parent): {{childOptional}}

Could you confirm my seat and how to access Zoom?`,
  },
};

export type Campaign = typeof campaign;