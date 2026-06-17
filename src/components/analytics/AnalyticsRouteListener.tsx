import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLang } from "@/i18n/use-lang";
import { trackPageView } from "@/lib/analytics";

/** Pushes `page_view` to dataLayer on client navigations (GTM History Change trigger). */
export function AnalyticsRouteListener() {
  const location = useLocation();
  const { lang } = useLang();

  useEffect(() => {
    const path = `${location.pathname}${location.search}`;
    trackPageView(path, lang);
  }, [location.pathname, location.search, lang]);

  return null;
}