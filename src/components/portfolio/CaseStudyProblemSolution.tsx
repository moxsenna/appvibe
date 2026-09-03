import type { PortfolioItem } from "@/types/portfolio";
import { Container } from "@/components/ui/Container";
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
    problemTitle: "Masalah bisnis",
    solutionTitle: "Solusi yang dibangun",
    techNoteLabel: "Pendekatan teknis: ",
    techNoteBody:
      "Dibangun responsif dengan web modern dan siap dikembangkan bertahap sesuai kebutuhan bisnis Anda.",
  },
  en: {
    problemTitle: "Business problem",
    solutionTitle: "What was built",
    techNoteLabel: "Technical approach: ",
    techNoteBody:
      "Built responsive on a modern web stack, ready to grow in stages as your business needs evolve.",
  },
};

type CaseStudyProblemSolutionProps = {
  item: PortfolioItem;
};

export function CaseStudyProblemSolution({ item }: CaseStudyProblemSolutionProps) {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section>
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="border-t-2 border-av-ink pt-5">
            <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-av-muted">
              {t.problemTitle}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-av-text">
              {pick(item.businessProblem, lang)}
            </p>
          </div>
          <div className="border-t-2 border-av-ink pt-5">
            <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-av-muted">
              {t.solutionTitle}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-av-text">
              {pick(item.solution, lang)}
            </p>
          </div>
        </div>
        <p className="mt-10 max-w-[68ch] border-l-2 border-av-border pl-4 text-sm leading-relaxed text-av-secondary">
          <span className="font-medium text-av-ink">{t.techNoteLabel}</span>
          {t.techNoteBody}
        </p>
      </Container>
    </section>
  );
}
