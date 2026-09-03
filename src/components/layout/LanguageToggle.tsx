import { useNavigate, useLocation } from "react-router-dom";
import { useLang } from "@/i18n/use-lang";
import { LANGS, LANG_LABEL, LANG_NAME } from "@/i18n/types";
import { getEquivalentPath } from "@/lib/routes";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";

type LanguageToggleProps = {
  /** Style variant — light surfaces (`onLight`) or dark hero surfaces (`onDark`). */
  variant?: "onLight" | "onDark";
  /** Extra classes on the outer container — useful for spacing in nav rows. */
  className?: string;
};

/**
 * Pill-style language switcher: [ ID | EN ].
 *
 * Computes the equivalent path in the target language so the user stays on
 * the same logical page — `/tentang` becomes `/en/about`, `/portfolio/clinic`
 * becomes `/en/portfolio/clinic`. If the current path is unknown we fall
 * back to the target language's home (resolved by `getEquivalentPath`).
 *
 * Switching always navigates — no soft state — because the route tree itself
 * defines which `LangProvider` is active.
 */
export function LanguageToggle({
  variant = "onLight",
  className,
}: LanguageToggleProps) {
  const { lang } = useLang();
  const navigate = useNavigate();
  const location = useLocation();

  const containerStyles =
    variant === "onDark"
      ? "border-av-dark-border bg-white/5"
      : "border-av-border bg-av-surface";

  const activeStyles =
    variant === "onDark"
      ? "bg-av-canvas text-av-ink"
      : "bg-av-ink text-white";

  const inactiveStyles =
    variant === "onDark"
      ? "text-av-dark-muted hover:text-white"
      : "text-av-secondary hover:text-av-ink";

  return (
    <div
      role="group"
      aria-label={lang === "id" ? "Ganti bahasa" : "Switch language"}
      className={cn(
        "inline-flex items-center rounded-[4px] border p-0.5 text-xs font-semibold",
        containerStyles,
        className,
      )}
    >
      {LANGS.map((target) => {
        const active = target === lang;
        const targetPath = getEquivalentPath(location.pathname, target);
        return (
          <button
            key={target}
            type="button"
            aria-pressed={active}
            aria-label={LANG_NAME[target][lang]}
            onClick={() => {
              if (active) return;
              trackEvent("lang_switch", {
                from_lang: lang,
                to_lang: target,
                page_path: location.pathname,
              });
              navigate(targetPath);
            }}
            className={cn(
              "min-h-[32px] rounded-[3px] px-2.5 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-av-signal focus-visible:ring-offset-1",
              active ? activeStyles : inactiveStyles,
            )}
          >
            {LANG_LABEL[target]}
          </button>
        );
      })}
    </div>
  );
}