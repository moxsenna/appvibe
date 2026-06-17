import type { TestimonialItem } from "@/types/testimonial";

/**
 * Example scenarios — not testimonials from real clients.
 * Used to illustrate the kind of value businesses can aim for.
 */
export const testimonials: TestimonialItem[] = [
  {
    id: "scenario-1",
    quote: {
      id: "Dengan website yang rapi, calon pelanggan bisa memahami layanan sebelum chat — mengurangi pertanyaan berulang di WhatsApp.",
      en: "With a tidy website, prospects can understand our services before chatting — cutting down repeat questions on WhatsApp.",
    },
    name: {
      id: "Contoh: Owner UMKM Kuliner",
      en: "Example: Local F&B owner",
    },
    role: {
      id: "Skenario bisnis",
      en: "Business scenario",
    },
    business: {
      id: "UMKM makanan & catering",
      en: "Local food & catering",
    },
    isExample: true,
  },
  {
    id: "scenario-2",
    quote: {
      id: "Landing page webinar membantu pendaftaran lebih tertata. Tim tidak perlu input manual satu per satu dari chat.",
      en: "A webinar landing page made sign-ups far more organised. The team no longer needs to enter each registration manually from chat.",
    },
    name: {
      id: "Contoh: Penyelenggara Pelatihan",
      en: "Example: Training programme organiser",
    },
    role: {
      id: "Skenario bisnis",
      en: "Business scenario",
    },
    business: {
      id: "Edukasi & pelatihan online",
      en: "Online education & training",
    },
    isExample: true,
  },
  {
    id: "scenario-3",
    quote: {
      id: "Dashboard leads sederhana membuat follow-up lebih terarah. Status setiap calon pelanggan terlihat jelas.",
      en: "A simple leads dashboard made follow-ups far more focused. Every prospect's status is visible at a glance.",
    },
    name: {
      id: "Contoh: Tim Sales Jasa",
      en: "Example: Professional services sales team",
    },
    role: {
      id: "Skenario bisnis",
      en: "Business scenario",
    },
    business: {
      id: "Bisnis jasa B2B",
      en: "B2B professional services",
    },
    isExample: true,
  },
];
