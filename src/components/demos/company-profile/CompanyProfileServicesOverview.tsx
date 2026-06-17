import { services } from "@/data/demos/company-profile/services";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { useLang } from "@/i18n/use-lang";

const copy = {
  id: {
    eyebrow: "Layanan",
    title: "Enam layanan untuk bisnis jasa yang ingin lebih terstruktur",
    subtitle:
      "Pilih salah satu atau kombinasikan beberapa — semua layanan dirancang untuk saling melengkapi dan bisa dijalankan bertahap.",
    learnMore: "Pelajari detail →",
  },
  en: {
    eyebrow: "Services",
    title: "Six services for service businesses ready to get structured",
    subtitle:
      "Choose one or combine several — every service is designed to complement the others and roll out in phases.",
    learnMore: "View details →",
  },
} as const;

export function CompanyProfileServicesOverview() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section id="layanan" className="section-padding bg-white">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            {t.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
            {t.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.slug} hover className="group flex flex-col">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cta-gradient text-white shadow-sm transition-transform group-hover:scale-105">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-brand-navy">
                  {service.name[lang]}
                </h3>
                <p className="mt-1 text-xs font-medium text-brand-blue">
                  {service.tagline[lang]}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
                  {service.shortDescription[lang]}
                </p>
                <a
                  href={`#layanan-${service.slug}`}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-brand-blue transition-colors hover:text-brand-violet"
                >
                  {t.learnMore}
                </a>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}