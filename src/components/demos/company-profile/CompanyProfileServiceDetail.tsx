import { useState } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { services } from "@/data/demos/company-profile/services";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { useLang } from "@/i18n/use-lang";

const copy = {
  id: {
    eyebrow: "Detail Layanan",
    title: "Lebih dalam: apa yang Anda dapatkan dari setiap layanan",
    subtitle:
      "Klik salah satu layanan untuk melihat deskripsi lengkap, deliverable, dan pain point yang dijawab.",
    bestFor: "Cocok untuk siapa",
    deliverables: "Yang Anda dapatkan",
    painLabel: "Pain point yang dijawab",
  },
  en: {
    eyebrow: "Service detail",
    title: "Go deeper: what you get from each service",
    subtitle:
      "Select a service to see the full description, deliverables, and pain points addressed.",
    bestFor: "Best for",
    deliverables: "What you receive",
    painLabel: "Pain points addressed",
  },
} as const;

export function CompanyProfileServiceDetail() {
  const { lang } = useLang();
  const t = copy[lang];
  const [activeSlug, setActiveSlug] = useState(services[0].slug);
  const active = services.find((s) => s.slug === activeSlug) ?? services[0];
  const Icon = active.icon;

  return (
    <section className="section-padding bg-slate-50">
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

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-brand-border bg-white p-2 shadow-sm">
              {services.map((service) => {
                const ServiceIcon = service.icon;
                const isActive = service.slug === activeSlug;
                return (
                  <button
                    key={service.slug}
                    type="button"
                    onClick={() => setActiveSlug(service.slug)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition-colors",
                      isActive
                        ? "bg-cta-gradient text-white shadow-sm"
                        : "text-brand-navy hover:bg-brand-light",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-blue-50 text-brand-blue",
                      )}
                    >
                      <ServiceIcon className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="flex-1">{service.name[lang]}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 transition-transform",
                        isActive
                          ? "rotate-0 text-white"
                          : "-rotate-90 text-brand-muted",
                      )}
                      aria-hidden
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div
            id={`layanan-${active.slug}`}
            className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm sm:p-8 lg:col-span-8"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cta-gradient text-white shadow-sm">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-brand-navy sm:text-2xl">
                  {active.name[lang]}
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-blue">
                  {active.tagline[lang]}
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-brand-muted sm:text-base">
              {active.fullDescription[lang]}
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                  {t.bestFor}
                </p>
                <ul className="mt-3 space-y-2">
                  {active.bestFor[lang].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-brand-muted"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                  {t.deliverables}
                </p>
                <ul className="mt-3 space-y-2">
                  {active.deliverables[lang].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-brand-muted"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-amber-100 bg-amber-50/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">
                {t.painLabel}
              </p>
              <p className="mt-1.5 text-sm text-amber-900">
                {active.painPoint[lang]}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}