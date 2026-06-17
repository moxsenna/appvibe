import { BLOG_PAGE_SIZE } from "@/lib/blog-constants";
import type { BlogPost } from "@/types/blog";

export function paginateBlogPosts<T>(
  items: T[],
  page: number,
  pageSize = BLOG_PAGE_SIZE,
): { page: number; totalPages: number; slice: T[] } {
  if (items.length === 0) {
    return { page: 1, totalPages: 1, slice: [] };
  }
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    page: safePage,
    totalPages,
    slice: items.slice(start, start + pageSize),
  };
}

export function shouldPaginateBlogList(count: number): boolean {
  return count > BLOG_PAGE_SIZE;
}

/** Featured card only on unfiltered page 1 with enough posts. */
export function blogIndexShowFeatured(
  query: string,
  tag: string | null,
  page: number,
  filteredCount: number,
): boolean {
  return (
    !query.trim() &&
    !tag &&
    page === 1 &&
    filteredCount > 0
  );
}

export function splitFeaturedAndGrid(
  pageSlice: BlogPost[],
  showFeatured: boolean,
): { featured?: BlogPost; gridPosts: BlogPost[] } {
  if (!showFeatured || pageSlice.length === 0) {
    return { gridPosts: pageSlice };
  }
  const [featured, ...rest] = pageSlice;
  return { featured, gridPosts: rest };
}