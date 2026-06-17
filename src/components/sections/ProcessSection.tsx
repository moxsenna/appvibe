import { processSteps } from "@/data/process";
import { Container } from "@/components/ui/Container";
import { useLang } from "@/i18n/use-lang";
import { useDict } from "@/i18n/use-dict";
import type { Localized } from "@/i18n/localized";

const stepOutcomes: Record<string, Localized<string>> = {
  discovery: {
    id: "Brief bisnis & tujuan jelas",
    en: "Business brief & goals locked in",
  },
  struktur: {
    id: "Kerangka halaman siap",
    en: "Page framework ready",
  },
  visual: {
    id: "Gaya visual sesuai brand",
    en: "Visual style aligned with brand",
  },
  build: {
    id: "Prototype responsif siap ditinjau",
    en: "Responsive prototype ready for review",
  },
  review: {
    id: "Copy & layout dirapikan",
    en: "Copy & layout polished",
  },
  launch: {
    id: "Siap dipublish & dibagikan",
    en: "Ready to publish & share",
  },
};

export function ProcessSection() {
  const { lang } = useLang();
  const dict = useDict();
  return (
    <section className="section-padding bg-gradient-to-b from-brand-light to-white reveal-on-scroll">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="premium-eyebrow">
            {dict.pages.home.process.eyebrow}
          </span>
          <h2 className="mt-4 text-2xl font-bold text-brand-navy sm:text-3xl lg:text-4xl">
            {dict.pages.home.process.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            {dict.pages.home.process.subtitle}
          </p>
        </div>

        <ol className="mt-12 hidden lg:grid lg:grid-cols-6 lg:gap-3">
          {processSteps.map((step, index) => (
            <li key={step.id} className="relative flex flex-col">
              {index < processSteps.length - 1 && (
                <div
                  className="absolute left-[calc(50%+1.25rem)] top-5 h-px w-[calc(100%-2.5rem)] bg-gradient-to-r from-brand-blue/40 to-brand-violet/20"
                  aria-hidden
                />
              )}
              <div className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-cta-gradient text-sm font-bold text-white shadow-glow ring-4 ring-white">
                {step.step}
              </div>
              <div className="mt-4 flex flex-1 flex-col rounded-2xl border border-brand-border bg-white p-4 shadow-card transition-shadow hover:shadow-card-hover">
                <h3 className="text-sm font-semibold text-brand-navy">
                  {step.title[lang]}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-brand-muted">
                  {step.description[lang]}
                </p>
                <p className="mt-3 rounded-lg bg-blue-50 px-2 py-1 text-[10px] font-semibold text-brand-blue">
                  → {stepOutcomes[step.id][lang]}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <ol className="mt-10 space-y-3 lg:hidden">
          {processSteps.map((step) => (
            <li
              key={step.id}
              className="flex gap-4 rounded-2xl border border-brand-border bg-white p-4 shadow-card"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cta-gradient text-xs font-bold text-white">
                {step.step}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-brand-navy">
                  {step.title[lang]}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-muted">
                  {step.description[lang]}
                </p>
                <p className="mt-2 text-xs font-medium text-brand-blue">
                  {stepOutcomes[step.id][lang]}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
