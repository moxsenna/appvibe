# 03-DESIGN-SYSTEM.md — AppVibe Studio Design System

## 1. Design Direction

AppVibe Studio harus terlihat:

- modern,
- profesional,
- premium tapi tetap approachable,
- clean,
- business-oriented,
- tidak terlalu teknis,
- tidak terlalu playful,
- cocok untuk pengusaha UMKM dan jasa profesional.

Website harus memberi kesan:

> “Ini agency yang paham bisnis, bukan hanya bisa bikin tampilan.”

---

## 2. Visual Personality

### 2.1 Keywords

- Professional
- Modern
- Clean
- Trustworthy
- Strategic
- Digital-first
- Conversion-oriented
- Premium-light

### 2.2 Avoid

Hindari visual yang:

- terlalu ramai,
- terlalu neon/cyberpunk,
- terlalu developer/geek,
- terlalu startup abstrak,
- terlalu generik template,
- terlalu banyak animasi,
- terlalu banyak gradient tanpa fungsi,
- terlalu childish.

---

## 3. Color System

### 3.1 Primary Palette

```txt
Primary Navy       #0F172A
Primary Blue       #2563EB
Accent Violet      #7C3AED
Accent Cyan        #06B6D4
Background Light   #F8FAFC
Surface White      #FFFFFF
Text Dark          #111827
Text Muted         #64748B
Border Soft        #E2E8F0
```

### 3.2 Semantic Colors

```txt
Success            #16A34A
Warning            #F59E0B
Danger             #DC2626
Info               #0284C7
```

### 3.3 Background Usage

- Main background: `#FFFFFF`
- Alternating section: `#F8FAFC`
- Hero dark gradient: Navy to deep blue/violet
- Card background: white
- Soft badge background: blue/violet/cyan tint
- Footer: dark navy

### 3.4 Gradient Usage

Gradient boleh digunakan untuk:

- hero background,
- CTA emphasis,
- small decorative blobs,
- mockup glow,
- icon background.

Do not overuse gradient in every card.

Suggested gradient:

```txt
linear-gradient(135deg, #0F172A 0%, #1E3A8A 45%, #4C1D95 100%)
```

CTA gradient optional:

```txt
#2563EB -> #7C3AED
```

---

## 4. Typography

### 4.1 Font Recommendation

Use modern sans-serif.

Options:
- Inter
- Plus Jakarta Sans
- Geist
- Manrope

Recommended:
- **Plus Jakarta Sans** for Indonesian business-friendly look.
- Fallback: `system-ui, sans-serif`.

### 4.2 Type Scale

Desktop:

```txt
Hero headline       56–72px / 1.05
Page headline       44–56px / 1.1
Section headline    32–44px / 1.15
Card title          20–24px / 1.25
Body large          18–20px / 1.6
Body                16px / 1.6
Small               14px / 1.5
Caption             12px / 1.4
```

Mobile:

```txt
Hero headline       36–44px
Page headline       32–40px
Section headline    28–34px
Card title          18–22px
Body                15–16px
Small               13–14px
```

### 4.3 Font Weight

- Headline: 700–800
- Section title: 700
- Card title: 600–700
- Body: 400–500
- Label/badge: 600

### 4.4 Heading Rules

- Only one `h1` per page.
- Use `h2` for major sections.
- Use `h3` for cards/subsections.
- Avoid skipping heading levels.

---

## 5. Spacing System

Use Tailwind spacing scale.

### 5.1 Section Padding

Desktop:
```txt
py-20 to py-28
```

Mobile:
```txt
py-12 to py-16
```

### 5.2 Container

Max width:

```txt
max-w-7xl
```

Horizontal padding:

```txt
px-4 mobile
px-6 tablet
px-8 desktop
```

### 5.3 Card Padding

```txt
p-5 mobile
p-6 desktop
p-8 for large feature cards
```

### 5.4 Gap

```txt
gap-4 small
gap-6 common
gap-8 portfolio/service grids
gap-10 major split sections
gap-12 hero split
```

---

## 6. Layout System

### 6.1 Grid

Common layouts:

- 2-column hero on desktop, single column on mobile.
- 3-column services on desktop, 1-column mobile.
- 3-column portfolio grid on desktop, 2 tablet, 1 mobile.
- 4-column stats on desktop, 2 tablet, 1 mobile.
- 2-column case study content.

### 6.2 Container Pattern

Every section should use:

```tsx
<section>
  <Container>
    <SectionHeader />
    ...
  </Container>
</section>
```

### 6.3 Responsive Rules

Breakpoints:

```txt
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

Mobile-first rules:

- Stack columns on mobile.
- CTA full-width on mobile if needed.
- Cards should not feel cramped.
- Sticky mobile CTA allowed.
- Navbar collapses into mobile menu.

---

## 7. Buttons

### 7.1 Button Variants

#### Primary

Use for main conversion CTA.

Style:
- blue/violet gradient or solid blue,
- white text,
- rounded-xl or rounded-full,
- strong shadow optional.

Label examples:
- Konsultasi via WhatsApp
- Mulai Website Bisnis Anda
- Buat Website Seperti Ini

#### Secondary

Use for supporting CTA.

Style:
- white/transparent background,
- border,
- dark text,
- hover background soft.

Label examples:
- Lihat Portfolio
- Jelajahi Demo
- Pelajari Layanan

#### Ghost

Use for navigation or less important actions.

#### Dark

Use on light CTA card if needed.

### 7.2 Button Sizes

```txt
sm: h-9 px-4 text-sm
md: h-11 px-5 text-sm/base
lg: h-12 px-6 text-base
xl: h-14 px-8 text-base/lg
```

### 7.3 Button Rules

- CTA text must be action-oriented.
- Avoid vague text like “Submit” if context unclear.
- WhatsApp button should include WhatsApp icon or label.
- Buttons must have hover/focus states.
- Use `<a>` for external WhatsApp links.

---

## 8. Cards

### 8.1 Card Base

Style:
- white background,
- soft border,
- rounded-2xl,
- subtle shadow,
- hover lift optional.

Tailwind direction:

```txt
rounded-2xl border border-slate-200 bg-white shadow-sm
hover:shadow-md transition
```

### 8.2 Card Types

1. Service Card
2. Portfolio Card
3. Industry Card
4. Testimonial Card
5. Feature Card
6. Stat Card
7. Demo Preview Card

### 8.3 Portfolio Card Requirements

Must include:
- visual thumbnail,
- category badge,
- title,
- summary,
- feature tags,
- business value snippet,
- CTA detail,
- CTA demo.

---

## 9. Badges

### 9.1 Badge Variants

- Blue
- Violet
- Cyan
- Gray
- Success
- Warning

### 9.2 Usage

Use badges for:
- category labels,
- feature tags,
- demo labels,
- trust indicators,
- status in dashboard demo.

Examples:
- Company Profile
- Landing Page
- WhatsApp CTA
- Form Lead
- Dashboard
- Mobile Friendly

---

## 10. Icons

Recommended icon library:
- Lucide React

Icon style:
- stroke icons,
- consistent size,
- no mixed icon styles.

Common icon mappings:
- Website: Monitor
- Landing Page: Layout
- Dashboard: BarChart3
- WhatsApp/Chat: MessageCircle
- Automation: Zap
- Form: ClipboardList
- Payment: CreditCard
- Analytics: LineChart
- Clinic: HeartPulse
- Property: Building2
- Education: GraduationCap
- Portfolio: BriefcaseBusiness

---

## 11. Imagery and Mockups

### 11.1 Visual Assets

Use:
- browser mockup,
- mobile phone mockup,
- dashboard preview,
- card previews,
- simple illustrations.

Avoid:
- random stock photos without purpose,
- low-quality blurry images,
- overused generic startup illustrations.

### 11.2 Portfolio Thumbnail

Each portfolio should have:
- strong visual thumbnail,
- niche-specific preview,
- clean layout,
- visible mobile + desktop indication if possible.

### 11.3 Demo Mockup

Recommended:
- use mockup frames built with CSS first,
- avoid relying too much on screenshots,
- demo should be live HTML where possible.

---

## 12. Navigation

### 12.1 Desktop Navbar

Elements:
- logo left,
- nav center/right,
- CTA button right.

Links:
- Home
- Layanan
- Portfolio
- Demo
- Industri
- Tentang

CTA:
- Konsultasi

Style:
- transparent/blur on hero optional,
- white solid after scroll optional,
- simple sticky header optional.

For MVP:
- sticky white header is acceptable.

### 12.2 Mobile Navbar

Requirements:
- hamburger menu,
- clear links,
- CTA visible,
- no cramped layout,
- close menu on route click.

---

## 13. Footer

Footer should include:

- brand statement,
- navigation,
- services,
- portfolio/demo links,
- contact/WhatsApp,
- social links optional,
- copyright.

Footer style:
- dark navy background,
- white text,
- muted links,
- clear CTA.

---

## 14. Section Patterns

### 14.1 Section Header

Should include:
- eyebrow label optional,
- title,
- description.

Example:

```txt
PORTFOLIO DEMO
Lihat contoh website dan app yang bisa kami buat
Setiap demo dibuat responsif dengan mock data realistis agar Anda mudah membayangkan hasilnya untuk bisnis Anda.
```

### 14.2 Problem/Solution Section

Use split layout:
- left: heading and copy,
- right: problem cards or before/after cards.

### 14.3 Process Section

Use numbered steps:
1. Konsultasi
2. Rekomendasi
3. Struktur
4. Development
5. Review
6. Launching

---

## 15. Form Design

Contact form fields:
- Nama
- Nama bisnis
- Nomor WhatsApp
- Jenis kebutuhan
- Estimasi budget
- Pesan

Style:
- clear labels,
- rounded inputs,
- visible focus ring,
- helper text,
- error text if invalid.

Submit label:
- Kirim & Konsultasi via WhatsApp

For MVP:
- form submit builds WhatsApp message.

---

## 16. Demo Dashboard Design

Dashboard demo should look realistic.

Elements:
- sidebar on desktop,
- topbar,
- stat cards,
- chart area,
- lead table,
- status badges,
- filter/search,
- lead detail panel.

Status colors:
- Baru: blue
- Dihubungi: violet
- Follow Up: amber
- Deal: green
- Tidak Cocok: gray/red-muted

Mobile:
- collapse sidebar,
- stack stat cards,
- table becomes cards or horizontal scroll.

---

## 17. Animation Guidelines

Allowed:
- subtle fade-in,
- hover lift,
- button hover,
- card hover,
- mockup floating slight movement optional.

Avoid:
- excessive motion,
- slow animations,
- distracting parallax,
- heavy animation library unless needed.

MVP:
- CSS transitions enough.

---

## 18. Accessibility Design Rules

1. Text contrast must be readable.
2. Do not use color alone for status.
3. Buttons must have focus states.
4. All images need alt text.
5. Forms need labels.
6. Links should be distinguishable.
7. Avoid tiny text below 12px.
8. Touch targets at least 44px high.

---

## 19. Design QA Checklist

- [ ] Hero clear within 5 seconds.
- [ ] CTA visible above fold.
- [ ] Mobile layout clean.
- [ ] No cramped cards.
- [ ] No inconsistent button style.
- [ ] Colors feel professional.
- [ ] Portfolio thumbnails look premium.
- [ ] Demo pages look finished.
- [ ] Fonts consistent.
- [ ] Section spacing consistent.
- [ ] Footer complete.
- [ ] No lorem ipsum.
- [ ] WhatsApp CTA obvious.
