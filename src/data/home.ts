import type { Localized } from "@/i18n/localized";

export type HomeWorld = {
  index: string;
  title: Localized<string>;
  body: Localized<string>;
  items: Localized<string[]>;
};

export type HomeCapability = {
  index: string;
  name: Localized<string>;
  desc: Localized<string>;
  anchor: string;
};

export const homeHero = {
  eyebrow: {
    id: "Website · Produk digital · Software custom",
    en: "Websites · Digital products · Custom software",
  },
  title: {
    id: "Bisnis Anda punya cara kerja sendiri. Softwarenya harus mengikuti.",
    en: "Your business has its own way of working. Your software should follow.",
  },
  support: {
    id: "AppVibe merancang dan membangun website yang dilihat pelanggan sampai sistem internal yang dipakai tim — dari company profile dan landing page hingga dashboard operasional dan CRM.",
    en: "AppVibe designs and builds everything from the website your customers see to the internal systems your team runs on — from company profiles and landing pages to operational dashboards and CRM.",
  },
  primary: { id: "Lihat Karya & Demo", en: "See Work & Demos" },
  secondary: {
    id: "Ceritakan proses bisnis Anda",
    en: "Tell us how your business works",
  },
  meta: {
    id: "Demo interaktif di setiap proyek · Konsultasi awal gratis",
    en: "Interactive demo on every project · Free first consultation",
  },
};

export const homeWorlds: HomeWorld[] = [
  {
    index: "01",
    title: { id: "Yang dilihat pelanggan", en: "What your customers see" },
    body: {
      id: "Halaman resmi yang membuat bisnis mudah dipercaya sejak klik pertama — jelas, cepat dibuka di HP, dan mengarah ke satu aksi.",
      en: "Official pages that earn trust from the first click — clear, fast on mobile, and built around one action.",
    },
    items: {
      id: [
        "Website bisnis & company profile",
        "Landing page campaign",
        "Portal & aplikasi pelanggan",
        "Produk digital & SaaS",
      ],
      en: [
        "Business & company profile websites",
        "Campaign landing pages",
        "Customer portals & apps",
        "Digital products & SaaS",
      ],
    },
  },
  {
    index: "02",
    title: { id: "Yang dipakai tim Anda", en: "What your team runs on" },
    body: {
      id: "Sistem internal yang mengikuti cara kerja tim — mencatat, mengingatkan, dan merapikan operasional tanpa spreadsheet berantakan.",
      en: "Internal systems that follow how your team works — recording, reminding, and tidying operations without messy spreadsheets.",
    },
    items: {
      id: [
        "Sistem operasional & workflow",
        "CRM & manajemen sales",
        "Data & reporting",
        "Integrasi & automation",
      ],
      en: [
        "Operational & workflow systems",
        "CRM & sales management",
        "Data & reporting",
        "Integrations & automation",
      ],
    },
  },
];

export const homeWorkHeader = {
  eyebrow: { id: "Karya pilihan", en: "Selected work" },
  title: { id: "Lihat dulu hasil kerjanya.", en: "Look at the work first." },
  desc: {
    id: "Setiap proyek bisa dibuka sebagai demo interaktif atau dibaca sebagai studi kasus — screenshot, alur, dan alasannya.",
    en: "Every project opens as an interactive demo or reads as a case study — screenshots, flows, and the reasoning behind them.",
  },
};

export const homeDeepDiveNote = {
  eyebrow: { id: "Bedah proyek · Sistem internal", en: "Project deep-dive · Internal system" },
  note: {
    id: "Catatan: LeadFlow CRM di sini adalah demo portofolio dengan data contoh — untuk menunjukkan cara AppVibe menyusun alur sales internal. Versi produksi selalu disesuaikan dengan workflow bisnis Anda.",
    en: "Note: LeadFlow CRM here is a portfolio demo with sample data — showing how AppVibe structures an internal sales flow. A production version always follows your business workflow.",
  },
};

export const homeCapabilitiesHeader = {
  eyebrow: { id: "Kapabilitas", en: "Capabilities" },
  title: {
    id: "Satu studio untuk halaman publik dan sistem internal.",
    en: "One studio for public pages and internal systems.",
  },
  desc: {
    id: "Proyek bisa dimulai dari masalah bisnis, workflow yang berantakan, spreadsheet, koordinasi via chat, sebuah ide, atau sekadar kebutuhan website.",
    en: "A project can start from a business problem, a messy workflow, spreadsheets, chat-based coordination, an idea — or simply the need for a website.",
  },
};

export const homeCapabilities: { group: Localized<string>; items: HomeCapability[] }[] = [
  {
    group: { id: "Customer-facing", en: "Customer-facing" },
    items: [
      {
        index: "01",
        name: { id: "Website bisnis & company profile", en: "Business & company profile websites" },
        desc: {
          id: "Wajah resmi bisnis: layanan, portfolio, dan kontak dalam satu tempat yang rapi.",
          en: "The official face of the business: services, portfolio, and contact in one tidy place.",
        },
        anchor: "layanan-company-profile",
      },
      {
        index: "02",
        name: { id: "Landing page campaign", en: "Campaign landing pages" },
        desc: {
          id: "Satu halaman fokus untuk iklan, event, dan promosi — pengunjung diarahkan ke satu aksi.",
          en: "One focused page for ads, events, and promos — every visitor guided to a single action.",
        },
        anchor: "layanan-landing-page",
      },
      {
        index: "03",
        name: { id: "Aplikasi pelanggan & portal", en: "Customer apps & portals" },
        desc: {
          id: "Area pelanggan: booking, member, riwayat, dan layanan mandiri tanpa chat berulang.",
          en: "Customer areas: booking, membership, history, and self-service without repetitive chats.",
        },
        anchor: "layanan-dashboard",
      },
      {
        index: "04",
        name: { id: "Produk digital & SaaS", en: "Digital products & SaaS" },
        desc: {
          id: "Dari MVP sampai iterasi: produk yang bisa dipakai pelanggan dan dikembangkan bertahap.",
          en: "From MVP to iteration: products customers can use and you can extend in stages.",
        },
        anchor: "layanan-dashboard",
      },
    ],
  },
  {
    group: { id: "Internal & operasional", en: "Internal & operational" },
    items: [
      {
        index: "05",
        name: { id: "Sistem operasional & workflow", en: "Operational & workflow systems" },
        desc: {
          id: "Approval, inventaris, operasional lapangan — mengikuti proses yang sudah berjalan.",
          en: "Approvals, inventory, field operations — following the process you already run.",
        },
        anchor: "layanan-dashboard",
      },
      {
        index: "06",
        name: { id: "Manajemen customer & sales", en: "Customer & sales management" },
        desc: {
          id: "Lead tidak tercecer, follow-up terjadwal, dan pipeline terbaca dalam satu dashboard.",
          en: "No lost leads, scheduled follow-ups, and a readable pipeline in one dashboard.",
        },
        anchor: "layanan-dashboard",
      },
      {
        index: "07",
        name: { id: "Data perusahaan & reporting", en: "Company data & reporting" },
        desc: {
          id: "Dari catatan tersebar menjadi laporan ringkas untuk keputusan harian owner.",
          en: "From scattered notes to concise reports for the owner's daily decisions.",
        },
        anchor: "layanan-dashboard",
      },
      {
        index: "08",
        name: { id: "Integrasi & automation", en: "Integrations & automation" },
        desc: {
          id: "Website terhubung ke WhatsApp, payment, analytics, dan tools yang sudah dipakai.",
          en: "Websites connected to WhatsApp, payments, analytics, and the tools you already use.",
        },
        anchor: "layanan-automation",
      },
    ],
  },
];

export const homeIndustriesHeader = {
  eyebrow: { id: "Industri", en: "Industries" },
  title: {
    id: "Setiap industri punya masalah operasional sendiri.",
    en: "Every industry has its own operational problems.",
  },
  desc: {
    id: "Pilih yang paling dekat dengan bisnis Anda — lalu bayangkan workflow tersebut dirapikan menjadi sistem.",
    en: "Pick the closest to your business — then picture that workflow tidied into a system.",
  },
};

export const homeProcessHeader = {
  eyebrow: { id: "Proses", en: "Process" },
  title: {
    id: "Enam langkah yang tenang dan transparan.",
    en: "Six calm, transparent steps.",
  },
  desc: {
    id: "Tanpa jargon teknis. Anda selalu tahu apa yang terjadi di setiap tahap — dan bisa mulai dari yang paling kecil.",
    en: "No technical jargon. You always know what happens at each stage — and you can start from the smallest piece.",
  },
};

export const homeTrust = {
  eyebrow: { id: "Studio & founder", en: "Studio & founder" },
  title: {
    id: "Diskusi langsung dengan orang yang merancang dan membangun proyek Anda.",
    en: "Talk directly with the person who designs and builds your project.",
  },
  body: {
    id: "AppVibe Studio didirikan oleh Bima Putra Sena — founder yang juga developer. Berbasis di Indonesia dan remote-friendly, fokus pada project yang rapi dan komunikasi terbuka.",
    en: "AppVibe Studio was founded by Bima Putra Sena — a founder who is also the developer. Based in Indonesia and remote-friendly, focused on tidy projects and open communication.",
  },
  link: { id: "Tentang AppVibe", en: "About AppVibe" },
};

export const homeFinalCta = {
  title: { id: "Ceritakan kebutuhan bisnis Anda.", en: "Tell us what your business needs." },
  body: {
    id: "Belum tahu bentuk sistemnya? Tidak masalah. Ceritakan proses yang ingin dirapikan — kami bantu memetakan mulai dari langkah terkecil, tanpa brief teknis formal.",
    en: "Don't know what the system should look like? That's fine. Describe the process you want tidied — we help map it from the smallest step, no formal technical brief needed.",
  },
  primary: { id: "Ceritakan kebutuhan", en: "Tell us what you need" },
  secondary: { id: "Lihat Karya & Demo", en: "See Work & Demos" },
};

export const projectStatusLabel: Record<string, Localized<string>> = {
  "company-profile": { id: "Studio Project", en: "Studio Project" },
  "webinar-landing": { id: "Studio Project", en: "Studio Project" },
  klinik: { id: "Studio Project", en: "Studio Project" },
  properti: { id: "Studio Project", en: "Studio Project" },
  "lead-dashboard": { id: "Studio Project", en: "Studio Project" },
  littlestar: { id: "Studio Project", en: "Studio Project" },
  lakoku: { id: "Studio Project", en: "Studio Project" },
  "promotor-class": { id: "Studio Project", en: "Studio Project" },
  "zorro-rental": { id: "Studio Project", en: "Studio Project" },
  "fwk-leather": { id: "Studio Project", en: "Studio Project" },
};
