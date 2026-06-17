import { Check } from "lucide-react";
import { followUpSteps } from "@/data/demos/webinar-landing/followUp";
import { webinarLandingCopy } from "@/data/demos/webinar-landing/copy";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { useLang } from "@/i18n/use-lang";

export function WebinarLandingFollowUpTimeline() {
  const { lang } = useLang();
  const copy = webinarLandingCopy.followUp;

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

        <div className="mx-auto mt-10 max-w-3xl">
          <ol className="space-y-3">
            {followUpSteps.map((step) => (
              <li key={step.number}>
                <Card hover className="flex gap-4 sm:gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-sm font-bold text-white shadow-sm">
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-base font-semibold text-brand-navy">
                        {step.title[lang]}
                      </h3>
                      <span className="text-xs font-medium text-brand-violet">
                        {step.timing[lang]}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                      {step.description[lang]}
                    </p>
                  </div>
                  <Check
                    className="hidden h-5 w-5 shrink-0 text-emerald-500 sm:block"
                    aria-hidden
                  />
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}