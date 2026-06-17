# Import container GTM — AppVibe (`GTM-NFJ5M7W4`)

## File

```
gtm/GTM-NFJ5M7W4_appvibe_import.json
```

## Langkah di Google Tag Manager

1. Buka [tagmanager.google.com](https://tagmanager.google.com) → pilih container **`GTM-NFJ5M7W4`**.
2. **Admin** (ikon roda gigi) → **Import container**.
3. **Choose container file** → pilih `GTM-NFJ5M7W4_appvibe_import.json`.
4. **Choose workspace** → *Default Workspace* (atau workspace Anda).
5. **Choose an import option**:
   - **Merge** — disarankan jika container sudah ada isi (hanya menambah tag/trigger/variable baru).
   - **Overwrite** — hati-hati: mengganti workspace dengan isi file (jangan dipakai jika sudah ada tag penting lain).
6. **Confirm** → review conflict (jika ada) → **Complete**.

## Setelah import (wajib)

1. **Variables** → buka **`Const - GA4 Measurement ID`**.
2. Ganti `G-XXXXXXXXXX` dengan **Measurement ID** asli dari GA4  
   (Admin GA4 → Data streams → Web → Measurement ID).
3. **Submit** (kanan atas) → beri nama versi mis. `AppVibe GA4 + conversions` → **Publish**.

Tanpa **Publish**, Tag Assistant tetap tidak melihat Google tags.

## Isi container ini

| Komponen | Fungsi |
|----------|--------|
| **Google Tag - GA4 Config** | Load GA4 (`googtag`) — trigger Initialization |
| **GA4 Event - page_view** | Custom event `page_view` dari SPA + `page_path`, `page_lang` |
| **GA4 Event - whatsapp_cta** | Custom event `cta_whatsapp_click` → GA4 event `whatsapp_cta` + `cta_location` |
| **GA4 Event - generate_lead** | Custom event `contact_form_submit` → GA4 `generate_lead` + `form_name` |

### Custom Event triggers (nama harus sama dengan dataLayer)

- `page_view`
- `cta_whatsapp_click`
- `contact_form_submit`

## Uji

1. GTM **Preview** → URL `https://appvibe.web.id`
2. Navigasi antar halaman → tag **GA4 Event - page_view** harus fire.
3. Klik WhatsApp → **whatsapp_cta**.
4. GA4 **Realtime** → Events.

## Situs

Snippet GTM sudah di `index.html` (`GTM-NFJ5M7W4`). Pastikan deploy terbaru sudah live.

Lihat juga: `docs/GTM-ANALYTICS.md`.