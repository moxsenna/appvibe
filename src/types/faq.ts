import type { Localized } from "@/i18n/localized";

export type FAQItem = {
  id: string;
  question: Localized<string>;
  answer: Localized<string>;
};
