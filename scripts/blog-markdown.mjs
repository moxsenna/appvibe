/** Shared lightweight MD → HTML for blog fallback compiler */

export function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Inline **bold**, *italic*, [text](url) — input escaped first */
export function inlineMarkdown(raw) {
  let t = escapeHtml(raw);
  t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  t = t.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  t = t.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_m, label, href) =>
      `<a href="${escapeHtml(href)}">${label}</a>`,
  );
  return t;
}

function waTemplateHtml(text) {
  const body = inlineMarkdown(text.trim());
  return `<div class="blog-wa-template" role="figure" aria-label="Contoh pesan WhatsApp">
  <div class="blog-wa-template__bar">
    <span class="blog-wa-template__dot" aria-hidden="true"></span>
    <span class="blog-wa-template__title">Pesan siap kirim</span>
  </div>
  <p class="blog-wa-template__bubble">${body}</p>
</div>`;
}

function codeFenceHtml(code, lang) {
  const trimmed = code.replace(/\n$/, "").trim();
  if (!lang || lang === "wa" || lang === "text") {
    return waTemplateHtml(trimmed);
  }
  const escaped = escapeHtml(trimmed);
  return `<pre class="blog-code"><code>${escaped}</code></pre>`;
}

function mdBlocksToHtml(md) {
  const blocks = md.split(/\n\n+/);
  const out = [];

  for (let block of blocks) {
    block = block.trim();
    if (!block) continue;

    if (block.startsWith("### ")) {
      out.push(`<h3>${inlineMarkdown(block.slice(4))}</h3>`);
      continue;
    }
    if (block.startsWith("## ")) {
      out.push(`<h2>${inlineMarkdown(block.slice(3))}</h2>`);
      continue;
    }

    const lines = block.split("\n");

    if (lines.every((l) => l.startsWith("- [ ] "))) {
      out.push(
        `<ul class="blog-checklist">${lines
          .map((l) => `<li>${inlineMarkdown(l.replace(/^- \[ \] /, ""))}</li>`)
          .join("")}</ul>`,
      );
      continue;
    }

    if (lines.every((l) => l.startsWith("- "))) {
      out.push(
        `<ul>${lines
          .map((l) => `<li>${inlineMarkdown(l.replace(/^- /, ""))}</li>`)
          .join("")}</ul>`,
      );
      continue;
    }

    if (lines.every((l) => /^\d+\.\s/.test(l))) {
      out.push(
        `<ol>${lines
          .map((l) =>
            `<li>${inlineMarkdown(l.replace(/^\d+\.\s*/, ""))}</li>`,
          )
          .join("")}</ol>`,
      );
      continue;
    }

    if (lines.length === 1 && block.startsWith("**") && block.endsWith("**")) {
      out.push(`<p><strong>${inlineMarkdown(block.slice(2, -2))}</strong></p>`);
      continue;
    }

    out.push(`<p>${inlineMarkdown(block.replace(/\n/g, " "))}</p>`);
  }

  return out.join("\n");
}

/** Full document: extract ``` fences first (even without blank lines around them). */
export function mdToHtml(md) {
  const fenceRe = /```(\w*)\r?\n([\s\S]*?)```/g;
  const segments = [];
  let last = 0;
  let match;

  while ((match = fenceRe.exec(md)) !== null) {
    if (match.index > last) {
      segments.push({
        kind: "md",
        text: md.slice(last, match.index),
      });
    }
    segments.push({
      kind: "fence",
      lang: match[1],
      code: match[2],
    });
    last = match.index + match[0].length;
  }

  if (last < md.length) {
    segments.push({ kind: "md", text: md.slice(last) });
  }

  if (segments.length === 0) {
    return mdBlocksToHtml(md);
  }

  return segments
    .map((seg) =>
      seg.kind === "fence"
        ? codeFenceHtml(seg.code, seg.lang)
        : mdBlocksToHtml(seg.text),
    )
    .filter(Boolean)
    .join("\n");
}