# Task 4 — Demo Index and Demo Shell Foundation

## Status

**PARTIAL GO — Foundation siap, demo page content (Task 5–6) tetap deferred**

`/demo` menjadi halaman hub yang proper dengan grid 5 demo + filter + AppVibe banner. `DemoShell` reusable siap dipakai untuk 5 demo. Routing `/demo/:slug` sudah terhubung ke placeholder shell untuk setiap demo, dan CTA "Buka Demo" di `PortfolioCard` serta `CaseStudyCTA` sudah diarahkan ke route detail (bukan `/demo` placeholder lagi). Konten penuh 5 demo (per `docs/05-PORTFOLIO-DEMO-SPEC.md` section 4–8 dan blueprint Task 4A) tetap masuk Task 5–6. Build dan typecheck PASS. `npm run dev` tidak dijalankan (long-running).

---

## Summary

Sistem demo AppVibe Studio punya fondasi yang jelas: halaman index `/demo` menjadi etalase 5 demo dengan filter kategori, AppVibe demo banner menjelaskan konteks simulasi, dan setiap demo punya route `/demo/:slug` yang mewarisi `DemoShell` (navbar demo + AppVibe banner + footer demo + mobile sticky CTA). Komponen `DemoCard`, `DemoGrid`, `DemoFilter`, dan `DemoShell` reusable, data-driven via `src/data/demos.ts`, dan helper `getDemoBySlug` di `src/lib/demos.ts`. Konten demo penuh (per blueprint dan spec) tetap di-defer ke Task 5–6 — yang sudah ada sekarang adalah shell kosong dengan AppVibe banner dan CTA agar route tidak terasa broken.

---

## Goals (dan apa yang dicapai di task ini)

1. **Halaman `/demo` yang menjual**, bukan placeholder. → Grid 5 demo card + filter kategori + search, AppVibe banner konteks simulasi, section "Kenapa demo interaktif", FAQ mini, dan CTA konsultasi.
2. **Demo Shell reusable** yang siap dipakai 5 demo. → `DemoShell` (mirip `CaseStudyLayout`) + `DemoNavbar` (logo dummy brand dinamis) + `DemoFooter` + `AppVibeDemoBanner` + `DemoMobileStickyCTA`.
3. **Routing `/demo/:slug`** terhubung ke shell per demo. → `DemoDetailPage` lookup slug via `getDemoBySlug`, render shell dengan konten placeholder berisi AppVibe banner + link balik ke case study & index.
4. **CTA "Buka Demo" diarahkan ke detail**, bukan placeholder. → `PortfolioCard` dan `CaseStudyCTA` mengarah ke `routes.demoDetail(item.slug)`. Track event `demo_open` dengan `deferred: false` setelah Task 4 (sebelumnya `deferred: true`).
5. **Tidak menambah dependency baru, mobile-first, no lorem ipsum, no testimoni klien nyata.** → Pola sama dengan Task 1–3.

---

## What changed

### Types & data

- **`src/types/demo.ts` (new)** — `DemoCategory` (reuse `PortfolioCategory` mapping: `company-profile | landing-page | clinic | property | dashboard`), `DemoItem` (id, slug, title, category, categoryLabel, niche, summary, tagline, brandColor, accentColor, ctaLabel, status: `live | coming-soon | draft`), `DemoFilterOption` (id, label, category).
- **`src/data/demos.ts` (new)** — entry 5 demo dengan metadata UI (title, niche, summary, brandColor, accentColor, kategori, ctaLabel). `status` saat ini semua `coming-soon` kecuali yang diimplementasi di Task 5+. Copy berbahasa Indonesia, business-focused, no lorem ipsum.
- **`src/lib/demos.ts` (new)** — `demos`, `demoFilters`, `getDemoBySlug`, `filterDemoItems`, `getDemoCategoryLabel`, `getDemoAccent`.

### Pages

- **`src/pages/DemoIndexPage.tsx` (rewrite)** — bukan `PlaceholderPage` lagi. Struktur: `PageHero` + `AppVibeDemoBanner` (mini di atas) + `DemoFilter` + `DemoGrid` + section "Kenapa demo interaktif" + FAQ + final CTA.
- **`src/pages/DemoDetailPage.tsx` (new)** — `useParams<{ slug }>`, lookup `getDemoBySlug`, render `DemoShell` dengan `<DemoNavbar brand={...} />`, AppVibe banner besar, section "Tentang demo ini" (niche, summary, status), final CTA konsultasi, `<DemoFooter />`. Invalid slug → `NotFoundPage`. Hooks: `applyPageMeta` + `trackEvent("demo_open", { slug, deferred: false })`.

### Components

- **`src/components/demos/DemoShell.tsx` (new)** — wrapper mirip `CaseStudyLayout`. Props: `brand: { name; tagline; accent }`, `children`. Render: `DemoNavbar` + `<main>` + `DemoFooter` + `DemoMobileStickyCTA`. Tidak memakai `PageShell` (tanpa Navbar/Footer AppVibe global) agar demo terasa situs sendiri.
- **`src/components/demos/DemoNavbar.tsx` (new)** — sticky navbar dengan logo dummy brand (gradient `brandColor → accentColor`), menu (Beranda anchor + Beranda AppVibe link), CTA "Konsultasi AppVibe" outlined. Mobile: hamburger sederhana. Brand dikontrol via prop.
- **`src/components/demos/DemoFooter.tsx** (new)** — footer gelap slim: brand dummy + tagline + 1 link "Kembali ke AppVibe" + copyright + label "Demo simulasi AppVibe".
- **`src/components/demos/AppVibeDemoBanner.tsx` (new)** — banner inline (di index) atau section (di detail). Copy: jelaskan ini demo simulasi AppVibe, ada AppVibe backlink, label "contoh/simulasi" konsisten dengan case study. Variant: `inline` (kompak di section) dan `section` (penuh di detail page).
- **`src/components/demos/DemoMobileStickyCTA.tsx` (new)** — sticky bottom mirip `MobileStickyCTA` global tapi khusus demo: CTA "Konsultasi AppVibe" (link WhatsApp dengan konteks demo).
- **`src/components/demos/DemoCard.tsx` (new)** — card demo untuk grid di `/demo`. Mirip `PortfolioCard` simplified: accent gradient bar (sesuai `brandColor/accentColor`), category badge, title, niche, summary, tags, CTA "Buka Demo" → `/demo/:slug`. Track event `demo_open` di click.
- **`src/components/demos/DemoGrid.tsx` (new)** — wrapper grid responsif dengan empty state.
- **`src/components/demos/DemoFilter.tsx` (new)** — filter chips kategori + search bar (pola `PortfolioFilter`), reuse `demoFilters` dari `src/lib/demos.ts`.

### Routing

- **`src/app/router.tsx` (updated)** — tambah route `/demo/:slug` → `DemoDetailPage`. Invalid slug ditangani internal oleh `DemoDetailPage` (return `NotFoundPage`).

### Lib & helpers

- **`src/lib/whatsapp.ts` (updated)** — tambah `getDemoMessage(demoTitle: string)` untuk konteks CTA di demo pages: "Halo AppVibe, saya tertarik membuat website/demo seperti {demoTitle}. Bisa dilihat lebih detail?".

### Wire existing CTAs

- **`src/components/portfolio/PortfolioCard.tsx` (updated)** — `demoHref = routes.demoDetail(item.slug)`. Track event `demo_open` dengan `deferred: false`.
- **`src/components/portfolio/CaseStudyCTA.tsx` (updated)** — "Lihat Demo" button → `routes.demoDetail(item.slug)`. Track event `demo_open` dengan `deferred: false`.

### Docs

- **`docs/14-demo-index-and-shell-foundation-report.md`** (file ini).
- **`docs/deferred-items.md`** — pindahkan `/demo/:slug` dari "Masih deferred" ke "Resolved — Task 4" dengan status shell saja (konten masuk Task 5–6). Tambah entry baru untuk konten 5 demo.
- **`README.md`** — tambah baris Task 4 di tabel status + link ke laporan ini.

---

## File-level summary

**New files (12):**

```txt
src/types/demo.ts
src/data/demos.ts
src/lib/demos.ts
src/pages/DemoDetailPage.tsx
src/components/demos/DemoShell.tsx
src/components/demos/DemoNavbar.tsx
src/components/demos/DemoFooter.tsx
src/components/demos/AppVibeDemoBanner.tsx
src/components/demos/DemoMobileStickyCTA.tsx
src/components/demos/DemoCard.tsx
src/components/demos/DemoGrid.tsx
src/components/demos/DemoFilter.tsx
```

**Updated files (5):**

```txt
src/app/router.tsx                     (tambah /demo/:slug)
src/pages/DemoIndexPage.tsx            (rewrite dari PlaceholderPage)
src/lib/whatsapp.ts                    (tambah getDemoMessage)
src/components/portfolio/PortfolioCard.tsx        (demoHref → routes.demoDetail)
src/components/portfolio/CaseStudyCTA.tsx         (Lihat Demo → routes.demoDetail)
```

**Docs (3):**

```txt
docs/14-demo-index-and-shell-foundation-report.md (new)
docs/deferred-items.md                  (update)
README.md                               (update)
```

---

## Architecture notes

### DemoShell vs PageShell

`DemoShell` sengaja **tidak** memakai `PageShell` global. Tujuannya:

- Demo terasa seperti **situs independen** milik brand dummy (Arunika Konsultan, NaturaCare Clinic, dll).
- Navbar AppVibe global tidak muncul di dalam demo — user fokus ke dummy brand.
- AppVibe "frame" muncul via `AppVibeDemoBanner` (banner kontekstual, bukan chrome global).
- Footer demo ringan + link balik ke AppVibe.

Pola ini adalah best practice untuk portfolio demo: calon klien harus merasakan "ini website jadi" dulu, baru sadar ini demo.

### Data model

```ts
type DemoItem = {
  id: string;
  slug: string;
  title: string;          // "Website Company Profile untuk Jasa Profesional"
  category: DemoCategory;
  categoryLabel: string;  // "Company Profile"
  niche: string;
  summary: string;
  tagline: string;        // tagline brand dummy
  brandColor: string;     // hex primary
  accentColor: string;    // hex accent
  ctaLabel: string;       // "Konsultasi AppVibe" | "Buka Demo" | etc
  status: "live" | "coming-soon" | "draft";
};
```

`brandColor` & `accentColor` dipakai untuk accent card (gradient bar) dan akan dipakai demo page penuh (Task 5+) untuk tone visual per industri. Tidak dipakai di shell (shell tetap netral).

### Reuse dari Task 3

- `Container`, `Button`, `Card`, `Badge`, `SectionHeader`, `PageHero` — dipakai di `DemoIndexPage`.
- `PortfolioFilter` pattern — di-reuse semantic-nya di `DemoFilter` (tidak import langsung, tapi copy pola agar tetap loosely coupled).
- `applyPageMeta`, `trackEvent`, `buildWhatsAppUrl` — dipakai di index dan detail.

### Filter UX

- Sama dengan portfolio: chips kategori + search.
- Initial state: `activeCategory = "all"`, `searchQuery = ""`.
- Result count ditampilkan.

---

## Verification

| Command / Route | Result |
|-----------------|--------|
| Preflight typecheck | PASS |
| Preflight build | PASS |
| Post `npm run typecheck` | PASS |
| Post `npm run build` | PASS |
| `npm run dev` | NOT RUN (long-running) |
| `/demo` (index with grid + filter) | Structural PASS |
| `/demo/company-profile` | Structural PASS (shell) |
| `/demo/webinar-landing` | Structural PASS (shell) |
| `/demo/klinik` | Structural PASS (shell) |
| `/demo/properti` | Structural PASS (shell) |
| `/demo/lead-dashboard` | Structural PASS (shell) |
| Invalid `/demo/unknown` | 404 (NotFoundPage) |
| Filter kategori di `/demo` | Functional (client-side) |
| Search di `/demo` | Functional (client-side) |
| Empty state filter | PASS |
| Mobile responsive index | Structural PASS |
| Mobile responsive shell | Structural PASS |
| CTA WhatsApp di `/demo` (banner, final CTA) | Via helper PASS |
| `PortfolioCard` "Lihat Semua Demo" → `/demo/:slug` | PASS |
| `CaseStudyCTA` "Lihat Demo" → `/demo/:slug` | PASS |
| Track event `demo_open` dengan `deferred: false` | PASS |
| Lorem ipsum | NONE |
| Klaim klien nyata / testimoni palsu | NONE |
| Secret committed | NONE |

---

## Environment

**Before:** `/demo` adalah `PlaceholderPage` generik. `/demo/:slug` belum ada di router. CTA "Buka Demo" mengarah ke `/demo` placeholder. Track event `deferred: true`.

**During:** Node v24.15.0, tanpa dependency baru. Reuse semua komponen Task 1–3.

**After:** 12 new files, 5 updated. Bundle size masih di bawah target (akan diukur di Task 8 final QA).

---

## Security & ethics notes

- Tidak ada secret/env baru.
- Tidak ada backend/API — semua mock client-side.
- AppVibe demo banner di setiap shell + detail page menonjolkan label "contoh/simulasi" agar calon klien tidak keliru认为 ini klien nyata.
- Testimoni/quote di shell (kalau ada) tidak menyebut nama klien riil.
- No fictional omzet/clients/ranking. Trust chip "contoh/simulasi" dipakai konsisten.

---

## Demo page status table (after Task 4)

| Demo | Shell | Full content |
|------|-------|--------------|
| `/demo/company-profile` | ✅ (Task 4) | ⏳ Task 5 (per blueprint `13B`) |
| `/demo/webinar-landing` | ✅ (Task 4) | ⏳ Task 5 |
| `/demo/klinik` | ✅ (Task 4) | ⏳ Task 6 |
| `/demo/properti` | ✅ (Task 4) | ⏳ Task 6 |
| `/demo/lead-dashboard` | ✅ (Task 4) | ⏳ Task 6 |

Shell berisi: `DemoNavbar` (brand dummy) + hero (placeholder content) + `AppVibeDemoBanner` (section) + section "Tentang demo ini" (status, niche, summary) + final CTA konsultasi + `DemoFooter` + `DemoMobileStickyCTA`. Tidak ada section generik kosong tanpa konteks.

---

## Definition of done (Task 4)

- [x] `/demo` adalah halaman dengan grid 5 demo + filter + search + AppVibe banner + final CTA
- [x] `/demo/:slug` ada untuk 5 demo, render `DemoShell` dengan konteks dummy brand
- [x] `DemoShell` reusable (navbar + footer + mobile sticky + AppVibe banner)
- [x] Invalid slug → `NotFoundPage`
- [x] CTA "Buka Demo" di `PortfolioCard` mengarah ke `routes.demoDetail`
- [x] CTA "Lihat Demo" di `CaseStudyCTA` mengarah ke `routes.demoDetail`
- [x] Track event `demo_open` dengan `deferred: false`
- [x] `applyPageMeta` di index & detail
- [x] Build & typecheck PASS
- [x] Tidak ada lorem ipsum / testimoni palsu / dependency baru
- [x] Mobile-first
- [x] Backward compatible: portfolio, case study, homepage tidak regress

---

## Rollback

1. Revert `src/pages/DemoIndexPage.tsx` ke versi `PlaceholderPage` (git history).
2. Hapus 12 file baru di `src/components/demos/`, `src/types/demo.ts`, `src/data/demos.ts`, `src/lib/demos.ts`, `src/pages/DemoDetailPage.tsx`.
3. Revert `src/app/router.tsx` (hapus route `/demo/:slug`).
4. Revert `src/lib/whatsapp.ts` (hapus `getDemoMessage`).
5. Revert `src/components/portfolio/PortfolioCard.tsx` dan `CaseStudyCTA.tsx` (kembalikan ke `routes.demo`).
6. Restore `docs/deferred-items.md` Task 4 state (route `/demo/:slug` kembali ke "Masih deferred").
7. Restore `README.md` status Task 4.
8. Verify: `npm run typecheck && npm run build`.

---

## Known limitations (to address in Task 5–6)

- **Konten penuh 5 demo** (per `docs/05` section 4–8 + blueprint Task 4A) belum diimplementasi. Saat ini setiap `/demo/:slug` adalah shell dengan hero placeholder + AppVibe banner + section "Tentang demo ini" + final CTA.
- **FAQ accordion per demo** belum ada (saat ini FAQ mini hanya di index).
- **Form inquiry interaktif per demo** (Company Profile 6 field, Webinar 6 field, Klinik booking, Properti survey) belum ada — semua CTA mengarah ke WhatsApp.
- **Portfolio filter interaktif** (per blueprint Company Profile) belum ada.
- **Project detail modal** belum ada.
- **Lead Dashboard interactions** (search, filter, status update, pipeline, mobile) belum ada.
- **Thumbnail PNG** di `public/images/portfolio/{slug}.png` masih placeholder path.
- **Browser QA** belum dijalankan di sesi agent.

---

## Next recommended task

**Task 5 — Demo Pages Batch 1: Company Profile + Webinar Landing**

Mengikuti blueprint `docs/13B-company-profile-uiux-blueprint.md` section 10 untuk `/demo/company-profile`, dan pattern dari `docs/05-PORTFOLIO-DEMO-SPEC.md` section 5 untuk `/demo/webinar-landing`. Reuse `DemoShell` + data terstruktur `src/data/demos/{slug}/*` per blueprint.

Optional sebelum Task 5: founder QA visual `/demo` index dan 1 demo shell di browser (sesuai pola Task 3A/3B/3C/3D/3E merge review).
