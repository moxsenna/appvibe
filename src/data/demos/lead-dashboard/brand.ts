import { same, type Localized } from "@/i18n/localized";

export type LeadDashboardBrand = {
  name: Localized<string>;
  tagline: Localized<string>;
  oneLiner: Localized<string>;
  primaryColor: string;
  accentColor: string;
  adminEmail: string;
  adminPassword: string;
  disclaimer: Localized<string>;
  whatsappPrefill: Localized<string>;
};

export const brand: LeadDashboardBrand = {
  name: same("LeadFlow CRM"),
  tagline: {
    id: "Kelola lead dari banyak channel tanpa tercecer",
    en: "Manage leads from every channel without losing track",
  },
  oneLiner: {
    id: "LeadFlow CRM membantu owner, admin, dan tim sales memantau lead dari form website, iklan, WhatsApp, referral, dan event — dalam satu dashboard ringan yang mudah dipakai.",
    en: "LeadFlow CRM helps owners, admins, and sales teams monitor leads from website forms, ads, WhatsApp, referrals, and events — in one lightweight dashboard that is easy to adopt.",
  },
  primaryColor: "#2563EB",
  accentColor: "#06B6D4",
  adminEmail: "admin@leadflow.example",
  adminPassword: "demo1234",
  disclaimer: {
    id: "Semua data pada dashboard ini adalah data contoh untuk keperluan demonstrasi produk.",
    en: "All data in this dashboard is sample data for product demonstration purposes.",
  },
  whatsappPrefill: {
    id: "Halo AppVibe, saya tertarik dengan LeadFlow CRM untuk bisnis saya.",
    en: "Hello AppVibe, I am interested in LeadFlow CRM for my business.",
  },
};

export type Brand = typeof brand;