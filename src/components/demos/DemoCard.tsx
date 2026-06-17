import { ArrowRight, Sparkles } from "lucide-react";
import { useViewTransitionState } from "react-router-dom";
import type { DemoItem } from "@/types/demo";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { useLang } from "@/i18n/use-lang";
import { useDict } from "@/i18n/use-dict";
import { pick } from "@/i18n/localized";

type DemoCardProps = {
  item: DemoItem;
};

const STATUS_VARIANT: Record<DemoItem["status"], "success" | "warning" | "gray"> =
  {
    live: "success",
    "coming-soon": "warning",
    draft: "gray",
  };

export function DemoCard({ item }: DemoCardProps) {
  const { lang } = useLang();
  const { common } = useDict();
  const demoHref = routes.demoDetail(lang, item.slug);

  const isTransitioning = useViewTransitionState(demoHref);
  const vtCoverName = isTransitioning ? `demo-cover-${item.slug}` : undefined;
  const vtTitleName = isTransitioning ? `demo-title-${item.slug}` : undefined;

  const brandName = pick(item.brandName, lang);
  const statusLabel =
    common.demoStatus?.[item.status] ?? item.status;

  return (
    <Card hover className="flex h-full flex-col overflow-hidden p-0">
      <div
        className="relative h-32 overflow-hidden sm:h-36"
        style={{
          backgroundImage: `linear-gradient(135deg, ${item.brandColor}, ${item.accentColor})`,
          ...(vtCoverName ? { viewTransitionName: vtCoverName } : null),
        }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
        <div className="absolute right-3 top-3">
          <Badge
            variant={STATUS_VARIANT[item.status]}
            className="border border-white/20 bg-white/90 backdrop-blur-sm"
          >
            {statusLabel}
          </Badge>
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/80">
              {pick(item.categoryLabel, lang)}
            </p>
            <p className="mt-0.5 text-sm font-semibold text-white">{brandName}</p>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-xs font-bold text-white backdrop-blur-sm">
            {brandName.slice(0, 2).toUpperCase()}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p
          className={cn(
            "text-xs font-medium uppercase tracking-wide",
            "text-brand-cyan",
          )}
        >
          {pick(item.niche, lang)}
        </p>
        <h3
          className="mt-1.5 text-lg font-semibold text-brand-navy"
          style={vtTitleName ? { viewTransitionName: vtTitleName } : undefined}
        >
          {pick(item.title, lang)}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-brand-muted">
          {pick(item.summary, lang)}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.tags[lang].slice(0, 3).map((tag) => (
            <Badge key={tag} variant="gray">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <Button
            href={demoHref}
            viewTransition
            size="sm"
            onClick={() =>
              trackEvent("demo_open", {
                slug: item.slug,
                location: "demo_card",
                deferred: false,
              })
            }
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            {common.cta.openDemo}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
          <p className="text-xs text-brand-muted">{pick(item.tagline, lang)}</p>
        </div>
      </div>
    </Card>
  );
}