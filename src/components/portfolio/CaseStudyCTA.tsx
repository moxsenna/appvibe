import { Link } from "react-router-dom";
import type { PortfolioItem } from "@/types/portfolio";
import { portfolioItems } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";
import { buildWhatsAppUrl, getPortfolioMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";
import { pick } from "@/i18n/localized";

type CaseStudyCTAProps = {
  item: PortfolioItem;
};

export function CaseStudyCTA({ item }: CaseStudyCTAProps) {
  const { lang, dict } = useLang();
  const whatsappUrl = buildWhatsAppUrl(getPortfolioMessage(lang, pick(item.title, lang)));
  const currentIndex = portfolioItems.findIndex((p) => p.slug === item.slug);
  const next =
    currentIndex >= 0
      ? portfolioItems[(currentIndex + 1) % portfolioItems.length]
      : undefined;

  return (
    <section className="border-t-2 border-av-ink bg-av-surface">
      <Container className="py-12 lg:py-16">
        <div className="max-w-3xl">
          <p className="av-eyebrow text-av-signal">
            {lang === "id" ? "Studi kasus" : "Case study"} ·{" "}
            {pick(item.categoryLabel, lang)}
          </p>
          <h2 className="mt-3 max-w-[24ch] font-display text-display-md font-normal tracking-tight text-av-ink">
            {lang === "id"
              ? "Ingin sistem seperti ini untuk bisnis Anda?"
              : "Want a system like this for your business?"}
          </h2>
          <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-av-text">
            {lang === "id"
              ? "Ceritakan kebutuhan bisnis Anda — kami bantu rekomendasikan struktur dan fitur yang paling cocok untuk tahap bisnis Anda saat ini."
              : "Tell us about your business — we'll recommend the structure and features that fit where you stand today."}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Button
              href={whatsappUrl}
              size="lg"
              onClick={() =>
                trackEvent("cta_whatsapp_click", {
                  location: "case_study_cta",
                  portfolio: item.slug,
                })
              }
            >
              {dict.common.cta.consultShort}
            </Button>
            <Link
              to={routes.demoDetail(lang, item.slug)}
              onClick={() =>
                trackEvent("demo_open", {
                  location: "case_study_cta",
                  slug: item.slug,
                  deferred: false,
                })
              }
              className="inline-flex min-h-[44px] items-center border-b border-av-ink pb-0.5 text-[15px] font-medium text-av-ink transition-colors hover:border-av-signal hover:text-av-signal"
            >
              {dict.common.cta.openDemo} <span aria-hidden>↗</span>
            </Link>
          </div>
          <div className="mt-10 flex flex-col gap-2 border-t border-av-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to={routes.portfolio(lang)}
              className="inline-flex min-h-[44px] items-center text-sm font-medium text-av-secondary transition-colors hover:text-av-ink"
            >
              <span aria-hidden>← </span>
              {lang === "id" ? "Kembali ke Karya" : "Back to Work"}
            </Link>
            {next && (
              <Link
                to={routes.portfolioDetail(lang, next.slug)}
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-av-ink transition-colors hover:text-av-signal"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-av-muted">
                  {lang === "id" ? "Berikutnya" : "Next"}
                </span>
                {pick(next.title, lang).slice(0, 42)}…
                <span aria-hidden>→</span>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
