import { useState } from "react";
import type { FormEvent } from "react";
import { MessageCircle, Send, Shield } from "lucide-react";
import { formFields, whatsappPrefill } from "@/data/contact/form";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl, getContactConsultationMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { useLang } from "@/i18n/use-lang";

type FormData = Record<string, string>;
type FormErrors = Partial<Record<string, string>>;

const initialData: FormData = Object.fromEntries(
  formFields.map((f) => [f.name, ""]),
);

const optionLabelByValue = (name: string, value: string): string => {
  const field = formFields.find((f) => f.name === name);
  const opt = field?.options?.find((o) => o.value === value);
  return opt?.label ?? value;
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  for (const field of formFields) {
    if (field.required && !data[field.name]?.trim()) {
      errors[field.name] = `${field.label} wajib diisi`;
    }
  }
  if (data.contact && data.contact.trim()) {
    const v = data.contact.trim();
    const isPhone = /^[+\d\s\-()]{8,}$/.test(v);
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    if (!isPhone && !isEmail) {
      errors.contact = "Format harus nomor WhatsApp atau email";
    }
  }
  return errors;
}

function buildPrefilledMessage(data: FormData): string {
  return whatsappPrefill
    .replace("[nama]", data.name || "(nama)")
    .replace("[nama bisnis]", data.business || "(nama bisnis)")
    .replace("[WhatsApp/email]", data.contact || "-")
    .replace(
      "[pilih: Company profile / Landing page / Dashboard / Automation / Kombinasi / Belum yakin]",
      optionLabelByValue("need", data.need) || "-",
    )
    .replace(
      "[pilih: <10jt / 10-25jt / 25-50jt / >50jt / Belum tahu]",
      optionLabelByValue("budget", data.budget) || "-",
    )
    .replace("[opsional]", data.message || "(tidak ada)");
}

const inputCls = (hasError: boolean) =>
  cn(
    "w-full rounded border bg-av-surface px-3.5 py-2.5 text-sm text-av-ink placeholder:text-av-muted focus:outline-none focus:ring-2",
    hasError
      ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
      : "border-av-border focus:border-av-signal focus:ring-av-signal/20",
  );

export function ContactForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});

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
    const validation = validate(data);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    const whatsappUrl = buildWhatsAppUrl(buildPrefilledMessage(data));
    trackEvent("contact_form_submit", {
      form: "contact_page",
      need: data.need,
      budget: data.budget,
    });
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="form-kontak" className="border-t border-av-border">
      <Container className="py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="av-eyebrow text-av-signal">Form Konsultasi</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-av-ink sm:text-3xl">
              Siapkan pesan WhatsApp dengan konteks lengkap
            </h2>
            <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-av-text">
              Isi form singkat berikut. Setelah Anda klik kirim, WhatsApp akan
              terbuka dengan pesan yang sudah terformat otomatis — tinggal
              review dan kirim ke kami. Tidak ada data yang dikirim ke server.
            </p>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-8 space-y-5 rounded border border-av-border bg-av-surface p-6 sm:p-8"
            >
              {formFields.map((field) => {
                if (field.type === "select") {
                  return (
                    <div key={field.name}>
                      <label className="mb-1.5 block text-sm font-medium text-av-ink">
                        {field.label}{" "}
                        {field.required && <span className="text-red-500">*</span>}
                      </label>
                      <select
                        value={data[field.name] ?? ""}
                        onChange={(e) => update(field.name, e.target.value)}
                        className={cn(inputCls(Boolean(errors[field.name])), "appearance-none")}
                      >
                        <option value="">{field.placeholder}</option>
                        {field.options?.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
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
                      <label className="mb-1.5 block text-sm font-medium text-av-ink">
                        {field.label}
                      </label>
                      <textarea
                        value={data[field.name] ?? ""}
                        onChange={(e) => update(field.name, e.target.value)}
                        placeholder={field.placeholder}
                        rows={4}
                        className={inputCls(false)}
                      />
                      {field.helper && (
                        <p className="mt-1 text-xs text-av-muted">{field.helper}</p>
                      )}
                    </div>
                  );
                }
                return (
                  <div key={field.name}>
                    <label className="mb-1.5 block text-sm font-medium text-av-ink">
                      {field.label}{" "}
                      {field.required && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type={field.type === "tel" ? "text" : field.type}
                      value={data[field.name] ?? ""}
                      onChange={(e) => update(field.name, e.target.value)}
                      placeholder={field.placeholder}
                      className={inputCls(Boolean(errors[field.name]))}
                    />
                    {field.helper && !errors[field.name] && (
                      <p className="mt-1 text-xs text-av-muted">{field.helper}</p>
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
                <p className="inline-flex items-center gap-1.5 text-xs text-av-muted">
                  <Shield className="h-3.5 w-3.5" aria-hidden /> Data hanya
                  digunakan untuk follow-up konsultasi.
                </p>
                <Button type="submit" size="lg">
                  <Send className="h-4 w-4" aria-hidden /> Kirim via WhatsApp
                </Button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactInfo() {
  const { lang } = useLang();
  const whatsappUrl = buildWhatsAppUrl(getContactConsultationMessage(lang));
  return (
    <div className="h-full rounded border border-av-border bg-av-surface p-6 sm:p-8 lg:sticky lg:top-24">
      <p className="av-eyebrow text-av-signal">Kontak Langsung</p>
      <h2 className="mt-3 text-xl font-semibold tracking-tight text-av-ink">
        Lebih suka langsung chat?
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-av-secondary">
        Jika Anda lebih nyaman menghubungi via WhatsApp atau email langsung,
        berikut adalah channel resmi AppVibe Studio.
      </p>

      <div className="mt-6 space-y-4">
        <InfoRow
          icon={MessageCircle}
          title="WhatsApp"
          body="+62 851-7959-5302"
          href={whatsappUrl}
        />
        <InfoRow
          icon={MessageCircle}
          title="Email"
          body="bima@appvibe.web.id"
          href="mailto:bima@appvibe.web.id"
        />
        <InfoRow
          icon={MessageCircle}
          title="Jam Operasional"
          body="Senin–Sabtu, 09.00–18.00 WIB"
        />
      </div>

      <div className="mt-6 border-t border-av-border pt-6">
        <p className="text-sm text-av-secondary">
          Langsung chat tanpa mengisi form:
        </p>
        <Button href={whatsappUrl} size="md" className="mt-3">
          <MessageCircle className="h-4 w-4" aria-hidden /> Chat Sekarang
        </Button>
      </div>
    </div>
  );
}

function InfoRow({
  icon: Icon,
  title,
  body,
  href,
}: {
  icon: typeof MessageCircle;
  title: string;
  body: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-av-border bg-av-canvas text-av-signal">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-av-muted">
          {title}
        </p>
        <p className="mt-0.5 text-sm font-medium text-av-ink">{body}</p>
      </div>
    </>
  );
  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="flex items-start gap-3"
      >
        {content}
      </a>
    );
  }
  return <div className="flex items-start gap-3">{content}</div>;
}
