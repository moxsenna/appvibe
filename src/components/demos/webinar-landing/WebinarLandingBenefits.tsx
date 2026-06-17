import { Gift } from "lucide-react";
import { benefits } from "@/data/demos/webinar-landing/benefits";
import { webinarLandingCopy } from "@/data/demos/webinar-landing/copy";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { useLang } from "@/i18n/use-lang";

export function WebinarLandingBenefits() {
  const { lang } = useLang();
  const copy = webinarLandingCopy.benefits;

  return (
    <section className="section-padding bg-slate-50">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-violet">
            {copy.eyebrow[lang]}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
            {copy.title[lang]}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
            {copy.subtitle[lang]}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, idx) => (
            <Card key={benefit.title[lang]} hover className="flex flex-col">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 text-white shadow-sm">
                <Gift className="h-5 w-5" aria-hidden />
              </span>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-violet">
                {copy.benefitLabel[lang]} {String(idx + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-base font-semibold text-brand-navy">
                {benefit.title[lang]}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                {benefit.description[lang]}
              </p>
              <div className="mt-4 rounded-lg border border-emerald-100 bg-emerald-50/60 p-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
                  {copy.bringHomeLabel[lang]}
                </p>
                <p className="mt-1 text-sm font-medium text-emerald-900">
                  {benefit.bringHome[lang]}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}