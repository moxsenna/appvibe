import {
  ClipboardList,
  Layout,
  Monitor,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { useLang } from "@/i18n/use-lang";
import { useDict } from "@/i18n/use-dict";

const iconMap: Record<string, LucideIcon> = {
  "landing-page": Layout,
  "company-profile": Monitor,
  dashboard: ClipboardList,
  automation: Workflow,
};

export function ServicesOverview() {
  const { lang } = useLang();
  const dict = useDict();
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            {dict.pages.services.overview.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
            {dict.pages.services.overview.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
            {dict.pages.services.overview.subtitle}
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = iconMap[service.id] ?? Monitor;
            return (
              <Card key={service.id} hover className="group flex flex-col">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cta-gradient text-white shadow-sm transition-transform group-hover:scale-105">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-brand-navy">
                  {service.title[lang]}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                  {service.shortDescription[lang]}
                </p>
                <a
                  href={`#layanan-${service.id}`}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-brand-blue transition-colors hover:text-brand-violet"
                >
                  {dict.pages.services.overview.learnMore} →
                </a>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
