import { Check } from "lucide-react";
import { bookingSteps, klinikCopy } from "@/data/demos/klinik";
import { Container } from "@/components/ui/Container";
import { useLang } from "@/i18n/use-lang";
import { pick } from "@/i18n/localized";

export function KlinikBookingSteps() {
  const { lang } = useLang();
  const section = klinikCopy.booking;

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
        </div>
        <ol className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bookingSteps.map((step) => (
            <li
              key={step.step}
              className="relative rounded-2xl border border-brand-border bg-slate-50 p-5"
            >
              <span className="absolute -top-3 left-5 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-xs font-bold text-white shadow-sm">
                {step.step}
              </span>
              <h3 className="mt-2 text-base font-semibold text-brand-navy">
                {pick(step.title, lang)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {pick(step.description, lang)}
              </p>
              <Check
                className="absolute right-3 top-3 h-4 w-4 text-emerald-500/40"
                aria-hidden
              />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}