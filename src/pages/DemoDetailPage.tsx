import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { DemoShell } from "@/components/demos/DemoShell";
import { AppVibeDemoBanner } from "@/components/demos/AppVibeDemoBanner";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { getDemoBySlug } from "@/lib/demos";
import { applyPageMeta } from "@/lib/seo";
import { buildWhatsAppUrl, getDemoMessage } from "@/lib/whatsapp";
import { routes } from "@/lib/routes";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { useLang } from "@/i18n/use-lang";
import type { DemoItem } from "@/types/demo";

const STATUS_TONE: Record<DemoItem["status"], string> = {
  live: "bg-green-50 text-semantic-success border-green-100",
  "coming-soon": "bg-amber-50 text-semantic-warning border-amber-100",
  draft: "bg-slate-100 text-brand-muted border-slate-200",
};

function fillDemoCopy(
  template: string,
  vars: { niche?: string; brand?: string },
): string {
  return template
    .replace(/\{\{niche\}\}/g, vars.niche ?? "")
    .replace(/\{\{brand\}\}/g, vars.brand ?? "");
}

export function DemoDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const item = slug ? getDemoBySlug(slug) : undefined;
  const { lang, dict } = useLang();
  const { common } = dict;
  const copy = dict.pages.demoDetail;

  const whatsappUrl = useMemo(
    () => (item ? buildWhatsAppUrl(getDemoMessage(lang, item.title[lang])) : ""),
    [item, lang],
  );

  useEffect(() => {
    if (item) {
      const titleId = `${item.title.id} — Demo AppVibe Studio`;
      const titleEn = `${item.title.en} — AppVibe Studio Demo`;
      applyPageMeta(
        {
          id: { title: titleId, description: item.summary.id },
          en: { title: titleEn, description: item.summary.en },
          paths: {
            id: routes.demoDetail("id", item.slug),
            en: routes.demoDetail("en", item.slug),
          },
        },
        lang,
      );
    }
  }, [item, lang]);

  if (!item) {
    return <NotFoundPage />;
  }

  const statusTone = STATUS_TONE[item.status] ?? STATUS_TONE["coming-soon"];
  const statusLabel =
    common.demoStatusDetail[item.status] ??
    common.demoStatusDetail["coming-soon"];

  const brandName = item.brandName[lang];
  const niche = item.niche[lang];
  const vars = { niche: niche.toLowerCase(), brand: brandName };

  const brand = {
    name: brandName,
    tagline: item.tagline[lang],
    brandColor: item.brandColor,
    accentColor: item.accentColor,
  };

  return (
    <DemoShell brand={brand} whatsappUrl={whatsappUrl}>
      <section
        id="top"
        className="relative overflow-hidden text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, ${item.brandColor}, ${item.accentColor})`,
          viewTransitionName: `demo-cover-${item.slug}`,
        }}
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <Badge className="border border-white/20 bg-white/15 text-white">
                {item.categoryLabel[lang]}
              </Badge>
              <Badge
                className={cn(
                  "border bg-white/95",
                  statusTone.replace("bg-", "border-").split(" ")[0],
                )}
              >
                {statusLabel}
              </Badge>
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/80">
              {brandName}
              {copy.heroSimulationSuffix}
            </p>
            <h1
              className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
              style={{ viewTransitionName: `demo-title-${item.slug}` }}
            >
              {item.title[lang]}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
              {item.summary[lang]}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={whatsappUrl}
                size="lg"
                className="bg-white text-brand-navy hover:bg-blue-50"
                onClick={() =>
                  trackEvent("cta_whatsapp_click", {
                    location: "demo_detail_hero",
                    slug: item.slug,
                  })
                }
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                {item.ctaLabel[lang]}
              </Button>
              <Button
                href={routes.portfolioDetail(lang, item.relatedCaseStudySlug)}
                variant="secondary"
                size="lg"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                <ExternalLink className="h-4 w-4" aria-hidden />
                {copy.viewCaseStudy}
              </Button>
              {item.status === "live" && (
                <Button
                  href={routes.demoDetail(lang, item.slug)}
                  variant="secondary"
                  size="lg"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20"
                >
                  <Sparkles className="h-4 w-4" aria-hidden />
                  {copy.openFullDemo}
                </Button>
              )}
            </div>
          </div>
        </Container>
      </section>

      <AppVibeDemoBanner variant="section" />

      <section className="section-padding bg-white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                {copy.aboutEyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
                {fillDemoCopy(copy.aboutTitle, vars)}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-muted">
                {item.summary[lang]}{" "}
                {fillDemoCopy(copy.aboutBodyAfterSummary, vars)}
              </p>
              {item.status === "live" ? (
                <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50/60 p-4">
                  <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-700">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden />{" "}
                    {copy.liveEyebrow}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-emerald-900">
                    {copy.liveBody}
                  </p>
                  <Button
                    href={routes.demoDetail(lang, item.slug)}
                    size="md"
                    className="mt-4"
                  >
                    <Sparkles className="h-4 w-4" aria-hidden />
                    {copy.openFullDemo}
                  </Button>
                </div>
              ) : (
                <p className="mt-4 text-base leading-relaxed text-brand-muted">
                  {copy.comingSoonBody}
                </p>
              )}
            </div>
            <aside className="rounded-2xl border border-brand-border bg-brand-light p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                {copy.asideNowEyebrow}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-brand-muted">
                <li className="flex items-start gap-2">
                  <Sparkles
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan"
                    aria-hidden
                  />
                  <span>{fillDemoCopy(copy.asideNowVisual, vars)}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan"
                    aria-hidden
                  />
                  <span>{copy.asideNowCaseStudy}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan"
                    aria-hidden
                  />
                  <span>{copy.asideNowCta}</span>
                </li>
              </ul>

              <div className="mt-6 flex flex-col gap-2 border-t border-brand-border pt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                  {copy.asideSoonEyebrow}
                </p>
                <p className="text-sm text-brand-muted">{copy.asideSoonBody}</p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gradient-to-br from-slate-50 via-blue-50/40 to-violet-50/30">
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-card sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
              {copy.finalEyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
              {fillDemoCopy(copy.finalTitle, vars)}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-muted">
              {copy.finalBody}
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button
                href={routes.portfolioDetail(lang, item.relatedCaseStudySlug)}
                size="lg"
              >
                <ExternalLink className="h-4 w-4" aria-hidden />
                {copy.openCaseStudy}
              </Button>
              <Button
                href={whatsappUrl}
                variant="secondary"
                size="lg"
                onClick={() =>
                  trackEvent("cta_whatsapp_click", {
                    location: "demo_detail_final_cta",
                    slug: item.slug,
                  })
                }
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                {copy.consultWhatsapp}
              </Button>
            </div>
            <Link
              to={routes.demo(lang)}
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand-muted transition-colors hover:text-brand-blue"
            >
              <ArrowRight className="h-4 w-4 rotate-180" aria-hidden />
              {copy.backToDemos}
            </Link>
          </div>
        </Container>
      </section>
    </DemoShell>
  );
}