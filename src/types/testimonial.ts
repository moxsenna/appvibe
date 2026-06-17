import type { Localized } from "@/i18n/localized";

export type TestimonialItem = {
  id: string;
  quote: Localized<string>;
  name: Localized<string>;
  role?: Localized<string>;
  business?: Localized<string>;
  /** True = scenario example, not a real client */
  isExample: boolean;
};
