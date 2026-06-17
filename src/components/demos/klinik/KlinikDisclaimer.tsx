import { AlertTriangle, ShieldCheck } from "lucide-react";
import { klinik, klinikCopy } from "@/data/demos/klinik";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { useLang } from "@/i18n/use-lang";
import { pick } from "@/i18n/localized";

export function KlinikDisclaimer() {
  const { lang } = useLang();
  const section = klinikCopy.disclaimer;

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Card
            padding="lg"
            className="border-2 border-teal-200 bg-gradient-to-br from-teal-50/40 to-cyan-50/30"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                <ShieldCheck className="h-6 w-6" aria-hidden />
              </span>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
                  {pick(section.eyebrow, lang)}
                </p>
                <h2 className="mt-1.5 text-xl font-bold text-brand-navy sm:text-2xl">
                  {pick(section.title, lang)}
                </h2>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-amber-700">
                      <AlertTriangle className="h-3.5 w-3.5" aria-hidden />{" "}
                      {pick(section.emergencyTitle, lang)}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-dark">
                      {pick(section.emergencyBody, lang)}
                    </p>
                  </div>
                  <div>
                    <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-teal-700">
                      <ShieldCheck className="h-3.5 w-3.5" aria-hidden />{" "}
                      {pick(section.consultTitle, lang)}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-dark">
                      {pick(section.consultBody, lang)}
                    </p>
                  </div>
                  <div>
                    <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-brand-blue">
                      {pick(section.outcomesTitle, lang)}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-dark">
                      {pick(section.outcomesBody, lang)}
                    </p>
                  </div>
                  <div>
                    <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-violet-700">
                      {pick(section.simTitle, lang)}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-dark">
                      {pick(klinik.demoDisclaimer, lang)} {pick(section.simSuffix, lang)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}