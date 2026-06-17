const WORDS_PER_MINUTE = 200;

export function countWordsFromHtml(html) {
  const text = html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!text) return 0;
  return text.split(" ").filter(Boolean).length;
}

export function readingStatsFromHtml(html) {
  const wordCount = countWordsFromHtml(html);
  const readingTimeMinutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE) || 1);
  return { wordCount, readingTimeMinutes: wordCount <= 0 ? 1 : readingTimeMinutes };
}