import { Download, Sparkles } from "lucide-react";
import { bonuses } from "@/data/demos/webinar-landing/bonuses";
import { webinarLandingCopy } from "@/data/demos/webinar-landing/copy";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { useLang } from "@/i18n/use-lang";

export function WebinarLandingBonuses() {
  const { lang } = useLang();
  const copy = webinarLandingCopy.bonuses;

  return (
    <section className="section-padding bg-white">
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

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {bonuses.map((bonus, idx) => (
            <Card
              key={bonus.title[lang]}
              hover
              className="flex flex-col border-amber-100/60 bg-amber-50/30"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Download className="h-5 w-5" aria-hidden />
                </span>
                <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-amber-800">
                  {copy.bonusLabel[lang]} {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-base font-semibold text-brand-navy">
                {bonus.title[lang]}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                {bonus.description[lang]}
              </p>
              <div className="mt-4 flex items-center justify-between gap-2 border-t border-amber-200/50 pt-3 text-xs">
                <span className="font-medium text-amber-800">
                  {bonus.format[lang]}
                </span>
                {bonus.highlight && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-200/60 px-2 py-0.5 font-semibold text-amber-900">
                    <Sparkles className="h-3 w-3" aria-hidden />{" "}
                    {bonus.highlight[lang]}
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}