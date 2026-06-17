import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  leads as initialLeads,
  SOURCES,
  STATUSES,
  type Lead,
  type LeadSource,
  type LeadStatus,
} from "@/data/demos/lead-dashboard/leads";
import { team } from "@/data/demos/lead-dashboard/team";
import { overviewStats } from "@/data/demos/lead-dashboard/report";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { LeadDashboardLeadDrawer } from "@/components/demos/lead-dashboard/LeadDashboardLeadDrawer";
import { LeadDashboardPipeline } from "@/components/demos/lead-dashboard/LeadDashboardPipeline";
import { leadDashboardCopy } from "@/data/demos/lead-dashboard/copy";
import { useLang } from "@/i18n/use-lang";
import { useDict } from "@/i18n/use-dict";
import {
  leadPriorityLabel,
  leadSourceLabel,
  leadStatusLabel,
} from "@/lib/lead-dashboard-labels";

const statusTone: Record<LeadStatus, string> = {
  Baru: "bg-blue-100 text-blue-700",
  Dihubungi: "bg-cyan-100 text-cyan-700",
  "Follow Up": "bg-amber-100 text-amber-700",
  Deal: "bg-emerald-100 text-emerald-700",
  "Tidak Cocok": "bg-slate-100 text-slate-500",
};

const priorityTone: Record<Lead["priority"], string> = {
  Tinggi: "bg-rose-100 text-rose-700",
  Sedang: "bg-amber-100 text-amber-700",
  Rendah: "bg-slate-100 text-slate-500",
};

const sourceTone: Record<LeadSource, string> = {
  Website: "bg-blue-50 text-blue-700 border-blue-200",
  "Facebook Ads": "bg-indigo-50 text-indigo-700 border-indigo-200",
  WhatsApp: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Referral: "bg-violet-50 text-violet-700 border-violet-200",
  Event: "bg-amber-50 text-amber-700 border-amber-200",
  Instagram: "bg-rose-50 text-rose-700 border-rose-200",
};

type View = "list" | "pipeline";

type LeadDashboardInboxProps = {
  leads: Lead[];
  onStatusChange: (id: string, status: LeadStatus) => void;
};

export function LeadDashboardInbox({
  leads,
  onStatusChange,
}: LeadDashboardInboxProps) {
  const { lang } = useLang();
  const inboxCopy = leadDashboardCopy.inbox;
  const [view, setView] = useState<View>("list");
  const [search, setSearch] = useState("");
  const [activeStatus, setActiveStatus] = useState<LeadStatus | "all">("all");
  const [activeSource, setActiveSource] = useState<LeadSource | "all">("all");
  const [open, setOpen] = useState<Lead | null>(null);

  const filtered = useMemo(() => {
    return leads.filter((l) => {
      if (activeStatus !== "all" && l.status !== activeStatus) return false;
      if (activeSource !== "all" && l.source !== activeSource) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        const hay = `${l.name} ${l.business} ${l.phone} ${l.needType}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [leads, activeStatus, activeSource, search]);

  return (
    <section
      id="dashboard"
      className="section-padding"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
      }}
    >
      <Container>
        <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
              {inboxCopy.eyebrow[lang]}
            </p>
            <h2 className="mt-1 text-2xl font-bold text-brand-navy sm:text-3xl">
              {inboxCopy.title(overviewStats.total)[lang]}
            </h2>
          </div>
          <div className="inline-flex rounded-lg border border-brand-border bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setView("list")}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-semibold transition-colors",
                view === "list"
                  ? "bg-cta-gradient text-white"
                  : "text-brand-muted hover:text-brand-navy",
              )}
            >
              {inboxCopy.listTab[lang]}
            </button>
            <button
              type="button"
              onClick={() => setView("pipeline")}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-semibold transition-colors",
                view === "pipeline"
                  ? "bg-cta-gradient text-white"
                  : "text-brand-muted hover:text-brand-navy",
              )}
            >
              {inboxCopy.pipelineTab[lang]}
            </button>
          </div>
        </div>

        {view === "list" ? (
          <ListView
            leads={filtered}
            search={search}
            setSearch={setSearch}
            activeStatus={activeStatus}
            setActiveStatus={setActiveStatus}
            activeSource={activeSource}
            setActiveSource={setActiveSource}
            onOpen={setOpen}
          />
        ) : (
          <LeadDashboardPipeline leads={filtered} onOpen={setOpen} />
        )}

        <LeadDashboardLeadDrawer
          lead={open}
          onClose={() => setOpen(null)}
          onStatusChange={(id, status) => {
            onStatusChange(id, status);
            setOpen((prev) => (prev ? { ...prev, status } : prev));
          }}
        />
      </Container>
    </section>
  );
}

function ListView({
  leads,
  search,
  setSearch,
  activeStatus,
  setActiveStatus,
  activeSource,
  setActiveSource,
  onOpen,
}: {
  leads: Lead[];
  search: string;
  setSearch: (s: string) => void;
  activeStatus: LeadStatus | "all";
  setActiveStatus: (s: LeadStatus | "all") => void;
  activeSource: LeadSource | "all";
  setActiveSource: (s: LeadSource | "all") => void;
  onOpen: (l: Lead) => void;
}) {
  const { lang } = useLang();
  const { common } = useDict();
  const inboxCopy = leadDashboardCopy.inbox;
  return (
    <>
      <div className="rounded-2xl border border-brand-border bg-white p-4 shadow-sm sm:p-5">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted"
              aria-hidden
            />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={inboxCopy.searchPlaceholder[lang]}
              className="w-full rounded-lg border border-brand-border bg-white py-2 pl-9 pr-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
              aria-label={inboxCopy.searchAria[lang]}
            />
          </div>
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-brand-muted">
              {inboxCopy.filterStatus[lang]}
            </p>
            <div className="flex flex-wrap gap-1.5">
              <FilterChip
                active={activeStatus === "all"}
                onClick={() => setActiveStatus("all")}
                label={inboxCopy.all[lang]}
              />
              {STATUSES.map((st) => (
                <FilterChip
                  key={st}
                  active={activeStatus === st}
                  onClick={() => setActiveStatus(st)}
                  label={leadStatusLabel(st, common.enums)}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-brand-muted">
              {inboxCopy.filterSource[lang]}
            </p>
            <div className="flex flex-wrap gap-1.5">
              <FilterChip
                active={activeSource === "all"}
                onClick={() => setActiveSource("all")}
                label={inboxCopy.all[lang]}
              />
              {SOURCES.map((src) => (
                <FilterChip
                  key={src}
                  active={activeSource === src}
                  onClick={() => setActiveSource(src)}
                  label={leadSourceLabel(src, common.enums)}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="mt-4 text-xs text-brand-muted">
          {lang === "en" ? `${leads.length} leads found` : `${leads.length} lead ditemukan`}
        </p>
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-brand-border bg-white shadow-sm">
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead className="border-b border-brand-border bg-slate-50 text-xs font-semibold uppercase tracking-wider text-brand-muted">
            <tr>
              <th className="px-4 py-3">{inboxCopy.table.lead[lang]}</th>
              <th className="px-4 py-3">{inboxCopy.table.need[lang]}</th>
              <th className="px-4 py-3">{inboxCopy.table.source[lang]}</th>
              <th className="px-4 py-3">{inboxCopy.table.status[lang]}</th>
              <th className="px-4 py-3">{inboxCopy.table.priority[lang]}</th>
              <th className="px-4 py-3">{inboxCopy.table.assigned[lang]}</th>
              <th className="px-4 py-3 text-right">{inboxCopy.table.estimate[lang]}</th>
            </tr>
          </thead>
          <tbody>
            {leads.slice(0, 25).map((l) => {
              const assigned = team.find((m) => m.id === l.assignedId);
              return (
                <tr
                  key={l.id}
                  className="cursor-pointer border-b border-brand-border transition-colors last:border-b-0 hover:bg-blue-50/30"
                  onClick={() => onOpen(l)}
                >
                  <td className="px-4 py-3">
                    <p className="font-semibold text-brand-navy">{l.name}</p>
                    <p className="text-xs text-brand-muted">{l.business}</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="line-clamp-1 text-xs text-brand-dark">
                      {l.needType}
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold",
                        sourceTone[l.source],
                      )}
                    >
                      {leadSourceLabel(l.source, common.enums)}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={cn(
                        "inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold",
                        statusTone[l.status],
                      )}
                    >
                      {leadStatusLabel(l.status, common.enums)}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={cn(
                        "inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold",
                        priorityTone[l.priority],
                      )}
                    >
                      {leadPriorityLabel(l.priority, common.enums)}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {assigned && (
                      <span
                        className={cn(
                          "inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br text-[10px] font-bold text-white",
                          assigned.gradient,
                        )}
                        title={assigned.name}
                      >
                        {assigned.initials}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right text-xs font-semibold text-brand-navy">
                    {l.estimatedValue > 0 ? `Rp ${l.estimatedValue} jt` : "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {leads.length > 25 && (
          <p className="border-t border-brand-border bg-slate-50 px-4 py-3 text-center text-xs text-brand-muted">
            Menampilkan 25 lead pertama · Total {initialLeads.length} lead
            simulasi. Klik baris untuk lihat detail.
          </p>
        )}
        {leads.length === 0 && (
          <p className="px-4 py-8 text-center text-sm text-brand-muted">
            {inboxCopy.emptyFilter[lang]}
          </p>
        )}
      </div>
    </>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        active
          ? "bg-brand-blue text-white"
          : "border border-brand-border bg-white text-brand-muted hover:border-brand-blue hover:text-brand-blue",
      )}
    >
      {label}
    </button>
  );
}
