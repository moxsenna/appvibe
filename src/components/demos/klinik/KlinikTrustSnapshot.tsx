import { Calendar, MessageCircle, ShieldCheck, Sparkles, UserRound } from "lucide-react";
import { trustSignals, klinikCopy } from "@/data/demos/klinik";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { useLang } from "@/i18n/use-lang";
import { pick } from "@/i18n/localized";

const iconMap = [UserRound, Calendar, Sparkles, MessageCircle, ShieldCheck];

export function KlinikTrustSnapshot() {
  const { lang } = useLang();
  const section = klinikCopy.trust;

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
            {pick(section.eyebrow, lang)}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
            {pick(section.title, lang)}
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {trustSignals.map((signal, idx) => {
            const Icon = iconMap[idx] ?? Sparkles;
            return (
              <Card key={pick(signal.title, lang)} hover className="flex flex-col">
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="text-sm font-semibold text-brand-navy">
                  {pick(signal.title, lang)}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-brand-muted">
                  {pick(signal.description, lang)}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}