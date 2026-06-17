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

export const formMessages = {
  required: {
    id: "wajib diisi",
    en: "is required",
  },
  phoneInvalid: {
    id: "Format nomor WhatsApp tidak valid",
    en: "WhatsApp number format is not valid",
  },
  emailInvalid: {
    id: "Format email tidak valid",
    en: "Email format is not valid",
  },
} satisfies Record<string, Localized<string>>;

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
      id: "Konfirmasi jadwal dan arahan lokasi akan dikirim ke sini",
      en: "Visit confirmation and directions will be sent here",
    },
  },
  {
    name: "email",
    label: { id: "Email", en: "Email" },
    placeholder: { id: "nama@email.com (opsional)", en: "name@email.com (optional)" },
    required: false,
    type: "email",
  },
  {
    name: "unit",
    label: { id: "Unit yang diminati", en: "Unit of interest" },
    placeholder: { id: "Pilih unit", en: "Select a unit" },
    required: true,
    type: "select",
    options: [
      {
        value: "arunika-residence",
        label: { id: "Cluster Arunika Residence", en: "Arunika Residence Cluster" },
      },
      {
        value: "ruko-nusa-avenue",
        label: { id: "Ruko Nusa Avenue", en: "Nusa Avenue Shophouse" },
      },
      {
        value: "kavling-bukit-asri",
        label: { id: "Kavling Bukit Asri", en: "Bukit Asri Land Plots" },
      },
      { value: "villa-sagara", label: { id: "Villa Sagara", en: "Villa Sagara" } },
      {
        value: "renovasi-cendana",
        label: { id: "Renovasi Rumah Cendana", en: "Cendana Home Renovation" },
      },
      {
        value: "interior-senopati",
        label: { id: "Interior Apartemen Senopati", en: "Senopati Apartment Interior" },
      },
    ],
  },
  {
    name: "need",
    label: { id: "Kebutuhan Anda", en: "Your intent" },
    placeholder: { id: "Pilih kebutuhan", en: "Select intent" },
    required: true,
    type: "select",
    options: [
      {
        value: "hunian-pribadi",
        label: { id: "Hunian pribadi / keluarga", en: "Personal / family home" },
      },
      { value: "investasi", label: { id: "Investasi", en: "Investment" } },
      { value: "komersial", label: { id: "Komersial / usaha", en: "Commercial / business" } },
      { value: "renovasi", label: { id: "Renovasi / bangun", en: "Renovation / build" } },
      { value: "interior", label: { id: "Interior", en: "Interior" } },
      { value: "konsultasi", label: { id: "Mau diskusi dulu", en: "Discuss first" } },
    ],
  },
  {
    name: "visit",
    label: { id: "Rencana jadwal kunjungan", en: "Preferred visit timing" },
    placeholder: { id: "Pilih waktu", en: "Select timing" },
    required: false,
    type: "select",
    options: [
      { value: "minggu-ini", label: { id: "Minggu ini", en: "This week" } },
      { value: "minggu-depan", label: { id: "Minggu depan", en: "Next week" } },
      { value: "2-minggu", label: { id: "2 minggu ke depan", en: "In two weeks" } },
      {
        value: "belum-pasti",
        label: { id: "Belum pasti, diskusi dulu", en: "Not sure yet — discuss first" },
      },
    ],
  },
  {
    name: "notes",
    label: { id: "Pesan tambahan", en: "Additional message" },
    placeholder: {
      id: "Ceritakan singkat kebutuhan Anda, keluarga, atau preferensi unit",
      en: "Briefly describe your needs, household, or unit preferences",
    },
    required: false,
    type: "textarea",
    helper: {
      id: "Akan membantu tim GrahaNusa mempersiapkan diskusi yang lebih relevan",
      en: "Helps the GrahaNusa team prepare a more relevant conversation",
    },
  },
];