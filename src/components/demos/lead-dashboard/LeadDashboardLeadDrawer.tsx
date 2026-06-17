import { useEffect } from "react";
import {
  X,
  Phone,
  Mail,
  Calendar,
  Building2,
  FileText,
  Tag,
  Activity,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import {
  STATUSES,
  type Lead,
  type LeadStatus,
} from "@/data/demos/lead-dashboard/leads";
import { team } from "@/data/demos/lead-dashboard/team";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { useState } from "react";
import { leadDashboardCopy } from "@/data/demos/lead-dashboard/copy";
import { useLang } from "@/i18n/use-lang";
import { useDict } from "@/i18n/use-dict";
import { leadPriorityLabel, leadSourceLabel, leadStatusLabel } from "@/lib/lead-dashboard-labels";

type LeadDashboardLeadDrawerProps = {
  lead: Lead | null;
  onClose: () => void;
  onStatusChange: (id: string, status: LeadStatus) => void;
};

const statusTone: Record<LeadStatus, string> = {
  Baru: "bg-blue-100 text-blue-700",
  Dihubungi: "bg-cyan-100 text-cyan-700",
  "Follow Up": "bg-amber-100 text-amber-700",
  Deal: "bg-emerald-100 text-emerald-700",
  "Tidak Cocok": "bg-slate-100 text-slate-500",
};

export function LeadDashboardLeadDrawer({
  lead,
  onClose,
  onStatusChange,
}: LeadDashboardLeadDrawerProps) {
  const { lang } = useLang();
  const { common } = useDict();
  const d = leadDashboardCopy.drawer;
  const [statusOpen, setStatusOpen] = useState(false);

  useEffect(() => {
    if (!lead) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [lead, onClose]);

  if (!lead) return null;

  const assigned = team.find((m) => m.id === lead.assignedId);

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-brand-navy/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <aside className="relative z-10 flex h-full w-full max-w-md flex-col overflow-y-auto bg-white shadow-2xl">
        <div
          className="flex items-center justify-between border-b border-brand-border p-5"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #2563EB 0%, #0F172A 100%)",
          }}
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-cyan-200">
              {d.contact[lang]} · {lead.id}
            </p>
            <p className="mt-1 text-lg font-bold text-white">{lead.name}</p>
            <p className="text-xs text-cyan-100/80">{lead.business}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={d.close[lang]}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </div>

        <div className="space-y-5 p-5">
          <section>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
              {d.contact[lang]}
            </p>
            <div className="mt-3 space-y-2 text-sm">
              <ContactRow icon={Phone} label={d.phone[lang]} value={lead.phone} />
              <ContactRow icon={Building2} label={d.business[lang]} value={lead.business} />
              <ContactRow icon={Tag} label={d.need[lang]} value={lead.needType} />
              <ContactRow icon={FileText} label={d.source[lang]} value={leadSourceLabel(lead.source, common.enums)} />
            </div>
          </section>

          <section className="rounded-xl border border-brand-border bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
              {d.changeStatus[lang]} · {d.priority[lang]} · {d.assigned[lang]}
            </p>
            <div className="mt-3 space-y-3">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setStatusOpen((p) => !p)}
                  className="flex w-full items-center justify-between gap-2 rounded-lg border border-brand-border bg-white px-3 py-2 text-sm transition-colors hover:bg-brand-light"
                >
                  <span className="inline-flex items-center gap-2">
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[10px] font-semibold",
                        statusTone[lead.status],
                      )}
                    >
                      {leadStatusLabel(lead.status, common.enums)}
                    </span>
                    <span className="text-xs text-brand-muted">{d.changeStatus[lang]}</span>
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-brand-muted transition-transform",
                      statusOpen && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
                {statusOpen && (
                  <div className="absolute z-10 mt-1 w-full rounded-lg border border-brand-border bg-white py-1 shadow-lg">
                    {STATUSES.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => {
                          onStatusChange(lead.id, s);
                          setStatusOpen(false);
                        }}
                        className={cn(
                          "flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-brand-light",
                          s === lead.status && "bg-blue-50/50 font-semibold",
                        )}
                      >
                        {s === lead.status && (
                          <CheckCircle2
                            className="h-3.5 w-3.5 text-brand-blue"
                            aria-hidden
                          />
                        )}
                        {leadStatusLabel(s, common.enums)}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-brand-muted">{d.priority[lang]}</span>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[10px] font-semibold",
                    lead.priority === "Tinggi"
                      ? "bg-rose-100 text-rose-700"
                      : lead.priority === "Sedang"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-slate-100 text-slate-500",
                  )}
                >
                  {leadPriorityLabel(lead.priority, common.enums)}
                </span>
              </div>

              {assigned && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-brand-muted">{d.assigned[lang]}</span>
                  <span className="inline-flex items-center gap-2 font-semibold text-brand-navy">
                    <span
                      className={cn(
                        "flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br text-[10px] font-bold text-white",
                        assigned.gradient,
                      )}
                    >
                      {assigned.initials}
                    </span>
                    {assigned.name}
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between text-sm">
                <span className="text-brand-muted">{d.value[lang]}</span>
                <span className="font-semibold text-brand-navy">
                  {lead.estimatedValue > 0 ? `Rp ${lead.estimatedValue} jt` : "—"}
                </span>
              </div>
            </div>
          </section>

          <section>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
              {d.notes[lang]}
            </p>
            <p className="mt-2 rounded-lg border border-brand-border bg-white p-3 text-sm leading-relaxed text-brand-dark">
              {lead.notes}
            </p>
          </section>

          <section>
            <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand-blue">
              <Activity className="h-3.5 w-3.5" aria-hidden /> {d.activity[lang]}
            </p>
            <ol className="mt-3 space-y-2">
              {lead.activity.map((act, idx) => (
                <li key={idx} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="h-2 w-2 rounded-full bg-brand-blue" />
                    {idx < lead.activity.length - 1 && (
                      <div className="my-1 h-full w-px bg-brand-border" />
                    )}
                  </div>
                  <div className="pb-3">
                    <p className="text-xs font-medium text-brand-navy">
                      {act.note}
                    </p>
                    <p className="inline-flex items-center gap-1 text-[10px] text-brand-muted">
                      <Calendar className="h-3 w-3" aria-hidden /> {act.date}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="flex flex-col gap-2 sm:flex-row">
            <Button
              href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, "")}`}
              size="md"
              className="flex-1"
            >
              <Phone className="h-4 w-4" aria-hidden /> {d.waCta[lang]}
            </Button>
            <Button
              href={`mailto:${lead.name.toLowerCase().replace(/\s+/g, ".")}@example.com`}
              variant="secondary"
              size="md"
              className="flex-1"
            >
              <Mail className="h-4 w-4" aria-hidden /> {d.emailCta[lang]}
            </Button>
          </section>
        </div>
      </aside>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="inline-flex items-center gap-1.5 text-brand-muted">
        <Icon className="h-3.5 w-3.5" aria-hidden /> {label}
      </span>
      <span className="font-medium text-brand-navy">{value}</span>
    </div>
  );
}
