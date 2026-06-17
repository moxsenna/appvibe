# Task 2.6 — Homepage Visual Polish & Conversion QA

## Status
**PARTIAL GO**

Polish visual dan conversion homepage selesai. Typecheck dan build PASS. Route portfolio tidak rusak. Visual browser check manual belum diverifikasi di sesi agent.

---

## Summary

Task 2.6 memoles homepage hasil Task 2.5 tanpa rebuild total. Fokus: kontras hero, floating mobile CTA, service cards lebih ringkas, portfolio showcase lebih visual (bento + slug previews), process stepper premium, FAQ lebih compact, final CTA lebih kuat, dan CTA secondary diarahkan ke `/portfolio`.

---

## What changed

| Area | Perubahan |
|------|-----------|
| **Hero** | Mesh lebih gelap, headline/subheadline baru, kontras teks diperkuat, CTA secondary → "Lihat Portfolio" `/portfolio` |
| **Hero stats** | `5 Demo niche`, `4 Solusi digital`, `100% Mobile responsive`, `Bisa mulai bertahap` |
| **Hero mockup** | Shadow/ring lebih kuat, floating cards dark glass, phone tidak menutupi elemen utama |
| **MobileStickyCTA** | Floating pill gradient, bottom center, max-w 320px |
| **Services** | Compact: title + 3 fitur checklist, tanpa chip panjang |
| **Portfolio** | Bento layout (featured + 4 compact), slug-specific CSS previews |
| **Process** | Horizontal stepper desktop + outcome per step |
| **FAQ** | Closed items lebih rendah, padding conditional |
| **Final CTA** | Copy baru, border glow, secondary → `/portfolio` |

### Files changed
```
tailwind.config.ts
src/styles/globals.css
src/components/sections/HeroSection.tsx
src/components/sections/HeroVisualStack.tsx
src/components/sections/ServicesSection.tsx
src/components/sections/FeaturedPortfolioSection.tsx
src/components/sections/ProcessSection.tsx
src/components/sections/FAQSection.tsx
src/components/sections/FinalCTASection.tsx
src/components/portfolio/PortfolioCard.tsx
src/components/layout/MobileStickyCTA.tsx
src/components/layout/PageShell.tsx
```

---

## Verification

| Check | Result |
|-------|--------|
| `npm run typecheck` | PASS |
| `npm run build` | PASS |
| Desktop visual check | NOT RUN |
| Mobile visual check | NOT RUN |
| `/` | PASS (HTTP 200) |
| `/portfolio` | PASS |
| `/portfolio/:slug` (5 slugs) | PASS |
| `/demo` | PASS |
| CTA "Lihat Studi Kasus" → `/portfolio/:slug` | PASS (unchanged) |
| CTA secondary hero/final → `/portfolio` | PASS |
| Stat "0 Backend" removed | PASS |

---

## Security notes

- Tidak ada secret ditambahkan
- Tidak ada klaim berlebihan atau testimoni palsu
- Portfolio routes tidak diubah
- `/demo/:slug` tetap deferred

---

## Docs updated

- `docs/11C-homepage-visual-polish-report.md` (this file)
- `.agent-logs/homepage/task-2-6-homepage-visual-polish.md`
- `docs/deferred-items.md`
- `README.md`

---

## Remaining blockers

- Manual visual QA browser (desktop 1440px + mobile 390px) — founder sign-off
- `/demo/:slug` — deferred Task 4

---

## Rollback

1. Revert files listed above
2. Restore `PageShell.tsx` `pb-20`
3. Verify `npm run typecheck` && `npm run build`

**Rollback status:** Documented, not executed.

---

## Next recommended task

**Task 4 — Demo Index and Demo Shell Foundation**