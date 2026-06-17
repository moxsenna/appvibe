import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { ServicesPage } from "@/pages/ServicesPage";
import { PortfolioPage } from "@/pages/PortfolioPage";
import { DemoIndexPage } from "@/pages/DemoIndexPage";
import { IndustriesPage } from "@/pages/IndustriesPage";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { PortfolioDetailPage } from "@/pages/PortfolioDetailPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { RouteLoader } from "@/components/ui/RouteLoader";
import { LangProvider } from "@/i18n/LangProvider";

const UsesPage = lazy(() =>
  import("@/pages/UsesPage").then((m) => ({ default: m.UsesPage })),
);

const CompanyProfileDemoPage = lazy(() =>
  import("@/pages/demos/CompanyProfileDemoPage").then((m) => ({
    default: m.CompanyProfileDemoPage,
  })),
);
const WebinarLandingDemoPage = lazy(() =>
  import("@/pages/demos/WebinarLandingDemoPage").then((m) => ({
    default: m.WebinarLandingDemoPage,
  })),
);
const KlinikDemoPage = lazy(() =>
  import("@/pages/demos/KlinikDemoPage").then((m) => ({
    default: m.KlinikDemoPage,
  })),
);
const PropertiDemoPage = lazy(() =>
  import("@/pages/demos/PropertiDemoPage").then((m) => ({
    default: m.PropertiDemoPage,
  })),
);
const LeadDashboardDemoPage = lazy(() =>
  import("@/pages/demos/LeadDashboardDemoPage").then((m) => ({
    default: m.LeadDashboardDemoPage,
  })),
);

const withSuspense = (
  LazyComp: React.LazyExoticComponent<React.ComponentType>,
) => (
  <Suspense fallback={<RouteLoader />}>
    <LazyComp />
  </Suspense>
);

/**
 * Shared children — identical for both ID and EN layout routes. Paths use
 * Indonesian words for the ID tree, English words for the EN tree (defined
 * by which segment patterns we list below). React Router resolves them
 * relative to the parent (no leading slash).
 *
 * Slugs are canonical across both languages so `/portfolio/clinic` and
 * `/en/portfolio/clinic` reach the same content (translated by locale).
 */
const idChildren: RouteObject[] = [
  { index: true, element: <HomePage /> },
  { path: "layanan", element: <ServicesPage /> },
  { path: "portfolio/:slug", element: <PortfolioDetailPage /> },
  { path: "portfolio", element: <PortfolioPage /> },
  { path: "demo", element: <DemoIndexPage /> },
  { path: "demo/company-profile", element: withSuspense(CompanyProfileDemoPage) },
  { path: "demo/webinar-landing", element: withSuspense(WebinarLandingDemoPage) },
  { path: "demo/klinik", element: withSuspense(KlinikDemoPage) },
  { path: "demo/properti", element: withSuspense(PropertiDemoPage) },
  { path: "demo/lead-dashboard", element: withSuspense(LeadDashboardDemoPage) },
  { path: "industri", element: <IndustriesPage /> },
  { path: "tentang", element: <AboutPage /> },
  { path: "kontak", element: <ContactPage /> },
  { path: "uses", element: withSuspense(UsesPage) },
];

const enChildren: RouteObject[] = [
  { index: true, element: <HomePage /> },
  { path: "services", element: <ServicesPage /> },
  { path: "portfolio/:slug", element: <PortfolioDetailPage /> },
  { path: "portfolio", element: <PortfolioPage /> },
  { path: "demos", element: <DemoIndexPage /> },
  { path: "demos/company-profile", element: withSuspense(CompanyProfileDemoPage) },
  { path: "demos/webinar-landing", element: withSuspense(WebinarLandingDemoPage) },
  { path: "demos/klinik", element: withSuspense(KlinikDemoPage) },
  { path: "demos/properti", element: withSuspense(PropertiDemoPage) },
  { path: "demos/lead-dashboard", element: withSuspense(LeadDashboardDemoPage) },
  { path: "industries", element: <IndustriesPage /> },
  { path: "about", element: <AboutPage /> },
  { path: "contact", element: <ContactPage /> },
  { path: "uses", element: withSuspense(UsesPage) },
];

export const router = createBrowserRouter([
  {
    element: <LangProvider lang="id" />,
    children: idChildren,
  },
  {
    path: "/en",
    element: <LangProvider lang="en" />,
    children: enChildren,
  },
  { path: "*", element: <NotFoundPage /> },
]);
