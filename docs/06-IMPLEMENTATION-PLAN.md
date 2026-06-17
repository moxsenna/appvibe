# 06-IMPLEMENTATION-PLAN.md — AppVibe Studio Implementation Plan

## 1. Goal

Dokumen ini membagi pekerjaan pembuatan website AppVibe Studio menjadi sprint/task yang jelas agar mudah dikerjakan dengan vibecoding/coding agent.

Prinsip implementasi:

1. Bangun fondasi dulu.
2. Jangan overengineering.
3. Fokus homepage dan portfolio yang menjual.
4. Demo harus terlihat selesai.
5. Gunakan mock data realistis.
6. Jangan memakai lorem ipsum.
7. Setiap sprint harus punya output yang bisa dicek.

---

## 2. Suggested Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- React Router
- Lucide React
- Cloudflare Pages

Optional:
- clsx
- tailwind-merge
- react-helmet-async
- framer-motion only if needed

---

## 3. Sprint Overview

```txt
Sprint 0 — Repository Setup
Sprint 1 — Design System and Layout Foundation
Sprint 2 — Homepage
Sprint 3 — Portfolio System
Sprint 4 — Case Study Pages
Sprint 5 — Demo Pages Batch 1
Sprint 6 — Demo Pages Batch 2
Sprint 7 — Contact, WhatsApp, SEO, Analytics-ready
Sprint 8 — QA, Polish, Deploy
```

---

# Sprint 0 — Repository Setup

## Objective

Membuat repo siap dikembangkan.

## Tasks

1. Init Vite React TypeScript project.
2. Install Tailwind CSS.
3. Install React Router.
4. Install Lucide React.
5. Setup folder structure sesuai `02-ARCHITECTURE.md`.
6. Add docs folder.
7. Add `.env.example`.
8. Add basic README.
9. Setup npm scripts:
   - dev
   - build
   - preview
   - typecheck
   - lint optional

## Expected Files

```txt
src/app/App.tsx
src/app/router.tsx
src/styles/globals.css
src/lib/routes.ts
src/lib/cn.ts
.env.example
README.md
```

## Acceptance Criteria

- `npm install` works.
- `npm run dev` works.
- `npm run build` works.
- Tailwind classes work.
- Routes can be rendered.
- Docs exist in repo.

---

# Sprint 1 — Design System and Layout Foundation

## Objective

Membuat fondasi UI agar semua halaman konsisten.

## Tasks

1. Create `Container`.
2. Create `Button`.
3. Create `Card`.
4. Create `Badge`.
5. Create `SectionHeader`.
6. Create `MockupFrame`.
7. Create `Navbar`.
8. Create `Footer`.
9. Create `MobileStickyCTA`.
10. Define Tailwind color tokens.
11. Setup global typography and body style.

## Expected Components

```txt
src/components/ui/Button.tsx
src/components/ui/Card.tsx
src/components/ui/Badge.tsx
src/components/ui/Container.tsx
src/components/ui/SectionHeader.tsx
src/components/ui/MockupFrame.tsx
src/components/layout/Navbar.tsx
src/components/layout/Footer.tsx
src/components/layout/MobileStickyCTA.tsx
```

## Acceptance Criteria

- Navbar responsive.
- Footer complete.
- Buttons have primary/secondary/ghost variants.
- Cards look consistent.
- Mobile sticky CTA visible on mobile.
- No visual inconsistency in basic layout.

---

# Sprint 2 — Homepage

## Objective

Membuat homepage yang visual kuat dan copy menjual.

## Tasks

1. Create data files:
   - services.ts
   - portfolio.ts
   - industries.ts
   - faq.ts
   - testimonials.ts
   - process.ts
2. Create homepage sections:
   - HeroSection
   - ProblemSection
   - SolutionSection
   - ServicesSection
   - FeaturedPortfolioSection
   - IndustriesSection
   - ProcessSection
   - FAQSection
   - FinalCTASection
3. Compose `HomePage`.
4. Add WhatsApp CTA placeholders.
5. Ensure responsive layout.

## Expected Files

```txt
src/pages/HomePage.tsx
src/components/sections/HeroSection.tsx
src/components/sections/ProblemSection.tsx
src/components/sections/SolutionSection.tsx
src/components/sections/ServicesSection.tsx
src/components/sections/FeaturedPortfolioSection.tsx
src/components/sections/IndustriesSection.tsx
src/components/sections/ProcessSection.tsx
src/components/sections/FAQSection.tsx
src/components/sections/FinalCTASection.tsx
```

## Acceptance Criteria

- Homepage clearly communicates AppVibe value.
- Hero CTA visible above fold.
- All sections render.
- Featured portfolio shows 5 cards.
- FAQ visible.
- Mobile layout clean.
- No lorem ipsum.

---

# Sprint 3 — Portfolio System

## Objective

Membuat halaman portfolio list dengan filter kategori.

## Tasks

1. Define portfolio types.
2. Complete `src/data/portfolio.ts`.
3. Create PortfolioCard.
4. Create PortfolioFilter.
5. Create PortfolioGrid.
6. Create `PortfolioPage`.
7. Add category filter.
8. Add CTA links to case study and demo.
9. Add empty state if no filter result.

## Expected Files

```txt
src/types/portfolio.ts
src/data/portfolio.ts
src/components/portfolio/PortfolioCard.tsx
src/components/portfolio/PortfolioFilter.tsx
src/components/portfolio/PortfolioGrid.tsx
src/pages/PortfolioPage.tsx
```

## Acceptance Criteria

- `/portfolio` shows all 5 portfolio cards.
- Filter works.
- Cards include category, title, summary, tags, CTA.
- Links point to correct routes.
- Responsive grid works.

---

# Sprint 4 — Case Study Pages

## Objective

Membuat halaman detail/case study untuk setiap portfolio.

## Tasks

1. Create `PortfolioDetailPage`.
2. Read `slug` from route.
3. Find portfolio item by slug.
4. Create case study components:
   - CaseStudyHero
   - FeatureGrid
   - UserFlow
   - ScreensPreview
   - BusinessValue
   - CaseStudyCTA
5. Add not found handling.
6. Ensure all 5 case study pages render.

## Expected Files

```txt
src/pages/PortfolioDetailPage.tsx
src/components/portfolio/CaseStudyLayout.tsx
src/components/portfolio/CaseStudyHero.tsx
src/components/portfolio/FeatureGrid.tsx
src/components/portfolio/UserFlow.tsx
src/components/portfolio/ScreensPreview.tsx
```

## Acceptance Criteria

- `/portfolio/company-profile` works.
- `/portfolio/webinar-landing` works.
- `/portfolio/klinik` works.
- `/portfolio/properti` works.
- `/portfolio/lead-dashboard` works.
- Each page explains problem, solution, features, flow, value, CTA.
- Non-existent slug shows not found page.
- No lorem ipsum.

---

# Sprint 5 — Demo Pages Batch 1

## Objective

Membuat 2 demo pertama dengan kualitas tinggi.

## Demos

1. Company Profile Demo
2. Webinar Landing Page Demo

## Tasks

### Company Profile Demo

1. Create `companyProfile.ts` mock data.
2. Create `CompanyProfileDemo.tsx`.
3. Add sections:
   - hero
   - services
   - portfolio projects
   - process
   - testimonials
   - FAQ
   - inquiry CTA

### Webinar Demo

1. Create `webinarLanding.ts` mock data.
2. Create `WebinarLandingDemo.tsx`.
3. Add sections:
   - hero
   - pain points
   - benefits
   - agenda
   - speaker
   - bonus
   - testimonials
   - registration form
   - FAQ
   - sticky CTA

## Expected Files

```txt
src/data/demos/companyProfile.ts
src/data/demos/webinarLanding.ts
src/pages/demos/CompanyProfileDemo.tsx
src/pages/demos/WebinarLandingDemo.tsx
```

## Acceptance Criteria

- Both demo pages look like finished websites.
- Both are responsive.
- Both have realistic mock data.
- Both have CTA to AppVibe.
- No lorem ipsum.
- No broken links.

---

# Sprint 6 — Demo Pages Batch 2

## Objective

Membuat 3 demo lanjutan.

## Demos

1. Clinic Demo
2. Property Demo
3. Lead Dashboard Demo

## Tasks

### Clinic Demo

1. Create `clinic.ts`.
2. Create `ClinicDemo.tsx`.
3. Add services, staff profiles, schedule, booking CTA, FAQ.

### Property Demo

1. Create `property.ts`.
2. Create `PropertyDemo.tsx`.
3. Add listing cards, filters, project preview, gallery, inquiry form.

### Lead Dashboard Demo

1. Create `leadDashboard.ts`.
2. Create `LeadDashboardDemo.tsx`.
3. Add mock login/overview/list/pipeline/report.
4. Add local filter/search interaction.
5. Add local status update if feasible.

## Expected Files

```txt
src/data/demos/clinic.ts
src/data/demos/property.ts
src/data/demos/leadDashboard.ts
src/pages/demos/ClinicDemo.tsx
src/pages/demos/PropertyDemo.tsx
src/pages/demos/LeadDashboardDemo.tsx
```

## Acceptance Criteria

- 3 demo pages render correctly.
- Clinic copy avoids risky claims.
- Property has listing data.
- Dashboard has at least 50 mock leads.
- Dashboard filter/search works.
- Mobile layout acceptable.
- No lorem ipsum.

---

# Sprint 7 — Contact, WhatsApp, SEO, Analytics-ready

## Objective

Menyelesaikan conversion layer dan dasar SEO.

## Tasks

1. Create `src/lib/whatsapp.ts`.
2. Add env var support for WhatsApp number.
3. Wire all WhatsApp CTA.
4. Create `ContactPage`.
5. Contact form builds WhatsApp message.
6. Create `src/lib/seo.ts`.
7. Add page titles/descriptions.
8. Create `src/lib/analytics.ts`.
9. Add event calls:
   - cta_whatsapp_click
   - portfolio_view
   - demo_open
   - contact_form_submit
   - service_card_click
10. Add OG image placeholder.

## Expected Files

```txt
src/lib/whatsapp.ts
src/lib/seo.ts
src/lib/analytics.ts
src/pages/ContactPage.tsx
```

## Acceptance Criteria

- WhatsApp links encode message properly.
- No hardcoded WhatsApp number in random components.
- Contact form redirects to WhatsApp.
- Page titles are set.
- Analytics helper exists.
- CTA events call trackEvent.
- All pages have obvious CTA.

---

# Sprint 8 — QA, Polish, Deploy

## Objective

Final QA and deployment preparation.

## Tasks

1. Run typecheck/build.
2. Check all routes.
3. Check responsive layout.
4. Check CTA links.
5. Check no lorem ipsum.
6. Check images/alt text.
7. Optimize obvious visual issues.
8. Add README usage.
9. Prepare Cloudflare Pages deployment.
10. Smoke test production/preview URL.

## Acceptance Criteria

- `npm run build` passes.
- All routes open.
- No console runtime error.
- No lorem ipsum.
- No broken navigation.
- CTA WhatsApp works.
- Mobile layout acceptable.
- Cloudflare deploy works.

---

## 4. Development Prompt Template for Agent

Use this prompt when assigning sprint:

```txt
You are working on AppVibe Studio, a static-first React + Vite + Tailwind website for a web/app service agency.

Read these docs before coding:
- docs/01-PRD.md
- docs/02-ARCHITECTURE.md
- docs/03-DESIGN-SYSTEM.md
- docs/04-CONTENT-STRATEGY.md
- docs/05-PORTFOLIO-DEMO-SPEC.md
- docs/06-IMPLEMENTATION-PLAN.md

Execute Sprint [NUMBER]: [NAME].

Important rules:
- No lorem ipsum.
- Use realistic mock data.
- Keep user-facing copy business-focused, not technical.
- Build mobile-first.
- Keep content data-driven.
- Do not add backend unless explicitly requested.
- Run build/typecheck after changes.
- Summarize changed files and test results.
```

---

## 5. Definition of Done

A task is done only if:

1. It follows docs.
2. It builds successfully.
3. It is responsive.
4. It has no placeholder lorem ipsum.
5. CTA works or is clearly mocked.
6. Mock data is realistic.
7. Copy is business-focused.
8. No obvious broken routes.
9. Changed files are summarized.
10. Known limitations are documented.

---

## 6. Risk Management

### Risk 1 — Agent makes generic template

Mitigation:
- Always reference PRD, design system, content strategy, and demo spec.
- Reject lorem ipsum.
- Require mock data.

### Risk 2 — Too many pages half-finished

Mitigation:
- Build sprint by sprint.
- Finish 1–2 demos first before adding more.

### Risk 3 — Technical overengineering

Mitigation:
- No backend in MVP.
- Static-first.
- Mock data first.

### Risk 4 — Visual quality weak

Mitigation:
- Use design system.
- Use mockup frames.
- Keep spacing clean.
- Avoid crowded layout.

### Risk 5 — Copy too technical

Mitigation:
- Use content strategy.
- Focus on business outcomes.

---

## 7. Recommended MVP Timeline

If working manually/with agent:

```txt
Day 1: Setup + design system
Day 2: Homepage
Day 3: Portfolio system + case study template
Day 4: Company profile + webinar demo
Day 5: Clinic + property demo
Day 6: Lead dashboard demo
Day 7: Contact, SEO, QA, deploy
```

If quality is more important than speed, stretch to 2 weeks.
