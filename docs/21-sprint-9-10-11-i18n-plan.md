# Sprint 9–11 Plan & Status

> **Living document** — diperbarui setiap sesi. Ini single source of truth untuk
> pekerjaan AppVibe Studio v2 sejak audit awal Juni 2026.
>
> Update terakhir: 2026-06-17 — Tier A complete (typecheck+build pass). Tier B complete; gates pass (typecheck + build).

---

## Konteks besar

Audit multi-agent akhir Mei 2026 menghasilkan tiered recommendations untuk repo
AppVibe Studio v2 (React 19 + Vite 6 + TypeScript agency website targeting
Indonesian UMKM). Tiga sprint disepakati secara bertahap:

- **Sprint 9** — Pre-launch hardening (blockers + quick wins)
- **Sprint 10** — Wow moments (View Transitions, Supabase Realtime, /uses, NPM)
- **Sprint 11** — Full ID/EN i18n dengan URL prefix `/en/...`

---

## ✅ Sprint 9 — Pre-launch hardening (COMPLETED)

| Item | File / lokasi |
|---|---|
| `.env.example` dengan WhatsApp `6285179595302` | `.env.example` |
| ContactForm refactor: validate-only → redirect WA | `src/components/contact/ContactForm.tsx` |
| AboutFounder: Bima Putra Sena + bio + LinkedIn | `src/components/about/AboutFounder.tsx` |
| Demos status sync (3 coming-soon → live) | `src/data/demos.ts` |
| IndustriesGrid anchor fix | `src/components/industries/IndustriesGrid.tsx` |
| DemoNavbar `<Link to="#top">` → `<a href="#top">` | `src/components/demos/DemoNavbar.tsx` |
| DemoDetailPage hapus label "配套" | `src/pages/DemoDetailPage.tsx` |
| NotFoundPage `<a>` → `<Link>` | `src/pages/NotFoundPage.tsx` |
| tailwind.config.ts hapus duplikat `brand.surface`/`brand.gray` | `tailwind.config.ts` |
| HeroSection H1 standardization | `src/components/sections/HeroSection.tsx` |
| HeroVisualStack trust-led stats | `src/components/sections/HeroVisualStack.tsx` |
| scroll-margin-top untuk anchor offset | `src/styles/globals.css` |
| PWA basics (manifest + meta) | `public/site.webmanifest`, `index.html` |

---

## ✅ Sprint 10 — Wow moments (COMPLETED)

### Track 1: View Transitions API + scroll-driven animations
- `src/styles/globals.css` — VT rules, scroll-timeline, prefers-contrast
- `src/components/ui/Button.tsx` — prop `viewTransition`
- `src/components/portfolio/PortfolioCard.tsx`, `CaseStudyHero.tsx`
- `src/components/demos/DemoCard.tsx`, `DemoShell.tsx`
- `src/pages/DemoDetailPage.tsx` — VT names
- 4 demo pages pass slug to DemoShell

### Track 2: Lead Dashboard real backend (Supabase + Realtime)
- `src/lib/supabase.ts`, `src/types/database.ts`
- `src/hooks/useShowcaseLeads.ts` — Realtime subscriptions
- `src/components/demos/lead-dashboard/LeadDashboardLiveBadge.tsx`
- `src/pages/demos/LeadDashboardDemoPage.tsx` — refactor pakai useShowcaseLeads
- `supabase/schema.sql`, `scripts/seed-leads.ts`
- Graceful fallback (jalan tanpa env vars via mock data)
- Verified: 2-tab Realtime sync working

### Track 3: Polish
- `vite.config.ts` — manualChunks supabase-vendor
- `src/pages/UsesPage.tsx` — halaman dev-stack
- `packages/rotating-text/*` — NPM package scaffold
- `docs/19-supabase-setup-guide.md`
- `docs/20-npm-publish-guide.md`

---

## ✅ Sprint 11 — i18n ID/EN (COMPLETED)

### Strategy
- **URL prefix**: `/` (ID, default) dan `/en/...` (EN) — best SEO
- **Dictionary pattern**: hybrid
  - UI chrome → `dict.pages.*.*` via `useDict()`
  - Content data → inline `{ id, en }` per field via `Localized<T>` + `[lang]`
- **Slug canonical** (tidak diterjemahkan) — kurangi maintenance
- **AI-drafted EN**, formal agency tone
- **hreflang** untuk SEO: id, en, x-default→id

### Arsitektur i18n
```
src/i18n/
├── types.ts            # Lang, LANGS, DEFAULT_LANG, OG_LOCALE
├── localized.ts        # Localized<T>, pick(), same()
├── dictionaries.ts     # aggregated dict
├── LangContext.ts
├── LangProvider.tsx
├── use-lang.ts
├── use-dict.ts
└── locales/
    ├── id/
    │   ├── common.ts   # CommonDict type + ID dict
    │   └── pages.ts    # PagesDict type + ID page copy
    └── en/
        ├── common.ts   # EN dict (typed as CommonDict)
        └── pages.ts    # EN page copy (typed as PagesDict)

src/lib/
├── routes.ts           # lang-aware routes.home(lang), resolveRoute, getEquivalentPath
├── seo.ts              # applyPageMeta + hreflang
└── whatsapp.ts         # getDefaultConsultationMessage(lang), dll

src/components/layout/LanguageToggle.tsx
src/app/router.tsx      # split tree: idChildren + enChildren + LangProvider wrappers
```

### Phase status

| Phase | Item | Status |
|---|---|---|
| 1 | Infra (types, dicts, routes, seo, whatsapp, toggle, router) | ✅ |
| 1.6 | sitemap.xml hreflang (36 URLs) | ✅ |
| 2 | Refactor chrome + 11 pages + 5 demos + hero + sub-components pakai useDict | ✅ |
| 2-fix | Bug fix `routes.xxx` → `routes.xxx(lang)` di 7 file (fix "href.startsWith") | ✅ |
| 2-fix | Type widening CommonDict/PagesDict (satisfies, bukan as const) | ✅ |

### Tier A — file-file yang harus dikerjakan di Phase 3
| Tier | File | Ukuran | Konten |
|---|---|---|---|
| A (small) | process.ts | 1.5 KB | 6 langkah kerja |
| A (small) | testimonials.ts | 1.7 KB | 3 scenario quote |
| A (small) | faq.ts | 2.5 KB | 10 FAQ |
| A (small) | industries.ts | 3.3 KB | 8 industri |
| A (small) | services.ts | 3.8 KB | 4 layanan |
| A (medium) | demos.ts | 3.8 KB | 5 demo summaries |
| A (large) | portfolio.ts | 27 KB | 5 case studies lengkap |

### Tier B — Phase 4 (user picked "Tier A + B — Semua")

Demo content files, ~47 file, ~85KB. Brand fiktif UMKM Indonesia:

| Demo | File |
|---|---|
| company-profile | brand, services, projects, FAQ, testimonials, dst (11 file) |
| klinik | services, experts, schedule, FAQ (8 file) |
| lead-dashboard | 6 file + 50 lead mock data |
| properti | listings, brand, FAQ, form, dst (10 file) |
| webinar-landing | campaign, agenda, speakers, dst (12 file) |

### Type system pattern
```ts
// src/i18n/localized.ts
export type Localized<T> = { id: T; en: T };
export function pick<T>(value: Localized<T>, lang: Lang): T {
  return value[lang];
}
export function same<T>(value: T): Localized<T> {
  return { id: value, en: value };
}
```

Data file shape:
```ts
export type ServiceItem = {
  id: string;
  title: Localized<string>;
  features: Localized<string[]>;
  // ...
};
```

Consumer pattern:
```tsx
const { lang } = useLang();
<h3>{service.title[lang]}</h3>
{service.features[lang].map(...)}
```

---

## 🔻 Deferred items (di luar Sprint 11)

- Enum refactor: `categoryMapping` di IndustriesFilter masih hardcoded ID
  (`"jasa-profesional"`, `"kesehatan"`, dst). Bisa diganti enum stable
  (`professional`, `health`, dst) dengan label via dict.
- Login / Better Auth — **deferred** (optional product); see deferred-items.md
- Engineering blog — **Sprint 13 ✅** ()

---

## Catatan workflow

- **Typecheck wajib jalan** di setiap milestone besar sebelum lanjut file lain.
  Bug React #31 muncul karena data diubah tapi consumer belum — selalu
  perbaiki consumer di batch yang sama dengan data.
- **Prioritas: app harus jalan dulu** sebelum nambah scope. Kalau Phase 3.1
  selesai, app harus bisa dirender tanpa error React #31.
- **Tiap sesi**, update file ini di bagian "Phase status" supaya tetap akurat.

---

## Deploy

Lihat  untuk checklist Cloudflare Pages post–Sprint 11.

## Cara cek status cepat

```bash
# Run typecheck
npm run typecheck

# Run build
npm run build

# Run dev (test ID/EN toggle di browser)
npm run dev
# Buka http://localhost:5173 dan http://localhost:5173/en
```
