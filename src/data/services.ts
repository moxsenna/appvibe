import type { ServiceItem } from "@/types/service";

export const services: ServiceItem[] = [
  {
    id: "landing-page",
    title: { id: "Landing Page Konversi", en: "Conversion Landing Page" },
    shortDescription: {
      id: "Untuk promosi, webinar, campaign, produk digital, atau jasa tertentu yang butuh satu halaman fokus dengan CTA jelas.",
      en: "For promotions, webinars, campaigns, digital products, or any specific service that needs a focused single page with a clear CTA.",
    },
    description: {
      id: "Halaman tunggal yang dirancang untuk mengarahkan pengunjung ke satu aksi: daftar, inquiry, atau WhatsApp — ideal untuk iklan dan campaign.",
      en: "A single page designed to drive visitors to one action: sign up, inquire, or open WhatsApp — ideal for ads and campaigns.",
    },
    idealFor: {
      id: ["Iklan digital dan paid traffic", "Webinar dan kelas online", "Promosi layanan atau produk", "Lead generation terfokus"],
      en: ["Digital ads and paid traffic", "Webinars and online classes", "Service or product promotions", "Focused lead generation"],
    },
    features: {
      id: ["Hero kuat dengan value proposition", "Problem-solution dan benefit section", "Form pendaftaran atau inquiry", "Sticky CTA mobile", "WhatsApp redirect"],
      en: ["Strong hero with value proposition", "Problem–solution and benefit section", "Registration or inquiry form", "Sticky mobile CTA", "WhatsApp redirect"],
    },
    deliverables: {
      id: ["Struktur halaman konversi", "Copy bisnis yang fokus", "Form atau CTA utama", "Optimasi tampilan mobile"],
      en: ["Conversion page structure", "Business-focused copy", "Primary form or CTA", "Mobile display optimisation"],
    },
    ctaLabel: { id: "Konsultasi Landing Page", en: "Discuss a Landing Page" },
  },
  {
    id: "company-profile",
    title: { id: "Website Bisnis / Company Profile", en: "Business / Company Profile Website" },
    shortDescription: {
      id: "Untuk bisnis yang butuh wajah digital resmi agar layanan, portfolio, testimoni, dan kontak terlihat rapi.",
      en: "For businesses that need an official digital presence — services, portfolio, testimonials, and contact all in one tidy place.",
    },
    description: {
      id: "Website lengkap yang menyusun identitas bisnis, layanan, bukti kerja, dan jalur kontak dalam satu pengalaman yang profesional.",
      en: "A complete website that presents your business identity, services, proof of work, and contact paths in one professional experience.",
    },
    idealFor: {
      id: ["UMKM dan bisnis jasa", "Konsultan dan profesional", "Klinik dan layanan kesehatan", "Properti dan konstruksi"],
      en: ["SMEs and service businesses", "Consultants and professionals", "Clinics and health services", "Property and construction"],
    },
    features: {
      id: ["Homepage dan halaman layanan", "Portfolio dan testimoni", "FAQ dan kontak", "WhatsApp CTA", "Struktur navigasi jelas"],
      en: ["Homepage and service pages", "Portfolio and testimonials", "FAQ and contact", "WhatsApp CTA", "Clear navigation structure"],
    },
    deliverables: {
      id: ["Arsitektur halaman bisnis", "Copy dan hierarki konten", "Form inquiry", "Tampilan responsif"],
      en: ["Business page architecture", "Copy and content hierarchy", "Inquiry form", "Responsive design"],
    },
    ctaLabel: { id: "Konsultasi Website Bisnis", en: "Discuss a Business Website" },
  },
  {
    id: "dashboard",
    title: { id: "Web App / Dashboard Ringan", en: "Web App / Lightweight Dashboard" },
    shortDescription: {
      id: "Untuk bisnis yang mulai butuh sistem internal sederhana untuk leads, booking, member, atau data operasional.",
      en: "For businesses starting to need a simple internal system for leads, bookings, members, or operational data.",
    },
    description: {
      id: "Mini app dengan dashboard, tabel data, filter, dan status — membantu tim mengelola inquiry tanpa spreadsheet yang berantakan.",
      en: "A mini app with dashboard, data tables, filters, and statuses — helping teams manage inquiries without messy spreadsheets.",
    },
    idealFor: {
      id: ["Tim sales dengan banyak leads", "Edukasi dan klinik", "Agency dan bisnis jasa", "Operasional yang mulai scale"],
      en: ["Sales teams with many leads", "Education and clinics", "Agencies and service businesses", "Scaling operations"],
    },
    features: {
      id: ["Dashboard ringkasan statistik", "Tabel data dengan filter", "Status pipeline customer", "Detail customer view", "Summary report"],
      en: ["Statistics summary dashboard", "Data tables with filters", "Customer pipeline statuses", "Customer detail view", "Summary reports"],
    },
    deliverables: {
      id: ["Layout dashboard utama", "Komponen data interaktif", "Alur status sederhana", "Preview siap ditinjau"],
      en: ["Main dashboard layout", "Interactive data components", "Simple status flow", "Review-ready preview"],
    },
    ctaLabel: { id: "Konsultasi Dashboard", en: "Discuss a Dashboard" },
  },
  {
    id: "automation",
    title: { id: "Automation & Integration", en: "Automation & Integration" },
    shortDescription: {
      id: "Untuk menghubungkan website dengan tools bisnis seperti WhatsApp, Google Sheet, database, payment, analytics, atau AI feature ringan.",
      en: "For connecting your website to business tools — WhatsApp, Google Sheets, databases, payments, analytics, or lightweight AI features.",
    },
    description: {
      id: "Integrasi yang membuat website tidak hanya tampil bagus, tetapi juga terhubung ke alur bisnis nyata — form, payment, tracking, dan automation.",
      en: "Integrations that make your website not just look good, but connect to real business flows — forms, payments, tracking, and automation.",
    },
    idealFor: {
      id: ["Campaign dengan form capture", "Checkout dan payment flow", "Follow-up customer otomatis", "Lead tracking terstruktur"],
      en: ["Campaigns with form capture", "Checkout and payment flows", "Automated customer follow-ups", "Structured lead tracking"],
    },
    features: {
      id: ["Form integration", "WhatsApp redirect", "Payment-ready flow", "GTM/Pixel-ready", "Automation ringan"],
      en: ["Form integration", "WhatsApp redirect", "Payment-ready flow", "GTM / Pixel-ready", "Lightweight automation"],
    },
    deliverables: {
      id: ["Mapping alur integrasi", "Setup sesuai kebutuhan MVP", "Testing alur end-to-end", "Dokumentasi dasar"],
      en: ["Integration flow mapping", "MVP-aligned setup", "End-to-end flow testing", "Basic documentation"],
    },
    ctaLabel: { id: "Diskusikan Integrasi", en: "Discuss an Integration" },
  },
];
