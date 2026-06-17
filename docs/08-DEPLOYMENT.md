# 08-DEPLOYMENT.md — AppVibe Studio Deployment Guide

## 1. Deployment Overview

AppVibe Studio MVP is designed for **Cloudflare Pages**.

Architecture:

```txt
React + Vite + TypeScript + Tailwind
Static build output: dist/
Hosting: Cloudflare Pages
Backend: none for MVP
```

Deployment goal:

- fast,
- stable,
- low-cost,
- easy rollback,
- easy preview deploy.

---

## 2. Local Development

### 2.1 Install Dependencies

```bash
npm install
```

### 2.2 Run Development Server

```bash
npm run dev
```

Default local URL usually:

```txt
http://localhost:5173
```

### 2.3 Build Production

```bash
npm run build
```

### 2.4 Preview Production Build

```bash
npm run preview
```

---

## 3. Required NPM Scripts

`package.json` should include:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "typecheck": "tsc -b --noEmit"
  }
}
```

If using ESLint:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

---

## 4. Environment Variables

Create `.env.example`:

```txt
VITE_APP_NAME=AppVibe Studio
VITE_SITE_URL=https://appvibe.web.id
VITE_WHATSAPP_NUMBER=628xxxxxxxxxx
VITE_ENABLE_ANALYTICS=false
VITE_GTM_ID=
```

Create local file:

```txt
.env.local
```

Example:

```txt
VITE_APP_NAME=AppVibe Studio
VITE_SITE_URL=http://localhost:5173
VITE_WHATSAPP_NUMBER=6281234567890
VITE_ENABLE_ANALYTICS=false
VITE_GTM_ID=
```

Rules:

1. Do not commit `.env.local`.
2. Never put private secrets in frontend env.
3. All client env variables must start with `VITE_`.
4. WhatsApp number should be numeric country format without `+`.

---

## 5. Cloudflare Pages Setup

### 5.1 Create Project

1. Open Cloudflare Dashboard.
2. Go to **Workers & Pages**.
3. Choose **Create application**.
4. Select **Pages**.
5. Connect GitHub repository.
6. Choose the AppVibe Studio repo.

### 5.2 Build Settings

Recommended settings:

```txt
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: /
Node.js version: 20
```

If monorepo later:

```txt
Root directory: apps/web
```

For current MVP single repo, use root `/`.

### 5.3 Environment Variables in Cloudflare

Add:

```txt
VITE_APP_NAME=AppVibe Studio
VITE_SITE_URL=https://appvibe.web.id
VITE_WHATSAPP_NUMBER=628xxxxxxxxxx
VITE_ENABLE_ANALYTICS=false
VITE_GTM_ID=
```

Set production and preview variables if needed.

---

## 6. Custom Domain Setup

Recommended domain:

```txt
appvibe.web.id
```

Alternative:

```txt
studio.appvibe.web.id
www.appvibe.web.id
```

### 6.1 Add Domain in Cloudflare Pages

1. Open Pages project.
2. Go to **Custom domains**.
3. Add custom domain.
4. Follow Cloudflare DNS instructions.

### 6.2 DNS

If domain is already on Cloudflare, it may auto-configure.

If manual:

```txt
Type: CNAME
Name: appvibe or www
Target: <cloudflare-pages-subdomain>.pages.dev
Proxy: Enabled
```

Exact target should follow Cloudflare Pages instruction.

---

## 7. SPA Routing Configuration

React Router uses client-side routing. Cloudflare Pages must serve `index.html` for all routes.

Add file:

```txt
public/_redirects
```

Content:

```txt
/* /index.html 200
```

This ensures routes like `/portfolio/company-profile` work on refresh.

Acceptance:
- Open `/portfolio/company-profile` directly in browser.
- Refresh page.
- It should not show 404.

---

## 8. Robots and Sitemap

### 8.1 robots.txt

Create:

```txt
public/robots.txt
```

Suggested content:

```txt
User-agent: *
Allow: /

Sitemap: https://appvibe.web.id/sitemap.xml
```

### 8.2 Sitemap

MVP can add static `public/sitemap.xml` later.

Minimum routes to include:

```txt
/
 /layanan
 /portfolio
 /portfolio/company-profile
 /portfolio/webinar-landing
 /portfolio/klinik
 /portfolio/properti
 /portfolio/lead-dashboard
 /demo
 /industri
 /tentang
 /kontak
```

Demo pages may be included or excluded depending on SEO strategy.

---

## 9. Pre-Deploy Checklist

Run locally:

```bash
npm install
npm run build
npm run preview
```

Check:

- [ ] Build passes.
- [ ] Preview opens.
- [ ] Homepage works.
- [ ] Portfolio works.
- [ ] All case studies work.
- [ ] All demo pages work.
- [ ] Contact page works.
- [ ] WhatsApp CTA works.
- [ ] No lorem ipsum.
- [ ] No console error.
- [ ] Mobile layout acceptable.
- [ ] `_redirects` exists.
- [ ] `.env.local` is not committed.

---

## 10. Post-Deploy Smoke Test

After Cloudflare deploy:

### 10.1 Core URLs

Open:

```txt
https://appvibe.web.id/
https://appvibe.web.id/layanan
https://appvibe.web.id/portfolio
https://appvibe.web.id/portfolio/company-profile
https://appvibe.web.id/demo
https://appvibe.web.id/demo/company-profile
https://appvibe.web.id/kontak
```

### 10.2 Refresh Test

Refresh these direct routes:

```txt
/portfolio/company-profile
/demo/company-profile
/kontak
```

Expected:
- still loads page,
- no Cloudflare 404.

### 10.3 CTA Test

- [ ] Click homepage WhatsApp CTA.
- [ ] Click portfolio-specific WhatsApp CTA.
- [ ] Submit contact form.
- [ ] Confirm message is encoded correctly.
- [ ] Confirm WhatsApp number is correct.

### 10.4 Mobile Test

Test on actual phone if possible.

Checklist:
- [ ] Navbar works.
- [ ] CTA visible.
- [ ] Demo pages readable.
- [ ] Dashboard demo usable.
- [ ] No horizontal overflow.

---

## 11. Rollback

Cloudflare Pages keeps deployment history.

Rollback steps:

1. Open Cloudflare Pages project.
2. Go to Deployments.
3. Find previous successful deployment.
4. Click rollback/promote to production.

Use rollback if:
- production route broken,
- build shipped wrong env,
- critical CTA broken,
- homepage blank.

---

## 12. Analytics Deployment

Analytics is optional for MVP.

When ready:

### 12.1 GTM

Add env:

```txt
VITE_ENABLE_ANALYTICS=true
VITE_GTM_ID=GTM-XXXXXXX
```

Add GTM script safely in app/index if implemented.

### 12.2 Events

Recommended events:

```txt
cta_whatsapp_click
portfolio_view
demo_open
contact_form_submit
service_card_click
```

Use `src/lib/analytics.ts`.

### 12.3 Test

- Use browser console/dataLayer.
- Confirm event names.
- Confirm no duplicate events.
- Confirm CTA click event fires.

---

## 13. Future Backend Deployment

If later adding Cloudflare Worker for forms:

Recommended structure:

```txt
apps/web
apps/api
```

or:

```txt
src/
worker/
```

But for MVP, avoid backend.

Future form flow:

```txt
Website form -> Cloudflare Worker -> Supabase/Google Sheet -> WhatsApp/email notification
```

Future env secrets should be worker-side, not frontend.

---

## 14. Common Issues

### 14.1 Direct Route 404

Cause:
- missing `_redirects`

Fix:
- add `public/_redirects`
- content: `/* /index.html 200`
- rebuild and redeploy.

### 14.2 WhatsApp Link Not Working

Check:
- `VITE_WHATSAPP_NUMBER`
- no `+` sign,
- country code included,
- message encoded,
- helper used consistently.

### 14.3 Env Not Updating

Cause:
- Cloudflare env changed but deployment not rebuilt.

Fix:
- trigger new deployment.

### 14.4 Images Missing

Check:
- file in `public/images/...`
- path starts with `/images/...`
- case-sensitive filename.

### 14.5 Build Fails on Cloudflare

Check:
- Node version 20,
- lockfile committed,
- build command correct,
- TypeScript errors.

---

## 15. Deployment Definition of Done

Deployment is done only if:

- [ ] Cloudflare Pages build succeeds.
- [ ] Production URL opens.
- [ ] All key routes work.
- [ ] Direct refresh works.
- [ ] WhatsApp CTA works.
- [ ] Mobile check passed.
- [ ] No critical console errors.
- [ ] README has deployment notes.
- [ ] Any known issue documented.
