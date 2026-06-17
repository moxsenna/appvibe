/**
 * Supabase database types — Lead Dashboard demo schema.
 *
 * Hand-written for now. Regenerate with `supabase gen types typescript`
 * after schema changes if you want stricter typing across joins.
 */

export type LeadStatus =
  | "Baru"
  | "Dihubungi"
  | "Follow Up"
  | "Deal"
  | "Tidak Cocok";

export type LeadSource =
  | "Website"
  | "Facebook Ads"
  | "WhatsApp"
  | "Referral"
  | "Event"
  | "Instagram";

export type LeadPriority = "Tinggi" | "Sedang" | "Rendah";

export type LeadActivityKind =
  | "created"
  | "status_change"
  | "note"
  | "contact";

export interface LeadRow {
  id: string;
  tenant_id: string;
  name: string;
  phone: string | null;
  business: string | null;
  need_type: string | null;
  source: LeadSource;
  status: LeadStatus;
  priority: LeadPriority;
  assigned_name: string | null;
  estimated_value: number;
  notes: string | null;
  last_contact_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface LeadActivityRow {
  id: string;
  lead_id: string;
  tenant_id: string;
  actor_label: string | null;
  kind: LeadActivityKind;
  payload: Record<string, unknown> | null;
  created_at: string;
}

export interface Database {
  public: {
    Tables: {
      tenants: {
        Row: {
          id: string;
          name: string;
          is_showcase: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          is_showcase?: boolean;
          created_at?: string;
        };
        Update: Partial<{
          id: string;
          name: string;
          is_showcase: boolean;
          created_at: string;
        }>;
        Relationships: [];
      };
      leads: {
        Row: LeadRow;
        Insert: Omit<LeadRow, "id" | "created_at" | "updated_at"> & {
          id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<LeadRow>;
        Relationships: [];
      };
      lead_activities: {
        Row: LeadActivityRow;
        Insert: Omit<LeadActivityRow, "id" | "created_at"> & {
          id?: string;
          created_at?: string;
        };
        Update: Partial<LeadActivityRow>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      lead_status: LeadStatus;
      lead_source: LeadSource;
      lead_priority: LeadPriority;
      lead_activity_kind: LeadActivityKind;
    };
    CompositeTypes: Record<string, never>;
  };
}
