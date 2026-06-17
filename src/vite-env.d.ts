/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_SITE_URL: string;
  readonly VITE_WHATSAPP_NUMBER: string;
  readonly VITE_ENABLE_ANALYTICS: string;
  readonly VITE_GTM_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}