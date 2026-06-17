/**
 * English common dictionary — UI chrome only.
 * Tone: formal agency. Third person plural ("we"). Outcome-led. No hype.
 * Mirrors the shape of `id/common.ts` exactly.
 */

import type { CommonDict } from "../id/common";

export const commonEn: CommonDict = {
  brand: {
    name: "AppVibe Studio",
    tagline:
      "A web studio for ambitious businesses. Business-first, transparent, built to grow with you.",
  },

  nav: {
    home: "Home",
    services: "Services",
    portfolio: "Portfolio",
    demo: "Demos",
    industries: "Industries",
    about: "About",
    blog: "Blog",
    contact: "Contact",
    uses: "/uses",
  },

  cta: {
    consult: "Start on WhatsApp",
    consultShort: "Get in touch",
    chatNow: "Chat now",
    viewPortfolio: "See the work",
    viewCaseStudy: "View case study",
    openDemo: "Open demo",
    openCaseStudy: "Open case study",
    seeAllDemos: "All demos",
    seeAllPortfolio: "All portfolio",
    backToHome: "Back to home",
    backToAllDemos: "Back to all demos",
    backToAppVibe: "Back to AppVibe Studio",
    sendViaWhatsApp: "Send via WhatsApp",
    consultAppVibe: "Talk to AppVibe",
    consultAppVibeViaWhatsApp: "Talk to AppVibe on WhatsApp",
    contactUs: "Contact us",
    discussForIndustry: "Discuss for your industry",
    consultForBusiness: "Discuss for your business",
  },

  footer: {
    heading: {
      nav: "Navigation",
      services: "Services",
      portfolio: "Portfolio",
      demoInteractive: "Interactive Demos",
    },
    description:
      "AppVibe Studio helps businesses ship websites, landing pages, dashboards, and lightweight apps that look professional, perform on every screen, and stay ready to grow.",
    copyright: "Website and portfolio reference for prospective clients.",
    serviceLinks: {
      companyProfile: "Company Profile Website",
      landingPage: "Landing Page",
      dashboard: "Dashboard & Web App",
      automation: "Automation & Integrations",
    },
    legal: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      sitemap: "Sitemap",
    },
  },

  aria: {
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    footerNav: "Footer navigation",
    legalNav: "Legal",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skipToContent: "Skip to main content",
    switchLanguage: "Switch language",
    languageIndonesian: "Indonesian",
    languageEnglish: "English",
  },

  notFound: {
    eyebrow: "404",
    title: "Page not found",
    description:
      "The link may have moved or the page is not available yet. Try one of the pages below, or head back home.",
    suggestionHeading: "Popular AppVibe pages",
    suggestionEyebrow: "You might be looking for",
    suggestions: {
      home: { label: "Home", desc: "AppVibe Studio main page" },
      services: { label: "Services", desc: "Our four core offerings" },
      portfolio: { label: "Portfolio", desc: "Five reference projects" },
      demo: { label: "Interactive Demos", desc: "Try a finished website" },
      contact: { label: "Get in touch", desc: "Start a conversation" },
    },
  },

  rotating: {
    /**
     * English restructures the lead-in: "...easier to ___" with infinitive.
     * EN lead ends with "to" — RotatingText component appends each word.
     */
    words: ["trust.", "understand.", "reach.", "share.", "scale."],
    lead: "A website that makes your business easier to",
  },

  mobileSticky: {
    label: "Start a conversation",
  },

  demo: {
    bannerEyebrow: "Simulated demo",
    bannerTitle: "This is a demo, not a live client website",
    bannerCta: "Discuss a similar project",
    bannerNote:
      "The brand content on this page is a simulation AppVibe built to show how a website like this could work for you.",
    realBackendTitle: "Live backend mode",
    realBackendBody:
      "Data is read directly from Supabase Postgres with Row Level Security. Status changes are saved to the showcase tenant — visible to every visitor.",
    fallbackTitle: "Fallback demo mode",
    fallbackBody:
      "This demo is running without Supabase credentials. Data comes from a client-side mock; changes are not persisted.",
    realtimeOn: "Realtime",
    realtimeConnecting: "Connecting…",
    realtimeAriaActive: "Realtime active",
    realtimeAriaConnecting: "Realtime connecting",
  },

  demoStatus: {
    live: "Live",
    "coming-soon": "Coming soon",
    draft: "Draft",
  },

  demoStatusDetail: {
    live: "Demo ready to open",
    "coming-soon": "Shell ready — full content soon",
    draft: "In preparation",
  },

  demoFilters: {
    all: "All",
    "company-profile": "Company Profile",
    "landing-page": "Landing Page",
    clinic: "Clinic",
    property: "Property",
    dashboard: "Dashboard",
  },

  demoCard: {
    openDemo: "Open demo",
  },

  enums: {
    leadStatus: {
      new: "New",
      contacted: "Contacted",
      follow_up: "Follow up",
      deal: "Won",
      rejected: "Disqualified",
    },
    leadSource: {
      website: "Website",
      facebook_ads: "Facebook Ads",
      whatsapp: "WhatsApp",
      referral: "Referral",
      event: "Event",
      instagram: "Instagram",
    },
    leadPriority: {
      high: "High",
      medium: "Medium",
      low: "Low",
    },
  },

  whatsapp: {
    default:
      "Hi AppVibe, I would like to explore a website/app for my business. Could we talk?",
    portfolio:
      'Hi AppVibe, I would like a website similar to the {{title}} demo. Could you help?',
    demo:
      'Hi AppVibe, I just explored the "{{title}}" demo and would like to discuss it for my business. Could we look further?',
  },
};
