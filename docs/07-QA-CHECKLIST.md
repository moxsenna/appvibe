# 07-QA-CHECKLIST.md — AppVibe Studio QA Checklist

## 1. QA Purpose

Dokumen ini digunakan sebelum setiap sprint dianggap selesai dan sebelum website dideploy.

Goal QA:

1. Memastikan website terlihat profesional.
2. Memastikan semua route dan CTA bekerja.
3. Memastikan demo tidak setengah jadi.
4. Memastikan tidak ada lorem ipsum.
5. Memastikan mobile responsive.
6. Memastikan copy sesuai positioning AppVibe.

---

## 2. Global Build Checklist

Run before final delivery:

```bash
npm install
npm run build
npm run preview
```

Checklist:

- [ ] `npm install` berhasil.
- [ ] `npm run build` berhasil.
- [ ] `npm run preview` berjalan.
- [ ] Tidak ada TypeScript error.
- [ ] Tidak ada runtime error di console.
- [ ] Tidak ada dependency tidak perlu.
- [ ] Tidak ada file temporary/debug yang ikut commit.

---

## 3. Route Checklist

Check all routes:

```txt
/
/layanan
/portfolio
/portfolio/company-profile
/portfolio/webinar-landing
/portfolio/klinik
/portfolio/properti
/portfolio/lead-dashboard
/demo
/demo/company-profile
/demo/webinar-landing
/demo/klinik
/demo/properti
/demo/lead-dashboard
/industri
/tentang
/kontak
```

For each route:

- [ ] Page opens.
- [ ] No blank screen.
- [ ] No console error.
- [ ] Navbar visible.
- [ ] Footer visible where appropriate.
- [ ] CTA visible.
- [ ] Mobile layout works.
- [ ] Page title/meta exists if implemented.

---

## 4. Navigation Checklist

Desktop:

- [ ] Logo links to homepage.
- [ ] Home link works.
- [ ] Layanan link works.
- [ ] Portfolio link works.
- [ ] Demo link works.
- [ ] Industri link works.
- [ ] Tentang link works.
- [ ] CTA Konsultasi works.
- [ ] Active/current link style not confusing.

Mobile:

- [ ] Hamburger opens menu.
- [ ] Menu links work.
- [ ] Menu closes after click.
- [ ] CTA visible.
- [ ] No horizontal overflow.
- [ ] Touch targets comfortable.

---

## 5. Homepage QA

Hero:

- [ ] Headline clear within 5 seconds.
- [ ] Subheadline explains target and offer.
- [ ] Primary CTA visible.
- [ ] Secondary CTA visible.
- [ ] Visual mockup looks premium.
- [ ] Hero not too crowded on mobile.

Problem section:

- [ ] Pain points relevant to business owners.
- [ ] Copy is not too technical.
- [ ] Section creates urgency without exaggeration.

Solution section:

- [ ] Explains AppVibe solution clearly.
- [ ] Benefits are business-oriented.

Services section:

- [ ] Shows at least 4 services.
- [ ] Each service has clear ideal use case.
- [ ] CTA/service links work if present.

Featured portfolio:

- [ ] Shows 5 portfolio cards.
- [ ] Each card has title, category, summary, tags.
- [ ] Detail/demo links work.

Industries:

- [ ] Industries are relevant.
- [ ] Each card explains problem/solution.

Process:

- [ ] Steps are clear.
- [ ] Non-technical user can understand.

FAQ:

- [ ] At least 8 FAQ.
- [ ] Answers are helpful.
- [ ] No overpromise.

Final CTA:

- [ ] Clear closing CTA.
- [ ] WhatsApp link works.

---

## 6. Portfolio Page QA

- [ ] All 5 portfolio items appear.
- [ ] Filter categories appear.
- [ ] Filtering works.
- [ ] Empty state works if applicable.
- [ ] Cards are visually consistent.
- [ ] Card thumbnails look polished.
- [ ] CTA “Lihat Studi Kasus” works.
- [ ] CTA “Buka Demo” works.
- [ ] Mobile grid stacks cleanly.
- [ ] No lorem ipsum.

---

## 7. Case Study QA

For each case study:

```txt
/portfolio/company-profile
/portfolio/webinar-landing
/portfolio/klinik
/portfolio/properti
/portfolio/lead-dashboard
```

Checklist:

- [ ] Hero includes title and summary.
- [ ] Business problem is explained.
- [ ] Solution is explained.
- [ ] Features are listed.
- [ ] User flow exists.
- [ ] Business value exists.
- [ ] Demo CTA works.
- [ ] WhatsApp CTA works.
- [ ] Screens/visual preview exists.
- [ ] Copy is understandable by non-technical user.
- [ ] No lorem ipsum.
- [ ] Mobile layout works.

---

## 8. Demo QA

For each demo:

```txt
/demo/company-profile
/demo/webinar-landing
/demo/klinik
/demo/properti
/demo/lead-dashboard
```

Checklist:

- [ ] Demo looks finished.
- [ ] Business name is realistic.
- [ ] Hero copy is relevant.
- [ ] Mock data appears.
- [ ] Testimonial exists.
- [ ] FAQ exists.
- [ ] CTA exists.
- [ ] AppVibe CTA exists.
- [ ] Mobile layout works.
- [ ] Desktop layout works.
- [ ] No lorem ipsum.
- [ ] No broken internal link.
- [ ] No broken image.

---

## 9. Demo-Specific QA

### 9.1 Company Profile Demo

- [ ] Has service list.
- [ ] Has project portfolio.
- [ ] Has testimonials.
- [ ] Has inquiry CTA.
- [ ] Looks appropriate for jasa profesional.

### 9.2 Webinar Landing Page Demo

- [ ] Has event name.
- [ ] Has agenda.
- [ ] Has speaker profile.
- [ ] Has benefit section.
- [ ] Has registration form.
- [ ] Has sticky CTA on mobile.
- [ ] Looks suitable for campaign/ads.

### 9.3 Clinic Demo

- [ ] Has services/treatments.
- [ ] Has staff profile.
- [ ] Has schedule.
- [ ] Has booking CTA.
- [ ] Does not make risky health claims.
- [ ] Uses safe wording: consultation, personalized, results may vary if needed.

### 9.4 Property Demo

- [ ] Has listing cards.
- [ ] Has property/project details.
- [ ] Has price/location/specification.
- [ ] Has inquiry CTA.
- [ ] Has gallery/visual section.
- [ ] Filter works if implemented.

### 9.5 Lead Dashboard Demo

- [ ] Has dashboard stats.
- [ ] Has at least 50 mock leads.
- [ ] Has status badges.
- [ ] Search works.
- [ ] Filter works.
- [ ] Lead detail opens.
- [ ] Status update mock works if implemented.
- [ ] Mobile version is usable.

---

## 10. Content QA

- [ ] No lorem ipsum.
- [ ] No placeholder text like “TODO”, “coming soon”, “dummy text”.
- [ ] Copy focuses on business value.
- [ ] Technical terms are minimal.
- [ ] CTA labels are clear.
- [ ] FAQ answers are useful.
- [ ] Portfolio summaries are specific.
- [ ] Demo data sounds realistic.
- [ ] No overpromising revenue/SEO/closing.
- [ ] Indonesian language is natural and professional.

Search terms to check:

```txt
lorem
ipsum
TODO
coming soon
placeholder
dummy text
test test
asdasd
```

---

## 11. WhatsApp CTA QA

- [ ] WhatsApp number comes from env/helper.
- [ ] Default CTA message works.
- [ ] Portfolio-specific message includes portfolio name.
- [ ] Contact form generated message includes form data.
- [ ] URL is encoded properly.
- [ ] Opens in new tab/window where appropriate.
- [ ] No broken `wa.me` link.
- [ ] CTA click can call analytics helper if implemented.

Test default message:

```txt
Halo AppVibe, saya tertarik membuat website/app untuk bisnis saya. Bisa bantu konsultasi?
```

---

## 12. Form QA

Contact form:

- [ ] Nama required.
- [ ] Nomor WhatsApp required.
- [ ] Jenis kebutuhan available.
- [ ] Pesan optional/required as decided.
- [ ] Error state clear.
- [ ] Submit builds WhatsApp message.
- [ ] Form does not silently fail.
- [ ] Mobile form comfortable to fill.

---

## 13. Responsive QA

Test widths:

```txt
360px
390px
430px
768px
1024px
1280px
1440px
```

Checklist:

- [ ] No horizontal scroll.
- [ ] Text not cut.
- [ ] Cards stack properly.
- [ ] Navbar works.
- [ ] Buttons not too small.
- [ ] Hero visual does not overflow.
- [ ] Tables/dashboard usable.
- [ ] Sticky CTA does not cover important content.
- [ ] Footer readable.

---

## 14. Visual QA

- [ ] Colors consistent.
- [ ] Typography consistent.
- [ ] Section spacing consistent.
- [ ] Cards have consistent radius/shadow.
- [ ] Buttons consistent.
- [ ] Icons consistent.
- [ ] Mockups look premium.
- [ ] Portfolio thumbnails not blurry.
- [ ] No cluttered section.
- [ ] No section feels empty.

---

## 15. Accessibility QA

- [ ] One h1 per page.
- [ ] Heading order logical.
- [ ] Buttons/links keyboard accessible.
- [ ] Form labels exist.
- [ ] Images have alt text.
- [ ] Color contrast readable.
- [ ] Focus states visible.
- [ ] Links describe destination.
- [ ] Touch targets are large enough.

---

## 16. SEO QA

Each major page:

- [ ] Has page title.
- [ ] Has meta description.
- [ ] Has h1.
- [ ] Has descriptive headings.
- [ ] Has readable URL.
- [ ] Has OG image if implemented.
- [ ] No duplicate title across all important pages.
- [ ] Images have alt text.

Recommended pages to optimize:
- Home
- Layanan
- Portfolio
- Each case study
- Demo index
- Contact

---

## 17. Performance QA

- [ ] Build output not unnecessarily huge.
- [ ] Images optimized.
- [ ] Large images lazy-loaded.
- [ ] No heavy animation library unless needed.
- [ ] Page loads quickly on mobile.
- [ ] No unnecessary network calls.
- [ ] No console spam in production.

Optional:
- Run Lighthouse.
- Target Performance > 85.
- Target Accessibility > 90.
- Target Best Practices > 90.
- Target SEO > 85.

---

## 18. Deployment QA

Before deploy:

- [ ] `.env.example` exists.
- [ ] `.env.local` not committed.
- [ ] Build command documented.
- [ ] Output directory documented.
- [ ] Cloudflare Pages config clear.
- [ ] Production URL works.
- [ ] Preview URL works if available.
- [ ] Custom domain DNS ready if used.

After deploy:

- [ ] Open homepage.
- [ ] Open portfolio.
- [ ] Open all demos.
- [ ] Test WhatsApp CTA.
- [ ] Test mobile.
- [ ] Check console.
- [ ] Check broken links.

---

## 19. Final Sign-Off Checklist

- [ ] Homepage is visually strong.
- [ ] Portfolio looks sellable.
- [ ] Demo pages are not half-finished.
- [ ] Copy is business-focused.
- [ ] All routes work.
- [ ] WhatsApp CTA works.
- [ ] Mobile responsive.
- [ ] Build passes.
- [ ] Deploy successful.
- [ ] README updated.
- [ ] Known limitations documented.
