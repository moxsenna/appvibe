import { processSteps } from "@/data/process";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { useLang } from "@/i18n/use-lang";
import { useDict } from "@/i18n/use-dict";

export function AboutApproach() {
  const { lang } = useLang();
  const dict = useDict();
  const approach = dict.pages.about.approach;

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            {approach.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
            {approach.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
            {approach.subtitle}
          </p>
        </div>
        <ol className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <li key={step.id}>
              <Card hover className="flex flex-col">
                <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-cta-gradient text-sm font-bold text-white">
                  {step.step}
                </span>
                <h3 className="text-base font-semibold text-brand-navy">
                  {step.title[lang]}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {step.description[lang]}
                </p>
              </Card>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}