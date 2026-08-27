import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useViewTransitionState } from "react-router-dom";
import type { PortfolioItem } from "@/types/portfolio";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { useLang } from "@/i18n/use-lang";

type PortfolioCardProps = {
  item: PortfolioItem;
  compact?: boolean;
  featured?: boolean;
  variant?: "default" | "showcase";
};

/**
 * Cover per project: real photo from public/images/portfolio/<slug>.webp
 * with a typographic monogram as graceful fallback.
 */
const covers: Record<string, { bg: string; accent: string; brand: string }> = {
  "company-profile": { bg: "#24344d", accent: "#8fb3dd", brand: "Arunika Konsultan" },
  "webinar-landing": { bg: "#3a2f5b", accent: "#b3a4e3", brand: "SkillPath Studio" },
  klinik: { bg: "#1e4744", accent: "#7fc4bd", brand: "NaturaCare Clinic" },
  properti: { bg: "#2e3950", accent: "#9db0d6", brand: "GrahaNusa Properti" },
  "lead-dashboard": { bg: "#1f4034", accent: "#86c3a8", brand: "LeadFlow CRM" },
  "natura-skin-clinic": { bg: "#55333f", accent: "#dfa3b4", brand: "Natura Skin Clinic" },
  "nusa-grove-residences": { bg: "#3c4a36", accent: "#a8bd93", brand: "Nusa Grove Residences" },
  "kelaspintar-ai": { bg: "#45315e", accent: "#bb9fd9", brand: "KelasPintar AI" },
  "leadloop-crm": { bg: "#27405e", accent: "#92b4dc", brand: "LeadLoop CRM" },
  "banyu-villa": { bg: "#2f5747", accent: "#8fc7ad", brand: "Banyu Boutique Villa" },
  "ruangtumbuh-interior": { bg: "#59452f", accent: "#d3b489", brand: "RuangTumbuh Studio" },
  "lunaria-wedding": { bg: "#5c3a4d", accent: "#dda6bf", brand: "Lunaria Wedding" },
  "satria-print": { bg: "#5d352e", accent: "#dba38f", brand: "Satria Print" },
  "kopi-pagi": { bg: "#5a442b", accent: "#d9bc8a", brand: "Kopi Pagi" },
  "mitra-legal": { bg: "#2b3450", accent: "#9aa8d4", brand: "Mitra Legal" },
};

function initialsOf(brand: string): string {
  return brand
    .split(/\s+/)
    .filter((w) => /[A-Za-z]/.test(w[0] ?? ""))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

function ProjectCover({
  item,
  showcase,
  featured,
  vtCoverName,
}: {
  item: PortfolioItem;
  showcase?: boolean;
  featured?: boolean;
  vtCoverName?: string;
}) {
  const { lang } = useLang();
  // Swap the placeholder file for a real photo anytime — same path.
  const [imgOk, setImgOk] = useState(true);
  const cover =
    covers[item.slug] ?? { bg: "#24344d", accent: "#8fb3dd", brand: item.slug };
  const initials = initialsOf(cover.brand);

  return (
    <div
      className={cn(
        "relative mb-5 flex flex-col justify-between overflow-hidden rounded-xl",
        featured ? "aspect-[16/9] min-h-[220px] p-6 sm:p-7" : "aspect-[16/10] min-h-[150px] p-5",
        showcase ? "ring-1 ring-white/15" : undefined,
      )}
      style={{
        backgroundColor: cover.bg,
        ...(vtCoverName ? { viewTransitionName: vtCoverName } : undefined),
      }}
    >
      {!imgOk && (
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-between p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
              {item.categoryLabel[lang]}
            </p>
            <div>
              <p
                className={cn(
                  "font-serif leading-none text-white/95",
                  featured ? "text-6xl sm:text-7xl" : "text-5xl",
                )}
              >
                {initials}
              </p>
              <div
                className="mt-3 h-0.5 w-10"
                style={{ backgroundColor: cover.accent }}
              />
              <p className="mt-2.5 text-sm font-medium text-white/85">
                {cover.brand}
              </p>
            </div>
          </div>
        </div>
      )}

      {imgOk && (
        <>
          <img
            src={`/images/portfolio/${item.slug}.webp`}
            alt={item.title[lang]}
            loading="lazy"
            onError={() => setImgOk(false)}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/25" />
        </>
      )}

      <p className="relative z-10 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 [text-shadow:0_1px_8px_rgba(0,0,0,.45)]">
        {item.categoryLabel[lang]}
      </p>

      {imgOk && (
        <p className="relative z-10 text-sm font-medium text-white/95 [text-shadow:0_1px_8px_rgba(0,0,0,.55)]">
          {cover.brand}
        </p>
      )}
    </div>
  );
}

export function PortfolioCard({
  item,
  compact = false,
  featured = false,
  variant = "default",
}: PortfolioCardProps) {
  const { lang, dict } = useLang();
  const isShowcase = variant === "showcase";
  const caseStudyHref = routes.portfolioDetail(lang, item.slug);
  const demoHref = routes.demoDetail(lang, item.slug);

  // Only attach view-transition-name when this card's link is the active
  // navigation target — prevents name collisions across multiple grid items.
  const isTransitioningCaseStudy = useViewTransitionState(caseStudyHref);
  const vtCoverName = isTransitioningCaseStudy
    ? `portfolio-cover-${item.slug}`
    : undefined;
  const vtTitleName = isTransitioningCaseStudy
    ? `portfolio-title-${item.slug}`
    : undefined;

  const cardContent = (
    <>
      <ProjectCover
        item={item}
        showcase={isShowcase}
        featured={featured}
        vtCoverName={vtCoverName}
      />

      {!isShowcase && (
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">
          {item.niche[lang]}
        </p>
      )}
      {isShowcase && (
        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-white/60">
          {item.niche[lang]}
        </p>
      )}

      <h3
        className={cn(
          featured ? "text-xl" : "text-lg",
          "font-semibold tracking-tight",
          isShowcase ? "text-white" : "text-brand-navy",
        )}
        style={vtTitleName ? { viewTransitionName: vtTitleName } : undefined}
      >
        {item.title[lang]}
      </h3>
      <p
        className={cn(
          "mt-2 flex-1 text-sm leading-relaxed",
          isShowcase ? "text-white/75" : "text-brand-muted",
          featured ? "line-clamp-3" : "line-clamp-2",
        )}
      >
        {item.summary[lang]}
      </p>

      {!compact && (
        <p
          className={cn(
            "mt-3 text-xs",
            isShowcase ? "text-white/50" : "text-brand-muted/80",
          )}
        >
          {item.tags[lang].slice(0, 3).join(" · ")}
        </p>
      )}

      <div className={cn("mt-5 flex flex-wrap items-center gap-x-4 gap-y-2", featured && "mt-6")}>
        <Button
          href={caseStudyHref}
          viewTransition
          size="sm"
          variant={isShowcase ? "secondary" : "primary"}
          className={
            isShowcase
              ? "border-white/25 bg-white text-brand-navy hover:bg-white/90"
              : undefined
          }
          onClick={() =>
            trackEvent("portfolio_view", { slug: item.slug, type: "card" })
          }
        >
          {dict.common.cta.viewCaseStudy}
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Button>
        <Button
          href={demoHref}
          variant="ghost"
          size="sm"
          className={
            isShowcase
              ? "px-0 text-white/70 hover:text-white"
              : "px-0 text-brand-blue"
          }
          onClick={() =>
            trackEvent("demo_open", {
              slug: item.slug,
              location: isShowcase ? "home_featured_card" : "portfolio_card",
              deferred: false,
            })
          }
        >
          {dict.common.cta.openDemo} →
        </Button>
      </div>
    </>
  );

  if (isShowcase) {
    return (
      <article
        className={cn(
          "showcase-card flex h-full flex-col",
          featured && "p-7 sm:p-8",
        )}
      >
        {cardContent}
      </article>
    );
  }

  return (
    <Card hover className="flex h-full flex-col">
      {cardContent}
    </Card>
  );
}
