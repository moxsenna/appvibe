import type { Localized } from "@/i18n/localized";

export type LeadDashboardCopy = {
  hero: {
    badge: Localized<string>;
    eyebrow: Localized<string>;
    title: Localized<string>;
    subtitle: Localized<string>;
    trustChips: Localized<string>[];
    ctaPrimary: Localized<string>;
    ctaSecondary: Localized<string>;
    footnote: Localized<string>;
    stats: {
      totalLeads: Localized<string>;
      newLeads: Localized<string>;
      deals: Localized<string>;
      pipeline: Localized<string>;
      pipelineFootnote: Localized<string>;
      demoBadge: Localized<string>;
    };
  };
  inbox: {
    eyebrow: Localized<string>;
    title: (total: number) => Localized<string>;
    subtitle: Localized<string>;
    listTab: Localized<string>;
    pipelineTab: Localized<string>;
    searchPlaceholder: Localized<string>;
    searchAria: Localized<string>;
    filterStatus: Localized<string>;
    filterSource: Localized<string>;
    all: Localized<string>;
    empty: Localized<string>;
    emptyFilter: Localized<string>;
    table: {
      lead: Localized<string>;
      need: Localized<string>;
      source: Localized<string>;
      status: Localized<string>;
      priority: Localized<string>;
      assigned: Localized<string>;
      estimate: Localized<string>;
    };
  };
  source: {
    eyebrow: Localized<string>;
    title: Localized<string>;
    subtitle: Localized<string>;
    leadCount: (n: number) => Localized<string>;
    deal: Localized<string>;
    fuPending: Localized<string>;
    estPipeline: Localized<string>;
    footer: (total: number) => Localized<string>;
  };
  report: {
    eyebrow: Localized<string>;
    title: Localized<string>;
    stats: {
      total: Localized<string>;
      new: Localized<string>;
      followUp: Localized<string>;
      deal: Localized<string>;
      estPipeline: Localized<string>;
      conversion: Localized<string>;
    };
    workloadTitle: Localized<string>;
    workloadSubtitle: Localized<string>;
    workloadCardTitle: Localized<string>;
    agingTitle: Localized<string>;
    agingSubtitle: Localized<string>;
    agingCardTitle: Localized<string>;
    leadsUnit: Localized<string>;
  };
  empty: {
    eyebrow: Localized<string>;
    title: Localized<string>;
    subtitle: Localized<string>;
    checklistEyebrow: Localized<string>;
    checklistTitle: Localized<string>;
    ctaPrimary: Localized<string>;
    ctaSecondary: Localized<string>;
    footnote: Localized<string>;
  };
  faq: {
    eyebrow: Localized<string>;
    title: Localized<string>;
  };
  liveBadge: {
    liveTitle: Localized<string>;
    fallbackTitle: Localized<string>;
    liveBody: Localized<string>;
    fallbackBody: Localized<string>;
    realtime: Localized<string>;
    connecting: Localized<string>;
    realtimeAriaOn: Localized<string>;
    realtimeAriaOff: Localized<string>;
  };
  auth: {
    eyebrow: Localized<string>;
    title: Localized<string>;
    hint: Localized<string>;
    email: Localized<string>;
    password: Localized<string>;
    submit: Localized<string>;
    loading: Localized<string>;
    success: Localized<string>;
  };
  drawer: {
    close: Localized<string>;
    changeStatus: Localized<string>;
    contact: Localized<string>;
    phone: Localized<string>;
    business: Localized<string>;
    need: Localized<string>;
    source: Localized<string>;
    priority: Localized<string>;
    assigned: Localized<string>;
    value: Localized<string>;
    lastContact: Localized<string>;
    created: Localized<string>;
    notes: Localized<string>;
    activity: Localized<string>;
    waCta: Localized<string>;
    emailCta: Localized<string>;
    saveStatus: Localized<string>;
  };
};

function titleWithCount(id: string, en: string): (total: number) => Localized<string> {
  return (total) => ({
    id: id.replace("{n}", String(total)),
    en: en.replace("{n}", String(total)),
  });
}

function countLeads(id: string, en: string): (n: number) => Localized<string> {
  return (n) => ({
    id: id.replace("{n}", String(n)),
    en: en.replace("{n}", String(n)),
  });
}

export const leadDashboardCopy: LeadDashboardCopy = {
  hero: {
    badge: {
      id: "CRM Lite · Demo Interaktif",
      en: "CRM Lite · Interactive demo",
    },
    eyebrow: {
      id: "CRM ringan untuk UMKM & tim sales",
      en: "Lightweight CRM for SMBs and sales teams",
    },
    title: {
      id: "Kelola lead dari banyak channel tanpa tercecer",
      en: "Manage leads from every channel without losing track",
    },
    subtitle: {
      id: "LeadFlow CRM Lite membantu tim Anda memantau status, assign admin, dan estimasi pipeline tanpa spreadsheet yang berantakan.",
      en: "LeadFlow CRM Lite helps your team track status, assign owners, and estimate pipeline value without scattered spreadsheets.",
    },
    trustChips: [
      { id: "50 lead simulasi", en: "50 sample leads" },
      { id: "5 status pipeline", en: "5 pipeline stages" },
      { id: "5 channel source", en: "5 source channels" },
      { id: "4 tim dummy", en: "4 demo team members" },
    ],
    ctaPrimary: {
      id: "Buka Dashboard",
      en: "Open dashboard",
    },
    ctaSecondary: {
      id: "Tanya AppVibe",
      en: "Ask AppVibe",
    },
    footnote: {
      id: "Demo interaktif — data simulasi, bukan produksi.",
      en: "Interactive demo — simulated data, not production.",
    },
    stats: {
      totalLeads: { id: "Total Lead", en: "Total leads" },
      newLeads: { id: "Lead Baru", en: "New leads" },
      deals: { id: "Deal", en: "Won deals" },
      pipeline: { id: "Estimasi Pipeline", en: "Estimated pipeline" },
      pipelineFootnote: {
        id: "*Data simulasi untuk demo portfolio AppVibe",
        en: "*Simulated data for the AppVibe portfolio demo",
      },
      demoBadge: { id: "Demo simulasi", en: "Simulated demo" },
    },
  },
  inbox: {
    eyebrow: { id: "Lead Inbox", en: "Lead inbox" },
    title: titleWithCount("{n} lead simulasi", "{n} sample leads"),
    subtitle: {
      id: "Filter by status, source, dan cari nama bisnis — lalu buka detail untuk ubah status.",
      en: "Filter by status and source, search by business name, then open details to update status.",
    },
    listTab: { id: "List", en: "List" },
    pipelineTab: { id: "Pipeline", en: "Pipeline" },
    searchPlaceholder: {
      id: "Cari nama, bisnis, atau telepon…",
      en: "Search name, business, or phone…",
    },
    searchAria: { id: "Cari lead", en: "Search leads" },
    filterStatus: { id: "Status", en: "Status" },
    filterSource: { id: "Source", en: "Source" },
    all: { id: "Semua", en: "All" },
    empty: {
      id: "Tidak ada lead yang cocok dengan filter.",
      en: "No leads match the current filters.",
    },
    emptyFilter: {
      id: "Tidak ada lead di filter ini. Coba ubah filter status atau source.",
      en: "No leads in this filter. Try changing status or source filters.",
    },
    table: {
      lead: { id: "Lead", en: "Lead" },
      need: { id: "Kebutuhan", en: "Need" },
      source: { id: "Source", en: "Source" },
      status: { id: "Status", en: "Status" },
      priority: { id: "Priority", en: "Priority" },
      assigned: { id: "Assigned", en: "Assigned" },
      estimate: { id: "Estimasi", en: "Estimate" },
    },
  },
  source: {
    eyebrow: { id: "Performa Source", en: "Source performance" },
    title: {
      id: "Lead dari 5 channel, performa berbeda-beda",
      en: "Leads from five channels, with different performance",
    },
    subtitle: {
      id: "Lihat channel mana yang paling banyak membawa lead, mana yang paling banyak closing, dan mana yang perlu strategi follow-up lebih intens.",
      en: "See which channels bring the most leads, which close best, and where follow-up needs more attention.",
    },
    leadCount: countLeads("{n} lead", "{n} leads"),
    deal: { id: "Deal", en: "Won" },
    fuPending: { id: "FU pending", en: "Follow-up pending" },
    estPipeline: { id: "Est. pipeline", en: "Est. pipeline" },
    footer: countLeads(
      "Total {n} lead · Data simulasi untuk demo portfolio AppVibe",
      "Total {n} leads · Simulated data for the AppVibe portfolio demo",
    ),
  },
  report: {
    eyebrow: { id: "Laporan Ringkas", en: "Summary report" },
    title: {
      id: "6 metrik utama yang langsung bisa dibaca owner",
      en: "Six headline metrics owners can read at a glance",
    },
    stats: {
      total: { id: "Total Lead", en: "Total leads" },
      new: { id: "Lead Baru", en: "New leads" },
      followUp: { id: "Follow Up", en: "Follow-up" },
      deal: { id: "Deal", en: "Won" },
      estPipeline: { id: "Est. Pipeline", en: "Est. pipeline" },
      conversion: { id: "Conversion Rate", en: "Conversion rate" },
    },
    workloadTitle: {
      id: "Beban Kerja Tim",
      en: "Team workload",
    },
    workloadSubtitle: {
      id: "Jumlah lead aktif yang di-assign ke masing-masing anggota tim.",
      en: "Active leads assigned to each team member.",
    },
    workloadCardTitle: {
      id: "Lead per assigned admin/sales",
      en: "Leads per assigned admin or sales rep",
    },
    agingTitle: {
      id: "Leads Aging",
      en: "Lead aging",
    },
    agingSubtitle: {
      id: "Distribusi lead berdasarkan lama di pipeline (simulasi).",
      en: "Distribution of leads by time in pipeline (simulated).",
    },
    agingCardTitle: {
      id: "Sebaran lead berdasarkan lamanya masuk",
      en: "How long leads have been in the pipeline",
    },
    leadsUnit: { id: "lead", en: "leads" },
  },
  empty: {
    eyebrow: { id: "Empty State", en: "Empty state" },
    title: {
      id: "Kalau baru mulai, dashboard ini tetap siap digunakan",
      en: "When you are just getting started, the dashboard is still ready to use",
    },
    subtitle: {
      id: "LeadFlow CRM Lite tidak terasa kosong meski belum ada lead. Ada checklist setup yang bisa diikuti agar tim bisa langsung produktif.",
      en: "LeadFlow CRM Lite does not feel empty before the first lead arrives. A setup checklist helps your team become productive quickly.",
    },
    checklistEyebrow: { id: "Setup checklist", en: "Setup checklist" },
    checklistTitle: { id: "5 langkah untuk mulai", en: "Five steps to get started" },
    ctaPrimary: { id: "Tambah Lead Pertama", en: "Add first lead" },
    ctaSecondary: { id: "Pelajari integrasi form", en: "Learn form integration" },
    footnote: {
      id: "*Tambah lead pertama adalah aksi simulasi di demo ini.",
      en: "*Adding the first lead is a simulated action in this demo.",
    },
  },
  faq: {
    eyebrow: { id: "Pertanyaan tentang produk", en: "Product questions" },
    title: {
      id: "Hal yang biasanya ditanyakan calon pengguna",
      en: "What prospective users often ask",
    },
  },
  liveBadge: {
    liveTitle: { id: "Real backend mode", en: "Real backend mode" },
    fallbackTitle: { id: "Fallback demo mode", en: "Fallback demo mode" },
    liveBody: {
      id: "Data dibaca langsung dari Supabase Postgres dengan Row Level Security. Perubahan status tersimpan permanen di showcase tenant — terlihat oleh semua pengunjung.",
      en: "Data is read directly from Supabase Postgres with row-level security. Status changes persist on the showcase tenant and are visible to all visitors.",
    },
    fallbackBody: {
      id: "Anda menjalankan demo tanpa kredensial Supabase. Data berasal dari mock client-side; perubahan tidak tersimpan. Lihat supabase/schema.sql untuk setup.",
      en: "You are running the demo without Supabase credentials. Data comes from a client-side mock; changes are not saved. See supabase/schema.sql for setup.",
    },
    realtime: { id: "Realtime", en: "Realtime" },
    connecting: { id: "Menyambung…", en: "Connecting…" },
    realtimeAriaOn: { id: "Realtime aktif", en: "Realtime active" },
    realtimeAriaOff: { id: "Realtime menyambung", en: "Realtime connecting" },
  },
  auth: {
    eyebrow: { id: "Login Admin", en: "Admin login" },
    title: {
      id: "Masuk ke dashboard untuk eksplorasi",
      en: "Sign in to explore the dashboard",
    },
    hint: {
      id: "Gunakan kredensial demo di bawah. Tidak ada data nyata yang diakses.",
      en: "Use the demo credentials below. No real data is accessed.",
    },
    email: { id: "Email", en: "Email" },
    password: { id: "Password", en: "Password" },
    submit: { id: "Masuk ke Dashboard", en: "Enter dashboard" },
    loading: { id: "Memuat Dashboard…", en: "Loading dashboard…" },
    success: { id: "Berhasil — membuka inbox…", en: "Success — opening inbox…" },
  },
  drawer: {
    close: { id: "Tutup", en: "Close" },
    changeStatus: { id: "Ubah status", en: "Change status" },
    contact: { id: "Kontak", en: "Contact" },
    phone: { id: "Telepon", en: "Phone" },
    business: { id: "Bisnis", en: "Business" },
    need: { id: "Kebutuhan", en: "Need" },
    source: { id: "Source", en: "Source" },
    priority: { id: "Prioritas", en: "Priority" },
    assigned: { id: "Assign ke", en: "Assigned to" },
    value: { id: "Estimasi nilai", en: "Estimated value" },
    lastContact: { id: "Kontak terakhir", en: "Last contact" },
    created: { id: "Dibuat", en: "Created" },
    notes: { id: "Catatan", en: "Notes" },
    activity: { id: "Aktivitas", en: "Activity" },
    waCta: { id: "Chat WhatsApp", en: "Chat on WhatsApp" },
    emailCta: { id: "Email", en: "Email" },
    saveStatus: { id: "Simpan status", en: "Save status" },
  },
};