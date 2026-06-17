/**
 * JSON-LD for rich results. Global (Organization/WebSite) and page-level
 * scripts are separate so SPA navigations can update Article/FAQ without
 * dropping site-wide schema.
 */

const ATTR = "data-appvibe-json-ld";

function removeScripts(scope: "global" | "page"): void {
  document
    .querySelectorAll(`script[${ATTR}="${scope}"]`)
    .forEach((n) => n.remove());
}

function appendScript(scope: "global" | "page", payload: Record<string, unknown>): void {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute(ATTR, scope);
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    ...payload,
  });
  document.head.appendChild(script);
}

export function setGlobalJsonLd(graph: Record<string, unknown>[]): void {
  removeScripts("global");
  appendScript("global", { "@graph": graph });
}

export function setPageJsonLd(graph: Record<string, unknown> | Record<string, unknown>[]): void {
  removeScripts("page");
  const nodes = Array.isArray(graph) ? graph : [graph];
  appendScript("page", { "@graph": nodes });
}

export function clearPageJsonLd(): void {
  removeScripts("page");
}

export function organizationJsonLd(siteUrl: string, name: string): Record<string, unknown> {
  return {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name,
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
  };
}

export function webSiteJsonLd(siteUrl: string, name: string): Record<string, unknown> {
  return {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: ["id-ID", "en"],
  };
}

export function articleJsonLd(input: {
  siteUrl: string;
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  inLanguage: string;
  authorName: string;
  wordCount?: number;
  imageUrl?: string;
}): Record<string, unknown> {
  const url = `${input.siteUrl.replace(/\/$/, "")}${input.path.startsWith("/") ? input.path : `/${input.path}`}`;
  const node: Record<string, unknown> = {
    "@type": "BlogPosting",
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    inLanguage: input.inLanguage,
    author: { "@type": "Organization", name: input.authorName },
    publisher: { "@type": "Organization", name: input.authorName },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
  };
  if (input.wordCount && input.wordCount > 0) {
    node.wordCount = input.wordCount;
  }
  if (input.imageUrl) {
    node.image = input.imageUrl;
  }
  return node;
}

export function blogItemListJsonLd(input: {
  siteUrl: string;
  listPath: string;
  name: string;
  items: { path: string; name: string }[];
}): Record<string, unknown> {
  const base = input.siteUrl.replace(/\/$/, "");
  return {
    "@type": "ItemList",
    name: input.name,
    itemListElement: input.items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: `${base}${item.path.startsWith("/") ? item.path : `/${item.path}`}`,
    })),
  };
}

export function faqPageJsonLd(
  items: { question: string; answer: string }[],
): Record<string, unknown> {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  siteUrl: string,
  crumbs: { name: string; path: string }[],
): Record<string, unknown> {
  const base = siteUrl.replace(/\/$/, "");
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${base}${c.path.startsWith("/") ? c.path : `/${c.path}`}`,
    })),
  };
}