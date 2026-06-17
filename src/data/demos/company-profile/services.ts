import {
  ClipboardList,
  FileText,
  LineChart,
  Workflow,
  Users,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import type { Localized } from "@/i18n/localized";

export type Service = {
  slug: string;
  name: Localized<string>;
  tagline: Localized<string>;
  icon: LucideIcon;
  shortDescription: Localized<string>;
  fullDescription: Localized<string>;
  bestFor: Localized<string[]>;
  deliverables: Localized<string[]>;
  painPoint: Localized<string>;
};

export const services: Service[] = [
  {
    slug: "audit-operasional",
    name: { id: "Audit Operasional Bisnis", en: "Business operations audit" },
    tagline: {
      id: "Peta alur kerja, bottleneck, dan peluang perbaikan",
      en: "Map workflows, bottlenecks, and improvement opportunities",
    },
    icon: ClipboardList,
    shortDescription: {
      id: "Tinjauan menyeluruh terhadap alur kerja tim Anda untuk menemukan bottleneck dan rekomendasi yang bisa langsung dijalankan.",
      en: "A thorough review of how your team works to find bottlenecks and actionable recommendations.",
    },
    fullDescription: {
      id: "Audit operasional adalah fondasi sebelum Anda scale atau menambah tim. Kami memetakan alur kerja utama, menemukan bottleneck, dan menyusun rekomendasi yang realistis untuk tahap bisnis Anda. Hasilnya: tim tahu prioritas, owner punya visibility, dan keputusan terasa lebih terstruktur.",
      en: "An operations audit is the foundation before you scale or hire. We map core workflows, surface bottlenecks, and recommend realistic next steps for your stage. Outcomes: clearer priorities, owner visibility, and more structured decisions.",
    },
    bestFor: {
      id: [
        "UMKM yang mulai scale dan bingung prioritas",
        "Perusahaan lokal yang ingin efisien sebelum ekspansi",
        "Owner yang merasa tim sering 'kebakaran' tapi tidak tahu dari mana mulai",
      ],
      en: [
        "SMBs scaling up and unsure about priorities",
        "Local companies seeking efficiency before expansion",
        "Owners whose teams are always firefighting without a clear starting point",
      ],
    },
    deliverables: {
      id: [
        "Laporan audit ringkas (8–12 halaman) dengan temuan utama",
        "Peta proses kerja dalam bentuk visual sederhana",
        "Rekomendasi 3–5 quick wins yang bisa dijalankan dalam 30 hari",
      ],
      en: [
        "Concise audit report (8–12 pages) with key findings",
        "Simple visual process map",
        "3–5 quick wins executable within 30 days",
      ],
    },
    painPoint: {
      id: "Operasional terasa berantakan, tim sering salah langkah, dan owner tidak tahu dari mana mulai untuk scale.",
      en: "Operations feel chaotic, the team missteps often, and the owner does not know where to start scaling.",
    },
  },
  {
    slug: "penyusunan-sop",
    name: { id: "Penyusunan SOP", en: "SOP development" },
    tagline: {
      id: "Standar operasional yang tim bisa langsung pakai",
      en: "Operational standards your team will actually use",
    },
    icon: FileText,
    shortDescription: {
      id: "Dokumentasi standar kerja yang bisa dipegang tim, dari onboarding staff baru sampai quality control harian.",
      en: "Documented standards from new hire onboarding through daily quality control.",
    },
    fullDescription: {
      id: "SOP yang baik bukan dokumen tebal yang tidak pernah dibuka — tapi panduan ringkas yang tim benar-benar pakai setiap hari. Kami menyusun SOP berdasarkan proses nyata di bisnis Anda, dengan format yang mudah diupdate saat bisnis berkembang.",
      en: "Good SOPs are not thick binders nobody opens — they are concise guides used daily. We build SOPs from your real processes in formats that are easy to update as you grow.",
    },
    bestFor: {
      id: [
        "Bisnis jasa customer-facing yang tim-nya sering berbeda standar",
        "Bisnis yang akan onboarding staff baru dalam 1–3 bulan",
        "Owner yang capek menjelaskan hal yang sama ke setiap tim baru",
      ],
      en: [
        "Customer-facing services with inconsistent team standards",
        "Businesses onboarding new staff in the next 1–3 months",
        "Owners tired of repeating the same briefing for every new hire",
      ],
    },
    deliverables: {
      id: [
        "Dokumen SOP utama untuk 3–5 proses kritis",
        "Template checklist harian dan mingguan",
        "Panduan singkat onboarding staff baru",
      ],
      en: [
        "Core SOP documents for 3–5 critical processes",
        "Daily and weekly checklist templates",
        "Short new-hire onboarding guide",
      ],
    },
    painPoint: {
      id: "Standar tim tidak seragam, kualitas layanan tidak konsisten, dan onboarding staff baru makan waktu lama.",
      en: "Inconsistent team standards, uneven service quality, and lengthy new hire onboarding.",
    },
  },
  {
    slug: "optimasi-sales",
    name: { id: "Optimasi Sales Process", en: "Sales process optimization" },
    tagline: {
      id: "Alur lead → closing yang terstruktur dan terukur",
      en: "Structured, measurable lead-to-close flow",
    },
    icon: LineChart,
    shortDescription: {
      id: "Pemetaan alur sales dari lead masuk sampai deal, plus template follow-up agar tim tidak kehilangan calon klien.",
      en: "Map sales from inbound lead to closed deal, with follow-up templates so prospects do not slip away.",
    },
    fullDescription: {
      id: "Proses sales yang jelas membuat tim tahu langkah selanjutnya di setiap stage — bukan hanya mengandalkan ingatan dan chat. Kami memetakan alur, menyediakan template, dan membantu tim mengadopsi kebiasaan yang membuat conversion naik konsisten.",
      en: "A clear sales process tells the team what happens at each stage — not just memory and chat. We map the flow, provide templates, and help habits that lift conversion consistently.",
    },
    bestFor: {
      id: [
        "Agency, vendor B2B, dan kontraktor yang lead-nya mulai ramai",
        "Tim sales yang follow-up-nya tidak konsisten",
        "Owner yang tidak tahu di mana lead 'bocor'",
      ],
      en: [
        "Agencies, B2B vendors, and contractors with growing lead volume",
        "Sales teams with inconsistent follow-up",
        "Owners who do not know where leads leak",
      ],
    },
    deliverables: {
      id: [
        "Peta alur sales dalam 5–7 stage",
        "Template follow-up WhatsApp dan email",
        "Checklist mingguan untuk tim sales",
      ],
      en: [
        "Sales flow map across 5–7 stages",
        "WhatsApp and email follow-up templates",
        "Weekly sales checklist",
      ],
    },
    painPoint: {
      id: "Lead masuk tapi tidak terfollow-up dengan baik, closing tidak konsisten, dan tim tidak tahu prioritas harian.",
      en: "Leads arrive but follow-up is weak, closing is uneven, and daily priorities are unclear.",
    },
  },
  {
    slug: "digitalisasi-workflow",
    name: { id: "Digitalisasi Workflow", en: "Workflow digitization" },
    tagline: {
      id: "Proses manual jadi alur digital sederhana",
      en: "Turn manual steps into simple digital flows",
    },
    icon: Workflow,
    shortDescription: {
      id: "Mengubah proses yang masih di chat dan spreadsheet jadi alur digital yang lebih rapi — tanpa over-engineering.",
      en: "Move chat-and-spreadsheet processes into cleaner digital flows — without over-engineering.",
    },
    fullDescription: {
      id: "Tidak semua bisnis butuh ERP mahal. Kadang yang dibutuhkan hanya alur yang lebih rapi di tools yang sudah ada. Kami memetakan proses Anda dan mengusulkan digitalisasi bertahap yang sesuai dengan skala dan budget.",
      en: "Not every business needs an expensive ERP. Often you only need tidier flows in tools you already use. We map your process and propose phased digitization that fits scale and budget.",
    },
    bestFor: {
      id: [
        "Bisnis yang masih mengandalkan chat dan spreadsheet",
        "Owner yang ingin tim lebih kolaboratif tanpa tools rumit",
        "Bisnis yang siap naik level dari manual ke semi-otomatis",
      ],
      en: [
        "Businesses still running on chat and spreadsheets",
        "Owners who want better collaboration without complex tools",
        "Teams ready to move from manual to semi-automated",
      ],
    },
    deliverables: {
      id: [
        "Diagram workflow sebelum dan sesudah digitalisasi",
        "Rekomendasi tools sederhana yang sesuai budget",
        "Rencana implementasi bertahap 3–6 bulan",
      ],
      en: [
        "Before/after workflow diagrams",
        "Budget-appropriate tool recommendations",
        "3–6 month phased implementation plan",
      ],
    },
    painPoint: {
      id: "Proses manual rawan salah, data tercecer di chat, dan tim kesulitan kolaborasi saat remote atau scale.",
      en: "Manual processes error easily, data lives in scattered chats, and collaboration breaks when remote or scaling.",
    },
  },
  {
    slug: "pendampingan-manajemen",
    name: { id: "Pendampingan Manajemen", en: "Management coaching" },
    tagline: {
      id: "Coaching owner dan manager untuk keputusan yang lebih terstruktur",
      en: "Coaching for owners and managers on structured decisions",
    },
    icon: Users,
    shortDescription: {
      id: "Sesi rutin dengan owner atau manager untuk membicarakan tantangan, prioritas, dan keputusan sulit dengan perspektif luar.",
      en: "Regular sessions with owners or managers on challenges, priorities, and hard calls — with an outside perspective.",
    },
    fullDescription: {
      id: "Pendampingan adalah soal having a thinking partner. Kami menyediakan sesi rutin (mingguan atau dwimingguan) untuk berdiskusi, mencari opsi, dan menyusun action plan — bukan untuk menggantikan keputusan owner, tapi untuk mempertajamnya.",
      en: "Coaching is about a thinking partner. We run weekly or biweekly sessions to discuss options and action plans — not to replace the owner's decisions, but to sharpen them.",
    },
    bestFor: {
      id: [
        "Founder yang hands-on dan butuh sounding board",
        "Manager baru yang butuh perspektif dari luar",
        "Owner yang merasa sendirian dalam mengambil keputusan sulit",
      ],
      en: [
        "Hands-on founders who need a sounding board",
        "New managers who want an outside perspective",
        "Owners who feel alone on difficult decisions",
      ],
    },
    deliverables: {
      id: [
        "Sesi rutin 60–90 menit (online atau offline)",
        "Ringkasan action plan setelah setiap sesi",
        "Akses chat untuk konsultasi ringan di antara sesi",
      ],
      en: [
        "Regular 60–90 minute sessions (online or on-site)",
        "Action plan summary after each session",
        "Light chat access between sessions",
      ],
    },
    painPoint: {
      id: "Owner overwhelmed, keputusan terasa berat, dan tidak ada partner diskusi yang benar-benar paham konteks bisnis.",
      en: "The owner is overwhelmed, decisions feel heavy, and there is no discussion partner who truly knows the business context.",
    },
  },
  {
    slug: "dashboard-reporting",
    name: { id: "Dashboard Reporting", en: "Dashboard reporting" },
    tagline: {
      id: "Laporan mingguan/bulanan yang mudah dibaca dan ditindaklanjuti",
      en: "Weekly and monthly reports that are easy to read and act on",
    },
    icon: BarChart3,
    shortDescription: {
      id: "Setup dashboard sederhana untuk memantau metrik utama bisnis, tanpa perlu tim data analyst atau tools mahal.",
      en: "Simple dashboards for core business metrics — no data team or expensive tools required.",
    },
    fullDescription: {
      id: "Owner butuh visibilitas performa tanpa harus bertanya manual ke setiap tim. Kami menyusun dashboard sederhana dengan KPI yang relevan untuk bisnis Anda, lengkap dengan template laporan mingguan/bulanan yang bisa langsung dipakai.",
      en: "Owners need performance visibility without chasing every team for numbers. We set up simple dashboards with relevant KPIs plus ready-to-use weekly and monthly report templates.",
    },
    bestFor: {
      id: [
        "Bisnis tanpa ERP dan masih rekap manual",
        "Owner yang ingin tahu performa tanpa harus minta laporan ke tim",
        "Bisnis yang siap presentasi rutin ke investor atau partner",
      ],
      en: [
        "Businesses without an ERP still reconciling manually",
        "Owners who want performance insight without requesting reports",
        "Teams preparing regular investor or partner updates",
      ],
    },
    deliverables: {
      id: [
        "Template dashboard dengan 5–8 KPI utama",
        "Panduan cara update dan membaca dashboard",
        "Template laporan mingguan/bulanan",
      ],
      en: [
        "Dashboard template with 5–8 core KPIs",
        "Guide to updating and reading the dashboard",
        "Weekly and monthly report templates",
      ],
    },
    painPoint: {
      id: "Tidak ada visibilitas performa, owner sering 'kaget' di akhir bulan, dan laporan memakan waktu lama untuk disusun.",
      en: "No performance visibility, month-end surprises, and reports that take too long to build.",
    },
  },
];