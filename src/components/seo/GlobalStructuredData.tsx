import { useEffect } from "react";
import { getSiteUrl } from "@/lib/seo";
import {
  organizationJsonLd,
  setGlobalJsonLd,
  webSiteJsonLd,
} from "@/lib/json-ld";

const APP_NAME = import.meta.env.VITE_APP_NAME ?? "AppVibe Studio";

export function GlobalStructuredData() {
  useEffect(() => {
    const siteUrl = getSiteUrl();
    setGlobalJsonLd([
      organizationJsonLd(siteUrl, APP_NAME),
      webSiteJsonLd(siteUrl, APP_NAME),
    ]);
  }, []);

  return null;
}