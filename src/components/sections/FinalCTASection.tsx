import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";
import { buildWhatsAppUrl, getDefaultConsultationMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";

export function FinalCTASection() {
  const { lang, dict } = useLang();
  const whatsappUrl = buildWhatsAppUrl(getDefaultConsultationMessage(lang));
  const copy = dict.pages.home.finalCta;

  return (
    <section className="section-padding bg-brand-light">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border-2 border-cyan-500/30 bg-hero-mesh p-8 shadow-glow ring-1 ring-white/10 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-cyan/20 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-violet/25 blur-[80px]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-[2.25rem] lg:leading-tight">
              {copy.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg">
              {copy.subtitle}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
              {copy.proofPoints.map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-100"
                >
                  <Sparkles className="h-3 w-3 text-brand-cyan" aria-hidden />
                  {point}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
              <Button
                href={whatsappUrl}
                size="lg"
                className="shadow-glow ring-2 ring-white/15"
                onClick={() =>
                  trackEvent("cta_whatsapp_click", { location: "final_cta_primary" })
                }
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                {dict.common.cta.consult}
              </Button>
              <Button
                href={routes.portfolio(lang)}
                variant="secondary"
                size="lg"
                className="border-white/35 bg-white/10 text-white hover:bg-white/20"
                onClick={() =>
                  trackEvent("portfolio_view", { location: "final_cta_secondary" })
                }
              >
                {dict.common.cta.viewPortfolio}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}