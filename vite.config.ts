import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
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
});