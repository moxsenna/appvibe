import { STATUSES, type Lead, type LeadStatus } from "@/data/demos/lead-dashboard/leads";
import { team } from "@/data/demos/lead-dashboard/team";
import { cn } from "@/lib/cn";
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

const priorityDot: Record<Lead["priority"], string> = {
  Tinggi: "bg-rose-500",
  Sedang: "bg-amber-500",
  Rendah: "bg-slate-300",
};

type LeadDashboardPipelineProps = {
  leads: Lead[];
  onOpen: (l: Lead) => void;
};

export function LeadDashboardPipeline({
  leads,
  onOpen,
}: LeadDashboardPipelineProps) {
  const { common } = useDict();

  return (
    <div className="overflow-x-auto rounded-2xl border border-brand-border bg-slate-50 p-3 shadow-sm sm:p-4">
      <div className="flex gap-3 pb-2" style={{ minWidth: "fit-content" }}>
        {STATUSES.map((status) => {
          const subset = leads.filter((l) => l.status === status);
          return (
            <div
              key={status}
              className="flex w-72 shrink-0 flex-col gap-2 rounded-xl bg-white p-3"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-navy">
                  {leadStatusLabel(status, common.enums)}
                </p>
                <span className="rounded-full bg-brand-light px-2 py-0.5 text-[10px] font-semibold text-brand-muted">
                  {subset.length}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {subset.map((l) => {
                  const member = team.find((m) => m.id === l.assignedId);
                  return (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => onOpen(l)}
                      className="rounded-lg border border-brand-border bg-slate-50 p-2.5 text-left transition-colors hover:border-brand-blue/40 hover:bg-white"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-xs font-semibold text-brand-navy">
                          {l.name}
                        </p>
                        <span
                          className={cn(
                            "h-2 w-2 shrink-0 rounded-full",
                            priorityDot[l.priority],
                          )}
                          title={leadPriorityLabel(l.priority, common.enums)}
                        />
                      </div>
                      <p className="line-clamp-1 text-[10px] text-brand-muted">
                        {l.business}
                      </p>
                      <div className="flex items-center justify-between">
                        <span
                          className={cn(
                            "rounded-full px-1.5 py-0.5 text-[9px] font-semibold",
                            statusTone[l.status],
                          )}
                        >
                          {leadSourceLabel(l.source, common.enums)}
                        </span>
                        <span className="text-[10px] font-semibold text-brand-navy">
                          {l.estimatedValue > 0
                            ? `Rp ${l.estimatedValue} jt`
                            : "—"}
                        </span>
                      </div>
                      {member && (
                        <p className="mt-1 text-[9px] text-brand-muted">
                          {member.initials} · {member.name}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}