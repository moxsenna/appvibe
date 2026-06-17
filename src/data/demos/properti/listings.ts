import { same, type Localized } from "@/i18n/localized";

export type ListingTypeKey =
  | "rumah"
  | "ruko"
  | "kavling"
  | "villa"
  | "renovasi"
  | "interior";

export type ListingStatusKey = "tersedia" | "pre-order" | "slot-terbatas";

export type Listing = {
  id: string;
  title: Localized<string>;
  typeKey: ListingTypeKey;
  category: Localized<string>;
  location: Localized<string>;
  priceRange: Localized<string>;
  landSize: Localized<string>;
  buildingSize: Localized<string>;
  bedrooms: Localized<string>;
  bathrooms: Localized<string>;
  statusKey: ListingStatusKey;
  description: Localized<string>;
  highlights: Localized<string[]>;
  facilities: Localized<string[]>;
  galleryCount: number;
};

export const listingTypeLabels: Record<ListingTypeKey, Localized<string>> = {
  rumah: { id: "Rumah", en: "House" },
  ruko: { id: "Ruko", en: "Shophouse" },
  kavling: { id: "Kavling", en: "Land plot" },
  villa: { id: "Villa", en: "Villa" },
  renovasi: { id: "Renovasi", en: "Renovation" },
  interior: { id: "Interior", en: "Interior" },
};

export const listingStatusLabels: Record<ListingStatusKey, Localized<string>> = {
  tersedia: { id: "Tersedia", en: "Available" },
  "pre-order": { id: "Pre-order", en: "Pre-order" },
  "slot-terbatas": { id: "Slot terbatas", en: "Limited slots" },
};

export const typeFilterKeys: ListingTypeKey[] = [
  "rumah",
  "ruko",
  "kavling",
  "villa",
  "renovasi",
  "interior",
];

export const locationFilterKeys = [
  "jabodetabek",
  "bandung",
  "surabaya",
  "yogyakarta",
] as const;

export type LocationFilterKey = (typeof locationFilterKeys)[number];

export const locationFilterLabels: Record<LocationFilterKey, Localized<string>> = {
  jabodetabek: same("Jabodetabek"),
  bandung: same("Bandung"),
  surabaya: same("Surabaya"),
  yogyakarta: same("Yogyakarta"),
};

export const statusFilterKeys: ListingStatusKey[] = [
  "tersedia",
  "pre-order",
  "slot-terbatas",
];

/** Match listing location text to a location filter key. */
export function listingMatchesLocationFilter(
  listing: Listing,
  filterKey: LocationFilterKey,
  lang: "id" | "en",
): boolean {
  const loc = listing.location[lang].toLowerCase();
  switch (filterKey) {
    case "jabodetabek":
      return loc.includes("tangerang") || loc.includes("jabodetabek");
    case "bandung":
      return loc.includes("bandung");
    case "surabaya":
      return loc.includes("surabaya");
    case "yogyakarta":
      return loc.includes("yogyakarta");
    default:
      return false;
  }
}

export const listings: Listing[] = [
  {
    id: "arunika-residence",
    title: {
      id: "Cluster Arunika Residence",
      en: "Arunika Residence Cluster",
    },
    typeKey: "rumah",
    category: { id: "Rumah siap huni", en: "Move-in ready home" },
    location: { id: "Tangerang", en: "Tangerang" },
    priceRange: { id: "Rp 1,4–1,8 M", en: "IDR 1.4–1.8B" },
    landSize: { id: "LT 72–96 m²", en: "Land 72–96 m²" },
    buildingSize: { id: "LB 65–85 m²", en: "Building 65–85 m²" },
    bedrooms: { id: "2–3 KT", en: "2–3 BR" },
    bathrooms: { id: "2 KM", en: "2 BA" },
    statusKey: "tersedia",
    description: {
      id: "Cluster rumah 2 lantai dengan desain modern minimalis, lingkungan asri, dan akses tol yang dekat. Cocok untuk keluarga muda yang ingin tinggal di area berkembang dengan harga masih masuk akal.",
      en: "Two-storey cluster homes with modern minimalist design, green surroundings, and nearby toll access. Suited for young families seeking a growing area at a sensible price point.",
    },
    highlights: {
      id: ["Siap huni", "Dekat tol BSD", "Lingkungan cluster", "One gate system"],
      en: ["Move-in ready", "Near BSD toll", "Gated cluster", "Single-gate access"],
    },
    facilities: {
      id: ["Pasar modern 5 mnt", "Sekolah internasional 10 mnt", "RS 8 mnt"],
      en: ["Supermarket 5 min", "International school 10 min", "Hospital 8 min"],
    },
    galleryCount: 5,
  },
  {
    id: "ruko-nusa-avenue",
    title: { id: "Ruko Nusa Avenue", en: "Nusa Avenue Shophouse" },
    typeKey: "ruko",
    category: { id: "Ruko & komersial", en: "Shophouse & commercial" },
    location: { id: "Bandung", en: "Bandung" },
    priceRange: { id: "Rp 2,1–2,6 M", en: "IDR 2.1–2.6B" },
    landSize: { id: "LT 4×12 m", en: "Land 4×12 m" },
    buildingSize: { id: "LB 96 m² (2 lantai)", en: "Building 96 m² (2 floors)" },
    bedrooms: { id: "—", en: "—" },
    bathrooms: { id: "1 KM", en: "1 BA" },
    statusKey: "slot-terbatas",
    description: {
      id: "Ruko strategis di koridor komersial Bandung, cocok untuk kantor cabang, klinik kecil, atau F&B. Lokasi traffic tinggi dan area parkir luas.",
      en: "Strategic shophouse on a busy Bandung commercial corridor — suitable for a branch office, small clinic, or F&B. High traffic and generous parking.",
    },
    highlights: {
      id: ["Lokasi komersial", "2 lantai", "Parkir luas", "Sertifikat SHM"],
      en: ["Commercial corridor", "Two floors", "Spacious parking", "Freehold title (SHM)"],
    },
    facilities: {
      id: ["Akses jalan utama", "Dekat kampus", "Parkir 4 mobil"],
      en: ["Main road access", "Near campus", "Parking for 4 cars"],
    },
    galleryCount: 4,
  },
  {
    id: "kavling-bukit-asri",
    title: { id: "Kavling Bukit Asri", en: "Bukit Asri Land Plots" },
    typeKey: "kavling",
    category: { id: "Kavling & lahan", en: "Land plots" },
    location: { id: "Yogyakarta", en: "Yogyakarta" },
    priceRange: { id: "Rp 350–600 jt", en: "IDR 350–600M" },
    landSize: { id: "LT 100–200 m²", en: "Land 100–200 m²" },
    buildingSize: { id: "—", en: "—" },
    bedrooms: { id: "—", en: "—" },
    bathrooms: { id: "—", en: "—" },
    statusKey: "pre-order",
    description: {
      id: "Kavling di kawasan berkembang Yogyakarta, view pegunungan, udara sejuk. Cocok untuk investasi jangka panjang atau dibangun villa pribadi.",
      en: "Plots in a growing Yogyakarta area with mountain views and cool air. Ideal for long-term investment or a private villa build.",
    },
    highlights: {
      id: ["View pegunungan", "UDH selesai", "Akses jalan 6 m", "Cluster eksklusif"],
      en: ["Mountain view", "Zoning (UDH) complete", "6 m road access", "Exclusive cluster"],
    },
    facilities: {
      id: ["Tanah view sawah", "Akses 15 mnt ke kota", "Legalitas lengkap"],
      en: ["Rice-field views", "15 min to city center", "Complete legal documentation"],
    },
    galleryCount: 4,
  },
  {
    id: "villa-sagara",
    title: { id: "Villa Sagara", en: "Villa Sagara" },
    typeKey: "villa",
    category: { id: "Villa investasi", en: "Investment villa" },
    location: { id: "Surabaya", en: "Surabaya" },
    priceRange: { id: "Rp 3,5–4,2 M", en: "IDR 3.5–4.2B" },
    landSize: { id: "LT 250 m²", en: "Land 250 m²" },
    buildingSize: { id: "LB 180 m²", en: "Building 180 m²" },
    bedrooms: { id: "3 KT", en: "3 BR" },
    bathrooms: { id: "3 KM", en: "3 BA" },
    statusKey: "slot-terbatas",
    description: {
      id: "Villa investasi dengan konsep resort, private pool, dan view laut cocok untuk rental harian atau staycation keluarga. Sudah beroperasi dengan rating tinggi di platform sewa.",
      en: "Resort-style investment villa with a private pool and sea view — suited for daily rental or family staycations. Already operating with strong ratings on rental platforms.",
    },
    highlights: {
      id: ["Private pool", "View laut", "Operasional sewa", "Rating 4.8"],
      en: ["Private pool", "Sea view", "Active rental ops", "4.8 rating"],
    },
    facilities: {
      id: ["Pantai 200 m", "Restoran 5 mnt", "Sewa harian aktif"],
      en: ["Beach 200 m", "Restaurants 5 min", "Active daily rental"],
    },
    galleryCount: 5,
  },
  {
    id: "renovasi-rumah-cendana",
    title: { id: "Renovasi Rumah Cendana", en: "Cendana Home Renovation" },
    typeKey: "renovasi",
    category: { id: "Renovasi & bangun rumah", en: "Renovation & home build" },
    location: { id: "Jabodetabek", en: "Greater Jakarta" },
    priceRange: { id: "Mulai Rp 180 jt", en: "From IDR 180M" },
    landSize: { id: "Sesuai rumah existing", en: "Per existing home" },
    buildingSize: { id: "Tambah 20–60 m²", en: "Add 20–60 m²" },
    bedrooms: { id: "+1 KT opsional", en: "+1 BR optional" },
    bathrooms: { id: "+1 KM opsional", en: "+1 BA optional" },
    statusKey: "tersedia",
    description: {
      id: "Layanan renovasi dan perluasan rumah untuk rumah tapak. Cocok untuk keluarga yang ingin menambah ruang tanpa pindah. Termasuk desain, RAB, dan eksekusi.",
      en: "Renovation and expansion for landed homes — for families who need more space without relocating. Includes design, cost estimate (RAB), and execution.",
    },
    highlights: {
      id: ["Desain + eksekusi", "TIM lokal", "Garansi 6 bulan", "Tambah ruang"],
      en: ["Design + build", "Local team", "6-month warranty", "Added living space"],
    },
    facilities: {
      id: ["Konsultasi gratis", "Survey lokasi", "RAB transparan"],
      en: ["Free consultation", "Site survey", "Transparent cost breakdown"],
    },
    galleryCount: 4,
  },
  {
    id: "interior-senopati",
    title: { id: "Interior Apartemen Senopati", en: "Senopati Apartment Interior" },
    typeKey: "interior",
    category: { id: "Interior & komersial", en: "Interior & commercial" },
    location: { id: "Jabodetabek", en: "Greater Jakarta" },
    priceRange: { id: "Mulai Rp 95 jt", en: "From IDR 95M" },
    landSize: { id: "—", en: "—" },
    buildingSize: { id: "Apartemen 50–80 m²", en: "Apartment 50–80 m²" },
    bedrooms: { id: "1–2 KT", en: "1–2 BR" },
    bathrooms: { id: "1 KM", en: "1 BA" },
    statusKey: "slot-terbatas",
    description: {
      id: "Jasa interior apartemen compact dengan konsep modern. Termasuk custom furnitur, kitchen set, dan pencahayaan. Cocok untuk pasangan muda atau single professional.",
      en: "Compact apartment interior with a modern concept — custom furniture, kitchen set, and lighting. Suited for young couples or single professionals.",
    },
    highlights: {
      id: ["Custom furniture", "Kitchen set", "Pencahayaan built-in", "1 bulan selesai"],
      en: ["Custom furniture", "Kitchen set", "Built-in lighting", "One-month turnaround"],
    },
    facilities: {
      id: ["Showroom Jakarta", "Konsultasi online", "After-sales service"],
      en: ["Jakarta showroom", "Online consultation", "After-sales service"],
    },
    galleryCount: 5,
  },
];