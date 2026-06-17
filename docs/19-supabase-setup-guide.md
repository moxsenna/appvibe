# Supabase Setup Guide — Lead Dashboard Demo

Panduan provisioning Supabase untuk demo Lead Dashboard yang sudah refactor ke
real backend (Postgres + RLS + Realtime). Setelah selesai, demo akan baca dari
tabel `leads` di Supabase dengan realtime subscription aktif.

Estimasi waktu: **15–20 menit** untuk first-time setup.

---

## 1. Buat project Supabase

1. Buka [supabase.com](https://supabase.com) → **New project**
2. Region: **Southeast Asia (Singapore)** untuk latency terbaik dari Indonesia
3. Password database: simpan di password manager (tidak perlu dipakai di code)
4. Plan: **Free** sudah lebih dari cukup untuk showcase

Tunggu ~2 menit project provisioned.

---

## 2. Jalankan schema migration

1. Buka project → **SQL Editor** → **New query**
2. Copy seluruh isi `supabase/schema.sql` di repo ini, paste, **Run**
3. Setelah sukses, jalankan query ini untuk dapat showcase tenant ID:
   ```sql
   select id from public.tenants where is_showcase = true;
   ```
4. Catat UUID yang muncul (mis. `8f3a2e1c-...`)

---

## 3. Konfigurasi environment

1. Buka **Project Settings** → **API**
2. Salin:
   - **Project URL** (mis. `https://xxxxx.supabase.co`)
   - **anon public** key (panjang, dimulai dengan `eyJ...`)
   - **service_role** key (dirahasiakan — hanya untuk seed script lokal)

3. Buat `.env.local` di root repo (kalau belum ada):
   ```env
   VITE_APP_NAME=AppVibe Studio
   VITE_SITE_URL=http://localhost:5173
   VITE_WHATSAPP_NUMBER=6285179595302

   # Supabase — Lead Dashboard backend
   VITE_SUPABASE_URL=https://xxxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJ...
   VITE_SUPABASE_SHOWCASE_TENANT_ID=8f3a2e1c-...

   # Untuk seed script lokal — JANGAN commit
   SUPABASE_SERVICE_ROLE_KEY=eyJ...
   ```

   **Penting**: pastikan `.env.local` ada di `.gitignore` (sudah by default
   via Vite convention).

---

## 4. Seed 50 leads dummy ke showcase tenant

```bash
npm run seed:leads
```

Output yang diharapkan:
```
[seed] Wiping showcase tenant 8f3a2e1c-…
[seed] Inserting 50 leads…
[seed] Inserted 50 lead rows.
[seed] Inserting ~150 activities…
[seed] Done.
```

Re-run aman — script melakukan wipe + reinsert untuk tenant ini.

---

## 5. Aktifkan Realtime (sudah otomatis via schema)

Schema sudah `alter publication supabase_realtime add table` untuk `leads`
dan `lead_activities`. Verifikasi:

1. Buka **Database** → **Replication**
2. Pastikan publication `supabase_realtime` mencakup kedua tabel di atas
3. Kalau perlu enable manual, klik switch di kolom Replication

---

## 6. Test end-to-end

```bash
npm run dev
```

Buka `http://localhost:5173/demo/lead-dashboard`:

- Banner hijau **"Real backend mode"** muncul → sukses
- Status badge **"Realtime"** dengan icon berkedip → realtime aktif
- Buka tab kedua di URL yang sama → ubah status lead di satu tab → kolom
  pipeline di tab kedua geser otomatis

Kalau yang muncul banner kuning **"Fallback demo mode"**, cek:
- `.env.local` ada di root project (bukan di `src/`)
- Server dev sudah di-restart setelah mengubah `.env.local`
- 3 env var `VITE_SUPABASE_*` semuanya ter-set

---

## 7. (Optional) Hardening untuk production

Default schema mengizinkan **anonymous update** pada showcase tenant — ini
disengaja untuk demo flow. Untuk production multi-tenant:

1. Pindahkan login auth ke Better Auth atau Supabase Auth
2. Replace `is_showcase` RLS policies dengan tenant-membership check
3. Drop policy `leads_showcase_update` dan `lead_activities_showcase_insert`
4. Tambah `tenant_members` table + policy per user

Backlog ini ada di **Sprint 12** roadmap.

---

## 8. Troubleshooting

| Gejala | Kemungkinan penyebab |
|---|---|
| Banner kuning "Fallback demo mode" | Env vars belum ter-load. Restart `npm run dev`. |
| 401/403 dari Supabase | RLS policy belum ter-create. Re-run `schema.sql`. |
| Realtime stuck "Menyambung…" | Publication belum include tabel. Cek **Database → Replication**. |
| Seed gagal "missing env" | `SUPABASE_SERVICE_ROLE_KEY` belum di-set di `.env.local`. |
| Build CI gagal cari env vars | Vite skip undefined `VITE_*` saat build — aman, demo fallback ke mock. |

---

## 9. Biaya & batasan Free Tier

- Free tier Supabase: **500 MB database**, **2 GB egress/bulan**, **50K MAU**
- Lead Dashboard demo: ~50 rows × ~500 bytes ≈ **25 KB** — tidak akan
  mendekati limit kecuali ada bot yang spam update
- Realtime: 200 concurrent connections — cukup untuk portfolio traffic
- **Tidak perlu upgrade plan untuk skala portfolio**

Catatan: Supabase free project akan **paused setelah 7 hari tidak aktif**.
Re-aktivasi 1 klik dari dashboard. Untuk traffic portfolio konsisten, ini
tidak menjadi masalah.
