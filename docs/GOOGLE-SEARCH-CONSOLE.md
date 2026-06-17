# Google Search Console — verifikasi AppVibe

Referensi: [Verify site ownership (HTML tag)](https://support.google.com/webmasters/answer/9008080#meta_tag_verification)

## Property URL

Pastikan property di GSC sama dengan situs live, misalnya:

- `https://appvibe.web.id/` (tanpa `www`)

Homepage harus bisa dibuka **tanpa login** (incognito).

---

## Metode A — Upload file HTML (paling mudah, sudah siap)

1. Search Console → **Settings** → **Ownership verification**
2. Pilih **HTML file** (bukan HTML tag)
3. File di repo: `public/google0f197632763ef486.html`
4. URL wajib bisa diakses:

   `https://appvibe.web.id/google0f197632763ef486.html`

   Isi file (satu baris, jangan diubah):

   ```text
   google-site-verification: google0f197632763ef486.html
   ```

5. Klik **Verify**

Google **tidak** mengikuti redirect untuk file verifikasi. Pastikan tidak redirect ke domain lain.

---

## Metode B — HTML tag (meta di `<head>`)

1. Di wizard GSC, pilih **HTML tag**
2. **Salin persis** tag yang Google berikan, contoh bentuknya:

   ```html
   <meta name="google-site-verification" content="ISI_DARI_GOOGLE" />
   ```

3. Tempel di `index.html` di dalam `<head>` (setelah charset), **jangan** tebak `content` dari nama file — harus sama dengan yang di GSC
4. Deploy → cek **View Page Source** homepage (bukan hanya React/Elements):

   - Cari `google-site-verification`
   - Tag harus ada di HTML awal, dalam `<head>`, &lt; 2MB dari awal file

5. Klik **Verify** di GSC

Repo saat ini memakai `content="0f197632763ef486"` (dari nama file). Jika GSC menampilkan string lain, ganti di `index.html` lalu deploy ulang.

---

## Setelah verifikasi

- **Sitemaps** → tambah: `https://appvibe.web.id/sitemap.xml` (tanpa slash di akhir)
- Jangan hapus file HTML atau meta tag setelah verify (GSC cek berkala)

## Troubleshooting

| Gejala | Tindakan |
|--------|----------|
| Meta tidak ketemu | Source homepage belum berisi tag → redeploy Cloudflare, hard refresh / incognito |
| Meta salah | Salin ulang tag dari GSC, jangan pakai tag akun lain |
| File tidak ketemu | Buka URL file di incognito; pastikan `public/` ikut ke `dist/` |
| Property `www` vs non-`www` | Buat property yang sesuai URL canonical (`VITE_SITE_URL`) |