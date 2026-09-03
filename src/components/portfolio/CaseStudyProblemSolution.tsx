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
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs text-av-muted">01</p>
            <h2 className="mt-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-av-muted">
              {t.problemTitle}
            </h2>
            <p className="mt-4 max-w-[56ch] font-display text-2xl font-normal leading-snug tracking-tight text-av-ink">
              {pick(item.businessProblem, lang)}
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="font-mono text-xs text-av-muted">02</p>
            <h2 className="mt-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-av-muted">
              {t.solutionTitle}
            </h2>
            <p className="mt-4 max-w-[52ch] border-l-2 border-av-signal pl-4 text-[15px] leading-relaxed text-av-text">
              {pick(item.solution, lang)}
            </p>
            <p className="mt-6 max-w-[52ch] text-sm leading-relaxed text-av-secondary">
              <span className="font-medium text-av-ink">{t.techNoteLabel}</span>
              {t.techNoteBody}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
