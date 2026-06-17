import type { Lang } from "@/i18n/types";

/**
 * A field that has been localized inline. Use for any data file where ID and
 * EN copy need to live side-by-side.
 *
 *  type Localized<string> = { id: string; en: string }
 *  type Localized<string[]> = { id: string[]; en: string[] }
 *
 * Keep schema identical between languages — same array length, same nested
 * shape. The pick() helper assumes both sides exist.
 */
export type Localized<T> = { id: T; en: T };

/**
 * Read a localized value for the active language. Cheap inline alternative to
 * sprinkling `value[lang]` everywhere — clearer intent at call sites and a
 * single place to add fallback behaviour later if we ever ship a 3rd locale.
 */
export function pick<T>(value: Localized<T>, lang: Lang): T {
  return value[lang];
}

/**
 * Convenience constructor for cases where both languages share the same value
 * (e.g. a tag like "WhatsApp CTA" that reads identically in both). Avoids
 * having to write `{ id: "...", en: "..." }` with duplicated strings.
 */
export function same<T>(value: T): Localized<T> {
  return { id: value, en: value };
}
