/**
 * i18n core types — single source of truth for supported locales.
 * Adding a new locale: extend `Lang`, add to `LANGS`, create dict & data files.
 */

export type Lang = "id" | "en";

export const LANGS: Lang[] = ["id", "en"];

export const DEFAULT_LANG: Lang = "id";

/** Used for <html lang="..."> and Open Graph locale tags. */
export const HTML_LANG: Record<Lang, string> = {
  id: "id-ID",
  en: "en-US",
};

export const OG_LOCALE: Record<Lang, string> = {
  id: "id_ID",
  en: "en_US",
};

/** Display label for the language toggle UI. */
export const LANG_LABEL: Record<Lang, string> = {
  id: "ID",
  en: "EN",
};

/** Long-form for ARIA labels. */
export const LANG_NAME: Record<Lang, { id: string; en: string }> = {
  id: { id: "Bahasa Indonesia", en: "Indonesian" },
  en: { id: "Bahasa Inggris", en: "English" },
};
