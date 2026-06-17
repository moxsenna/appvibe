import type { IndustryItem } from "@/types/industry";

export const industries: IndustryItem[] = [
  {
    id: "umkm",
    name: { id: "UMKM & Produk Lokal", en: "Small Businesses & Local Products" },
    problem: {
      id: "Produk bagus tapi belum punya link resmi. Calon pembeli sulit memahami katalog dan cara pemesanan.",
      en: "Great products but no official link. Prospects struggle to browse the catalogue and figure out how to order.",
    },
    recommendedSolution: {
      id: "Website company profile atau landing page dengan katalog produk, cara order, dan CTA WhatsApp.",
      en: "A company-profile site or landing page with a product catalogue, ordering info, and a WhatsApp CTA.",
    },
    relatedPortfolioSlugs: ["company-profile"],
    suitableServices: ["company-profile", "landing-page"],
  },
  {
    id: "jasa-profesional",
    name: { id: "Jasa Profesional", en: "Professional Services" },
    problem: {
      id: "Layanan dijelaskan berulang via chat. Portfolio tidak tertata dan bisnis terlihat kurang kredibel.",
      en: "Services are explained over and over in chat. The portfolio is scattered, making the business look less credible.",
    },
    recommendedSolution: {
      id: "Website company profile dengan layanan, portfolio proyek, testimoni, dan form inquiry.",
      en: "A company-profile site with services, project portfolio, testimonials, and an inquiry form.",
    },
    relatedPortfolioSlugs: ["company-profile"],
    suitableServices: ["company-profile"],
  },
  {
    id: "edukasi",
    name: { id: "Edukasi & Pelatihan", en: "Education & Training" },
    problem: {
      id: "Promosi kelas atau webinar tersebar. Pendaftaran manual dan data peserta tidak rapi.",
      en: "Class and webinar promotions are scattered. Manual registrations and participant data are messy.",
    },
    recommendedSolution: {
      id: "Landing page campaign dengan agenda, benefit, form pendaftaran, dan CTA jelas.",
      en: "A campaign landing page with agenda, benefits, registration form, and a clear CTA.",
    },
    relatedPortfolioSlugs: ["webinar-landing"],
    suitableServices: ["landing-page"],
  },
  {
    id: "klinik",
    name: { id: "Klinik & Kecantikan", en: "Clinics & Aesthetics" },
    problem: {
      id: "Pasien sering bertanya layanan, harga, dan jadwal. Informasi tidak tersusun di satu tempat.",
      en: "Patients repeatedly ask about services, prices, and schedules. Information isn't organised in one place.",
    },
    recommendedSolution: {
      id: "Website klinik dengan daftar layanan, profil tenaga ahli, jadwal, dan booking CTA.",
      en: "A clinic website with service list, practitioner profiles, schedules, and a booking CTA.",
    },
    relatedPortfolioSlugs: ["klinik"],
    suitableServices: ["company-profile"],
  },
  {
    id: "properti",
    name: { id: "Properti & Konstruksi", en: "Property & Construction" },
    problem: {
      id: "Listing tersebar di chat dan PDF. Calon pembeli sulit membandingkan proyek.",
      en: "Listings are scattered across chat and PDF. Buyers struggle to compare projects.",
    },
    recommendedSolution: {
      id: "Website properti dengan listing, filter, galeri, dan form inquiry survei.",
      en: "A property website with listings, filters, gallery, and a survey inquiry form.",
    },
    relatedPortfolioSlugs: ["properti"],
    suitableServices: ["company-profile", "landing-page"],
  },
  {
    id: "restoran",
    name: { id: "Restoran & Kuliner", en: "Restaurants & F&B" },
    problem: {
      id: "Menu dan promo hanya di sosial media. Tidak ada halaman resmi untuk reservasi atau catering.",
      en: "Menus and promos live only on social media. There's no official page for reservations or catering orders.",
    },
    recommendedSolution: {
      id: "Website bisnis dengan menu, promo, lokasi, dan CTA reservasi via WhatsApp.",
      en: "A business website with menu, promos, location, and a WhatsApp reservation CTA.",
    },
    relatedPortfolioSlugs: ["company-profile"],
    suitableServices: ["company-profile", "landing-page"],
  },
  {
    id: "travel",
    name: { id: "Travel & Hospitality", en: "Travel & Hospitality" },
    problem: {
      id: "Paket wisata dijelaskan manual. Calon tamu butuh informasi lengkap sebelum booking.",
      en: "Travel packages are explained manually. Guests need full details before they can book.",
    },
    recommendedSolution: {
      id: "Landing page paket wisata atau website dengan katalog, itinerary, dan form booking.",
      en: "A travel-package landing page or website with catalogue, itinerary, and a booking form.",
    },
    relatedPortfolioSlugs: ["webinar-landing", "company-profile"],
    suitableServices: ["landing-page", "company-profile"],
  },
  {
    id: "personal-brand",
    name: { id: "Personal Brand, Coach & Konsultan", en: "Personal Brand, Coach & Consultant" },
    problem: {
      id: "Keahlian tidak terlihat profesional online. Tidak ada tempat untuk showcase program dan testimoni.",
      en: "Expertise doesn't look professional online. There's no place to showcase programmes and testimonials.",
    },
    recommendedSolution: {
      id: "Website personal brand dengan bio, program, testimoni, dan CTA konsultasi.",
      en: "A personal-brand website with bio, programmes, testimonials, and a consultation CTA.",
    },
    relatedPortfolioSlugs: ["company-profile", "webinar-landing"],
    suitableServices: ["company-profile", "landing-page"],
  },
];
