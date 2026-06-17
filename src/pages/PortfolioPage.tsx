import { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PortfolioFilter } from "@/components/portfolio/PortfolioFilter";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { portfolioItems } from "@/data/portfolio";
import { filterPortfolioItems } from "@/lib/portfolio";
import { buildWhatsAppUrl, getDefaultConsultationMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { usePageMeta } from "@/i18n/use-page-meta";
import { useLang } from "@/i18n/use-lang";
import type { PortfolioCategory } from "@/types/portfolio";

export function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory | "all">(
    "all",
  );
  const [searchQuery, setSearchQuery] = useState("");

  usePageMeta("portfolio", "portfolio");
  const { lang, dict } = useLang();

  const filteredItems = useMemo(
    () => filterPortfolioItems(portfolioItems, activeCategory, searchQuery, lang),
    [activeCategory, searchQuery, lang],
  );

  const whatsappUrl = buildWhatsAppUrl(getDefaultConsultationMessage(lang));

  return (
    <PageShell>
      <PageHero
        eyebrow={dict.pages.portfolio.hero.eyebrow}
        title={dict.pages.portfolio.hero.title}
        description={dict.pages.portfolio.hero.description}
      />

      <section className="section-padding bg-white">
        <Container>
          <PortfolioFilter
            activeCategory={activeCategory}
            searchQuery={searchQuery}
            resultCount={filteredItems.length}
            onCategoryChange={setActiveCategory}
            onSearchChange={setSearchQuery}
          />
          <div className="mt-10">
            <PortfolioGrid items={filteredItems} />
          </div>
        </Container>
      </section>

      <section className="section-padding bg-brand-light">
        <Container>
          <div className="rounded-2xl border border-brand-border bg-white p-8 text-center shadow-card sm:p-10">
            <h2 className="text-xl font-bold text-brand-navy sm:text-2xl">
              {lang === "id"
                ? "Belum tahu demo mana yang cocok untuk bisnis Anda?"
                : "Not sure which demo fits your business?"}
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-brand-muted sm:text-base">
              {lang === "id"
                ? "Ceritakan jenis bisnis dan kebutuhan Anda — kami bantu rekomendasikan solusi yang paling masuk akal untuk tahap bisnis Anda saat ini."
                : "Tell us about your business and what you need — we'll suggest the solution that makes the most sense for where you stand right now."}
            </p>
            <div className="mt-6">
              <Button
                href={whatsappUrl}
                size="lg"
                onClick={() =>
                  trackEvent("cta_whatsapp_click", {
                    location: "portfolio_page_cta",
                  })
                }
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                {dict.common.cta.consult}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
