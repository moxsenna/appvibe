import { Quote, AlertTriangle } from "lucide-react";
import { CLINIC_TESTIMONIALS } from "@/data/demos/clinic";
import { klinikCopy } from "@/data/demos/klinik";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { useLang } from "@/i18n/use-lang";
import { pick } from "@/i18n/localized";

export function KlinikTestimonials() {
  const { lang } = useLang();
  const section = klinikCopy.testimonials;

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
          <div className="mt-4 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50/60 p-3 text-xs text-amber-900 sm:text-sm">
            <AlertTriangle
              className="mt-0.5 h-4 w-4 shrink-0 text-amber-700"
              aria-hidden
            />
            <p>
              <span className="font-semibold">{pick(section.alertBold, lang)}</span>{" "}
              {pick(section.alertRest, lang)}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {CLINIC_TESTIMONIALS.map((t) => {
            const scenario = pick(t.scenario, lang);
            return (
              <Card key={scenario} hover className="flex flex-col">
                <Quote className="h-6 w-6 text-teal-600/40" aria-hidden />
                <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-teal-700">
                  {scenario}
                </p>
                <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-brand-dark sm:text-base">
                  &ldquo;{pick(t.quote, lang)}&rdquo;
                </blockquote>
                <p className="mt-3 text-[10px] italic text-brand-muted">
                  {pick(t.label, lang)}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}