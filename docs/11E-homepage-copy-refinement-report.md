# Task 2.8 — Homepage Copy Refinement: Natural Business Language

## Status
**GO**

Web copy homepage diperbarui ke bahasa bisnis yang lebih natural. Build dan typecheck PASS. Portfolio routes tidak rusak.

---

## Summary

Task 2.8 adalah copy refinement kecil — tanpa redesign layout. Fokus: hero headline + rotating words lebih natural, portfolio section tanpa istilah developer (screenshot, mock data, live-style demo), CTA lebih jelas, dan final CTA diselaraskan.

---

## What changed

| File | Perubahan |
|------|-----------|
| `src/components/ui/RotatingText.tsx` | Words: dipercaya., dipahami., dihubungi., dibagikan., dikembangkan. |
| `src/components/sections/HeroSection.tsx` | Headline base `lebih mudah`, subheadline AppVibe Studio, noscript fallback |
| `src/components/sections/HeroVisualStack.tsx` | Hero tags business-friendly |
| `src/components/sections/FeaturedPortfolioSection.tsx` | Copy portfolio baru, badges, CTA → `/portfolio` |
| `src/components/portfolio/PortfolioCard.tsx` | Hapus label "Live-style" |
| `src/components/sections/FinalCTASection.tsx` | Headline & body copy Task 2.8 |

### Copy removed from homepage
- screenshot
- mock data
- live-style demo
- produk sungguhan
- Buka Demo (homepage sections)

---

## Verification

| Check | Result |
|-------|--------|
| `npm run typecheck` | PASS |
| `npm run build` | PASS |
| Route smoke | PASS |
| Headline tidak menggantung | PASS (sizing word `dikembangkan.`) |
| Reduced motion fallback | PASS (`dipercaya.`) |
| CTA Lihat Studi Kasus → `/portfolio/:slug` | PASS (unchanged) |
| Section CTA → `/portfolio` | PASS |

---

## Docs updated

- `docs/11E-homepage-copy-refinement-report.md`
- `.agent-logs/homepage/task-2-8-homepage-copy-refinement.md`
- `docs/deferred-items.md`
- `README.md`

---

## Remaining blockers

- `/demo/:slug` — deferred Task 4
- Istilah teknis di halaman portfolio detail (`BusinessValueSection`, dll.) — di luar scope homepage

---

## Rollback

Revert 6 files listed above. Verify `npm run typecheck` && `npm run build`.

**Rollback status:** Documented, not executed.

---

## Next recommended task

**Task 4 — Demo Index and Demo Shell Foundation**