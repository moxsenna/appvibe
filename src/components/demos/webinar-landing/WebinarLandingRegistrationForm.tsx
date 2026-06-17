import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Shield,
  User,
} from "lucide-react";
import { campaign } from "@/data/demos/webinar-landing/campaign";
import { formFields } from "@/data/demos/webinar-landing/form";
import { webinarLandingCopy } from "@/data/demos/webinar-landing/copy";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { useLang } from "@/i18n/use-lang";
import type { Lang } from "@/i18n/types";

type FormData = Record<string, string>;
type FormErrors = Partial<Record<string, string>>;

function validate(data: FormData, lang: Lang): FormErrors {
  const errors: FormErrors = {};
  const errCopy = webinarLandingCopy.registration.errors;
  const requiredSuffix = webinarLandingCopy.registration.requiredSuffix[lang];

  for (const field of formFields) {
    if (field.required && !data[field.name]?.trim()) {
      errors[field.name] = `${field.label[lang]} ${requiredSuffix}`;
    }
  }
  if (data.phone && !/^[+\d\s\-()]{8,}$/.test(data.phone.trim())) {
    errors.phone = errCopy.phoneInvalid[lang];
  }
  if (data.email && data.email.trim()) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      errors.email = errCopy.emailInvalid[lang];
    }
  }
  return errors;
}

const iconFor = (name: string) => {
  switch (name) {
    case "name":
      return User;
    case "phone":
      return Phone;
    case "email":
      return Mail;
    case "domicile":
      return MessageCircle;
    case "status":
      return Shield;
    default:
      return Send;
  }
};

function fillWhatsappTemplate(
  template: string,
  vars: Record<string, string>,
): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => vars[key] ?? "");
}

function buildWhatsappPrefill(data: FormData, lang: Lang): string {
  const ph = webinarLandingCopy.registration.whatsappPlaceholders;
  const statusLabel =
    formFields
      .find((f) => f.name === "status")
      ?.options?.find((o) => o.value === data.status)?.label[lang] ??
    ph.status[lang];

  const template = campaign.whatsappPrefill[lang];
  return fillWhatsappTemplate(template, {
    name: data.name?.trim() || ph.name[lang],
    phone: data.phone?.trim() || ph.phone[lang],
    status: statusLabel,
    childOptional: data.domicile?.trim() || ph.childOptional[lang],
  });
}

export function WebinarLandingRegistrationForm() {
  const { lang } = useLang();
  const copy = webinarLandingCopy.registration;

  const initialData: FormData = useMemo(
    () => Object.fromEntries(formFields.map((f) => [f.name, ""])),
    [],
  );

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
      form: "webinar_registration",
      source: "demo",
    });
    setSubmitted(true);
  };

  const whatsappPrefill = buildWhatsAppUrl(buildWhatsappPrefill(data, lang));

  return (
    <section
      id="daftar"
      className="section-padding"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #FFFFFF 0%, #F5F3FF 100%)",
      }}
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-violet">
              {copy.eyebrow[lang]}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
              {copy.title[lang]}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
              {copy.subtitle[lang]}
            </p>

            <div className="mt-6 space-y-3">
              <BulletItem
                icon={CheckCircle2}
                title={copy.bulletFreeTitle[lang]}
                body={copy.bulletFreeBody[lang]}
              />
              <BulletItem
                icon={Shield}
                title={copy.bulletDataTitle[lang]}
                body={copy.bulletDataBody[lang]}
              />
              <BulletItem
                icon={MessageCircle}
                title={copy.bulletRecordingTitle[lang]}
                body={copy.bulletRecordingBody[lang]}
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <SuccessState
                data={data}
                lang={lang}
                onReset={() => {
                  setData(initialData);
                  setSubmitted(false);
                }}
                whatsappUrl={whatsappPrefill}
              />
            ) : (
              <Card padding="lg" className="shadow-card-hover">
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {formFields.map((field) => {
                    const Icon = iconFor(field.name);
                    if (field.type === "select") {
                      return (
                        <div key={field.name}>
                          <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-brand-navy">
                            <Icon
                              className="h-4 w-4 text-brand-violet"
                              aria-hidden
                            />{" "}
                            {field.label[lang]}{" "}
                            {field.required && (
                              <span className="text-red-500">*</span>
                            )}
                          </label>
                          <select
                            value={data[field.name] ?? ""}
                            onChange={(e) => update(field.name, e.target.value)}
                            className={cn(
                              "w-full appearance-none rounded-xl border bg-white py-2.5 px-3.5 text-sm text-brand-dark focus:outline-none focus:ring-2",
                              errors[field.name]
                                ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                                : "border-brand-border focus:border-brand-violet focus:ring-brand-violet/20",
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
                          <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-brand-navy">
                            {field.label[lang]}
                          </label>
                          <textarea
                            value={data[field.name] ?? ""}
                            onChange={(e) => update(field.name, e.target.value)}
                            placeholder={field.placeholder[lang]}
                            rows={4}
                            className="w-full rounded-xl border border-brand-border bg-white py-2.5 px-3.5 text-sm text-brand-dark placeholder:text-brand-muted focus:border-brand-violet focus:outline-none focus:ring-2 focus:ring-brand-violet/20"
                          />
                          {field.helper && (
                            <p className="mt-1 text-xs text-brand-muted">
                              {field.helper[lang]}
                            </p>
                          )}
                        </div>
                      );
                    }
                    return (
                      <div key={field.name}>
                        <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-brand-navy">
                          <Icon
                            className="h-4 w-4 text-brand-violet"
                            aria-hidden
                          />{" "}
                          {field.label[lang]}{" "}
                          {field.required && (
                            <span className="text-red-500">*</span>
                          )}
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
                              : "border-brand-border focus:border-brand-violet focus:ring-brand-violet/20",
                          )}
                        />
                        {field.helper && !errors[field.name] && (
                          <p className="mt-1 text-xs text-brand-muted">
                            {field.helper[lang]}
                          </p>
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
                      <Shield className="h-3.5 w-3.5" aria-hidden />{" "}
                      {copy.privacyNote[lang]}
                    </p>
                    <Button type="submit" size="lg">
                      <Send className="h-4 w-4" aria-hidden />{" "}
                      {copy.submitCta[lang]}
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
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-brand-violet">
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
  lang,
  onReset,
  whatsappUrl,
}: {
  data: FormData;
  lang: Lang;
  onReset: () => void;
  whatsappUrl: string;
}) {
  const copy = webinarLandingCopy.registration;
  const labelByName: Record<string, string> = Object.fromEntries(
    formFields.map((f) => [f.name, f.label[lang]]),
  );

  const displayStatus =
    data.status &&
    formFields
      .find((f) => f.name === "status")
      ?.options?.find((o) => o.value === data.status)?.label[lang];

  return (
    <Card padding="lg" className="border-emerald-100 bg-emerald-50/40">
      <div className="flex flex-col items-center text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg">
          <CheckCircle2 className="h-8 w-8" aria-hidden />
        </span>
        <h3 className="mt-5 text-xl font-bold text-brand-navy sm:text-2xl">
          {copy.successTitle[lang]}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-muted sm:text-base">
          {copy.successBody[lang]}
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-brand-border bg-white p-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-violet">
          {copy.summaryEyebrow[lang]}
        </p>
        <dl className="mt-3 space-y-2 text-sm">
          {Object.entries(data)
            .filter(([, v]) => v?.trim())
            .map(([k, v]) => (
              <div
                key={k}
                className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3"
              >
                <dt className="text-xs font-medium uppercase tracking-wider text-brand-muted sm:w-32 sm:shrink-0">
                  {labelByName[k] ?? k}
                </dt>
                <dd className="text-sm text-brand-dark">
                  {k === "status" && displayStatus ? displayStatus : v}
                </dd>
              </div>
            ))}
        </dl>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button href={whatsappUrl} size="lg">
          <MessageCircle className="h-5 w-5" aria-hidden />{" "}
          {copy.confirmWhatsapp[lang]}
        </Button>
        <Button variant="secondary" size="lg" onClick={onReset}>
          {copy.registerAnother[lang]}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
      </div>
    </Card>
  );
}