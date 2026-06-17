import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

const GTM_SNIPPET_RE = /^GTM-[A-Z0-9]+$/i;

function gtmIndexHtmlPlugin(gtmId: string, enabled: boolean): Plugin {
  return {
    name: "appvibe-gtm-html",
    transformIndexHtml(html) {
      if (!enabled || !GTM_SNIPPET_RE.test(gtmId)) return html;

      const headSnippet = `<!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');</script>
    <!-- End Google Tag Manager -->`;

      const bodySnippet = `<!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->`;

      if (html.includes("googletagmanager.com/gtm.js")) return html;

      return html
        .replace("<head>", `<head>\n    ${headSnippet}`)
        .replace("<body>", `<body>\n    ${bodySnippet}`);
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const gtmId = (env.VITE_GTM_ID ?? "").trim();
  const analyticsOn = env.VITE_ENABLE_ANALYTICS === "true";

  return {
    plugins: [react(), gtmIndexHtmlPlugin(gtmId, analyticsOn)],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      target: "es2020",
      cssCodeSplit: true,
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (!id.includes("node_modules")) return undefined;
            if (id.includes("@supabase")) return "supabase-vendor";
            if (id.includes("react-router")) return "router-vendor";
            if (
              id.includes("react-dom") ||
              id.includes("react/") ||
              id.includes("scheduler")
            ) {
              return "react-vendor";
            }
            return "vendor";
          },
        },
      },
    },
  };
});