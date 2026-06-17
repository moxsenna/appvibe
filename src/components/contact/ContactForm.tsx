import { useState } from "react";
import type { FormEvent } from "react";
import { MessageCircle, Send, Shield } from "lucide-react";
import { formFields, whatsappPrefill } from "@/data/contact/form";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl, getDefaultConsultationMessage } from "@/lib/whatsapp";
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
    <section
      id="form-kontak"
      className="section-padding"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
      }}
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
              Form Konsultasi
            </p>
            <h2 className="mt-2 text-2xl font-bold text-brand-navy sm:text-3xl">
              Siapkan pesan WhatsApp dengan konteks lengkap
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
              Isi form singkat berikut. Setelah Anda klik kirim, WhatsApp akan
              terbuka dengan pesan yang sudah terformat otomatis — tinggal
              review dan kirim ke kami. Tidak ada data yang dikirim ke server.
            </p>

            <Card padding="lg" className="mt-6 shadow-card-hover">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {formFields.map((field) => {
                  if (field.type === "select") {
                    return (
                      <div key={field.name}>
                        <label className="mb-1.5 block text-sm font-medium text-brand-navy">
                          {field.label}{" "}
                          {field.required && <span className="text-red-500">*</span>}
                        </label>
                        <select
                          value={data[field.name] ?? ""}
                          onChange={(e) => update(field.name, e.target.value)}
                          className={cn(
                            "w-full appearance-none rounded-xl border bg-white py-2.5 px-3.5 text-sm text-brand-dark focus:outline-none focus:ring-2",
                            errors[field.name]
                              ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                              : "border-brand-border focus:border-brand-blue focus:ring-brand-blue/20",
                          )}
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
                        <label className="mb-1.5 block text-sm font-medium text-brand-navy">
                          {field.label}
                        </label>
                        <textarea
                          value={data[field.name] ?? ""}
                          onChange={(e) => update(field.name, e.target.value)}
                          placeholder={field.placeholder}
                          rows={4}
                          className="w-full rounded-xl border border-brand-border bg-white py-2.5 px-3.5 text-sm text-brand-dark placeholder:text-brand-muted focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                        />
                        {field.helper && (
                          <p className="mt-1 text-xs text-brand-muted">
                            {field.helper}
                          </p>
                        )}
                      </div>
                    );
                  }
                  return (
                    <div key={field.name}>
                      <label className="mb-1.5 block text-sm font-medium text-brand-navy">
                        {field.label}{" "}
                        {field.required && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type={field.type === "tel" ? "text" : field.type}
                        value={data[field.name] ?? ""}
                        onChange={(e) => update(field.name, e.target.value)}
                        placeholder={field.placeholder}
                        className={cn(
                          "w-full rounded-xl border bg-white py-2.5 px-3.5 text-sm text-brand-dark placeholder:text-brand-muted focus:outline-none focus:ring-2",
                          errors[field.name]
                            ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                            : "border-brand-border focus:border-brand-blue focus:ring-brand-blue/20",
                        )}
                      />
                      {field.helper && !errors[field.name] && (
                        <p className="mt-1 text-xs text-brand-muted">
                          {field.helper}
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
                    <Shield className="h-3.5 w-3.5" aria-hidden /> Data hanya
                    digunakan untuk follow-up konsultasi.
                  </p>
                  <Button type="submit" size="lg">
                    <Send className="h-4 w-4" aria-hidden /> Kirim via WhatsApp
                  </Button>
                </div>
              </form>
            </Card>
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
  const whatsappUrl = buildWhatsAppUrl(getDefaultConsultationMessage(lang));
  return (
    <Card padding="lg" className="h-full bg-white">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
        Kontak Langsung
      </p>
      <h2 className="mt-2 text-xl font-bold text-brand-navy">
        Lebih suka langsung chat?
      </h2>
      <p className="mt-2 text-sm text-brand-muted">
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

      <div className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50/40 p-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
          Prefer WhatsApp langsung?
        </p>
        <p className="mt-2 text-sm text-emerald-900">
          Klik tombol di bawah untuk langsung chat dengan tim kami — tidak
          perlu mengisi form.
        </p>
        <Button href={whatsappUrl} size="md" className="mt-3">
          <MessageCircle className="h-4 w-4" aria-hidden /> Chat Sekarang
        </Button>
      </div>
    </Card>
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
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-blue">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
          {title}
        </p>
        <p className="mt-0.5 text-sm font-medium text-brand-navy">{body}</p>
      </div>
    </>
  );
  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="flex items-start gap-3 transition-colors hover:text-brand-blue"
      >
        {content}
      </a>
    );
  }
  return <div className="flex items-start gap-3">{content}</div>;
}
