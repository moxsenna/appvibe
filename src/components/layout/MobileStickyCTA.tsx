import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, getDefaultConsultationMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";

export function MobileStickyCTA() {
  const { lang, dict } = useLang();
  const whatsappUrl = buildWhatsAppUrl(getDefaultConsultationMessage(lang));

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-3 z-40 flex justify-center px-4 md:hidden"
      role="region"
      aria-label={dict.common.mobileSticky.label}
    >
      <a
        href={whatsappUrl}
        className="anim-rise ad-5 pointer-events-auto inline-flex max-w-[280px] items-center justify-center gap-2 rounded border border-av-dark-border bg-av-ink px-4 py-2.5 text-xs font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
        onClick={() =>
          trackEvent("cta_whatsapp_click", { location: "mobile_sticky" })
        }
      >
        <MessageCircle className="h-4 w-4 shrink-0 text-av-signal-on-dark" aria-hidden />
        {dict.common.cta.chatNow}
      </a>
    </div>
  );
}
