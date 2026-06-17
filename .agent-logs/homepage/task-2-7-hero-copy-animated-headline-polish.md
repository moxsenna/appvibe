# Task 2.7 — Hero Copy, Animated Headline & Portfolio Visual Polish

## Waktu mulai
2026-06-10

## Tujuan task
Memperbaiki headline hero agar lebih tajam, menambahkan animated rotating word yang aman, memperkuat kontras hero, memperkaya portfolio preview, dan memoles floating CTA — tanpa rebuild total.

## File yang dibaca
- `README.md`
- `docs/11B-premium-homepage-redesign-report.md`
- `docs/11C-homepage-visual-polish-report.md`
- `docs/12-portfolio-system-case-study-routing-report.md`
- `docs/deferred-items.md`
- `src/components/sections/HeroSection.tsx`, `HeroVisualStack.tsx`
- `src/components/sections/FeaturedPortfolioSection.tsx`, `FinalCTASection.tsx`
- `src/components/layout/MobileStickyCTA.tsx`, `PageShell.tsx`
- `src/components/portfolio/PortfolioCard.tsx`
- `src/styles/globals.css`, `tailwind.config.ts`

## Perubahan yang dilakukan

### Animated headline
- **Baru:** `src/components/ui/RotatingText.tsx` — rotating words dengan fade, min-width via invisible sizing span
- **Baru:** `src/hooks/usePrefersReducedMotion.ts` — hook untuk `prefers-reduced-motion`
- 5 kata: dipercaya., dihubungi., dibagikan., menerima inquiry., berkembang digital.
- Interval 2100ms, fade 220ms
- Fallback statis: `dipercaya.` (index 0 + reduced motion)
- `<noscript>` fallback di HeroSection

### Hero copy & visual
- `HeroSection.tsx` — copy final Task 2.7, RotatingText di headline
- `HeroVisualStack.tsx` — mockup kontras lebih kuat, tags baru, floating cards darker
- `tailwind.config.ts` + `globals.css` — hero-mesh lebih gelap, overlay lebih kuat

### Mobile CTA
- `MobileStickyCTA.tsx` — "Chat WhatsApp", lebih compact (max-w 260px, py-2.5)
- `PageShell.tsx` — `pb-20` untuk clearance

### Portfolio preview
- `PortfolioCard.tsx` — slug-specific mini UI lebih kaya (5 slugs), background slate-950
- Showcase cards: hanya "Lihat Studi Kasus" (hapus Buka Demo)
- Default cards: "Lihat Semua Demo" menggantikan "Buka Demo"

### Final CTA
- `FinalCTASection.tsx` — copy konsisten Task 2.7

## Command yang dijalankan
```powershell
npm run typecheck   # PASS
npm run build       # PASS
# Route smoke test  # PASS (8 routes)
```

## Hasil test
| Check | Hasil |
|-------|-------|
| `npm run typecheck` | PASS |
| `npm run build` | PASS |
| Route smoke | PASS |
| Desktop visual | NOT RUN |
| Mobile visual | NOT RUN |

## Keputusan akhir
**Status: PARTIAL GO**

Semua scope Task 2.7 selesai. Build PASS. Portfolio routes tidak rusak. Visual browser QA manual belum dilakukan.

## Next recommended task
**Task 4 — Demo Index and Demo Shell Foundation**