import type { Localized } from "@/i18n/localized";

export type KlinikCopy = {
  hero: {
    badge: Localized<string>;
    headline: Localized<string>;
    subIntro: Localized<string>;
    trustChips: Localized<string[]>;
    demoSimLabel: Localized<string>;
    visualAppointmentLabel: Localized<string>;
    visualAppointmentTitle: Localized<string>;
    visualAppointmentSlots: Localized<string>;
    visualScheduleLabel: Localized<string>;
    visualScheduleWeek: Localized<string>;
    visualScheduleWeekend: Localized<string>;
    visualExpertsLabel: Localized<string>;
    visualExpertsCount: Localized<string>;
    visualWaCta: Localized<string>;
    waHeroIntro: Localized<string>;
  };
  trust: {
    eyebrow: Localized<string>;
    title: Localized<string>;
  };
  services: {
    eyebrow: Localized<string>;
    title: Localized<string>;
    subtitle: Localized<string>;
    featuredLabel: Localized<string>;
    featuredBadge: Localized<string>;
    allLabel: Localized<string>;
    detailLink: Localized<string>;
  };
  experts: {
    eyebrow: Localized<string>;
    title: Localized<string>;
    subtitle: Localized<string>;
    schedulePrefix: Localized<string>;
    waTemplate: Localized<string>;
  };
  schedule: {
    eyebrow: Localized<string>;
    title: Localized<string>;
    subtitle: Localized<string>;
    todayBadge: Localized<string>;
    servicesLabel: Localized<string>;
    expertsLabel: Localized<string>;
    waTemplate: Localized<string>;
  };
  booking: {
    eyebrow: Localized<string>;
    title: Localized<string>;
  };
  faq: {
    eyebrow: Localized<string>;
    title: Localized<string>;
    alertFull: Localized<string>;
  };
  testimonials: {
    eyebrow: Localized<string>;
    title: Localized<string>;
    alertBold: Localized<string>;
    alertRest: Localized<string>;
  };
  contact: {
    eyebrow: Localized<string>;
    title: Localized<string>;
    addressTitle: Localized<string>;
    whatsappTitle: Localized<string>;
    emailTitle: Localized<string>;
    hoursTitle: Localized<string>;
    chatCta: Localized<string>;
    phoneCta: Localized<string>;
    mapPlaceholder: Localized<string>;
    mapAria: Localized<string>;
    simDisclaimerTitle: Localized<string>;
  };
  disclaimer: {
    eyebrow: Localized<string>;
    title: Localized<string>;
    emergencyTitle: Localized<string>;
    emergencyBody: Localized<string>;
    consultTitle: Localized<string>;
    consultBody: Localized<string>;
    outcomesTitle: Localized<string>;
    outcomesBody: Localized<string>;
    simTitle: Localized<string>;
    simSuffix: Localized<string>;
  };
  serviceModal: {
    badge: Localized<string>;
    closeAria: Localized<string>;
    durationLabel: Localized<string>;
    suitableLabel: Localized<string>;
    noteLabel: Localized<string>;
    waTemplate: Localized<string>;
  };
};

export const klinikCopy: KlinikCopy = {
  hero: {
    badge: {
      id: "Klinik Health, Beauty & Wellness · Non-emergency",
      en: "Health, Beauty & Wellness Clinic · Non-emergency",
    },
    headline: {
      id: "Perawatan yang lebih tenang, personal, dan terarah",
      en: "Care that feels calmer, more personal, and well guided",
    },
    subIntro: {
      id: "Untuk layanan kesehatan, kecantikan, dental ringan, dan wellness — dengan pendekatan konsultatif dan jadwal yang jelas.",
      en: "For health, beauty, light dental, and wellness services — with a consultative approach and clear schedules.",
    },
    trustChips: {
      id: [
        "Non-emergency",
        "Konsultasi awal disarankan",
        "Copy aman tanpa klaim medis berlebihan",
      ],
      en: [
        "Non-emergency",
        "Initial consultation recommended",
        "Safe copy without exaggerated medical claims",
      ],
    },
    demoSimLabel: {
      id: "Demo simulasi",
      en: "Simulation demo",
    },
    visualAppointmentLabel: {
      id: "Appointment Card",
      en: "Appointment Card",
    },
    visualAppointmentTitle: {
      id: "Konsultasi Kulit & Skincare",
      en: "Skin & Skincare Consultation",
    },
    visualAppointmentSlots: {
      id: "3 slot simulasi tersedia minggu ini",
      en: "3 simulated slots available this week",
    },
    visualScheduleLabel: {
      id: "Mini Schedule",
      en: "Mini Schedule",
    },
    visualScheduleWeek: {
      id: "Senin–Jumat 09.00–19.00",
      en: "Mon–Fri 09:00–19:00",
    },
    visualScheduleWeekend: {
      id: "Sabtu 09.00–16.00 · Minggu by appointment",
      en: "Sat 09:00–16:00 · Sun by appointment",
    },
    visualExpertsLabel: {
      id: "Tenaga Ahli",
      en: "Practitioners",
    },
    visualExpertsCount: {
      id: "4 dokter & bidan",
      en: "4 physicians & midwives",
    },
    visualWaCta: {
      id: "Tanya via WhatsApp",
      en: "Ask via WhatsApp",
    },
    waHeroIntro: {
      id: "Halo {name}, saya ingin bertanya tentang layanan klinik.",
      en: "Hello {name}, I would like to ask about clinic services.",
    },
  },
  trust: {
    eyebrow: { id: "Trust Snapshot", en: "Trust Snapshot" },
    title: {
      id: "Apa yang bisa Anda verifikasi langsung dari website ini",
      en: "What you can verify directly on this website",
    },
  },
  services: {
    eyebrow: { id: "Layanan", en: "Services" },
    title: {
      id: "8 layanan yang tersedia di NaturaCare Clinic",
      en: "8 services available at NaturaCare Clinic",
    },
    subtitle: {
      id: "Klik salah satu layanan untuk melihat deskripsi lengkap, cocok untuk siapa, estimasi durasi, dan catatan konsultasi. Konsultasi awal tetap disarankan sebelum menentukan layanan.",
      en: "Click a service for full description, who it suits, estimated duration, and consultation notes. An initial consultation is still recommended before choosing.",
    },
    featuredLabel: {
      id: "Paling sering ditanyakan",
      en: "Most frequently asked about",
    },
    featuredBadge: { id: "Unggulan", en: "Featured" },
    allLabel: { id: "Semua layanan", en: "All services" },
    detailLink: { id: "Detail", en: "Details" },
  },
  experts: {
    eyebrow: { id: "Tenaga Ahli", en: "Practitioners" },
    title: {
      id: "Kenali tenaga ahli sebelum melakukan booking",
      en: "Meet practitioners before you book",
    },
    subtitle: {
      id: "4 tenaga ahli dengan latar belakang dan fokus yang berbeda — pilih yang paling sesuai dengan kebutuhan Anda, atau tanya admin untuk rekomendasi.",
      en: "Four practitioners with different backgrounds and focus areas — choose what fits your needs, or ask admin for a recommendation.",
    },
    schedulePrefix: {
      id: "Jadwal praktik:",
      en: "Practice schedule:",
    },
    waTemplate: {
      id: "Halo NaturaCare Clinic, saya ingin {cta}.\n\nNama:\nHari yang memungkinkan:\nKebutuhan: ",
      en: "Hello NaturaCare Clinic, I would like to {cta}.\n\nName:\nPossible days:\nNeed: ",
    },
  },
  schedule: {
    eyebrow: { id: "Jadwal Praktik", en: "Practice Schedule" },
    title: {
      id: "7 hari jadwal praktik yang jelas",
      en: "Seven days of clear practice schedules",
    },
    subtitle: {
      id: "Jadwal di bawah adalah gambaran umum. Slot kunjungan tetap perlu dikonfirmasi oleh admin karena dapat berubah. Hari ini di-highlight untuk referensi cepat.",
      en: "Schedules below are indicative. Visit slots still need admin confirmation as they may change. Today is highlighted for quick reference.",
    },
    todayBadge: { id: "Hari ini", en: "Today" },
    servicesLabel: { id: "Layanan", en: "Services" },
    expertsLabel: { id: "Tenaga Ahli", en: "Practitioners" },
    waTemplate: {
      id: "Halo NaturaCare Clinic, saya ingin {cta}.\n\nNama:\nLayanan yang diminati:\nJam kedatangan: ",
      en: "Hello NaturaCare Clinic, I would like to {cta}.\n\nName:\nService of interest:\nArrival time: ",
    },
  },
  booking: {
    eyebrow: { id: "Cara Booking", en: "How to Book" },
    title: {
      id: "4 langkah booking yang jelas via WhatsApp",
      en: "Four clear WhatsApp booking steps",
    },
  },
  faq: {
    eyebrow: {
      id: "Pertanyaan yang sering diajukan",
      en: "Frequently asked questions",
    },
    title: {
      id: "Hal yang biasanya ditanyakan calon pasien",
      en: "What prospective patients usually ask",
    },
    alertFull: {
      id: "Pengingat: website ini untuk layanan non-emergency. Untuk kondisi darurat, segera hubungi fasilitas kesehatan terdekat.",
      en: "Reminder: this website is for non-emergency services. For emergencies, contact the nearest healthcare facility immediately.",
    },
  },
  testimonials: {
    eyebrow: { id: "Testimoni Skenario", en: "Scenario Stories" },
    title: {
      id: "Situasi yang biasanya terbantu dengan website klinik",
      en: "Situations a clinic website typically helps with",
    },
    alertBold: {
      id: "Contoh simulasi, bukan testimoni pasien nyata.",
      en: "Simulated examples, not real patient testimonials.",
    },
    alertRest: {
      id: "Semua nama dan peran adalah personas untuk ilustrasi.",
      en: "All names and roles are illustrative personas.",
    },
  },
  contact: {
    eyebrow: { id: "Lokasi & Kontak", en: "Location & Contact" },
    title: {
      id: "Hubungi kami via WhatsApp atau datang langsung",
      en: "Reach us on WhatsApp or visit in person",
    },
    addressTitle: { id: "Alamat", en: "Address" },
    whatsappTitle: { id: "WhatsApp Admin", en: "WhatsApp Admin" },
    emailTitle: { id: "Email", en: "Email" },
    hoursTitle: { id: "Jam Admin", en: "Admin hours" },
    chatCta: { id: "Chat Admin Sekarang", en: "Chat Admin Now" },
    phoneCta: { id: "Telepon", en: "Call" },
    mapPlaceholder: { id: "Peta placeholder", en: "Map placeholder" },
    mapAria: {
      id: "Peta placeholder lokasi klinik",
      en: "Clinic location map placeholder",
    },
    simDisclaimerTitle: {
      id: "Disclaimer Data Simulasi",
      en: "Simulated Data Disclaimer",
    },
  },
  disclaimer: {
    eyebrow: {
      id: "Non-emergency · Copy aman",
      en: "Non-emergency · Safe copy",
    },
    title: {
      id: "Informasi penting sebelum melakukan booking",
      en: "Important information before booking",
    },
    emergencyTitle: {
      id: "Bukan untuk darurat",
      en: "Not for emergencies",
    },
    emergencyBody: {
      id: "Website ini untuk informasi dan booking layanan non-emergency. Untuk kondisi darurat, segera hubungi IGD fasilitas kesehatan terdekat.",
      en: "This website is for information and booking of non-emergency services. For emergencies, go to the nearest emergency department or healthcare facility immediately.",
    },
    consultTitle: {
      id: "Konsultasi disarankan",
      en: "Consultation recommended",
    },
    consultBody: {
      id: "Layanan pada website ini bersifat umum. Pemeriksaan atau konsultasi langsung tetap disarankan agar rekomendasi dapat disesuaikan dengan kondisi masing-masing.",
      en: "Services described here are general. An in-person exam or consultation is still recommended so recommendations can match your situation.",
    },
    outcomesTitle: {
      id: "Respons dapat berbeda",
      en: "Responses may differ",
    },
    outcomesBody: {
      id: "Respons dan hasil setiap orang dapat berbeda karena kondisi, konsistensi, dan faktor individual lainnya.",
      en: "Each person’s response and outcomes can differ due to condition, consistency, and other individual factors.",
    },
    simTitle: { id: "Data simulasi", en: "Simulated data" },
    simSuffix: {
      id: "Semua testimoni, nama, dan peran adalah personas untuk ilustrasi.",
      en: "All testimonials, names, and roles are illustrative personas.",
    },
  },
  serviceModal: {
    badge: { id: "Detail Layanan", en: "Service Details" },
    closeAria: {
      id: "Tutup detail layanan",
      en: "Close service details",
    },
    durationLabel: { id: "Estimasi durasi", en: "Estimated duration" },
    suitableLabel: { id: "Cocok untuk", en: "Suitable for" },
    noteLabel: { id: "Catatan konsultasi", en: "Consultation note" },
    waTemplate: {
      id: "Halo NaturaCare Clinic, saya ingin bertanya tentang layanan {service}.\n\nNama:\nHari yang memungkinkan:\nKebutuhan singkat: ",
      en: "Hello NaturaCare Clinic, I would like to ask about {service}.\n\nName:\nPossible days:\nBrief need: ",
    },
  },
};