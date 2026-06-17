import { process } from "@/data/demos/properti/process";
import { Container } from "@/components/ui/Container";
import { useLang } from "@/i18n/use-lang";
import type { Lang } from "@/i18n/types";

const sectionCopy: Record<Lang, { eyebrow: string; title: string }> = {
  id: {
    eyebrow: "Alur Survei",
    title: "5 langkah dari listing sampai survei lokasi",
  },
  en: {
    eyebrow: "Visit flow",
    title: "Five steps from listing to site visit",
  },
};

export function PropertiProcess() {
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
        <ol className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((step) => (
            <li
              key={step.number}
              className="relative rounded-2xl border border-brand-border bg-slate-50 p-4"
            >
              <span className="absolute -top-3 left-4 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 text-xs font-bold text-white shadow-sm">
                {step.number}
              </span>
              <h3 className="mt-2 text-sm font-semibold text-brand-navy">{step.title[lang]}</h3>
              <p className="mt-2 text-xs leading-relaxed text-brand-muted">
                {step.description[lang]}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}