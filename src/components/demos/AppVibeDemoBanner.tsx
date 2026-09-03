import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
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

/**
 * Slim credit strip shown on demo pages. Frames the page as AppVibe work —
 * like an agency credit on a live client website, not a disclaimer card.
 */
export function AppVibeDemoBanner({
  variant = "inline",
  className,
}: AppVibeDemoBannerProps) {
  const { lang } = useLang();

  const credit =
    lang === "id"
      ? {
          label: "Desain & pengembangan oleh",
          caseStudy: "Lihat studi kasus",
          allDemos: "Semua demo",
        }
      : {
          label: "Design & development by",
          caseStudy: "View case study",
          allDemos: "All demos",
        };

  const creditLine = (
    <p className="text-sm text-av-secondary">
      {credit.label}{" "}
      <span className="font-semibold text-av-ink">AppVibe Studio</span>
    </p>
  );

  const links = (
    <div className="flex items-center gap-5 text-sm font-medium">
      <Link
        to={routes.portfolio(lang)}
        className="inline-flex min-h-[44px] items-center text-av-ink transition-colors hover:text-av-signal"
      >
        {credit.caseStudy}
      </Link>
      <Link
        to={routes.demo(lang)}
        className="inline-flex min-h-[44px] items-center text-av-secondary transition-colors hover:text-av-ink"
      >
        {credit.allDemos}
      </Link>
    </div>
  );

  if (variant === "section") {
    return (
      <section
        className={cn("border-y border-av-border bg-av-canvas", className)}
      >
        <Container>
          <div className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
            {creditLine}
            {links}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <div
      role="note"
      className={cn(
        "flex flex-col gap-3 rounded border border-av-border bg-av-canvas px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
    >
      {creditLine}
      {links}
    </div>
  );
}
