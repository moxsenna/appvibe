export function formatTagLabel(tag: string): string {
  const spaced = tag.replace(/-/g, " ").trim().replace(/\s+/g, " ");
  if (spaced.length === 0) return tag;
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}
