import {
  NATURACARE_CLINIC,
  CLINIC_TRUST_SIGNALS,
  CLINIC_BOOKING_STEPS,
} from "@/data/demos/clinic";
import type { Localized } from "@/i18n/localized";

export const klinikWhatsappPrefill: Localized<string> = {
  id: `Halo NaturaCare Clinic, saya ingin berkonsultasi untuk layanan di klinik.

Nama: [nama]
Layanan yang diminati: [pilih: Konsultasi Kulit / Facial / Dental / Bidan / Konseling / Fisioterapi / Wellness]
Hari yang memungkinkan: [hari]
Kebutuhan singkat: [opsional]

Bisa diinformasikan jadwal dan cara bookingnya?`,
  en: `Hello NaturaCare Clinic, I would like to consult about clinic services.

Name: [name]
Service of interest: [choose: Skin Consultation / Facial / Dental / Midwife / Counseling / Physiotherapy / Wellness]
Possible days: [day]
Brief need: [optional]

Could you share availability and how to book?`,
};

export const klinik = {
  ...NATURACARE_CLINIC,
  primaryColor: "#0F9F8F",
  accentColor: "#06B6D4",
  whatsappPrefill: klinikWhatsappPrefill,
};

export const trustSignals = CLINIC_TRUST_SIGNALS;
export const bookingSteps = CLINIC_BOOKING_STEPS;

export const whyUs: {
  title: Localized<string>;
  description: Localized<string>;
}[] = [
  {
    title: {
      id: "Profil tenaga ahli yang jelas dan mudah ditemukan",
      en: "Clear practitioner profiles that are easy to find",
    },
    description: {
      id: "Calon pasien bisa melihat siapa yang akan menangani, area fokus, dan jadwal praktiknya sebelum melakukan booking.",
      en: "Prospective patients can see who will provide care, their focus, and schedule before booking.",
    },
  },
  {
    title: {
      id: "Copy yang aman dan konsultatif, bukan klaim medis berlebihan",
      en: "Safe, consultative copy — not exaggerated medical claims",
    },
    description: {
      id: "Tidak ada janji 'menyembuhkan' atau 'hasil pasti'. Semua informasi bersifat edukatif dan konsultasi tetap disarankan.",
      en: "No promises to 'cure' or 'guaranteed results'. Information is educational; consultation is still recommended.",
    },
  },
  {
    title: {
      id: "Cara booking yang jelas via WhatsApp",
      en: "Clear WhatsApp booking steps",
    },
    description: {
      id: "Calon pasien tidak perlu menebak langkah selanjutnya — tinggal pilih layanan, klik WhatsApp, admin akan memandu.",
      en: "No guesswork — choose a service, tap WhatsApp, and admin will guide the next steps.",
    },
  },
  {
    title: {
      id: "Disclaimer non-emergency yang eksplisit",
      en: "Explicit non-emergency disclaimer",
    },
    description: {
      id: "Untuk kondisi darurat, kami arahkan ke fasilitas kesehatan terdekat. Klinik ini fokus pada layanan non-emergency.",
      en: "For emergencies we direct you to the nearest healthcare facility. This clinic focuses on non-emergency services.",
    },
  },
];

export const featuredServiceIds = [
  "konsultasi-kulit",
  "facial",
  "konseling",
] as const;

export { klinikCopy } from "@/data/demos/klinik/copy";