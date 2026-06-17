/** ~200 wpm for Indonesian/English business prose */
const WORDS_PER_MINUTE = 200;

export function countWordsFromHtml(html: string): number {
  const text = html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!text) return 0;
  return text.split(" ").filter(Boolean).length;
}

export function estimateReadingMinutes(wordCount: number): number {
  if (wordCount <= 0) return 1;
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}

export function readingStatsFromHtml(html: string): {
  wordCount: number;
  readingTimeMinutes: number;
} {
  const wordCount = countWordsFromHtml(html);
  return {
    wordCount,
    readingTimeMinutes: estimateReadingMinutes(wordCount),
  };
}