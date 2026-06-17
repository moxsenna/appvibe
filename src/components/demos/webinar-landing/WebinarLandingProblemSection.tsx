import { AlertCircle } from "lucide-react";
import { problems } from "@/data/demos/webinar-landing/problems";
import { webinarLandingCopy } from "@/data/demos/webinar-landing/copy";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { useLang } from "@/i18n/use-lang";

export function WebinarLandingProblemSection() {
  const { lang } = useLang();
  const copy = webinarLandingCopy.problems;

  return (
    <section
      className="section-padding"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #FFFFFF 0%, #F5F3FF 100%)",
      }}
    >
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

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.slice(0, 3).map((p, idx) => (
            <Card
              key={p.title[lang]}
              hover
              className="border-violet-100/60 bg-violet-50/30"
            >
              <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-violet-100 text-brand-violet">
                <AlertCircle className="h-4 w-4" aria-hidden />
              </span>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-violet">
                {copy.doubtLabel[lang]} {String(idx + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-base font-semibold text-brand-navy">
                {p.title[lang]}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {p.description[lang]}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {problems.slice(3).map((p, idx) => (
            <Card
              key={p.title[lang]}
              hover
              className="border-violet-100/60 bg-violet-50/30"
            >
              <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-violet-100 text-brand-violet">
                <AlertCircle className="h-4 w-4" aria-hidden />
              </span>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-violet">
                {copy.doubtLabel[lang]} {String(idx + 4).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-base font-semibold text-brand-navy">
                {p.title[lang]}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {p.description[lang]}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}