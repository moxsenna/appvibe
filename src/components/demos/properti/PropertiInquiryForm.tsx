import { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Send,
  Shield,
} from "lucide-react";
import { formFields, formMessages } from "@/data/demos/properti/form";
import { whatsappPrefill } from "@/data/demos/properti/whatsapp";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { useLang } from "@/i18n/use-lang";
import type { Lang } from "@/i18n/types";

type FormData = Record<string, string>;
type FormErrors = Partial<Record<string, string>>;

const initialData: FormData = Object.fromEntries(
  formFields.map((f) => [f.name, ""]),
);

function validate(data: FormData, lang: Lang): FormErrors {
  const errors: FormErrors = {};
  for (const field of formFields) {
    if (field.required && !data[field.name]?.trim()) {
      errors[field.name] = `${field.label[lang]} ${formMessages.required[lang]}`;
    }
  }
  if (data.phone && !/^[+\d\s\-()]{8,}$/.test(data.phone.trim())) {
    errors.phone = formMessages.phoneInvalid[lang];
  }
  if (data.email && data.email.trim()) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      errors.email = formMessages.emailInvalid[lang];
    }
  }
  return errors;
}

function optionLabelByValue(name: string, value: string, lang: Lang): string {
  const field = formFields.find((f) => f.name === name);
  const opt = field?.options?.find((o) => o.value === value);
  return opt?.label[lang] ?? value;
}

const NEED_PLACEHOLDER =
  "[pilih: Hunian / Investasi / Komersial / Renovasi / Interior / Konsultasi]";
const VISIT_PLACEHOLDER =
  "[pilih: Minggu ini / Minggu depan / 2 minggu / Belum pasti]";

const sectionCopy: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    subtitle: string;
    bullet1Title: string;
    bullet1Body: string;
    bullet2Title: string;
    bullet2Body: string;
    bullet3Title: string;
    bullet3Body: string;
    privacy: string;
    submit: string;
    successTitle: string;
    successBody: string;
    summary: string;
    continueWa: string;
    another: string;
  }
> = {
  id: {
    eyebrow: "Survei Lokasi",
    title: "Jadwalkan kunjungan dan konsultasi awal",
    subtitle:
      "Isi form singkat 7 field — tim GrahaNusa akan menghubungi Anda dalam 1×24 jam kerja dengan konfirmasi slot dan arah menuju lokasi.",
    bullet1Title: "Konsultasi awal gratis",
    bullet1Body:
      "Tidak ada biaya untuk diskusi awal via WhatsApp atau survei lokasi unit yang Anda minati.",
    bullet2Title: "Data hanya untuk follow-up",
    bullet2Body:
      "Informasi Anda hanya digunakan untuk merespons inquiry ini — tidak untuk spam atau share ke pihak ketiga.",
    bullet3Title: "Respons dalam 1×24 jam kerja",
    bullet3Body: "Tim GrahaNusa akan menghubungi via WhatsApp sesuai kontak yang Anda berikan.",
    privacy: "Data hanya untuk follow-up inquiry.",
    submit: "Kirim Permintaan Survei",
    successTitle: "Permintaan survei sudah kami terima",
    successBody:
      "Untuk respons lebih cepat, langsung lanjutkan ke WhatsApp — tim GrahaNusa akan balas dalam 1×24 jam kerja.",
    summary: "Ringkasan permintaan",
    continueWa: "Lanjut ke WhatsApp",
    another: "Kirim permintaan lain",
  },
  en: {
    eyebrow: "Site visit",
    title: "Schedule a visit and initial consultation",
    subtitle:
      "Complete a short seven-field form — the GrahaNusa team will contact you within one business day with a confirmed slot and directions.",
    bullet1Title: "Free initial consultation",
    bullet1Body:
      "No charge for an initial WhatsApp discussion or a site visit for units you are considering.",
    bullet2Title: "Data used only for follow-up",
    bullet2Body:
      "Your information is used only to respond to this inquiry — not for spam or sharing with third parties.",
    bullet3Title: "Response within one business day",
    bullet3Body: "The GrahaNusa team will reach out on WhatsApp using the contact you provide.",
    privacy: "Data is used only for inquiry follow-up.",
    submit: "Submit visit request",
    successTitle: "We have received your visit request",
    successBody:
      "For a faster response, continue on WhatsApp — the GrahaNusa team will reply within one business day.",
    summary: "Request summary",
    continueWa: "Continue on WhatsApp",
    another: "Submit another request",
  },
};

export function PropertiInquiryForm() {
  const { lang } = useLang();
  const copy = sectionCopy[lang];
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key: string, value: string) => {
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
      form: "properti_survey_inquiry",
      source: "demo",
    });
    setSubmitted(true);
  };

  const whatsappSummaryUrl = buildWhatsAppUrl(
    whatsappPrefill[lang]
      .replace("[nama]", data.name || (lang === "id" ? "(nama)" : "(name)"))
      .replace("[pilih listing]", optionLabelByValue("unit", data.unit, lang) || "-")
      .replace(NEED_PLACEHOLDER, optionLabelByValue("need", data.need, lang) || "-")
      .replace(VISIT_PLACEHOLDER, optionLabelByValue("visit", data.visit, lang) || "-")
      .replace("[opsional]", data.notes || ""),
  );

  return (
    <section
      id="survei"
      className="section-padding"
      style={{
        backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #ECFDF5 100%)",
      }}
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
              {copy.eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">{copy.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
              {copy.subtitle}
            </p>
            <div className="mt-6 space-y-3">
              <Bullet title={copy.bullet1Title} body={copy.bullet1Body} />
              <Bullet title={copy.bullet2Title} body={copy.bullet2Body} />
              <Bullet title={copy.bullet3Title} body={copy.bullet3Body} />
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <SuccessState
                data={data}
                lang={lang}
                copy={copy}
                onReset={() => {
                  setData(initialData);
                  setSubmitted(false);
                }}
                whatsappUrl={whatsappSummaryUrl}
              />
            ) : (
              <Card padding="lg" className="shadow-card-hover">
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {formFields.map((field) => {
                    if (field.type === "select") {
                      return (
                        <div key={field.name}>
                          <label className="mb-1.5 block text-sm font-medium text-brand-navy">
                            {field.label[lang]}{" "}
                            {field.required && <span className="text-red-500">*</span>}
                          </label>
                          <select
                            value={data[field.name] ?? ""}
                            onChange={(e) => update(field.name, e.target.value)}
                            className={cn(
                              "w-full appearance-none rounded-xl border bg-white py-2.5 px-3.5 text-sm text-brand-dark focus:outline-none focus:ring-2",
                              errors[field.name]
                                ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                                : "border-brand-border focus:border-emerald-500 focus:ring-emerald-500/20",
                            )}
                          >
                            <option value="">{field.placeholder[lang]}</option>
                            {field.options?.map((opt) => (
                              <option key={opt.value} value={opt.value}>
                                {opt.label[lang]}
                              </option>
                            ))}
                          </select>
                          {errors[field.name] && (
                            <p className="mt-1 text-xs font-medium text-red-600">
                              {errors[field.name]}
                            </p>
                          )}
                        </div>
                      );
                    }
                    if (field.type === "textarea") {
                      return (
                        <div key={field.name}>
                          <label className="mb-1.5 block text-sm font-medium text-brand-navy">
                            {field.label[lang]}
                          </label>
                          <textarea
                            value={data[field.name] ?? ""}
                            onChange={(e) => update(field.name, e.target.value)}
                            placeholder={field.placeholder[lang]}
                            rows={4}
                            className="w-full rounded-xl border border-brand-border bg-white py-2.5 px-3.5 text-sm text-brand-dark placeholder:text-brand-muted focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                          />
                          {field.helper && (
                            <p className="mt-1 text-xs text-brand-muted">{field.helper[lang]}</p>
                          )}
                        </div>
                      );
                    }
                    return (
                      <div key={field.name}>
                        <label className="mb-1.5 block text-sm font-medium text-brand-navy">
                          {field.label[lang]}{" "}
                          {field.required && <span className="text-red-500">*</span>}
                        </label>
                        <input
                          type={field.type}
                          value={data[field.name] ?? ""}
                          onChange={(e) => update(field.name, e.target.value)}
                          placeholder={field.placeholder[lang]}
                          className={cn(
                            "w-full rounded-xl border bg-white py-2.5 px-3.5 text-sm text-brand-dark placeholder:text-brand-muted focus:outline-none focus:ring-2",
                            errors[field.name]
                              ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                              : "border-brand-border focus:border-emerald-500 focus:ring-emerald-500/20",
                          )}
                        />
                        {field.helper && !errors[field.name] && (
                          <p className="mt-1 text-xs text-brand-muted">{field.helper[lang]}</p>
                        )}
                        {errors[field.name] && (
                          <p className="mt-1 text-xs font-medium text-red-600">
                            {errors[field.name]}
                          </p>
                        )}
                      </div>
                    );
                  })}
                  <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="inline-flex items-center gap-1.5 text-xs text-brand-muted">
                      <Shield className="h-3.5 w-3.5" aria-hidden /> {copy.privacy}
                    </p>
                    <Button type="submit" size="lg">
                      <Send className="h-4 w-4" aria-hidden /> {copy.submit}
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

function Bullet({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
        <CheckCircle2 className="h-4 w-4" aria-hidden />
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
  lang,
  copy,
  onReset,
  whatsappUrl,
}: {
  data: FormData;
  lang: Lang;
  copy: (typeof sectionCopy)[Lang];
  onReset: () => void;
  whatsappUrl: string;
}) {
  const labelByName: Record<string, string> = Object.fromEntries(
    formFields.map((f) => [f.name, f.label[lang]]),
  );
  return (
    <Card padding="lg" className="border-emerald-100 bg-emerald-50/40">
      <div className="flex flex-col items-center text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg">
          <CheckCircle2 className="h-8 w-8" aria-hidden />
        </span>
        <h3 className="mt-5 text-xl font-bold text-brand-navy sm:text-2xl">{copy.successTitle}</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-muted sm:text-base">
          {copy.successBody}
        </p>
      </div>
      <div className="mt-6 rounded-xl border border-brand-border bg-white p-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
          {copy.summary}
        </p>
        <dl className="mt-3 space-y-2 text-sm">
          {Object.entries(data)
            .filter(([, v]) => v?.trim())
            .map(([k, v]) => (
              <div
                key={k}
                className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3"
              >
                <dt className="text-xs font-medium uppercase tracking-wider text-brand-muted sm:w-36 sm:shrink-0">
                  {labelByName[k] ?? k}
                </dt>
                <dd className="text-sm text-brand-dark">
                  {k === "unit" || k === "need" || k === "visit"
                    ? optionLabelByValue(k, v, lang)
                    : v}
                </dd>
              </div>
            ))}
        </dl>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button href={whatsappUrl} size="lg">
          <MessageCircle className="h-5 w-5" aria-hidden /> {copy.continueWa}
        </Button>
        <Button variant="secondary" size="lg" onClick={onReset}>
          {copy.another}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
      </div>
    </Card>
  );
}