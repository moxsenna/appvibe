import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        av: {
          canvas: "#F6F7F8",
          surface: "#FFFFFF",
          ink: "#12161B",
          text: "#3A3F45",
          secondary: "#4B5057",
          muted: "#6B6F76",
          border: "#DCDEE1",
          "border-soft": "#E6E8EA",
          signal: "#4B7F88",
          "signal-on-dark": "#7FB3BC",
          dark: "#12161B",
          "dark-border": "#2C3238",
          "dark-body": "#D5D9DD",
          "dark-muted": "#8F959C",
        },
        brand: {
          navy: "#0F172A",
          blue: "#2563EB",
          violet: "#7C3AED",
          cyan: "#06B6D4",
          light: "#F8FAFC",
          muted: "#64748B",
          border: "#E2E8F0",
          dark: "#111827",
        },
        semantic: {
          success: "#16A34A",
          warning: "#F59E0B",
          danger: "#DC2626",
          info: "#0284C7",
        },
      },
      fontFamily: {
        display: ["Newsreader", "Georgia", "serif"],
        sans: [
          "Public Sans",
          "Plus Jakarta Sans",
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(15 23 42 / 0.06), 0 1px 2px -1px rgb(15 23 42 / 0.06)",
        "card-hover":
          "0 10px 25px -5px rgb(15 23 42 / 0.08), 0 4px 6px -4px rgb(15 23 42 / 0.04)",
      },
      backgroundImage: {
        "cta-gradient": "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      maxWidth: {
        container: "85rem",
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 6vw, 4.875rem)", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.125rem, 4.5vw, 3.25rem)", { lineHeight: "1.06", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.875rem, 3.4vw, 2.875rem)", { lineHeight: "1.08", letterSpacing: "-0.01em" }],
      },
    },
  },
  plugins: [],
} satisfies Config;