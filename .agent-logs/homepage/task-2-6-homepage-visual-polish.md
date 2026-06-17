# Task 2.6 — Homepage Visual Polish & Conversion QA

## Waktu mulai
2026-06-10

## Tujuan task
Memoles homepage hasil Task 2.5 agar lebih premium, kontras, scan-friendly, dan kuat secara conversion — tanpa rebuild total dan tanpa merusak portfolio routes.

## File yang dibaca
- `README.md`
- `docs/11B-premium-homepage-redesign-report.md`
- `docs/12-portfolio-system-case-study-routing-report.md`
- `docs/deferred-items.md`
- `src/pages/HomePage.tsx`
- `src/components/sections/*` (Hero, Services, Portfolio, Process, FAQ, Final CTA)
- `src/components/layout/MobileStickyCTA.tsx`, `Navbar.tsx`, `Footer.tsx`, `PageShell.tsx`
- `src/components/portfolio/PortfolioCard.tsx`
- `src/data/services.ts`, `process.ts`, `faq.ts`
- `src/lib/routes.ts`, `whatsapp.ts`
- `src/styles/globals.css`, `tailwind.config.ts`

## Masalah visual dari QA Task 2.5
1. Hero terlalu pucat/kurang kontras
2. Sticky CTA mobile full-width white bar mengganggu
3. Portfolio showcase kurang visual/premium
4. Service cards terlalu panjang
5. Process section terlalu polos
6. FAQ closed items terlalu tinggi
7. Final CTA kurang kuat
8. CTA secondary "Lihat Portfolio Demo" rancu
9. Stat "0 Backend wajib" terlalu teknis

## Perubahan yang dilakukan

### Hero & visual stack
- `tailwind.config.ts` — hero-mesh lebih gelap dan kontras
- `globals.css` — overlay gelap pada `.mesh-hero::after`
- `HeroSection.tsx` — copy baru, headline putih/kontras, CTA secondary → `/portfolio` "Lihat Portfolio"
- `HeroVisualStack.tsx` — mockup shadow/ring lebih kuat, floating cards dark glass, phone ke kanan bawah, stats non-teknis

### Mobile sticky CTA
- `MobileStickyCTA.tsx` — floating pill gradient, rounded-full, max-w 320px, bottom center
- `PageShell.tsx` — `pb-24` untuk clearance mobile

### Services
- `ServicesSection.tsx` — layout compact: icon+title inline, 3 fitur checklist, hapus chip idealFor panjang

### Portfolio showcase
- `PortfolioCard.tsx` — slug-specific CSS previews, `featured` prop, `compact` mode untuk grid samping
- `FeaturedPortfolioSection.tsx` — bento layout (1 featured besar + 4 compact), CTA "Lihat Semua Demo"

### Process, FAQ, Final CTA
- `ProcessSection.tsx` — horizontal stepper desktop + outcome badges, mobile compact list
- `FAQSection.tsx` — closed items lebih rendah (`py-3`), conditional open padding, hapus grid animation kosong
- `FinalCTASection.tsx` — copy baru high-impact, border glow, CTA secondary → `/portfolio`

## Command yang dijalankan
```powershell
cd "D:\Coding\AppVibe v2"
npm run typecheck   # PASS (setelah fix unused import)
npm run build       # PASS
# Route smoke test HTTP 5174
```

## Hasil test
| Check | Hasil |
|-------|-------|
| `npm run typecheck` | PASS |
| `npm run build` | PASS |
| Route smoke (8 routes) | PASS |
| Desktop visual check | NOT RUN |
| Mobile visual check | NOT RUN |

## Blocker
Tidak ada blocker teknis. Visual browser QA manual belum dilakukan di sesi agent.

## Keputusan akhir
**Status: PARTIAL GO**

Semua polish scope selesai, build PASS, portfolio routes tidak rusak. Direkomendasikan founder verifikasi visual di browser (1440px + 390px).

## Next recommended task
**Task 4 — Demo Index and Demo Shell Foundation**