import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CaseStudyLayout } from "@/components/portfolio/CaseStudyLayout";
import { CaseStudyHero } from "@/components/portfolio/CaseStudyHero";
import { CaseStudyProblemSolution } from "@/components/portfolio/CaseStudyProblemSolution";
import { FeatureGrid } from "@/components/portfolio/FeatureGrid";
import { UserFlow } from "@/components/portfolio/UserFlow";
import { ScreensPreview } from "@/components/portfolio/ScreensPreview";
import { BusinessValueSection } from "@/components/portfolio/BusinessValueSection";
import { CaseStudyCTA } from "@/components/portfolio/CaseStudyCTA";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { getPortfolioBySlug } from "@/lib/portfolio";
import { applyPageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";

export function PortfolioDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const item = slug ? getPortfolioBySlug(slug) : undefined;
  const { lang } = useLang();

  useEffect(() => {
    if (item) {
      // Portfolio content is still Indonesian-only in Phase 3; meta mirrors that
      // for now. Phase 3 will populate proper EN strings from a parallel data file.
      applyPageMeta(
        {
          id: { title: item.title.id, description: item.summary.id },
          en: { title: item.title.en, description: item.summary.en },
          paths: {
            id: routes.portfolioDetail("id", item.slug),
            en: routes.portfolioDetail("en", item.slug),
          },
        },
        lang,
      );
      trackEvent("portfolio_view", { slug: item.slug, type: "case_study_page" });
    }
  }, [item, lang]);

  if (!item) {
    return <NotFoundPage />;
  }

  return (
    <CaseStudyLayout>
      <CaseStudyHero item={item} />
      <CaseStudyProblemSolution item={item} />
      <FeatureGrid item={item} />
      <UserFlow item={item} />
      <ScreensPreview item={item} />
      <BusinessValueSection item={item} />
      <CaseStudyCTA item={item} />
    </CaseStudyLayout>
  );
}
