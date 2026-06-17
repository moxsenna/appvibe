import { CLINIC_SERVICES, type ClinicService } from "@/data/demos/clinic";
import { featuredServices } from "@/data/demos/klinik/layananTerlaris";
import { klinikCopy } from "@/data/demos/klinik";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { useLang } from "@/i18n/use-lang";
import { pick } from "@/i18n/localized";
import type { Lang } from "@/i18n/types";

type KlinikServicesProps = {
  onSelect: (service: ClinicService) => void;
};

export function KlinikServices({ onSelect }: KlinikServicesProps) {
  const { lang } = useLang();
  const section = klinikCopy.services;

  return (
    <section id="layanan" className="section-padding bg-slate-50">
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

        {featuredServices.length > 0 && (
          <div className="mt-8">
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-teal-600" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
                {pick(section.featuredLabel, lang)}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {featuredServices.map((s) => (
                <FeaturedServiceCard
                  key={s.id}
                  service={s}
                  lang={lang}
                  badgeLabel={pick(section.featuredBadge, lang)}
                  onClick={() => onSelect(s)}
                />
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-muted">
            {pick(section.allLabel, lang)}
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {CLINIC_SERVICES.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => onSelect(service)}
                className="group flex flex-col rounded-2xl border border-brand-border bg-white p-4 text-left shadow-card transition-shadow hover:shadow-card-hover"
              >
                <span
                  className={`inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest ${service.color}`}
                >
                  {pick(service.duration, lang)}
                </span>
                <h3 className="mt-2.5 text-sm font-semibold text-brand-navy group-hover:text-teal-700">
                  {pick(service.name, lang)}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-brand-muted">
                  {pick(service.description, lang)}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-teal-700 transition-transform group-hover:translate-x-0.5">
                  {pick(section.detailLink, lang)}{" "}
                  <ArrowUpRight className="h-3 w-3" aria-hidden />
                </span>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FeaturedServiceCard({
  service,
  lang,
  badgeLabel,
  onClick,
}: {
  service: ClinicService;
  lang: Lang;
  badgeLabel: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex flex-col rounded-2xl border-2 border-teal-200 bg-white p-5 text-left shadow-card transition-all hover:border-teal-400 hover:shadow-card-hover"
    >
      <Badge className="mb-3 w-fit border border-teal-200 bg-teal-50 text-teal-700">
        {badgeLabel}
      </Badge>
      <h3 className="text-base font-semibold text-brand-navy group-hover:text-teal-700">
        {pick(service.name, lang)}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
        {pick(service.description, lang)}
      </p>
      <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-brand-muted">
        {pick(service.duration, lang)}
      </div>
    </button>
  );
}