import type { Localized } from "@/i18n/localized";

export type FAQ = {
  question: Localized<string>;
  answer: Localized<string>;
};

export const faqs: FAQ[] = [
  {
    question: {
      id: "Apakah website bisa menampilkan portfolio proyek?",
      en: "Can the site showcase a project portfolio?",
    },
    answer: {
      id: "Bisa. Portfolio ditampilkan dalam grid dengan kategori yang bisa difilter (Konsultan, Kontraktor, Agency, dll). Setiap proyek bisa dibuka di modal detail dengan informasi lengkap dan hasil yang dicapai.",
      en: "Yes. Projects appear in a filterable grid (consulting, contracting, agency, and more). Each project opens in a detail modal with full context and outcomes.",
    },
  },
  {
    question: {
      id: "Apakah bisa ada tombol WhatsApp di beberapa tempat?",
      en: "Can WhatsApp buttons appear in multiple places?",
    },
    answer: {
      id: "Bisa. WhatsApp CTA bisa dipasang di hero, akhir section layanan, setelah portfolio, di form, dan footer. Pesan yang dikirim sudah terisi otomatis dengan konteks (misal: 'saya tertarik layanan Audit Operasional').",
      en: "Yes. WhatsApp CTAs can sit in the hero, after services, after portfolio, on the form, and in the footer — with pre-filled context (e.g. interest in an operations audit).",
    },
  },
  {
    question: {
      id: "Apakah bisnis kecil terlihat profesional walaupun belum besar?",
      en: "Can a small business look professional before it is large?",
    },
    answer: {
      id: "Bisa. Yang penting bukan ukuran bisnis, tapi struktur informasinya. Dengan hero yang jelas, layanan tertata, dan portfolio yang konsisten, bisnis kecil bisa terasa lebih meyakinkan dari kompetitor yang lebih besar.",
      en: "Yes. What matters is information structure — a clear hero, organized services, and consistent portfolio can make a small business feel more credible than a larger but messy competitor.",
    },
  },
  {
    question: {
      id: "Apakah website bisa dipakai untuk proposal atau kartu nama?",
      en: "Can the site replace proposal decks or business cards?",
    },
    answer: {
      id: "Bisa, dan sangat disarankan. Anda dapat satu link resmi yang sama untuk semua materi — proposal PDF, bio Instagram, kartu nama, iklan, dan broadcast WhatsApp. Lebih praktis dan terasa lebih profesional.",
      en: "Yes — and we recommend it. One official URL works for PDF proposals, Instagram bio, business cards, ads, and WhatsApp broadcasts.",
    },
  },
  {
    question: {
      id: "Apakah form inquiry benar-benar mengumpulkan data berguna?",
      en: "Does the inquiry form collect useful data?",
    },
    answer: {
      id: "Ya. Form mengumpulkan 6 field: nama, nama bisnis, WhatsApp/email, jenis kebutuhan, estimasi budget, dan pesan. Anda menerima inquiry yang sudah terstruktur, bukan chat kosong yang butuh klarifikasi dari awal.",
      en: "Yes. Six fields: name, business name, WhatsApp/email, need type, budget range, and message — so you get structured inquiries, not empty chats.",
    },
  },
  {
    question: {
      id: "Apakah bisa ditambah halaman layanan baru di kemudian hari?",
      en: "Can we add new service pages later?",
    },
    answer: {
      id: "Bisa. Struktur website dibuat modular. Layanan baru bisa ditambahkan tanpa redesign, dan layout akan otomatis menyesuaikan. Update rutin didukung untuk menjaga konten tetap relevan.",
      en: "Yes. The structure is modular — new services slot in without a full redesign, and layouts adapt automatically.",
    },
  },
  {
    question: {
      id: "Apakah saya bisa update konten sendiri setelah website jadi?",
      en: "Can I update content myself after launch?",
    },
    answer: {
      id: "Tergantung kompleksitas. Update kecil (ganti teks, tambah proyek portfolio, update foto) didukung dan bisa kami bantu. Untuk perubahan besar (tambah section baru, ubah struktur), kami sarankan diskusi dulu.",
      en: "It depends on complexity. Small updates (copy, portfolio items, photos) are supported. Major structural changes are best discussed first.",
    },
  },
  {
    question: {
      id: "Apa bedanya dengan profile PDF yang sering dipakai bisnis jasa?",
      en: "How is this different from a static PDF company profile?",
    },
    answer: {
      id: "PDF itu statis — isinya tidak bisa diupdate tanpa reprint, dan tidak interaktif. Website selalu terbaru, calon klien bisa langsung klik WhatsApp atau isi form dari HP, dan Anda punya analytics untuk melihat siapa yang tertarik dengan layanan apa.",
      en: "PDFs are static and non-interactive. A site stays current, lets prospects tap WhatsApp or submit a form on mobile, and gives you insight into which services draw interest.",
    },
  },
];