import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl, getDefaultConsultationMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";

type BlogPostFooterCtaProps = {
  title: string;
  subtitle: string;
};

export function BlogPostFooterCta({ title, subtitle }: BlogPostFooterCtaProps) {
  const { lang, dict } = useLang();
  const whatsappUrl = buildWhatsAppUrl(getDefaultConsultationMessage(lang));

  return (
    <aside className="mt-14 rounded border border-av-border bg-av-surface p-8 text-center sm:p-10">
      <h2 className="text-xl font-semibold tracking-tight text-av-ink sm:text-2xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-av-secondary sm:text-base">
        {subtitle}
      </p>
      <div className="mt-6 flex justify-center">
        <Button
          href={whatsappUrl}
          size="lg"
          onClick={() =>
            trackEvent("cta_whatsapp_click", { location: "blog_article_footer" })
          }
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
          {dict.common.cta.consult}
        </Button>
      </div>
    </aside>
  );
}