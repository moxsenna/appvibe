import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion";

export type RotatingTextProps = {
  /** Words to cycle through. Must contain at least 1 item. */
  words: readonly string[];

  /** Milliseconds each word stays visible. Default: 2100. */
  intervalMs?: number;

  /** Fade transition duration in ms. Default: 220. */
  fadeMs?: number;

  /**
   * Word used to reserve horizontal width — pick your longest word
   * to prevent layout shift. If omitted, the longest item in `words`
   * is auto-detected.
   */
  sizingWord?: string;

  /** Optional className applied to the visible (animated) span. */
  className?: string;

  /** Optional inline styles applied to the visible (animated) span. */
  style?: CSSProperties;

  /** Render `words[0]` and skip animation. Useful for SSR or tests. */
  staticOnly?: boolean;
};

/**
 * `<RotatingText>` — accessible animated rotating headline word.
 *
 * - Reserves horizontal space with an invisible sizing word → zero CLS.
 * - Honors `prefers-reduced-motion` (renders static first word).
 * - `aria-live="polite"` so assistive tech announces changes politely.
 * - Zero dependencies. Works with any styling solution (Tailwind, CSS, etc).
 *
 * @example
 * ```tsx
 * <h1>
 *   Make your business{" "}
 *   <RotatingText
 *     words={["trusted.", "found.", "understood."]}
 *     className="text-blue-500"
 *   />
 * </h1>
 * ```
 */
export function RotatingText({
  words,
  intervalMs = 2100,
  fadeMs = 220,
  sizingWord,
  className,
  style,
  staticOnly = false,
}: RotatingTextProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const widest = useMemo(() => {
    if (sizingWord) return sizingWord;
    return words.reduce((a, b) => (b.length > a.length ? b : a), words[0] ?? "");
  }, [sizingWord, words]);

  const isStatic = staticOnly || prefersReducedMotion || words.length <= 1;
  const activeWord = isStatic ? words[0] : words[index];

  useEffect(() => {
    if (isStatic) return;

    const timer = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((current) => (current + 1) % words.length);
        setVisible(true);
      }, fadeMs);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [words, intervalMs, fadeMs, isStatic]);

  return (
    <span
      style={{ position: "relative", display: "inline-block", verticalAlign: "baseline" }}
    >
      <span
        aria-hidden
        style={{
          visibility: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {widest}
      </span>
      <span
        className={className}
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          whiteSpace: "nowrap",
          opacity: visible ? 1 : 0,
          transition: `opacity ${fadeMs}ms ease-in-out`,
          ...style,
        }}
      >
        {activeWord}
      </span>
    </span>
  );
}
