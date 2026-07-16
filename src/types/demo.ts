import type { Localized } from "@/i18n/localized";
import type { PortfolioCategory } from "@/types/portfolio";

export type DemoCategory = Extract<
  PortfolioCategory,
  | "company-profile"
  | "landing-page"
  | "clinic"
  | "property"
  | "dashboard"
  | "education"
  | "saas"
  | "hospitality"
  | "interior"
  | "wedding"
  | "b2b"
  | "fnb"
  | "legal"
>;

export type DemoStatus = "live" | "template" | "coming-soon" | "draft";

/** How the demo is delivered in the app shell. */
export type DemoKind = "interactive" | "template";

export type DemoItem = {
  id: string;
  slug: string;
  title: Localized<string>;
  category: DemoCategory;
  categoryLabel: Localized<string>;
  niche: Localized<string>;
  summary: Localized<string>;
  tagline: Localized<string>;
  brandName: Localized<string>;
  brandColor: string;
  accentColor: string;
  ctaLabel: Localized<string>;
  status: DemoStatus;
  /** interactive = full React demo; template = static HTML landing reference */
  kind: DemoKind;
  tags: Localized<string[]>;
  relatedCaseStudySlug: string;
};

export type DemoFilterId =
  | "all"
  | "company-profile"
  | "landing-page"
  | "clinic"
  | "property"
  | "dashboard"
  | "education"
  | "saas"
  | "hospitality"
  | "interior"
  | "wedding"
  | "b2b"
  | "fnb"
  | "legal";

export type DemoFilterOption = {
  id: DemoFilterId;
  category: DemoCategory | "all";
};