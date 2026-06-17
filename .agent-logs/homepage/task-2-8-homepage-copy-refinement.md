# Task 2.8 — Homepage Copy Refinement: Natural Business Language

## Waktu mulai
2026-06-10

## Tujuan task
Memperbaiki web copy homepage agar lebih natural, business-focused, dan tidak terlalu teknis — tanpa redesign layout atau mengubah routing.

## File yang dibaca
- `src/components/sections/HeroSection.tsx`
- `src/components/ui/RotatingText.tsx`
- `src/components/sections/FeaturedPortfolioSection.tsx`
- `src/components/portfolio/PortfolioCard.tsx`
- `src/components/sections/FinalCTASection.tsx`
- `src/components/sections/HeroVisualStack.tsx`
- `docs/11D-hero-copy-animated-headline-polish-report.md`
- `docs/deferred-items.md`

## Perubahan copy

### Hero
- Headline base: `Website yang membuat bisnis Anda lebih mudah` + rotating words baru
- Rotating words: dipercaya., dipahami., dihubungi., dibagikan., dikembangkan.
- Subheadline AppVibe Studio (business-focused)
- Hero tags: Landing page promosi, Siap tracking iklan, Bisa dikembangkan

### Portfolio section
- Eyebrow: Portfolio
- Headline/subheadline business-friendly (tanpa screenshot, mock data, produk sungguhan)
- Badges: Company profile, Landing page, Booking CTA, Listing properti, Dashboard leads
- Section CTA: Lihat Semua Portfolio → `/portfolio`

### Portfolio card
- Hapus label "Live-style" dari preview showcase

### Final CTA
- Headline: lebih profesional
- Body: Mulai dari website yang rapi...

## Command yang dijalankan
```powershell
npm run typecheck   # PASS
npm run build       # PASS
# Route smoke       # PASS (7 routes)
```

## Hasil test
| Check | Hasil |
|-------|-------|
| `npm run typecheck` | PASS |
| `npm run build` | PASS |
| Route smoke | PASS |
| Istilah internal di homepage sections | Dihapus |

## Keputusan akhir
**Status: GO**

Copy refinement selesai sesuai spec. Build PASS. Portfolio routes tidak rusak. Animated headline tetap berjalan dengan fallback aman.

## Next recommended task
**Task 4 — Demo Index and Demo Shell Foundation**