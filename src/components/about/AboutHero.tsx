import { MessageCircle } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl, getDefaultConsultationMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";

export function AboutHero() {
  const { lang, dict } = useLang();
  const whatsappUrl = buildWhatsAppUrl(getDefaultConsultationMessage(lang));

  return (
    <PageHero
      eyebrow={lang === "id" ? "Tentang AppVibe" : "About AppVibe"}
      title={
        lang === "id"
          ? "Membangun website yang membantu bisnis berbicara lebih profesional"
          : "We build websites that help businesses present themselves with confidence"
      }
      description={
        lang === "id"
          ? "AppVibe Studio membantu bisnis jasa, UMKM, klinik, properti, dan tim sales kecil memiliki website atau web app yang tidak hanya bagus, tapi benar-benar berguna untuk operasional mereka."
          : "AppVibe Studio helps service businesses, growing teams, clinics, real estate, and small sales teams ship websites and web apps that look great and stay useful for daily operations."
      }
    >
      <div className="flex flex-wrap gap-3">
        <Button
          href={whatsappUrl}
          size="lg"
          onClick={() =>
            trackEvent("cta_whatsapp_click", { location: "about_hero_primary" })
          }
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
          {dict.common.cta.consult}
        </Button>
        <Button
          href="#story"
          variant="secondary"
          size="lg"
          className="border-white/30 bg-white/10 text-white hover:bg-white/20"
        >
          {lang === "id" ? "Pelajari Pendekatan Kami" : "Learn how we work"}
        </Button>
      </div>
    </PageHero>
  );
}
