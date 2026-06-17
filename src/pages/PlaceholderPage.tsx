import { useEffect } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/FeatureCard";
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

      <section className="section-padding bg-white">
        <Container>
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

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-brand-light">
        <Container>
          <div className="rounded-2xl border border-brand-border bg-white p-8 text-center shadow-card sm:p-10">
            <h2 className="text-xl font-bold text-brand-navy sm:text-2xl">
              {lang === "id"
                ? "Punya kebutuhan spesifik untuk bisnis Anda?"
                : "Have a specific need for your business?"}
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-brand-muted sm:text-base">
              {lang === "id"
                ? "Ceritakan kebutuhan Anda — kami bantu rekomendasikan solusi website atau web app yang paling cocok."
                : "Tell us what you need — we'll recommend the website or web app solution that fits best."}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button href={routes.home(lang)} variant="secondary">
                {dict.common.cta.backToHome}
              </Button>
              <Button
                href={whatsappUrl}
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
