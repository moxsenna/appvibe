import type { ProcessStep } from "@/types/process";

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    step: 1,
    title: { id: "Discovery", en: "Discovery" },
    description: {
      id: "Kami pahami bisnis, target customer, layanan, dan tujuan utama website atau app yang ingin Anda bangun.",
      en: "We get to know your business, target customers, services, and the core goals of the website or app you want to build.",
    },
  },
  {
    id: "struktur",
    step: 2,
    title: { id: "Struktur", en: "Structure" },
    description: {
      id: "Kami susun alur halaman, CTA, section, dan konten yang perlu tampil agar pengunjung mudah memahami bisnis Anda.",
      en: "We map out page flow, CTAs, sections, and content so visitors can grasp your business at a glance.",
    },
  },
  {
    id: "visual",
    step: 3,
    title: { id: "Visual direction", en: "Visual direction" },
    description: {
      id: "Kami tentukan gaya visual agar sesuai positioning bisnis: premium, friendly, profesional, atau modern.",
      en: "We define a visual style aligned with your positioning — premium, friendly, professional, or modern.",
    },
  },
  {
    id: "build",
    step: 4,
    title: { id: "Build", en: "Build" },
    description: {
      id: "Website atau app dibuat responsif dengan komponen yang rapi, siap ditinjau, dan mudah dikembangkan bertahap.",
      en: "Your website or app is built responsive, with clean components — ready to review and extend in stages.",
    },
  },
  {
    id: "review",
    step: 5,
    title: { id: "Review", en: "Review" },
    description: {
      id: "Anda meninjau hasilnya, lalu kami rapikan copy, layout, dan detail penting sebelum go-live.",
      en: "You review the result, and we polish copy, layout, and critical details before go-live.",
    },
  },
  {
    id: "launch",
    step: 6,
    title: { id: "Launch-ready", en: "Launch-ready" },
    description: {
      id: "Website siap dipublish dan dibagikan ke calon pelanggan, bio sosial media, iklan, atau proposal.",
      en: "Your site is ready to publish and share — for prospects, social bio links, ads, or proposals.",
    },
  },
];
