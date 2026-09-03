import { processSteps } from "@/data/process";
import { Container } from "@/components/ui/Container";
import { useLang } from "@/i18n/use-lang";
import { useDict } from "@/i18n/use-dict";
import { pick } from "@/i18n/localized";

export function ServicesProcess() {
  const { lang } = useLang();
  const dict = useDict();
  return (
    <section className="border-t border-av-border bg-av-surface">
      <Container className="py-14 lg:py-20">
        <div className="max-w-3xl">
          <p className="av-eyebrow text-av-signal">
            {dict.pages.services.process.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-display-md font-normal tracking-tight text-av-ink">
            {dict.pages.services.process.title}
          </h2>
        </div>
        <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <li key={step.id} className="border-t border-av-border pt-5">
              <p className="font-mono text-xs text-av-muted">
                {String(step.step).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-base font-semibold text-av-ink">
                {pick(step.title, lang)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-av-secondary">
                {pick(step.description, lang)}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
