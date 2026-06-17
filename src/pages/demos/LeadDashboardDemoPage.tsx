import { useEffect, useMemo } from "react";
import { brand } from "@/data/demos/lead-dashboard/brand";
import { DemoShell } from "@/components/demos/DemoShell";
import { AppVibeDemoBanner } from "@/components/demos/AppVibeDemoBanner";
import { LeadDashboardHero } from "@/components/demos/lead-dashboard/LeadDashboardHero";
import { LeadDashboardInbox } from "@/components/demos/lead-dashboard/LeadDashboardInbox";
import { LeadDashboardSourceTracking } from "@/components/demos/lead-dashboard/LeadDashboardSourceTracking";
import { LeadDashboardReport } from "@/components/demos/lead-dashboard/LeadDashboardReport";
import { LeadDashboardEmptyState } from "@/components/demos/lead-dashboard/LeadDashboardEmptyState";
import { LeadDashboardFAQ } from "@/components/demos/lead-dashboard/LeadDashboardFAQ";
import { LeadDashboardLiveBadge } from "@/components/demos/lead-dashboard/LeadDashboardLiveBadge";
import { useShowcaseLeads } from "@/hooks/useShowcaseLeads";
import { applyPageMeta } from "@/lib/seo";
import { buildWhatsAppUrl, getDefaultConsultationMessage } from "@/lib/whatsapp";
import { routes } from "@/lib/routes";
import { trackEvent } from "@/lib/analytics";
import { useLang } from "@/i18n/use-lang";

export function LeadDashboardDemoPage() {
  const { leads, loading, source, isRealtime, updateStatus } =
    useShowcaseLeads();
  const { lang } = useLang();

  const whatsappUrl = useMemo(
    () => buildWhatsAppUrl(getDefaultConsultationMessage(lang)),
    [lang],
  );

  useEffect(() => {
    const titleId = `${brand.name.id} — Demo Interaktif AppVibe Studio`;
    const titleEn = `${brand.name.en} — AppVibe Studio Interactive Demo`;
    applyPageMeta(
      {
        id: { title: titleId, description: brand.oneLiner.id },
        en: { title: titleEn, description: brand.oneLiner.en },
        paths: {
          id: routes.demoDetail("id", "lead-dashboard"),
          en: routes.demoDetail("en", "lead-dashboard"),
        },
      },
      lang,
    );
    trackEvent("demo_open", {
      slug: "lead-dashboard",
      location: "demo_full_page",
      status: "live",
      backend: source,
    });
  }, [source, lang]);

  const handleStatusChange = (id: string, status: Parameters<typeof updateStatus>[1]) => {
    updateStatus(id, status);
    trackEvent("lead_status_change", { id, status, backend: source });
  };

  return (
    <DemoShell
      brand={{
        name: brand.name[lang],
        tagline: brand.tagline[lang],
        brandColor: brand.primaryColor,
        accentColor: brand.accentColor,
      }}
      whatsappUrl={whatsappUrl}
      slug="lead-dashboard"
    >
      <LeadDashboardHero />
      <AppVibeDemoBanner variant="section" />
      <LeadDashboardLiveBadge source={source} isRealtime={isRealtime} />
      {loading ? (
        <LeadDashboardEmptyState />
      ) : (
        <LeadDashboardInbox leads={leads} onStatusChange={handleStatusChange} />
      )}
      <LeadDashboardSourceTracking />
      <LeadDashboardReport />
      <LeadDashboardFAQ />
    </DemoShell>
  );
}
