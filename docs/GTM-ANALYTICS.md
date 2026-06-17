# Google Tag Manager — AppVibe Studio

Panduan GTM container **`GTM-NFJ5M7W4`** di production dan pemetaan event `dataLayer`.

## 1. Snippet di situs (sudah terpasang)

Snippet resmi Google ada di **`index.html`** (repo):

- Script GTM di awal `<head>` (setinggi mungkin)
- `<noscript>` iframe tepat setelah `<body>`

Setelah **deploy Cloudflare**, View Source `https://appvibe.web.id` harus memuat `GTM-NFJ5M7W4`. **Tidak bergantung** env Cloudflare untuk mendeteksi container di Tag Assistant.

## 2. Environment variables (opsional)

| Variable | Kapan dipakai |
|----------|----------------|
| `VITE_GTM_ID` | Override ID (default production: `GTM-NFJ5M7W4`) |
| `VITE_ENABLE_ANALYTICS` | `true` di **local dev** agar `dataLayer` push (bukan hanya console log) |

Di **production build**, event `trackEvent` / `page_view` aktif otomatis jika GTM ada di HTML.

## 3. Yang sudah di codebase

- `index.html` — loader GTM + noscript
- `initGtm()` — `app_init` di dataLayer
- `src/lib/analytics.ts` — semua event marketing
- `AnalyticsRouteListener` — `page_view` tiap navigasi SPA

## 4. Event names (Custom Event di GTM)

| Event | Kapan | Payload umum |
|-------|--------|----------------|
| `page_view` | Setiap route change | `page_path`, `page_lang`, `page_title` |
| `cta_whatsapp_click` | Klik tombol WA | `location` |
| `contact_form_submit` | Submit form | `form`, … |
| `portfolio_view` | Case study | `slug`, `type` |
| `demo_open` | Buka demo | `slug`, `location` |
| `lang_switch` | ID ↔ EN | `from_lang`, `to_lang` |
| `blog_share_click` | Share artikel | `network`, `page_path` |
| `app_init` | Load app | `app_name` |

## 5. Tag Assistant: "No Google tags found"

### A. Container belum di HTML (sudah diperbaiki di repo)

Jika View Source **tidak** ada `googletagmanager.com/gtm.js` → redeploy branch `main` terbaru.

### B. Container ada, tapi "no tags"

GTM **container terdeteksi**, tetapi **belum ada tag yang dipublish** (mis. GA4):

1. [tagmanager.google.com](https://tagmanager.google.com) → **GTM-NFJ5M7W4**
2. **Tags** → tambah **Google Tag** atau **GA4 Configuration** (Measurement ID `G-…`)
3. Trigger: **Initialization - All Pages** atau **All Pages**
4. **Submit** → **Publish** versi container

Tanpa publish, Tag Assistant bisa bilang tidak ada Google tags meski GTM load.

### C. Preview mode

1. GTM → **Preview** → masukkan `https://appvibe.web.id`
2. Buka situs di tab yang terhubung
3. Cek **Tags Fired** di debugger

## 6. Setup GA4 (disarankan)

1. Tag **Google Tag** / GA4 Configuration + Measurement ID
2. Tag GA4 Event + trigger Custom Event `page_view` (SPA)
3. Tag conversion + trigger `cta_whatsapp_click`, `contact_form_submit`
4. **Publish**

## 7. Verifikasi

- [ ] View Source: `GTM-NFJ5M7W4` di head
- [ ] Network: `gtm.js?id=GTM-NFJ5M7W4` status 200
- [ ] Console: `window.dataLayer` array terisi
- [ ] GTM container **published** dengan minimal satu Google tag
- [ ] GA4 Realtime (setelah tag GA4 publish)

## 8. Cloudflare cache

Setelah deploy, jika HTML lama: **Caching** → Purge Everything sekali, lalu hard refresh (Ctrl+Shift+R).

Lihat: `docs/DEPLOY-CHECKLIST.md`, `docs/08-DEPLOYMENT.md` §12.