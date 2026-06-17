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
  name: same("LeadFlow CRM Lite"),
  tagline: {
    id: "Kelola lead dari banyak channel tanpa tercecer",
    en: "Manage leads from every channel without losing track",
  },
  oneLiner: {
    id: "LeadFlow CRM Lite membantu owner, admin, dan tim sales memantau lead dari form website, iklan, WhatsApp, referral, dan event — dalam satu dashboard ringan yang mudah dipakai.",
    en: "LeadFlow CRM Lite helps owners, admins, and sales teams monitor leads from website forms, ads, WhatsApp, referrals, and events — in one lightweight dashboard that is easy to adopt.",
  },
  primaryColor: "#2563EB",
  accentColor: "#06B6D4",
  adminEmail: "admin@leadflow.example",
  adminPassword: "demo1234",
  disclaimer: {
    id: "Dashboard LeadFlow CRM Lite pada demo ini adalah produk portofolio simulasi AppVibe Studio. Semua lead, nama, dan angka bersifat contoh — bukan data klien nyata.",
    en: "The LeadFlow CRM Lite dashboard in this demo is a simulated portfolio product from AppVibe Studio. All leads, names, and figures are illustrative — not real client data.",
  },
  whatsappPrefill: {
    id: "Halo AppVibe, saya tertarik dengan LeadFlow CRM Lite untuk bisnis saya.",
    en: "Hello AppVibe, I am interested in LeadFlow CRM Lite for my business.",
  },
};

export type Brand = typeof brand;