# Task 2.5 — Homepage Premium Redesign with UI/UX Pro Max Skill

## Waktu mulai
2026-06-10 (lanjutan sesi redesign premium homepage)

## Tujuan task
Mendesain ulang homepage AppVibe Studio agar terlihat lebih premium, modern, dan profesional untuk positioning developer/digital agency — tanpa mengubah stack, tanpa merusak sistem portfolio, dan tetap mempertahankan 9 section utama dengan copy Bahasa Indonesia baru.

## File yang dibaca
- `README.md`
- `docs/01-PRD.md` sampai `docs/12-portfolio-system-case-study-routing-report.md`
- `docs/deferred-items.md`
- `.agent-logs/foundation/task-0-project-bootstrap.md`
- `.agent-logs/foundation/task-1-design-system-layout.md`
- `.agent-logs/homepage/task-2-homepage-content-conversion.md`
- `.agent-logs/portfolio/task-3-portfolio-system-case-study-routing.md`
- `src/pages/HomePage.tsx`, `PortfolioPage.tsx`, `PortfolioDetailPage.tsx`
- Semua section homepage (`HeroSection` … `FinalCTASection`)
- `src/components/portfolio/*`, `src/components/ui/*`, `src/components/layout/*`
- `src/data/*.ts`, `src/lib/*.ts`
- `tailwind.config.ts`, `src/styles/globals.css`
- `.agent-tools/ui-ux-pro-max-skill/.claude/skills/ui-ux-pro-max/SKILL.md`
- `.agent-tools/ui-ux-pro-max-skill/quick-reference.md` (jika tersedia)

## Referensi UI/UX Pro Max yang dipakai
- **Repo:** `https://github.com/nextlevelbuilder/ui-ux-pro-max-skill` (clone ke `.agent-tools/ui-ux-pro-max-skill`)
- **Skill:** `ui-ux-pro-max/SKILL.md` — design intelligence untuk landing page, agency, bento grid, glassmorphism, dark mode, accessibility
- **Arah visual dipilih:**
  - Premium digital agency / modern SaaS × developer studio
  - Palette: dark navy `#0F172A`, electric blue `#2563EB`, violet `#7C3AED`, cyan `#06B6D4`, white
  - Typography: Plus Jakarta Sans, bold editorial headlines
  - Visual language: gradient mesh hero, glass cards, bento grids, layered mockups, subtle grid pattern, glow accents
- **Alasan:** Cocok untuk AppVibe Studio yang perlu naik persepsi dari template SaaS biasa ke studio digital serius, sambil tetap mudah dipahami UMKM.
- **Yang diterapkan:** Hero mesh + mockup stack, bento cards (problem/solution/services), dark showcase portfolio section, modern FAQ accordion, high-impact final CTA card, navbar/footer polish. Skill hanya referensi — tidak di-import ke runtime bundle.

## Masalah visual existing (audit)
1. Hero terlalu flat/generic, kurang menunjukkan capability developer studio
2. Mockup visual kurang premium (placeholder gradient sederhana)
3. Problem/solution section terlalu datar, hierarchy lemah
4. Service cards seperti template SaaS standar
5. Portfolio section tidak terasa showcase agency
6. Industries/process kurang visual dan editorial
7. FAQ accordion basic, kurang premium
8. Final CTA kurang high-impact
9. Copy masih terlalu “website proper”, belum cukup sharp untuk agency/developer
10. Navbar/footer belum memperkuat brand premium

## Perubahan yang dilakukan

### Design foundation
- `tailwind.config.ts` — hero-mesh, grid-pattern, glow shadows, float/pulse animations
- `src/styles/globals.css` — `.mesh-hero`, `.glass-card`, `.premium-eyebrow`, `.bento-card`, `.showcase-card`, reduced-motion
- `.gitignore` — tambah `.agent-tools/`

### Data copy (Task 2.5 spec)
- `src/data/services.ts` — copy premium 4 layanan
- `src/data/process.ts` — 6 langkah: Discovery → Launch-ready
- `src/data/faq.ts` — jawaban dipoles (10 FAQ tetap)

### Section redesign (9 section tetap ada)
- `HeroSection.tsx` + **baru** `HeroVisualStack.tsx` — dark mesh hero, layered browser/phone mockup, stat cards, label chips, stats row
- `ProblemSection.tsx` — editorial split layout, 5 numbered problem cards
- `SolutionSection.tsx` — 4-pillar bento (presence → scalable foundation)
- `ServicesSection.tsx` — bento service cards dengan icon, badge, feature chips
- `FeaturedPortfolioSection.tsx` — dark showcase section + intro badges
- `IndustriesSection.tsx` — compact premium grid dengan industry icons
- `ProcessSection.tsx` — alternating timeline desktop / stacked mobile
- `FAQSection.tsx` — modern accordion dengan numbering, semua jawaban expandable
- `FinalCTASection.tsx` — gradient card dengan glow, proof points, CTA kuat

### Portfolio & layout
- `PortfolioCard.tsx` — tambah `variant="showcase"` untuk homepage; CSS mini preview per slug; CTA "Lihat Studi Kasus" tetap `routes.portfolioDetail(slug)`; "Buka Demo" tetap `routes.demo`
- `Navbar.tsx` — logo mark, translucent sticky, active state gradient
- `Footer.tsx` — brand statement baru sesuai spec

### Tidak diubah (sesuai scope)
- `HomePage.tsx` — komposisi 9 section sama
- `PortfolioPage.tsx`, `PortfolioDetailPage.tsx` — tidak disentuh
- `/demo/:slug` — tidak dibuat (deferred Task 4/5)

## Command yang dijalankan
```powershell
cd "D:\Coding\AppVibe v2"
npm run typecheck   # PASS
npm run build       # PASS
npm run dev         # RUN — port 5174 (5173 sudah dipakai)
# Route smoke test via Invoke-WebRequest — semua 200
```

## Hasil test
| Check | Hasil |
|-------|-------|
| `npm run typecheck` | PASS |
| `npm run build` | PASS |
| `npm run dev` | RUN (http://localhost:5174) |
| Route `/` | 200 |
| Route `/portfolio` | 200 |
| Route `/portfolio/company-profile` | 200 |
| Route `/portfolio/webinar-landing` | 200 |
| Route `/portfolio/klinik` | 200 |
| Route `/portfolio/properti` | 200 |
| Route `/portfolio/lead-dashboard` | 200 |
| Route `/demo` | 200 |
| Visual desktop check (browser) | NOT RUN — dev server aktif, smoke HTTP only |
| Visual mobile check (browser) | NOT RUN |

## Blocker
Tidak ada blocker teknis. Visual browser check manual belum dilakukan di sesi ini (hanya HTTP smoke + build verification).

## Keputusan akhir
**Status: PARTIAL GO**

Homepage premium redesign selesai, copy baru diterapkan, build PASS, portfolio routes tidak rusak, CTA routing sesuai spec. Visual check browser desktop/mobile belum diverifikasi manual — direkomendasikan founder buka `http://localhost:5173` atau `5174` untuk final visual sign-off.

## Next recommended task
**Task 4 — Demo Index and Demo Shell Foundation** (`/demo/:slug` routes, demo shell, thumbnail assets opsional)