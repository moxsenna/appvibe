import { ArrowRight, ExternalLink, MessageCircle } from "lucide-react";
import type { PortfolioItem } from "@/types/portfolio";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";
import { buildWhatsAppUrl, getPortfolioMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";

type CaseStudyCTAProps = {
  item: PortfolioItem;
};

export function CaseStudyCTA({ item }: CaseStudyCTAProps) {
  const { lang, dict } = useLang();
  const whatsappUrl = buildWhatsAppUrl(getPortfolioMessage(lang, item.title[lang]));

  return (
    <section className="section-padding bg-hero-gradient text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {lang === "id"
              ? "Ingin website seperti ini untuk bisnis Anda?"
              : "Want a website like this for your business?"}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-blue-100">
            {lang === "id"
              ? "Ceritakan kebutuhan bisnis Anda — kami bantu rekomendasikan struktur dan fitur yang paling cocok untuk tahap bisnis Anda saat ini."
              : "Tell us about your business — we'll recommend the structure and features that fit where you stand today."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
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
              <MessageCircle className="h-5 w-5" aria-hidden />
              {dict.common.cta.consult}
            </Button>
            <Button
              href={routes.demoDetail(lang, item.slug)}
              variant="secondary"
              size="lg"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20"
              onClick={() =>
                trackEvent("demo_open", {
                  location: "case_study_cta",
                  slug: item.slug,
                  deferred: false,
                })
              }
            >
              <ExternalLink className="h-4 w-4" aria-hidden />
              {dict.common.cta.openDemo}
            </Button>
            <Button
              href={routes.portfolio(lang)}
              variant="ghost"
              size="lg"
              className="text-white hover:bg-white/10"
            >
              <ArrowRight className="h-4 w-4" aria-hidden />
              {lang === "id" ? "Kembali ke Portfolio" : "Back to portfolio"}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
