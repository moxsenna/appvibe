import type { Localized } from "@/i18n/localized";

export type ServiceItem = {
  id: string;
  title: Localized<string>;
  shortDescription: Localized<string>;
  description: Localized<string>;
  idealFor: Localized<string[]>;
  features: Localized<string[]>;
  deliverables: Localized<string[]>;
  startingFrom?: string;
  ctaLabel: Localized<string>;
};
