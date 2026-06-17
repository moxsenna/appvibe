# Task 2.7 — Hero Copy, Animated Headline & Portfolio Visual Polish

## Status
**PARTIAL GO**

Animated headline, hero copy revision, kontras hero, portfolio preview polish, dan floating CTA compact selesai. Build PASS. Visual browser check belum diverifikasi manual.

---

## Summary

Task 2.7 memoles homepage lanjutan fokus pada copywriting hero yang lebih tajam, animated rotating word aman (tanpa dependency besar), kontras dark premium, portfolio preview CSS lebih kaya, dan floating mobile CTA lebih compact.

---

## Animated headline

| Aspek | Implementasi |
|-------|--------------|
| **Component** | `src/components/ui/RotatingText.tsx` |
| **Hook** | `src/hooks/usePrefersReducedMotion.ts` |
| **Words** | dipercaya. · dihubungi. · dibagikan. · menerima inquiry. · berkembang digital. |
| **Interval** | 2100ms, fade 220ms |
| **Layout stability** | Invisible sizing span (`berkembang digital.`) mencegah layout shift |
| **Reduced motion** | Kata pertama saja, tanpa interval |
| **Fallback** | Initial render + noscript: `dipercaya.` |
| **Visual** | Gradient cyan/violet pada kata animasi; base headline putih solid |

---

## What changed

| File | Perubahan |
|------|-----------|
| `src/components/ui/RotatingText.tsx` | **Baru** — rotating word component |
| `src/hooks/usePrefersReducedMotion.ts` | **Baru** — reduced motion hook |
| `src/components/sections/HeroSection.tsx` | Copy final, animated headline, CTA `/portfolio` |
| `src/components/sections/HeroVisualStack.tsx` | Mockup kontras, tags baru |
| `src/components/portfolio/PortfolioCard.tsx` | Rich slug previews, hapus Buka Demo di showcase |
| `src/components/layout/MobileStickyCTA.tsx` | "Chat WhatsApp", compact dark pill |
| `src/components/sections/FinalCTASection.tsx` | Copy konsisten Task 2.7 |
| `tailwind.config.ts` | Hero-mesh lebih gelap |
| `src/styles/globals.css` | Overlay hero lebih kuat |
| `src/components/layout/PageShell.tsx` | `pb-20` mobile clearance |

---

## Verification

| Check | Result |
|-------|--------|
| `npm run typecheck` | PASS |
| `npm run build` | PASS |
| Desktop visual check | NOT RUN |
| Mobile visual check | NOT RUN |
| `/portfolio` + 5 slugs | PASS (HTTP 200) |
| CTA "Lihat Studi Kasus" → `/portfolio/:slug` | PASS |
| CTA secondary → `/portfolio` | PASS |
| "Buka Demo" removed from showcase | PASS |
| "Lihat Semua Demo" on default cards + section | PASS |
| Headline never empty | PASS (sizing + fallback) |
| Reduced motion | PASS (hook + CSS global) |

---

## Security notes

- Tidak ada secret, dependency besar, atau klaim berlebihan
- `/demo/:slug` tetap deferred

---

## Docs updated

- `docs/11D-hero-copy-animated-headline-polish-report.md`
- `.agent-logs/homepage/task-2-7-hero-copy-animated-headline-polish.md`
- `docs/deferred-items.md`
- `README.md`

---

## Remaining blockers

- Manual visual QA browser (desktop 1440px + mobile 390px)
- `/demo/:slug` — deferred Task 4

---

## Rollback

1. Hapus `RotatingText.tsx`, `usePrefersReducedMotion.ts`
2. Revert HeroSection, HeroVisualStack, PortfolioCard, MobileStickyCTA, FinalCTASection
3. Revert tailwind/globals hero tokens
4. Verify `npm run typecheck` && `npm run build`

**Rollback status:** Documented, not executed.

---

## Next recommended task

**Task 4 — Demo Index and Demo Shell Foundation**