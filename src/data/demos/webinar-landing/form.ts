import type { Localized } from "@/i18n/localized";

export type FormFieldOption = {
  value: string;
  label: Localized<string>;
};

export type FormField = {
  name: string;
  label: Localized<string>;
  placeholder: Localized<string>;
  required: boolean;
  type: "text" | "tel" | "email" | "select" | "textarea";
  options?: FormFieldOption[];
  helper?: Localized<string>;
};

export const formFields: FormField[] = [
  {
    name: "name",
    label: { id: "Nama lengkap", en: "Full name" },
    placeholder: { id: "Contoh: Budi Santoso", en: "e.g. Budi Santoso" },
    required: true,
    type: "text",
  },
  {
    name: "phone",
    label: { id: "Nomor WhatsApp", en: "WhatsApp number" },
    placeholder: { id: "08xx xxxx xxxx", en: "08xx xxxx xxxx" },
    required: true,
    type: "tel",
    helper: {
      id: "Link Zoom dan reminder akan dikirim ke nomor ini",
      en: "Zoom link and reminders will be sent to this number",
    },
  },
  {
    name: "email",
    label: { id: "Email", en: "Email" },
    placeholder: {
      id: "nama@email.com (opsional)",
      en: "name@email.com (optional)",
    },
    required: false,
    type: "email",
    helper: {
      id: "Untuk pengiriman rekaman dan bonus",
      en: "For recording and bonus delivery",
    },
  },
  {
    name: "domicile",
    label: { id: "Domisili kota", en: "City" },
    placeholder: { id: "Contoh: Jakarta", en: "e.g. Jakarta" },
    required: false,
    type: "text",
  },
  {
    name: "status",
    label: { id: "Status Anda", en: "Your status" },
    placeholder: { id: "Pilih status", en: "Select status" },
    required: true,
    type: "select",
    options: [
      { value: "orang-tua", label: { id: "Orang tua siswa", en: "Parent of a student" } },
      { value: "siswa", label: { id: "Siswa SMA/SMK", en: "High-school / vocational student" } },
      {
        value: "fresh-grad",
        label: { id: "Mahasiswa / fresh graduate", en: "Student / fresh graduate" },
      },
      {
        value: "career-switcher",
        label: { id: "Ingin switch karier", en: "Career switcher" },
      },
      { value: "lainnya", label: { id: "Lainnya", en: "Other" } },
    ],
  },
  {
    name: "question",
    label: {
      id: "Pertanyaan atau tujuan Anda",
      en: "Your question or goal",
    },
    placeholder: {
      id: "Ceritakan singkat apa yang ingin Anda dapatkan dari webinar ini",
      en: "Briefly share what you hope to get from this webinar",
    },
    required: false,
    type: "textarea",
    helper: {
      id: "Akan kami catat dan bahas di sesi Q&A jika relevan",
      en: "We may address this in Q&A if relevant",
    },
  },
];