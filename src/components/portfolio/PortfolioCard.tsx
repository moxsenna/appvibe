import { FileText, MessageCircle, Sparkles } from "lucide-react";
import { useViewTransitionState } from "react-router-dom";
import type { PortfolioItem } from "@/types/portfolio";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";
import { getPortfolioMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { useLang } from "@/i18n/use-lang";

type PortfolioCardProps = {
  item: PortfolioItem;
  compact?: boolean;
  featured?: boolean;
  variant?: "default" | "showcase";
};

const previewAccents: Record<string, string> = {
  "company-profile": "from-blue-700/60 via-blue-600/30 to-slate-950",
  "webinar-landing": "from-violet-700/60 via-violet-600/30 to-slate-950",
  klinik: "from-cyan-700/60 via-cyan-600/30 to-slate-950",
  properti: "from-indigo-700/60 via-indigo-600/30 to-slate-950",
  "lead-dashboard": "from-emerald-700/60 via-emerald-600/30 to-slate-950",
  "natura-skin-clinic": "from-teal-700/60 via-teal-600/30 to-slate-950",
  "nusa-grove-residences": "from-indigo-700/60 via-indigo-600/30 to-slate-950",
  "kelaspintar-ai": "from-violet-700/60 via-violet-600/30 to-slate-950",
  "leadloop-crm": "from-blue-700/60 via-blue-600/30 to-slate-950",
  "banyu-villa": "from-green-700/60 via-green-600/30 to-slate-950",
  "ruangtumbuh-interior": "from-orange-700/60 via-orange-600/30 to-slate-950",
  "lunaria-wedding": "from-pink-700/60 via-pink-600/30 to-slate-950",
  "satria-print": "from-red-700/60 via-red-600/30 to-slate-950",
  "kopi-pagi": "from-amber-700/60 via-amber-600/30 to-slate-950",
  "mitra-legal": "from-blue-800/60 via-blue-700/30 to-slate-950",
};

function SlugPreviewContent({ slug, featured }: { slug: string; featured?: boolean }) {
  const textSize = featured ? "text-[9px]" : "text-[8px]";

  switch (slug) {
    case "company-profile":
      return (
        <>
          <div className="col-span-3 rounded-md border border-blue-400/25 bg-blue-950/50 p-2">
            <div className={`${textSize} font-semibold text-blue-200`}>Hero</div>
            <div className="mt-1 h-2 w-2/3 rounded bg-blue-300/50" />
            <div className="mt-1.5 h-5 rounded bg-blue-500/35" />
          </div>
          <div className="rounded-md border border-white/15 bg-slate-800/80 p-1.5">
            <div className={`${textSize} text-blue-200/80`}>Layanan</div>
            <div className="mt-1 h-4 rounded bg-blue-400/30" />
          </div>
          <div className="rounded-md border border-white/15 bg-slate-800/80 p-1.5">
            <div className={`${textSize} text-blue-200/80`}>Layanan</div>
            <div className="mt-1 h-4 rounded bg-blue-400/25" />
          </div>
          <div className="rounded-md border border-white/15 bg-slate-800/80 p-1.5">
            <div className={`${textSize} text-blue-200/80`}>Layanan</div>
            <div className="mt-1 h-4 rounded bg-blue-400/20" />
          </div>
          <div className="col-span-2 flex gap-1">
            {[1, 2].map((n) => (
              <div key={n} className="flex-1 rounded border border-white/10 bg-slate-800/70 p-1">
                <div className="h-6 rounded bg-blue-500/25" />
                <div className="mt-1 h-1.5 rounded bg-white/20" />
              </div>
            ))}
          </div>
          <div className="flex items-end">
            <div className="w-full rounded-md bg-blue-500/50 py-1.5 text-center text-[7px] font-bold text-white">
              Inquiry
            </div>
          </div>
        </>
      );
    case "webinar-landing":
      return (
        <>
          <div className="col-span-3 rounded-md border border-violet-400/30 bg-violet-950/50 p-2">
            <div className={`${textSize} font-bold text-violet-200`}>Webinar Gratis</div>
            <div className="mt-1 h-2 w-1/2 rounded bg-violet-300/40" />
          </div>
          <div className="col-span-2 space-y-1 rounded-md border border-white/15 bg-slate-800/80 p-1.5">
            <div className={`${textSize} font-medium text-violet-200/90`}>Agenda</div>
            <div className="h-1.5 rounded bg-white/25" />
            <div className="h-1.5 w-4/5 rounded bg-white/20" />
            <div className="h-1.5 w-3/5 rounded bg-white/15" />
          </div>
          <div className="rounded-md border border-white/15 bg-slate-800/80 p-1.5">
            <div className={`${textSize} text-violet-200/80`}>Speaker</div>
            <div className="mx-auto mt-1 h-6 w-6 rounded-full bg-violet-400/40" />
            <div className="mt-1 h-1 rounded bg-white/20" />
          </div>
          <div className="col-span-3 rounded-md border border-violet-400/20 bg-violet-900/40 p-1.5">
            <div className={`${textSize} text-violet-100`}>Daftar Sekarang</div>
            <div className="mt-1 h-2 rounded bg-white/20" />
            <div className="mt-1 h-2 rounded bg-white/15" />
            <div className="mt-1.5 h-4 rounded bg-violet-500/50 text-center text-[7px] leading-4 text-white">
              Submit
            </div>
          </div>
        </>
      );
    case "klinik":
      return (
        <>
          <div className="rounded-md border border-cyan-400/25 bg-cyan-950/40 p-1.5">
            <div className={`${textSize} text-cyan-200`}>Facial</div>
            <div className="mt-1 h-5 rounded bg-cyan-400/30" />
          </div>
          <div className="rounded-md border border-cyan-400/25 bg-cyan-950/40 p-1.5">
            <div className={`${textSize} text-cyan-200`}>Dental</div>
            <div className="mt-1 h-5 rounded bg-cyan-400/25" />
          </div>
          <div className="rounded-md border border-white/15 bg-slate-800/80 p-1.5">
            <div className={`${textSize} text-cyan-200/80`}>Dokter</div>
            <div className="mt-1 flex justify-center gap-0.5">
              <span className="h-4 w-4 rounded-full bg-cyan-400/35" />
              <span className="h-4 w-4 rounded-full bg-cyan-400/25" />
            </div>
          </div>
          <div className="col-span-3 rounded-md border border-cyan-400/20 bg-slate-800/70 p-1.5">
            <div className="flex items-center justify-between">
              <div className={`${textSize} text-cyan-100`}>Booking Sen, 10:00</div>
              <div className="rounded-full bg-cyan-500/45 px-1.5 py-0.5 text-[7px] text-white">
                Book
              </div>
            </div>
          </div>
        </>
      );
    case "properti":
      return (
        <>
          <div className="col-span-2 rounded-md border border-indigo-400/25 bg-indigo-950/40 p-1.5">
            <div className="h-12 rounded bg-indigo-500/35" />
            <div className="mt-1 h-1.5 w-3/4 rounded bg-white/30" />
            <div className="mt-0.5 flex gap-1">
              <span className="rounded bg-indigo-400/30 px-1 text-[6px] text-indigo-100">
                3KT
              </span>
              <span className="rounded bg-white/15 px-1 text-[6px] text-white/70">
                120m²
              </span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="h-7 rounded bg-indigo-500/25" />
            <div className="h-7 rounded bg-indigo-500/20" />
            <div className="h-5 rounded bg-indigo-400/35 text-center text-[6px] leading-5 text-white">
              Hubungi
            </div>
          </div>
          <div className="col-span-3 flex gap-1">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="h-7 flex-1 rounded bg-indigo-400/20" />
            ))}
          </div>
        </>
      );
    case "lead-dashboard":
      return (
        <>
          <div className="col-span-3 grid grid-cols-3 gap-1">
            {[
              { label: "24 Leads", color: "bg-emerald-500/40" },
              { label: "8 Hot", color: "bg-amber-500/35" },
              { label: "5 Closed", color: "bg-blue-500/35" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded border border-white/15 bg-slate-800/80 p-1"
              >
                <div className={`${textSize} text-emerald-200/80`}>{stat.label}</div>
                <div className={`mt-0.5 h-3 rounded ${stat.color}`} />
              </div>
            ))}
          </div>
          <div className="col-span-3 rounded-md border border-emerald-400/20 bg-slate-900/80 p-1.5">
            <div className="flex gap-1 border-b border-white/10 pb-1">
              {["Nama", "Status", "Sumber"].map((h) => (
                <div key={h} className={`flex-1 ${textSize} text-white/50`}>
                  {h}
                </div>
              ))}
            </div>
            {[
              { status: "bg-emerald-500/40", label: "New" },
              { status: "bg-amber-500/40", label: "Hot" },
              { status: "bg-blue-500/35", label: "Done" },
            ].map((row, i) => (
              <div key={i} className="mt-0.5 flex items-center gap-1">
                <div className="h-1.5 flex-1 rounded bg-white/20" />
                <div
                  className={`w-8 rounded px-0.5 text-center text-[6px] text-white ${row.status}`}
                >
                  {row.label}
                </div>
                <div className="h-1.5 w-8 rounded bg-white/10" />
              </div>
            ))}
          </div>
          <div className="col-span-3 flex h-2 gap-0.5 overflow-hidden rounded-full bg-slate-800">
            <div className="w-[40%] bg-emerald-500/50" />
            <div className="w-[35%] bg-amber-500/40" />
            <div className="w-[25%] bg-blue-500/35" />
          </div>
        </>
      );
    default:
      return (
        <>
          <div className="col-span-3 rounded-md border border-white/20 bg-slate-800/60 p-2">
            <div className={`${textSize} font-semibold text-slate-300`}>Overview</div>
            <div className="mt-1 h-3 w-3/4 rounded bg-white/20" />
            <div className="mt-1.5 h-3 w-1/2 rounded bg-white/15" />
            <div className="mt-1.5 h-3 w-5/6 rounded bg-white/10" />
          </div>
          <div className="col-span-2 space-y-1 rounded-md border border-white/15 bg-slate-800/50 p-1.5">
            <div className={`${textSize} font-medium text-slate-300`}>Fitur</div>
            <div className="h-2 rounded bg-white/20" />
            <div className="h-2 rounded bg-white/15" />
            <div className="h-2 rounded bg-white/10" />
          </div>
          <div className="rounded-md border border-white/15 bg-slate-800/50 p-1.5">
            <div className={`${textSize} text-slate-300`}>CTA</div>
            <div className="mt-1 h-8 rounded bg-white/20" />
          </div>
        </>
      );
  }
}

function PortfolioPreview({
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
  const accent = previewAccents[item.slug] ?? "from-blue-700/60 via-blue-600/30 to-slate-950";

  return (
    <div
      className={cn(
        "relative mb-4 flex items-stretch overflow-hidden rounded-xl",
        featured ? "aspect-[16/9] min-h-[220px]" : "aspect-[16/10] min-h-[140px]",
        showcase
          ? "border border-white/20 bg-slate-950 shadow-xl ring-1 ring-white/10"
          : "bg-gradient-to-br from-brand-light to-blue-50",
      )}
      style={vtCoverName ? { viewTransitionName: vtCoverName } : undefined}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br",
          showcase ? accent : "from-brand-blue/5 to-brand-violet/5",
        )}
      />

      <div className="relative flex w-full flex-col p-2.5 sm:p-3">
        <div className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          <span className="ml-1.5 h-1.5 flex-1 max-w-[80px] rounded-full bg-white/20" />
        </div>

        <div className="mt-2 grid flex-1 grid-cols-3 gap-1.5 content-start">
          <SlugPreviewContent slug={item.slug} featured={featured} />
        </div>

        <div className="mt-1.5 flex items-center justify-between">
          <Badge
            variant="violet"
            className={showcase ? "border-white/15 bg-white/15 text-cyan-100" : undefined}
          >
            {item.categoryLabel[lang]}
          </Badge>

        </div>
      </div>
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
  const whatsappUrl = buildWhatsAppUrl(getPortfolioMessage(lang, item.title[lang]));

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
      <PortfolioPreview
        item={item}
        showcase={isShowcase}
        featured={featured}
        vtCoverName={vtCoverName}
      />

      {!isShowcase && (
        <Badge variant="blue" className="mb-3 w-fit">
          {item.niche[lang]}
        </Badge>
      )}

      {isShowcase && (
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-brand-cyan">
          {item.niche[lang]}
        </p>
      )}

      <h3
        className={cn(
          featured ? "text-xl" : "text-lg",
          "font-semibold",
          isShowcase ? "text-white" : "text-brand-navy",
        )}
        style={vtTitleName ? { viewTransitionName: vtTitleName } : undefined}
      >
        {item.title[lang]}
      </h3>
      <p
        className={cn(
          "mt-2 flex-1 text-sm leading-relaxed",
          isShowcase ? "text-slate-300" : "text-brand-muted",
          featured ? "line-clamp-3" : "line-clamp-2",
        )}
      >
        {item.summary[lang]}
      </p>

      {!compact && item.businessValue[lang][0] && (
        <p
          className={cn(
            "mt-3 text-xs font-medium",
            isShowcase ? "text-cyan-300/90" : "text-brand-blue",
          )}
        >
          {item.businessValue[lang][0]}
        </p>
      )}

      <div className="mt-3 flex flex-wrap gap-2">
        {item.tags[lang].slice(0, compact ? 2 : featured ? 4 : 3).map((tag) => (
          <Badge
            key={tag}
            variant="gray"
            className={
              isShowcase
                ? "border border-white/10 bg-white/10 text-slate-200"
                : undefined
            }
          >
            {tag}
          </Badge>
        ))}
      </div>

      <div className={cn("mt-5 flex flex-wrap gap-3", featured && "mt-6")}>
        <Button
          href={caseStudyHref}
          viewTransition
          variant={isShowcase ? "secondary" : "outline"}
          size="sm"
          className={
            isShowcase
              ? "border-white/25 bg-white/15 text-white hover:bg-white/25"
              : undefined
          }
          onClick={() =>
            trackEvent("portfolio_view", { slug: item.slug, type: "card" })
          }
        >
          <FileText className="h-4 w-4" aria-hidden />
          {dict.common.cta.viewCaseStudy}
        </Button>
        {!isShowcase && !compact && (
          <Button
            href={demoHref}
            variant="secondary"
            size="sm"
            onClick={() =>
              trackEvent("demo_open", {
                slug: item.slug,
                location: "portfolio_card",
                deferred: false,
              })
            }
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            {dict.common.cta.openDemo}
          </Button>
        )}
      </div>

      {!compact && !isShowcase && (
        <Button
          href={whatsappUrl}
          variant="ghost"
          size="sm"
          className="mt-2 justify-start px-0 text-xs"
          onClick={() =>
            trackEvent("cta_whatsapp_click", {
              location: "portfolio_card",
              portfolio: item.slug,
            })
          }
        >
          <MessageCircle className="h-3.5 w-3.5" aria-hidden />
          {lang === "id"
            ? "Ingin website seperti ini? Konsultasi"
            : "Want a website like this? Let's talk"}
        </Button>
      )}
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