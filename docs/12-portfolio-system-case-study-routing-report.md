# Task 3 — Portfolio System and Case Study Routing

## Status

**PARTIAL GO**

Portfolio system dan case study routing selesai; build lulus. `/demo/:slug` masih deferred. `npm run dev` tidak dijalankan (long-running).

---

## Summary

Sistem portfolio AppVibe Studio MVP selesai: halaman `/portfolio` dengan filter kategori dan pencarian, route `/portfolio/:slug` untuk 5 case study, komponen case study reusable, dan CTA "Lihat Studi Kasus" mengarah ke detail yang benar. Copy Bahasa Indonesia, business-focused, tanpa lorem ipsum.

---

## What changed

### Data & types
- `src/types/portfolio.ts` — tambah `PortfolioScreen`, `PortfolioFilterOption`
- `src/data/portfolio.ts` — lengkapi screens, problem/solution/value untuk 5 portfolio
- `src/lib/portfolio.ts` — filter helpers, `getPortfolioBySlug`, category filters (new)

### Portfolio list
- `src/pages/PortfolioPage.tsx` — hero, filter, search, grid, CTA
- `src/components/portfolio/PortfolioFilter.tsx` (new)
- `src/components/portfolio/PortfolioGrid.tsx` (new)
- `src/components/portfolio/PortfolioCard.tsx` — case study ke `/portfolio/:slug`, demo ke `/demo`

### Case study
- `src/pages/PortfolioDetailPage.tsx` (new)
- `CaseStudyLayout`, `CaseStudyHero`, `CaseStudyProblemSolution`
- `FeatureGrid`, `UserFlow`, `ScreensPreview`, `BusinessValueSection`, `CaseStudyCTA`

### Router
- `src/app/router.tsx` — route `/portfolio/:slug` → `PortfolioDetailPage`
- Invalid slug → `NotFoundPage`

---

## Verification

| Command / Route | Result |
|-----------------|--------|
| Preflight typecheck/build | PASS |
| Post typecheck | PASS |
| Post build | PASS |
| `npm run dev` | NOT RUN |
| `/portfolio` | Structural PASS |
| `/portfolio/company-profile` | Structural PASS |
| `/portfolio/webinar-landing` | Structural PASS |
| `/portfolio/klinik` | Structural PASS |
| `/portfolio/properti` | Structural PASS |
| `/portfolio/lead-dashboard` | Structural PASS |
| Invalid slug → 404 | PASS (NotFoundPage) |
| Case study CTA WhatsApp | Via helper PASS |

---

## Environment

**Before:** Portfolio placeholder page; `/portfolio/:slug` deferred

**During:** Node v24.15.0, tanpa dependency baru

**After:** 1697 modules, CSS ~24 kB gzip, JS ~392 kB gzip

---

## Security notes

- Tidak ada secret ditambahkan
- Tidak ada testimoni palsu sebagai klien nyata
- Tidak ada klaim omzet/ranking berlebihan
- Analytics dev-only saat disabled

---

## Files changed

**New:** `src/lib/portfolio.ts`, `PortfolioFilter.tsx`, `PortfolioGrid.tsx`, `CaseStudy*.tsx` (8 files), `PortfolioDetailPage.tsx`

**Updated:** `portfolio.ts` (data/types), `PortfolioCard.tsx`, `PortfolioPage.tsx`, `router.tsx`, `deferred-items.md`

**Docs:** `docs/12-portfolio-system-case-study-routing-report.md`, `.agent-logs/portfolio/task-3-*.md`, `README.md`

---

## Remaining blockers

- `/demo/:slug` masih deferred (CTA "Buka Demo" → `/demo`)
- Thumbnail gambar masih CSS placeholder
- Verifikasi visual manual belum dilakukan

---

## Rollback

1. Revert `src/data/portfolio.ts`, `src/types/portfolio.ts`, `src/lib/portfolio.ts`
2. Revert `src/pages/PortfolioPage.tsx`, hapus `PortfolioDetailPage.tsx`
3. Revert `src/components/portfolio/*` baru/diubah
4. Revert `src/app/router.tsx`
5. Restore `docs/deferred-items.md` Task 2 state
6. Verify: `npm run typecheck && npm run build`

---

## Next recommended task

**Task 4 — Demo Index and Demo Shell Foundation**