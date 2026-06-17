import { Calendar, MessageCircle } from "lucide-react";
import { CLINIC_EXPERTS } from "@/data/demos/clinic";
import { klinikCopy } from "@/data/demos/klinik";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";
import { pick } from "@/i18n/localized";

export function KlinikExperts() {
  const { lang } = useLang();
  const section = klinikCopy.experts;

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
            {pick(section.eyebrow, lang)}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
            {pick(section.title, lang)}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
            {pick(section.subtitle, lang)}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {CLINIC_EXPERTS.map((expert) => {
            const ctaText = pick(expert.cta, lang);
            const wa = buildWhatsAppUrl(
              pick(section.waTemplate, lang).replace("{cta}", ctaText),
            );
            return (
              <Card key={expert.id} hover className="overflow-hidden p-0">
                <div className={`h-24 bg-gradient-to-br ${expert.gradient}`}>
                  <div className="flex h-full items-end p-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/40 bg-white/15 text-sm font-bold text-white backdrop-blur-sm">
                      {expert.initials}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-semibold text-brand-navy">
                    {pick(expert.name, lang)}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-teal-700">
                    {pick(expert.role, lang)}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <Badge variant="cyan" className="text-[10px]">
                      {pick(expert.focus, lang)}
                    </Badge>
                    <Badge variant="gray" className="text-[10px]">
                      {pick(expert.experience, lang)}
                    </Badge>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                    {pick(expert.bio, lang)}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-brand-muted">
                    <Calendar className="h-3.5 w-3.5" aria-hidden />
                    {pick(section.schedulePrefix, lang)}{" "}
                    <span className="font-semibold text-brand-navy">
                      {pick(expert.schedule, lang)}
                    </span>
                  </div>
                  <div className="mt-5">
                    <Button
                      href={wa}
                      size="sm"
                      onClick={() =>
                        trackEvent("cta_whatsapp_click", {
                          location: "klinik_expert_card",
                          expert: expert.id,
                        })
                      }
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden /> {ctaText}
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}