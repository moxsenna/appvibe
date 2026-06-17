import { useCallback, useEffect, useMemo, useState } from "react";
import {
  isSupabaseConfigured,
  SHOWCASE_TENANT_ID,
  supabase,
} from "@/lib/supabase";
import { leads as fallbackLeads } from "@/data/demos/lead-dashboard/leads";
import { team } from "@/data/demos/lead-dashboard/team";
import type {
  Lead,
  LeadStatus,
} from "@/data/demos/lead-dashboard/leads";
import type { LeadRow } from "@/types/database";

/**
 * `useShowcaseLeads`
 *
 * Reads + subscribes to lead rows for the public showcase tenant.
 * Falls back to the static client-side mock when Supabase env vars
 * are missing (so a fresh clone still runs the demo end-to-end).
 *
 * Returns the same `Lead` shape the existing UI components consume,
 * so the swap is invisible to children.
 */
export type ShowcaseSource = "supabase" | "fallback";

type State = {
  leads: Lead[];
  loading: boolean;
  error: string | null;
  source: ShowcaseSource;
  isRealtime: boolean;
};

const teamNameToId = new Map(team.map((m) => [m.name, m.id]));

function rowToLead(row: LeadRow): Lead {
  return {
    id: row.id,
    name: row.name,
    phone: row.phone ?? "-",
    business: row.business ?? "-",
    needType: row.need_type ?? "-",
    source: row.source,
    status: row.status,
    priority: row.priority,
    assignedId:
      (row.assigned_name && teamNameToId.get(row.assigned_name)) ?? "rina-w",
    estimatedValue: Number(row.estimated_value ?? 0),
    lastContact: row.last_contact_at
      ? row.last_contact_at.slice(0, 10)
      : "-",
    createdAt: row.created_at.slice(0, 10),
    notes: row.notes ?? "",
    // Activities are not joined on initial load to keep the read cheap;
    // the drawer can fetch them on-demand later if needed.
    activity: [],
  };
}

export function useShowcaseLeads(): State & {
  updateStatus: (id: string, status: LeadStatus) => Promise<void>;
} {
  const isReady = isSupabaseConfigured && SHOWCASE_TENANT_ID && supabase;

  const [state, setState] = useState<State>(() => ({
    leads: isReady ? [] : fallbackLeads,
    loading: Boolean(isReady),
    error: null,
    source: isReady ? "supabase" : "fallback",
    isRealtime: false,
  }));

  useEffect(() => {
    if (!isReady) return;

    let active = true;

    (async () => {
      const { data, error } = await supabase!
        .from("leads")
        .select("*")
        .eq("tenant_id", SHOWCASE_TENANT_ID!)
        .order("created_at", { ascending: false })
        .limit(200);

      if (!active) return;

      if (error) {
        // Graceful degradation — keep the UX intact with the static seed
        // and surface the error in dev console for debugging.
        console.error("[showcase-leads] read failed:", error);
        setState({
          leads: fallbackLeads,
          loading: false,
          error: error.message,
          source: "fallback",
          isRealtime: false,
        });
        return;
      }

      setState({
        leads: (data ?? []).map(rowToLead),
        loading: false,
        error: null,
        source: "supabase",
        isRealtime: false,
      });
    })();

    return () => {
      active = false;
    };
  }, [isReady]);

  useEffect(() => {
    if (!isReady) return;

    const channel = supabase!
      .channel("leads-showcase")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "leads",
          filter: `tenant_id=eq.${SHOWCASE_TENANT_ID}`,
        },
        (payload) => {
          setState((prev) => {
            if (payload.eventType === "UPDATE") {
              const next = rowToLead(payload.new as LeadRow);
              return {
                ...prev,
                leads: prev.leads.map((l) => (l.id === next.id ? next : l)),
              };
            }
            if (payload.eventType === "INSERT") {
              const next = rowToLead(payload.new as LeadRow);
              return { ...prev, leads: [next, ...prev.leads] };
            }
            if (payload.eventType === "DELETE") {
              const old = payload.old as { id?: string };
              return {
                ...prev,
                leads: prev.leads.filter((l) => l.id !== old.id),
              };
            }
            return prev;
          });
        },
      )
      .subscribe((status) => {
        if (status === "SUBSCRIBED") {
          setState((prev) => ({ ...prev, isRealtime: true }));
        }
      });

    return () => {
      supabase!.removeChannel(channel);
    };
  }, [isReady]);

  const updateStatus = useCallback(
    async (id: string, status: LeadStatus) => {
      // Optimistic update — instant UI feedback before round-trip.
      setState((prev) => ({
        ...prev,
        leads: prev.leads.map((l) => (l.id === id ? { ...l, status } : l)),
      }));

      if (state.source !== "supabase" || !supabase) return;

      const { error } = await supabase
        .from("leads")
        .update({ status } as never)
        .eq("id", id)
        .eq("tenant_id", SHOWCASE_TENANT_ID!);

      if (error) {
        console.error("[showcase-leads] update failed:", error);
        // Best-effort: refresh from server to reconcile
        const { data } = await supabase
          .from("leads")
          .select("*")
          .eq("id", id)
          .single();
        if (data) {
          const reconciled = rowToLead(data as LeadRow);
          setState((prev) => ({
            ...prev,
            leads: prev.leads.map((l) => (l.id === id ? reconciled : l)),
          }));
        }
        return;
      }

      // Log activity (best-effort, ignore failure to keep UX snappy)
      await supabase.from("lead_activities").insert({
        lead_id: id,
        tenant_id: SHOWCASE_TENANT_ID!,
        actor_label: "Demo viewer",
        kind: "status_change",
        payload: { to: status },
      } as never);
    },
    [state.source],
  );

  return useMemo(
    () => ({
      ...state,
      updateStatus,
    }),
    [state, updateStatus],
  );
}
