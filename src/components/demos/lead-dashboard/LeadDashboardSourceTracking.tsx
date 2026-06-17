import { sourceBreakdown } from "@/data/demos/lead-dashboard/report";
import { leadDashboardCopy } from "@/data/demos/lead-dashboard/copy";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { overviewStats } from "@/data/demos/lead-dashboard/report";
import { useLang } from "@/i18n/use-lang";
import { useDict } from "@/i18n/use-dict";
import { leadSourceLabel } from "@/lib/lead-dashboard-labels";

const sourceAccent: Record<string, string> = {
  Website: "from-blue-500 to-cyan-500",
  "Facebook Ads": "from-indigo-500 to-blue-500",
  WhatsApp: "from-emerald-500 to-green-500",
  Referral: "from-violet-500 to-purple-500",
  Event: "from-amber-500 to-orange-500",
  Instagram: "from-rose-500 to-pink-500",
};

export function LeadDashboardSourceTracking() {
  const { lang } = useLang();
  const { common } = useDict();
  const copy = leadDashboardCopy.source;
  const maxCount = Math.max(...sourceBreakdown.map((s) => s.count));

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            {copy.eyebrow[lang]}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
            {copy.title[lang]}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
            {copy.subtitle[lang]}
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {sourceBreakdown.map((s) => (
            <Card key={s.source} hover className="flex flex-col">
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br text-white ${sourceAccent[s.source] ?? "from-slate-500 to-slate-600"}`}
                >
                  <span className="text-[10px] font-bold">
                    {leadSourceLabel(s.source, common.enums).slice(0, 2).toUpperCase()}
                  </span>
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-brand-muted">
                  {copy.leadCount(s.count)[lang]}
                </span>
              </div>
              <h3 className="mt-3 text-sm font-semibold text-brand-navy">
                {leadSourceLabel(s.source, common.enums)}
              </h3>
              <div className="mt-3 space-y-1.5 text-xs">
                <Stat label={copy.deal[lang]} value={String(s.deal)} tone="text-emerald-700" />
                <Stat
                  label={copy.fuPending[lang]}
                  value={String(s.fuPending)}
                  tone="text-amber-700"
                />
                <Stat
                  label={copy.estPipeline[lang]}
                  value={s.estimatedValue > 0 ? `Rp ${s.estimatedValue} jt` : "—"}
                  tone="text-brand-navy"
                />
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${sourceAccent[s.source] ?? "from-slate-500 to-slate-600"}`}
                  style={{ width: `${(s.count / maxCount) * 100}%` }}
                />
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-brand-muted">
          {copy.footer(overviewStats.total)[lang]}
        </p>
      </Container>
    </section>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-brand-muted">{label}</span>
      <span className={`font-semibold ${tone}`}>{value}</span>
    </div>
  );
}