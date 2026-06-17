import type { CommonDict } from "@/i18n/locales/id/common";
import type { Lang } from "@/i18n/types";
import type {
  LeadPriority,
  LeadSource,
  LeadStatus,
} from "@/data/demos/lead-dashboard/leads";

const STATUS_TO_KEY: Record<LeadStatus, keyof CommonDict["enums"]["leadStatus"]> =
  {
    Baru: "new",
    Dihubungi: "contacted",
    "Follow Up": "follow_up",
    Deal: "deal",
    "Tidak Cocok": "rejected",
  };

const SOURCE_TO_KEY: Record<LeadSource, keyof CommonDict["enums"]["leadSource"]> =
  {
    Website: "website",
    "Facebook Ads": "facebook_ads",
    WhatsApp: "whatsapp",
    Referral: "referral",
    Event: "event",
    Instagram: "instagram",
  };

const PRIORITY_TO_KEY: Record<
  LeadPriority,
  keyof CommonDict["enums"]["leadPriority"]
> = {
  Tinggi: "high",
  Sedang: "medium",
  Rendah: "low",
};

export function leadStatusLabel(
  status: LeadStatus,
  enums: CommonDict["enums"],
): string {
  return enums.leadStatus[STATUS_TO_KEY[status]];
}

export function leadSourceLabel(
  source: LeadSource,
  enums: CommonDict["enums"],
): string {
  return enums.leadSource[SOURCE_TO_KEY[source]];
}

export function leadPriorityLabel(
  priority: LeadPriority,
  enums: CommonDict["enums"],
): string {
  return enums.leadPriority[PRIORITY_TO_KEY[priority]];
}

export function teamRoleLabel(
  role: "Owner" | "Admin" | "Sales" | "Supervisor",
  lang: Lang,
): string {
  const map: Record<typeof role, { id: string; en: string }> = {
    Owner: { id: "Owner", en: "Owner" },
    Admin: { id: "Admin", en: "Admin" },
    Sales: { id: "Sales", en: "Sales" },
    Supervisor: { id: "Supervisor", en: "Supervisor" },
  };
  return map[role][lang];
}