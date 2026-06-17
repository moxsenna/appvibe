import type { Localized } from "@/i18n/localized";

export type ProcessStep = {
  number: string;
  title: Localized<string>;
  description: Localized<string>;
};

export const process: ProcessStep[] = [
  {
    number: "1",
    title: {
      id: "Lihat listing yang tersedia",
      en: "Browse available listings",
    },
    description: {
      id: "Browse 6 listing di website dengan foto, spesifikasi, dan highlight. Filter berdasarkan tipe, lokasi, atau status sesuai kebutuhan Anda.",
      en: "Browse six sample listings with photos, specifications, and highlights. Filter by type, location, or status to match your goals.",
    },
  },
  {
    number: "2",
    title: {
      id: "Bandingkan unit yang menarik",
      en: "Compare shortlisted units",
    },
    description: {
      id: "Buka beberapa unit untuk membandingkan luas, harga, dan fasilitas. Bookmark atau catat yang paling sesuai dengan kebutuhan keluarga atau investasi Anda.",
      en: "Open several units to compare area, price, and amenities. Note the options that best fit your family or investment criteria.",
    },
  },
  {
    number: "3",
    title: {
      id: "Lihat galeri visual unit",
      en: "Review the visual gallery",
    },
    description: {
      id: "Klik galeri untuk melihat foto interior, eksterior, dan area sekitar. Galeri membantu Anda membayangkan kondisi unit sebelum survei.",
      en: "Open the gallery for interior, exterior, and neighborhood views. It helps you picture the unit before visiting in person.",
    },
  },
  {
    number: "4",
    title: {
      id: "Isi form survei lokasi",
      en: "Submit the site-visit form",
    },
    description: {
      id: "Form singkat 7 field untuk menyampaikan unit pilihan, jadwal kunjungan, dan kebutuhan. Tim GrahaNusa akan menghubungi dalam 1×24 jam kerja.",
      en: "A short seven-field form for your preferred unit, visit timing, and needs. The GrahaNusa team responds within one business day.",
    },
  },
  {
    number: "5",
    title: {
      id: "Survei lokasi dan konsultasi",
      en: "Site visit and consultation",
    },
    description: {
      id: "Tim GrahaNusa mendampingi survei lokasi, menjelaskan detail unit, dan menjawab pertanyaan teknis. Anda tidak perlu survey sendiri tanpa konteks.",
      en: "The GrahaNusa team accompanies the visit, walks through unit details, and answers technical questions — you are not touring alone without context.",
    },
  },
];