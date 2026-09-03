import { useEffect } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { applyPageMeta, type PageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { buildWhatsAppUrl, getDefaultConsultationMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";

type PlaceholderFeature = {
  title: string;
  description: string;
  icon?: LucideIcon;
};

type PlaceholderPageProps = {
  meta: PageMeta;
  eyebrow: string;
  title: string;
  description: string;
  features: PlaceholderFeature[];
};

export function PlaceholderPage({
  meta,
  eyebrow,
  title,
  description,
  features,
}: PlaceholderPageProps) {
  const { lang, dict } = useLang();

  useEffect(() => {
    applyPageMeta(meta, lang);
  }, [meta, lang]);

  const whatsappUrl = buildWhatsAppUrl(getDefaultConsultationMessage(lang));
  const trackingLabel = meta.paths[lang];

  return (
    <PageShell>
      <PageHero eyebrow={eyebrow} title={title} description={description}>
        <Button
          href={whatsappUrl}
          size="lg"
          onClick={() =>
            trackEvent("cta_whatsapp_click", { location: trackingLabel })
          }
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
          {dict.common.cta.consult}
        </Button>
      </PageHero>

      <section className="border-t border-av-border">
        <Container className="py-14 lg:py-20">
          <SectionHeader
            eyebrow={lang === "id" ? "Segera hadir" : "Coming soon"}
            title={
              lang === "id"
                ? "Halaman ini sedang disiapkan"
                : "This page is in progress"
            }
            description={
              lang === "id"
                ? "Konten final akan mengikuti roadmap implementasi. Sementara itu, Anda tetap bisa konsultasi kebutuhan bisnis Anda."
                : "The final content will follow our implementation roadmap. In the meantime, feel free to discuss your needs with us."
            }
          />

          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div key={feature.title} className="border-t-2 border-av-ink pt-5">
                <p className="font-mono text-xs text-av-muted">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-base font-semibold text-av-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-av-secondary">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t-2 border-av-ink bg-av-surface">
        <Container className="py-14 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-display-md font-normal tracking-tight text-av-ink">
              {lang === "id"
                ? "Punya kebutuhan spesifik untuk bisnis Anda?"
                : "Have a specific need for your business?"}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-av-text">
              {lang === "id"
                ? "Ceritakan kebutuhan Anda — kami bantu rekomendasikan solusi website atau web app yang paling cocok."
                : "Tell us what you need — we'll recommend the website or web app solution that fits best."}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button href={routes.home(lang)} variant="secondary" size="lg">
                {dict.common.cta.backToHome}
              </Button>
              <Button
                href={whatsappUrl}
                size="lg"
                onClick={() =>
                  trackEvent("cta_whatsapp_click", {
                    location: `${trackingLabel}_cta`,
                  })
                }
              >
                {lang === "id" ? "Mulai Konsultasi" : "Start a conversation"}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
