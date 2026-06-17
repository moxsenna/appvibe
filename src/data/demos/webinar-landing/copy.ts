import type { Localized } from "@/i18n/localized";

export type WebinarLandingCopy = {
  hero: {
    quotaFootnote: Localized<string>;
    whatsappInquiry: Localized<string>;
  };
  problems: {
    eyebrow: Localized<string>;
    title: Localized<string>;
    subtitle: Localized<string>;
    doubtLabel: Localized<string>;
  };
  whoIsThisFor: {
    eyebrow: Localized<string>;
    title: Localized<string>;
    personaLabel: Localized<string>;
  };
  benefits: {
    eyebrow: Localized<string>;
    title: Localized<string>;
    subtitle: Localized<string>;
    benefitLabel: Localized<string>;
    bringHomeLabel: Localized<string>;
  };
  testimonials: {
    eyebrow: Localized<string>;
    title: Localized<string>;
    disclaimerBold: Localized<string>;
    disclaimerBody: Localized<string>;
    outcomeLabel: Localized<string>;
  };
  speakers: {
    eyebrow: Localized<string>;
    title: Localized<string>;
    subtitle: Localized<string>;
  };
  bonuses: {
    eyebrow: Localized<string>;
    title: Localized<string>;
    subtitle: Localized<string>;
    bonusLabel: Localized<string>;
  };
  agenda: {
    eyebrow: Localized<string>;
    title: Localized<string>;
    subtitle: Localized<string>;
  };
  registration: {
    eyebrow: Localized<string>;
    title: Localized<string>;
    subtitle: Localized<string>;
    bulletFreeTitle: Localized<string>;
    bulletFreeBody: Localized<string>;
    bulletDataTitle: Localized<string>;
    bulletDataBody: Localized<string>;
    bulletRecordingTitle: Localized<string>;
    bulletRecordingBody: Localized<string>;
    privacyNote: Localized<string>;
    submitCta: Localized<string>;
    successTitle: Localized<string>;
    successBody: Localized<string>;
    summaryEyebrow: Localized<string>;
    confirmWhatsapp: Localized<string>;
    registerAnother: Localized<string>;
    requiredSuffix: Localized<string>;
    errors: {
      required: Localized<string>;
      phoneInvalid: Localized<string>;
      emailInvalid: Localized<string>;
    };
    whatsappPlaceholders: {
      name: Localized<string>;
      phone: Localized<string>;
      status: Localized<string>;
      childOptional: Localized<string>;
    };
  };
  followUp: {
    eyebrow: Localized<string>;
    title: Localized<string>;
    subtitle: Localized<string>;
  };
  faq: {
    eyebrow: Localized<string>;
    title: Localized<string>;
    subtitle: Localized<string>;
  };
  countdown: {
    label: Localized<string>;
    pastMessage: Localized<string>;
    units: {
      days: Localized<string>;
      hours: Localized<string>;
      minutes: Localized<string>;
      seconds: Localized<string>;
    };
  };
};

export const webinarLandingCopy: WebinarLandingCopy = {
  hero: {
    quotaFootnote: {
      id: "Kuota {remaining} slot simulasi tersisa · Pendaftaran ditutup saat kuota terpenuhi",
      en: "{remaining} simulated seats left · Registration closes when quota is full",
    },
    whatsappInquiry: {
      id: "Halo SkillPath Studio, saya ingin bertanya tentang webinar orientasi skill digital.",
      en: "Hello SkillPath Studio, I would like to ask about the digital skills orientation webinar.",
    },
  },
  problems: {
    eyebrow: { id: "Apakah ini Anda?", en: "Sound familiar?" },
    title: {
      id: "Lima keraguan yang sering dirasakan orang tua dan siswa",
      en: "Five doubts parents and students often feel",
    },
    subtitle: {
      id: "Sebelum memutuskan ikut webinar, biasanya ada satu atau lebih keraguan berikut. Anda tidak sendirian — webinar ini memang dirancang untuk menjawab semuanya.",
      en: "Before signing up, one or more of these doubts usually shows up. You are not alone — this webinar is designed to address each of them.",
    },
    doubtLabel: { id: "Keraguan", en: "Doubt" },
  },
  whoIsThisFor: {
    eyebrow: { id: "Untuk siapa", en: "Who this is for" },
    title: {
      id: "Webinar ini untuk Anda jika salah satu dari ini berlaku",
      en: "This webinar is for you if any of these apply",
    },
    personaLabel: { id: "Persona", en: "Persona" },
  },
  benefits: {
    eyebrow: { id: "Yang akan Anda bawa pulang", en: "What you will take away" },
    title: {
      id: "Enam nilai konkret dari 2 jam webinar ini",
      en: "Six concrete outcomes from this 2-hour webinar",
    },
    subtitle: {
      id: "Tidak ada teaser kosong — semua benefit di bawah adalah output nyata yang akan Anda dapatkan dari webinar.",
      en: "No empty teasers — every benefit below is a tangible output from the session.",
    },
    benefitLabel: { id: "Benefit", en: "Benefit" },
    bringHomeLabel: { id: "Hasil untuk Anda", en: "Outcome for you" },
  },
  testimonials: {
    eyebrow: { id: "Testimoni Skenario", en: "Scenario testimonials" },
    title: {
      id: "Apa yang biasanya terbantu setelah ikut webinar",
      en: "What participants typically gain after the webinar",
    },
    disclaimerBold: { id: "Contoh situasi", en: "Illustrative scenario" },
    disclaimerBody: {
      id: "— bukan peserta nyata. Nama dan peran adalah personas untuk ilustrasi.",
      en: "— not real attendees. Names and roles are personas for illustration.",
    },
    outcomeLabel: { id: "Hasil", en: "Outcome" },
  },
  speakers: {
    eyebrow: { id: "Pembicara", en: "Speakers" },
    title: {
      id: "Dua pembicara dengan perspektif yang berbeda",
      en: "Two speakers, two complementary perspectives",
    },
    subtitle: {
      id: "Kombinasi praktisi industri dan konselor sekolah agar diskusi terasa lengkap — dari sisi skill dan dari sisi komunikasi keluarga.",
      en: "An industry practitioner and a former school counselor — covering skills and healthy family conversations.",
    },
  },
  bonuses: {
    eyebrow: { id: "Bonus untuk peserta", en: "Bonuses for attendees" },
    title: {
      id: "4 bonus yang langsung Anda dapat setelah daftar",
      en: "Four bonuses you receive after registering",
    },
    subtitle: {
      id: "Bukan gimmick — semua bonus adalah resource nyata yang bisa langsung dipakai setelah webinar.",
      en: "Real resources you can use right after the webinar — not gimmicks.",
    },
    bonusLabel: { id: "Bonus", en: "Bonus" },
  },
  agenda: {
    eyebrow: { id: "Agenda Webinar", en: "Webinar agenda" },
    title: {
      id: "2 jam yang terstruktur, bukan webinar ngalor-ngidul",
      en: "Two structured hours — not an unfocused talk",
    },
    subtitle: {
      id: "5 sesi materi + 30 menit Q&A terbuka. Tiap sesi punya target spesifik agar Anda tahu apa yang akan didapat.",
      en: "Five content sessions plus 30 minutes of open Q&A. Each block has a clear takeaway.",
    },
  },
  registration: {
    eyebrow: { id: "Daftar Webinar", en: "Register" },
    title: { id: "Daftar gratis — slot cepat terisi", en: "Register free — seats fill quickly" },
    subtitle: {
      id: "Isi 6 field di samping. Setelah submit, Anda akan diarahkan ke WhatsApp untuk konfirmasi. Tidak ada spam, tidak ada push notif yang mengganggu.",
      en: "Complete the six fields. After submit, you will continue on WhatsApp to confirm. No spam or intrusive push notifications.",
    },
    bulletFreeTitle: {
      id: "100% gratis, tanpa biaya tersembunyi",
      en: "100% free, no hidden fees",
    },
    bulletFreeBody: {
      id: "Cukup daftar dan hadiri webinar pada waktunya.",
      en: "Register and join at the scheduled time.",
    },
    bulletDataTitle: { id: "Data hanya untuk acara ini", en: "Data used only for this event" },
    bulletDataBody: {
      id: "Nomor WhatsApp Anda hanya digunakan untuk konfirmasi, reminder, dan pengiriman rekaman.",
      en: "Your WhatsApp number is used only for confirmation, reminders, and the recording link.",
    },
    bulletRecordingTitle: {
      id: "Akses rekaman jika berhalangan hadir",
      en: "Recording if you cannot attend live",
    },
    bulletRecordingBody: {
      id: "Semua peserta (hadir atau tidak) mendapat link rekaman + bonus PDF.",
      en: "All registrants receive the recording link and PDF bonuses.",
    },
    privacyNote: {
      id: "Data hanya untuk konfirmasi & reminder webinar.",
      en: "Data is used only for webinar confirmation and reminders.",
    },
    submitCta: { id: "Daftar Sekarang", en: "Register now" },
    successTitle: {
      id: "Pendaftaran Anda sudah kami terima",
      en: "We have received your registration",
    },
    successBody: {
      id: "Untuk konfirmasi slot, langsung lanjutkan ke WhatsApp — tim akan balas dalam 1–2 jam.",
      en: "To confirm your seat, continue on WhatsApp — our team typically replies within 1–2 hours.",
    },
    summaryEyebrow: { id: "Ringkasan pendaftaran", en: "Registration summary" },
    confirmWhatsapp: { id: "Konfirmasi via WhatsApp", en: "Confirm via WhatsApp" },
    registerAnother: { id: "Daftar orang lain", en: "Register someone else" },
    requiredSuffix: { id: "wajib diisi", en: "is required" },
    errors: {
      required: { id: "wajib diisi", en: "is required" },
      phoneInvalid: {
        id: "Format nomor WhatsApp tidak valid",
        en: "WhatsApp number format is not valid",
      },
      emailInvalid: { id: "Format email tidak valid", en: "Email format is not valid" },
    },
    whatsappPlaceholders: {
      name: { id: "(nama)", en: "(name)" },
      phone: { id: "(nomor)", en: "(number)" },
      status: { id: "-", en: "-" },
      childOptional: { id: "", en: "" },
    },
  },
  followUp: {
    eyebrow: { id: "Apa yang terjadi setelah daftar", en: "What happens after you register" },
    title: {
      id: "Dari submit form sampai hari H — semua sudah kami susun",
      en: "From form submit to event day — we have mapped every step",
    },
    subtitle: {
      id: "Anda tidak perlu mengingat jadwal sendiri. Tim SkillPath Studio akan menghubungi Anda di setiap tahap penting.",
      en: "You do not need to track dates yourself. SkillPath Studio will reach out at each milestone.",
    },
  },
  faq: {
    eyebrow: { id: "Pertanyaan yang sering diajukan", en: "Frequently asked questions" },
    title: {
      id: "Hal yang biasanya ditanyakan calon peserta",
      en: "What prospective attendees usually ask",
    },
    subtitle: {
      id: "Tidak menemukan jawabannya? Langsung tanya via WhatsApp — tim SkillPath Studio biasanya merespons dalam 1×24 jam.",
      en: "Cannot find your answer? Message us on WhatsApp — SkillPath Studio typically responds within one business day.",
    },
  },
  countdown: {
    label: { id: "Hitung mundur menuju acara", en: "Countdown to the event" },
    pastMessage: {
      id: "Acara sudah berlangsung — rekaman akan dikirim ke peserta terdaftar.",
      en: "The event has started — the recording will be sent to registered attendees.",
    },
    units: {
      days: { id: "hari", en: "days" },
      hours: { id: "jam", en: "hrs" },
      minutes: { id: "menit", en: "min" },
      seconds: { id: "detik", en: "sec" },
    },
  },
};