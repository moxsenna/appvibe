import { useEffect } from "react";
import { applyPageMeta, type PageMeta } from "@/lib/seo";
import { dictionaries } from "@/i18n/dictionaries";
import { routes } from "@/lib/routes";
import { useLang } from "@/i18n/use-lang";

/** Page keys that include `meta` for usePageMeta — excludes section-only keys. */
type MetaPageKey = Exclude<
  keyof typeof dictionaries.id.pages,
  "demoDetail"
>;

/**
 * Hook variant used by static main pages. Provide the `pages.*` key and
 * the route key — both meta and paths are resolved automatically.
 */
export function usePageMeta(
  metaKey: MetaPageKey,
  routeKey: keyof typeof routes,
) {
  const { lang } = useLang();

  useEffect(() => {
    const route = routes[routeKey];
    if (typeof route !== "function") return;

    const pageBlock = dictionaries.id.pages[metaKey] as {
      meta: PageMeta["id"];
    };

    const meta: PageMeta = {
      id: pageBlock.meta,
      en: (dictionaries.en.pages[metaKey] as { meta: PageMeta["en"] }).meta,
      paths: {
        id: (route as (l: "id") => string)("id"),
        en: (route as (l: "en") => string)("en"),
      },
    };

    applyPageMeta(meta, lang);
  }, [lang, metaKey, routeKey]);
}