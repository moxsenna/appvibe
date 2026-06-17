## Deferred — Sprint 12 (Better Auth)

Login sungguhan + multi-tenant privat untuk dashboard leads **bukan** kebutuhan deploy situs agency saat ini. Demo lead dashboard tetap mock auth + Supabase showcase opsional.

**Trigger untuk mulai:** komitmen produk (klien login ke data mereka sendiri).

---

# Deferred Items — AppVibe Studio

Dokumen ini mencatat item yang sengaja ditunda ke task berikutnya.

## Resolved — Task 2.5

### Homepage premium visual redesign ✅

Homepage didesain ulang dengan arah premium digital agency (UI/UX Pro Max reference). Semua 9 section tetap ada. Copy Task 2.5 diterapkan. Laporan: `docs/11B-premium-homepage-redesign-report.md`.

## Resolved — Task 2.6

### Homepage visual polish & conversion QA ✅

Polish kontras hero, floating mobile CTA, service cards ringkas, portfolio bento showcase, process stepper, FAQ compact, final CTA kuat. CTA secondary hero/final → `/portfolio`. Laporan: `docs/11C-homepage-visual-polish-report.md`.

## Resolved — Task 2.7

### Hero copy, animated headline & portfolio visual polish ✅

Animated rotating headline (`RotatingText`), copy hero/final CTA baru, hero lebih gelap, portfolio preview CSS lebih kaya, floating CTA "Chat WhatsApp" compact, showcase tanpa "Buka Demo". Laporan: `docs/11D-hero-copy-animated-headline-polish-report.md`.

## Resolved — Task 2.8

### Homepage copy refinement: natural business language ✅

Hero headline `lebih mudah` + rotating words natural, portfolio section tanpa istilah developer, CTA `Lihat Semua Portfolio` → `/portfolio`. Laporan: `docs/11E-homepage-copy-refinement-report.md`.

## Resolved — Task 3

### Portfolio detail routes ✅

Route berikut **sudah tersedia** sejak Task 3:

- `/portfolio/company-profile`
- `/portfolio/webinar-landing`
- `/portfolio/klinik`
- `/portfolio/properti`
- `/portfolio/lead-dashboard`

CTA "Lihat Studi Kasus" di `PortfolioCard` mengarah ke `/portfolio/:slug`.

## Resolved — Task 4

### Demo Index & Demo Shell Foundation ✅

Halaman `/demo` jadi etalase 5 demo dengan filter kategori + search + AppVibe banner. Route `/demo/:slug` aktif untuk 5 demo, render `DemoShell` reusable (navbar dummy brand + footer + AppVibe banner + mobile sticky CTA). CTA "Buka Demo" di `PortfolioCard` & "Lihat Demo" di `CaseStudyCTA` sudah mengarah ke detail. Track event `demo_open` dengan `deferred: false`. Laporan: `docs/14-demo-index-and-shell-foundation-report.md`.

### Demo detail routes (shell only)

Route berikut sudah tersedia sejak Task 4 dengan `DemoShell` reusable:

- `/demo/company-profile`
- `/demo/webinar-landing`
- `/demo/klinik`
- `/demo/properti`
- `/demo/lead-dashboard`

**Catatan:** Konten penuh (13 section Company Profile, 12 section Webinar, dsb.) belum diimplementasi — shell berisi hero placeholder + AppVibe banner + section "Tentang demo ini" + final CTA. Target Task 5–6.

## Resolved — Task 5

### Demo Pages Batch 1 (full content) ✅

`/demo/company-profile` dan `/demo/webinar-landing` diimplementasikan **penuh** dengan 13 + 12 section sesuai blueprint dan spec. Interaksi: filter portfolio + modal detail, FAQ accordion, form inquiry dengan validasi & success state → WhatsApp simulasi, countdown timer real-time, follow-up timeline 6 step. Testimoni skenario berlabel jelas. Build & typecheck PASS. Laporan: `docs/15-demo-pages-batch-1-report.md`.

## Resolved — Sprint 7

### Contact, Services, Industries, About (full content) ✅

4 page placeholder (`/kontak`, `/layanan`, `/industri`, `/tentang`) diubah menjadi halaman penuh dengan interaksi nyata. Plus SEO & analytics polish di 14 page. Laporan: `docs/17-sprint-7-contact-seo-polish-report.md`.

## Resolved — Sprint 8

### Final QA, Polish, Code Splitting, Deploy ✅

Bundle JS utama turun dari 578 kB ke 138 kB (gzip 56 kB) dengan lazy-load 5 demo pages. Sitemap.xml 14 route, OG image fallback SVG, skip link + focus states. Laporan: `docs/18-sprint-8-final-qa-polish-deploy-report.md`.

## Post-MVP — Known limitations (Sprint 8 final)

- Form submission masih mock client-side (WhatsApp redirect simulasi). Untuk production form dengan database, perlu Cloudflare Worker (di luar MVP scope).
- Thumbnail PNG di `public/images/portfolio/{slug}.png` masih placeholder. Visual preview di portfolio cards masih CSS gradient.
- OG image placeholder SVG (default untuk halaman tanpa screenshot).
- Browser QA visual oleh founder (long-running, di luar agent scope).
- **GTM:** kode siap (`initGtm`, `page_view`, dataLayer events); aktifkan env production — `docs/GTM-ANALYTICS.md`.
- ESLint belum di-configure.
- Git repository belum diinisialisasi.
- Founder info di About page masih placeholder.

### Portfolio thumbnails

File gambar di `public/images/portfolio/` belum tersedia. `PortfolioCard` masih memakai path thumbnail placeholder.

**Target task:** Saat asset visual siap (Task 4+ atau production polish)

### Case study visual preview — company-profile ✅

Sejak Task 3A, `/portfolio/company-profile` memakai CSS mockup khusus (`CompanyProfilePreview`) untuk hero, layanan, portfolio, inquiry, dan testimoni skenario.

### Company Profile — blueprint & demo page (Task 3A.1 → Task 4A)

Blueprint resmi tersedia di `docs/13B-company-profile-uiux-blueprint.md`. Item berikut **belum diimplementasi** — target Task 4A (`/demo/company-profile`):

- Demo page penuh `/demo/company-profile` dengan 13 section website
- Data terstruktur `src/data/demos/company-profile/*` (6 layanan, 8 proyek, 3 studi kasus, 4 testimoni skenario, 8 FAQ, proses 4 langkah)
- Portfolio filter interaktif client-side
- Project detail preview / modal / drawer
- Inquiry form mock dengan validasi + success state
- WhatsApp prefilled message via helper
- FAQ accordion 8 item
- Mobile sticky CTA
- Thumbnail PNG di `public/images/portfolio/company-profile.png`
- Admin inquiry summary mockup (opsional, tanpa backend)

**Sementara:** CTA "Buka Demo" tetap ke `/demo` placeholder.

### Case study visual preview — klinik ✅

Sejak Task 3C, `/portfolio/klinik` memakai CSS mockup khusus (`ClinicPreview`) untuk hero, layanan, tenaga ahli, jadwal & booking, serta FAQ skenario.

### Case study visual preview — webinar-landing ✅

Sejak Task 3B (blueprint SkillPath Studio), `/portfolio/webinar-landing` memakai CSS mockup khusus (`WebinarLandingPreview`) — 6 layar: hero, problem & benefit, agenda 5 sesi, speaker & bonus, form pendaftaran, FAQ & sticky CTA mobile.

### Webinar Landing — demo page (Task 3B → Task 4+)

Blueprint campaign dummy SkillPath Studio sudah diimplementasi di case study. Item berikut **belum diimplementasi**:

- Demo page penuh `/demo/webinar-landing` dengan 12 section landing page
- Form submit mock + success state + redirect WhatsApp simulasi
- FAQ accordion 8 item interaktif
- Thumbnail PNG di `public/images/portfolio/webinar-landing.png`
- Integrasi WhatsApp sungguhan (sengaja ditunda)

**Sementara:** CTA "Buka Demo" tetap ke `/demo` placeholder.

### Case study visual preview — properti ✅

Sejak Task 3D, `/portfolio/properti` memakai CSS mockup khusus (`PropertyPreview`) untuk hero, listing dengan filter, detail spesifikasi, galeri visual, dan form survei lokasi.

### Case study visual preview — lead-dashboard ✅

Sejak Task 3E, `/portfolio/lead-dashboard` memakai CSS mockup khusus (`LeadDashboardPreview`) untuk overview stat cards, tabel leads, pipeline board, detail lead, laporan ringkasan, dan FAQ CRM.

### Testimonials di homepage

`src/data/testimonials.ts` tersedia dengan label `isExample: true`. Belum ditampilkan di homepage. Bisa digunakan di halaman lain jika diperlukan.

## Umum (dari Task 0–1)

- ESLint belum dikonfigurasi
- `npm run dev` / preview manual belum diverifikasi di browser setiap task
- Git repository belum diinisialisasi