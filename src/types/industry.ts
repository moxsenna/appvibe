import type { Localized } from "@/i18n/localized";

export type IndustryItem = {
  id: string;
  name: Localized<string>;
  problem: Localized<string>;
  recommendedSolution: Localized<string>;
  relatedPortfolioSlugs: string[];
  suitableServices: string[];
};
