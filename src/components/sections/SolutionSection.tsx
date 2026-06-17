import {
  Globe,
  Layout,
  Workflow,
  Layers,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useLang } from "@/i18n/use-lang";

const pillarMeta: {
  icon: LucideIcon;
  accent: string;
}[] = [
  { icon: Globe, accent: "from-blue-500 to-blue-600" },
  { icon: Layout, accent: "from-violet-500 to-violet-600" },
  { icon: Workflow, accent: "from-cyan-500 to-cyan-600" },
  { icon: Layers, accent: "from-indigo-500 to-indigo-600" },
];

export function SolutionSection() {
  const { dict } = useLang();
  const copy = dict.pages.home.solutionSection;

  return (
    <section className="section-padding bg-gradient-to-b from-brand-light to-white reveal-on-scroll">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="premium-eyebrow">{copy.eyebrow}</span>
          <h2 className="mt-4 text-2xl font-bold text-brand-navy sm:text-3xl lg:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            {copy.intro}
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-1/2 top-1/2 hidden h-px w-3/4 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {copy.pillars.map((pillar, index) => {
              const meta = pillarMeta[index] ?? pillarMeta[0];
              return (
                <div key={pillar.title} className="relative">
                  <div className="bento-card flex h-full flex-col">
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${meta.accent} text-white shadow-sm`}
                    >
                      <meta.icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-navy">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                      {pillar.description}
                    </p>
                    {index < copy.pillars.length - 1 && (
                      <ArrowRight
                        className="mt-4 hidden h-4 w-4 text-brand-blue/40 lg:block"
                        aria-hidden
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}