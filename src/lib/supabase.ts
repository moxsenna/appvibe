import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database";

/**
 * Supabase client — used by the Lead Dashboard demo to read the showcase tenant.
 *
 * - Anon key only. RLS protects read/write per tenant.
 * - When env vars are missing (e.g. fresh clone), client falls back to null so
 *   the demo can render its previous static mock without throwing.
 *
 * Setup: see `docs/19-supabase-setup-guide.md` for one-time provisioning steps.
 */

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase: SupabaseClient<Database> | null = isSupabaseConfigured
  ? createClient<Database>(supabaseUrl!, supabaseAnonKey!, {
      auth: { persistSession: false },
      realtime: { params: { eventsPerSecond: 5 } },
    })
  : null;

/** Showcase tenant id — single shared demo workspace for anonymous visitors. */
export const SHOWCASE_TENANT_ID =
  import.meta.env.VITE_SUPABASE_SHOWCASE_TENANT_ID ?? null;
