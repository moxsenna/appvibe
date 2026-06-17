import {
  Layout,
  Globe,
  LayoutDashboard,
  Zap,
  ArrowRight,
  Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl, getDefaultConsultationMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";
import { useDict } from "@/i18n/use-dict";

const serviceIcons: Record<string, LucideIcon> = {
  "landing-page": Layout,
  "company-profile": Globe,
  dashboard: LayoutDashboard,
  automation: Zap,
};

const serviceAccents: Record<string, string> = {
  "landing-page": "from-violet-500 to-violet-600",
  "company-profile": "from-blue-500 to-blue-600",
  dashboard: "from-cyan-500 to-cyan-600",
  automation: "from-indigo-500 to-indigo-600",
};

export function ServicesSection() {
  const { lang } = useLang();
  const dict = useDict();
  const whatsappUrl = buildWhatsAppUrl(getDefaultConsultationMessage(lang));

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="premium-eyebrow">
            {dict.pages.home.servicesSection.eyebrow}
          </span>
          <h2 className="mt-4 text-2xl font-bold text-brand-navy sm:text-3xl lg:text-4xl">
            {dict.pages.home.servicesSection.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            {dict.pages.home.servicesSection.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = serviceIcons[service.id] ?? Globe;
            const accent = serviceAccents[service.id] ?? "from-blue-500 to-blue-600";

            return (
              <article
                key={service.id}
                className="bento-card group flex flex-col p-5 sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-sm transition-transform group-hover:scale-105`}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-brand-navy">
                      {service.title[lang]}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">
                      {service.shortDescription[lang]}
                    </p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 border-t border-brand-border/60 pt-4">
                  {service.features[lang].slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-brand-muted"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue"
                        aria-hidden
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5">
                  <Button
                    href={whatsappUrl}
                    variant="outline"
                    size="sm"
                    className="group/btn"
                    onClick={() =>
                      trackEvent("service_card_click", { service: service.id })
                    }
                  >
                    {service.ctaLabel[lang]}
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5"
                      aria-hidden
                    />
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}