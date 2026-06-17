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

/** Idempotent GTM bootstrap — call once before React mount. */
export function initGtm(): void {
  if (!isAnalyticsEnabled() || typeof document === "undefined") return;
  if (document.querySelector(`script[data-gtm="${GTM_ID}"]`)) return;

  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({
    event: "app_init",
    app_name: import.meta.env.VITE_APP_NAME ?? "AppVibe Studio",
  });

  const script = document.createElement("script");
  script.async = true;
  script.dataset.gtm = GTM_ID;
  script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;
  document.head.appendChild(script);
}