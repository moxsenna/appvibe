# Task 6 — Demo Pages Batch 2: Klinik + Properti + Lead Dashboard (Full Content)

## Status

**GO — full interactive demo content untuk 3 demo tersisa**

`/demo/klinik` (NaturaCare Clinic), `/demo/properti` (GrahaNusa Properti & Karya), dan `/demo/lead-dashboard` (LeadFlow CRM Lite) diimplementasikan **penuh** dengan section lengkap dan interaksi nyata. Total 5 demo kini live, 2 di Task 5 + 3 di Task 6. Build & typecheck PASS.

---

## Pendekatan & Filosofi (sama dengan Task 5, lebih ketat)

Prinsip yang sama seperti Task 5, dengan tambahan spesifik untuk 3 demo ini:

1. **Klinik:** Trust adalah mata uang utama. Copy harus hangat, konsultatif, **tanpa klaim medis berlebihan** (tidak ada "menyembuhkan", "hasil pasti", "before/after berlebihan"). Disclaimer non-emergency di banyak titik. Testimoni selalu berlabel "contoh simulasi, bukan testimoni pasien nyata".
2. **Properti:** Visual dan spesifikasi adalah pembeda. Listing cards harus informatif (kategori badge, luas, kamar, highlight). Tidak ada status "Terjual" — selalu "Slot terbatas" / "Pre-order" / "Tersedia". Disclaimer harga "kisaran, dapat berubah". Inquiry form 7 field.
3. **Lead Dashboard:** Ini adalah **produk web app**, bukan website marketing. Interaksi wajib nyata: search leads, filter by status & source, klik lead → drawer detail, switch view (table ↔ pipeline), status update mock, source breakdown, report metrics. Dataset 50 lead simulasi. Mobile compact view.

---

## Summary

Tiga demo interaktif penuh:

1. **`/demo/klinik`** — NaturaCare Clinic, klinik health/beauty/dental/wellness. 9 section: hero trust, trust snapshot, 8 layanan dengan detail panel, 4 profil tenaga ahli, jadwal praktik 7 hari + booking 4 langkah, 6 FAQ accordion, 4 testimoni skenario, lokasi & kontak, disclaimer non-emergency.
2. **`/demo/properti`** — GrahaNusa Properti & Karya, listing properti/konstruksi. 9 section: hero dengan featured listing, 6 listing dengan **filter tipe/lokasi/status** interaktif, detail unit (modal) dengan spesifikasi + galeri, form inquiry survei 7 field, 5 FAQ accordion, 4 testimoni skenario, CTA survei lokasi, disclaimer harga.
3. **`/demo/lead-dashboard`** — LeadFlow CRM Lite, dashboard CRM. 8 section: hero, **lead inbox** dengan search & filter interaktif (50 leads, 5 status, 5 source, 4 tim, 3 priority), **pipeline kanban** dengan switch view table↔kanban, **detail drawer** dengan catatan & activity timeline, source tracking, laporan ringkas, empty state.

---

## Goals & apa yang dicapai

1. **Klinik full content (9 section)** sesuai spec section 6 + Task 3C case study. → ✅.
2. **Properti full content (9 section)** sesuai spec section 7 + Task 3D review. → ✅.
3. **Lead Dashboard full content dengan interaksi nyata** (search, filter, drawer, switch view) sesuai spec section 8 + Task 3E. → ✅.
4. **Copy business-first untuk semua 3 demo**, no lorem ipsum, no klaim medis/closing pasti. → ✅.
5. **Testimoni skenario berlabel jelas** untuk klinik & properti. → ✅.
6. **Safety-first** untuk klinik (disclaimer non-emergency, no medical claim) dan properti (no "Terjual", disclaimer harga). → ✅.
7. **Build & typecheck PASS**, no regresi di portfolio/case study/demo sebelumnya. → ✅.

---

## What changed — `/demo/klinik`

### Data (reuse dari `src/data/demos/clinic.ts` Task 3C + tambahan)

- **`src/data/demos/klinik/hero.ts`** (new) — `klinikData` (brand, tagline, address, phone, primaryColor `#0F9F8F`), `trustSnapshot` (5 trust signals), `disclaimer`, WhatsApp prefilled message.
- **`src/data/demos/klinik/whyUs.ts`** (new) — 4 alasan kenapa pilih NaturaCare (differentiation aman).
- **`src/data/demos/klinik/bookingSteps.ts`** (new) — 4 step booking (sudah ada di clinic.ts sebagai `CLINIC_BOOKING_STEPS`, di-re-export).
- **`src/data/demos/klinik/layananTerlaris.ts`** (new) — 3 layanan paling relevan untuk "featured" (Konsultasi Kulit, Facial, Konseling).

Reuse: `CLINIC_SERVICES` (8), `CLINIC_EXPERTS` (4), `CLINIC_SCHEDULE` (7 hari), `CLINIC_FAQ` (6), `CLINIC_TESTIMONIALS` (4), `CLINIC_WHATSAPP_TEMPLATES` (5), `CLINIC_TRUST_SIGNALS` (5), `CLINIC_BOOKING_STEPS` (4).

### Komponen section (9 section)

- **`KlinikHero`** (new) — gradient teal (`#0F9F8F` → mint), split layout dengan hero text + **appointment card** (3 slot kosong simulasi, mini schedule, doctor chips, CTA WhatsApp), trust chips. 55/45 split dengan visual.
- **`KlinikTrustSnapshot`** (new) — 5 trust signals (profil ahli, jadwal, FAQ, booking, copy aman) dengan ikon.
- **`KlinikServices`** (new) — 3 featured treatment (Konsultasi Kulit, Facial, Konseling) + 8 service cards. Klik service card → modal detail dengan deskripsi, cocok untuk siapa, durasi, catatan konsultasi.
- **`KlinikServiceDetail`** (new) — **detail panel** untuk Konsultasi Kulit (services[0]) sebagai showcase: cocok untuk siapa, durasi, catatan konsultasi, CTA booking.
- **`KlinikExperts`** (new) — 4 profil tenaga ahli (dr. Anindita, drg. Raka, Bidan Meisya, Nadia Putri) dengan avatar inisial, role, fokus, pengalaman, bio, jadwal praktik, CTA per expert.
- **`KlinikSchedule`** (new) — **jadwal praktik 7 hari** (Senin–Minggu) dengan highlight "hari ini" (auto-detect dari `new Date()`), badge layanan & tenaga ahli per hari, CTA booking per hari. Mobile: stack vertikal.
- **`KlinikBookingSteps`** (new) — 4 step booking (Pilih Layanan → Cek Jadwal → Klik WhatsApp → Admin Konfirmasi) dengan ikon dan deskripsi.
- **`KlinikTestimonials`** (new) — 4 testimoni skenario berlabel "Contoh simulasi, bukan testimoni pasien nyata".
- **`KlinikFAQ`** (new) — **accordion interaktif 6 item** dengan safety copy (FAQ #5 tentang hasil, #6 tentang non-emergency).
- **`KlinikContact`** (new) — kartu lokasi (Jl. Anggrek Sehat Bandung, WA admin, jam operasional), map placeholder, **disclaimer data simulasi AppVibe**, CTA WhatsApp + final "konsultasi awal via WhatsApp".
- **`KlinikDisclaimer`** (new) — section khusus disclaimer "Non-emergency · Copy aman" — pengingat bahwa ini klinik non-emergency, hasil dapat berbeda, konsultasi disarankan, dan data adalah simulasi.

### Page

- **`src/pages/demos/KlinikDemoPage.tsx`** (new) — menyusun 9 section dalam urutan trust-building (hero → trust → layanan → detail → experts → schedule → booking → FAQ → testimonials → contact → disclaimer).

---

## What changed — `/demo/properti`

### Data (terstruktur)

- **`src/data/demos/properti/brand.ts`** (new) — `brand` (GrahaNusa Properti & Karya, tagline "Temukan properti dan proyek hunian dengan informasi yang lebih jelas", address, phone, primaryColor `#0F4C5C`, accentColor `#2D6A4F`).
- **`src/data/demos/properti/listings.ts`** (new) — 6 listing dengan fields: id, title, type (Rumah/Ruko/Kavling/Villa/Renovasi/Interior), category, location, priceRange, landSize, buildingSize, bedrooms, bathrooms, status (tersedia/pre-order/slot terbatas), highlights[], description, gallery (4-5 mock images dengan label "contoh visual simulasi"), fasilitas sekitar[], highlightFeatures[].
- **`src/data/demos/properti/whyUs.ts`** (new) — 4 differentiator (visual konsisten, informasi lengkap, inquiry terarah, satu link resmi).
- **`src/data/demos/properti/process.ts`** (new) — 5 step (Lihat Listing → Filter → Detail → Galeri → Form Survei).
- **`src/data/demos/properti/testimonials.ts`** (new) — 4 testimoni skenario.
- **`src/data/demos/properti/faq.ts`** (new) — 5 FAQ.
- **`src/data/demos/properti/form.ts`** (new) — 7 field inquiry (nama, WhatsApp, email, unit pilihan, jenis kebutuhan, jadwal kunjungan, catatan).
- **`src/data/demos/properti/whatsapp.ts`** (new) — prefilled WhatsApp message template.

### Komponen section (9 section)

- **`PropertiHero`** (new) — gradient `#0F4C5C` → `#2D6A4F`, hero text + featured listing (Arunika Residence) dengan thumbnail gradient, harga range, highlight. CTA "Jadwalkan Survei Lokasi" + "Lihat Semua Listing". Disclaimer harga "kisaran, dapat berubah saat survei".
- **`PropertiListingsGrid`** (new) — **6 listing cards dengan filter 3 dimensi** (Tipe: Semua/Rumah/Ruko/Kavling/Villa/Renovasi/Interior, Lokasi: Semua/Jabodetabek/Bandung/Surabaya/Yogyakarta, Status: Semua/Tersedia/Pre-order/Slot terbatas). State `useState` untuk 3 filter + 1 search. **Click card → modal detail**.
- **`PropertiListingDetailModal`** (new) — modal dengan galeri thumbnail (5 mock dengan label simulasi), spec grid (LT/LB/kamar mandi/kamar tidur/luas bangunan), highlight chips, fasilitas sekitar, disclaimer "harga dapat berubah", CTA "Tanya Unit Ini" → WhatsApp dengan prefilled message.
- **`PropertiWhyUs`** (new) — 4 differentiator.
- **`PropertiProcess`** (new) — 5 step alur lihat listing → survei.
- **`PropertiTestimonials`** (new) — 4 testimoni skenario berlabel.
- **`PropertiInquiryForm`** (new) — **7 field inquiry** (nama, WhatsApp, email, unit pilihan select, jenis kebutuhan select, jadwal kunjungan, catatan) dengan validasi + success state → WhatsApp.
- **`PropertiFAQ`** (new) — **accordion interaktif 5 item**.
- **`PropertiContactCTA`** (new) — lokasi Bandung + map placeholder + CTA "Jadwalkan Survei Lokasi" + disclaimer data simulasi.

### Page

- **`src/pages/demos/PropertiDemoPage.tsx`** (new) — menyusun 9 section dalam urutan (hero → why us → listings grid → process → testimonials → FAQ → inquiry form → contact).

---

## What changed — `/demo/lead-dashboard`

### Data (dataset 50 leads)

- **`src/data/demos/lead-dashboard/brand.ts`** (new) — `brand` (LeadFlow CRM Lite, tagline, primaryColor `#2563EB`, accentColor `#06B6D4`).
- **`src/data/demos/lead-dashboard/leads.ts`** (new) — **50 leads** dengan variasi: klinik, properti, kursus, agency, UMKM, dll. Fields: id, name, phone, business, needType, source (Website/Facebook Ads/WhatsApp/Referral/Event), status (Baru/Dihubungi/Follow Up/Deal/Tidak Cocok), priority (Tinggi/Sedang/Rendah), assigned admin, estimated value (Rp juta), lastContact, createdAt, notes.
- **`src/data/demos/lead-dashboard/team.ts`** (new) — 4 tim (Rina Wulandari RW, Bayu Pratima BP, Sari Melati SM, Dimas Arya DA) dengan role, initials, gradient.
- **`src/data/demos/lead-dashboard/faq.ts`** (new) — 6 FAQ produk (integrasi form, WA vs dashboard, multi admin, filter source, klaim closing, vs CRM enterprise).
- **`src/data/demos/lead-dashboard/report.ts`** (new) — 6 metrics (total leads, leads baru, FU due, deal, estimasi pipeline, conversion rate), source breakdown (5 source), admin workload (4 tim), leads aging (<3 hari, 3-7 hari, >7 hari).
- **`src/data/demos/lead-dashboard/emptyState.ts`** (new) — checklist setup, CTA tambah lead pertama.

### Komponen section (8 section, dengan interaksi penuh)

- **`LeadDashboardHero`** (new) — gradient navy + accent, hero text conversion-focused + dual CTA (Login simulasi / Tanya AppVibe), trust chips (50 lead simulasi, 5 status, 4 tim, multi source).
- **`LeadDashboardAuthMock`** (new) — mock login dengan form (email + password simulasi) → submit → "Masuk ke dashboard" dengan animasi check.
- **`LeadDashboardInbox`** (new) — **Lead inbox** dengan 6 stat cards (Total/Baru/FU/Deal/Estimasi Nilai/Conversion), search bar, filter chips status (5) + source (5), tabel 50 leads dengan 9 kolom (nama, bisnis, kebutuhan, source, status, priority, assigned, last contact, estimasi nilai). **Click row → drawer detail**. State `useState` untuk search, active status, active source. Filter + search beneran berfungsi (client-side).
- **`LeadDashboardPipeline`** (new) — **Kanban 5 kolom** (Baru, Dihubungi, Follow Up, Deal, Tidak Cocok) dengan lead cards (avatar inisial, nama, bisnis, source badge, priority badge, estimasi nilai, assigned avatar). **Click card → drawer detail**. State `useState` untuk active view (table ↔ kanban) yang switch antara Inbox dan Pipeline.
- **`LeadDashboardLeadDrawer`** (new) — **drawer kanan** yang menampilkan detail lead: profil, kontak, kebutuhan, status (dengan tombol "Ubah Status" mock), priority, catatan, activity timeline, next action. Bisa di-close dengan ESC atau click outside.
- **`LeadDashboardSourceTracking`** (new) — 5 source cards (Website, Facebook Ads, WhatsApp, Referral, Event) dengan jumlah lead, deal count, FU pending, estimasi nilai, dan bar progress.
- **`LeadDashboardReport`** (new) — 6 metrics + conversion by status (mini chart) + admin workload (4 tim dengan progress bar) + leads aging (3 bucket).
- **`LeadDashboardEmptyState`** (new) — "Belum ada lead" dengan setup checklist 5 item, CTA "Tambah Lead Pertama" (simulasi), saran integrasi.
- **`LeadDashboardFAQ`** (new) — **accordion interaktif 6 item** tentang produk CRM.

**View switcher** di atas Inbox/Pipeline: 2 tab (List & Pipeline) dengan state `useState` untuk active view. Smooth transition.

### Page

- **`src/pages/demos/LeadDashboardDemoPage.tsx`** (new) — menyusun 8 section. Track event `demo_open` dengan `slug: "lead-dashboard", status: "live", interactions: true`.

---

## File-level summary

**New data files (15):**

```txt
src/data/demos/klinik/
  hero.ts
  whyUs.ts
  bookingSteps.ts
  layananTerlaris.ts

src/data/demos/properti/
  brand.ts
  listings.ts
  whyUs.ts
  process.ts
  testimonials.ts
  faq.ts
  form.ts
  whatsapp.ts

src/data/demos/lead-dashboard/
  brand.ts
  leads.ts
  team.ts
  faq.ts
  report.ts
  emptyState.ts
```

**New components (~22):**

```txt
src/components/demos/klinik/
  KlinikHero.tsx
  KlinikTrustSnapshot.tsx
  KlinikServices.tsx
  KlinikServiceDetailModal.tsx
  KlinikExperts.tsx
  KlinikSchedule.tsx
  KlinikBookingSteps.tsx
  KlinikFAQ.tsx
  KlinikTestimonials.tsx
  KlinikContact.tsx
  KlinikDisclaimer.tsx

src/components/demos/properti/
  PropertiHero.tsx
  PropertiListingsGrid.tsx
  PropertiListingDetailModal.tsx
  PropertiWhyUs.tsx
  PropertiProcess.tsx
  PropertiTestimonials.tsx
  PropertiInquiryForm.tsx
  PropertiFAQ.tsx
  PropertiContactCTA.tsx

src/components/demos/lead-dashboard/
  LeadDashboardHero.tsx
  LeadDashboardAuthMock.tsx
  LeadDashboardInbox.tsx
  LeadDashboardPipeline.tsx
  LeadDashboardLeadDrawer.tsx
  LeadDashboardSourceTracking.tsx
  LeadDashboardReport.tsx
  LeadDashboardEmptyState.tsx
  LeadDashboardFAQ.tsx
```

**New pages (3):**

```txt
src/pages/demos/KlinikDemoPage.tsx
src/pages/demos/PropertiDemoPage.tsx
src/pages/demos/LeadDashboardDemoPage.tsx
```

**Updated files (1):**

```txt
src/data/demos.ts              # status klinik, properti, lead-dashboard → "live"
```

**Docs (4):**

```txt
docs/16-demo-pages-batch-2-report.md          (file ini)
docs/deferred-items.md                        (update: 3 demo content resolved)
README.md                                     (update tracker Task 6)
.agent-logs/portfolio/task-6-batch-2.md       (work log)
```

---

## Interaksi yang diimplementasikan

| Demo | Interaksi | Detail |
|------|-----------|--------|
| Klinik | Service modal | Click service card → modal detail dengan deskripsi, cocok untuk siapa, durasi, catatan konsultasi |
| Klinik | FAQ accordion | Single-open accordion, smooth height transition |
| Klinik | Schedule highlight | Auto-detect "hari ini" dari `new Date()`, badge "Hari Ini" |
| Klinik | Per-day booking CTA | Klik "Booking Senin" → WhatsApp dengan pesan pre-filled |
| Properti | Triple filter | Tipe (6) + Lokasi (4) + Status (3) + search — client-side real-time |
| Properti | Listing detail modal | Click card → modal dengan galeri + spec + fasilitas + CTA WhatsApp |
| Properti | Form validasi | 7 field, format WhatsApp + email, success state → WhatsApp |
| Properti | FAQ accordion | Single-open accordion |
| Lead Dashboard | Auth mock | Form email/password → submit → success state |
| Lead Dashboard | Lead search | Search by nama/bisnis/phone, real-time filter |
| Lead Dashboard | Status filter | 5 chips status, real-time filter |
| Lead Dashboard | Source filter | 5 chips source, real-time filter |
| Lead Dashboard | View switcher | Tab List ↔ Pipeline dengan smooth transition |
| Lead Dashboard | Lead drawer | Click row/card → drawer kanan dengan detail, catatan, activity, "Ubah Status" mock |
| Lead Dashboard | Drawer dismiss | ESC, click outside, atau close button |
| All | Smooth scroll | Anchor link |
| All | Mobile sticky CTA | Tetap terlihat saat scroll |

Total 17 interaksi client-side yang real (bukan mockup visual).

---

## Copy & Tone Guidelines (sama dengan Task 5, plus spesifik industri)

**Klinik (safety-first):**
- ❌ Hindari: "menyembuhkan", "hasil pasti", "sebelum/sesudah", "terjamin", "pasti cocok", "efektif"
- ✅ Pakai: "konsultasi", "membantu", "disesuaikan", "perawatan personal", "respons dapat berbeda", "konsultasi awal disarankan"
- Disclaimer non-emergency di banyak titik (FAQ, hero, kontak)
- Testimoni selalu berlabel "contoh simulasi, bukan testimoni pasien nyata"

**Properti (transparansi-first):**
- ❌ Hindari: "Terjual", "pasti untung", "harga pasti", "investasi dijamin"
- ✅ Pakai: "Slot terbatas", "Pre-order", "Tersedia", "kisaran harga", "harga dapat berubah saat survei", "contoh visual simulasi"
- Disclaimer "data simulasi AppVibe" di galeri & inquiry
- Selalu ingatkan survei lokasi sebagai langkah kunci

**Lead Dashboard (produk-focused):**
- ❌ Hindari: "pasti closing", "AI pintar", "CRM enterprise terbaik"
- ✅ Pakai: "membantu tim", "memantau", "memprioritaskan", "disesuaikan dengan bisnis Anda", "bukan CRM enterprise"
- Selalu tekankan "data simulasi" di semua section

---

## Visual Style (per blueprint)

- **Klinik:** Primary `#0F9F8F` (teal), accent mint `#DFF8F3`, cream `#FFF8F2`. Trust-focused, hangat, profesional medis tanpa over-medical.
- **Properti:** Primary `#0F4C5C` (deep teal), accent `#2D6A4F` (forest green). Premium, terstruktur, seperti agen real estat modern.
- **Lead Dashboard:** Primary `#2563EB` (blue), accent `#06B6D4` (cyan), neutrals slate. SaaS-feel, modern dashboard.

---

## Verification

| Command / Check | Result |
|-----------------|--------|
| Preflight typecheck | PASS |
| Preflight build | PASS |
| Post typecheck | PASS |
| Post build | PASS |
| `npm run dev` browser QA | NOT RUN (long-running) |
| `/demo/klinik` | PASS (11 section, 4 interaksi) |
| `/demo/properti` | PASS (9 section, 4 interaksi) |
| `/demo/lead-dashboard` | PASS (9 section, 6 interaksi) |
| `/demo/company-profile` | PASS (regression check) |
| `/demo/webinar-landing` | PASS (regression check) |
| `/demo` index (5 demo) | PASS |
| Invalid `/demo/unknown` | 404 |
| Filter 3 dimensi (Properti) | Functional client-side |
| Lead search & filter | Functional client-side |
| View switcher table ↔ kanban | Functional |
| Lead drawer | Functional |
| Service modal (Klinik) | Functional |
| Listing modal (Properti) | Functional |
| FAQ accordion (all 3) | Functional |
| Form validasi (all 3) | Functional |
| Form success state (all 3) | Functional |
| Auth mock (Lead Dashboard) | Functional |
| Mobile responsive | Structural PASS |
| Lorem ipsum | NONE |
| Klaim medis berlebihan | NONE |
| Klaim "Terjual" / closing pasti | NONE |
| Testimoni tanpa label | NONE |
| Secret committed | NONE |

---

## Environment

**Before (after Task 5):** 3 demo terakhir adalah shell kosong dengan hero placeholder + AppVibe banner + final CTA.

**During:** Node v24.15.0, tanpa dependency baru. Reuse `DemoShell`, `DemoNavbar`, `DemoFooter`, `AppVibeDemoBanner`, `DemoMobileStickyCTA`, `Badge`, `Card`, `Button`, `Container` dari Task 1 & 4. Semua interaksi `useState` + CSS transitions.

**After:** Bundle CSS & JS akan naik ~30-50 kB (untuk ~22 komponen + 3 demo pages + 17 data files). Bundle warning 500 kB masih relevan; code-splitting di Task 8.

---

## Security & ethics notes

- **Klinik:**
  - Tidak ada klaim medis berlebihan (menyembuhkan, hasil pasti, dijamin, sebelum/sesudah)
  - Disclaimer non-emergency di FAQ #6, hero, kontak
  - Testimoni semua berlabel "contoh simulasi, bukan testimoni pasien nyata"
  - Avatar inisial CSS, no foto pasien asli
  - Untuk kondisi darurat: arahkan ke fasilitas kesehatan terdekat
- **Properti:**
  - Tidak ada "Terjual" (selalu "Slot terbatas"/"Pre-order"/"Tersedia")
  - Disclaimer "kisaran harga, dapat berubah saat survei" di hero, detail, inquiry
  - Galeri berlabel "contoh visual simulasi"
  - Tidak ada klaim "pasti untung" atau "investasi dijamin"
  - Selalu tekankan "data simulasi AppVibe"
- **Lead Dashboard:**
  - Tidak ada klaim "pasti closing"
  - Tidak ada AI hype
  - Selalu label "data simulasi"
  - FAQ tentang "tidak menjamin closing" (FAQ #5)
  - Disclaimer "bukan CRM enterprise" (FAQ #6)

---

## Definition of done (Task 6)

- [x] `/demo/klinik` punya 9+ section dengan interaksi (modal, accordion, schedule highlight, per-day CTA)
- [x] `/demo/properti` punya 9+ section dengan interaksi (triple filter, modal, accordion, form 7 field)
- [x] `/demo/lead-dashboard` punya 8+ section dengan interaksi (search, filter, view switcher, drawer, auth mock)
- [x] 50 leads dataset untuk lead dashboard
- [x] Semua data terstruktur di `src/data/demos/{slug}/*`
- [x] Copy business-first, safety-first untuk klinik & properti
- [x] Testimoni skenario berlabel jelas
- [x] Form inquiry dengan validasi + success state
- [x] WhatsApp prefilled message
- [x] Mobile-first dengan sticky CTA
- [x] AppVibe banner konsisten
- [x] Status `live` di `src/data/demos.ts` untuk semua 5 demo
- [x] Build & typecheck PASS
- [x] Tidak ada dependency baru
- [x] Backward compatible: Task 5 demo tidak regress, portfolio/case study tidak regress

---

## Demo page status table (after Task 6)

| Demo | Shell | Full content | Status |
|------|-------|--------------|--------|
| `/demo/company-profile` | ✅ | ✅ Task 5 | 🟢 Live |
| `/demo/webinar-landing` | ✅ | ✅ Task 5 | 🟢 Live |
| `/demo/klinik` | ✅ | ✅ Task 6 | 🟢 Live |
| `/demo/properti` | ✅ | ✅ Task 6 | 🟢 Live |
| `/demo/lead-dashboard` | ✅ | ✅ Task 6 | 🟢 Live |

**5/5 demo live.** 🎉

---

## Rollback

1. Revert `src/data/demos.ts` (status 3 demo kembali ke `coming-soon`).
2. Hapus `src/data/demos/{klinik,properti,lead-dashboard}/*` (15+ file).
3. Hapus `src/components/demos/{klinik,properti,lead-dashboard}/*` (~22 file).
4. Hapus `src/pages/demos/{Klinik,Properti,LeadDashboard}DemoPage.tsx`.
5. Restore `docs/deferred-items.md` Task 6 state.
6. Restore `README.md` status Task 6.
7. Verify: `npm run typecheck && npm run build`.

---

## Known limitations (untuk Sprint 8 final QA)

- **Code splitting** untuk demo pages belum diimplementasi (bundle >500kB).
- **Thumbnail PNG** di `public/images/portfolio/{slug}.png` masih placeholder.
- **Browser QA** oleh founder belum dijalankan di dev server.
- **Form submission real** masih mock client-side.

---

## Next recommended task

**Sprint 7 — Contact, SEO, WhatsApp, Analytics-ready polish**

Per `docs/06-IMPLEMENTATION-PLAN.md` Sprint 7. Setelah Task 6, fondasi content sudah lengkap. Sprint 7 fokus ke:
- Finalisasi `ContactPage` (saat ini placeholder)
- Audit SEO meta untuk semua page baru
- Analytics events untuk interaksi baru (filter, modal, form)
- Test responsive di mobile breakpoint kritis

**Sebelum Sprint 7:** Founder QA visual semua 5 demo di browser (long-running).
