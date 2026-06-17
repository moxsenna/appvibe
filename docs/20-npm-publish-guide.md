# NPM Publish Guide — @bimaputrasena/rotating-text

Package siap publish. Saya tidak run `npm publish` karena butuh login NPM Anda.
Estimasi waktu first-time: **10 menit**.

## Prasyarat

- Akun NPM aktif (daftar di [npmjs.com/signup](https://www.npmjs.com/signup) bila belum)
- Email diverifikasi
- 2FA enabled (NPM requires this for new packages sejak 2022)

## Langkah-langkah

### 1. Login ke NPM dari CLI

```bash
cd packages/rotating-text
npm login
```

Ikuti prompt browser untuk OAuth atau OTP.

### 2. Cek apakah nama package available

```bash
npm view @bimaputrasena/rotating-text
```

- Kalau muncul `npm error 404 Not Found` → nama available, lanjut
- Kalau muncul detail package → sudah ada, perlu ganti nama atau bump version

Bila scope `@bimaputrasena` belum ada, NPM akan auto-create saat publish pertama.

### 3. Install deps & build

```bash
cd packages/rotating-text
npm install
npm run build
```

Output yang diharapkan di `dist/`:
- `index.js` (ESM)
- `index.cjs` (CommonJS)
- `index.d.ts` (Types)
- Source maps

### 4. Dry-run publish (preview)

```bash
npm publish --dry-run
```

Cek output:
- `package size` < 10 KB (kalau lebih, ada file yang nyasar masuk)
- File list hanya `dist/`, `README.md`, `LICENSE`, `package.json`

### 5. Publish

```bash
npm publish --access public
```

Scoped package (`@bimaputrasena/...`) default-nya private — `--access public` wajib supaya bisa dipakai orang.

### 6. Verify

```bash
npm view @bimaputrasena/rotating-text
```

Test install di project lain:

```bash
mkdir /tmp/test-rotating-text && cd /tmp/test-rotating-text
npm init -y
npm install react react-dom @bimaputrasena/rotating-text
node -e "console.log(require('@bimaputrasena/rotating-text'))"
```

### 7. Update main repo (optional)

Untuk dogfood package sendiri di AppVibe Studio, ganti import inline:

```diff
- import { RotatingText } from "@/components/ui/RotatingText";
+ import { RotatingText } from "@bimaputrasena/rotating-text";
```

Tapi karena versi inline punya gradient Tailwind specific, biasanya lebih clean tetap pakai inline copy untuk app utama, dan package untuk ekosistem.

## Bump version

```bash
npm version patch   # 0.1.0 → 0.1.1
npm version minor   # 0.1.0 → 0.2.0
npm version major   # 0.1.0 → 1.0.0
npm publish
```

## Catatan

- **Scope tidak harus username**. Saya pilih `@bimaputrasena` untuk konsistensi dengan brand personal Anda. Kalau Anda mau:
  - Unscoped: ganti name di `package.json` jadi `rotating-text-react` atau `appvibe-rotating-text` (cek availability dulu)
  - Scope brand: `@appvibe/rotating-text` — buat org NPM dulu

- **README di NPM** akan render dari `README.md`. Pastikan link & badge berfungsi.

- **GitHub repo** disebut di `package.json.repository`. Buat repo `bimaputrasena/rotating-text` di GitHub dan push isi `packages/rotating-text/` ke sana untuk konsistensi.

- **Bundle size badge** akan kosong sampai pertama kali ada user — wajar.

## Kalau ada masalah

| Error | Solusi |
|---|---|
| `403 Forbidden` saat publish | Belum verify email, atau scope belum di-create. Run `npm whoami` untuk cek login. |
| `402 Payment Required` | Scoped package private-default. Tambah `--access public`. |
| `Package name too similar to existing` | Ganti nama. NPM block nama yang mirip dengan package populer. |
| `ETIMEDOUT` | Network issue. Try `npm config set registry https://registry.npmjs.org/`. |

## Setelah publish berhasil

1. Tambah link package ke `/uses` page (sudah ada placeholder "Open source contributions: planned" → ganti ke link)
2. Update `About` page atau Footer dengan badge "Open source maintainer"
3. Share di LinkedIn / Twitter (bonus: tag #ReactJS, #OpenSource)
