# Pre-deploy checklist — AppVibe Studio (post Sprint 11)

> Cloudflare Pages target. See `docs/08-DEPLOYMENT.md` for full guide.

## Local gates (required)

```bash
npm install
npm run typecheck
npm run build
npm run preview   # optional: http://localhost:4173
```

## Environment (production)

Copy from `.env.example` into Cloudflare Pages → Settings → Environment variables:

| Variable | Production example | Notes |
|----------|-------------------|--------|
| `VITE_APP_NAME` | AppVibe Studio | |
| `VITE_SITE_URL` | `https://appvibe.web.id` | Used for SEO / sitemap |
| `VITE_WHATSAPP_NUMBER` | `6285179595302` | No `+`, no spaces |
| `VITE_ENABLE_ANALYTICS` | `false` | Set `true` + GTM when ready |
| `VITE_GTM_ID` | (empty) | |
| `VITE_SUPABASE_URL` | (optional) | Lead dashboard live backend |
| `VITE_SUPABASE_ANON_KEY` | (optional) | |
| `VITE_SUPABASE_SHOWCASE_TENANT_ID` | (optional) | |

## Cloudflare Pages build

```txt
Build command:     npm run build
Output directory:  dist
Node version:      20
Root:              /
```

SPA: `public/_redirects` → `/* /index.html 200` (already in repo).

## i18n smoke (ID + EN)

| Route ID | Route EN |
|----------|----------|
| `/` | `/en` |
| `/layanan` | `/en/services` |
| `/portfolio` | `/en/portfolio` |
| `/portfolio/company-profile` | `/en/portfolio/company-profile` |
| `/demo` | `/en/demos` |
| `/demo/company-profile` | `/en/demos/company-profile` |
| `/demo/klinik` | `/en/demos/klinik` |
| `/kontak` | `/en/contact` |

Check: language toggle, no `[object Object]`, WhatsApp opens with correct number, refresh on deep links works.

## Post-deploy

- [ ] Custom domain + HTTPS
- [ ] `robots.txt` sitemap URL matches `VITE_SITE_URL`
- [ ] Founder mobile pass on homepage + one demo