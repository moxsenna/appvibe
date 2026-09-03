import { ArrowRight, MessageCircle, BarChart3, CheckCircle2 } from "lucide-react";
import { brand } from "@/data/demos/lead-dashboard/brand";
import { leadDashboardCopy } from "@/data/demos/lead-dashboard/copy";
import { overviewStats } from "@/data/demos/lead-dashboard/report";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";

export function LeadDashboardHero() {
  const { lang } = useLang();
  const copy = leadDashboardCopy.hero;
  const whatsappUrl = buildWhatsAppUrl(brand.whatsappPrefill[lang]);

  return (
    <section
      id="top"
      className="text-white"
      style={{ backgroundColor: "#0F172A" }}
    >
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <p className="mb-5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-slate-300">
            {copy.badge[lang]}
          </p>
          <h1 className="font-display text-display-lg font-normal tracking-tight text-white">
            {copy.title[lang]}
          </h1>
          <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-slate-200 sm:text-lg">
            {brand.oneLiner[lang]}
          </p>
          <p className="mt-2 max-w-[58ch] text-xs italic leading-relaxed text-slate-400 sm:text-sm">
            {brand.disclaimer[lang]}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {copy.trustChips.map((chip) => (
              <li
                key={chip[lang]}
                className="inline-flex items-center gap-1.5 rounded-[3px] border border-white/20 px-2.5 py-1 text-xs font-medium text-slate-200"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" aria-hidden />
                {chip[lang]}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              href="#dashboard"
              size="lg"
              className="bg-white text-av-ink hover:bg-av-canvas"
              onClick={() =>
                trackEvent("cta_whatsapp_click", {
                  location: "ld_hero_primary",
                })
              }
            >
              <BarChart3 className="h-5 w-5" aria-hidden />
              {copy.ctaPrimary[lang]}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button
              href={whatsappUrl}
              variant="secondary"
              size="lg"
              className="border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10"
              onClick={() =>
                trackEvent("cta_whatsapp_click", {
                  location: "ld_hero_secondary",
                })
              }
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              {copy.ctaSecondary[lang]}
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <HeroStatsVisual lang={lang} />
        </div>
      </Container>
    </section>
  );
}

function HeroStatsVisual({ lang }: { lang: "id" | "en" }) {
  const stats = leadDashboardCopy.hero.stats;
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-white/20 bg-white/20 lg:sticky lg:top-24">
      <StatTile
        label={stats.totalLeads[lang]}
        value={overviewStats.total}
      />
      <StatTile
        label={stats.newLeads[lang]}
        value={overviewStats.baru}
      />
      <StatTile
        label={leadDashboardCopy.report.stats.followUp[lang]}
        value={overviewStats.followUp}
      />
      <StatTile
        label={stats.deals[lang]}
        value={overviewStats.deal}
      />
      <div className="col-span-2 bg-white px-5 py-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-av-muted">
          {stats.pipeline[lang]}
        </p>
        <p className="mt-1 font-display text-3xl text-av-ink">
          Rp {overviewStats.estimatedPipeline} jt
        </p>
        <p className="mt-0.5 text-[11px] text-av-secondary">
          {stats.pipelineFootnote[lang]}
        </p>
      </div>
    </div>
  );
}

function StatTile({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="bg-white px-5 py-4">
      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-av-muted">
        {label}
      </p>
      <p className="mt-1 font-display text-3xl text-av-ink">{value}</p>
    </div>
  );
}