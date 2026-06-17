# AppVibe Studio

Marketing site and interactive demo showcase for **AppVibe Studio** — websites, landing pages, and lightweight business apps for Indonesian SMEs and growing teams.

**Live:** deployed on [Cloudflare Pages](https://pages.cloudflare.com/) from `main` (connect repo → auto build on push).

| | |
|---|---|
| **Default locale** | Indonesian (`/`) |
| **English** | `/en/...` (URL prefix, hreflang) |
| **Repo** | [github.com/moxsenna/appvibe](https://github.com/moxsenna/appvibe) |

---

## What’s in the product

- **Marketing pages** — Home, Services, Portfolio (5 case studies), Industries, About, Contact, `/uses` (stack)
- **Demo index** — `/demo` with filter + search
- **5 full interactive demos** — company profile, webinar landing, clinic, property listings, lead dashboard (forms, FAQ, mock data, WhatsApp CTAs)
- **i18n** — UI chrome via dictionaries; content via `Localized<T>` in `src/data/*`
- **Lead dashboard (optional live)** — Supabase Realtime when env vars are set; otherwise static mock
- **Hero** — rotating headline with **typewriter** animation (respects `prefers-reduced-motion`)
- **SEO** — per-page meta, canonical URLs, hreflang, `sitemap.xml`
- **Analytics hooks** — GTM-ready via `VITE_ENABLE_ANALYTICS` / `VITE_GTM_ID`

---

## Stack

| Layer | Choice |
|--------|--------|
| UI | React 19, TypeScript, Tailwind CSS, Lucide |
| Build | Vite 6 |
| Routing | React Router 7 (SPA — `public/_redirects` for Cloudflare) |
| Backend (demo only) | Supabase (optional) |
| Hosting | **Cloudflare Pages** — `npm run build` → `dist/` |

---

## Quick start

```bash
npm install
cp .env.example .env.local   # edit WhatsApp, site URL, optional Supabase
npm run dev                    # http://localhost:5173
```

```bash
npm run typecheck
npm run build
npm run preview                # http://localhost:4173
```

### Environment variables

See `.env.example`. Required for production:

- `VITE_SITE_URL` — canonical base (e.g. `https://appvibe.web.id`)
- `VITE_WHATSAPP_NUMBER` — digits only, no `+` (e.g. `6285179595302`)

Optional: Supabase (`VITE_SUPABASE_*`) for live lead showcase; GTM when ready.

Never commit `.env.local`.

---

## Deploy (Cloudflare Pages)

Already wired if the GitHub project builds on push to `main`:

| Setting | Value |
|---------|--------|
| Build command | `npm run build` |
| Output directory | `dist` |
| Node | 20 |

Set production env vars in the Pages dashboard. Checklist: **`docs/DEPLOY-CHECKLIST.md`** · full guide: **`docs/08-DEPLOYMENT.md`**.

---

## Project layout

```txt
src/
  app/              Router (ID + EN trees, LangProvider)
  i18n/             Dictionaries, useLang, Localized<T>
  components/       layout, sections, portfolio, demos
  data/             services, portfolio, demos, industries, …
  lib/              routes, seo, whatsapp, analytics, supabase
  pages/            marketing + demo detail + 5 demo apps
public/             _redirects, sitemap, robots, OG fallback
packages/rotating-text/   (optional NPM scaffold)
docs/               PRD, architecture, sprint reports, i18n plan
```

---

## Documentation (high level)

| Doc | Purpose |
|-----|---------|
| `docs/21-sprint-9-10-11-i18n-plan.md` | Sprint status (i18n complete) |
| `docs/DEPLOY-CHECKLIST.md` | Pre/post deploy smoke |
| `docs/08-DEPLOYMENT.md` | Cloudflare setup |
| `docs/19-supabase-setup-guide.md` | Lead dashboard backend |
| `docs/deferred-items.md` | Backlog / non-MVP |

Older task reports (`docs/09`–`docs/18`) cover MVP build history.

---

## Implementation status (summary)

| Milestone | Status |
|-----------|--------|
| MVP site + 5 portfolio case studies | ✅ |
| 5 interactive demo apps | ✅ |
| Contact, services, industries, about | ✅ |
| Sprint 9–10 (hardening, View Transitions, Supabase, `/uses`) | ✅ |
| **Sprint 11 — full ID/EN i18n** | ✅ |
| Cloudflare Pages CI from GitHub | ✅ (auto deploy on `main`) |
| Sprint 12 — Better Auth (planned) | 🔻 |
| Sprint 13 — Engineering blog MDX (planned) | 🔻 |

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Vite dev server |
| `npm run build` | Typecheck + production bundle |
| `npm run typecheck` | `tsc -b --noEmit` |
| `npm run seed:leads` | Seed Supabase showcase tenant (needs env) |

---

## License & brand

Private project — **AppVibe Studio**. Founder: Bima Putra Sena (see About page).