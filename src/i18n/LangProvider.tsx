import { useEffect, useMemo, type ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { LangContext } from "./LangContext";
import { dictionaries } from "./dictionaries";
import { HTML_LANG, type Lang } from "./types";

const STORAGE_KEY = "appvibe.preferredLang";

type LangProviderProps = {
  lang: Lang;
  children?: ReactNode;
};

/**
 * Wraps a route subtree with a fixed locale. Mounted twice in the router:
 * once at "/" (lang="id") and once at "/en" (lang="en").
 *
 * Responsibilities:
 *  - Provide dict + lang via context (read by useT / useLang / useDict).
 *  - Sync <html lang="..."> for SEO + assistive tech.
 *  - Persist user preference so future visits land in the right tree.
 *  - Render either <Outlet /> for route children, or `children` when used
 *    standalone (e.g. testing or non-router pages).
 */
export function LangProvider({ lang, children }: LangProviderProps) {
  const value = useMemo(
    () => ({ lang, dict: dictionaries[lang] }),
    [lang],
  );

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
  }, [lang]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage can be blocked in privacy modes — ignore.
    }
  }, [lang]);

  return (
    <LangContext.Provider value={value}>
      {children ?? <Outlet />}
    </LangContext.Provider>
  );
}

/**
 * Read the persisted preference on initial load (used by the toggle to
 * decide whether to redirect from /tentang → /en/about, never automatic).
 */
export function getPersistedLang(): Lang | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "id" || value === "en" ? value : null;
  } catch {
    return null;
  }
}
