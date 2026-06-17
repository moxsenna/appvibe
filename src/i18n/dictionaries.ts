import { commonId } from "./locales/id/common";
import { commonEn } from "./locales/en/common";
import { pagesId } from "./locales/id/pages";
import { pagesEn } from "./locales/en/pages";
import type { Lang } from "./types";

/**
 * Aggregated dictionary per locale. Both locales share the same shape — TypeScript
 * enforces this because `commonEn` is typed as `typeof commonId` and `pagesEn` as
 * `typeof pagesId`. Adding/removing keys in ID without updating EN fails the build.
 */
export const dictionaries = {
  id: {
    common: commonId,
    pages: pagesId,
  },
  en: {
    common: commonEn,
    pages: pagesEn,
  },
} as const;

export type Dictionary = (typeof dictionaries)[Lang];
