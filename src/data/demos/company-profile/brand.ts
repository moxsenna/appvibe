import { same } from "@/i18n/localized";

export const brand = {
  name: same("Arunika Konsultan"),
  tagline: {
    id: "Membantu bisnis tumbuh lebih rapi, terukur, dan siap berkembang.",
    en: "Helping businesses grow in a clearer, measurable, and scalable way.",
  },
  oneLiner: {
    id: "Konsultan operasional dan pengembangan bisnis untuk UMKM naik kelas dan perusahaan lokal yang ingin tampil lebih profesional.",
    en: "Operations and business development consulting for growing SMBs and local companies that want a more professional presence.",
  },
  description: {
    id: "Arunika Konsultan membantu pemilik bisnis jasa menyusun operasional, SOP, alur sales, dan sistem kerja yang lebih terstruktur — agar tim tidak selalu menjelaskan hal yang sama dari nol, dan calon klien lebih mudah memahami layanan sebelum konsultasi.",
    en: "Arunika Konsultan helps service business owners structure operations, SOPs, sales flows, and ways of working — so teams stop repeating the same explanations and prospects understand your services before the first consultation.",
  },
  targetCustomer: {
    id: [
      "Pemilik UMKM jasa yang mulai scale",
      "Founder startup kecil",
      "Manajer operasional perusahaan lokal",
      "Vendor B2B yang ingin tampil lebih kredibel",
      "Agency yang butuh fondasi rapi untuk tender atau proposal",
    ],
    en: [
      "Service SMB owners ready to scale",
      "Early-stage startup founders",
      "Operations managers at local companies",
      "B2B vendors seeking stronger credibility",
      "Agencies that need a solid foundation for tenders and proposals",
    ],
  },
  tone: {
    id: "Profesional, tenang, terstruktur, meyakinkan tanpa agresif. Bahasa bisnis mudah dipahami, bukan jargon konsultan berat.",
    en: "Professional, calm, and structured — persuasive without being pushy. Plain business language, not heavy consultant jargon.",
  },
  trustStats: [
    {
      value: same("6"),
      label: { id: "layanan inti", en: "core services" },
    },
    {
      value: same("68+"),
      label: { id: "proyek contoh (simulasi)", en: "sample projects (simulated)" },
    },
    {
      value: same("4"),
      label: { id: "tahap proses kerja", en: "engagement stages" },
    },
    {
      value: same("Form + WA"),
      label: { id: "follow-up terstruktur", en: "structured follow-up" },
    },
  ],
  painPoints: [
    {
      title: {
        id: "Layanan dijelaskan berulang di chat",
        en: "Services explained over and over in chat",
      },
      impact: {
        id: "Tim sales dan owner kehilangan waktu untuk hal yang sama setiap hari.",
        en: "Sales and owners lose hours every day on the same explanations.",
      },
    },
    {
      title: {
        id: "Portfolio tidak tertata",
        en: "Portfolio feels scattered",
      },
      impact: {
        id: "Meeting pertama terasa kurang meyakinkan karena tidak ada bukti kerja yang konsisten.",
        en: "First meetings feel less convincing without consistent proof of work.",
      },
    },
    {
      title: {
        id: "Tidak ada link resmi",
        en: "No official link to share",
      },
      impact: {
        id: "Networking terasa amatir karena hanya mengandalkan Instagram atau PDF proposal.",
        en: "Networking feels amateur when you only rely on Instagram or a PDF deck.",
      },
    },
    {
      title: {
        id: "Calon klien ragu sebelum chat",
        en: "Prospects hesitate before reaching out",
      },
      impact: {
        id: "Inquiry rendah karena belum ada cukup informasi untuk mengambil langkah pertama.",
        en: "Lower inquiry volume because there is not enough information to take the first step.",
      },
    },
    {
      title: {
        id: "Inquiry masuk tanpa konteks",
        en: "Inquiries arrive without context",
      },
      impact: {
        id: "Follow-up tidak efisien karena tidak tahu kebutuhan, budget, atau urgensi calon klien.",
        en: "Follow-up is inefficient when needs, budget, and urgency are unknown.",
      },
    },
  ],
  businessValues: [
    {
      title: {
        id: "Kredibilitas yang konsisten",
        en: "Consistent credibility",
      },
      proof: {
        id: "Hero, trust bar, dan proses kerja yang jelas sejak detik pertama.",
        en: "Clear hero, trust signals, and process from the first second.",
      },
      outcome: {
        id: "Calon klien lebih nyaman sebelum meeting pertama.",
        en: "Prospects feel more at ease before the first meeting.",
      },
    },
    {
      title: {
        id: "Layanan mudah dipahami",
        en: "Services that are easy to grasp",
      },
      proof: {
        id: "6 service cards dengan deskripsi, cocok untuk siapa, dan deliverable.",
        en: "Six service cards with descriptions, fit, and deliverables.",
      },
      outcome: {
        id: "Pertanyaan berulang di chat admin berkurang signifikan.",
        en: "Repeated admin chat questions drop significantly.",
      },
    },
    {
      title: {
        id: "Bukti kerja yang tertata",
        en: "Organized proof of work",
      },
      proof: {
        id: "Portfolio grid dengan kategori dan studi kasus naratif.",
        en: "Portfolio grid with categories and narrative case studies.",
      },
      outcome: {
        id: "Meeting pertama bisa langsung masuk ke diskusi, bukan pitching dari awal.",
        en: "First meetings move straight into discussion, not a pitch from zero.",
      },
    },
    {
      title: {
        id: "Inquiry yang terarah",
        en: "Qualified inquiries",
      },
      proof: {
        id: "Form 6 field dengan kebutuhan, budget, dan konteks pesan.",
        en: "Six-field form capturing needs, budget, and message context.",
      },
      outcome: {
        id: "Follow-up lebih efisien karena tim sudah tahu konteks awal.",
        en: "Follow-up is faster because the team already has initial context.",
      },
    },
    {
      title: {
        id: "Satu link resmi untuk semua",
        en: "One official link everywhere",
      },
      proof: {
        id: "URL yang sama untuk proposal, bio Instagram, kartu nama, dan iklan.",
        en: "The same URL for proposals, Instagram bio, business cards, and ads.",
      },
      outcome: {
        id: "Branding terasa lebih profesional dan konsisten.",
        en: "Branding feels more professional and consistent.",
      },
    },
  ],
  whatsappPrefill: {
    id: `Halo Arunika Konsultan, saya tertarik untuk konsultasi awal.

Nama: [nama]
Bisnis: [nama bisnis]
Jenis kebutuhan: [need]
Estimasi budget: [budget]

Bisa dijadwalkan konsultasi awal tanpa komitmen proyek?`,
    en: `Hello Arunika Konsultan, I would like an initial consultation.

Name: [nama]
Business: [nama bisnis]
Primary need: [need]
Estimated budget: [budget]

Can we schedule an initial consultation with no project commitment?`,
  },
  inquiryNeedOptions: {
    id: [
      "Audit Operasional",
      "Penyusunan SOP",
      "Optimasi Sales Process",
      "Digitalisasi Workflow",
      "Pendampingan Manajemen",
      "Dashboard Reporting",
      "Belum yakin — perlu diskusi dulu",
    ],
    en: [
      "Operations audit",
      "SOP development",
      "Sales process optimization",
      "Workflow digitization",
      "Management coaching",
      "Dashboard reporting",
      "Not sure yet — need to discuss",
    ],
  },
  inquiryBudgetOptions: {
    id: ["< 10 juta", "10–25 juta", "25–50 juta", "> 50 juta", "Belum tahu — tergantung scope"],
    en: [
      "Under IDR 10M",
      "IDR 10–25M",
      "IDR 25–50M",
      "Over IDR 50M",
      "Not sure — depends on scope",
    ],
  },
  heroWhatsappIntro: {
    id: "Halo Arunika Konsultan, saya tertarik untuk konsultasi awal. Bisa dijadwalkan?",
    en: "Hello Arunika Konsultan, I am interested in an initial consultation. Can we schedule one?",
  },
  trustChips: {
    id: ["Fokus UMKM & B2B", "Pendekatan terukur", "Bahasa tanpa jargon"],
    en: ["SMB & B2B focus", "Measurable approach", "Plain language"],
  },
};

export type Brand = typeof brand;