import { MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl, getDefaultConsultationMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";

export function IndustriesCTA() {
  const { lang, dict } = useLang();
  const whatsappUrl = buildWhatsAppUrl(getDefaultConsultationMessage(lang));

  return (
    <section className="section-padding bg-hero-gradient text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {lang === "id"
              ? "Tidak menemukan industri Anda di daftar?"
              : "Don't see your industry in the list?"}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-blue-100 sm:text-lg">
            {lang === "id"
              ? "Itu tidak masalah. Kami biasa menangani niche yang tidak standar — ceritakan bisnis Anda, dan kami bantu rekomendasikan solusi yang paling sesuai."
              : "That's fine. We regularly work with non-standard niches — tell us about your business and we'll recommend the right solution."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              href={whatsappUrl}
              size="lg"
              onClick={() =>
                trackEvent("cta_whatsapp_click", { location: "industries_bottom_cta" })
              }
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              {dict.common.cta.consult}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
