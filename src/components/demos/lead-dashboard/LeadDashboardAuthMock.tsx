import { useState } from "react";
import { Lock, Mail, ArrowRight, CheckCircle2, Eye, EyeOff } from "lucide-react";
import { brand } from "@/data/demos/lead-dashboard/brand";
import { leadDashboardCopy } from "@/data/demos/lead-dashboard/copy";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useLang } from "@/i18n/use-lang";
import { trackEvent } from "@/lib/analytics";

type LeadDashboardAuthMockProps = {
  onAuth: () => void;
};

export function LeadDashboardAuthMock({ onAuth }: LeadDashboardAuthMockProps) {
  const { lang } = useLang();
  const copy = leadDashboardCopy.auth;
  const [email, setEmail] = useState(brand.adminEmail);
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    trackEvent("auth_mock_submit", { source: "lead_dashboard_demo" });
    setSubmitted(true);
    setTimeout(() => onAuth(), 700);
  };

  return (
    <section className="section-padding bg-slate-50">
      <Container>
        <div className="mx-auto max-w-md">
          <Card padding="lg" className="overflow-hidden">
            <div
              className="-mx-6 -mt-6 mb-5 flex items-center gap-3 border-b border-brand-border bg-gradient-to-r from-blue-600 to-slate-900 px-6 py-4"
              style={{ marginTop: "-1.5rem", marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white">
                <Lock className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-sm font-bold text-white">{brand.name[lang]}</p>
                <p className="text-[10px] text-cyan-100/80">{brand.tagline[lang]}</p>
              </div>
            </div>

            <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
              {copy.eyebrow[lang]}
            </p>
            <h2 className="mt-1 text-xl font-bold text-brand-navy">
              {copy.title[lang]}
            </h2>
            <p className="mt-2 text-xs text-brand-muted">{copy.hint[lang]}</p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label className="mb-1 block text-xs font-semibold text-brand-navy">
                  {copy.email[lang]}
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted"
                    aria-hidden
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-brand-border py-2 pl-9 pr-3 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    autoComplete="username"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold text-brand-navy">
                  {copy.password[lang]}
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted"
                    aria-hidden
                  />
                  <input
                    type={showPwd ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-brand-border py-2 pl-9 pr-10 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd((p) => !p)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-muted"
                    aria-label={showPwd ? "Hide" : "Show"}
                  >
                    {showPwd ? (
                      <EyeOff className="h-4 w-4" aria-hidden />
                    ) : (
                      <Eye className="h-4 w-4" aria-hidden />
                    )}
                  </button>
                </div>
              </div>
              <Button type="submit" size="md" className="w-full" disabled={submitted}>
                {submitted ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" aria-hidden />
                    {copy.success[lang]}
                  </>
                ) : (
                  <>
                    {copy.submit[lang]}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </>
                )}
              </Button>
            </form>

            <p className="mt-4 text-center text-[10px] text-brand-muted">
              {brand.disclaimer[lang]}
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}