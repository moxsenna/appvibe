# Google Tag Manager — AppVibe Studio

Panduan mengaktifkan GTM di production (Cloudflare Pages) dan memetakan event dari `dataLayer`.

## 1. Prasyarat

- Container GTM di [tagmanager.google.com](https://tagmanager.google.com) (format ID: `GTM-XXXXXXX`)
- Akses **Cloudflare Pages** → project AppVibe → **Settings** → **Environment variables**

## 2. Environment variables (production)

| Variable | Production | Preview / local |
|----------|------------|-----------------|
| `VITE_ENABLE_ANALYTICS` | `true` | `false` (default) |
| `VITE_GTM_ID` | `GTM-NFJ5M7W4` | kosong |

**Penting:** Setelah mengubah env di Cloudflare, **trigger deploy ulang** (rebuild) agar Vite meng-inline nilai baru.

Contoh `.env.local` untuk uji lokal (opsional):

```env
VITE_ENABLE_ANALYTICS=true
VITE_GTM_ID=GTM-NFJ5M7W4
```

Tanpa kedua nilai valid, GTM **tidak** dimuat (zero overhead).

## 3. Yang sudah di codebase

- **Snippet resmi Google** disuntik ke `dist/index.html` saat build (`vite.config.ts`): script di awal `<head>`, `<noscript>` setelah `<body>` — container **`GTM-NFJ5M7W4`**.
- `initGtm()` — `dataLayer` + `app_init` (tanpa duplikasi script jika HTML sudah berisi GTM).
- `src/lib/analytics.ts` — `trackEvent()` → `window.dataLayer`
- `AnalyticsRouteListener` — `page_view` tiap navigasi SPA
- CTA WhatsApp, form, demo, portfolio, dll. memanggil `trackEvent`

## 4. Event names (Custom Event di GTM)

| Event | Kapan | Payload umum |
|-------|--------|----------------|
| `page_view` | Setiap route change | `page_path`, `page_lang`, `page_title` |
| `cta_whatsapp_click` | Klik tombol WA | `location` (string unik per tombol) |
| `contact_form_submit` | Submit form kontak/demo | `form`, `need`, `budget`, … |
| `portfolio_view` | Buka case study | `slug`, `type` |
| `demo_open` | Buka demo | `slug`, `location`, `status` |
| `service_card_click` | Klik kartu layanan | `service_id`, … |
| `industry_card_click` | Klik kartu industri | … |
| `lead_status_change` | Ubah status lead (demo) | `id`, `status`, `backend` |
| `auth_mock_submit` | Login mock dashboard | `source` |
| `lang_switch` | Ganti ID/EN | `from_lang`, `to_lang`, `page_path` |
| `blog_share_click` | Share artikel blog | `network`, `page_path` |
| `app_init` | Sekali saat GTM load | `app_name` |

Setiap push juga menyertakan `event_timestamp_ms`.

## 5. Setup GTM (disarankan)

### 5.1 Tag GA4 Configuration

1. **Tags** → New → **Google Analytics: GA4 Configuration**
2. Measurement ID dari GA4 property
3. Trigger: **All Pages** (untuk first load)

### 5.2 Tag GA4 Event — `page_view` (SPA)

1. **Tags** → GA4 Event
2. Event name: `page_view`
3. Trigger: **Custom Event** → Event name: `page_view`
4. Event parameters (Data Layer Variable):
   - `page_path` → `{{dlv - page_path}}`
   - `page_lang` → `{{dlv - page_lang}}`

Buat **Data Layer Variables** di GTM untuk setiap key yang ingin dikirim ke GA4.

### 5.3 Trigger untuk conversion

Contoh trigger **Custom Event**:

- Event name equals `cta_whatsapp_click` → tag GA4 event `whatsapp_cta` (atau gunakan nama sama)
- Event name equals `contact_form_submit` → lead event

Gunakan **location** dari dataLayer untuk membedakan hero vs footer vs blog.

### 5.4 Preview & Debug

1. GTM **Preview** mode → buka `https://appvibe.web.id`
2. Tab **Tag Assistant** — pastikan container load
3. Console: `window.dataLayer` — harus terisi setelah klik CTA / pindah halaman
4. Di dev (`npm run dev`), event tetap di-log `[analytics]` meski GTM off

## 6. Meta Pixel (opsional)

Di GTM tambahkan tag **Meta Pixel** dengan trigger Custom Event yang sama (`cta_whatsapp_click`, `contact_form_submit`). Tidak perlu ubah kode situs.

## 7. Privasi & consent (opsional)

Saat ini tidak ada cookie banner. Jika diperlukan CMP:

- Load GTM hanya setelah consent, atau
- Gunakan **Consent Mode v2** di GTM + integrasi CMP nanti

Default: analytics off sampai env production di-set.

## 8. Checklist go-live

- [ ] `VITE_ENABLE_ANALYTICS=true` + `VITE_GTM_ID` di Cloudflare **Production**
- [ ] Redeploy sukses
- [ ] View Source / Network: request ke `googletagmanager.com/gtm.js?id=GTM-…`
- [ ] `page_view` saat navigasi antar halaman (bukan hanya refresh)
- [ ] Klik WA homepage → `cta_whatsapp_click` di dataLayer
- [ ] GA4 Realtime menampilkan traffic (jika tag GA4 sudah dipublish)

## 9. Troubleshooting

| Gejala | Penyebab |
|--------|----------|
| Tidak ada GTM request | Env false/kosong atau ID salah format |
| Hanya 1 page_view | Trigger GA4 hanya All Pages — tambah Custom Event `page_view` |
| Double page_view | Jangan pakai History Change GTM + SPA listener tanpa dedupe — cukup custom `page_view` dari app |
| Event di dev tidak ke GA | Normal — aktifkan env lokal jika perlu uji GA4 |

Lihat juga: `docs/08-DEPLOYMENT.md` §12, `docs/DEPLOY-CHECKLIST.md`.