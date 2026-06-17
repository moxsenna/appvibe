import { MessageCircle, Send } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl, getDefaultConsultationMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";

export function ContactHero() {
  const { lang, dict } = useLang();
  const whatsappUrl = buildWhatsAppUrl(getDefaultConsultationMessage(lang));

  return (
    <PageHero
      eyebrow={dict.pages.contact.hero.eyebrow}
      title={dict.pages.contact.hero.title}
      description={dict.pages.contact.hero.description}
    >
      <div className="flex flex-wrap gap-3">
        <Button
          href={whatsappUrl}
          size="lg"
          onClick={() =>
            trackEvent("cta_whatsapp_click", { location: "contact_hero_primary" })
          }
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
          {lang === "id" ? "Kirim Pesan via WhatsApp" : "Message us on WhatsApp"}
        </Button>
        <Button
          href="#form-kontak"
          variant="secondary"
          size="lg"
          className="border-white/30 bg-white/10 text-white hover:bg-white/20"
        >
          <Send className="h-4 w-4" aria-hidden />
          {lang === "id" ? "Isi Form di Bawah" : "Fill the form below"}
        </Button>
      </div>
    </PageHero>
  );
}
