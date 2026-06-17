import type { Lang } from "@/i18n/types";
import { portfolioItems } from "@/data/portfolio";
import type { PortfolioCategory, PortfolioFilterOption, PortfolioItem } from "@/types/portfolio";

export const portfolioFilters: PortfolioFilterOption[] = [
  { id: "all", label: "Semua", category: "all" },
  { id: "company-profile", label: "Company Profile", category: "company-profile" },
  { id: "landing-page", label: "Landing Page", category: "landing-page" },
  { id: "clinic", label: "Klinik", category: "clinic" },
  { id: "property", label: "Properti", category: "property" },
  { id: "dashboard", label: "Dashboard", category: "dashboard" },
];

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.slug === slug);
}

export function filterPortfolioItems(
  items: PortfolioItem[],
  category: PortfolioCategory | "all",
  searchQuery: string,
  lang: Lang,
): PortfolioItem[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return items.filter((item) => {
    const matchesCategory =
      category === "all" || item.category === category;

    if (!matchesCategory) return false;

    if (!normalizedQuery) return true;
    const searchable = [
      item.title[lang],
      item.niche[lang],
      item.summary[lang],
      ...item.tags[lang],
    ]
      .join(" ")
      .toLowerCase();

    return searchable.includes(normalizedQuery);
  });
}