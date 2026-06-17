import type { Lang } from "@/i18n/types";
import { DEFAULT_LANG, HTML_LANG, LANGS, OG_LOCALE } from "@/i18n/types";
import { routes } from "@/lib/routes";

export type LocalizedMeta = {
  title: string;
  description: string;
};

/**
 * Page meta keyed by language. Each route declares both ID and EN copy plus
 * the canonical path in each language so we can emit valid hreflang alternates.
 *
 * `routeKey` is optional — used when the path is built dynamically (portfolio
 * detail, demo detail). For static pages, just provide `paths`.
 */
export type PageMeta = {
  id: LocalizedMeta;
  en: LocalizedMeta;
  paths: { id: string; en: string };
  ogImage?: string;
};

const APP_NAME = import.meta.env.VITE_APP_NAME ?? "AppVibe Studio";
const SITE_URL = import.meta.env.VITE_SITE_URL ?? "http://localhost:5173";
const DEFAULT_OG_IMAGE = "/images/og/default.png";

export function getCanonicalUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL.replace(/\/$/, "")}${normalizedPath}`;
}

/**
 * Apply page-level metadata for the active language:
 *  - <title>
 *  - <meta name="description">
 *  - <meta property="og:*"> (title, description, image, url, locale)
 *  - <link rel="canonical">
 *  - <link rel="alternate" hreflang="..."> for each supported lang + x-default
 *
 * Idempotent: re-running on the same page replaces existing tags rather than
 * appending duplicates.
 */
export function applyPageMeta(meta: PageMeta, lang: Lang): void {
  const localized = meta[lang];
  const currentPath = meta.paths[lang];

  const title = localized.title.includes(APP_NAME)
    ? localized.title
    : `${localized.title} | ${APP_NAME}`;

  document.title = title;

  setMetaTag("description", localized.description);
  setMetaTag("og:title", title, "property");
  setMetaTag("og:description", localized.description, "property");
  setMetaTag("og:image", meta.ogImage ?? DEFAULT_OG_IMAGE, "property");
  setMetaTag("og:url", getCanonicalUrl(currentPath), "property");
  setMetaTag("og:locale", OG_LOCALE[lang], "property");
  setMetaTag(
    "og:locale:alternate",
    OG_LOCALE[lang === "id" ? "en" : "id"],
    "property",
  );

  setLinkTag("canonical", getCanonicalUrl(currentPath));
  setHreflangAlternates(meta.paths);
}

function setMetaTag(
  name: string,
  content: string,
  attr: "name" | "property" = "name",
): void {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function setLinkTag(rel: string, href: string): void {
  let tag = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.rel = rel;
    document.head.appendChild(tag);
  }
  tag.href = href;
}

/**
 * Replace all existing hreflang alternates with a fresh set for this page.
 * Critical for SEO: Google penalises stale/duplicate hreflang tags.
 */
function setHreflangAlternates(paths: { id: string; en: string }): void {
  document
    .querySelectorAll<HTMLLinkElement>('link[rel="alternate"][hreflang]')
    .forEach((node) => node.remove());

  for (const lang of LANGS) {
    const link = document.createElement("link");
    link.rel = "alternate";
    link.hreflang = HTML_LANG[lang];
    link.href = getCanonicalUrl(paths[lang]);
    document.head.appendChild(link);
  }

  // x-default → Indonesian (the source of truth, default lang)
  const xdef = document.createElement("link");
  xdef.rel = "alternate";
  xdef.hreflang = "x-default";
  xdef.href = getCanonicalUrl(paths[DEFAULT_LANG]);
  document.head.appendChild(xdef);
}

/**
 * Default fallback meta used at the very top of HomePage and as the seed for
 * any page that hasn't called applyPageMeta yet. Keep both languages here.
 */
export const defaultMeta: PageMeta = {
  id: {
    title: "AppVibe Studio — Website dan App Bisnis untuk UMKM",
    description:
      "AppVibe Studio membantu UMKM dan bisnis jasa membuat website, landing page, dashboard, dan app bisnis ringan yang modern, responsif, dan siap digunakan.",
  },
  en: {
    title: "AppVibe Studio — Websites and Business Apps for Growing Teams",
    description:
      "AppVibe Studio helps growing businesses ship modern, responsive websites, landing pages, dashboards, and lightweight apps that are ready to use.",
  },
  paths: {
    id: routes.home("id"),
    en: routes.home("en"),
  },
};
