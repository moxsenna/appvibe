import { isAnalyticsEnabled } from "@/lib/gtm";

export type AnalyticsEvent =
  | "page_view"
  | "cta_whatsapp_click"
  | "portfolio_view"
  | "demo_open"
  | "contact_form_submit"
  | "service_card_click"
  | "auth_mock_submit"
  | "lead_status_change"
  | "industry_card_click"
  | "about_section_view"
  | "blog_share_click"
  | "lang_switch";

type DataLayerPush = {
  event: AnalyticsEvent;
  event_timestamp_ms: number;
  page_path?: string;
  page_lang?: string;
  [key: string]: unknown;
};

function getDataLayer(): Record<string, unknown>[] | undefined {
  if (typeof window === "undefined") return undefined;
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer ?? [];
  return w.dataLayer;
}

export function trackEvent(
  event: AnalyticsEvent,
  payload?: Record<string, unknown>,
): void {
  const body: DataLayerPush = {
    event,
    event_timestamp_ms: Date.now(),
    ...payload,
  };

  if (import.meta.env.DEV) {
    console.log("[analytics]", event, payload);
  }

  if (!isAnalyticsEnabled()) return;

  getDataLayer()?.push(body);
}

/** SPA virtual page view — fire on route changes. */
export function trackPageView(path: string, lang: string): void {
  trackEvent("page_view", {
    page_path: path,
    page_lang: lang,
    page_title: typeof document !== "undefined" ? document.title : undefined,
  });
}