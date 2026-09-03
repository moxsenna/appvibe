import { ArrowRight, Sparkles } from "lucide-react";
import { useViewTransitionState } from "react-router-dom";
import type { DemoItem } from "@/types/demo";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";
import { useDict } from "@/i18n/use-dict";
import { pick } from "@/i18n/localized";

type DemoCardProps = {
  item: DemoItem;
};

const STATUS_VARIANT: Record<
  DemoItem["status"],
  "success" | "warning" | "gray" | "violet"
> = {
  live: "success",
  template: "violet",
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
        className="relative overflow-hidden"
        style={{
          backgroundColor: item.brandColor,
          ...(vtCoverName ? { viewTransitionName: vtCoverName } : null),
        }}
        aria-hidden
      >
        <div className="flex items-end justify-between gap-4 px-5 pb-5 pt-10 sm:px-6 sm:pt-12">
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-white/70">
              {pick(item.categoryLabel, lang)}
            </p>
            <p className="mt-1 font-display text-2xl font-normal tracking-tight text-white">
              {brandName}
            </p>
          </div>
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] bg-white/15 font-mono text-sm text-white">
            {brandName.slice(0, 2).toUpperCase()}
          </div>
        </div>
        <div className="absolute right-3 top-3">
          <Badge
            variant={STATUS_VARIANT[item.status]}
            className="border border-white/25 bg-white/95"
          >
            {statusLabel}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-av-signal">
          {pick(item.niche, lang)}
        </p>
        <h3
          className="mt-1.5 text-lg font-semibold tracking-tight text-av-ink"
          style={vtTitleName ? { viewTransitionName: vtTitleName } : undefined}
        >
          {pick(item.title, lang)}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-av-secondary">
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
          <p className="text-xs text-av-muted">{pick(item.tagline, lang)}</p>
        </div>
      </div>
    </Card>
  );
}