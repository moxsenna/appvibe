import { useEffect, useMemo, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useDict } from "@/i18n/use-dict";
import { cn } from "@/lib/cn";

type RotatingTextProps = {
  /** Override words from dict — useful for non-hero rotating contexts. */
  words?: readonly string[];
  intervalMs?: number;
  className?: string;
};

/**
 * Rotates one word at a time in place. The longest item in `words` reserves
 * horizontal space (sized invisibly) so neighbours don't shift — zero CLS.
 *
 * The hero variant pulls from `dict.common.rotating.words` so each locale
 * supplies grammatically correct alternatives (Indonesian "di-" passive,
 * English infinitive after "easier to").
 */
export function RotatingText({
  words,
  intervalMs = 2100,
  className,
}: RotatingTextProps) {
  const { common } = useDict();
  const sourceWords = words ?? common.rotating.words;

  const prefersReducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  // Pick the longest word in the active list as the sizing slot — this keeps
  // the layout stable regardless of locale or custom override.
  const sizingWord = useMemo(
    () =>
      sourceWords.reduce(
        (longest, current) =>
          current.length > longest.length ? current : longest,
        sourceWords[0] ?? "",
      ),
    [sourceWords],
  );

  const activeWord = prefersReducedMotion ? sourceWords[0] : sourceWords[index];

  useEffect(() => {
    if (prefersReducedMotion || sourceWords.length <= 1) return;

    const fadeTimer = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((current) => (current + 1) % sourceWords.length);
        setVisible(true);
      }, 220);
    }, intervalMs);

    return () => window.clearInterval(fadeTimer);
  }, [sourceWords, intervalMs, prefersReducedMotion]);

  // Reset to the first word whenever the source list changes (e.g. locale
  // switch). Without this, the active index can point past the new array.
  useEffect(() => {
    setIndex(0);
  }, [sourceWords]);

  return (
    <span className="relative inline-block align-baseline leading-[1.12]">
      <span className="invisible whitespace-nowrap" aria-hidden>
        {sizingWord}
      </span>
      <span
        className={cn(
          "absolute left-0 top-0 whitespace-nowrap bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent transition-opacity duration-200",
          visible ? "opacity-100" : "opacity-0",
          className,
        )}
        aria-live="polite"
        aria-atomic="true"
      >
        {activeWord}
      </span>
    </span>
  );
}
