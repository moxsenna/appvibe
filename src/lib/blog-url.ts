import type { Lang } from "@/i18n/types";
import { routes } from "@/lib/routes";

export type BlogIndexSearchState = {
  tag: string | null;
  page: number;
  /** Client-only search; not written to URL (shareable filters use tag + page). */
  query: string;
};

export function parseBlogIndexSearch(
  params: URLSearchParams,
  validTags: string[],
): Pick<BlogIndexSearchState, "tag" | "page"> {
  const rawTag = params.get("tag")?.trim() ?? "";
  const tag =
    rawTag && validTags.includes(rawTag) ? rawTag : null;

  const rawPage = Number.parseInt(params.get("page") ?? "1", 10);
  const page = Number.isFinite(rawPage) && rawPage > 0 ? rawPage : 1;

  return { tag, page };
}

export function buildBlogIndexSearchParams(
  tag: string | null,
  page: number,
): URLSearchParams {
  const sp = new URLSearchParams();
  if (tag) sp.set("tag", tag);
  if (page > 1) sp.set("page", String(page));
  return sp;
}

export function blogIndexPathWithSearch(
  lang: Lang,
  tag: string | null,
  page: number,
): string {
  const base = routes.blog(lang);
  const sp = buildBlogIndexSearchParams(tag, page);
  const q = sp.toString();
  return q ? `${base}?${q}` : base;
}