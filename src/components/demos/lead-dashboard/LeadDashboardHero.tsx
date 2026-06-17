import { ArrowRight, MessageCircle, Sparkles, BarChart3, CheckCircle2 } from "lucide-react";
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
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage: `linear-gradient(135deg, ${brand.primaryColor} 0%, #1E3A8A 50%, #0F172A 100%)`,
      }}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-300/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-5" />

      <Container className="relative grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-200 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            {copy.badge[lang]}
          </div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {copy.title[lang]}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-blue-100 sm:text-lg">
            {brand.oneLiner[lang]}
          </p>
          <p className="mt-2 text-xs italic text-blue-200/80 sm:text-sm">
            {brand.disclaimer[lang]}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {copy.trustChips.map((chip) => (
              <span
                key={chip[lang]}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-blue-100"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-300" aria-hidden />
                {chip[lang]}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href="#dashboard"
              size="lg"
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
              className="border-white/30 bg-white/10 text-white hover:bg-white/20"
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
    <div className="relative">
      <div
        className="absolute -inset-4 rounded-3xl opacity-50 blur-2xl"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #06B6D4 0%, #2563EB 50%, #1E3A8A 100%)",
        }}
        aria-hidden
      />
      <div className="relative grid grid-cols-2 gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-md sm:gap-4 sm:p-6">
        <StatTile
          label={stats.totalLeads[lang]}
          value={overviewStats.total}
          accent="text-cyan-200"
        />
        <StatTile
          label={stats.newLeads[lang]}
          value={overviewStats.baru}
          accent="text-emerald-200"
        />
        <StatTile
          label={leadDashboardCopy.report.stats.followUp[lang]}
          value={overviewStats.followUp}
          accent="text-amber-200"
        />
        <StatTile
          label={stats.deals[lang]}
          value={overviewStats.deal}
          accent="text-blue-200"
        />
        <div className="col-span-2 rounded-lg border border-white/10 bg-white/5 p-4">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-cyan-200">
            {stats.pipeline[lang]}
          </p>
          <p className="mt-1 text-xl font-bold text-white sm:text-2xl">
            Rp {overviewStats.estimatedPipeline} jt
          </p>
          <p className="text-[10px] text-blue-200/70">
            {stats.pipelineFootnote[lang]}
          </p>
        </div>
      </div>
    </div>
  );
}

function StatTile({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-3 sm:p-4">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-blue-200/80">
        {label}
      </p>
      <p className={`mt-1 text-2xl font-bold sm:text-3xl ${accent}`}>{value}</p>
    </div>
  );
}