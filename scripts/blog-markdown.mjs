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

export function mdToHtml(md) {
  const blocks = md.split(/\n\n+/);
  const out = [];

  for (let block of blocks) {
    block = block.trim();
    if (!block) continue;

    if (block.startsWith("```")) {
      const fence = block.match(/^```(\w*)\n([\s\S]*)```$/);
      if (fence) {
        const code = escapeHtml(fence[2].replace(/\n$/, ""));
        out.push(`<pre class="blog-code"><code>${code}</code></pre>`);
        continue;
      }
    }

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

    if (lines.length === 1 && (block.startsWith("**") && block.endsWith("**"))) {
      out.push(`<p><strong>${inlineMarkdown(block.slice(2, -2))}</strong></p>`);
      continue;
    }

    out.push(`<p>${inlineMarkdown(block.replace(/\n/g, " "))}</p>`);
  }

  return out.join("\n");
}