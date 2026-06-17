import { CLINIC_SERVICES } from "@/data/demos/clinic";
import { featuredServiceIds } from "@/data/demos/klinik";

const featuredSet = new Set<string>(featuredServiceIds);

export const featuredServices = CLINIC_SERVICES.filter((s) =>
  featuredSet.has(s.id),
);
