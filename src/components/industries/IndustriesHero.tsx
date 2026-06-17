import { MessageCircle } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl, getDefaultConsultationMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";

export function IndustriesHero() {
  const { lang, dict } = useLang();
  const whatsappUrl = buildWhatsAppUrl(getDefaultConsultationMessage(lang));

  return (
    <PageHero
      eyebrow={dict.pages.industries.hero.eyebrow}
      title={dict.pages.industries.hero.title}
      description={dict.pages.industries.hero.description}
    >
      <div className="flex flex-wrap gap-3">
        <Button
          href={whatsappUrl}
          size="lg"
          onClick={() =>
            trackEvent("cta_whatsapp_click", { location: "industries_hero_primary" })
          }
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
          {dict.common.cta.consult}
        </Button>
        <Button
          href="#industri-list"
          variant="secondary"
          size="lg"
          className="border-white/30 bg-white/10 text-white hover:bg-white/20"
        >
          {lang === "id" ? "Lihat Industri" : "See industries"}
        </Button>
      </div>
    </PageHero>
  );
}
