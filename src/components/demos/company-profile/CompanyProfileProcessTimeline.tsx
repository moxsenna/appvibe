import { CheckCircle2 } from "lucide-react";
import { process, type ProcessStep } from "@/data/demos/company-profile/process";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { useLang } from "@/i18n/use-lang";
import type { Lang } from "@/i18n/types";

const copy = {
  id: {
    eyebrow: "Proses Kerja",
    title: "Proses yang jelas dari konsultasi awal sampai serah terima",
    subtitle:
      "Anda tidak perlu menebak-nebak apa yang akan terjadi di setiap tahap. Berikut adalah alur kerja standar kami.",
  },
  en: {
    eyebrow: "How we work",
    title: "A clear path from first consultation to handover",
    subtitle:
      "No guessing what happens at each stage. Here is our standard engagement flow.",
  },
} as const;

export function CompanyProfileProcessTimeline() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section id="proses" className="section-padding bg-white">
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

        <div className="relative mt-12">
          <div
            className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-brand-blue via-brand-violet to-brand-cyan lg:left-1/2 lg:block"
            aria-hidden
          />
          <div className="space-y-6 lg:space-y-0">
            {process.map((step, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={step.number}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-12"
                >
                  <div
                    className={`hidden lg:flex lg:items-start ${
                      isEven ? "lg:order-2 lg:justify-start" : "lg:justify-end"
                    }`}
                  >
                    <Card
                      hover
                      className={`w-full max-w-md ${
                        isEven ? "lg:ml-8" : "lg:mr-8"
                      }`}
                    >
                      <ProcessCardContent step={step} lang={lang} />
                    </Card>
                  </div>

                  <div
                    className={`hidden lg:flex lg:items-center ${
                      isEven ? "lg:order-1 lg:justify-end" : "lg:justify-start"
                    }`}
                  >
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-cta-gradient text-base font-bold text-white shadow-lg ring-4 ring-white">
                      {step.number}
                    </div>
                  </div>

                  <div className="lg:hidden">
                    <Card hover>
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cta-gradient text-sm font-bold text-white">
                          {step.number}
                        </div>
                        <div className="flex-1">
                          <ProcessCardContent step={step} lang={lang} />
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProcessCardContent({
  step,
  lang,
}: {
  step: ProcessStep;
  lang: Lang;
}) {
  return (
    <>
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-brand-navy">
          {step.title[lang]}
        </h3>
        <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-brand-blue">
          {step.duration[lang]}
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-brand-muted">
        {step.description[lang]}
      </p>
      <ul className="mt-4 space-y-2">
        {step.deliverables[lang].map((item) => (
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
    </>
  );
}