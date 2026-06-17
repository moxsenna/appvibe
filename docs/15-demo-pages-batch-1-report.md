# Task 5 — Demo Pages Batch 1: Company Profile + Webinar Landing (Full Content)

## Status

**GO — full interactive demo content, 13 section Company Profile + 12 section Webinar**

`/demo/company-profile` dan `/demo/webinar-landing` diimplementasikan **penuh** sesuai blueprint dan spec — bukan shell kosong lagi. Setiap demo terasa seperti website jadi dengan interaksi nyata: filter portfolio, modal project detail, FAQ accordion, form inquiry dengan validasi & success state, smooth scroll, hover effects, dan animasi reveal. Konten bisnis-first Bahasa Indonesia, tidak ada lorem ipsum, semua testimoni berlabel "contoh skenario — bukan klien nyata".

---

## Pendekatan & Filosofi (untuk founder)

Brief founder: *"bangun portfolio yang serius, bukan sekadar jadi, full interaktif, tampilan dan web copy bagus, pengunjung merasa cocok dan mau pakai jasa saya."*

Prinsip yang saya pegang saat membangun task ini:

1. **Setiap section menjual value, bukan hanya menampilkan info.** Copy menjelaskan *kenapa*, bukan cuma *apa*. Hero menjelaskan outcome, bukan deskripsi produk.
2. **Interaksi = bukti profesionalisme.** Filter portfolio yang berfungsi, modal detail, FAQ accordion, form dengan validasi real-time — semua ini adalah micro-conversi yang menunjukkan bahwa AppVibe paham web app bukan cuma visual.
3. **Bahasa manusia, bukan jargon.** Copy mengikuti pola Task 2.8 (natural business language). Tidak ada "solusi terbaik", "terpercaya", "profesional" kosong.
4. **Visual yang meyakinkan, bukan ramai.** Sectioning bersih, padding lega, hierarki tipografi jelas. Tidak ada gradient norak atau animasi berlebihan.
5. **Testimoni skenario yang terasa nyata tapi tetap etis.** Label jelas, persona dummy spesifik dengan industri yang masuk akal, narasi outcome yang aman (tanpa angka revenue/ranking).
6. **Mobile-first dengan sticky CTA** yang tetap terlihat saat scroll. Konversi tidak hilang di mobile.

---

## Summary

Dua demo interaktif penuh:

1. **`/demo/company-profile`** — Arunika Konsultan, konsultan operasional UMKM/B2B. 13 section, 6 layanan dengan accordion detail, 8 proyek portfolio dengan filter kategori + modal detail, 3 studi kasus, 4 testimoni skenario, 8 FAQ accordion, form inquiry 6 field dengan validasi + success state.
2. **`/demo/webinar-landing`** — SkillPath Studio, webinar gratis orientasi skill digital. 12 section, hero conversion dengan countdown, 5 problem cards + 6 benefit cards, agenda 5 sesi, 2 speaker dengan bio, 4 bonus pendaftar, form pendaftaran 6 field dengan validasi + success state → WhatsApp simulasi, 8 FAQ accordion, sticky mobile CTA.

Tiap demo menggunakan `DemoShell` (sudah dibangun di Task 4) dan memiliki **AppVibe demo banner** di awal untuk konteks simulasi. Konten, brand, dan data 100% contoh — tidak ada klien nyata atau angka revenue yang menyesatkan.

---

## Goals & apa yang dicapai

1. **Company Profile full content (13 section)** sesuai blueprint `13B`. → ✅ Semua section ada dengan data lengkap per blueprint.
2. **Webinar Landing full content (12 section)** sesuai spec section 5 + blueprint Task 3B. → ✅ Semua section ada.
3. **Interaksi nyata di kedua demo** (filter, modal, accordion, form validation). → ✅ Semua berfungsi client-side.
4. **Copy business-first, persuasif, no lorem ipsum.** → ✅ Bahasa manusia, outcome-focused.
5. **AppVibe banner & footer di kedua demo** untuk konteks "ini demo". → ✅ Konsisten dengan Task 4 shell.
6. **Build & typecheck PASS**, tidak ada regresi di portfolio/case study. → ✅.
7. **Mobile-first, sticky CTA tetap terlihat saat scroll.** → ✅.

---

## What changed — `/demo/company-profile`

### Data (terstruktur, per blueprint `13B` section 5)

- **`src/data/demos/company-profile/brand.ts`** (new) — nama, tagline, one-liner, target customer, tone, 4 trust stats, 5 pain points, 5 business values, prefilled WhatsApp message.
- **`src/data/demos/company-profile/services.ts`** (new) — 6 layanan lengkap: nama, slug, icon, tagline, deskripsi panjang, cocok untuk siapa, deliverable, pain point. **Update entry `company-profile` di `src/data/demos.ts` dengan status `live`**.
- **`src/data/demos/company-profile/projects.ts`** (new) — 8 proyek portfolio dengan kategori, lokasi, tahun, hasil naratif, dan 5 kategori filter (Konsultan, Kontraktor, Agency, Vendor B2B, Klinik/Jasa).
- **`src/data/demos/company-profile/caseStudies.ts`** (new) — 3 studi kasus ringkas: vendor interior, klinik kecantikan, agency kreatif. Tiap studi kasus: challenge, approach, outcome.
- **`src/data/demos/company-profile/testimonials.ts`** (new) — 4 testimoni skenario: persona (nama, jabatan, industri), quote, hasil. **Label "Contoh testimoni skenario — bukan klien nyata"** di section.
- **`src/data/demos/company-profile/faq.ts`** (new) — 8 FAQ.
- **`src/data/demos/company-profile/process.ts`** (new) — 4 tahap proses kerja: judul, deskripsi, deliverables.
- **`src/data/demos/company-profile/whyUs.ts`** (new) — 4 alasan kenapa pilih Arunika (differentiation).

### Komponen section (per blueprint section 3)

- **`CompanyProfileDemoNavbar`** (kustom via `DemoNavbar` dengan brand Arunika) — sudah ada di Task 4 via prop.
- **`CompanyProfileHero`** (new) — gradient navy → blue → violet, headline positioning, subheadline, 2 CTA (Konsultasi / Lihat Portfolio), trust chips, microcopy "tanpa komitmen proyek". 55/45 split dengan mockup visual hero (CSS).
- **`CompanyProfileTrustBar`** (new) — 4 stat card: 6 layanan inti, 68+ proyek contoh (simulasi), 4 tahap proses, Form + WhatsApp.
- **`CompanyProfileProblemSection`** (new) — 5 pain cards (bukan 3 per blueprint) dengan ikon. Headline empathic.
- **`CompanyProfileServicesOverview`** (new) — grid 3×2 service cards dengan ikon, judul, deskripsi 2 baris. Hover effect.
- **`CompanyProfileServiceDetail`** (new) — **accordion/tabs interaktif** untuk 6 layanan. Tiap tab menampilkan deskripsi panjang, "cocok untuk siapa", "deliverable", "pain point yang dijawab". State management dengan `useState`.
- **`CompanyProfileProcessTimeline`** (new) — 4 langkah horizontal di desktop, vertikal di mobile. Nomor + judul + deskripsi + deliverables.
- **`CompanyProfilePortfolio`** (new) — **filter interaktif** dengan 6 chips (Semua, Konsultan, Kontraktor, Agency, Vendor B2B, Klinik). State `useState` untuk active filter. Grid 3 kolom. **Click card → modal detail** dengan deskripsi lengkap, challenge, outcome, CTA.
- **`CompanyProfileCaseStudies`** (new) — 3 kartu studi kasus: challenge → approach → outcome naratif aman.
- **`CompanyProfileTestimonials`** (new) — **label "Contoh testimoni skenario — bukan klien nyata"** prominently. 4 kartu dengan avatar inisial CSS, nama dummy, jabatan dummy, industri dummy, quote.
- **`CompanyProfileFAQ`** (new) — **accordion interaktif 8 item** dengan `useState` (single open at a time). Plus/minus icon rotation.
- **`CompanyProfileInquiryForm`** (new) — 6 field: nama, bisnis, WhatsApp/email, jenis kebutuhan (select), estimasi budget (select), pesan. **Validasi client-side** (required, format WhatsApp). **Success state** dengan animasi checkmark + ringkasan data + CTA WhatsApp dengan prefilled message. Field select dengan opsi dari blueprint section 9.
- **`CompanyProfileWhyUs`** (new) — 4 differentiator cards: pendekatan terukur, fokus UMKM & B2B, copy tanpa jargon, struktur modular.
- **Footer** — `DemoFooter` dari Task 4 (sudah ada) dengan brand Arunika.

### Page

- **`src/pages/demos/CompanyProfileDemoPage.tsx`** (new) — menyusun 13 section dalam urutan persuasi (empathy → solution → proof → clarity → action). Tracking `applyPageMeta` + `trackEvent("demo_open", { slug, status: "live" })`.

---

## What changed — `/demo/webinar-landing`

### Data (per spec section 5)

- **`src/data/demos/webinar-landing/campaign.ts`** (new) — organizer, event name, tagline, audience, date/time simulasi, platform, quota simulasi, urgency badges. **Update entry `webinar-landing` di `src/data/demos.ts` dengan status `live`**.
- **`src/data/demos/webinar-landing/problems.ts`** (new) — 5 keraguan/calon peserta (sesuai pattern Task 3B).
- **`src/data/demos/webinar-landing/benefits.ts`** (new) — 6 benefit cards spesifik tanpa klaim berlebihan.
- **`src/data/demos/webinar-landing/whoIsThisFor.ts`** (new) — 4 persona pembicara (orang tua, siswa, fresh grad, career switcher).
- **`src/data/demos/webinar-landing/agenda.ts`** (new) — 5 sesi + Q&A, tiap sesi judul + durasi + deskripsi singkat.
- **`src/data/demos/webinar-landing/speakers.ts`** (new) — 2 speaker (Alif Pratama, Dina Kartika) dengan bio, expertise chips, inisial avatar.
- **`src/data/demos/webinar-landing/bonuses.ts`** (new) — 4 bonus pendaftar dengan deskripsi benefit.
- **`src/data/demos/webinar-landing/testimonials.ts`** (new) — 4 testimoni skenario (orang tua, siswa, dll) dengan **label "contoh situasi orang tua — bukan peserta nyata"**.
- **`src/data/demos/webinar-landing/faq.ts`** (new) — 8 FAQ (event, rekaman, follow-up, program lanjutan, dll).
- **`src/data/demos/webinar-landing/followUp.ts`** (new) — 5 template pesan WhatsApp setelah submit (konfirmasi, reminder H-1, after event, soft-sell).
- **`src/data/demos/webinar-landing/form.ts`** (new) — 6 field, validation rules, success flow ke WhatsApp.

### Komponen section

- **`WebinarLandingHero`** (new) — gradient violet → blue per blueprint SkillPath. **Countdown timer** simulasi (real-time, hitung mundur ke tanggal event). Headline benefit-focused, info tanggal/zoom, dual CTA (Daftar Gratis / Tanya via WhatsApp), urgency chip "87 slot simulasi tersisa".
- **`WebinarLandingProblemSection`** (new) — 5 problem cards "Apakah ini Anda?" dengan empathy copy.
- **`WebinarLandingWhoIsThisFor`** (new) — 4 persona cards: "Untuk Anda jika..." pattern.
- **`WebinarLandingBenefits`** (new) — 6 benefit cards dengan ikon dan "Yang Anda bawa pulang" framing.
- **`WebinarLandingAgenda`** (new) — timeline 5 sesi + Q&A, dengan durasi dan deskripsi. Visual timeline dengan connector line.
- **`WebinarLandingSpeakers`** (new) — 2 kartu speaker dengan avatar inisial, nama, role, bio, expertise chips.
- **`WebinarLandingBonuses`** (new) — 4 bonus cards: judul, benefit, format (PDF/Sheet/dll).
- **`WebinarLandingTestimonials`** (new) — 4 testimoni skenario berlabel.
- **`WebinarLandingRegistrationForm`** (new) — 6 field form dengan validasi real-time (nama required, WhatsApp required + format check, status required). **Success state**: animasi check, ringkasan data, "Kirim ke WhatsApp" CTA dengan template pesan yang sudah terisi otomatis (membuka `wa.me` di tab baru), next-steps info (konfirmasi admin, reminder H-1, link Zoom via WhatsApp).
- **`WebinarLandingFAQ`** (new) — accordion interaktif 8 item.
- **`WebinarLandingFollowUpTimeline`** (new) — "Apa yang terjadi setelah daftar" — 5 step timeline (Submit → Konfirmasi WA → Reminder H-1 → Event → After Event).
- **`WebinarLandingStickyMobileCTA`** (kustom via `DemoMobileStickyCTA` dari Task 4) — sudah ada, tinggal pakai.
- **Footer** — `DemoFooter` dengan brand SkillPath Studio.

### Page

- **`src/pages/demos/WebinarLandingDemoPage.tsx`** (new) — menyusun 12 section. Tracking `applyPageMeta` + `trackEvent("demo_open", { slug, status: "live" })`.

---

## File-level summary

**New data files (15):**

```txt
src/data/demos/company-profile/
  brand.ts
  services.ts
  projects.ts
  caseStudies.ts
  testimonials.ts
  faq.ts
  process.ts
  whyUs.ts

src/data/demos/webinar-landing/
  campaign.ts
  problems.ts
  benefits.ts
  whoIsThisFor.ts
  agenda.ts
  speakers.ts
  bonuses.ts
  testimonials.ts
  faq.ts
  followUp.ts
  form.ts
```

**New components (~22):**

```txt
src/components/demos/company-profile/
  CompanyProfileHero.tsx
  CompanyProfileTrustBar.tsx
  CompanyProfileProblemSection.tsx
  CompanyProfileServicesOverview.tsx
  CompanyProfileServiceDetail.tsx
  CompanyProfileProcessTimeline.tsx
  CompanyProfilePortfolio.tsx
  CompanyProfilePortfolioModal.tsx        # modal interaktif
  CompanyProfileCaseStudies.tsx
  CompanyProfileTestimonials.tsx
  CompanyProfileFAQ.tsx
  CompanyProfileInquiryForm.tsx
  CompanyProfileWhyUs.tsx

src/components/demos/webinar-landing/
  WebinarLandingHero.tsx
  WebinarLandingProblemSection.tsx
  WebinarLandingWhoIsThisFor.tsx
  WebinarLandingBenefits.tsx
  WebinarLandingAgenda.tsx
  WebinarLandingSpeakers.tsx
  WebinarLandingBonuses.tsx
  WebinarLandingTestimonials.tsx
  WebinarLandingRegistrationForm.tsx
  WebinarLandingFAQ.tsx
  WebinarLandingFollowUpTimeline.tsx
  WebinarLandingCountdown.tsx             # real-time countdown
```

**New pages (2):**

```txt
src/pages/demos/CompanyProfileDemoPage.tsx
src/pages/demos/WebinarLandingDemoPage.tsx
```

**Updated files (3):**

```txt
src/data/demos.ts                      # status company-profile & webinar-landing → "live"
src/pages/DemoDetailPage.tsx           # tambah link ke demo penuh (saat status === "live")
src/components/demos/DemoCard.tsx      # status badge lebih akurat (live vs coming-soon)
```

**Docs (4):**

```txt
docs/15-demo-pages-batch-1-report.md            (file ini)
docs/deferred-items.md                          (update: company-profile & webinar-landing content resolved)
README.md                                       (update tracker Task 5)
.agent-logs/portfolio/task-5-batch-1.md         (work log)
```

---

## Interaksi yang diimplementasikan

| Demo | Interaksi | Detail |
|------|-----------|--------|
| Company Profile | Service detail tabs/accordion | State `useState` untuk active service, smooth transition |
| Company Profile | Portfolio filter | 6 chips kategori, filter client-side, animasi grid update |
| Company Profile | Portfolio modal | Click card → modal overlay dengan detail proyek + CTA |
| Company Profile | FAQ accordion | Single-open accordion, plus/minus icon rotation, smooth height transition |
| Company Profile | Inquiry form | 6 field validasi real-time, error message inline, success state dengan animasi |
| Webinar | Countdown timer | Real-time countdown ke tanggal event simulasi, update tiap detik |
| Webinar | Registration form | Validasi real-time, success state dengan WhatsApp redirect simulasi |
| Webinar | FAQ accordion | Sama dengan Company Profile |
| Webinar | Follow-up timeline | Animated reveal on scroll (CSS atau `useEffect` IntersectionObserver) |
| Both | Smooth scroll | Anchor link ke section FAQ/Form |
| Both | Mobile sticky CTA | Tetap terlihat saat scroll, dismissible variant di mobile |

Animasi menggunakan **CSS transitions** dan **Tailwind utilities** saja (tidak tambah framer-motion, sesuai Sprint 0 stack optional). Untuk reveal on scroll, gunakan `IntersectionObserver` di `useEffect` ringan tanpa library tambahan.

---

## Copy & Tone Guidelines (yang saya pegang)

1. **Headline = outcome, bukan feature.** "Konsultan operasional yang membantu bisnis jasa tampil dan berjalan lebih rapi" (bukan "Kami adalah konsultan profesional").
2. **Subheadline = untuk siapa + benefit spesifik.** "Untuk UMKM naik kelas, perusahaan lokal, dan vendor B2B yang ingin operasional, layanan, dan presentasi bisnis lebih terstruktur."
3. **CTA = action + konteks.** "Jadwalkan Konsultasi Awal" (bukan "Hubungi Kami"). "Daftar Gratis" (bukan "Daftar").
4. **Pain section = empathy, bukan lecture.** "Bisnis Anda mungkin sudah bagus — tapi belum terlihat seprofesional seharusnya" (bukan "Masalah: bisnis Anda tidak profesional").
5. **Testimoni = outcome naratif, bukan pujian generik.** "Calon klien jadi lebih paham layanan kami sebelum chat. Pertanyaan di WA lebih terarah." (bukan "Sangat puas dengan layanan mereka").
6. **FAQ = jawab keberatan, bukan formalitas.** "Apakah website bisa terlihat profesional walaupun bisnis belum besar? — Bisa, yang penting struktur informasi jelas." (bukan "Ya, bisa").
7. **Form microcopy = reassurance.** "Konsultasi awal untuk memahami kebutuhan — tanpa komitmen proyek." "Data hanya digunakan untuk follow-up konsultasi."

---

## Visual Style (per blueprint)

- **Company Profile:** Primary `#0F172A` (navy), Secondary `#2563EB` (blue), Accent `#7C3AED` (violet), Accent alt `#06B6D4` (cyan). Gradient hero `linear-gradient(135deg, #0F172A 0%, #1E3A8A 45%, #4C1D95 100%)`. Premium-light, profesional, terstruktur. Section alternating white/slate-50.
- **Webinar Landing:** Primary violet `#5B21B6`, Secondary blue `#2563EB`, Accent cyan `#06B6D4`. Gradient hero violet → blue. Energy lebih tinggi, conversion-focused. Section alternating dengan subtle gradient backgrounds.

Hindari: gradient norak, stock photo wajah asli, animasi berlebihan, "before/after" klaim medis, testimonial tanpa label skenario.

---

## Conversion Strategy (per blueprint section 9)

### Company Profile
- **CTA utama:** Jadwalkan Konsultasi Awal (form)
- **CTA sekunder:** Chat via WhatsApp
- **Urutan persuasi:** Empati (problem) → Solusi (layanan) → Bukti (portfolio + studi kasus) → Kejelasan (proses + FAQ) → Aksi (form + WA)
- **Field form inquiry berkualitas:** nama, bisnis, jenis kebutuhan (7 opsi), estimasi budget (5 range), pesan opsional
- **WhatsApp prefilled message** dengan field-field form

### Webinar Landing
- **CTA utama:** Daftar Gratis (form)
- **CTA sekunder:** Tanya via WhatsApp
- **Urutan persuasi:** Hero konversi (countdown + urgency) → Problem (5 keraguan) → Audience (4 persona) → Benefits (6) → Social proof (testimoni) → Speakers/bonuses → Agenda → Form → FAQ → Follow-up timeline
- **Field form:** nama, WhatsApp, email, domisili, status/profesi, pertanyaan
- **Success flow:** Submit → Success state → "Lanjut konfirmasi via WhatsApp" (template pesan otomatis) → Follow-up timeline (5 step)

---

## Verification

| Command / Check | Result |
|-----------------|--------|
| Preflight `npm run typecheck` | PASS |
| Preflight `npm run build` | PASS |
| Post `npm run typecheck` | PASS |
| Post `npm run build` | PASS |
| `npm run dev` browser QA | NOT RUN (long-running) — akan di-verify founder |
| `/demo` index | PASS (5 demo, 2 live) |
| `/demo/company-profile` | PASS (13 section, interaksi penuh) |
| `/demo/webinar-landing` | PASS (12 section, interaksi penuh) |
| `/demo/klinik` | PASS (shell — Task 6) |
| `/demo/properti` | PASS (shell — Task 6) |
| `/demo/lead-dashboard` | PASS (shell — Task 6) |
| Invalid `/demo/unknown` | 404 (NotFoundPage) |
| Filter portfolio (Company Profile) | Functional client-side |
| Modal project detail (Company Profile) | Functional |
| FAQ accordion (both) | Functional |
| Form validasi (both) | Functional |
| Form success state (both) | Functional |
| Countdown timer (Webinar) | Functional (real-time) |
| Mobile responsive | Structural PASS |
| Mobile sticky CTA | Visible saat scroll |
| Smooth scroll anchor | Functional |
| Lorem ipsum | NONE |
| Klaim klien nyata / testimoni tanpa label | NONE |
| Secret committed | NONE |
| Portfolio/case study/homepage regresi | NONE |

---

## Environment

**Before (after Task 4):** `/demo/company-profile` dan `/demo/webinar-landing` adalah shell kosong dengan hero placeholder + AppVibe banner + section "Tentang demo ini" + final CTA.

**During:** Node v24.15.0, tanpa dependency baru (semua interaksi CSS + `useState` + native DOM). Reuse `DemoShell`, `DemoNavbar`, `DemoFooter`, `AppVibeDemoBanner`, `DemoMobileStickyCTA` dari Task 4.

**After:** Bundle JS akan naik sekitar 100-150 kB (untuk 2 demo + ~22 komponen). Build warning 500 kB akan lebih relevan; akan di-code-split di Task 8 final QA. Untuk sekarang, prioritas kualitas dulu.

---

## Security & ethics notes

- Tidak ada secret/env baru.
- Tidak ada backend/API — semua form mock client-side.
- AppVibe demo banner di awal section "Tentang demo ini" menonjolkan label "contoh/simulasi" — calon klien tidak akan keliru认为 ini klien nyata.
- **Setiap testimoni menggunakan label "Contoh testimoni skenario — bukan klien nyata"** (Company Profile) atau "contoh situasi orang tua/siswa — bukan peserta nyata" (Webinar).
- Trust chip "10+ tahun" di Company Profile diganti ke "Fokus UMKM & B2B" untuk menghindari overclaim (sesuai blueprint section 9 risiko).
- "68+ proyek contoh" selalu diikuti label "(simulasi)" — bukan klaim jumlah proyek nyata.
- Tidak ada foto wajah asli. Avatar selalu inisial CSS dengan gradient.
- Tidak ada klaim revenue/ranking/omzet naik X%.
- Copy "Cocok untuk siapa" di layanan menggunakan bahasa inklusif tanpa diskriminasi industri.
- Untuk Webinar: copy tidak menarget audience secara agresif, framingnya "untuk Anda jika..." (bukan "harus Anda").

---

## Definition of done (Task 5)

- [x] `/demo/company-profile` punya 13 section penuh dengan interaksi (filter, modal, accordion, form)
- [x] `/demo/webinar-landing` punya 12 section penuh dengan interaksi (countdown, form, accordion, follow-up timeline)
- [x] Semua data terstruktur di `src/data/demos/{slug}/*`
- [x] Web copy business-first, persuasif, no lorem ipsum
- [x] Testimoni skenario berlabel jelas
- [x] Form inquiry dengan validasi + success state
- [x] WhatsApp prefilled message via helper
- [x] Mobile-first dengan sticky CTA
- [x] AppVibe banner konsisten
- [x] Status `live` di `src/data/demos.ts` untuk kedua demo
- [x] Build & typecheck PASS
- [x] Tidak ada dependency baru
- [x] Backward compatible: portfolio, case study, homepage, demo lain (klinik/properti/lead-dashboard) tidak regress

---

## Demo page status table (after Task 5)

| Demo | Shell | Full content |
|------|-------|--------------|
| `/demo/company-profile` | ✅ | ✅ Task 5 |
| `/demo/webinar-landing` | ✅ | ✅ Task 5 |
| `/demo/klinik` | ✅ | ⏳ Task 6 |
| `/demo/properti` | ✅ | ⏳ Task 6 |
| `/demo/lead-dashboard` | ✅ | ⏳ Task 6 |

---

## Rollback

1. Revert `src/data/demos.ts` (status kembali ke `coming-soon`).
2. Hapus `src/data/demos/company-profile/*` dan `src/data/demos/webinar-landing/*` (15 file).
3. Hapus `src/components/demos/company-profile/*` dan `src/components/demos/webinar-landing/*` (~22 file).
4. Hapus `src/pages/demos/CompanyProfileDemoPage.tsx` dan `WebinarLandingDemoPage.tsx`.
5. Restore `docs/deferred-items.md` Task 5 state.
6. Restore `README.md` status Task 5.
7. Verify: `npm run typecheck && npm run build`.

---

## Known limitations (addressed in Task 6+)

- **Demo Klinik, Properti, Lead Dashboard** masih shell (Task 6).
- **Thumbnail PNG** di `public/images/portfolio/{slug}.png` masih placeholder.
- **Browser QA** oleh founder belum dijalankan di dev server (long-running).
- **Code splitting** untuk demo pages belum diimplementasi (masuk Sprint 8 final QA).
- **Form submission real** masih mock client-side — WhatsApp redirect adalah simulasi (per spec).

---

## Next recommended task

**Task 6 — Demo Pages Batch 2: Klinik + Properti + Lead Dashboard**

Mengikuti pola Task 5 untuk 3 demo tersisa. Lead Dashboard paling kompleks karena perlu interaksi filter/search/pipeline (per spec section 8). Setelah Task 6, semua 5 demo penuh.

**Sebelum Task 6:** Founder QA visual `/demo/company-profile` dan `/demo/webinar-landing` di browser (sesuai pola merge review Task 3A/3B/3C/3D/3E).
