# 02-ARCHITECTURE.md — AppVibe Studio Technical Architecture

## 1. Architecture Summary

AppVibe Studio MVP menggunakan pendekatan **static-first, data-driven, frontend-heavy**.

Tujuan utama arsitektur:

1. Cepat dibangun.
2. Mudah dideploy ke Cloudflare Pages.
3. Murah/nyaris gratis.
4. Mudah dikembangkan oleh coding agent/vibecoding.
5. Demo portfolio terlihat hidup tanpa backend dulu.
6. Struktur rapi agar mudah ditambah portfolio baru.

Recommended stack:

- **Frontend:** React + Vite + TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Hosting:** Cloudflare Pages
- **Data:** Local TypeScript data files
- **Forms:** WhatsApp redirect first, optional backend later
- **Backend:** Not required for MVP
- **Analytics:** GTM/Meta Pixel-ready, optional later

---

## 2. Architecture Decision

### 2.1 Static-First

MVP tidak memerlukan backend karena fokusnya adalah portfolio, demo, dan conversion CTA.

Static-first berarti:

- semua halaman dapat dibuild menjadi static assets,
- konten portfolio disimpan di `src/data`,
- demo menggunakan mock data lokal,
- form bisa redirect ke WhatsApp,
- deploy cukup ke Cloudflare Pages.

Keuntungan:

- lebih cepat selesai,
- lebih stabil,
- biaya rendah,
- tidak perlu setup database,
- mudah diperlihatkan ke calon klien,
- risiko bug backend lebih kecil.

### 2.2 Data-Driven Content

Konten seperti services, portfolio, industries, FAQ, testimonials, dan mock data demo tidak boleh hardcoded tersebar di banyak komponen.

Semua data utama harus berada di:

```txt
src/data/
```

Keuntungan:
- mudah update copy,
- mudah menambah portfolio,
- komponen tetap bersih,
- coding agent lebih mudah mengikuti struktur.

### 2.3 Demo Pages: Manual Layout + Data Mock

Demo pages dibuat manual per niche agar kualitas visual maksimal, tetapi data tetap dipisahkan.

Contoh:
- `CompanyProfileDemo.tsx` memakai `src/data/demos/companyProfile.ts`
- `LeadDashboardDemo.tsx` memakai `src/data/demos/leadDashboard.ts`

Alasan:
- setiap demo punya kebutuhan visual berbeda,
- portfolio harus terasa premium, bukan template generik,
- agent tetap punya data terstruktur.

---

## 3. Recommended Repository Structure

```txt
appvibe-studio/
  docs/
    01-PRD.md
    02-ARCHITECTURE.md
    03-DESIGN-SYSTEM.md
    04-CONTENT-STRATEGY.md
    05-PORTFOLIO-DEMO-SPEC.md
    06-IMPLEMENTATION-PLAN.md
    07-QA-CHECKLIST.md
    08-DEPLOYMENT.md

  public/
    images/
      portfolio/
      demos/
      mockups/
      icons/
      og/
    favicon.svg
    robots.txt

  src/
    app/
      App.tsx
      router.tsx
      providers.tsx

    components/
      layout/
        Navbar.tsx
        Footer.tsx
        MobileStickyCTA.tsx
        PageShell.tsx

      sections/
        HeroSection.tsx
        ProblemSection.tsx
        SolutionSection.tsx
        ServicesSection.tsx
        FeaturedPortfolioSection.tsx
        IndustriesSection.tsx
        ProcessSection.tsx
        FAQSection.tsx
        FinalCTASection.tsx

      ui/
        Button.tsx
        Card.tsx
        Badge.tsx
        Container.tsx
        SectionHeader.tsx
        MockupFrame.tsx
        StatCard.tsx
        FeatureCard.tsx
        TestimonialCard.tsx

      portfolio/
        PortfolioCard.tsx
        PortfolioFilter.tsx
        PortfolioGrid.tsx
        CaseStudyLayout.tsx
        CaseStudyHero.tsx
        FeatureGrid.tsx
        UserFlow.tsx
        ScreensPreview.tsx

      demos/
        DemoShell.tsx
        DemoNavbar.tsx
        DemoFooter.tsx
        DemoCTA.tsx
        BrowserMockup.tsx
        PhoneMockup.tsx

    data/
      services.ts
      portfolio.ts
      industries.ts
      faq.ts
      testimonials.ts
      process.ts
      navigation.ts

      demos/
        companyProfile.ts
        webinarLanding.ts
        clinic.ts
        property.ts
        leadDashboard.ts

    pages/
      HomePage.tsx
      ServicesPage.tsx
      PortfolioPage.tsx
      PortfolioDetailPage.tsx
      DemoIndexPage.tsx
      IndustriesPage.tsx
      AboutPage.tsx
      ContactPage.tsx
      NotFoundPage.tsx

      demos/
        CompanyProfileDemo.tsx
        WebinarLandingDemo.tsx
        ClinicDemo.tsx
        PropertyDemo.tsx
        LeadDashboardDemo.tsx

    lib/
      whatsapp.ts
      routes.ts
      seo.ts
      cn.ts
      analytics.ts
      format.ts

    types/
      portfolio.ts
      service.ts
      industry.ts
      demo.ts

    styles/
      globals.css

  .env.example
  .gitignore
  package.json
  README.md
  index.html
  vite.config.ts
  tailwind.config.ts
  postcss.config.js
  tsconfig.json
```

---

## 4. Routing Architecture

Use React Router.

### 4.1 Public Routes

```txt
/                              Home
/layanan                       Services
/portfolio                     Portfolio list
/portfolio/:slug               Portfolio case study
/demo                          Demo index
/demo/company-profile          Company profile demo
/demo/webinar-landing          Webinar landing page demo
/demo/klinik                   Clinic demo
/demo/properti                 Property demo
/demo/lead-dashboard           Lead dashboard demo
/industri                      Industry solutions
/tentang                       About
/kontak                        Contact
*                              Not found
```

### 4.2 Route Constants

Define all route constants in:

```txt
src/lib/routes.ts
```

Example:

```ts
export const routes = {
  home: "/",
  services: "/layanan",
  portfolio: "/portfolio",
  demo: "/demo",
  industries: "/industri",
  about: "/tentang",
  contact: "/kontak",
  portfolioDetail: (slug: string) => `/portfolio/${slug}`,
  demoDetail: (slug: string) => `/demo/${slug}`,
};
```

Do not hardcode routes in random components.

---

## 5. Data Architecture

### 5.1 Portfolio Item Type

```ts
export type PortfolioCategory =
  | "company-profile"
  | "landing-page"
  | "dashboard"
  | "clinic"
  | "property"
  | "education"
  | "umkm"
  | "custom-app";

export type PortfolioItem = {
  id: string;
  slug: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  niche: string;
  summary: string;
  businessProblem: string;
  solution: string;
  businessValue: string[];
  features: string[];
  tags: string[];
  thumbnail: string;
  demoPath: string;
  caseStudyPath: string;
  mockDataHighlights: string[];
  userFlow: string[];
  screens: {
    title: string;
    description: string;
    image?: string;
  }[];
};
```

### 5.2 Service Item Type

```ts
export type ServiceItem = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  idealFor: string[];
  features: string[];
  deliverables: string[];
  startingFrom?: string;
  ctaLabel: string;
};
```

### 5.3 Industry Item Type

```ts
export type IndustryItem = {
  id: string;
  name: string;
  problem: string;
  recommendedSolution: string;
  relatedPortfolioSlugs: string[];
  suitableServices: string[];
};
```

### 5.4 FAQ Type

```ts
export type FAQItem = {
  question: string;
  answer: string;
};
```

---

## 6. Page Architecture

### 6.1 HomePage

Uses:
- `services.ts`
- `portfolio.ts`
- `industries.ts`
- `faq.ts`
- `process.ts`
- `testimonials.ts`

Composition:

```txt
PageShell
  Navbar
  HeroSection
  ProblemSection
  SolutionSection
  ServicesSection
  FeaturedPortfolioSection
  IndustriesSection
  ProcessSection
  FAQSection
  FinalCTASection
  Footer
  MobileStickyCTA
```

### 6.2 PortfolioPage

Responsibilities:
- display all portfolio items,
- filter by category,
- search by title/niche if implemented,
- navigate to case study/demo.

State:
- selected category,
- search query optional.

Data:
- `portfolio.ts`

### 6.3 PortfolioDetailPage

Responsibilities:
- read `slug` from route,
- find matching portfolio item,
- render case study sections,
- show CTA to demo and WhatsApp.

Error:
- if slug not found, render NotFoundPage.

### 6.4 Demo Pages

Each demo has its own page.

Demo page requirements:
- use `DemoShell`,
- has “Built by AppVibe Studio” link/CTA,
- has realistic mock data,
- has WhatsApp CTA,
- has responsive layout.

---

## 7. Component Architecture

### 7.1 UI Components

UI components must be generic and reusable:

- Button
- Card
- Badge
- Container
- SectionHeader
- MockupFrame
- StatCard
- FeatureCard

Rules:
- no business-specific copy inside generic UI components,
- no direct data imports in generic UI components,
- props-driven only.

### 7.2 Section Components

Section components can import data via page props or direct import if simple.

Preferred:
- Page imports data.
- Page passes data to section.

Acceptable for MVP:
- Section imports central data file if not reused.

### 7.3 Portfolio Components

Portfolio components are specific to portfolio system.

- `PortfolioCard`: display card.
- `PortfolioGrid`: display list.
- `PortfolioFilter`: category filter.
- `CaseStudyLayout`: layout wrapper.
- `UserFlow`: step display.
- `ScreensPreview`: visual preview section.

### 7.4 Demo Components

Shared components for demo pages:
- DemoShell
- DemoNavbar
- DemoFooter
- DemoCTA
- BrowserMockup
- PhoneMockup

---

## 8. Styling Architecture

Use Tailwind CSS.

### 8.1 Design Tokens

Define colors in `tailwind.config.ts`.

Suggested tokens:
- `brand.navy`
- `brand.blue`
- `brand.violet`
- `brand.cyan`
- `brand.gray`
- `brand.surface`

### 8.2 Global Styles

Use `src/styles/globals.css` for:

- Tailwind directives,
- base body styling,
- font smoothing,
- default focus state,
- reusable CSS variables if needed.

### 8.3 Utility Helper

Use `cn.ts` for className merging.

Example:
```ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 9. WhatsApp CTA Architecture

Create:

```txt
src/lib/whatsapp.ts
```

Environment variable:

```txt
VITE_WHATSAPP_NUMBER=628xxxxxxxxxx
```

Functions:

```ts
export function buildWhatsAppUrl(message: string): string;
export function getDefaultConsultationMessage(): string;
export function getPortfolioMessage(portfolioTitle: string): string;
```

Default message:

```txt
Halo AppVibe, saya tertarik membuat website/app untuk bisnis saya. Bisa bantu konsultasi?
```

Portfolio message:

```txt
Halo AppVibe, saya tertarik membuat website seperti demo [Portfolio Title]. Bisa dibantu?
```

Rules:
- never hardcode WhatsApp number in components,
- all CTA uses helper,
- encode message properly.

---

## 10. SEO Architecture

Create:

```txt
src/lib/seo.ts
```

MVP can use `react-helmet-async` or simple document title updates.

Each page needs:
- title,
- description,
- canonical path,
- OG title,
- OG description,
- OG image.

Portfolio detail should derive metadata from portfolio data.

Example title:
```txt
Website Company Profile untuk Jasa Profesional | AppVibe Studio
```

---

## 11. Analytics-Ready Architecture

Create:

```txt
src/lib/analytics.ts
```

MVP may only log to console in development.

Suggested function:

```ts
type AnalyticsEvent =
  | "cta_whatsapp_click"
  | "portfolio_view"
  | "demo_open"
  | "contact_form_submit"
  | "service_card_click";

export function trackEvent(event: AnalyticsEvent, payload?: Record<string, unknown>) {
  if (import.meta.env.DEV) {
    console.log("[analytics]", event, payload);
  }

  // Later: push to dataLayer
}
```

Rules:
- CTA should call `trackEvent`.
- Demo open should call `trackEvent`.
- Form submit should call `trackEvent`.

---

## 12. Contact Form Architecture

MVP options:

### Option A — WhatsApp Redirect Only

After submit, build WhatsApp message from fields and open WhatsApp.

Pros:
- fastest,
- no backend,
- fits early sales.

### Option B — Google Sheet Later

Use Cloudflare Worker/GAS later.

### Option C — Supabase Later

Use Supabase leads table when serious.

For MVP, choose **Option A**.

Form behavior:
1. User fills form.
2. Client validates required fields.
3. Build WhatsApp message.
4. Open WhatsApp.
5. Show success state.

---

## 13. Environment Variables

`.env.example`:

```txt
VITE_APP_NAME=AppVibe Studio
VITE_SITE_URL=https://appvibe.web.id
VITE_WHATSAPP_NUMBER=628xxxxxxxxxx
VITE_ENABLE_ANALYTICS=false
VITE_GTM_ID=
```

Rules:
- all client env vars must start with `VITE_`,
- no private secrets in frontend,
- do not commit `.env.local`.

---

## 14. Performance Architecture

Requirements:
- optimize images,
- use lazy loading for images,
- avoid large animation libraries unless needed,
- code split route pages if app grows,
- prefer CSS transitions over heavy JS,
- avoid unnecessary API calls.

Recommended:
- use WebP/AVIF when possible,
- keep hero assets optimized,
- avoid huge screenshots,
- lazy load demo preview images.

---

## 15. Accessibility Requirements

Minimum:
- semantic HTML,
- heading hierarchy,
- button/link clarity,
- focus states,
- alt text,
- form labels,
- keyboard navigation,
- contrast readable.

Important:
- CTA buttons must be real `<a>` or `<button>`,
- cards with links must be keyboard accessible,
- mobile nav must be accessible.

---

## 16. Security Considerations

MVP frontend:
- no secrets in client,
- validate form input,
- sanitize generated WhatsApp message,
- use safe external links with `rel="noopener noreferrer"`,
- avoid injecting raw HTML.

Future backend:
- rate limit form endpoints,
- validate server-side,
- use CAPTCHA/honeypot if spam,
- store leads securely.

---

## 17. Build and Deployment

Commands:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Cloudflare Pages:

- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Vite
- Node version: 20+

---

## 18. Development Rules

1. Do not hardcode content repeatedly.
2. No lorem ipsum.
3. Every page must have CTA.
4. Every demo must look finished.
5. Components should stay small.
6. Prefer data-driven rendering.
7. Mobile-first layout.
8. Avoid unnecessary backend.
9. Keep technical jargon minimal in user-facing copy.
10. Test all routes before completion.
11. Use TypeScript types for content objects.
12. Do not introduce new dependencies unless needed.

---

## 19. Future Architecture Upgrade Path

### Stage 1 — Static MVP

- React/Vite
- mock data
- WhatsApp redirect
- Cloudflare Pages

### Stage 2 — Lead Capture

- Cloudflare Worker endpoint
- save leads to Google Sheet/Supabase
- email/WA notification optional

### Stage 3 — Admin Mini CRM

- Supabase database
- admin login
- lead dashboard
- status management

### Stage 4 — Client Portal

- auth
- project status
- invoice/payment
- file upload
- support/chat

Do not build Stage 2–4 until MVP portfolio is strong.
