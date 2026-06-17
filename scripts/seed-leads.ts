/**
 * Seed the Lead Dashboard showcase tenant with the same 50 mock leads
 * the static demo used to ship with.
 *
 * Usage:
 *   1. Set in `.env.local` at project root:
 *        VITE_SUPABASE_URL=...
 *        VITE_SUPABASE_SHOWCASE_TENANT_ID=...
 *        SUPABASE_SERVICE_ROLE_KEY=...      ← server-side only, never expose
 *   2. Run: `npm run seed:leads`
 *
 * Re-running is safe: it deletes existing rows in the showcase tenant first.
 */
import { config } from "dotenv";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";
import { leads } from "../src/data/demos/lead-dashboard/leads.ts";
import { team } from "../src/data/demos/lead-dashboard/team.ts";

// ----------------------------------------------------------------------------
// 1) Resolve .env.local absolutely (project root, regardless of cwd)
// ----------------------------------------------------------------------------
const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, "..");
const envPath = resolve(PROJECT_ROOT, ".env.local");

console.log(`[seed] Project root: ${PROJECT_ROOT}`);
console.log(`[seed] Looking for env at: ${envPath}`);

if (!existsSync(envPath)) {
  console.error(`\n❌ .env.local TIDAK ditemukan di: ${envPath}\n`);
  console.error("Cek:");
  console.error(" • File harus bernama persis '.env.local' (titik di depan).");
  console.error(" • Windows kadang sembunyikan ekstensi — pastikan BUKAN '.env.local.txt'.");
  console.error("   Cara cek: di File Explorer → View → centang 'File name extensions'.");
  console.error(" • File harus ada di root project (sejajar dengan package.json).\n");
  process.exit(1);
}

// ----------------------------------------------------------------------------
// Inspect raw bytes BEFORE letting dotenv touch the file — Windows editors
// can silently save as UTF-16 LE/BE, which makes dotenv parse 0 keys.
// ----------------------------------------------------------------------------
const rawBytes = readFileSync(envPath);
console.log(`[seed] File size: ${rawBytes.length} bytes`);

if (rawBytes.length === 0) {
  console.error("\n❌ .env.local kosong (0 bytes). Isi dulu dengan 4 baris var.\n");
  process.exit(1);
}

const b0 = rawBytes[0];
const b1 = rawBytes[1];
const b2 = rawBytes[2];

let encoding: "utf-8" | "utf-8-bom" | "utf-16-le" | "utf-16-be" | "unknown" = "utf-8";
if (b0 === 0xef && b1 === 0xbb && b2 === 0xbf) encoding = "utf-8-bom";
else if (b0 === 0xff && b1 === 0xfe) encoding = "utf-16-le";
else if (b0 === 0xfe && b1 === 0xff) encoding = "utf-16-be";

console.log(`[seed] First 3 bytes: 0x${b0.toString(16)} 0x${b1?.toString(16) ?? "??"} 0x${b2?.toString(16) ?? "??"}  →  encoding: ${encoding}`);

if (encoding === "utf-16-le" || encoding === "utf-16-be") {
  console.error(`\n❌ .env.local di-save sebagai ${encoding.toUpperCase()}.`);
  console.error("   dotenv hanya bisa baca UTF-8. Ini sering terjadi saat:");
  console.error("   • Save dari Notepad dengan encoding default Windows");
  console.error("   • Redirect PowerShell ke file ('>' atau 'Out-File')\n");
  console.error("FIX (pilih salah satu):\n");
  console.error("  A. Pakai VSCode:");
  console.error("     1. Buka .env.local di VSCode");
  console.error("     2. Klik encoding di status bar (kanan bawah, mis. 'UTF-16 LE')");
  console.error("     3. Pilih 'Save with Encoding' → 'UTF-8'\n");
  console.error("  B. Recreate via PowerShell (1 command, paling cepat):");
  console.error("     Hapus file lama, lalu paste perintah ini di PowerShell (sudah cd ke project root):\n");
  console.error("     @\"");
  console.error("     VITE_APP_NAME=AppVibe Studio");
  console.error("     VITE_SITE_URL=http://localhost:5173");
  console.error("     VITE_WHATSAPP_NUMBER=6285179595302");
  console.error("     VITE_SUPABASE_URL=https://xxxxx.supabase.co");
  console.error("     VITE_SUPABASE_ANON_KEY=eyJ...");
  console.error("     VITE_SUPABASE_SHOWCASE_TENANT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
  console.error("     SUPABASE_SERVICE_ROLE_KEY=eyJ...");
  console.error("     \"@ | Set-Content -Encoding utf8 -NoNewline:$false .env.local\n");
  process.exit(1);
}

if (encoding === "utf-8-bom") {
  console.warn("[seed] ⚠️  File punya UTF-8 BOM. Beberapa versi dotenv gagal parse line pertama.");
  console.warn("[seed]    Saran: di VSCode, klik 'UTF-8 with BOM' di status bar → pilih 'UTF-8'.\n");
}

// Show line count for sanity (without leaking values)
const decoded = rawBytes.toString("utf-8");
const lines = decoded.split(/\r?\n/);
const nonEmptyLines = lines.filter((l) => l.trim() && !l.trim().startsWith("#"));
console.log(`[seed] Total lines: ${lines.length}, non-empty/non-comment: ${nonEmptyLines.length}`);
if (nonEmptyLines.length > 0) {
  console.log(`[seed] First var line (key only): ${nonEmptyLines[0]?.split("=")[0]}`);
}
console.log("");

const result = config({ path: envPath });
if (result.error) {
  console.error(`\n❌ Gagal parse .env.local:`, result.error.message, "\n");
  process.exit(1);
}

const loadedKeys = Object.keys(result.parsed ?? {});
console.log(`[seed] ✓ Loaded ${loadedKeys.length} vars: ${loadedKeys.join(", ")}\n`);

// ----------------------------------------------------------------------------
// 2) Validate required vars
// ----------------------------------------------------------------------------
const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const TENANT_ID = process.env.VITE_SUPABASE_SHOWCASE_TENANT_ID;

const missing: string[] = [];
if (!SUPABASE_URL) missing.push("VITE_SUPABASE_URL");
if (!SERVICE_ROLE_KEY) missing.push("SUPABASE_SERVICE_ROLE_KEY");
if (!TENANT_ID) missing.push("VITE_SUPABASE_SHOWCASE_TENANT_ID");

if (missing.length > 0) {
  console.error("\n❌ Missing env vars di .env.local:");
  missing.forEach((k) => console.error(`   • ${k}`));
  console.error("\nFile .env.local ter-load, tapi var di atas kosong / typo.");
  console.error(`Var yang berhasil di-load: ${loadedKeys.join(", ") || "(tidak ada)"}\n`);
  process.exit(1);
}

console.log(`[seed] ✓ Supabase URL: ${SUPABASE_URL!.slice(0, 40)}…`);
console.log(`[seed] ✓ Showcase tenant: ${TENANT_ID}`);
console.log(`[seed] ✓ Service role key: ${SERVICE_ROLE_KEY!.slice(0, 12)}…\n`);

// ----------------------------------------------------------------------------
// 3) Seed
// ----------------------------------------------------------------------------
const supabase = createClient(SUPABASE_URL!, SERVICE_ROLE_KEY!, {
  auth: { persistSession: false },
});

const memberById = new Map(team.map((m) => [m.id, m.name]));

async function main() {
  console.log(`[seed] Wiping showcase tenant ${TENANT_ID}…`);
  const wipe = await supabase
    .from("leads")
    .delete()
    .eq("tenant_id", TENANT_ID!);
  if (wipe.error) throw wipe.error;

  console.log(`[seed] Inserting ${leads.length} leads…`);
  const rows = leads.map((l) => ({
    tenant_id: TENANT_ID,
    name: l.name,
    phone: l.phone,
    business: l.business,
    need_type: l.needType,
    source: l.source,
    status: l.status,
    priority: l.priority,
    assigned_name: memberById.get(l.assignedId) ?? null,
    estimated_value: l.estimatedValue,
    notes: l.notes,
    last_contact_at:
      l.lastContact === "-" ? null : new Date(l.lastContact).toISOString(),
    created_at: new Date(l.createdAt).toISOString(),
  }));

  const { data: insertedLeads, error: insertError } = await supabase
    .from("leads")
    .insert(rows)
    .select("id, name");

  if (insertError) throw insertError;
  console.log(`[seed] ✓ Inserted ${insertedLeads?.length ?? 0} lead rows.`);

  // Map original id → new uuid via order (insert preserves order on Postgres)
  const idMap = new Map<string, string>();
  leads.forEach((l, i) => {
    const inserted = insertedLeads?.[i];
    if (inserted) idMap.set(l.id, inserted.id);
  });

  // Activities
  const activities = leads.flatMap((l) =>
    l.activity.map((a) => ({
      lead_id: idMap.get(l.id)!,
      tenant_id: TENANT_ID,
      actor_label: memberById.get(l.assignedId) ?? null,
      kind: "note" as const,
      payload: { note: a.note },
      created_at: new Date(a.date).toISOString(),
    })),
  );

  console.log(`[seed] Inserting ${activities.length} activities…`);
  // Chunk to keep payload sane
  for (let i = 0; i < activities.length; i += 100) {
    const chunk = activities.slice(i, i + 100);
    const { error } = await supabase.from("lead_activities").insert(chunk);
    if (error) throw error;
  }

  console.log("\n[seed] ✅ Done. Restart `npm run dev` dan buka /demo/lead-dashboard.\n");
}

main().catch((err) => {
  console.error("\n[seed] ❌ FAILED:", err.message ?? err);
  if (err?.code) console.error("       code:", err.code);
  if (err?.hint) console.error("       hint:", err.hint);
  process.exit(1);
});

