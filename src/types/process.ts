import type { Localized } from "@/i18n/localized";

export type ProcessStep = {
  id: string;
  step: number;
  title: Localized<string>;
  description: Localized<string>;
};
