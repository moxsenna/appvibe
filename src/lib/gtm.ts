/** Production container (also in index.html). Override via VITE_GTM_ID if needed. */
const DEFAULT_GTM_ID = "GTM-NFJ5M7W4";

const GTM_ID =
  import.meta.env.VITE_GTM_ID?.trim() ||
  (import.meta.env.PROD ? DEFAULT_GTM_ID : "");

export function isAnalyticsEnabled(): boolean {
  if (!GTM_ID || !/^GTM-[A-Z0-9]+$/i.test(GTM_ID)) return false;
  if (import.meta.env.PROD) return true;
  return import.meta.env.VITE_ENABLE_ANALYTICS === "true";
}

export function getGtmId(): string {
  return GTM_ID;
}

function gtmScriptPresent(): boolean {
  if (typeof document === "undefined") return false;
  return Boolean(
    document.querySelector('script[src*="googletagmanager.com/gtm.js"]'),
  );
}

/** Push app_init once; GTM loader lives in index.html. */
export function initGtm(): void {
  if (!isAnalyticsEnabled() || typeof window === "undefined") return;

  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer ?? [];

  if (
    !w.dataLayer.some((e) => e && (e as { event?: string }).event === "app_init")
  ) {
    w.dataLayer.push({
      event: "app_init",
      app_name: import.meta.env.VITE_APP_NAME ?? "AppVibe Studio",
    });
  }

  if (gtmScriptPresent() || document.querySelector("script[data-gtm-fallback]")) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.dataset.gtmFallback = "true";
  script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;
  document.head.appendChild(script);
}