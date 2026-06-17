import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  User,
  Building2,
  Wallet,
  Send,
  Shield,
} from "lucide-react";
import { brand } from "@/data/demos/company-profile/brand";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { useLang } from "@/i18n/use-lang";
import type { Lang } from "@/i18n/types";

type FormData = {
  name: string;
  business: string;
  contact: string;
  need: string;
  budget: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialData: FormData = {
  name: "",
  business: "",
  contact: "",
  need: "",
  budget: "",
  message: "",
};

const ui = {
  id: {
    eyebrow: "Konsultasi Awal",
    title: "Ceritakan kebutuhan bisnis Anda",
    subtitle:
      "Isi form singkat di samping — kami biasanya merespons dalam 1×24 jam kerja dengan rekomendasi awal dan opsi jadwal konsultasi.",
    bullet1Title: "Konsultasi awal tanpa komitmen proyek",
    bullet1Body:
      "Diskusi gratis untuk memahami kebutuhan Anda — tidak ada tekanan untuk lanjut.",
    bullet2Title: "Data hanya untuk follow-up",
    bullet2Body:
      "Informasi yang Anda berikan hanya digunakan untuk merespons inquiry ini.",
    bullet3Title: "Respons dalam 1×24 jam kerja",
    bullet3Body:
      "Tim akan menghubungi via WhatsApp atau email sesuai kontak yang Anda berikan.",
    name: "Nama lengkap",
    namePh: "Contoh: Budi Santoso",
    business: "Nama bisnis",
    businessPh: "Contoh: PT Maju Bersama",
    contact: "Email atau WhatsApp",
    contactHelper: "Link Zoom dan reminder akan dikirim ke sini",
    contactPh: "08xx xxxx xxxx atau email@anda.com",
    need: "Jenis kebutuhan",
    needPh: "Pilih kebutuhan utama",
    budget: "Estimasi budget",
    budgetPh: "Pilih kisaran budget",
    message: "Pesan (opsional)",
    messagePh: "Ceritakan singkat kondisi bisnis dan tantangan utama Anda",
    privacy: "Data hanya digunakan untuk follow-up konsultasi.",
    submit: "Kirim Inquiry",
    errName: "Nama wajib diisi",
    errBusiness: "Nama bisnis wajib diisi",
    errContact: "Kontak wajib diisi",
    errContactFmt: "Format kontak tidak valid",
    errNeed: "Pilih jenis kebutuhan",
    errBudget: "Pilih estimasi budget",
    successTitle: "Inquiry Anda sudah kami terima",
    successBody:
      "Tim akan menghubungi Anda dalam 1×24 jam kerja. Untuk respons lebih cepat, langsung lanjutkan ke WhatsApp.",
    summary: "Ringkasan inquiry",
    sumName: "Nama",
    sumBusiness: "Bisnis",
    sumContact: "Kontak",
    sumNeed: "Kebutuhan",
    sumBudget: "Budget",
    sumMessage: "Pesan",
    waCta: "Lanjut ke WhatsApp",
    reset: "Kirim inquiry lain",
    nameFallback: "(nama)",
    businessFallback: "(nama bisnis)",
  },
  en: {
    eyebrow: "Initial consultation",
    title: "Tell us about your business needs",
    subtitle:
      "Complete the short form — we usually reply within one business day with initial recommendations and consultation options.",
    bullet1Title: "No project commitment required",
    bullet1Body:
      "A free conversation to understand your needs — no pressure to proceed.",
    bullet2Title: "Data used only for follow-up",
    bullet2Body: "Information you share is used solely to respond to this inquiry.",
    bullet3Title: "Reply within one business day",
    bullet3Body:
      "We will reach out via WhatsApp or email using the contact you provide.",
    name: "Full name",
    namePh: "e.g. Budi Santoso",
    business: "Business name",
    businessPh: "e.g. PT Maju Bersama",
    contact: "Email or WhatsApp",
    contactHelper: "Meeting links and reminders will be sent here",
    contactPh: "08xx xxxx xxxx or you@company.com",
    need: "Primary need",
    needPh: "Select main need",
    budget: "Estimated budget",
    budgetPh: "Select budget range",
    message: "Message (optional)",
    messagePh: "Briefly describe your business situation and main challenges",
    privacy: "Data is used only for consultation follow-up.",
    submit: "Submit inquiry",
    errName: "Name is required",
    errBusiness: "Business name is required",
    errContact: "Contact is required",
    errContactFmt: "Invalid contact format",
    errNeed: "Select a need type",
    errBudget: "Select a budget range",
    successTitle: "We received your inquiry",
    successBody:
      "Our team will contact you within one business day. For a faster response, continue on WhatsApp.",
    summary: "Inquiry summary",
    sumName: "Name",
    sumBusiness: "Business",
    sumContact: "Contact",
    sumNeed: "Need",
    sumBudget: "Budget",
    sumMessage: "Message",
    waCta: "Continue on WhatsApp",
    reset: "Submit another inquiry",
    nameFallback: "(name)",
    businessFallback: "(business name)",
  },
} as const;

function validate(data: FormData, lang: Lang): FormErrors {
  const t = ui[lang];
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = t.errName;
  if (!data.business.trim()) errors.business = t.errBusiness;
  if (!data.contact.trim()) {
    errors.contact = t.errContact;
  } else if (!/^[+\d\s\-()]{8,}$/.test(data.contact.trim())) {
    errors.contact = t.errContactFmt;
  }
  if (!data.need) errors.need = t.errNeed;
  if (!data.budget) errors.budget = t.errBudget;
  return errors;
}

export function CompanyProfileInquiryForm() {
  const { lang } = useLang();
  const t = ui[lang];
  const needOptions = brand.inquiryNeedOptions[lang];
  const budgetOptions = brand.inquiryBudgetOptions[lang];
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validation = validate(data, lang);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    trackEvent("contact_form_submit", {
      form: "company_profile_inquiry",
      source: "demo",
    });
    setSubmitted(true);
  };

  const whatsappSummaryUrl = buildWhatsAppUrl(
    brand.whatsappPrefill[lang]
      .replace("[nama]", data.name || t.nameFallback)
      .replace("[nama bisnis]", data.business || t.businessFallback)
      .replace("[need]", data.need || "-")
      .replace("[budget]", data.budget || "-"),
  );

  return (
    <section
      id="inquiry"
      className="section-padding"
      style={{
        backgroundImage: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
      }}
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
              {t.eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
              {t.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
              {t.subtitle}
            </p>

            <div className="mt-6 space-y-3">
              <BulletItem
                icon={CheckCircle2}
                title={t.bullet1Title}
                body={t.bullet1Body}
              />
              <BulletItem
                icon={Shield}
                title={t.bullet2Title}
                body={t.bullet2Body}
              />
              <BulletItem
                icon={MessageCircle}
                title={t.bullet3Title}
                body={t.bullet3Body}
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <SuccessState
                data={data}
                labels={t}
                onReset={() => {
                  setData(initialData);
                  setSubmitted(false);
                }}
                whatsappUrl={whatsappSummaryUrl}
              />
            ) : (
              <Card padding="lg" className="shadow-card-hover">
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <Field label={t.name} icon={User} error={errors.name}>
                    <input
                      type="text"
                      value={data.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder={t.namePh}
                      className={inputClass(!!errors.name)}
                    />
                  </Field>
                  <Field
                    label={t.business}
                    icon={Building2}
                    error={errors.business}
                  >
                    <input
                      type="text"
                      value={data.business}
                      onChange={(e) => update("business", e.target.value)}
                      placeholder={t.businessPh}
                      className={inputClass(!!errors.business)}
                    />
                  </Field>
                  <Field
                    label={t.contact}
                    icon={Mail}
                    helper={t.contactHelper}
                    error={errors.contact}
                  >
                    <input
                      type="text"
                      value={data.contact}
                      onChange={(e) => update("contact", e.target.value)}
                      placeholder={t.contactPh}
                      className={inputClass(!!errors.contact)}
                    />
                  </Field>
                  <Field label={t.need} icon={Wallet} error={errors.need}>
                    <select
                      value={data.need}
                      onChange={(e) => update("need", e.target.value)}
                      className={cn(
                        inputClass(!!errors.need),
                        "appearance-none bg-white",
                      )}
                    >
                      <option value="">{t.needPh}</option>
                      {needOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label={t.budget} icon={Wallet} error={errors.budget}>
                    <select
                      value={data.budget}
                      onChange={(e) => update("budget", e.target.value)}
                      className={cn(
                        inputClass(!!errors.budget),
                        "appearance-none bg-white",
                      )}
                    >
                      <option value="">{t.budgetPh}</option>
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label={t.message}>
                    <textarea
                      value={data.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder={t.messagePh}
                      rows={4}
                      className={inputClass(false)}
                    />
                  </Field>

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="inline-flex items-center gap-1.5 text-xs text-brand-muted">
                      <Shield className="h-3.5 w-3.5" aria-hidden /> {t.privacy}
                    </p>
                    <Button type="submit" size="lg">
                      <Send className="h-4 w-4" aria-hidden /> {t.submit}
                    </Button>
                  </div>
                </form>
              </Card>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-white py-2.5 px-3.5 text-sm text-brand-dark placeholder:text-brand-muted focus:outline-none focus:ring-2",
    hasError
      ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
      : "border-brand-border focus:border-brand-blue focus:ring-brand-blue/20",
  );
}

function Field({
  label,
  icon: Icon,
  helper,
  error,
  children,
}: {
  label: string;
  icon?: typeof User;
  helper?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-brand-navy">
        {Icon && <Icon className="h-4 w-4 text-brand-blue" aria-hidden />}{" "}
        {label}
      </label>
      {children}
      {helper && !error && (
        <p className="mt-1 text-xs text-brand-muted">{helper}</p>
      )}
      {error && (
        <p className="mt-1 text-xs font-medium text-red-600">{error}</p>
      )}
    </div>
  );
}

function BulletItem({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof CheckCircle2;
  title: string;
  body: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <div>
        <p className="text-sm font-semibold text-brand-navy">{title}</p>
        <p className="mt-0.5 text-xs text-brand-muted">{body}</p>
      </div>
    </div>
  );
}

function SuccessState({
  data,
  labels,
  onReset,
  whatsappUrl,
}: {
  data: FormData;
  labels: (typeof ui)[Lang];
  onReset: () => void;
  whatsappUrl: string;
}) {
  return (
    <Card padding="lg" className="border-emerald-100 bg-emerald-50/40">
      <div className="flex flex-col items-center text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg">
          <CheckCircle2 className="h-8 w-8" aria-hidden />
        </span>
        <h3 className="mt-5 text-xl font-bold text-brand-navy sm:text-2xl">
          {labels.successTitle}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-muted sm:text-base">
          {labels.successBody}
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-brand-border bg-white p-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
          {labels.summary}
        </p>
        <dl className="mt-3 space-y-2 text-sm">
          <SummaryRow label={labels.sumName} value={data.name} />
          <SummaryRow label={labels.sumBusiness} value={data.business} />
          <SummaryRow label={labels.sumContact} value={data.contact} />
          <SummaryRow label={labels.sumNeed} value={data.need} />
          <SummaryRow label={labels.sumBudget} value={data.budget} />
          {data.message && (
            <SummaryRow label={labels.sumMessage} value={data.message} />
          )}
        </dl>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button href={whatsappUrl} size="lg">
          <MessageCircle className="h-5 w-5" aria-hidden /> {labels.waCta}
        </Button>
        <Button variant="secondary" size="lg" onClick={onReset}>
          {labels.reset}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
      </div>
    </Card>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
      <dt className="text-xs font-medium uppercase tracking-wider text-brand-muted sm:w-28 sm:shrink-0">
        {label}
      </dt>
      <dd className="text-sm text-brand-dark">{value}</dd>
    </div>
  );
}