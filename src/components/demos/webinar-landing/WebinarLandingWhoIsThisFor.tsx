import { User } from "lucide-react";
import { whoIsThisFor } from "@/data/demos/webinar-landing/whoIsThisFor";
import { webinarLandingCopy } from "@/data/demos/webinar-landing/copy";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { useLang } from "@/i18n/use-lang";

export function WebinarLandingWhoIsThisFor() {
  const { lang } = useLang();
  const copy = webinarLandingCopy.whoIsThisFor;

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
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {whoIsThisFor.map((persona, idx) => (
            <Card key={persona.title[lang]} hover className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 text-white">
                <User className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-violet">
                  {copy.personaLabel[lang]} {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1.5 text-base font-semibold text-brand-navy">
                  {persona.title[lang]}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {persona.description[lang]}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}