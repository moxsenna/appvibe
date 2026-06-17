import { Sparkles } from "lucide-react";
import { whyUs } from "@/data/demos/properti/whyUs";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { useLang } from "@/i18n/use-lang";
import type { Lang } from "@/i18n/types";

const sectionCopy: Record<Lang, { eyebrow: string; title: string }> = {
  id: {
    eyebrow: "Kenapa listing GrahaNusa berbeda",
    title: "Listing yang informatif, bukan sekadar katalog",
  },
  en: {
    eyebrow: "Why GrahaNusa listings stand out",
    title: "Informative listings, not just a catalog",
  },
};

export function PropertiWhyUs() {
  const { lang } = useLang();
  const copy = sectionCopy[lang];

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
            {copy.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">{copy.title}</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {whyUs.map((item) => (
            <Card key={item.title.id} hover className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-sm">
                <Sparkles className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <h3 className="text-base font-semibold text-brand-navy">{item.title[lang]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {item.description[lang]}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}