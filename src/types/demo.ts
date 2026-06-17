import type { Localized } from "@/i18n/localized";
import type { PortfolioCategory } from "@/types/portfolio";

export type DemoCategory = Extract<
  PortfolioCategory,
  "company-profile" | "landing-page" | "clinic" | "property" | "dashboard"
>;

export type DemoStatus = "live" | "coming-soon" | "draft";

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
  tags: Localized<string[]>;
  relatedCaseStudySlug: string;
};

export type DemoFilterId =
  | "all"
  | "company-profile"
  | "landing-page"
  | "clinic"
  | "property"
  | "dashboard";

export type DemoFilterOption = {
  id: DemoFilterId;
  category: DemoCategory | "all";
};