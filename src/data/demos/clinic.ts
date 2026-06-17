import { same, type Localized } from "@/i18n/localized";

export type ClinicBrand = {
  name: Localized<string>;
  type: Localized<string>;
  tagline: Localized<string>;
  positioning: Localized<string>;
  targetAudience: Localized<string>;
  tone: Localized<string>;
  disclaimer: Localized<string>;
  demoDisclaimer: Localized<string>;
  address: Localized<string>;
  phone: Localized<string>;
  email: Localized<string>;
  adminHours: Localized<string>;
  primaryColor: string;
  mainCta: Localized<string>;
  secondaryCta: Localized<string>;
};

export const NATURACARE_CLINIC: ClinicBrand = {
  name: same("NaturaCare Clinic"),
  type: {
    id: "Klinik health, beauty, dental ringan, wellness, dan konsultasi non-emergency",
    en: "Clinic for health, beauty, light dental care, wellness, and non-emergency consultation",
  },
  tagline: {
    id: "Perawatan yang Lebih Tenang, Personal, dan Terarah",
    en: "Care That Feels Calmer, More Personal, and Well Guided",
  },
  positioning: {
    id: "NaturaCare Clinic membantu calon pasien memahami pilihan layanan, jadwal tenaga ahli, dan alur booking dengan informasi yang rapi, hangat, dan mudah dipercaya.",
    en: "NaturaCare Clinic helps prospective patients understand service options, practitioner schedules, and booking steps through clear, warm, trustworthy information.",
  },
  targetAudience: {
    id: "Wanita dan pria usia 22–45, keluarga muda, calon pasien dental ringan, customer skincare, ibu hamil, klien wellness/fisioterapi, dan konseling non-emergency",
    en: "Women and men aged 22–45, young families, light dental patients, skincare clients, expectant mothers, wellness/physiotherapy clients, and non-emergency counseling",
  },
  tone: {
    id: "Profesional, hangat, tenang, konsultatif — tanpa overclaim",
    en: "Professional, warm, calm, consultative — without overclaiming",
  },
  disclaimer: {
    id: "Informasi pada website ini bersifat umum. Pemeriksaan atau konsultasi langsung tetap disarankan agar rekomendasi layanan dapat disesuaikan dengan kondisi masing-masing.",
    en: "Information on this website is general in nature. An in-person examination or consultation is still recommended so service suggestions can be tailored to each individual.",
  },
  demoDisclaimer: {
    id: "NaturaCare Clinic adalah brand dummy untuk demo portfolio AppVibe Studio. Semua nama, jadwal, dan data bersifat simulasi.",
    en: "NaturaCare Clinic is a fictitious brand for the AppVibe Studio portfolio demo. All names, schedules, and data are simulated.",
  },
  address: {
    id: "Jl. Anggrek Sehat No. 18, Bandung, Jawa Barat",
    en: "Jl. Anggrek Sehat No. 18, Bandung, West Java",
  },
  phone: same("0812-0000-1828"),
  email: same("hello@naturacare.example"),
  adminHours: {
    id: "Senin–Sabtu, 08.30–17.00",
    en: "Monday–Saturday, 08:30–17:00",
  },
  primaryColor: "#0F9F8F",
  mainCta: {
    id: "Booking via WhatsApp",
    en: "Book via WhatsApp",
  },
  secondaryCta: {
    id: "Lihat Layanan",
    en: "View Services",
  },
};

export type ClinicService = {
  id: string;
  name: Localized<string>;
  description: Localized<string>;
  suitableFor: Localized<string>;
  duration: Localized<string>;
  cta: Localized<string>;
  note: Localized<string>;
  color: string;
};

export const CLINIC_SERVICES: ClinicService[] = [
  {
    id: "konsultasi-kulit",
    name: {
      id: "Konsultasi Kulit & Skincare",
      en: "Skin & Skincare Consultation",
    },
    description: {
      id: "Sesi konsultasi untuk memahami kebutuhan kulit, kebiasaan perawatan, dan pilihan treatment atau produk yang dapat dipertimbangkan.",
      en: "A consultation session to understand skin needs, care habits, and treatment or product options worth considering.",
    },
    suitableFor: {
      id: "Calon customer yang ingin memulai perawatan kulit dengan arahan yang lebih personal.",
      en: "Prospective clients who want to start skin care with more personal guidance.",
    },
    duration: {
      id: "Estimasi 20–30 menit",
      en: "Approx. 20–30 minutes",
    },
    cta: {
      id: "Tanya Konsultasi Kulit",
      en: "Ask About Skin Consultation",
    },
    note: {
      id: "Konsultasi tetap disarankan agar rekomendasi disesuaikan dengan kondisi kulit.",
      en: "Consultation is still recommended so suggestions match your skin condition.",
    },
    color: "bg-teal-100 text-teal-700",
  },
  {
    id: "facial",
    name: { id: "Facial Treatment", en: "Facial Treatment" },
    description: {
      id: "Perawatan wajah non-invasif yang berfokus pada kebersihan, kenyamanan, dan perawatan rutin sesuai kebutuhan.",
      en: "Non-invasive facial care focused on cleanliness, comfort, and routine care aligned with your needs.",
    },
    suitableFor: {
      id: "Customer yang ingin merawat kulit wajah secara berkala.",
      en: "Clients who want regular facial skin care.",
    },
    duration: {
      id: "Estimasi 45–60 menit",
      en: "Approx. 45–60 minutes",
    },
    cta: { id: "Booking Facial", en: "Book Facial" },
    note: {
      id: "Jenis facial dapat disesuaikan setelah konsultasi awal.",
      en: "Facial type can be adjusted after an initial consultation.",
    },
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    id: "dental-checkup",
    name: {
      id: "Dental Check-Up Ringan",
      en: "Light Dental Check-Up",
    },
    description: {
      id: "Pemeriksaan gigi dasar untuk membantu memahami kondisi awal dan kebutuhan perawatan lanjutan bila diperlukan.",
      en: "A basic dental exam to understand initial condition and any follow-up care needs if required.",
    },
    suitableFor: {
      id: "Pasien yang ingin melakukan pengecekan gigi secara berkala.",
      en: "Patients who want periodic dental check-ups.",
    },
    duration: {
      id: "Estimasi 20–30 menit",
      en: "Approx. 20–30 minutes",
    },
    cta: {
      id: "Tanya Jadwal Dental",
      en: "Ask Dental Schedule",
    },
    note: {
      id: "Tindakan lanjutan bergantung pada hasil pemeriksaan tenaga ahli.",
      en: "Further treatment depends on the practitioner’s examination findings.",
    },
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "scaling",
    name: { id: "Scaling Gigi", en: "Dental Scaling" },
    description: {
      id: "Layanan pembersihan karang gigi yang dilakukan oleh tenaga profesional sesuai indikasi dan kondisi pasien.",
      en: "Professional tartar removal performed according to indication and the patient’s condition.",
    },
    suitableFor: {
      id: "Pasien yang ingin menjaga kebersihan gigi dan mulut secara berkala.",
      en: "Patients who want to maintain regular oral hygiene.",
    },
    duration: {
      id: "Estimasi 30–45 menit",
      en: "Approx. 30–45 minutes",
    },
    cta: { id: "Booking Scaling", en: "Book Scaling" },
    note: {
      id: "Pemeriksaan awal tetap diperlukan sebelum tindakan.",
      en: "An initial examination is still required before the procedure.",
    },
    color: "bg-sky-100 text-sky-700",
  },
  {
    id: "bidan",
    name: { id: "Konsultasi Bidan", en: "Midwife Consultation" },
    description: {
      id: "Konsultasi dasar seputar kesehatan ibu, kehamilan, dan persiapan persalinan dalam konteks non-emergency.",
      en: "Basic consultation on maternal health, pregnancy, and birth preparation in a non-emergency context.",
    },
    suitableFor: {
      id: "Ibu hamil atau keluarga muda yang ingin mendapatkan arahan awal.",
      en: "Expectant mothers or young families seeking initial guidance.",
    },
    duration: {
      id: "Estimasi 20–30 menit",
      en: "Approx. 20–30 minutes",
    },
    cta: { id: "Tanya Jadwal Bidan", en: "Ask Midwife Schedule" },
    note: {
      id: "Untuk kondisi darurat, pasien perlu segera menghubungi fasilitas kesehatan terdekat.",
      en: "For emergencies, contact the nearest healthcare facility immediately.",
    },
    color: "bg-rose-100 text-rose-700",
  },
  {
    id: "konseling",
    name: {
      id: "Konsultasi Psikolog/Konselor",
      en: "Psychologist / Counselor Consultation",
    },
    description: {
      id: "Sesi konsultasi untuk membantu klien memahami kondisi emosional, stres, relasi, atau tantangan personal secara lebih terarah.",
      en: "A consultation session to help clients understand emotions, stress, relationships, or personal challenges more clearly.",
    },
    suitableFor: {
      id: "Klien yang ingin ruang bicara yang lebih aman dan terstruktur.",
      en: "Clients who want a safer, more structured space to talk.",
    },
    duration: {
      id: "Estimasi 45–60 menit",
      en: "Approx. 45–60 minutes",
    },
    cta: {
      id: "Tanya Jadwal Konselor",
      en: "Ask Counselor Schedule",
    },
    note: {
      id: "Pendekatan sesi dapat berbeda sesuai kebutuhan klien.",
      en: "Session approach may vary based on client needs.",
    },
    color: "bg-violet-100 text-violet-700",
  },
  {
    id: "fisioterapi",
    name: { id: "Fisioterapi Ringan", en: "Light Physiotherapy" },
    description: {
      id: "Sesi asesmen dan latihan dasar untuk membantu memahami keluhan gerak ringan dan kebutuhan pendampingan.",
      en: "Assessment and basic exercises to understand mild movement concerns and support needs.",
    },
    suitableFor: {
      id: "Pasien dengan keluhan ringan atau kebutuhan pemulihan dasar non-emergency.",
      en: "Patients with mild complaints or basic non-emergency recovery needs.",
    },
    duration: {
      id: "Estimasi 30–45 menit",
      en: "Approx. 30–45 minutes",
    },
    cta: { id: "Tanya Fisioterapi", en: "Ask About Physiotherapy" },
    note: {
      id: "Tenaga ahli akan menyesuaikan pendekatan berdasarkan asesmen awal.",
      en: "Practitioners adjust the approach based on the initial assessment.",
    },
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "wellness",
    name: {
      id: "Wellness Consultation",
      en: "Wellness Consultation",
    },
    description: {
      id: "Konsultasi gaya hidup sehat, rutinitas harian, dan kebiasaan wellness yang dapat disesuaikan dengan kebutuhan personal.",
      en: "Consultation on healthy habits, daily routines, and wellness practices tailored to personal needs.",
    },
    suitableFor: {
      id: "Customer yang ingin membangun rutinitas kesehatan preventif secara bertahap.",
      en: "Clients building preventive health routines step by step.",
    },
    duration: {
      id: "Estimasi 20–30 menit",
      en: "Approx. 20–30 minutes",
    },
    cta: { id: "Tanya Wellness", en: "Ask About Wellness" },
    note: {
      id: "Informasi bersifat edukatif dan tidak menggantikan pemeriksaan medis.",
      en: "Information is educational and does not replace a medical examination.",
    },
    color: "bg-amber-100 text-amber-700",
  },
];

export type ClinicExpert = {
  id: string;
  name: Localized<string>;
  initials: string;
  role: Localized<string>;
  focus: Localized<string>;
  experience: Localized<string>;
  bio: Localized<string>;
  schedule: Localized<string>;
  cta: Localized<string>;
  gradient: string;
};

export const CLINIC_EXPERTS: ClinicExpert[] = [
  {
    id: "anindita",
    name: same("dr. Anindita Prameswari"),
    initials: "AP",
    role: { id: "Dokter Estetika", en: "Aesthetic Physician" },
    focus: {
      id: "Konsultasi kulit, skincare, facial treatment",
      en: "Skin consultation, skincare, facial treatment",
    },
    experience: {
      id: "7+ tahun di layanan klinik estetika",
      en: "7+ years in aesthetic clinic services",
    },
    bio: {
      id: "dr. Anindita membantu calon customer memahami kebutuhan kulit dan pilihan perawatan yang lebih sesuai melalui pendekatan konsultatif.",
      en: "Dr. Anindita helps prospective clients understand skin needs and suitable care options through a consultative approach.",
    },
    schedule: {
      id: "Senin, Rabu, Jumat",
      en: "Monday, Wednesday, Friday",
    },
    cta: {
      id: "Booking dengan dr. Anindita",
      en: "Book with Dr. Anindita",
    },
    gradient: "from-teal-400 to-cyan-500",
  },
  {
    id: "raka",
    name: same("drg. Raka Mahendra"),
    initials: "RM",
    role: { id: "Dokter Gigi", en: "Dentist" },
    focus: {
      id: "Dental check-up, scaling, edukasi perawatan gigi",
      en: "Dental check-up, scaling, oral care education",
    },
    experience: {
      id: "6+ tahun di layanan dental clinic",
      en: "6+ years in dental clinic services",
    },
    bio: {
      id: "drg. Raka membantu pasien memahami kondisi awal gigi dan mulut melalui pemeriksaan dasar serta edukasi perawatan rutin.",
      en: "Dr. Raka helps patients understand initial oral health through basic exams and routine care education.",
    },
    schedule: {
      id: "Selasa, Kamis, Sabtu",
      en: "Tuesday, Thursday, Saturday",
    },
    cta: {
      id: "Booking dengan drg. Raka",
      en: "Book with Dr. Raka",
    },
    gradient: "from-blue-400 to-sky-500",
  },
  {
    id: "meisya",
    name: same("Bidan Meisya Rahmani"),
    initials: "MR",
    role: { id: "Bidan Praktik", en: "Practicing Midwife" },
    focus: {
      id: "Konsultasi ibu, kehamilan, persiapan persalinan non-emergency",
      en: "Maternal consultation, pregnancy, non-emergency birth preparation",
    },
    experience: {
      id: "8+ tahun mendampingi keluarga muda",
      en: "8+ years supporting young families",
    },
    bio: {
      id: "Bidan Meisya mendampingi konsultasi dasar seputar kesehatan ibu dan persiapan keluarga dengan komunikasi yang hangat dan mudah dipahami.",
      en: "Midwife Meisya supports basic maternal health and family preparation with warm, clear communication.",
    },
    schedule: {
      id: "Senin, Kamis, Sabtu",
      en: "Monday, Thursday, Saturday",
    },
    cta: { id: "Tanya Jadwal Bidan", en: "Ask Midwife Schedule" },
    gradient: "from-rose-400 to-pink-500",
  },
  {
    id: "nadia",
    name: same("Nadia Putri, M.Psi., Psikolog"),
    initials: "NP",
    role: { id: "Psikolog/Konselor", en: "Psychologist / Counselor" },
    focus: {
      id: "Stres, relasi, emotional wellbeing, konseling personal",
      en: "Stress, relationships, emotional wellbeing, personal counseling",
    },
    experience: {
      id: "5+ tahun dalam layanan konseling",
      en: "5+ years in counseling services",
    },
    bio: {
      id: "Nadia membantu klien memahami kondisi emosional dan tantangan personal melalui sesi konseling yang lebih terstruktur.",
      en: "Nadia helps clients understand emotional conditions and personal challenges through structured counseling sessions.",
    },
    schedule: {
      id: "Rabu, Jumat, Minggu",
      en: "Wednesday, Friday, Sunday",
    },
    cta: {
      id: "Tanya Jadwal Konseling",
      en: "Ask Counseling Schedule",
    },
    gradient: "from-violet-400 to-purple-500",
  },
];

export type ClinicScheduleDay = {
  dayKey: "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";
  day: Localized<string>;
  hours: Localized<string>;
  services: Localized<string>;
  experts: Localized<string>;
  cta: Localized<string>;
};

export const CLINIC_SCHEDULE: ClinicScheduleDay[] = [
  {
    dayKey: "mon",
    day: { id: "Senin", en: "Monday" },
    hours: { id: "09.00–17.00", en: "09:00–17:00" },
    services: {
      id: "Kulit, Facial, Bidan",
      en: "Skin, Facial, Midwife",
    },
    experts: {
      id: "dr. Anindita, Bidan Meisya",
      en: "Dr. Anindita, Midwife Meisya",
    },
    cta: { id: "Booking Senin", en: "Book Monday" },
  },
  {
    dayKey: "tue",
    day: { id: "Selasa", en: "Tuesday" },
    hours: { id: "10.00–18.00", en: "10:00–18:00" },
    services: {
      id: "Dental, Scaling, Wellness",
      en: "Dental, Scaling, Wellness",
    },
    experts: {
      id: "drg. Raka, Tim Wellness",
      en: "Dr. Raka, Wellness Team",
    },
    cta: { id: "Booking Selasa", en: "Book Tuesday" },
  },
  {
    dayKey: "wed",
    day: { id: "Rabu", en: "Wednesday" },
    hours: { id: "09.00–17.00", en: "09:00–17:00" },
    services: {
      id: "Kulit, Konseling, Facial",
      en: "Skin, Counseling, Facial",
    },
    experts: {
      id: "dr. Anindita, Nadia Putri",
      en: "Dr. Anindita, Nadia Putri",
    },
    cta: { id: "Booking Rabu", en: "Book Wednesday" },
  },
  {
    dayKey: "thu",
    day: { id: "Kamis", en: "Thursday" },
    hours: { id: "10.00–18.00", en: "10:00–18:00" },
    services: {
      id: "Dental, Bidan, Wellness",
      en: "Dental, Midwife, Wellness",
    },
    experts: {
      id: "drg. Raka, Bidan Meisya",
      en: "Dr. Raka, Midwife Meisya",
    },
    cta: { id: "Booking Kamis", en: "Book Thursday" },
  },
  {
    dayKey: "fri",
    day: { id: "Jumat", en: "Friday" },
    hours: { id: "09.00–16.00", en: "09:00–16:00" },
    services: {
      id: "Kulit, Konseling, Fisioterapi",
      en: "Skin, Counseling, Physiotherapy",
    },
    experts: {
      id: "dr. Anindita, Nadia Putri, Tim Fisio",
      en: "Dr. Anindita, Nadia Putri, Physio Team",
    },
    cta: { id: "Booking Jumat", en: "Book Friday" },
  },
  {
    dayKey: "sat",
    day: { id: "Sabtu", en: "Saturday" },
    hours: { id: "09.00–15.00", en: "09:00–15:00" },
    services: {
      id: "Dental, Bidan, Facial",
      en: "Dental, Midwife, Facial",
    },
    experts: {
      id: "drg. Raka, Bidan Meisya",
      en: "Dr. Raka, Midwife Meisya",
    },
    cta: { id: "Booking Sabtu", en: "Book Saturday" },
  },
  {
    dayKey: "sun",
    day: { id: "Minggu", en: "Sunday" },
    hours: { id: "10.00–14.00", en: "10:00–14:00" },
    services: {
      id: "Konseling, Wellness",
      en: "Counseling, Wellness",
    },
    experts: {
      id: "Nadia Putri, Tim Wellness",
      en: "Nadia Putri, Wellness Team",
    },
    cta: { id: "Booking Minggu", en: "Book Sunday" },
  },
];

export type ClinicFaq = {
  question: Localized<string>;
  answer: Localized<string>;
};

export const CLINIC_FAQ: ClinicFaq[] = [
  {
    question: {
      id: "Apakah bisa konsultasi dulu sebelum memilih layanan?",
      en: "Can I consult before choosing a service?",
    },
    answer: {
      id: "Ya. Calon pasien dapat menghubungi admin melalui WhatsApp untuk diarahkan ke layanan atau tenaga ahli yang sesuai.",
      en: "Yes. Prospective patients can contact admin via WhatsApp to be directed to a suitable service or practitioner.",
    },
  },
  {
    question: {
      id: "Apakah jadwal di website selalu tersedia?",
      en: "Are website schedules always available?",
    },
    answer: {
      id: "Jadwal di website adalah gambaran umum. Slot kunjungan tetap perlu dikonfirmasi oleh admin karena dapat berubah.",
      en: "Schedules on the website are indicative. Visit slots still need admin confirmation as they may change.",
    },
  },
  {
    question: {
      id: "Apakah layanan bisa langsung dilakukan di hari yang sama?",
      en: "Can services be done on the same day?",
    },
    answer: {
      id: "Tergantung jenis layanan, jadwal tenaga ahli, dan ketersediaan slot. Admin akan membantu mengecek jadwal terdekat.",
      en: "It depends on service type, practitioner schedule, and slot availability. Admin will help check the nearest opening.",
    },
  },
  {
    question: {
      id: "Apakah saya harus datang langsung ke klinik?",
      en: "Do I have to visit the clinic in person?",
    },
    answer: {
      id: "Untuk beberapa layanan, kunjungan langsung diperlukan. Namun calon pasien tetap bisa bertanya terlebih dahulu melalui WhatsApp.",
      en: "Some services require an in-person visit. You can still ask questions first via WhatsApp.",
    },
  },
  {
    question: {
      id: "Apakah hasil layanan pasti sama untuk setiap orang?",
      en: "Will results be the same for everyone?",
    },
    answer: {
      id: "Tidak. Respons dan kebutuhan setiap orang dapat berbeda. Karena itu konsultasi awal tetap disarankan sebelum menentukan layanan.",
      en: "No. Each person’s response and needs can differ. An initial consultation is still recommended before choosing a service.",
    },
  },
  {
    question: {
      id: "Apakah website ini menerima kondisi darurat?",
      en: "Does this website handle emergencies?",
    },
    answer: {
      id: "Tidak. Website ini ditujukan untuk informasi dan booking layanan non-emergency. Untuk kondisi darurat, segera hubungi fasilitas kesehatan terdekat.",
      en: "No. This site is for information and non-emergency service booking. For emergencies, contact the nearest healthcare facility immediately.",
    },
  },
];

export type ClinicTestimonial = {
  scenario: Localized<string>;
  quote: Localized<string>;
  label: Localized<string>;
};

export const CLINIC_TESTIMONIALS: ClinicTestimonial[] = [
  {
    scenario: {
      id: "Calon customer beauty",
      en: "Prospective beauty client",
    },
    quote: {
      id: "Sebelum chat admin, saya bisa lihat dulu jenis facial, jadwal, dan siapa tenaga ahlinya. Jadi pertanyaan saya lebih jelas saat booking.",
      en: "Before chatting with admin, I could see facial types, schedules, and practitioners. My booking questions were clearer.",
    },
    label: {
      id: "Contoh simulasi, bukan testimoni pasien nyata",
      en: "Simulated example, not a real patient testimonial",
    },
  },
  {
    scenario: {
      id: "Calon pasien dental",
      en: "Prospective dental patient",
    },
    quote: {
      id: "Informasi scaling dan jadwal dokter gigi mudah ditemukan. Saya tinggal klik WhatsApp untuk tanya slot.",
      en: "Scaling info and dentist schedules were easy to find. I just tapped WhatsApp to ask about slots.",
    },
    label: {
      id: "Contoh simulasi, bukan testimoni pasien nyata",
      en: "Simulated example, not a real patient testimonial",
    },
  },
  {
    scenario: {
      id: "Calon klien konseling",
      en: "Prospective counseling client",
    },
    quote: {
      id: "FAQ membantu saya memahami bahwa saya bisa bertanya dulu sebelum menentukan jadwal sesi.",
      en: "The FAQ helped me understand I could ask questions before setting a session time.",
    },
    label: {
      id: "Contoh simulasi, bukan testimoni pasien nyata",
      en: "Simulated example, not a real patient testimonial",
    },
  },
  {
    scenario: {
      id: "Ibu muda",
      en: "Young mother",
    },
    quote: {
      id: "Bagian jadwal bidan dan cara booking membuat saya lebih mudah memahami langkah awal sebelum datang.",
      en: "The midwife schedule and booking steps made the first visit easier to understand.",
    },
    label: {
      id: "Contoh simulasi, bukan testimoni pasien nyata",
      en: "Simulated example, not a real patient testimonial",
    },
  },
];

export const CLINIC_WHATSAPP_TEMPLATES: Localized<string>[] = [
  {
    id: "Halo NaturaCare Clinic, saya ingin bertanya jadwal konsultasi kulit.\nNama:\nLayanan: Konsultasi Kulit & Skincare\nHari pilihan:\nKeluhan/kebutuhan singkat:",
    en: "Hello NaturaCare Clinic, I would like to ask about skin consultation availability.\nName:\nService: Skin & Skincare Consultation\nPreferred day:\nBrief concern/need:",
  },
  {
    id: "Halo NaturaCare Clinic, saya ingin tanya slot dental check-up/scaling.\nNama:\nLayanan: Dental Check-Up / Scaling\nHari pilihan:\nApakah ini kunjungan pertama?",
    en: "Hello NaturaCare Clinic, I would like to ask about dental check-up/scaling slots.\nName:\nService: Dental Check-Up / Scaling\nPreferred day:\nIs this your first visit?",
  },
  {
    id: "Halo NaturaCare Clinic, saya ingin bertanya jadwal konsultasi bidan.\nNama:\nLayanan: Konsultasi Bidan\nHari pilihan:\nKebutuhan singkat:",
    en: "Hello NaturaCare Clinic, I would like to ask about midwife consultation availability.\nName:\nService: Midwife Consultation\nPreferred day:\nBrief need:",
  },
  {
    id: "Halo NaturaCare Clinic, saya ingin bertanya jadwal konseling.\nNama:\nLayanan: Konsultasi Psikolog/Konselor\nHari pilihan:\nPreferensi sesi: Online/Offline jika tersedia",
    en: "Hello NaturaCare Clinic, I would like to ask about counseling availability.\nName:\nService: Psychologist / Counselor Consultation\nPreferred day:\nSession preference: Online/Offline if available",
  },
  {
    id: "Halo NaturaCare Clinic, saya ingin bertanya layanan yang cocok untuk kebutuhan saya.\nNama:\nKebutuhan singkat:\nHari yang memungkinkan untuk datang:",
    en: "Hello NaturaCare Clinic, I would like help choosing a suitable service.\nName:\nBrief need:\nDays you can visit:",
  },
];

export type ClinicTrustSignal = {
  title: Localized<string>;
  description: Localized<string>;
};

export const CLINIC_TRUST_SIGNALS: ClinicTrustSignal[] = [
  {
    title: {
      id: "Profil Tenaga Ahli",
      en: "Practitioner Profiles",
    },
    description: {
      id: "Kenali tenaga ahli dan area layanan sebelum melakukan booking.",
      en: "Learn who provides care and their focus areas before booking.",
    },
  },
  {
    title: { id: "Jadwal Praktik", en: "Practice Schedule" },
    description: {
      id: "Calon pasien bisa melihat hari dan jam layanan tanpa harus bertanya berulang.",
      en: "Prospective patients can see days and hours without repeated questions.",
    },
  },
  {
    title: {
      id: "FAQ yang Menenangkan",
      en: "Reassuring FAQ",
    },
    description: {
      id: "Pertanyaan umum dijawab lebih awal agar calon pasien merasa lebih siap.",
      en: "Common questions are answered early so visitors feel more prepared.",
    },
  },
  {
    title: { id: "Booking WhatsApp", en: "WhatsApp Booking" },
    description: {
      id: "CTA langsung mengarahkan calon pasien ke pesan booking yang lebih rapi.",
      en: "CTAs lead to a structured booking message on WhatsApp.",
    },
  },
  {
    title: { id: "Copy Aman", en: "Safe Copy" },
    description: {
      id: "Tidak memakai klaim hasil pasti atau janji medis berlebihan.",
      en: "No guaranteed outcomes or exaggerated medical claims.",
    },
  },
];

export type ClinicBookingStep = {
  step: number;
  title: Localized<string>;
  description: Localized<string>;
};

export const CLINIC_BOOKING_STEPS: ClinicBookingStep[] = [
  {
    step: 1,
    title: { id: "Pilih Layanan", en: "Choose a Service" },
    description: {
      id: "Lihat layanan yang paling mendekati kebutuhan Anda.",
      en: "Browse services that best match your needs.",
    },
  },
  {
    step: 2,
    title: { id: "Cek Jadwal", en: "Check Schedule" },
    description: {
      id: "Periksa jadwal praktik tenaga ahli atau layanan yang tersedia.",
      en: "Review practitioner hours or available service times.",
    },
  },
  {
    step: 3,
    title: {
      id: "Klik WhatsApp Booking",
      en: "Tap WhatsApp Booking",
    },
    description: {
      id: "Kirim pesan otomatis berisi layanan dan jadwal pilihan.",
      en: "Send a pre-filled message with your service and preferred time.",
    },
  },
  {
    step: 4,
    title: {
      id: "Admin Mengonfirmasi",
      en: "Admin Confirms",
    },
    description: {
      id: "Admin membantu cek slot, informasi persiapan, dan arahan kunjungan.",
      en: "Admin helps confirm slots, preparation notes, and visit guidance.",
    },
  },
];