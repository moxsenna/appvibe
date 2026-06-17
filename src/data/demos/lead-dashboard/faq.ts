import type { Localized } from "@/i18n/localized";

export type FAQ = {
  question: Localized<string>;
  answer: Localized<string>;
};

export const faqs: FAQ[] = [
  {
    question: {
      id: "Apakah dashboard ini bisa diintegrasikan dengan form website?",
      en: "Can this dashboard integrate with website forms?",
    },
    answer: {
      id: "Bisa. LeadFlow CRM Lite dirancang agar lead dari form website (atau landing page) otomatis tercatat dengan source yang jelas. Anda tidak perlu input manual dari chat atau spreadsheet.",
      en: "Yes. LeadFlow CRM Lite is designed so leads from website forms (or landing pages) are recorded automatically with a clear source. You do not need manual entry from chat or spreadsheets.",
    },
  },
  {
    question: {
      id: "Bagaimana dengan lead dari WhatsApp? Apakah harus input manual?",
      en: "What about WhatsApp leads? Do they have to be entered manually?",
    },
    answer: {
      id: "Untuk MVP, lead dari WhatsApp memang masih di-input manual oleh admin. Namun, integrasi WhatsApp Business API (yang lebih advanced) bisa ditambahkan di versi lanjutan agar lead dari chat juga tercatat otomatis.",
      en: "In the MVP, WhatsApp leads are still entered manually by an admin. A WhatsApp Business API integration can be added in a later version so chat leads are recorded automatically.",
    },
  },
  {
    question: {
      id: "Apakah dashboard ini mendukung multi-admin atau tim sales?",
      en: "Does this dashboard support multiple admins or a sales team?",
    },
    answer: {
      id: "Ya. Anda bisa assign lead ke admin atau sales tertentu, dan setiap anggota tim hanya melihat lead yang menjadi tanggung jawabnya. Owner melihat keseluruhan.",
      en: "Yes. You can assign leads to specific admins or sales reps, and each team member sees only their assigned leads. Owners see the full pipeline.",
    },
  },
  {
    question: {
      id: "Bisa filter lead berdasarkan source atau status?",
      en: "Can leads be filtered by source or status?",
    },
    answer: {
      id: "Bisa. Dashboard mendukung filter by status (5 status), source (5 channel), priority (3 level), dan assigned admin. Plus search by nama/bisnis/phone untuk lookup cepat.",
      en: "Yes. The dashboard supports filters by status (five stages), source (five channels), priority (three levels), and assigned admin, plus search by name, business, or phone for quick lookup.",
    },
  },
  {
    question: {
      id: "Apakah LeadFlow menjamin closing?",
      en: "Does LeadFlow guarantee closed deals?",
    },
    answer: {
      id: "Tidak. LeadFlow adalah alat bantu untuk mengelola lead dan follow-up. Closing tetap tergantung kualitas produk/layanan, sales skill, dan follow-up tim Anda. Yang kami bantu: lead tidak tercecer dan follow-up lebih konsisten.",
      en: "No. LeadFlow is a tool to organise leads and follow-up. Closing still depends on your offer, sales capability, and team discipline. We help ensure leads are not lost and follow-up stays consistent.",
    },
  },
  {
    question: {
      id: "Apa bedanya dengan CRM enterprise seperti HubSpot atau Salesforce?",
      en: "How is this different from enterprise CRMs such as HubSpot or Salesforce?",
    },
    answer: {
      id: "LeadFlow CRM Lite adalah versi ringan yang dirancang untuk UMKM dan tim sales kecil. Tidak ada fitur enterprise yang jarang dipakai (marketing automation kompleks, AI scoring, dll). Fokus: lead inbox, pipeline, dan report ringkas yang langsung dipakai.",
      en: "LeadFlow CRM Lite is a lightweight product built for SMBs and small sales teams. It omits rarely used enterprise features (complex marketing automation, AI scoring, and similar). The focus is a lead inbox, pipeline, and concise reports your team will actually use.",
    },
  },
];