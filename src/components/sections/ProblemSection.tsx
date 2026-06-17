import {
  Globe,
  MessageSquare,
  Image,
  Users,
  Megaphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useLang } from "@/i18n/use-lang";

const problemIcons: LucideIcon[] = [
  Globe,
  MessageSquare,
  Image,
  Users,
  Megaphone,
];

export function ProblemSection() {
  const { dict } = useLang();
  const copy = dict.pages.home.problemSection;

  return (
    <section className="section-padding bg-white reveal-on-scroll">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <span className="premium-eyebrow">{copy.eyebrow}</span>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-brand-navy sm:text-3xl lg:text-4xl">
              {copy.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-muted">
              {copy.intro}
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-7">
            {copy.items.map((problem, index) => {
              const Icon = problemIcons[index] ?? Globe;
              return (
                <div key={problem.num} className="group bento-card flex gap-5">
                  <div className="flex shrink-0 flex-col items-center gap-2">
                    <span className="text-xs font-bold text-brand-blue/60">
                      {problem.num}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-semantic-danger transition-colors group-hover:bg-red-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy">
                      {problem.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                      {problem.description}
                    </p>
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