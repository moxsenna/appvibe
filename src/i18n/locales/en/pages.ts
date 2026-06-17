/**
 * English page-level copy. Mirrors `id/pages.ts` shape exactly.
 * Tone: formal agency. Outcome-led, scannable.
 */

import type { PagesDict } from "../id/pages";

export const pagesEn: PagesDict = {
  home: {
    hero: {
      eyebrowDark:
        "Websites, landing pages, and dashboards for businesses ready to look the part.",
      description:
        "AppVibe Studio helps growing businesses across services, education, healthcare, real estate, and personal brands ship clean, responsive websites, landing pages, and dashboards built to grow with the business.",
      noscriptFallback: "A website that makes your business easier to trust.",
      tagline:
        "Start with a simple website. Grow it deliberately as the business asks for more.",
      labels: [
        "Professional website",
        "Promotional landing page",
        "Leads dashboard",
        "WhatsApp inquiry",
        "Lead form",
        "Ad tracking ready",
        "Built to grow",
      ],
      stats: [
        { value: "≤ 24 hrs", label: "WhatsApp response on weekdays" },
        { value: "30–45 min", label: "Free initial consultation" },
        { value: "1 service", label: "Start with what matters most" },
        { value: "Founder-led", label: "Hands-on at every project" },
      ],
    },
    servicesSection: {
      eyebrow: "Services",
      title:
        "Digital solutions you can start simple — then grow as your business does.",
      subtitle:
        "Not every business needs a large system on day one. We help you pick what makes sense now: a landing page, business website, dashboard, or integration.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions we hear often",
      subtitle: "Short answers before you start a conversation with us.",
    },
    process: {
      eyebrow: "How We Work",
      title: "Six clear steps from discovery to launch",
      subtitle: "A transparent process — you know what happens at every stage.",
    },
    featuredPortfolio: {
      eyebrow: "Portfolio",
      title:
        "Reference websites and digital systems we can build for your business",
      subtitle:
        "From company profiles and landing pages to clinic sites, property listings, and lead dashboards — each example shows how your business can look clearer, more credible, and easier to reach.",
      badges: [
        "Company profile",
        "Landing page",
        "Booking CTA",
        "Property listing",
        "Leads dashboard",
      ],
      viewAll: "View full portfolio",
    },
    problemSection: {
      eyebrow: "Why this matters",
      title:
        "A strong business can still look less credible when its digital presence is not polished.",
      intro:
        "Prospects often judge a business from the first link they open. Scattered service information, reliance on manual chat alone, or no official page can erode trust before a conversation even starts.",
      items: [
        {
          num: "01",
          title: "No official web presence",
          description:
            "Prospects cannot find one clear place to understand your services, pricing, and how to reach you.",
        },
        {
          num: "02",
          title: "Over-reliance on manual chat",
          description:
            "The same questions keep coming back because key information is not organized on clear pages.",
        },
        {
          num: "03",
          title: "Portfolio and proof are scattered",
          description:
            "Work samples, galleries, reviews, and case studies are not presented in a convincing structure.",
        },
        {
          num: "04",
          title: "Leads are hard to track",
          description:
            "Inquiries arrive from many channels, but there is no form, status, or simple dashboard to manage them.",
        },
        {
          num: "05",
          title: "Ads lack a focused landing page",
          description:
            "Paid traffic is wasted when the destination page does not drive one clear action.",
        },
      ],
    },
    solutionSection: {
      eyebrow: "The AppVibe approach",
      title:
        "We do more than design screens. We build digital flows that help your business look ready to serve.",
      intro:
        "Every website or lightweight app we ship balances three things: clear messaging, professional presentation, and actions visitors can take easily.",
      pillars: [
        {
          title: "Digital presence",
          description:
            "Company profile sites, service pages, galleries, testimonials, and CTAs that make your business look more credible.",
        },
        {
          title: "Conversion page",
          description:
            "Landing pages for webinars, campaigns, products, or services with copy and CTAs focused on generating inquiries.",
        },
        {
          title: "Business workflow",
          description:
            "Forms, WhatsApp handoff, lead dashboards, booking, payments, and light automation so operations stay organized.",
        },
        {
          title: "Scalable foundation",
          description:
            "Start with a fast static site, then grow step by step into databases, admin panels, and AI features as you need them.",
        },
      ],
    },
    meta: {
      title: "AppVibe Studio — Websites and Business Apps for Growing Teams",
      description:
        "AppVibe Studio helps growing businesses ship modern, responsive websites, landing pages, dashboards, and lightweight business apps that are ready to use.",
    },
  },

  services: {
    hero: {
      eyebrow: "Services",
      title: "Four digital solutions for every stage of business growth",
      description:
        "Every service is designed to fit where your business is right now — from your first website, to a landing page focused on conversion, to an internal dashboard that keeps operations tidy.",
    },
    overview: {
      eyebrow: "Four Core Services",
      title: "Choose the service that fits where your business is today",
      subtitle:
        "You do not need everything at once. Start with one service, then expand as you grow.",
      learnMore: "Learn more",
    },
    detail: {
      eyebrow: "Service Details",
      title: "Go deeper: what you get from each service",
      subtitle:
        "Select a service to see the full description, who it is for, key features, and deliverables.",
      idealForLabel: "Ideal for",
      featuresLabel: "Key features",
      deliverablesLabel: "What you receive",
    },
    process: {
      eyebrow: "How We Work",
      title: "Six clear steps from discovery to launch",
    },
    meta: {
      title: "Services — Websites, Landing Pages, Dashboards | AppVibe Studio",
      description:
        "Four core AppVibe services: Company Profile, Landing Page, Dashboard & Web App, and Automation. Start with the one your business needs most.",
    },
  },

  portfolio: {
    hero: {
      eyebrow: "Portfolio",
      title: "Reference websites and business apps we build",
      description:
        "Five conceptual case studies from popular niches. Each project explains the thinking behind the design and features — never generic templates, always a fit for where the business stands today.",
    },
    meta: {
      title: "Portfolio — Reference Websites and Business Apps | AppVibe Studio",
      description:
        "Five conceptual case studies across popular niches: Company Profile, Webinar Landing, Clinic, Property, and Lead Dashboard.",
    },
  },

  demoIndex: {
    hero: {
      eyebrow: "Interactive Demos",
      title: "Try it first — feel how the finished product behaves",
      description:
        "Five interactive demos from popular business niches. Click, scroll, fill the forms — everything works as if shipped. If it fits your vision, we keep the conversation going.",
    },
    meta: {
      title: "Interactive Website and App Demos | AppVibe Studio",
      description:
        "Try five interactive demos across popular niches: Company Profile, Webinar Landing, Clinic, Property, Lead Dashboard. All live, never screenshots.",
    },
    filter: {
      searchPlaceholder: "Search demos by title, niche, or tag...",
      searchAriaLabel: "Search demos",
      resultCount: "{{n}} demos found",
    },
  },

  demoDetail: {
    heroSimulationSuffix: " — Simulated Demo",
    viewCaseStudy: "View Case Study",
    openFullDemo: "Open Full Demo",
    aboutEyebrow: "About this demo",
    aboutTitle: "Interactive mock for the {{niche}} niche",
    aboutBodyAfterSummary:
      "This shell shows the branding and tone of {{brand}} — prospects can feel what the finished site is like before they decide to build it.",
    liveEyebrow: "Full demo is ready to explore",
    liveBody:
      "Every section and interaction is live — portfolio filters, detail modals, validated inquiry forms, FAQ accordions, and industry-specific data. Use the button below to open the full experience.",
    comingSoonBody:
      "Full demo content is rolling out in phases. You can still consult with AppVibe now to see what we would tailor for your business.",
    asideNowEyebrow: "Available now",
    asideNowVisual: "Visual tone, color palette, and copy voice for {{brand}}",
    asideNowCaseStudy: "AppVibe case study explaining the logic behind this demo",
    asideNowCta: "Consultation CTA with this demo as context",
    asideSoonEyebrow: "Coming next",
    asideSoonBody:
      "Full sections, inquiry forms, and realistic mock data per industry blueprint.",
    finalEyebrow: "Case study",
    finalTitle: "Understand the thinking behind the {{brand}} demo",
    finalBody:
      "The case study covers the business problem, solution, features, and value — aligned with this interactive demo.",
    openCaseStudy: "Open Case Study",
    consultWhatsapp: "Consult on WhatsApp",
    backToDemos: "Back to all demos",
  },

  industries: {
    hero: {
      eyebrow: "Industries",
      title: "Solutions tuned to your industry",
      description:
        "Every industry has its own pain points. We map the common ones in each niche and recommend the solution that actually makes sense.",
    },
    meta: {
      title: "Industries We Serve | AppVibe Studio",
      description:
        "AppVibe Studio supports small businesses, professional services, education, clinics, real estate, restaurants, travel, and personal brands with niche-tuned web solutions.",
    },
    noResults: "No industries in this category",
    problemLabel: "Common problem we see",
    solutionLabel: "Solution we recommend",
    relatedPortfolioLabel: "Related portfolio",
    seeCaseStudy: "See case study",
    discussCta: "Discuss for Your Industry",
  },

  about: {
    approach: {
      eyebrow: "Approach",
      title: "Business first, technology follows",
      subtitle:
        "We start from operational pain and positioning, then choose the website or system shape that actually fits.",
    },
    meta: {
      title: "About AppVibe Studio — Our Approach and Values",
      description:
        "Get to know AppVibe Studio: a business-first approach, transparent values, an incremental way of working, and a founder involved in every project.",
    },
  },

  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Start the conversation — we reply within one business day",
      description:
        "Pick the easiest path: fill the form below to draft a complete WhatsApp message, or chat with us directly. The first 30–45 minute consultation is on us.",
    },
    meta: {
      title: "Contact AppVibe Studio — Free 30–45 Minute Consultation",
      description:
        "Reach AppVibe Studio on WhatsApp or via the consultation form. Replies within one business day. First 30–45 minutes are free.",
    },
  },

  blog: {
    hero: {
      eyebrow: "Engineering",
      title: "Technical notes from the AppVibe team",
      description:
        "Architecture choices, sprints, and patterns we use to build this site — transparent for prospects and developers.",
    },
    meta: {
      title: "Engineering Blog | AppVibe Studio",
      description:
        "Technical posts on React, Vite, i18n, deployment, and how AppVibe Studio works.",
    },
    empty: "No posts in this language yet.",
    backToIndex: "Back to blog",
  },

  uses: {
    hero: {
      eyebrow: "/uses",
      title: "Stack, tools, and engineering choices",
      description:
        "What we build AppVibe Studio with — not to lecture, but because technical transparency is part of how we build trust. This page is kept up to date.",
    },
    meta: {
      title: "/uses — AppVibe Studio Stack and Tools",
      description:
        "The technology stack, design tools, and engineering decisions behind AppVibe Studio. Honest, opinionated, and always evolving.",
    },
    principlesEyebrow: "Engineering principles",
    principlesTitle: "The technical philosophy we hold to",
    notUsedTitle: "What we deliberately do NOT use",
    updateNote:
      "The stack keeps evolving. Sprint 11 just shipped i18n (ID/EN). Sprint 13 adds the engineering blog (MDX + Shiki at build time). Sprint 12 (Better Auth + private tenants) is deferred until we need real client login.",
    badges: {
      lastUpdated: "Last updated: Sprint 13",
      next: "Next: Engineering blog",
      openSource: "Open source contributions: planned",
    },
    keepGrowing: "Always evolving",
  },
};