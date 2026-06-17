import { cn } from "@/lib/cn";

export type LeadDashboardPreviewVariant =
  | "overview"
  | "table"
  | "kanban"
  | "detail"
  | "activity"
  | "source"
  | "report"
  | "empty"
  | "mobile";

type LeadDashboardPreviewProps = {
  variant: LeadDashboardPreviewVariant;
  className?: string;
};

type LeadStatus =
  | "Baru"
  | "Dihubungi"
  | "Follow Up"
  | "Deal"
  | "Tidak Cocok";

type Priority = "Tinggi" | "Sedang" | "Rendah";

type SampleLead = {
  id: string;
  name: string;
  need: string;
  source: string;
  status: LeadStatus;
  priority: Priority;
  assigned: string;
  assignedInitials: string;
  value: string;
  lastContact: string;
  nextAction: string;
};

const STATUS_STYLES: Record<LeadStatus, string> = {
  Baru: "bg-violet-100 text-violet-700",
  Dihubungi: "bg-blue-100 text-blue-700",
  "Follow Up": "bg-amber-100 text-amber-700",
  Deal: "bg-emerald-100 text-emerald-700",
  "Tidak Cocok": "bg-red-100 text-red-600",
};

const PRIORITY_STYLES: Record<Priority, string> = {
  Tinggi: "bg-red-100 text-red-700",
  Sedang: "bg-amber-100 text-amber-700",
  Rendah: "bg-slate-100 text-slate-600",
};

const TABLE_LEADS: SampleLead[] = [
  {
    id: "LF-001",
    name: "Ayu Kartika",
    need: "Paket treatment wajah klinik",
    source: "Facebook Ads",
    status: "Follow Up",
    priority: "Tinggi",
    assigned: "Rina W.",
    assignedInitials: "RW",
    value: "Rp2,5jt",
    lastContact: "Hari ini",
    nextAction: "Kirim detail paket",
  },
  {
    id: "LF-002",
    name: "Bima Santoso",
    need: "Landing page webinar",
    source: "Website",
    status: "Baru",
    priority: "Tinggi",
    assigned: "Bayu P.",
    assignedInitials: "BP",
    value: "Rp4,5jt",
    lastContact: "Belum",
    nextAction: "Kontak WhatsApp",
  },
  {
    id: "LF-003",
    name: "Citra Maharani",
    need: "Booking dental clinic",
    source: "WhatsApp",
    status: "Dihubungi",
    priority: "Sedang",
    assigned: "Sari M.",
    assignedInitials: "SM",
    value: "Rp1,2jt",
    lastContact: "Kemarin",
    nextAction: "Follow-up pagi",
  },
  {
    id: "LF-004",
    name: "Dewi Lestari",
    need: "Website company profile HR",
    source: "Referral",
    status: "Follow Up",
    priority: "Tinggi",
    assigned: "Dimas A.",
    assignedInitials: "DA",
    value: "Rp8jt",
    lastContact: "2 hari lalu",
    nextAction: "Kirim proposal",
  },
  {
    id: "LF-005",
    name: "Farah Nabila",
    need: "Website klinik bidan",
    source: "Website",
    status: "Deal",
    priority: "Tinggi",
    assigned: "Rina W.",
    assignedInitials: "RW",
    value: "Rp5jt",
    lastContact: "Hari ini",
    nextAction: "Kirim invoice",
  },
  {
    id: "LF-006",
    name: "Kevin Mahendra",
    need: "Demo CRM Lite tim sales",
    source: "Website",
    status: "Follow Up",
    priority: "Tinggi",
    assigned: "Bayu P.",
    assignedInitials: "BP",
    value: "Rp9jt",
    lastContact: "Hari ini",
    nextAction: "Jadwalkan demo",
  },
];

const KANBAN_PREVIEW: Record<LeadStatus, SampleLead[]> = {
  Baru: [TABLE_LEADS[1]],
  Dihubungi: [TABLE_LEADS[2]],
  "Follow Up": [TABLE_LEADS[0], TABLE_LEADS[3], TABLE_LEADS[5]],
  Deal: [TABLE_LEADS[4]],
  "Tidak Cocok": [],
};

const SOURCE_DATA = [
  {
    source: "Website",
    leads: 18,
    pct: 36,
    deals: 4,
    pending: 5,
    value: "Rp62jt",
    highlight: true,
  },
  {
    source: "Facebook Ads",
    leads: 12,
    pct: 24,
    deals: 2,
    pending: 4,
    value: "Rp38jt",
    highlight: false,
  },
  {
    source: "WhatsApp",
    leads: 10,
    pct: 20,
    deals: 1,
    pending: 3,
    value: "Rp28jt",
    highlight: false,
  },
  {
    source: "Referral",
    leads: 6,
    pct: 12,
    deals: 0,
    pending: 2,
    value: "Rp35jt",
    highlight: false,
  },
  {
    source: "Event",
    leads: 4,
    pct: 8,
    deals: 0,
    pending: 1,
    value: "Rp23jt",
    highlight: false,
  },
];

const ACTIVITIES = [
  {
    time: "Hari ini, 10:15",
    text: "Admin menghubungi lead via WhatsApp",
    by: "Rina Wulandari",
  },
  {
    time: "Hari ini, 09:40",
    text: "Status diubah dari Baru menjadi Dihubungi",
    by: "Rina Wulandari",
  },
  {
    time: "Kemarin, 16:20",
    text: "Lead ditugaskan ke Rina Wulandari",
    by: "Sistem",
  },
  {
    time: "Kemarin, 14:05",
    text: "Lead masuk dari form Facebook Ads",
    by: "Sistem",
  },
];

const ADMIN_WORKLOAD = [
  { name: "Rina Wulandari", initials: "RW", leads: 14, followUp: 5 },
  { name: "Bayu Pratama", initials: "BP", leads: 12, followUp: 3 },
  { name: "Sari Melati", initials: "SM", leads: 11, followUp: 2 },
  { name: "Dimas Arya", initials: "DA", leads: 13, followUp: 4 },
];

export function LeadDashboardPreview({
  variant,
  className,
}: LeadDashboardPreviewProps) {
  return (
    <div className={cn("flex h-full min-h-[200px] flex-col", className)}>
      {variant === "overview" && <OverviewPreview />}
      {variant === "table" && <TablePreview />}
      {variant === "kanban" && <KanbanPreview />}
      {variant === "detail" && <DetailPreview />}
      {variant === "activity" && <ActivityPreview />}
      {variant === "source" && <SourcePreview />}
      {variant === "report" && <ReportPreview />}
      {variant === "empty" && <EmptyPreview />}
      {variant === "mobile" && <MobilePreview />}
    </div>
  );
}

function StatusBadge({ status }: { status: LeadStatus }) {
  return (
    <span
      className={cn(
        "inline-block rounded px-1 py-0.5 text-[4px] font-semibold leading-none",
        STATUS_STYLES[status],
      )}
    >
      {status}
    </span>
  );
}

function PriorityBadge({ priority }: { priority: Priority }) {
  return (
    <span
      className={cn(
        "inline-block rounded px-1 py-0.5 text-[4px] font-medium leading-none",
        PRIORITY_STYLES[priority],
      )}
    >
      {priority}
    </span>
  );
}

function AvatarInitials({
  initials,
  className,
}: {
  initials: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-3 w-3 items-center justify-center rounded-full bg-[#2563EB] text-[4px] font-bold text-white",
        className,
      )}
    >
      {initials}
    </span>
  );
}

function SidebarNav({ active = "Overview" }: { active?: string }) {
  const items = ["Overview", "Leads", "Pipeline", "Follow-up", "Reports"];
  return (
    <div className="flex w-11 shrink-0 flex-col border-r border-[#E2E8F0] bg-[#0F172A] p-1.5">
      <div className="mb-2 flex items-center gap-1">
        <div className="h-3 w-3 rounded bg-[#2563EB]" />
        <span className="text-[5px] font-bold text-white">LF</span>
      </div>
      {items.map((item) => (
        <div
          key={item}
          className={cn(
            "mb-0.5 rounded px-1 py-0.5 text-[5px]",
            item === active
              ? "bg-white/15 font-semibold text-white"
              : "text-slate-400",
          )}
        >
          {item}
        </div>
      ))}
      <div className="mt-auto border-t border-white/10 pt-1">
        <p className="text-[4px] font-medium text-slate-400">LeadFlow CRM Lite</p>
        <p className="text-[3px] text-slate-500">Demo AppVibe</p>
      </div>
    </div>
  );
}

function TopbarMini({ showAdd = true }: { showAdd?: boolean }) {
  return (
    <div className="mb-1.5 flex items-center gap-1 border-b border-[#E2E8F0] pb-1.5">
      <div className="flex-1 rounded border border-[#E2E8F0] bg-[#F8FAFC] px-1.5 py-0.5 text-[5px] text-[#64748B]">
        Cari lead, kebutuhan...
      </div>
      <span className="rounded border border-[#E2E8F0] px-1 py-0.5 text-[4px] text-[#64748B]">
        Jun 2026
      </span>
      <AvatarInitials initials="OW" />
      {showAdd && (
        <span className="rounded bg-[#2563EB] px-1.5 py-0.5 text-[4px] font-semibold text-white">
          + Lead
        </span>
      )}
    </div>
  );
}

function OverviewPreview() {
  const stats = [
    { label: "Lead Bulan Ini", value: "50", hint: "+12 minggu lalu" },
    { label: "Baru Hari Ini", value: "12", hint: "Perlu diproses" },
    { label: "Follow-up Hari Ini", value: "9", hint: "Jatuh tempo" },
    { label: "Deal Bulan Ini", value: "7", hint: "Data simulasi" },
    { label: "Estimasi Pipeline", value: "Rp186,5jt", hint: "Nilai aktif" },
    { label: "Prioritas Tinggi", value: "6", hint: "Perlu segera" },
  ];

  return (
    <div className="flex h-full bg-[#F8FAFC]">
      <SidebarNav active="Overview" />
      <div className="flex flex-1 flex-col p-2">
        <TopbarMini />
        <div className="mb-1">
          <p className="text-[8px] font-bold text-[#0F172A]">Ringkasan Lead</p>
          <p className="text-[5px] text-[#64748B]">
            Pantau lead masuk, follow-up, dan peluang deal
          </p>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-[#E2E8F0] bg-white p-1.5 shadow-sm"
            >
              <p className="text-[4px] text-[#64748B]">{stat.label}</p>
              <p className="text-[9px] font-bold text-[#2563EB]">{stat.value}</p>
              <p className="text-[3px] text-[#64748B]">{stat.hint}</p>
            </div>
          ))}
        </div>
        <div className="mt-1.5 flex flex-1 gap-1.5">
          <div className="flex flex-1 flex-col rounded-lg border border-[#E2E8F0] bg-white p-1.5">
            <p className="text-[5px] font-semibold text-[#0F172A]">Source Teraktif</p>
            <p className="text-[4px] text-[#64748B]">Website · 18 lead</p>
            <div className="mt-1 flex flex-1 items-end gap-0.5">
              {[36, 24, 20, 12, 8].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-[#2563EB]/80"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="flex w-[42%] flex-col rounded-lg border border-[#E2E8F0] bg-white p-1.5">
            <p className="text-[5px] font-semibold text-[#0F172A]">Follow-up Hari Ini</p>
            {TABLE_LEADS.slice(0, 3).map((lead) => (
              <div
                key={lead.id}
                className="mt-0.5 flex items-center justify-between rounded bg-amber-50 px-1 py-0.5"
              >
                <p className="truncate text-[4px] font-medium text-[#0F172A]">
                  {lead.name}
                </p>
                <PriorityBadge priority={lead.priority} />
              </div>
            ))}
          </div>
        </div>
        <p className="mt-1 text-[3px] italic text-[#64748B]">
          Data simulasi untuk demo portfolio
        </p>
      </div>
    </div>
  );
}

function TablePreview() {
  return (
    <div className="flex h-full flex-col bg-white p-2">
      <div className="mb-1">
        <p className="text-[8px] font-bold text-[#0F172A]">Lead Inbox</p>
        <p className="text-[5px] text-[#64748B]">
          Semua calon customer dari berbagai channel
        </p>
      </div>
      <div className="mb-1 flex flex-wrap gap-0.5">
        {["Cari nama...", "Semua Source", "Semua Status", "Priority"].map(
          (f, i) => (
            <span
              key={f}
              className={cn(
                "rounded border px-1 py-0.5 text-[4px]",
                i === 2
                  ? "border-[#2563EB] bg-[#2563EB] text-white"
                  : "border-[#E2E8F0] text-[#64748B]",
              )}
            >
              {f}
            </span>
          ),
        )}
      </div>
      <div className="mb-0.5 grid grid-cols-9 gap-0.5 border-b border-[#E2E8F0] pb-0.5">
        {[
          "Nama",
          "Kebutuhan",
          "Source",
          "Status",
          "Priority",
          "Admin",
          "Kontak",
          "Nilai",
          "Aksi",
        ].map((col) => (
          <p key={col} className="truncate text-[3px] font-semibold text-[#64748B]">
            {col}
          </p>
        ))}
      </div>
      <div className="flex-1 space-y-0.5 overflow-hidden">
        {TABLE_LEADS.map((lead) => (
          <div
            key={lead.id}
            className="grid grid-cols-9 items-center gap-0.5 rounded border border-[#E2E8F0]/60 bg-[#F8FAFC] px-0.5 py-0.5"
          >
            <p className="truncate text-[3px] font-medium text-[#0F172A]">
              {lead.name}
            </p>
            <p className="truncate text-[3px] text-[#64748B]">{lead.need}</p>
            <p className="truncate text-[3px] text-[#64748B]">{lead.source}</p>
            <StatusBadge status={lead.status} />
            <PriorityBadge priority={lead.priority} />
            <div className="flex items-center gap-0.5">
              <AvatarInitials initials={lead.assignedInitials} />
            </div>
            <p className="truncate text-[3px] text-[#64748B]">
              {lead.lastContact}
            </p>
            <p className="truncate text-[3px] font-medium text-[#0F172A]">
              {lead.value}
            </p>
            <span className="text-[3px] font-medium text-[#2563EB]">Detail</span>
          </div>
        ))}
      </div>
      <p className="mt-0.5 text-[3px] text-[#64748B]">50 leads · data simulasi</p>
    </div>
  );
}

function KanbanPreview() {
  const columns: LeadStatus[] = [
    "Baru",
    "Dihubungi",
    "Follow Up",
    "Deal",
    "Tidak Cocok",
  ];
  const counts: Record<LeadStatus, number> = {
    Baru: 12,
    Dihubungi: 10,
    "Follow Up": 14,
    Deal: 7,
    "Tidak Cocok": 7,
  };

  return (
    <div className="flex h-full flex-col bg-[#F8FAFC] p-2">
      <div className="mb-1">
        <p className="text-[8px] font-bold text-[#0F172A]">Pipeline Lead</p>
        <p className="text-[5px] text-[#64748B]">
          Alur lead dari inquiry pertama sampai keputusan akhir
        </p>
      </div>
      <div className="flex flex-1 gap-0.5 overflow-hidden">
        {columns.map((status) => {
          const cards = KANBAN_PREVIEW[status];
          const colBg =
            status === "Baru"
              ? "bg-violet-50 border-violet-200"
              : status === "Dihubungi"
                ? "bg-blue-50 border-blue-200"
                : status === "Follow Up"
                  ? "bg-amber-50 border-amber-200"
                  : status === "Deal"
                    ? "bg-emerald-50 border-emerald-200"
                    : "bg-red-50 border-red-200";

          return (
            <div
              key={status}
              className={cn("flex min-w-0 flex-1 flex-col rounded border p-1", colBg)}
            >
              <div className="mb-0.5 flex items-center justify-between">
                <p className="text-[4px] font-semibold text-[#0F172A]">{status}</p>
                <span className="rounded-full bg-white px-1 text-[3px] font-bold">
                  {counts[status]}
                </span>
              </div>
              <div className="space-y-0.5">
                {cards.length > 0 ? (
                  cards.map((lead) => (
                    <div
                      key={lead.id}
                      className="rounded border border-white bg-white p-1 shadow-sm"
                    >
                      <p className="text-[4px] font-semibold text-[#0F172A]">
                        {lead.name}
                      </p>
                      <p className="truncate text-[3px] text-[#64748B]">
                        {lead.need}
                      </p>
                      <div className="mt-0.5 flex items-center justify-between">
                        <span className="text-[3px] text-[#64748B]">
                          {lead.source}
                        </span>
                        <span className="text-[3px] font-medium text-[#2563EB]">
                          {lead.value}
                        </span>
                      </div>
                      <div className="mt-0.5 flex items-center gap-0.5">
                        <AvatarInitials initials={lead.assignedInitials} />
                        <PriorityBadge priority={lead.priority} />
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="py-2 text-center text-[3px] text-[#64748B]">
                    Belum ada lead
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DetailPreview() {
  return (
    <div className="flex h-full gap-1 bg-[#F8FAFC] p-1.5">
      <div className="flex flex-1 flex-col gap-0.5 opacity-25">
        {TABLE_LEADS.slice(0, 4).map((lead) => (
          <div
            key={lead.id}
            className="h-3 rounded border border-[#E2E8F0] bg-white"
          />
        ))}
      </div>
      <div className="flex w-[58%] flex-col rounded-lg border border-[#E2E8F0] bg-white p-2 shadow-lg">
        <div className="mb-1.5 flex items-start justify-between border-b border-[#E2E8F0] pb-1">
          <div>
            <p className="text-[8px] font-bold text-[#0F172A]">Detail Lead</p>
            <p className="text-[7px] font-semibold text-[#0F172A]">Ayu Kartika</p>
            <p className="text-[5px] text-[#64748B]">08XX-0000-1201</p>
          </div>
          <StatusBadge status="Follow Up" />
        </div>
        <div className="space-y-1">
          <div>
            <p className="text-[4px] font-semibold text-[#64748B]">Kebutuhan</p>
            <p className="text-[5px] text-[#0F172A]">
              Konsultasi paket treatment wajah klinik beauty
            </p>
          </div>
          <div className="flex gap-2">
            <div>
              <p className="text-[4px] text-[#64748B]">Source</p>
              <p className="text-[5px] font-medium">Facebook Ads</p>
            </div>
            <div>
              <p className="text-[4px] text-[#64748B]">Prioritas</p>
              <PriorityBadge priority="Tinggi" />
            </div>
            <div>
              <p className="text-[4px] text-[#64748B]">Admin</p>
              <div className="flex items-center gap-0.5">
                <AvatarInitials initials="RW" />
                <span className="text-[4px]">Rina W.</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <p className="text-[4px] text-[#64748B]">Est. Nilai</p>
              <p className="text-[5px] font-bold text-[#2563EB]">Rp2.500.000</p>
            </div>
            <div>
              <p className="text-[4px] text-[#64748B]">Kontak Terakhir</p>
              <p className="text-[5px]">Hari ini, 10:15</p>
            </div>
          </div>
        </div>
        <div className="mt-1 rounded border border-[#E2E8F0] bg-[#F8FAFC] p-1.5">
          <p className="text-[4px] font-semibold text-[#0F172A]">Catatan Follow-up</p>
          <p className="text-[4px] italic leading-relaxed text-[#64748B]">
            Tertarik paket acne treatment, minta penjelasan perbedaan paket basic
            dan premium.
          </p>
        </div>
        <div className="mt-1 rounded border border-amber-200 bg-amber-50 p-1">
          <p className="text-[4px] font-semibold text-amber-800">Aksi Berikutnya</p>
          <p className="text-[4px] text-amber-700">
            Kirim detail paket dan follow-up sore ini
          </p>
        </div>
        <div className="mt-1.5 flex flex-wrap gap-0.5">
          {["Simpan", "Tambah Catatan", "Jadwalkan", "Deal", "Tidak Cocok"].map(
            (btn, i) => (
              <span
                key={btn}
                className={cn(
                  "rounded px-1 py-0.5 text-[3px] font-medium",
                  i === 0
                    ? "bg-[#2563EB] text-white"
                    : "border border-[#E2E8F0] text-[#64748B]",
                )}
              >
                {btn}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function ActivityPreview() {
  return (
    <div className="flex h-full flex-col bg-white p-2">
      <div className="mb-1">
        <p className="text-[8px] font-bold text-[#0F172A]">Aktivitas & Follow-up</p>
        <p className="text-[5px] text-[#64748B]">
          Catat hasil komunikasi agar tim tahu konteks terakhir
        </p>
        <p className="text-[5px] font-medium text-[#2563EB]">Ayu Kartika · LF-001</p>
      </div>
      <div className="mb-1 flex gap-0.5">
        <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-[4px] font-medium text-amber-700">
          Follow-up: Jumat 15:00
        </span>
        <span className="rounded-full bg-red-100 px-1.5 py-0.5 text-[4px] text-red-700">
          Prioritas Tinggi
        </span>
      </div>
      <div className="flex-1 space-y-1 overflow-hidden">
        {ACTIVITIES.map((act) => (
          <div key={act.time} className="flex gap-1">
            <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
            <div>
              <p className="text-[4px] font-medium text-[#0F172A]">{act.text}</p>
              <p className="text-[3px] text-[#64748B]">
                {act.by} · {act.time}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-1 rounded border border-[#E2E8F0] bg-[#F8FAFC] p-1.5">
        <p className="text-[4px] text-[#64748B]">
          Contoh: Lead minta dikirim paket harga dan ingin dihubungi Jumat sore
        </p>
        <div className="mt-1 flex gap-0.5">
          {["Tambah Catatan", "Sudah Dihubungi", "Follow-up Lagi"].map((btn) => (
            <span
              key={btn}
              className="rounded border border-[#E2E8F0] bg-white px-1 py-0.5 text-[3px] text-[#64748B]"
            >
              {btn}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SourcePreview() {
  return (
    <div className="flex h-full flex-col bg-[#F8FAFC] p-2">
      <div className="mb-1">
        <p className="text-[8px] font-bold text-[#0F172A]">Performa Source Lead</p>
        <p className="text-[5px] text-[#64748B]">
          Channel mana yang paling banyak membawa calon customer
        </p>
      </div>
      <div className="mb-1 rounded border border-[#2563EB]/30 bg-blue-50 px-1.5 py-1">
        <p className="text-[5px] font-semibold text-[#2563EB]">
          Source Teraktif: Website · 18 lead (36%)
        </p>
      </div>
      <div className="flex-1 space-y-1">
        {SOURCE_DATA.map((item) => (
          <div
            key={item.source}
            className={cn(
              "rounded-lg border bg-white p-1.5",
              item.highlight ? "border-[#2563EB]/40" : "border-[#E2E8F0]",
            )}
          >
            <div className="flex items-center justify-between">
              <p className="text-[5px] font-semibold text-[#0F172A]">
                {item.source}
              </p>
              <p className="text-[5px] font-bold text-[#2563EB]">
                {item.leads} lead
              </p>
            </div>
            <div className="mt-0.5 h-1.5 w-full rounded bg-[#E2E8F0]">
              <div
                className="h-full rounded bg-[#2563EB]"
                style={{ width: `${item.pct}%` }}
              />
            </div>
            <div className="mt-0.5 flex gap-2 text-[3px] text-[#64748B]">
              <span>Deal: {item.deals}</span>
              <span>Pending: {item.pending}</span>
              <span>{item.value}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-0.5 text-[3px] italic text-[#64748B]">
        Membantu owner membaca pola inquiry, bukan menjamin penjualan
      </p>
    </div>
  );
}

function ReportPreview() {
  const metrics = [
    { label: "Total Lead", value: "50" },
    { label: "Lead Baru", value: "12" },
    { label: "Follow-up Due", value: "9" },
    { label: "Deal", value: "7" },
    { label: "Tidak Cocok", value: "7" },
    { label: "Est. Pipeline", value: "Rp186,5jt" },
  ];

  return (
    <div className="flex h-full flex-col bg-white p-2">
      <div className="mb-1 flex items-center justify-between">
        <div>
          <p className="text-[8px] font-bold text-[#0F172A]">Laporan Ringkas</p>
          <p className="text-[5px] text-[#64748B]">Bulan ini · data simulasi</p>
        </div>
        <span className="rounded border border-[#E2E8F0] px-1 py-0.5 text-[4px] text-[#64748B]">
          Export
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-1 text-center"
          >
            <p className="text-[3px] text-[#64748B]">{m.label}</p>
            <p className="text-[8px] font-bold text-[#0F172A]">{m.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-1.5 flex flex-1 gap-1.5">
        <div className="flex flex-1 flex-col rounded-lg border border-[#E2E8F0] p-1.5">
          <p className="text-[5px] font-semibold text-[#0F172A]">Beban Admin</p>
          {ADMIN_WORKLOAD.map((admin) => (
            <div
              key={admin.name}
              className="mt-0.5 flex items-center justify-between"
            >
              <div className="flex items-center gap-0.5">
                <AvatarInitials initials={admin.initials} />
                <span className="text-[4px] text-[#0F172A]">{admin.name.split(" ")[0]}</span>
              </div>
              <span className="text-[3px] text-[#64748B]">
                {admin.leads} lead · {admin.followUp} FU
              </span>
            </div>
          ))}
        </div>
        <div className="flex w-[38%] flex-col gap-1">
          <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-1.5">
            <p className="text-[4px] text-[#64748B]">Rata-rata Follow-up</p>
            <p className="text-[7px] font-bold text-[#2563EB]">3j 20m</p>
          </div>
          <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-1.5">
            <p className="text-[4px] text-[#64748B]">Top Source</p>
            <p className="text-[6px] font-bold text-[#0F172A]">Website</p>
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-1.5">
            <p className="text-[4px] text-amber-700">Leads Aging &gt;7 hari</p>
            <p className="text-[7px] font-bold text-amber-800">4 lead</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyPreview() {
  const checklist = [
    "Buat status pipeline",
    "Tambahkan admin/sales",
    "Hubungkan form website",
    "Tentukan source lead",
    "Mulai catat follow-up",
  ];

  return (
    <div className="flex h-full flex-col items-center justify-center bg-[#F8FAFC] p-3 text-center">
      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-[#E2E8F0] bg-white">
        <div className="h-4 w-4 rounded bg-[#2563EB]/20" />
      </div>
      <p className="text-[8px] font-bold text-[#0F172A]">Belum ada lead masuk</p>
      <p className="mt-0.5 text-[5px] text-[#64748B]">
        Tambahkan lead manual atau hubungkan form website
      </p>
      <div className="mt-2 w-full space-y-0.5 text-left">
        {checklist.map((item, i) => (
          <div
            key={item}
            className="flex items-center gap-1 rounded border border-[#E2E8F0] bg-white px-1.5 py-0.5"
          >
            <span className="flex h-2 w-2 items-center justify-center rounded-full border border-[#E2E8F0] text-[3px] text-[#64748B]">
              {i + 1}
            </span>
            <p className="text-[4px] text-[#64748B]">{item}</p>
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-1">
        <span className="rounded bg-[#2563EB] px-2 py-0.5 text-[4px] font-semibold text-white">
          Tambah Lead Pertama
        </span>
        <span className="rounded border border-[#E2E8F0] px-2 py-0.5 text-[4px] text-[#64748B]">
          Lihat Contoh Data
        </span>
      </div>
      <p className="mt-1.5 text-[3px] italic text-[#64748B]">
        Data demo adalah simulasi. Project nyata dapat dihubungkan ke form,
        spreadsheet, atau workflow WhatsApp.
      </p>
    </div>
  );
}

function MobilePreview() {
  const mobileLeads = TABLE_LEADS.slice(0, 3);

  return (
    <div className="flex h-full flex-col bg-[#F8FAFC]">
      <div className="border-b border-[#E2E8F0] bg-white px-2 py-1.5">
        <div className="flex items-center justify-between">
          <p className="text-[7px] font-bold text-[#0F172A]">Lead Mobile View</p>
          <AvatarInitials initials="RW" />
        </div>
        <p className="text-[4px] text-[#64748B]">
          Cek lead prioritas dari layar kecil
        </p>
      </div>
      <div className="grid grid-cols-3 gap-1 p-2">
        {[
          { label: "Baru", value: "12" },
          { label: "Follow-up", value: "9" },
          { label: "Deal", value: "7" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-[#E2E8F0] bg-white p-1 text-center"
          >
            <p className="text-[3px] text-[#64748B]">{s.label}</p>
            <p className="text-[8px] font-bold text-[#2563EB]">{s.value}</p>
          </div>
        ))}
      </div>
      <div className="flex-1 space-y-1 overflow-hidden px-2">
        {mobileLeads.map((lead) => (
          <div
            key={lead.id}
            className="rounded-lg border border-[#E2E8F0] bg-white p-1.5 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[5px] font-semibold text-[#0F172A]">
                  {lead.name}
                </p>
                <p className="text-[4px] text-[#64748B]">{lead.need}</p>
              </div>
              <StatusBadge status={lead.status} />
            </div>
            <div className="mt-0.5 flex items-center justify-between">
              <div className="flex items-center gap-0.5">
                <AvatarInitials initials={lead.assignedInitials} />
                <PriorityBadge priority={lead.priority} />
              </div>
              <span className="text-[4px] font-medium text-[#2563EB]">
                {lead.value}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-1 border-t border-[#E2E8F0] bg-white p-1.5">
        {["Filter", "Detail", "Catatan", "Status"].map((btn, i) => (
          <span
            key={btn}
            className={cn(
              "flex-1 rounded py-1 text-center text-[4px] font-medium",
              i === 1
                ? "bg-[#2563EB] text-white"
                : "border border-[#E2E8F0] text-[#64748B]",
            )}
          >
            {btn}
          </span>
        ))}
      </div>
    </div>
  );
}