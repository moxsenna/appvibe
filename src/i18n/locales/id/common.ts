/**
 * Indonesian common dictionary — UI chrome only.
 *
 * Layout:
 *  - navbar, footer, mobileSticky, demoNavbar, demoFooter, demoBanner
 *  - buttons, aria, notFound, rotating
 *  - enum labels (LeadStatus, LeadSource, etc.) for Lead Dashboard demo
 *  - WhatsApp message templates
 *
 * Page-specific copy (hero eyebrows, section headers, etc.) lives in `pages.ts`.
 * Long-form content (services, portfolio, demos) lives in `src/data/*.id.ts`.
 */

export const commonId = {
  brand: {
    name: "AppVibe Studio",
    tagline:
      "Studio website untuk UMKM dan bisnis jasa Indonesia. Bisnis-first, transparan, bisa dikembangkan bertahap.",
  },

  nav: {
    home: "Beranda",
    services: "Layanan",
    portfolio: "Portfolio",
    demo: "Demo",
    industries: "Industri",
    about: "Tentang",
    contact: "Kontak",
    uses: "/uses",
  },

  cta: {
    consult: "Konsultasi via WhatsApp",
    consultShort: "Konsultasi",
    chatNow: "Chat Sekarang",
    viewPortfolio: "Lihat Portfolio",
    viewCaseStudy: "Lihat Studi Kasus",
    openDemo: "Buka Demo",
    openCaseStudy: "Buka Studi Kasus",
    seeAllDemos: "Semua Demo",
    seeAllPortfolio: "Semua Portfolio",
    backToHome: "Kembali ke Beranda",
    backToAllDemos: "Kembali ke semua demo",
    backToAppVibe: "Kembali ke AppVibe Studio",
    sendViaWhatsApp: "Kirim via WhatsApp",
    consultAppVibe: "Konsultasi AppVibe",
    consultAppVibeViaWhatsApp: "Konsultasi AppVibe via WhatsApp",
    contactUs: "Hubungi Kami",
    discussForIndustry: "Diskusikan untuk Industri Anda",
    consultForBusiness: "Konsultasi untuk Bisnis Anda",
  },

  footer: {
    heading: {
      nav: "Navigasi",
      services: "Layanan",
      portfolio: "Portfolio",
      demoInteractive: "Demo Interaktif",
    },
    description:
      "AppVibe Studio membantu bisnis membangun website, landing page, dashboard, dan app ringan yang terlihat profesional, responsif, dan siap dikembangkan.",
    copyright: "Website & portfolio demo untuk calon klien bisnis.",
    serviceLinks: {
      companyProfile: "Website Company Profile",
      landingPage: "Landing Page",
      dashboard: "Dashboard & Web App",
      automation: "Automation & Integrasi",
    },
    legal: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      sitemap: "Sitemap",
    },
  },

  aria: {
    mainNav: "Navigasi utama",
    mobileNav: "Navigasi mobile",
    footerNav: "Navigasi footer",
    legalNav: "Legal",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    skipToContent: "Lewati ke konten utama",
    switchLanguage: "Ganti bahasa",
    languageIndonesian: "Bahasa Indonesia",
    languageEnglish: "Bahasa Inggris",
  },

  notFound: {
    eyebrow: "404",
    title: "Halaman tidak ditemukan",
    description:
      "Tautan mungkin sudah dipindahkan atau halaman belum tersedia. Coba salah satu halaman di bawah ini, atau kembali ke beranda.",
    suggestionHeading: "Halaman populer AppVibe",
    suggestionEyebrow: "Mungkin Anda mencari",
    suggestions: {
      home: { label: "Beranda", desc: "Halaman utama AppVibe" },
      services: { label: "Layanan", desc: "4 layanan utama" },
      portfolio: { label: "Portfolio", desc: "5 contoh project" },
      demo: { label: "Demo Interaktif", desc: "Coba demo website jadi" },
      contact: { label: "Konsultasi", desc: "Mulai diskusi kebutuhan" },
    },
  },

  rotating: {
    /**
     * Indonesian uses passive prefix `di-` for these verbs. EN needs sentence
     * restructure (the lead-in becomes "...easier to ___" with infinitive).
     * RotatingText component handles per-lang word lists internally.
     */
    words: ["dipercaya.", "dipahami.", "dihubungi.", "dibagikan.", "dikembangkan."],
    lead: "Website yang membuat bisnis Anda lebih mudah",
  },

  mobileSticky: {
    label: "Konsultasi Sekarang",
  },

  demo: {
    bannerEyebrow: "Demo Simulasi",
    bannerTitle: "Ini demo bukan website klien sungguhan",
    bannerCta: "Diskusi proyek serupa",
    bannerNote:
      "Konten brand di halaman ini adalah simulasi yang dibuat AppVibe untuk menunjukkan bagaimana website serupa bisa Anda miliki.",
    realBackendTitle: "Real backend mode",
    realBackendBody:
      "Data dibaca langsung dari Supabase Postgres dengan Row Level Security. Perubahan status tersimpan permanen di showcase tenant — terlihat oleh semua pengunjung.",
    fallbackTitle: "Fallback demo mode",
    fallbackBody:
      "Anda menjalankan demo tanpa kredensial Supabase. Data berasal dari mock client-side; perubahan tidak tersimpan.",
    realtimeOn: "Realtime",
    realtimeConnecting: "Menyambung…",
    realtimeAriaActive: "Realtime aktif",
    realtimeAriaConnecting: "Realtime menyambung",
  },

  demoStatus: {
    live: "Live",
    "coming-soon": "Segera",
    draft: "Draft",
  },

  demoStatusDetail: {
    live: "Demo siap dibuka",
    "coming-soon": "Shell siap — konten penuh segera",
    draft: "Sedang disiapkan",
  },

  demoFilters: {
    all: "Semua",
    "company-profile": "Company Profile",
    "landing-page": "Landing Page",
    clinic: "Klinik",
    property: "Properti",
    dashboard: "Dashboard",
  },

  demoCard: {
    openDemo: "Buka Demo",
  },

  enums: {
    leadStatus: {
      new: "Baru",
      contacted: "Dihubungi",
      follow_up: "Follow Up",
      deal: "Deal",
      rejected: "Tidak Cocok",
    },
    leadSource: {
      website: "Website",
      facebook_ads: "Facebook Ads",
      whatsapp: "WhatsApp",
      referral: "Referral",
      event: "Event",
      instagram: "Instagram",
    },
    leadPriority: {
      high: "Tinggi",
      medium: "Sedang",
      low: "Rendah",
    },
  },

  whatsapp: {
    default:
      "Halo AppVibe, saya tertarik membuat website/app untuk bisnis saya. Bisa bantu konsultasi?",
    portfolio:
      'Halo AppVibe, saya tertarik membuat website seperti demo {{title}}. Bisa dibantu?',
    demo:
      'Halo AppVibe, saya baru mencoba demo "{{title}}" dan ingin diskusi lebih detail untuk bisnis saya. Bisa dilihat lebih lanjut?',
  },
} satisfies CommonShape;

/**
 * Inferred-but-widened shape for the EN dictionary to satisfy. `as const`
 * preserves narrowness for ID consumers; `satisfies` shape ensures structural
 * conformance without forcing EN to match every literal.
 */
type CommonShape = {
  brand: { name: string; tagline: string };
  nav: Record<string, string>;
  cta: Record<string, string>;
  footer: {
    heading: Record<string, string>;
    description: string;
    copyright: string;
    serviceLinks: Record<string, string>;
    legal: Record<string, string>;
  };
  aria: Record<string, string>;
  notFound: {
    eyebrow: string;
    title: string;
    description: string;
    suggestionHeading: string;
    suggestionEyebrow: string;
    suggestions: Record<string, { label: string; desc: string }>;
  };
  rotating: { words: readonly string[]; lead: string };
  mobileSticky: { label: string };
  demo: Record<string, string>;
  demoStatus: Record<string, string>;
  demoStatusDetail: Record<string, string>;
  demoFilters: Record<string, string>;
  demoCard: { openDemo: string };
  enums: {
    leadStatus: Record<string, string>;
    leadSource: Record<string, string>;
    leadPriority: Record<string, string>;
  };
  whatsapp: { default: string; portfolio: string; demo: string };
};

export type CommonDict = CommonShape;
