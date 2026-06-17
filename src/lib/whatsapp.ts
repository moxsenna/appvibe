import { dictionaries } from "@/i18n/dictionaries";
import type { Lang } from "@/i18n/types";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? "628xxxxxxxxxx";

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

/**
 * Localised WhatsApp message builders.
 *
 * All templates live in the common dictionary so translators see them
 * alongside the rest of the UI copy. Templates use `{{title}}` placeholder
 * syntax to avoid the JS template-literal trap (translators sometimes
 * forget to preserve `${...}`).
 */

function fillTemplate(
  template: string,
  vars: Record<string, string> = {},
): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => vars[key] ?? "");
}

export function getDefaultConsultationMessage(lang: Lang): string {
  return dictionaries[lang].common.whatsapp.default;
}

export function getPortfolioMessage(lang: Lang, title: string): string {
  return fillTemplate(dictionaries[lang].common.whatsapp.portfolio, { title });
}

export function getDemoMessage(lang: Lang, title: string): string {
  return fillTemplate(dictionaries[lang].common.whatsapp.demo, { title });
}
