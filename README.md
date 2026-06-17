# AppVibe Studio

Website & portfolio demo untuk agency pembuatan website, landing page, dan web app ringan — dibangun dengan pendekatan static-first dan data-driven.

## Stack

- React 19 + Vite 6 + TypeScript
- Tailwind CSS
- React Router
- Lucide React
- Deploy target: Cloudflare Pages

## Quick Start

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173).

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Typecheck

```bash
npm run typecheck
```

## Environment Variables

Salin `.env.example` ke `.env.local` dan sesuaikan nilainya:

```bash
cp .env.example .env.local
```

Variabel yang tersedia:

- `VITE_APP_NAME` — nama brand
- `VITE_SITE_URL` — URL situs (local atau production)
- `VITE_WHATSAPP_NUMBER` — nomor WhatsApp tanpa `+`
- `VITE_ENABLE_ANALYTICS` — `true` / `false`
- `VITE_GTM_ID` — Google Tag Manager ID (opsional)

Jangan commit `.env.local`.

## Dokumentasi

| File | Deskripsi |
|------|-----------|
| `docs/01-PRD.md` | Product requirements |
| `docs/02-ARCHITECTURE.md` | Arsitektur teknis & struktur folder |
| `docs/03-DESIGN-SYSTEM.md` | Design tokens & komponen |
| `docs/04-CONTENT-STRATEGY.md` | Strategi konten |
| `docs/05-PORTFOLIO-DEMO-SPEC.md` | Spesifikasi portfolio & demo |
| `docs/06-IMPLEMENTATION-PLAN.md` | Roadmap sprint |
| `docs/07-QA-CHECKLIST.md` | Checklist QA |
| `docs/08-DEPLOYMENT.md` | Panduan deploy Cloudflare Pages |
| `docs/09-project-bootstrap-report.md` | Laporan Task 0 bootstrap |
| `docs/10-design-system-layout-report.md` | Laporan Task 1 design system |
| `docs/11-homepage-content-conversion-report.md` | Laporan Task 2 homepage |
| `docs/11B-premium-homepage-redesign-report.md` | Laporan Task 2.5 premium redesign |
| `docs/11C-homepage-visual-polish-report.md` | Laporan Task 2.6 visual polish |
| `docs/11D-hero-copy-animated-headline-polish-report.md` | Laporan Task 2.7 animated headline |
| `docs/11E-homepage-copy-refinement-report.md` | Laporan Task 2.8 copy refinement |
| `docs/12-portfolio-system-case-study-routing-report.md` | Laporan Task 3 portfolio |
| `docs/13A-company-profile-case-study-report.md` | Laporan Task 3A company profile case study |
| `docs/13B-company-profile-uiux-blueprint.md` | Blueprint resmi Arunika Konsultan + gap review (Task 3A.1) |
| `docs/13C-klinik-case-study-report.md` | Laporan Task 3C klinik case study |
| `docs/13B-webinar-landing-case-study-report.md` | Laporan Task 3B webinar landing case study |
| `docs/13D-properti-case-study-report.md` | Laporan Task 3D properti case study |
| `docs/13E-lead-dashboard-case-study-report.md` | Laporan Task 3E lead dashboard case study |
| `docs/14-demo-index-and-shell-foundation-report.md` | Laporan Task 4 demo index + demo shell |
| `docs/15-demo-pages-batch-1-report.md` | Laporan Task 5 demo Batch 1 (Company Profile + Webinar Landing full) |
| `docs/16-demo-pages-batch-2-report.md` | Laporan Task 6 demo Batch 2 (Klinik + Properti + Lead Dashboard full) |
| `docs/17-sprint-7-contact-seo-polish-report.md` | Laporan Sprint 7 (4 page full + SEO + analytics polish) |
| `docs/deferred-items.md` | Item ditunda ke task berikutnya |

## Struktur Project (ringkas)

```txt
src/
  app/           App shell & router
  components/    UI, layout, sections, portfolio, demos
  data/          Konten data-driven (Sprint 2+)
  lib/           Helper: routes, whatsapp, seo, analytics, cn
  pages/         Halaman route
  styles/        Global CSS + Tailwind
public/
  images/        Asset statis
  _redirects     SPA routing untuk Cloudflare Pages
```

## Komponen UI & Layout (Task 1)

**UI:** `Button`, `Card`, `Badge`, `Container`, `SectionHeader`, `MockupFrame`, `StatCard`, `FeatureCard`, `TestimonialCard`

**Layout:** `Navbar`, `Footer`, `PageShell`, `MobileStickyCTA`, `PageHero`

## Status Implementasi

| Task | Status |
|------|--------|
| Task 0 — Project Bootstrap & Preflight | ✅ Selesai (PARTIAL GO) |
| Task 1 — Design System and Layout Foundation | ✅ Selesai (PARTIAL GO) |
| Task 2 — Homepage Content and Conversion Sections | ✅ Selesai (PARTIAL GO) |
| Task 2.5 — Homepage Premium Redesign | ✅ Selesai (PARTIAL GO) |
| Task 2.6 — Homepage Visual Polish & Conversion QA | ✅ Selesai (PARTIAL GO) |
| Task 2.7 — Hero Copy, Animated Headline & Portfolio Polish | ✅ Selesai (PARTIAL GO) |
| Task 2.8 — Homepage Copy Refinement | ✅ Selesai (GO) |
| Task 3 — Portfolio System and Case Study Routing | ✅ Selesai (PARTIAL GO) |
| Task 3A — Company Profile Premium Case Study | ✅ Selesai (GO) |
| Task 3A.1 — Company Profile Blueprint & Gap Review | ✅ Selesai (GO) |
| Task 3C — Klinik Premium Case Study | ✅ Selesai (GO, QA verified) |
| Task 3B — Webinar Landing Premium Case Study | ✅ Selesai (GO) |
| Task 3D — Properti Premium Case Study | ✅ Selesai (GO) |
| Task 3E — Lead Dashboard Premium Case Study | ✅ Selesai (GO) |
| Task 4 — Demo Index and Demo Shell Foundation | ✅ Selesai (PARTIAL GO) |
| Task 5 — Demo Pages Batch 1 (CP + Webinar full) | ✅ Selesai (GO) |
| Task 6 — Demo Pages Batch 2 (Klinik + Properti + LD) | ✅ Selesai (GO) |
| Sprint 7 — Contact, Services, Industries, About + SEO | ✅ Selesai (GO) |
| Sprint 8 — Final QA, Polish, Code Splitting, Deploy | ✅ Selesai (GO) |

## Agent Work Logs

Log pekerjaan agent tersimpan di `.agent-logs/`.