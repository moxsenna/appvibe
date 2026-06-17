export type FormField = {
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
  type: "text" | "tel" | "email" | "select" | "textarea";
  options?: { value: string; label: string }[];
  helper?: string;
};

export const formFields: FormField[] = [
  {
    name: "name",
    label: "Nama lengkap",
    placeholder: "Contoh: Budi Santoso",
    required: true,
    type: "text",
  },
  {
    name: "business",
    label: "Nama bisnis / brand",
    placeholder: "Contoh: PT Maju Bersama",
    required: true,
    type: "text",
  },
  {
    name: "contact",
    label: "Email atau WhatsApp",
    placeholder: "08xx xxxx xxxx atau email@anda.com",
    required: true,
    type: "text",
    helper: "Kami akan menghubungi Anda via kontak ini",
  },
  {
    name: "need",
    label: "Yang Anda butuhkan",
    placeholder: "Pilih kebutuhan utama",
    required: true,
    type: "select",
    options: [
      { value: "company-profile", label: "Website company profile" },
      { value: "landing-page", label: "Landing page / campaign" },
      { value: "dashboard", label: "Dashboard / web app ringan" },
      { value: "automation", label: "Automation & integrasi" },
      { value: "multiple", label: "Lebih dari satu (kombinasi)" },
      { value: "belum-pasti", label: "Belum yakin — perlu diskusi dulu" },
    ],
  },
  {
    name: "budget",
    label: "Estimasi budget",
    placeholder: "Pilih kisaran budget",
    required: true,
    type: "select",
    options: [
      { value: "<10jt", label: "< 10 juta" },
      { value: "10-25jt", label: "10–25 juta" },
      { value: "25-50jt", label: "25–50 juta" },
      { value: ">50jt", label: "> 50 juta" },
      { value: "belum-tahu", label: "Belum tahu — tergantung scope" },
    ],
  },
  {
    name: "message",
    label: "Pesan tambahan (opsional)",
    placeholder: "Ceritakan singkat bisnis, target customer, atau referensi website yang Anda suka",
    required: false,
    type: "textarea",
    helper: "Akan membantu kami memahami kebutuhan lebih cepat",
  },
];

export const whatsappPrefill = `Halo AppVibe, saya tertarik untuk diskusi kebutuhan website/app untuk bisnis saya.

Nama: [nama]
Bisnis: [nama bisnis]
Kontak: [WhatsApp/email]
Kebutuhan: [pilih: Company profile / Landing page / Dashboard / Automation / Kombinasi / Belum yakin]
Estimasi budget: [pilih: <10jt / 10-25jt / 25-50jt / >50jt / Belum tahu]
Pesan tambahan: [opsional]

Bisa dijadwalkan untuk diskusi awal?`;
