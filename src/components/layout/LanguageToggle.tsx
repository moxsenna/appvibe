import { useNavigate, useLocation } from "react-router-dom";
import { useLang } from "@/i18n/use-lang";
import { LANGS, LANG_LABEL, LANG_NAME } from "@/i18n/types";
import { getEquivalentPath } from "@/lib/routes";
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
      ? "border-white/20 bg-white/10 backdrop-blur-sm"
      : "border-brand-border bg-white shadow-sm";

  const activeStyles =
    variant === "onDark"
      ? "bg-white text-brand-navy"
      : "bg-brand-navy text-white";

  const inactiveStyles =
    variant === "onDark"
      ? "text-white/70 hover:text-white"
      : "text-brand-muted hover:text-brand-navy";

  return (
    <div
      role="group"
      aria-label={lang === "id" ? "Ganti bahasa" : "Switch language"}
      className={cn(
        "inline-flex items-center rounded-full border p-0.5 text-xs font-semibold",
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
              navigate(targetPath);
            }}
            className={cn(
              "rounded-full px-2.5 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-1",
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
