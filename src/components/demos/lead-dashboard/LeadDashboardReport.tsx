import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import {
  overviewStats,
  adminWorkload,
  leadsAging,
} from "@/data/demos/lead-dashboard/report";
import { leadDashboardCopy } from "@/data/demos/lead-dashboard/copy";
import { useLang } from "@/i18n/use-lang";
import { teamRoleLabel } from "@/lib/lead-dashboard-labels";

export function LeadDashboardReport() {
  const { lang } = useLang();
  const copy = leadDashboardCopy.report;
  const maxWorkload = Math.max(...adminWorkload.map((m) => m.leads));

  const statCards = [
    {
      label: copy.stats.total[lang],
      value: overviewStats.total,
      accent: "from-blue-500 to-cyan-500",
    },
    {
      label: copy.stats.new[lang],
      value: overviewStats.baru,
      accent: "from-emerald-500 to-green-500",
    },
    {
      label: copy.stats.followUp[lang],
      value: overviewStats.followUp,
      accent: "from-amber-500 to-orange-500",
    },
    {
      label: copy.stats.deal[lang],
      value: overviewStats.deal,
      accent: "from-violet-500 to-purple-500",
    },
    {
      label: copy.stats.estPipeline[lang],
      value: `Rp ${overviewStats.estimatedPipeline} jt`,
      accent: "from-cyan-500 to-blue-500",
    },
    {
      label: copy.stats.conversion[lang],
      value: `${overviewStats.conversionRate}%`,
      accent: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section className="section-padding bg-slate-50">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            {copy.eyebrow[lang]}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
            {copy.title[lang]}
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {statCards.map((s) => (
            <Card key={s.label} hover className="flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                {s.label}
              </p>
              <p
                className={`mt-2 text-2xl font-bold text-brand-navy sm:text-3xl bg-gradient-to-r bg-clip-text text-transparent ${s.accent}`}
              >
                {s.value}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <Card padding="lg">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
              {copy.workloadTitle[lang]}
            </p>
            <h3 className="mt-1 text-base font-semibold text-brand-navy">
              {copy.workloadCardTitle[lang]}
            </h3>
            <ul className="mt-4 space-y-3">
              {adminWorkload.map((m) => (
                <li key={m.id}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="inline-flex items-center gap-2 font-medium text-brand-navy">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-[10px] font-bold text-white">
                        {m.initials}
                      </span>
                      {m.name}
                      <span className="text-xs text-brand-muted">
                        · {teamRoleLabel(m.role, lang)}
                      </span>
                    </span>
                    <span className="text-sm font-semibold text-brand-navy">
                      {m.leads} {copy.leadsUnit[lang]}
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                      style={{ width: `${(m.leads / maxWorkload) * 100}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          <Card padding="lg">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
              {copy.agingTitle[lang]}
            </p>
            <h3 className="mt-1 text-base font-semibold text-brand-navy">
              {copy.agingCardTitle[lang]}
            </h3>
            <div className="mt-4 space-y-3">
              {leadsAging.map((b) => {
                const total = leadsAging.reduce((s, x) => s + x.count, 0) || 1;
                const pct = Math.round((b.count / total) * 100);
                return (
                  <div key={b.bucket[lang]}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-brand-navy">
                        {b.bucket[lang]}
                      </span>
                      <span className="text-brand-muted">
                        {b.count} {copy.leadsUnit[lang]} ({pct}%)
                      </span>
                    </div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}