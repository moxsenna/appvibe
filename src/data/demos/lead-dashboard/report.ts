import { leads, type LeadSource } from "@/data/demos/lead-dashboard/leads";
import { team } from "@/data/demos/lead-dashboard/team";
import type { Localized } from "@/i18n/localized";

export const overviewStats = {
  total: leads.length,
  baru: leads.filter((l) => l.status === "Baru").length,
  followUp: leads.filter((l) => l.status === "Follow Up").length,
  deal: leads.filter((l) => l.status === "Deal").length,
  estimatedPipeline: leads
    .filter((l) => l.status !== "Tidak Cocok")
    .reduce((sum, l) => sum + l.estimatedValue, 0),
  conversionRate:
    Math.round(
      (leads.filter((l) => l.status === "Deal").length / leads.length) * 100,
    ) || 0,
};

const allSources = Array.from(
  new Set(leads.map((l) => l.source)),
) as Array<LeadSource>;

export const sourceBreakdown = allSources.map((src) => {
  const subset = leads.filter((l) => l.source === src);
  return {
    source: src,
    count: subset.length,
    deal: subset.filter((l) => l.status === "Deal").length,
    fuPending: subset.filter(
      (l) => l.status === "Follow Up" || l.status === "Baru",
    ).length,
    estimatedValue: subset
      .filter((l) => l.status !== "Tidak Cocok")
      .reduce((s, l) => s + l.estimatedValue, 0),
  };
});

export const adminWorkload = team.map((m) => ({
  id: m.id,
  name: m.name,
  initials: m.initials,
  role: m.role,
  leads: m.workload,
}));

export const leadsAging: { bucket: Localized<string>; count: number }[] = [
  {
    bucket: { id: "< 3 hari", en: "< 3 days" },
    count: leads.filter(
      (l) => l.status === "Baru" || l.status === "Dihubungi",
    ).length,
  },
  {
    bucket: { id: "3–7 hari", en: "3–7 days" },
    count: leads.filter((l) => l.status === "Follow Up").length,
  },
  {
    bucket: { id: "> 7 hari", en: "> 7 days" },
    count: leads.filter(
      (l) =>
        l.status !== "Baru" &&
        l.status !== "Dihubungi" &&
        l.status !== "Follow Up" &&
        l.status !== "Deal",
    ).length,
  },
];