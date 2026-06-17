import { same, type Localized } from "@/i18n/localized";

export const brand = {
  name: same("GrahaNusa Properti & Karya"),
  tagline: {
    id: "Temukan properti dan proyek hunian dengan informasi yang lebih jelas.",
    en: "Discover property and residential projects with clearer, comparable information.",
  } satisfies Localized<string>,
  oneLiner: {
    id: "GrahaNusa Properti & Karya membantu keluarga dan investor menemukan hunian, ruko, dan proyek properti yang sesuai kebutuhan — dengan informasi yang lengkap, transparan, dan mudah dibandingkan.",
    en: "GrahaNusa Properti & Karya helps families and investors find homes, shophouses, and property projects that fit their goals — with complete, transparent information that is easy to compare.",
  } satisfies Localized<string>,
  address: same("Jl. Taman Sari Indah No. 12, Bandung, Jawa Barat"),
  phone: same("0812-0000-9999"),
  email: same("hello@grahanusa.example"),
  primaryColor: "#0F4C5C",
  accentColor: "#2D6A4F",
  disclaimer: {
    id: "Harga, ketersediaan, dan spesifikasi dapat berubah tanpa pemberitahuan. Konfirmasi final dilakukan saat survei lokasi atau pertemuan dengan tim GrahaNusa.",
    en: "Pricing, availability, and specifications may change without notice. Final terms are confirmed during a site visit or meeting with the GrahaNusa team.",
  } satisfies Localized<string>,
  demoDisclaimer: {
    id: "GrahaNusa Properti & Karya adalah brand dummy untuk demo portfolio AppVibe Studio. Semua listing, harga, dan visual bersifat simulasi.",
    en: "GrahaNusa Properti & Karya is a fictitious brand for the AppVibe Studio portfolio demo. All listings, prices, and visuals are simulated.",
  } satisfies Localized<string>,
  mainCta: {
    id: "Jadwalkan Survei Lokasi",
    en: "Schedule a Site Visit",
  } satisfies Localized<string>,
  secondaryCta: {
    id: "Lihat Semua Listing",
    en: "View All Listings",
  } satisfies Localized<string>,
};

export type Brand = typeof brand;