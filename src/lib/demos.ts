import { demoItems } from "@/data/demos";
import type { Lang } from "@/i18n/types";
import type {
  DemoCategory,
  DemoFilterOption,
  DemoItem,
} from "@/types/demo";

export const demos: DemoItem[] = demoItems;

export const demoFilters: DemoFilterOption[] = [
  { id: "all", category: "all" },
  { id: "company-profile", category: "company-profile" },
  { id: "landing-page", category: "landing-page" },
  { id: "clinic", category: "clinic" },
  { id: "property", category: "property" },
  { id: "dashboard", category: "dashboard" },
  { id: "education", category: "education" },
  { id: "saas", category: "saas" },
  { id: "hospitality", category: "hospitality" },
  { id: "interior", category: "interior" },
  { id: "wedding", category: "wedding" },
  { id: "b2b", category: "b2b" },
  { id: "fnb", category: "fnb" },
  { id: "legal", category: "legal" },
];

export function getDemoBySlug(slug: string): DemoItem | undefined {
  return demos.find((item) => item.slug === slug);
}

export function filterDemoItems(
  items: DemoItem[],
  category: DemoCategory | "all",
  searchQuery: string,
  lang: Lang,
): DemoItem[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return items.filter((item) => {
    const matchesCategory = category === "all" || item.category === category;
    if (!matchesCategory) return false;

    if (!normalizedQuery) return true;

    const searchable = [
      item.title[lang],
      item.niche[lang],
      item.summary[lang],
      item.brandName[lang],
      ...item.tags[lang],
    ]
      .join(" ")
      .toLowerCase();

    return searchable.includes(normalizedQuery);
  });
}

export function getDemoAccent(item: DemoItem): {
  from: string;
  to: string;
} {
  return { from: item.brandColor, to: item.accentColor };
}