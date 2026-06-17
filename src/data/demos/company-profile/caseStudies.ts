import type { Localized } from "@/i18n/localized";

export type CaseStudyMetric = {
  label: Localized<string>;
  value: Localized<string>;
};

export type CaseStudy = {
  id: string;
  industry: Localized<string>;
  scope: Localized<string>;
  challenge: Localized<string>;
  approach: Localized<string>;
  outcome: Localized<string>;
  metrics: CaseStudyMetric[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "vendor-b2b-interior",
    industry: {
      id: "Vendor B2B · Furniture Interior",
      en: "B2B vendor · Interior furniture",
    },
    scope: {
      id: "Digitalisasi inquiry multi-channel",
      en: "Multi-channel inquiry digitization",
    },
    challenge: {
      id: "Tim menerima inquiry dari 4 channel berbeda (Instagram, WhatsApp, website, referral) tanpa struktur. Informasi kebutuhan klien tercecer di chat berbeda dan tim sering menyiapkan materi meeting yang tidak relevan.",
      en: "The team received inquiries from four channels (Instagram, WhatsApp, website, referrals) with no structure. Client needs were scattered across chats and meeting prep was often off-target.",
    },
    approach: {
      id: "Membuat form inquiry terstruktur dengan 6 field, template balasan untuk 5 jenis pertanyaan umum, dan SOP tim sales untuk konsolidasi inquiry harian. Tim dilatih 1 minggu untuk mengadopsi workflow baru.",
      en: "A structured six-field inquiry form, reply templates for five common question types, and a daily sales consolidation SOP — with one week of team adoption coaching.",
    },
    outcome: {
      id: "Tim mempersiapkan materi meeting sesuai kategori klien. Rata-rata waktu respons turun dari 2 hari menjadi 4 jam. Conversion dari inquiry ke meeting naik 35% dalam 1 bulan pertama.",
      en: "Meeting materials matched client category. Average first response dropped from two days to four hours. Inquiry-to-meeting conversion rose 35% in the first month.",
    },
    metrics: [
      {
        label: { id: "Waktu respons", en: "Response time" },
        value: { id: "2 hari → 4 jam", en: "2 days → 4 hours" },
      },
      {
        label: { id: "Conversion inquiry → meeting", en: "Inquiry → meeting" },
        value: { id: "+35%", en: "+35%" },
      },
      {
        label: { id: "Template balasan", en: "Reply templates" },
        value: { id: "5 jenis", en: "5 types" },
      },
    ],
  },
  {
    id: "klinik-kecantikan",
    industry: {
      id: "Klinik Kecantikan · 3 Cabang",
      en: "Aesthetic clinic · 3 locations",
    },
    scope: {
      id: "Standarisasi customer service",
      en: "Customer service standardization",
    },
    challenge: {
      id: "Standar jawaban CS berbeda antar staff dan antar cabang. Calon pasien sering komplain soal informasi yang tidak konsisten, dan onboarding staff baru makan waktu 2 minggu.",
      en: "CS answers varied by staff and branch. Prospects complained about inconsistent information, and new hire onboarding took two weeks.",
    },
    approach: {
      id: "Menyusun SOP CS untuk 8 skenario utama, template jawaban 20 jenis untuk pertanyaan berulang, dan checklist harian untuk memastikan standar terjaga. Disertai sesi roleplay untuk staff baru.",
      en: "CS SOPs for eight main scenarios, twenty reply templates for repeat questions, daily checklists, and roleplay for new staff.",
    },
    outcome: {
      id: "Onboarding staff baru turun dari 2 minggu menjadi 5 hari. Komplain soal informasi yang tidak konsisten turun 60% dalam 2 bulan. Kepuasan pasien naik signifikan di survey internal.",
      en: "New hire onboarding fell from two weeks to five days. Information complaints dropped 60% in two months. Internal patient satisfaction improved markedly.",
    },
    metrics: [
      {
        label: { id: "Onboarding staff", en: "Staff onboarding" },
        value: { id: "2 mgu → 5 hari", en: "2 wks → 5 days" },
      },
      {
        label: { id: "Komplain info", en: "Info complaints" },
        value: { id: "−60%", en: "−60%" },
      },
      {
        label: { id: "SOP skenario", en: "SOP scenarios" },
        value: { id: "8 jenis", en: "8 types" },
      },
    ],
  },
  {
    id: "agency-kreatif",
    industry: {
      id: "Agency Kreatif · 12 Client",
      en: "Creative agency · 12 clients",
    },
    scope: {
      id: "Reporting mingguan yang konsisten",
      en: "Consistent weekly reporting",
    },
    challenge: {
      id: "Tim account manager menyusun laporan mingguan dari nol setiap Jumat. Format tidak konsisten antar client, owner tidak punya visibilitas performa, dan tim sering lembur di akhir pekan.",
      en: "Account managers rebuilt weekly reports from scratch every Friday. Formats varied by client, the owner lacked performance visibility, and the team often worked weekends.",
    },
    approach: {
      id: "Membuat template laporan mingguan seragam dengan 5 section (highlights, progress, blockers, next week, metrics), SOP update dari tim, dan rekap bulanan untuk owner dalam format satu halaman.",
      en: "A uniform weekly template with five sections (highlights, progress, blockers, next week, metrics), team update SOP, and a one-page monthly owner summary.",
    },
    outcome: {
      id: "Presentasi ke klien lebih rapi dan konsisten. Waktu menyusun laporan turun dari 4 jam menjadi 1 jam per account manager. Owner punya visibility performa 12 client dalam 1 dashboard.",
      en: "Client presentations became cleaner and consistent. Report prep fell from four hours to one per AM. The owner gained visibility across all twelve clients in one view.",
    },
    metrics: [
      {
        label: { id: "Waktu laporan", en: "Report time" },
        value: { id: "4 jam → 1 jam", en: "4 hrs → 1 hr" },
      },
      {
        label: { id: "Format konsisten", en: "Consistent format" },
        value: { id: "12/12 client", en: "12/12 clients" },
      },
      {
        label: { id: "Rekap owner", en: "Owner summary" },
        value: { id: "1 halaman", en: "1 page" },
      },
    ],
  },
];