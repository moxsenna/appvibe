import { useLang } from "./use-lang";
import type { Dictionary } from "./dictionaries";

/**
 * Return the entire dictionary (common + pages namespaces) for the active
 * locale. Components destructure directly:
 *
 *   const { common, pages } = useDict();
 *   common.cta.consult;
 *   pages.home.hero.tagline;
 *
 * Preferred over `useT("dot.path")` — type-safe and refactor-safe.
 */
export function useDict(): Dictionary {
  return useLang().dict;
}
