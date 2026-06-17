import { useEffect, useMemo, type ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { LangContext } from "./LangContext";
import { dictionaries } from "./dictionaries";
import { HTML_LANG, type Lang } from "./types";
import { GlobalStructuredData } from "@/components/seo/GlobalStructuredData";
import { AnalyticsRouteListener } from "@/components/analytics/AnalyticsRouteListener";

const STORAGE_KEY = "appvibe.preferredLang";

type LangProviderProps = {
  lang: Lang;
  children?: ReactNode;
};

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
      <GlobalStructuredData />
      <AnalyticsRouteListener />
      {children ?? <Outlet />}
    </LangContext.Provider>
  );
}

export function getPersistedLang(): Lang | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "id" || value === "en" ? value : null;
  } catch {
    return null;
  }
}