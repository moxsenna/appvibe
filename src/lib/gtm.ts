const GTM_ID = import.meta.env.VITE_GTM_ID?.trim() ?? "";

export function isAnalyticsEnabled(): boolean {
  return (
    import.meta.env.VITE_ENABLE_ANALYTICS === "true" &&
    GTM_ID.length > 0 &&
    /^GTM-[A-Z0-9]+$/i.test(GTM_ID)
  );
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

/**
 * Ensures dataLayer exists and pushes app metadata.
 * GTM loader is injected in index.html at build time (see vite gtm plugin).
 * Falls back to dynamic inject only if HTML snippet is missing (e.g. misconfigured build).
 */
export function initGtm(): void {
  if (!isAnalyticsEnabled() || typeof window === "undefined") return;

  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer ?? [];

  if (!w.dataLayer.some((e) => e && (e as { event?: string }).event === "app_init")) {
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