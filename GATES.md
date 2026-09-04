# Gates: audit P1-P3 fixes

OWNS: src/components/layout/Navbar.tsx, src/components/services/ServicesPricing.tsx, src/pages/ServicesPage.tsx, src/components/sections/ConsultationCTA.tsx, src/lib/blog-tags.ts, src/components/blog/BlogListToolbar.tsx, src/components/blog/BlogArticleHero.tsx, src/components/blog/BlogPostCard.tsx, src/components/portfolio/BusinessValueSection.tsx, src/components/home/work-ui.tsx, src/components/home/StudioTrust.tsx, src/components/about/AboutFounder.tsx, src/components/services/DecisionHelper.tsx, src/components/ui/Breadcrumbs.tsx, src/pages/PortfolioDetailPage.tsx, src/pages/DemoDetailPage.tsx, src/components/sections/FAQSection.tsx, src/components/services/ServicesFAQ.tsx, src/components/about/AboutFAQ.tsx, src/components/contact/ContactFAQ.tsx, scripts/verify-audit-gates.mjs, GATES.md

Scope: implement audit findings P1-P3 sequentially with passing typecheck, build, and browser re-verification

- [x] G0: this ledger states outcomes that can fail
  CHECK: node "C:\Users\bimap\.agents\skills\unlazy\scripts\gate-lint.mjs" GATES.md
  EXPECT: LINT OK
  EVIDENCE: exit=0; shell=C:\WINDOWS\system32\cmd.exe; cwd=D:\Coding\AppVibe v2; path=49037f729fe2/57 entries; EXPECT=matched; output-sha256=e13705b57478d8a215b353032a6e6c42fcd05222dd8513b82ece9d35539e1350; output-bytes=151

- [x] G1: Kontak link renders in desktop and mobile nav
  CHECK: node scripts/verify-audit-gates.mjs G1
  EXPECT: G1 KONTAK NAV OK
  EVIDENCE: exit=0; shell=C:\WINDOWS\system32\cmd.exe; cwd=D:\Coding\AppVibe v2; path=49037f729fe2/57 entries; EXPECT=matched; output-sha256=1b5e9aad72052702f614c22b131a2331c70007aae816c8bb1af11baedac1248d; output-bytes=17

- [x] G2: services page shows mulai-dari pricing strip with WhatsApp links
  CHECK: node scripts/verify-audit-gates.mjs G2
  EXPECT: G2 PRICING STRIP OK
  EVIDENCE: exit=0; shell=C:\WINDOWS\system32\cmd.exe; cwd=D:\Coding\AppVibe v2; path=49037f729fe2/57 entries; EXPECT=matched; output-sha256=1c174084e4f1d1da8c00474cf61f0763640c1cb3719ce9e509883e92b6725d1d; output-bytes=20

- [x] G3: final CTA carries trust checklist with warranty and source-code ownership
  CHECK: node scripts/verify-audit-gates.mjs G3
  EXPECT: G3 TRUST CHECKLIST OK
  EVIDENCE: exit=0; shell=C:\WINDOWS\system32\cmd.exe; cwd=D:\Coding\AppVibe v2; path=49037f729fe2/57 entries; EXPECT=matched; output-sha256=6241907ea032ec39ef8daaa2e54adae77162bbb1900ac3ae8950a6c695c480fe; output-bytes=22

- [ ] G4: blog tags render humanized labels instead of raw slugs
  CHECK: node scripts/verify-audit-gates.mjs G4
  EXPECT: G4 TAG LABELS OK
  EVIDENCE: pending

- [ ] G5: demo spec grid stays balanced with an odd item count
  CHECK: node scripts/verify-audit-gates.mjs G5
  EXPECT: G5 SPEC GRID OK
  EVIDENCE: pending

- [ ] G6: Proses nav scrolls smoothly without a full document reload
  CHECK: node scripts/verify-audit-gates.mjs G6
  EXPECT: G6 PROSES SCROLL OK
  EVIDENCE: pending

- [ ] G7: key images declare intrinsic dimensions against layout shift
  CHECK: node scripts/verify-audit-gates.mjs G7
  EXPECT: G7 IMG DIMS OK
  EVIDENCE: pending

- [ ] G8: services page guides visitors to one service with prefilled WhatsApp
  CHECK: node scripts/verify-audit-gates.mjs G8
  EXPECT: G8 DECISION HELPER OK
  EVIDENCE: pending

- [ ] G9: case study and demo detail pages show breadcrumbs
  CHECK: node scripts/verify-audit-gates.mjs G9
  EXPECT: G9 BREADCRUMBS OK
  EVIDENCE: pending

- [ ] G10: FAQ accordions expose programmatically linked answer regions
  CHECK: node scripts/verify-audit-gates.mjs G10
  EXPECT: G10 FAQ CONTROLS OK
  EVIDENCE: pending

- [x] G11: TypeScript compiles cleanly
  CHECK: npm run typecheck && echo TYPECHECK PASSED
  EXPECT: TYPECHECK PASSED
  EVIDENCE: exit=0; shell=C:\WINDOWS\system32\cmd.exe; cwd=D:\Coding\AppVibe v2; path=49037f729fe2/57 entries; EXPECT=matched; output-sha256=c5b5567392ba8d0861aa9be76b06e25be69c8b4c41c348dcf44a9975d214e1c4; output-bytes=71

- [x] G12: production bundle builds cleanly
  CHECK: npm run build && echo BUILD PASSED
  EXPECT: BUILD PASSED
  EVIDENCE: exit=0; shell=C:\WINDOWS\system32\cmd.exe; cwd=D:\Coding\AppVibe v2; path=49037f729fe2/57 entries; EXPECT=matched; output-sha256=1d8641b649e79dd7c961c1b37f00d638826b2fc05ffcb6e9e125fe8011a67984; output-bytes=2362

- [ ] G13: changed routes verified in a real browser at desktop width
  EVIDENCE: pending
