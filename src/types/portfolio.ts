import type { Localized } from "@/i18n/localized";

export type PortfolioCategory =
  | "company-profile"
  | "landing-page"
  | "dashboard"
  | "clinic"
  | "property"
  | "education"
  | "umkm"
  | "custom-app";

export type PortfolioScreen = {
  title: Localized<string>;
  description: Localized<string>;
  image?: string;
};

export type PortfolioItem = {
  id: string;
  slug: string;
  title: Localized<string>;
  category: PortfolioCategory;
  categoryLabel: Localized<string>;
  niche: Localized<string>;
  summary: Localized<string>;
  businessProblem: Localized<string>;
  solution: Localized<string>;
  businessValue: Localized<string[]>;
  features: Localized<string[]>;
  tags: Localized<string[]>;
  thumbnail: string;
  demoPath: string;
  caseStudyPath: string;
  mockDataHighlights: Localized<string[]>;
  userFlow: Localized<string[]>;
  screens: PortfolioScreen[];
};

export type PortfolioFilterOption = {
  id: string;
  label: string;
  category: PortfolioCategory | "all";
};