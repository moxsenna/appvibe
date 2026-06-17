import type { Lang } from "@/i18n/types";

export type BlogPost = {
  slug: string;
  lang: Lang;
  title: string;
  description: string;
  date: string;
  tags: string[];
  html: string;
  ogImage?: string;
  wordCount: number;
  readingTimeMinutes: number;
};

export type BlogListFilters = {
  query: string;
  tag: string | null;
};