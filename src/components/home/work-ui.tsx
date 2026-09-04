import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";
import { pick, type Localized } from "@/i18n/localized";
import type { Lang } from "@/i18n/types";
import { projectStatusLabel } from "@/data/home";

export function ProjectVisual({
  src,
  alt,
  aspect = "aspect-[16/10]",
  eager = false,
  width = 1600,
  height = 1000,
  className,
}: {
  src: string;
  alt: string;
  aspect?: string;
  eager?: boolean;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "zoom-hover overflow-hidden rounded-[4px] border border-av-border bg-av-surface",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={cn("h-full w-full object-cover object-top", aspect)}
      />
    </div>
  );
}

export function ProjectStatus({
  slug,
  lang,
  dark = false,
}: {
  slug: string;
  lang: Lang;
  dark?: boolean;
}) {
  const label: Localized<string> | undefined = projectStatusLabel[slug];
  return (
    <p
      className={cn(
        "font-mono text-[11px] font-medium uppercase tracking-[0.14em]",
        dark ? "text-av-dark-muted" : "text-av-muted",
      )}
    >
      {label ? pick(label, lang) : null}
      <span className={dark ? "text-av-signal-on-dark" : "text-av-signal"}>
        {"  ·  Live Demo"}
      </span>
    </p>
  );
}

export function WorkLinks({
  caseStudyPath,
  demoPath,
  caseLabel,
  demoLabel,
  dark = false,
}: {
  caseStudyPath: string;
  demoPath: string;
  caseLabel: string;
  demoLabel: string;
  dark?: boolean;
}) {
  const linkCls = dark
    ? "text-av-dark-body hover:text-white"
    : "text-av-ink hover:text-av-signal";
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
      <Link to={caseStudyPath} className={linkCls}>
        {caseLabel} <span aria-hidden>→</span>
      </Link>
      <Link to={demoPath} className={linkCls}>
        {demoLabel} <span aria-hidden>↗</span>
      </Link>
    </div>
  );
}
