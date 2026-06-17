import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/cn";
import { useLang } from "@/i18n/use-lang";

type AppVibeDemoBannerProps = {
  variant?: "inline" | "section";
  title?: string;
  description?: string;
  className?: string;
  children?: ReactNode;
};

export function AppVibeDemoBanner({
  variant = "inline",
  title,
  description,
  className,
  children,
}: AppVibeDemoBannerProps) {
  const { lang, dict } = useLang();
  const { common } = dict;

  const resolvedTitle = title ?? common.demo.bannerTitle;
  const resolvedDescription = description ?? common.demo.bannerNote;

  if (variant === "section") {
    return (
      <section
        className={cn(
          "section-padding bg-gradient-to-br from-slate-50 via-blue-50/40 to-violet-50/30",
          className,
        )}
      >
        <Container>
          <div className="rounded-2xl border border-brand-border bg-white p-6 shadow-card sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cta-gradient text-white shadow-sm">
                <Sparkles className="h-6 w-6" aria-hidden />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                  {common.demo.bannerEyebrow}
                </p>
                <h2 className="mt-1 text-xl font-bold text-brand-navy sm:text-2xl">
                  {resolvedTitle}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
                  {resolvedDescription}
                </p>
                {children && <div className="mt-5">{children}</div>}
              </div>
              <div className="flex flex-col gap-2 sm:items-end">
                <Button
                  href={routes.portfolio(lang)}
                  variant="outline"
                  size="sm"
                >
                  {common.cta.viewCaseStudy}
                </Button>
                <Link
                  to={routes.demo(lang)}
                  className="text-sm font-medium text-brand-muted transition-colors hover:text-brand-blue"
                >
                  {common.cta.backToAllDemos}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-2xl border border-brand-border bg-gradient-to-br from-blue-50/70 via-white to-violet-50/50 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6",
        className,
      )}
      role="note"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cta-gradient text-white">
        <Sparkles className="h-5 w-5" aria-hidden />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-brand-navy">{resolvedTitle}</p>
        <p className="mt-1 text-xs leading-relaxed text-brand-muted sm:text-sm">
          {resolvedDescription}
        </p>
      </div>
      <Link
        to={routes.demo(lang)}
        className="self-start text-sm font-semibold text-brand-blue transition-colors hover:text-brand-violet sm:self-auto"
      >
        {common.cta.seeAllDemos} →
      </Link>
    </div>
  );
}
