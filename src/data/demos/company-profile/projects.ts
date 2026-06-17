import type { Localized } from "@/i18n/localized";

export type ProjectCategoryKey =
  | "consultant"
  | "contractor"
  | "agency"
  | "b2b-vendor"
  | "clinic-service";

export const projectCategoryKeys: ProjectCategoryKey[] = [
  "consultant",
  "contractor",
  "agency",
  "b2b-vendor",
  "clinic-service",
];

export const projectCategoryLabels: Record<ProjectCategoryKey, Localized<string>> = {
  consultant: { id: "Konsultan", en: "Consulting" },
  contractor: { id: "Kontraktor", en: "Contracting" },
  agency: { id: "Agency", en: "Agency" },
  "b2b-vendor": { id: "Vendor B2B", en: "B2B vendor" },
  "clinic-service": { id: "Klinik / Jasa", en: "Clinic / services" },
};

export type Project = {
  id: string;
  title: Localized<string>;
  category: ProjectCategoryKey;
  location: Localized<string>;
  year: string;
  summary: Localized<string>;
  challenge: Localized<string>;
  approach: Localized<string>;
  outcome: Localized<string>;
  scope: Localized<string[]>;
  duration: Localized<string>;
};

export const projects: Project[] = [
  {
    id: "vendor-interior-digitalisasi",
    title: {
      id: "Digitalisasi Inquiry Vendor Interior",
      en: "Interior vendor inquiry digitization",
    },
    category: "b2b-vendor",
    location: { id: "Jakarta", en: "Jakarta" },
    year: "2025",
    summary: {
      id: "Menertibkan alur inquiry multi-channel untuk vendor furniture interior yang melayani klien korporat.",
      en: "Structured multi-channel inquiries for a corporate interior furniture vendor.",
    },
    challenge: {
      id: "Tim menerima inquiry dari Instagram, WhatsApp, website, dan referral tanpa struktur yang jelas. Seringkali informasi kebutuhan klien tercecer di chat berbeda.",
      en: "Inquiries arrived from Instagram, WhatsApp, the website, and referrals with no clear structure. Client needs were scattered across chats.",
    },
    approach: {
      id: "Membuat form inquiry terstruktur, kategori layanan yang jelas, dan template balasan untuk 5 jenis pertanyaan umum. Tim dilatih untuk konsolidasi inquiry dalam satu sumber.",
      en: "Structured inquiry form, clear service categories, and five reply templates. The team trained to consolidate inquiries in one place.",
    },
    outcome: {
      id: "Tim mempersiapkan materi meeting sesuai kategori klien. Rata-rata waktu respons turun dari 2 hari menjadi 4 jam untuk inquiry pertama.",
      en: "Meeting prep matched client category. First-response time dropped from two days to four hours.",
    },
    scope: {
      id: ["Form inquiry 6 field", "Template balasan 5 jenis", "SOP tim sales"],
      en: ["Six-field inquiry form", "Five reply templates", "Sales team SOP"],
    },
    duration: { id: "3 minggu", en: "3 weeks" },
  },
  {
    id: "klinik-cs-sop",
    title: {
      id: "SOP Customer Service Klinik Kecantikan",
      en: "Aesthetic clinic customer service SOPs",
    },
    category: "clinic-service",
    location: { id: "Surabaya", en: "Surabaya" },
    year: "2024",
    summary: {
      id: "Menyamakan standar customer service untuk klinik kecantikan dengan 3 cabang dan 12 staff frontliner.",
      en: "Aligned CS standards across three branches and twelve frontline staff at an aesthetic clinic.",
    },
    challenge: {
      id: "Standar jawaban CS berbeda-beda antar staff dan antar cabang. Calon pasien sering komplain soal informasi yang tidak konsisten.",
      en: "CS answers varied by staff and branch. Prospects often complained about inconsistent information.",
    },
    approach: {
      id: "Menyusun SOP CS untuk 8 skenario utama (pertanyaan pertama, komplain, follow-up, dll), plus template jawaban dan checklist harian.",
      en: "CS SOPs for eight main scenarios plus reply templates and daily checklists.",
    },
    outcome: {
      id: "Onboarding staff baru lebih cepat dengan dokumen standar. Komplain soal informasi yang tidak konsisten turun 60% dalam 2 bulan pertama.",
      en: "Faster onboarding with standard docs. Information complaints fell 60% in the first two months.",
    },
    scope: {
      id: ["SOP 8 skenario", "Template jawaban 20 jenis", "Checklist harian"],
      en: ["Eight scenario SOPs", "Twenty reply templates", "Daily checklist"],
    },
    duration: { id: "4 minggu", en: "4 weeks" },
  },
  {
    id: "distributor-sales-dashboard",
    title: {
      id: "Dashboard Monitoring Sales Distributor",
      en: "Distributor sales monitoring dashboard",
    },
    category: "consultant",
    location: { id: "Bandung", en: "Bandung" },
    year: "2025",
    summary: {
      id: "Setup dashboard sederhana untuk distributor lokal yang ingin visibility penjualan tanpa spreadsheet manual.",
      en: "Simple sales dashboard for a local distributor tired of manual spreadsheets.",
    },
    challenge: {
      id: "Owner rekap penjualan dari 5 sales setiap Jumat secara manual di spreadsheet. Prosesnya makan waktu seharian dan sering ada angka yang tidak match.",
      en: "The owner manually reconciled five reps every Friday — a full day, often with mismatched numbers.",
    },
    approach: {
      id: "Membuat template dashboard dengan 6 KPI utama (penjualan, top produk, top sales, leads, closing, retur) dan SOP update mingguan untuk tim sales.",
      en: "Dashboard template with six KPIs and a weekly sales update SOP.",
    },
    outcome: {
      id: "Owner punya gambaran rutin tanpa spreadsheet manual. Rekap Jumat turun dari 6 jam menjadi 45 menit. Tim sales lebih akuntabel karena tahu metrik yang dipantau.",
      en: "Routine visibility without manual spreadsheets. Friday recap fell from six hours to 45 minutes.",
    },
    scope: {
      id: ["Template dashboard 6 KPI", "SOP update mingguan", "Template laporan"],
      en: ["Six-KPI dashboard template", "Weekly update SOP", "Report template"],
    },
    duration: { id: "3 minggu", en: "3 weeks" },
  },
  {
    id: "kontraktor-booking-flow",
    title: {
      id: "Optimasi Alur Booking Renovasi",
      en: "Renovation booking flow optimization",
    },
    category: "contractor",
    location: { id: "Tangerang", en: "Tangerang" },
    year: "2024",
    summary: {
      id: "Merapikan alur janji survei untuk jasa renovasi rumah yang menerima 20+ inquiry per minggu.",
      en: "Tightened site-survey scheduling for a home renovation firm with 20+ weekly inquiries.",
    },
    challenge: {
      id: "Proses janji survei sering molor karena tim tidak punya sistem penjadwalan. Banyak calon klien yang akhirnya pindah ke vendor lain karena tidak ada respons cepat.",
      en: "Survey scheduling slipped without a system; prospects left for faster vendors.",
    },
    approach: {
      id: "Setup alur booking dengan 4 tahap (kontak pertama → survey jadwal → konfirmasi → reminder), template WhatsApp untuk setiap tahap, dan 1 PIC yang bertanggung jawab.",
      en: "Four-stage booking flow, WhatsApp templates per stage, and one accountable PIC.",
    },
    outcome: {
      id: "Proses janji survei lebih tertata. Conversion dari inquiry ke survei naik dari 35% menjadi 62% dalam 2 bulan.",
      en: "Survey scheduling became reliable. Inquiry-to-survey conversion rose from 35% to 62% in two months.",
    },
    scope: {
      id: ["Alur booking 4 tahap", "Template WhatsApp", "SOP PIC booking"],
      en: ["Four-stage booking flow", "WhatsApp templates", "Booking PIC SOP"],
    },
    duration: { id: "2 minggu", en: "2 weeks" },
  },
  {
    id: "bootcamp-followup",
    title: {
      id: "Sistem Follow-up Leads Bootcamp",
      en: "Bootcamp lead follow-up system",
    },
    category: "consultant",
    location: { id: "Depok", en: "Depok" },
    year: "2025",
    summary: {
      id: "Membangun sistem follow-up untuk bootcamp coding yang menerima 100+ leads per cohort dari Meta Ads dan referral.",
      en: "Follow-up system for a coding bootcamp with 100+ leads per cohort from ads and referrals.",
    },
    challenge: {
      id: "Tim marketing mengumpulkan leads tapi tidak ada sistem follow-up yang konsisten. Banyak leads yang tertinggal di chat tanpa respons setelah 2–3 hari.",
      en: "Marketing collected leads but follow-up was inconsistent; many went unanswered after 2–3 days.",
    },
    approach: {
      id: "Membuat kategori leads (panas, hangat, dingin), template follow-up untuk hari 1/3/7/14, dan dashboard sederhana untuk tim sales memantau prioritas harian.",
      en: "Hot/warm/cold tiers, day 1/3/7/14 templates, and a simple daily priority dashboard.",
    },
    outcome: {
      id: "Tim punya daftar prioritas follow-up harian. Conversion dari lead ke enrollment naik 28% di cohort berikutnya.",
      en: "Daily follow-up priorities were clear. Lead-to-enrollment conversion rose 28% next cohort.",
    },
    scope: {
      id: ["Kategori leads 3 tier", "Template follow-up 4 sentuh", "Dashboard tim sales"],
      en: ["Three lead tiers", "Four-touch templates", "Sales dashboard"],
    },
    duration: { id: "4 minggu", en: "4 weeks" },
  },
  {
    id: "kuliner-audit-order",
    title: {
      id: "Audit Proses Order UMKM Kuliner",
      en: "Food SMB order process audit",
    },
    category: "b2b-vendor",
    location: { id: "Bekasi", en: "Bekasi" },
    year: "2024",
    summary: {
      id: "Audit proses order dari WhatsApp ke dapur untuk UMKM kuliner yang melayani 80+ order per hari.",
      en: "Order flow audit from WhatsApp to kitchen for an SMB handling 80+ daily orders.",
    },
    challenge: {
      id: "Proses order dari WhatsApp diteruskan ke dapur secara manual, sering terjadi salah pesanan atau pesanan yang terlewat saat rush hour.",
      en: "WhatsApp orders were relayed manually to the kitchen — wrong or missed orders at rush hour.",
    },
    approach: {
      id: "Memetakan proses order, menemukan 3 bottleneck utama (konfirmasi alamat, double order saat rush, missing payment), dan mengusulkan workflow baru dengan template form order yang lebih terstruktur.",
      en: "Mapped orders, found three bottlenecks, and proposed a structured order form workflow.",
    },
    outcome: {
      id: "Owner paham bottleneck sebelum scale. Setelah implementasi, error order turun 40% dan waktu konfirmasi order turun dari 15 menit menjadi 5 menit.",
      en: "Bottlenecks were clear before scaling. Order errors fell 40%; confirmation time dropped from 15 to 5 minutes.",
    },
    scope: {
      id: ["Peta proses order", "Rekomendasi 3 quick wins", "Template form order"],
      en: ["Order process map", "Three quick wins", "Order form template"],
    },
    duration: { id: "3 minggu", en: "3 weeks" },
  },
  {
    id: "konsultan-legal-struktur",
    title: {
      id: "Struktur Layanan Konsultan Legal",
      en: "Legal consulting service structure",
    },
    category: "consultant",
    location: { id: "Jakarta", en: "Jakarta" },
    year: "2025",
    summary: {
      id: "Menyusun struktur layanan dan paket konsultasi untuk konsultan legal yang melayani UMKM dan startup kecil.",
      en: "Service structure and consultation packages for a legal firm serving SMBs and startups.",
    },
    challenge: {
      id: "Layanan terlalu kompleks untuk calon klien pahami. Banyak calon klien yang menanyakan hal yang sama berulang dan tidak tahu paket mana yang sesuai.",
      en: "Services were too complex; prospects repeated the same questions and could not pick a package.",
    },
    approach: {
      id: "Menyusun 3 paket konsultasi (konsultasi awal, pendampingan bulanan, project based), halaman layanan ringkas, dan template balasan untuk pertanyaan 'paket mana yang cocok'.",
      en: "Three packages, concise service pages, and a reply template for which package fits.",
    },
    outcome: {
      id: "Calon klien paham scope sebelum konsultasi berbayar. Pertanyaan 'paket mana yang cocok' turun 70% dan tim bisa langsung diskusi value, bukan layanan dasar.",
      en: "Prospects understood scope before paid consults. Which-package questions fell 70%.",
    },
    scope: {
      id: ["3 paket konsultasi", "Halaman layanan", "Template balasan"],
      en: ["Three packages", "Service pages", "Reply templates"],
    },
    duration: { id: "2 minggu", en: "2 weeks" },
  },
  {
    id: "agency-kreatif-reporting",
    title: {
      id: "Setup Reporting Mingguan Agency Kreatif",
      en: "Creative agency weekly reporting setup",
    },
    category: "agency",
    location: { id: "Jakarta", en: "Jakarta" },
    year: "2024",
    summary: {
      id: "Membuat template reporting mingguan untuk agency kreatif dengan 12 client aktif dan tim 8 orang.",
      en: "Weekly reporting template for a creative agency with twelve clients and eight staff.",
    },
    challenge: {
      id: "Tim account manager menyusun laporan mingguan dari nol setiap Jumat. Format tidak konsisten antar client, owner tidak punya visibilitas performa, dan tim sering lembur di akhir pekan.",
      en: "AMs rebuilt weekly reports every Friday; formats varied and weekends were lost.",
    },
    approach: {
      id: "Membuat template laporan mingguan yang seragam (5 section: highlights, progress, blockers, next week, metrics), SOP update dari tim, dan rekap bulanan untuk owner.",
      en: "Uniform five-section weekly template, team update SOP, and monthly owner recap.",
    },
    outcome: {
      id: "Presentasi ke klien lebih rapi dan konsisten. Waktu menyusun laporan turun dari 4 jam menjadi 1 jam per account manager.",
      en: "Client presentations improved. Report time fell from four hours to one per AM.",
    },
    scope: {
      id: ["Template laporan 5 section", "SOP update", "Rekap bulanan owner"],
      en: ["Five-section template", "Update SOP", "Monthly owner recap"],
    },
    duration: { id: "3 minggu", en: "3 weeks" },
  },
];