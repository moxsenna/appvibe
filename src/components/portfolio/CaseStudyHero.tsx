import type { PortfolioItem } from "@/types/portfolio";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { useLang } from "@/i18n/use-lang";
import { pick } from "@/i18n/localized";

type CaseStudyHeroProps = {
  item: PortfolioItem;
};

export function CaseStudyHero({ item }: CaseStudyHeroProps) {
  const { lang } = useLang();

  return (
    <section
      className="relative overflow-hidden bg-hero-gradient text-white section-padding-lg"
      style={{ viewTransitionName: `portfolio-cover-${item.slug}` }}
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-cyan/10 blur-3xl" />
      <Container className="relative">
        <div className="max-w-3xl">
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge variant="cyan" className="bg-white/10 text-white">
              {pick(item.categoryLabel, lang)}
            </Badge>
            <Badge variant="gray" className="bg-white/10 text-white/90">
              {pick(item.niche, lang)}
            </Badge>
          </div>
          <h1
            className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            style={{ viewTransitionName: `portfolio-title-${item.slug}` }}
          >
            {pick(item.title, lang)}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-blue-100 sm:text-lg">
            {pick(item.summary, lang)}
          </p>
        </div>
      </Container>
    </section>
  );
}