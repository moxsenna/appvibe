export type AnalyticsEvent =
  | "cta_whatsapp_click"
  | "portfolio_view"
  | "demo_open"
  | "contact_form_submit"
  | "service_card_click"
  | "auth_mock_submit"
  | "lead_status_change"
  | "industry_card_click"
  | "about_section_view";

export function trackEvent(
  event: AnalyticsEvent,
  payload?: Record<string, unknown>,
): void {
  if (import.meta.env.DEV) {
    console.log("[analytics]", event, payload);
  }

  const analyticsEnabled = import.meta.env.VITE_ENABLE_ANALYTICS === "true";
  if (analyticsEnabled && typeof window !== "undefined") {
    const dataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer;
    dataLayer?.push({ event, ...payload });
  }
}