import type { Lang } from "@/i18n/types";
import { DEFAULT_LANG, HTML_LANG, LANGS, OG_LOCALE } from "@/i18n/types";
import { routes } from "@/lib/routes";

export type LocalizedMeta = {
  title: string;
  description: string;
};

export type PageMeta = {
  id: LocalizedMeta;
  en: LocalizedMeta;
  paths: { id: string; en: string };
  /** Overrides canonical/og:url for current lang (e.g. blog query). */
  canonicalPath?: string;
  ogImage?: string;
  /** Default `website`; use `article` for blog posts. */
  ogType?: "website" | "article";
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    author?: string;
    tags?: string[];
  };
};

const APP_NAME = import.meta.env.VITE_APP_NAME ?? "AppVibe Studio";
const SITE_URL = import.meta.env.VITE_SITE_URL ?? "http://localhost:5173";
const DEFAULT_OG_IMAGE = "/og/default.svg";

export function getSiteUrl(): string {
  return SITE_URL.replace(/\/$/, "");
}

export function getCanonicalUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

/** Absolute URL for Open Graph / Twitter image tags. */
export function getOgImageUrl(path?: string): string {
  const p = path ?? DEFAULT_OG_IMAGE;
  if (p.startsWith("http://") || p.startsWith("https://")) return p;
  return `${getSiteUrl()}${p.startsWith("/") ? p : `/${p}`}`;
}

/**
 * Apply page-level metadata for the active language:
 * title, description, canonical, hreflang, Open Graph, Twitter Card.
 */
export function applyPageMeta(meta: PageMeta, lang: Lang): void {
  const localized = meta[lang];
  const currentPath = meta.canonicalPath ?? meta.paths[lang];
  const ogType = meta.ogType ?? "website";

  const title = localized.title.includes(APP_NAME)
    ? localized.title
    : `${localized.title} | ${APP_NAME}`;

  const ogImage = getOgImageUrl(meta.ogImage);
  const canonical = getCanonicalUrl(currentPath);

  document.title = title;

  setMetaTag("description", localized.description);
  setMetaTag("robots", "index, follow, max-image-preview:large");

  setMetaTag("og:title", title, "property");
  setMetaTag("og:description", localized.description, "property");
  setMetaTag("og:image", ogImage, "property");
  setMetaTag("og:url", canonical, "property");
  setMetaTag("og:type", ogType, "property");
  setMetaTag("og:site_name", APP_NAME, "property");
  setMetaTag("og:locale", OG_LOCALE[lang], "property");
  setMetaTag(
    "og:locale:alternate",
    OG_LOCALE[lang === "id" ? "en" : "id"],
    "property",
  );

  if (ogType === "article" && meta.article) {
    setMetaTag("article:published_time", meta.article.publishedTime, "property");
    if (meta.article.modifiedTime) {
      setMetaTag("article:modified_time", meta.article.modifiedTime, "property");
    }
    if (meta.article.author) {
      setMetaTag("article:author", meta.article.author, "property");
    }
    meta.article.tags?.forEach((tag) => {
      appendMetaProperty("article:tag", tag);
    });
  } else {
    removeMetaProperties("article:tag");
    removeMetaTag("property", "article:published_time");
    removeMetaTag("property", "article:modified_time");
    removeMetaTag("property", "article:author");
  }

  setMetaTag("twitter:card", "summary_large_image");
  setMetaTag("twitter:title", title);
  setMetaTag("twitter:description", localized.description);
  setMetaTag("twitter:image", ogImage);

  setLinkTag("canonical", canonical);
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

function removeMetaTag(attr: "name" | "property", name: string): void {
  document
    .querySelectorAll<HTMLMetaElement>(`meta[${attr}="${name}"]`)
    .forEach((n) => n.remove());
}

function appendMetaProperty(property: string, content: string): void {
  const tag = document.createElement("meta");
  tag.setAttribute("property", property);
  tag.content = content;
  document.head.appendChild(tag);
}

function removeMetaProperties(property: string): void {
  document
    .querySelectorAll<HTMLMetaElement>(`meta[property="${property}"]`)
    .forEach((n) => n.remove());
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

function setHreflangAlternates(paths: { id: string; en: string }): void {
  document
    .querySelectorAll<HTMLLinkElement>('link[rel="alternate"][hreflang]')
    .forEach((node) => node.remove());

  for (const l of LANGS) {
    const link = document.createElement("link");
    link.rel = "alternate";
    link.hreflang = HTML_LANG[l];
    link.href = getCanonicalUrl(paths[l]);
    document.head.appendChild(link);
  }

  const xdef = document.createElement("link");
  xdef.rel = "alternate";
  xdef.hreflang = "x-default";
  xdef.href = getCanonicalUrl(paths[DEFAULT_LANG]);
  document.head.appendChild(xdef);
}

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