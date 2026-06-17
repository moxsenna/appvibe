import { PageShell } from "@/components/layout/PageShell";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactFAQ } from "@/components/contact/ContactFAQ";
import { ContactAlternative } from "@/components/contact/ContactAlternative";
import { usePageMeta } from "@/i18n/use-page-meta";

export function ContactPage() {
  usePageMeta("contact", "contact");

  return (
    <PageShell>
      <ContactHero />
      <ContactForm />
      <ContactFAQ />
      <ContactAlternative />
    </PageShell>
  );
}
