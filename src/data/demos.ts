import { same } from "@/i18n/localized";
import type { DemoItem } from "@/types/demo";

export const demoItems: DemoItem[] = [
  {
    id: "demo-company-profile",
    slug: "company-profile",
    title: {
      id: "Demo Website Company Profile Jasa Profesional",
      en: "Professional Services Company Profile Website Demo",
    },
    category: "company-profile",
    categoryLabel: { id: "Company Profile", en: "Company Profile" },
    niche: {
      id: "Konsultan, kontraktor, agency, vendor B2B, interior, legal",
      en: "Consultants, contractors, agencies, B2B vendors, interior, legal",
    },
    summary: {
      id: "Demo company profile Arunika Konsultan — hero trust, 6 layanan, portfolio proyek, testimoni skenario, dan form inquiry terstruktur dalam satu link resmi.",
      en: "Arunika Konsultan company profile demo — trust-focused hero, six services, project portfolio, scenario testimonials, and a structured inquiry form in one official link.",
    },
    tagline: {
      id: "Bisnis jasa tampil lebih rapi dan kredibel",
      en: "Service businesses look clearer and more credible",
    },
    brandName: same("Arunika Konsultan"),
    brandColor: "#2563EB",
    accentColor: "#7C3AED",
    ctaLabel: { id: "Konsultasi AppVibe", en: "Consult with AppVibe" },
    status: "live",
    tags: {
      id: ["Company Profile", "WhatsApp CTA", "Form Inquiry", "Mobile Friendly"],
      en: ["Company Profile", "WhatsApp CTA", "Inquiry Form", "Mobile Friendly"],
    },
    relatedCaseStudySlug: "company-profile",
  },
  {
    id: "demo-webinar-landing",
    slug: "webinar-landing",
    title: {
      id: "Demo Landing Page Webinar & Campaign",
      en: "Webinar & Campaign Landing Page Demo",
    },
    category: "landing-page",
    categoryLabel: { id: "Landing Page", en: "Landing Page" },
    niche: {
      id: "Webinar, kelas online, bootcamp, seminar, campaign promosi",
      en: "Webinars, online classes, bootcamps, seminars, promotional campaigns",
    },
    summary: {
      id: "Demo landing page SkillPath Studio (simulasi) — hero campaign, problem & benefit, agenda 5 sesi, 2 speaker, 4 bonus, dan form pendaftaran 6 field.",
      en: "SkillPath Studio landing page demo (simulation) — campaign hero, problem and benefits, five-session agenda, two speakers, four bonuses, and a six-field registration form.",
    },
    tagline: {
      id: "Satu link promosi yang fokus konversi",
      en: "One promotion link built for conversion",
    },
    brandName: same("SkillPath Studio"),
    brandColor: "#7C3AED",
    accentColor: "#06B6D4",
    ctaLabel: { id: "Diskusi Campaign", en: "Discuss Your Campaign" },
    status: "live",
    tags: {
      id: ["Landing Page", "Webinar", "Lead Capture", "WhatsApp CTA"],
      en: ["Landing Page", "Webinar", "Lead Capture", "WhatsApp CTA"],
    },
    relatedCaseStudySlug: "webinar-landing",
  },
  {
    id: "demo-klinik",
    slug: "klinik",
    title: {
      id: "Demo Website Klinik, Health, dan Beauty",
      en: "Clinic, Health & Beauty Website Demo",
    },
    category: "clinic",
    categoryLabel: { id: "Klinik", en: "Clinic" },
    niche: {
      id: "Klinik kecantikan, dental, bidan, psikolog, wellness center, fisioterapi",
      en: "Aesthetic clinics, dental, midwifery, psychology, wellness centers, physiotherapy",
    },
    summary: {
      id: "Demo NaturaCare Clinic — 8 layanan, 4 profil tenaga ahli, jadwal praktik 7 hari, cara booking 4 langkah, dan FAQ aman tanpa klaim medis berlebihan.",
      en: "NaturaCare Clinic demo — eight services, four specialist profiles, seven-day practice schedule, four-step booking flow, and cautious FAQ without overstated medical claims.",
    },
    tagline: {
      id: "Klinik terasa lebih tenang dan terpercaya",
      en: "Clinics feel calmer and more trustworthy",
    },
    brandName: same("NaturaCare Clinic"),
    brandColor: "#06B6D4",
    accentColor: "#0EA5E9",
    ctaLabel: { id: "Diskusi Booking Klinik", en: "Discuss Clinic Booking" },
    status: "live",
    tags: {
      id: ["Klinik", "Booking CTA", "Mobile Friendly"],
      en: ["Clinic", "Booking CTA", "Mobile Friendly"],
    },
    relatedCaseStudySlug: "klinik",
  },
  {
    id: "demo-properti",
    slug: "properti",
    title: {
      id: "Demo Website Properti dan Konstruksi",
      en: "Property & Construction Website Demo",
    },
    category: "property",
    categoryLabel: { id: "Properti", en: "Property" },
    niche: {
      id: "Developer kecil, agen, kontraktor, renovasi, interior, konstruksi",
      en: "Small developers, agents, contractors, renovation, interior, construction",
    },
    summary: {
      id: "Demo GrahaNusa Properti & Karya — 6 listing dengan filter, detail spesifikasi unit, galeri visual per proyek, dan form survei lokasi 7 field.",
      en: "GrahaNusa Property & Works demo — six filterable listings, unit specification detail, per-project visual gallery, and a seven-field site survey form.",
    },
    tagline: {
      id: "Listing dan proyek terlihat lebih profesional",
      en: "Listings and projects look more professional",
    },
    brandName: same("GrahaNusa Properti"),
    brandColor: "#4F46E5",
    accentColor: "#0EA5E9",
    ctaLabel: { id: "Diskusi Listing Properti", en: "Discuss Property Listings" },
    status: "live",
    tags: {
      id: ["Properti", "Listing", "Galeri", "Survei Lokasi"],
      en: ["Property", "Listings", "Gallery", "Site Survey"],
    },
    relatedCaseStudySlug: "properti",
  },
  {
    id: "demo-lead-dashboard",
    slug: "lead-dashboard",
    title: {
      id: "Demo Dashboard Lead Management (CRM Lite)",
      en: "Lead Management Dashboard Demo (CRM Lite)",
    },
    category: "dashboard",
    categoryLabel: { id: "CRM Lite", en: "CRM Lite" },
    niche: {
      id: "UMKM, klinik, edukasi, properti, agency, konsultan, sales team",
      en: "SMBs, clinics, education, property, agencies, consultants, sales teams",
    },
    summary: {
      id: "Demo LeadFlow CRM Lite — 50 lead simulasi, pipeline kanban 5 status, detail drawer, source tracking, dan laporan ringkas untuk owner dan tim sales.",
      en: "LeadFlow CRM Lite demo — fifty simulated leads, five-status kanban pipeline, detail drawer, source tracking, and concise reports for owners and sales teams.",
    },
    tagline: {
      id: "Kelola leads dari banyak channel tanpa tercecer",
      en: "Manage leads from every channel without losing track",
    },
    brandName: same("LeadFlow CRM Lite"),
    brandColor: "#10B981",
    accentColor: "#06B6D4",
    ctaLabel: { id: "Diskusi CRM Lite", en: "Discuss CRM Lite" },
    status: "live",
    tags: {
      id: ["CRM Lite", "Lead Management", "Sales Dashboard"],
      en: ["CRM Lite", "Lead Management", "Sales Dashboard"],
    },
    relatedCaseStudySlug: "lead-dashboard",
  },
];