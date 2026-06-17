import {
  Code2,
  Database,
  Globe2,
  Layers,
  Palette,
  Rocket,
  Sparkles,
  Wrench,
} from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { usePageMeta } from "@/i18n/use-page-meta";
import { useLang } from "@/i18n/use-lang";

type StackGroup = {
  titleId: string;
  titleEn: string;
  icon: typeof Code2;
  items: { name: string; noteId: string; noteEn: string }[];
};

const STACK: StackGroup[] = [
  {
    titleId: "Frontend",
    titleEn: "Frontend",
    icon: Code2,
    items: [
      {
        name: "React 19 + TypeScript",
        noteId: "Strict mode, ES2020 target. Hooks-first, tidak ada class component.",
        noteEn: "Strict mode, ES2020 target. Hooks-first, no class components.",
      },
      {
        name: "Vite 6",
        noteId: "Build tool pilihan untuk SPA — DX > Next.js untuk project skala portfolio.",
        noteEn: "The build tool of choice for SPAs — DX beats Next.js for portfolio-scale work.",
      },
      {
        name: "React Router v7",
        noteId: "Pakai data router + native View Transitions. Tidak butuh framework.",
        noteEn: "Data router + native View Transitions. No framework needed.",
      },
      {
        name: "Tailwind CSS 3.4",
        noteId: "Custom design tokens (brand palette + glass-card + bento-card). Tidak pakai UI library.",
        noteEn: "Custom design tokens (brand palette + glass-card + bento-card). No UI library.",
      },
      {
        name: "Lucide React",
        noteId: "Icon set tree-shakeable. Tidak pakai font-icon yang fat.",
        noteEn: "Tree-shakeable icon set. We avoid heavyweight icon fonts.",
      },
    ],
  },
  {
    titleId: "Backend (Lead Dashboard demo)",
    titleEn: "Backend (Lead Dashboard demo)",
    icon: Database,
    items: [
      {
        name: "Supabase Postgres",
        noteId: "RLS-protected multi-tenant schema. Anon key + showcase tenant policy untuk demo public.",
        noteEn: "RLS-protected multi-tenant schema. Anon key + showcase tenant policy for public demos.",
      },
      {
        name: "Supabase Realtime",
        noteId: "Postgres CDC over WebSocket. Buka 2 tab → status change auto-sync.",
        noteEn: "Postgres CDC over WebSocket. Open two tabs → status changes sync automatically.",
      },
      {
        name: "Better Auth (deferred)",
        noteId: "Opsional — hanya jika AppVibe jadi produk dengan login klien & tenant privat. Bukan kebutuhan situs marketing saat ini.",
        noteEn: "Optional — only if AppVibe becomes a product with client login and private tenants. Not required for the marketing site today.",
      },
    ],
  },
  {
    titleId: "Design System",
    titleEn: "Design System",
    icon: Palette,
    items: [
      {
        name: "Plus Jakarta Sans",
        noteId: "Variable font. Fallback ke system stack untuk perf di slow network.",
        noteEn: "Variable font. Falls back to the system stack for perf on slow networks.",
      },
      {
        name: "Brand palette",
        noteId: "Navy #0F172A · Blue #2563EB · Violet #7C3AED · Cyan #06B6D4. Token di tailwind.config.ts.",
        noteEn: "Navy #0F172A · Blue #2563EB · Violet #7C3AED · Cyan #06B6D4. Tokens live in tailwind.config.ts.",
      },
      {
        name: "View Transitions API",
        noteId: "Native browser API untuk shared-element morph antara portfolio card dan case study.",
        noteEn: "Native browser API for shared-element morphs between portfolio cards and case studies.",
      },
      {
        name: "Scroll-driven animations",
        noteId: "CSS animation-timeline native. Zero JS cost, mobile-friendly, Safari graceful degrade.",
        noteEn: "Native CSS animation-timeline. Zero JS cost, mobile-friendly, graceful Safari degradation.",
      },
    ],
  },
  {
    titleId: "Deployment & Infra",
    titleEn: "Deployment & Infra",
    icon: Rocket,
    items: [
      {
        name: "Cloudflare Pages",
        noteId: "Edge network, free tier generous, _redirects untuk SPA routing.",
        noteEn: "Edge network, generous free tier, _redirects for SPA routing.",
      },
      {
        name: "Manual chunks (Vite)",
        noteId: "react-vendor, router-vendor, supabase-vendor split — main bundle ~57 KB gzip.",
        noteEn: "react-vendor, router-vendor, supabase-vendor split — main bundle ~57 KB gzip.",
      },
      {
        name: "Lazy load per route",
        noteId: "5 demo pages + portfolio detail dimuat on-demand. RouteLoader skeleton di Suspense.",
        noteEn: "Five demo pages + portfolio detail load on demand. RouteLoader skeleton inside Suspense.",
      },
    ],
  },
  {
    titleId: "Dev Tools",
    titleEn: "Dev Tools",
    icon: Wrench,
    items: [
      {
        name: "tsx + dotenv",
        noteId: "Untuk seed script Supabase. Lebih ringan dari ts-node, native ESM support.",
        noteEn: "For the Supabase seed script. Lighter than ts-node, native ESM support.",
      },
      {
        name: "VS Code + Cursor",
        noteId: "Tailwind IntelliSense, ESLint (planned), Prettier inline format.",
        noteEn: "Tailwind IntelliSense, ESLint (planned), Prettier inline formatting.",
      },
      {
        name: "Chrome DevTools + Lighthouse",
        noteId: "QA performance per release. Target 95+/100 untuk semua kategori.",
        noteEn: "Performance QA every release. Target 95+/100 across all categories.",
      },
    ],
  },
];

const PRINCIPLES = [
  {
    titleId: "Native APIs > library bila bisa",
    titleEn: "Native APIs over libraries when we can",
    descId:
      "View Transitions, scroll-timeline, IntersectionObserver, ResizeObserver. Tidak install Framer Motion untuk apa yang sudah disediakan browser modern.",
    descEn:
      "View Transitions, scroll-timeline, IntersectionObserver, ResizeObserver. We won't install Framer Motion for what modern browsers already do.",
  },
  {
    titleId: "Data-driven > komponen hardcoded",
    titleEn: "Data-driven beats hardcoded components",
    descId:
      "Konten (portfolio, services, FAQ, demos) di-define sebagai TypeScript objects, di-render oleh komponen tipis. Mudah translate, mudah update, mudah test.",
    descEn:
      "Content (portfolio, services, FAQ, demos) lives as TypeScript objects rendered by thin components. Easy to translate, easy to update, easy to test.",
  },
  {
    titleId: "Graceful degradation > hard requirement",
    titleEn: "Graceful degradation over hard requirements",
    descId:
      "Tanpa env Supabase → demo Lead Dashboard fallback ke mock. Tanpa View Transitions support → navigation tetap jalan instant. Setiap fitur baru harus ship tanpa breakage di old browser.",
    descEn:
      "No Supabase env → the Lead Dashboard demo falls back to mock data. No View Transitions support → navigation still works instantly. Every new feature ships without breaking older browsers.",
  },
  {
    titleId: "Type-safe ujung ke ujung",
    titleEn: "End-to-end type safety",
    descId:
      "TypeScript strict, hand-written Database types untuk Supabase, generic Button polymorphic. Tidak ada `any` kecuali bridge API yang memang terbuka.",
    descEn:
      "Strict TypeScript, hand-written Database types for Supabase, a polymorphic Button generic. No `any` outside of intentionally open API bridges.",
  },
];

const NOT_USED_ID: { name: string; note: string }[] = [
  {
    name: "Next.js",
    note: "untuk portfolio skala ini, SPA + Vite lebih cepat ship. Akan beralih bila perlu SSR/SSG/server actions.",
  },
  {
    name: "UI library (shadcn/Radix/MUI)",
    note: "design system kecil dengan token sendiri. Mengurangi bloat dan menjaga signature visual.",
  },
  {
    name: "Framer Motion",
    note: "View Transitions + CSS animations cukup. Hemat 30+ KB bundle.",
  },
  {
    name: "TanStack Query",
    note: "overkill untuk skala demo. Pakai useState + useEffect minimalis.",
  },
  {
    name: "i18next",
    note: "untuk ID/EN toggle, pakai Context + dictionary pattern. JSON namespace berlebihan untuk scope ini.",
  },
];

const NOT_USED_EN: { name: string; note: string }[] = [
  {
    name: "Next.js",
    note: "for a portfolio of this scale, SPA + Vite ships faster. We'll switch if SSR/SSG/server actions become necessary.",
  },
  {
    name: "UI libraries (shadcn/Radix/MUI)",
    note: "a small design system with our own tokens. Less bloat, signature visuals stay intact.",
  },
  {
    name: "Framer Motion",
    note: "View Transitions + CSS animations are enough. Saves 30+ KB of bundle.",
  },
  {
    name: "TanStack Query",
    note: "overkill at demo scale. We use minimal useState + useEffect instead.",
  },
  {
    name: "i18next",
    note: "for the ID/EN toggle we use a Context + dictionary pattern. JSON namespaces are excessive at this scope.",
  },
];

export function UsesPage() {
  usePageMeta("uses", "uses");
  const { lang, dict } = useLang();
  const { pages } = dict;

  const notUsed = lang === "id" ? NOT_USED_ID : NOT_USED_EN;

  return (
    <PageShell>
      <PageHero
        eyebrow={pages.uses.hero.eyebrow}
        title={pages.uses.hero.title}
        description={pages.uses.hero.description}
      />

      <section className="section-padding bg-white">
        <Container>
          <div className="mx-auto max-w-5xl space-y-12">
            {STACK.map((group) => {
              const Icon = group.icon;
              const title = lang === "id" ? group.titleId : group.titleEn;
              return (
                <div key={group.titleId}>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cta-gradient text-white shadow-sm">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-xl font-bold text-brand-navy sm:text-2xl">
                      {title}
                    </h2>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((item) => (
                      <Card key={item.name} padding="md" hover>
                        <p className="text-sm font-semibold text-brand-navy">
                          {item.name}
                        </p>
                        <p className="mt-1.5 text-xs leading-relaxed text-brand-muted">
                          {lang === "id" ? item.noteId : item.noteEn}
                        </p>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-slate-50 reveal-on-scroll">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <span className="premium-eyebrow">
                {pages.uses.principlesEyebrow}
              </span>
              <h2 className="mt-3 text-2xl font-bold text-brand-navy sm:text-3xl">
                {pages.uses.principlesTitle}
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {PRINCIPLES.map((p) => (
                <Card key={p.titleId} padding="md">
                  <div className="flex items-start gap-3">
                    <Sparkles
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue"
                      aria-hidden
                    />
                    <div>
                      <h3 className="text-base font-semibold text-brand-navy">
                        {lang === "id" ? p.titleId : p.titleEn}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">
                        {lang === "id" ? p.descId : p.descEn}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-brand-border bg-gradient-to-br from-blue-50/40 to-violet-50/30 p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <Layers className="h-6 w-6 text-brand-blue" aria-hidden />
              <h2 className="text-xl font-bold text-brand-navy sm:text-2xl">
                {pages.uses.notUsedTitle}
              </h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-brand-muted">
              {notUsed.map((item) => (
                <li key={item.name}>
                  <strong className="text-brand-navy">{item.name}</strong>
                  {" — "}
                  {item.note}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-slate-50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Globe2 className="mx-auto h-8 w-8 text-brand-blue" aria-hidden />
            <h2 className="mt-3 text-xl font-bold text-brand-navy sm:text-2xl">
              {pages.uses.keepGrowing}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
              {pages.uses.updateNote}
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <Badge variant="blue">{pages.uses.badges.lastUpdated}</Badge>
              <Badge variant="violet">{pages.uses.badges.next}</Badge>
              <Badge variant="cyan">{pages.uses.badges.openSource}</Badge>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
