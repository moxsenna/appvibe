import type { Localized } from "@/i18n/localized";
import { same } from "@/i18n/localized";

export type Testimonial = {
  id: string;
  name: Localized<string>;
  role: Localized<string>;
  industry: Localized<string>;
  quote: Localized<string>;
  outcome: Localized<string>;
};

export const testimonials: Testimonial[] = [
  {
    id: "rina-k-jasa-renovasi",
    name: same("Rina K."),
    role: { id: "Owner", en: "Owner" },
    industry: { id: "Jasa Renovasi", en: "Renovation services" },
    quote: {
      id: "Calon klien jadi lebih paham layanan kami sebelum chat. Pertanyaan di WA jadi lebih terarah, dan tim sales tidak perlu menjelaskan hal yang sama dari awal setiap kali.",
      en: "Prospects understand our services before they message us. WhatsApp questions are more focused, and sales no longer repeats the same intro every time.",
    },
    outcome: {
      id: "Pertanyaan berulang di WA turun 40%",
      en: "Repeated WhatsApp questions down 40%",
    },
  },
  {
    id: "andi-p-distributor",
    name: same("Andi P."),
    role: { id: "Sales Manager", en: "Sales Manager" },
    industry: { id: "Distributor B2B", en: "B2B distribution" },
    quote: {
      id: "Tim sales bisa kirim link layanan spesifik, bukan menjelaskan dari awal setiap kali. Meeting pertama sudah masuk ke diskusi value, bukan ke pengenalan layanan.",
      en: "Sales can share a specific service link instead of starting from scratch. First meetings jump to value, not service intros.",
    },
    outcome: {
      id: "Waktu meeting efektif naik 30%",
      en: "Effective meeting time up 30%",
    },
  },
  {
    id: "maya-l-agency",
    name: same("Maya L."),
    role: { id: "Founder", en: "Founder" },
    industry: { id: "Agency Kreatif", en: "Creative agency" },
    quote: {
      id: "Tampilan bisnis kami jadi jauh lebih meyakinkan saat pitching ke klien korporat. Klien baru sering bilang 'website kalian terasa established' sebelum kita memperkenalkan tim.",
      en: "We look far more credible pitching corporate clients. New clients often say our site feels established before we even introduce the team.",
    },
    outcome: {
      id: "Konversi pitching ke klien korporat naik signifikan",
      en: "Corporate pitch conversion improved significantly",
    },
  },
  {
    id: "budi-s-konsultan-pajak",
    name: same("Budi S."),
    role: { id: "Owner", en: "Owner" },
    industry: { id: "Konsultan Pajak", en: "Tax consulting" },
    quote: {
      id: "Form inquiry membantu kami tahu kebutuhan awal sebelum call pertama. Klien yang datang sudah tahu apa yang dia mau, dan kami bisa langsung diskusi value, bukan klarifikasi basic.",
      en: "The inquiry form surfaces needs before the first call. Clients arrive knowing what they want, so we discuss value instead of basics.",
    },
    outcome: {
      id: "First call jadi 2x lebih produktif",
      en: "First calls roughly twice as productive",
    },
  },
];