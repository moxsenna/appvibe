# Task 3C — Premium Case Study Page: Website Klinik, Health, dan Beauty

## Status

**GO**

Case study `/portfolio/klinik` diperkuat sesuai brief premium lengkap: copy NaturaCare Clinic trust-focused, data dummy terstruktur (8 layanan, 4 tenaga ahli, jadwal 7 hari, 6 FAQ, 4 skenario, 5 template WhatsApp), dan 7 visual preview CSS. Build, typecheck, dan browser QA PASS (Task 3C-QA, Playwright headless + screenshots).

---

## Summary

Halaman case study klinik tidak lagi generik. Menggunakan brand dummy **NaturaCare Clinic** dengan tagline *Perawatan yang Lebih Tenang, Personal, dan Terarah* — menargetkan klinik kecantikan, dental, bidan, psikolog, wellness, dan fisioterapi non-emergency. Visual preview 7 layar menunjukkan hero, layanan, detail layanan, tenaga ahli, jadwal, FAQ, dan kontak. Copy konsultatif tanpa klaim medis berlebihan; semua testimoni berlabel simulasi. Portfolio lain tidak berubah.

---

## What changed

### Data copy
- `src/data/portfolio.ts` — entry `klinik` diperkuat: summary, problem, solution, 8 features, 5 business value, 6-step user flow, 5 mock data highlights, **7 screens**

### Structured demo data
- `src/data/demos/clinic.ts` — **baru** — clinic brand, 8 services, 4 experts, 7-day schedule, 6 FAQ, 4 scenario testimonials, 5 WhatsApp templates, trust signals, booking steps

### Visual preview (7 variants)
- `src/components/portfolio/visuals/ClinicPreview.tsx` — rewrite lengkap:
  1. `hero` — ClinicHeroMockup (split layout, appointment card, doctor chips)
  2. `services` — 8 service cards grid
  3. `service-detail` — Konsultasi Kulit & Skincare panel
  4. `experts` — 4 tenaga ahli cards
  5. `schedule` — 7-day schedule dengan highlight hari ini
  6. `faq` — accordion FAQ + skenario testimoni
  7. `contact` — lokasi, kontak, map placeholder, WhatsApp CTA

### Wiring
- `src/components/portfolio/ScreensPreview.tsx` — 7-variant map untuk `klinik`; backward-compatible

### Dokumentasi
- `.agent-logs/portfolio/task-3C-klinik-case-study.md` — work log
- `docs/13C-klinik-case-study-report.md` — laporan ini
- `docs/deferred-items.md` — visual klinik resolved
- `README.md` — execution tracker Task 3C

---

## Visual screens added

| # | Variant | Komponen | Data utama |
|---|---------|----------|------------|
| 1 | hero | ClinicHeroMockup | NaturaCare, tagline, CTA, appointment card |
| 2 | services | ClinicServicesOverview | 8 layanan dengan durasi |
| 3 | service-detail | ClinicServiceDetail | Konsultasi Kulit & Skincare |
| 4 | experts | ClinicExpertsGrid | dr. Anindita, drg. Raka, Bidan Meisya, Nadia |
| 5 | schedule | ClinicScheduleCard | Jadwal Senin–Minggu |
| 6 | faq | ClinicFAQ | 6 FAQ + 2 skenario |
| 7 | contact | ClinicContactCTA | Alamat Bandung, WA, jam admin |

---

## Safety copy notes

- Tidak ada lorem ipsum
- Tidak ada data pasien nyata
- Testimoni semua berlabel *Contoh simulasi, bukan testimoni pasien nyata*
- Tidak ada klaim menyembuhkan, hasil pasti, garansi, dijamin
- Disclaimer non-emergency di FAQ #6
- Disclaimer data simulasi AppVibe di hero dan kontak
- Microcopy konsultasi disarankan, respons dapat berbeda, jadwal dapat berubah
- Palet visual: teal `#0F9F8F`, mint `#DFF8F3`, cream `#FFF8F2`

---

## Verification

| Command / Check | Result |
|-----------------|--------|
| Preflight `npm run typecheck` | PASS |
| Preflight `npm run build` | PASS |
| Post `npm run typecheck` | PASS |
| Post `npm run build` | PASS (1706 modules) |
| `npm run lint` | NOT AVAILABLE |
| Browser QA `/portfolio/klinik` | PASS (Playwright + screenshots) |
| Mobile responsive check | PASS (390px, 430px, 768px) |
| Lorem ipsum | NONE |
| Klaim medis berlebihan | NONE |
| Testimoni pasien palsu | NONE |
| Secret committed | NONE |
| Portfolio lain | PASS (unchanged) |

---

## Files changed

- `src/data/portfolio.ts`
- `src/data/demos/clinic.ts` (new)
- `src/components/portfolio/visuals/ClinicPreview.tsx`
- `src/components/portfolio/ScreensPreview.tsx`
- `.agent-logs/portfolio/task-3C-klinik-case-study.md`
- `docs/13C-klinik-case-study-report.md`
- `docs/deferred-items.md`
- `README.md`

---

## Docs updated

- `docs/13C-klinik-case-study-report.md`
- `docs/deferred-items.md`
- `README.md`

---

## Remaining blockers

- Demo page `/demo/klinik` masih deferred (Task 4+)
- Portfolio thumbnail PNG belum tersedia
- Git repository belum diinisialisasi

---

## Rollback

Revert/hapus:
1. `src/data/portfolio.ts` — entry klinik
2. `src/data/demos/clinic.ts`
3. `src/components/portfolio/visuals/ClinicPreview.tsx`
4. `src/components/portfolio/ScreensPreview.tsx` — map klinik

Lalu `npm run typecheck && npm run build`. Status: **documented, not executed**.

---

## Next recommended task

**Merge review for Klinik case study** — founder konfirmasi visual 7 layar di browser sebelum lanjut portfolio lain atau Task 4 (Demo Index).