/** Replace `{n}` with count in blog UI templates */
export function formatBlogCount(template: string, count: number): string {
  return template.replace(/\{n\}/g, String(count));
}

export function formatReadTime(template: string, minutes: number): string {
  return template.replace(/\{n\}/g, String(minutes));
}