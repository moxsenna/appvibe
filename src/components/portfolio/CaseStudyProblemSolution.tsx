import { AlertCircle, Lightbulb } from "lucide-react";
import type { PortfolioItem } from "@/types/portfolio";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { useLang } from "@/i18n/use-lang";
import { pick } from "@/i18n/localized";
import type { Lang } from "@/i18n/types";

const copy: Record<
  Lang,
  {
    problemTitle: string;
    solutionTitle: string;
    techNoteLabel: string;
    techNoteBody: string;
  }
> = {
  id: {
    problemTitle: "Masalah Bisnis",
    solutionTitle: "Solusi Digital",
    techNoteLabel: "Kemampuan teknis: ",
    techNoteBody:
      "Dibangun dengan pendekatan web modern, responsif, dan siap dikembangkan bertahap sesuai kebutuhan bisnis Anda.",
  },
  en: {
    problemTitle: "Business Problem",
    solutionTitle: "Digital Solution",
    techNoteLabel: "Technical approach: ",
    techNoteBody:
      "Built with a modern, responsive web stack and designed to grow incrementally as your business needs evolve.",
  },
};

type CaseStudyProblemSolutionProps = {
  item: PortfolioItem;
};

export function CaseStudyProblemSolution({ item }: CaseStudyProblemSolutionProps) {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card hover padding="lg">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-semantic-danger">
              <AlertCircle className="h-5 w-5" aria-hidden />
            </div>
            <h2 className="text-xl font-bold text-brand-navy">{t.problemTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">
              {pick(item.businessProblem, lang)}
            </p>
          </Card>

          <Card hover padding="lg">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
              <Lightbulb className="h-5 w-5" aria-hidden />
            </div>
            <h2 className="text-xl font-bold text-brand-navy">{t.solutionTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">
              {pick(item.solution, lang)}
            </p>
          </Card>
        </div>

        <Card className="mt-8 bg-brand-light" padding="lg">
          <p className="text-sm leading-relaxed text-brand-muted">
            <span className="font-semibold text-brand-navy">{t.techNoteLabel}</span>
            {t.techNoteBody}
          </p>
        </Card>
      </Container>
    </section>
  );
}