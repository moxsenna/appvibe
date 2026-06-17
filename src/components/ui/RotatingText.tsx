import { useEffect, useMemo, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useDict } from "@/i18n/use-dict";
import { cn } from "@/lib/cn";

type RotatingTextProps = {
  /** Override words from dict — useful for non-hero rotating contexts. */
  words?: readonly string[];
  intervalMs?: number;
  className?: string;
  /** `typewriter` = type + erase between words; `fade` = cross-fade swap. */
  variant?: "typewriter" | "fade";
  /** Ms per character when typing (typewriter). */
  typeCharMs?: number;
  /** Ms per character when erasing (typewriter). */
  eraseCharMs?: number;
};

type TypewriterPhase = "typing" | "holding" | "erasing";

/**
 * Rotates one word at a time in place. Longest word reserves width (invisible)
 * so the headline does not shift — zero CLS.
 */
export function RotatingText({
  words,
  intervalMs = 2100,
  className,
  variant = "typewriter",
  typeCharMs = 52,
  eraseCharMs = 28,
}: RotatingTextProps) {
  const { common } = useDict();
  const sourceWords = words ?? common.rotating.words;

  const prefersReducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [typedLength, setTypedLength] = useState(0);
  const [phase, setPhase] = useState<TypewriterPhase>("typing");

  const sizingWord = useMemo(
    () =>
      sourceWords.reduce(
        (longest, current) =>
          current.length > longest.length ? current : longest,
        sourceWords[0] ?? "",
      ),
    [sourceWords],
  );

  const currentWord = sourceWords[index] ?? "";
  const displayText = prefersReducedMotion
    ? (sourceWords[0] ?? "")
    : variant === "fade"
      ? currentWord
      : currentWord.slice(0, typedLength);

  const timersRef = useRef<number[]>([]);

  const clearTimers = () => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  };

  useEffect(() => {
    setIndex(0);
    setTypedLength(0);
    setPhase("typing");
    setVisible(true);
  }, [sourceWords]);

  // Fade variant (legacy)
  useEffect(() => {
    if (variant !== "fade") return;
    if (prefersReducedMotion || sourceWords.length <= 1) return;

    const fadeTimer = window.setInterval(() => {
      setVisible(false);
      const swap = window.setTimeout(() => {
        setIndex((current) => (current + 1) % sourceWords.length);
        setVisible(true);
      }, 220);
      timersRef.current.push(swap);
    }, intervalMs);

    timersRef.current.push(fadeTimer);
    return () => clearTimers();
  }, [sourceWords, intervalMs, prefersReducedMotion, variant]);

  // Typewriter variant
  useEffect(() => {
    if (variant !== "typewriter") return;
    if (prefersReducedMotion || sourceWords.length <= 1) return;

    clearTimers();

    const word = sourceWords[index] ?? "";
    let cancelled = false;

    const schedule = (fn: () => void, ms: number) => {
      const id = window.setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
      timersRef.current.push(id);
    };

    if (phase === "typing") {
      if (typedLength < word.length) {
        schedule(() => setTypedLength((n) => n + 1), typeCharMs);
      } else {
        schedule(() => setPhase("holding"), 1000);
      }
    } else if (phase === "holding") {
      schedule(() => setPhase("erasing"), 0);
    } else if (phase === "erasing") {
      if (typedLength > 0) {
        schedule(() => setTypedLength((n) => n - 1), eraseCharMs);
      } else {
        schedule(() => {
          setIndex((i) => (i + 1) % sourceWords.length);
          setPhase("typing");
        }, 180);
      }
    }

    return () => {
      cancelled = true;
      clearTimers();
    };
  }, [
    variant,
    prefersReducedMotion,
    sourceWords,
    index,
    typedLength,
    phase,
    intervalMs,
    typeCharMs,
    eraseCharMs,
  ]);

  const showCaret =
    variant === "typewriter" &&
    !prefersReducedMotion &&
    sourceWords.length > 1 &&
    (phase === "typing" || phase === "holding");

  return (
    <span className="relative inline-block align-baseline leading-[1.12]">
      <span className="invisible whitespace-nowrap" aria-hidden>
        {sizingWord}
      </span>
      <span
        className={cn(
          "absolute left-0 top-0 whitespace-nowrap bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent",
          variant === "fade" && "transition-opacity duration-200",
          variant === "fade" && (visible ? "opacity-100" : "opacity-0"),
          className,
        )}
        aria-live="polite"
        aria-atomic="true"
      >
        {displayText}
        {showCaret && (
          <span
            className="ml-0.5 inline-block w-[2px] animate-pulse bg-cyan-300/90 align-middle"
            style={{ height: "0.85em" }}
            aria-hidden
          />
        )}
      </span>
    </span>
  );
}