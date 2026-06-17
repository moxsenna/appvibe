import type { Lang } from "@/i18n/types";
import { DEFAULT_LANG } from "@/i18n/types";

/**
 * Bidirectional map of "route key" → path in each language.
 * The toggle uses this to compute the equivalent URL when switching locales.
 *
 * Naming convention:
 *  - Indonesian paths use Indonesian words ("/tentang", "/layanan")
 *  - English paths sit under "/en/..." with English words ("/en/about")
 *  - Slugs (portfolio/demo items) stay canonical and shared — no translation
 *  - "/uses" is a personal-brand path; we keep it identical across both
 */
const PATHS: Record<Lang, Record<string, string>> = {
  id: {
    home: "/",
    services: "/layanan",
    portfolio: "/portfolio",
    demo: "/demo",
    industries: "/industri",
    about: "/tentang",
    contact: "/kontak",
    uses: "/uses",
    blog: "/blog",
  },
  en: {
    home: "/en",
    services: "/en/services",
    portfolio: "/en/portfolio",
    demo: "/en/demos",
    industries: "/en/industries",
    about: "/en/about",
    contact: "/en/contact",
    uses: "/en/uses",
    blog: "/en/blog",
  },
};

export type RouteKey = keyof (typeof PATHS)[typeof DEFAULT_LANG];

/**
 * Helper API to read paths anywhere in the app. Components should NEVER
 * hardcode strings like "/tentang" — always go through `routes.about(lang)`.
 */
export const routes = {
  home: (lang: Lang) => PATHS[lang].home,
  services: (lang: Lang) => PATHS[lang].services,
  portfolio: (lang: Lang) => PATHS[lang].portfolio,
  demo: (lang: Lang) => PATHS[lang].demo,
  industries: (lang: Lang) => PATHS[lang].industries,
  about: (lang: Lang) => PATHS[lang].about,
  contact: (lang: Lang) => PATHS[lang].contact,
  uses: (lang: Lang) => PATHS[lang].uses,
  blog: (lang: Lang) => PATHS[lang].blog,
  blogPost: (lang: Lang, slug: string) => `${PATHS[lang].blog}/${slug}`,
  portfolioDetail: (lang: Lang, slug: string) =>
    `${PATHS[lang].portfolio}/${slug}`,
  demoDetail: (lang: Lang, slug: string) => `${PATHS[lang].demo}/${slug}`,
};

/**
 * Given a current pathname, work out which route key it matches AND which
 * locale we're in. Used by the language toggle to compute the equivalent
 * URL in the target language without losing the user's place.
 *
 * Examples:
 *  resolveRoute("/tentang")                → { lang: "id", key: "about" }
 *  resolveRoute("/en/about")               → { lang: "en", key: "about" }
 *  resolveRoute("/portfolio/clinic")       → { lang: "id", key: "portfolioDetail", slug: "clinic" }
 *  resolveRoute("/en/demos/clinic")        → { lang: "en", key: "demoDetail", slug: "clinic" }
 *  resolveRoute("/unknown")                → null
 */
export type ResolvedRoute =
  | { lang: Lang; key: RouteKey }
  | { lang: Lang; key: "portfolioDetail" | "demoDetail" | "blogPost"; slug: string };

export function resolveRoute(pathname: string): ResolvedRoute | null {
  const clean = pathname.replace(/\/$/, "") || "/";
  const lang: Lang = clean === "/en" || clean.startsWith("/en/") ? "en" : "id";
  const paths = PATHS[lang];

  // Static routes — exact match
  for (const key of Object.keys(paths) as RouteKey[]) {
    if (clean === paths[key]) return { lang, key };
  }

  // Dynamic routes — slug-bearing
  const portfolioPrefix = `${paths.portfolio}/`;
  if (clean.startsWith(portfolioPrefix)) {
    const slug = clean.slice(portfolioPrefix.length);
    if (slug && !slug.includes("/")) {
      return { lang, key: "portfolioDetail", slug };
    }
  }

  const demoPrefix = `${paths.demo}/`;
  if (clean.startsWith(demoPrefix)) {
    const slug = clean.slice(demoPrefix.length);
    if (slug && !slug.includes("/")) {
      return { lang, key: "demoDetail", slug };
    }
  }

  const blogPrefix = `${paths.blog}/`;
  if (clean.startsWith(blogPrefix)) {
    const slug = clean.slice(blogPrefix.length);
    if (slug && !slug.includes("/")) {
      return { lang, key: "blogPost", slug };
    }
  }
  if (clean === paths.blog) return { lang, key: "blog" };

  return null;
}

/**
 * Compute the equivalent path in the target language for any current pathname.
 * Falls back to the target language's home if the current path is unknown
 * (404s, deep nested paths, etc.) — better than redirecting to /undefined.
 */
export function getEquivalentPath(pathname: string, target: Lang): string {
  const resolved = resolveRoute(pathname);
  if (!resolved) return PATHS[target].home;

  if (resolved.key === "portfolioDetail" || resolved.key === "demoDetail" || resolved.key === "blogPost") {
    const slug = (resolved as { slug: string }).slug;
    return routes[resolved.key](target, slug);
  }
  const key = resolved.key as keyof typeof routes;
  const route = routes[key] as (l: Lang) => string;
  return route(target);
}
