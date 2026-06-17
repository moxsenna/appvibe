import { useState } from "react";
import {
  Check,
  Facebook,
  Link2,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import type { Lang } from "@/i18n/types";
import { buildShareUrl, copyPageUrl } from "@/lib/share";
import { cn } from "@/lib/cn";

type BlogShareBarProps = {
  url: string;
  title: string;
  lang: Lang;
  shareTitle: string;
  copyLabel: string;
  copiedLabel: string;
  labels: {
    whatsapp: string;
    x: string;
    facebook: string;
    linkedin: string;
    threads: string;
  };
};

function ShareButton({
  href,
  label,
  className,
  children,
}: {
  href: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-white text-brand-navy shadow-card transition-colors hover:border-brand-blue/40 hover:text-brand-blue",
        className,
      )}
    >
      {children}
    </a>
  );
}

/** Threads mark (lucide has no Threads icon). */
function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2.25c-2.9 0-5.2 1.1-6.9 3.1C3.4 7.35 2.5 10.1 2.5 13.2c0 4.2 2.2 7.5 5.8 8.8.4.15.7-.1.7-.45v-1.6c-2.5.55-3.1-1.2-3.1-1.2-.4-1.05-1-1.33-1-1.33-.8-.55.06-.54.06-.54.9.06 1.37.92 1.37.92.8 1.37 2.1.97 2.62.74.08-.58.31-.97.56-1.2-2-.23-4.1-1-4.1-4.45 0-.98.35-1.78.92-2.41-.09-.23-.4-1.17.09-2.43 0 0 .75-.24 2.45.92a8.5 8.5 0 0 1 2.24-.3c.76 0 1.52.1 2.24.3 1.7-1.16 2.45-.92 2.45-.92.49 1.26.18 2.2.09 2.43.57.63.92 1.43.92 2.41 0 3.46-2.1 4.22-4.1 4.45.32.28.6.83.6 1.68v2.5c0 .35.27.6.7.45 3.6-1.3 5.8-4.6 5.8-8.8 0-3.1-.9-5.85-2.6-7.85C17.2 3.35 14.9 2.25 12 2.25Z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function BlogShareBar({
  url,
  title,
  lang,
  shareTitle,
  copyLabel,
  copiedLabel,
  labels,
}: BlogShareBarProps) {
  const [copied, setCopied] = useState(false);
  const text = title;

  async function onCopy() {
    const ok = await copyPageUrl(url);
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <aside
      className="mt-10 rounded-2xl border border-brand-border bg-white/90 p-6 shadow-card"
      aria-labelledby="blog-share-heading"
    >
      <h2
        id="blog-share-heading"
        className="text-sm font-bold uppercase tracking-wide text-brand-muted"
      >
        {shareTitle}
      </h2>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <ShareButton
          href={buildShareUrl("whatsapp", url, title, text)}
          label={labels.whatsapp}
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
        </ShareButton>
        <ShareButton href={buildShareUrl("x", url, title)} label={labels.x}>
          <XIcon className="h-4 w-4" />
        </ShareButton>
        <ShareButton
          href={buildShareUrl("facebook", url, title)}
          label={labels.facebook}
        >
          <Facebook className="h-4 w-4" aria-hidden />
        </ShareButton>
        <ShareButton
          href={buildShareUrl("linkedin", url, title)}
          label={labels.linkedin}
        >
          <Linkedin className="h-4 w-4" aria-hidden />
        </ShareButton>
        <ShareButton
          href={buildShareUrl("threads", url, title, text)}
          label={labels.threads}
        >
          <ThreadsIcon className="h-4 w-4" />
        </ShareButton>
        <button
          type="button"
          onClick={() => void onCopy()}
          className="inline-flex h-10 items-center gap-2 rounded-full border border-brand-border bg-white px-4 text-sm font-semibold text-brand-navy shadow-card transition-colors hover:border-brand-blue/40 hover:text-brand-blue"
          aria-live="polite"
        >
          {copied ? (
            <Check className="h-4 w-4 text-emerald-600" aria-hidden />
          ) : (
            <Link2 className="h-4 w-4" aria-hidden />
          )}
          {copied ? copiedLabel : copyLabel}
        </button>
      </div>
      <p className="sr-only" lang={lang === "id" ? "id" : "en"}>
        {url}
      </p>
    </aside>
  );
}