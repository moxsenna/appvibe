import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
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
        sans: [
          "Plus Jakarta Sans",
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
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
        glow: "0 0 40px -8px rgb(37 99 235 / 0.35)",
        "glow-cyan": "0 0 48px -12px rgb(6 182 212 / 0.45)",
        "glow-violet": "0 0 48px -12px rgb(124 58 237 / 0.4)",
        glass: "0 8px 32px 0 rgb(15 23 42 / 0.12)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0F172A 0%, #1E3A8A 45%, #4C1D95 100%)",
        "hero-mesh":
          "radial-gradient(ellipse 65% 50% at 12% 6%, rgba(37,99,235,0.5) 0%, transparent 48%), radial-gradient(ellipse 50% 40% at 88% 12%, rgba(124,58,237,0.42) 0%, transparent 46%), radial-gradient(ellipse 40% 30% at 50% 92%, rgba(6,182,212,0.22) 0%, transparent 48%), linear-gradient(168deg, #020617 0%, #030712 30%, #0B1120 60%, #0F172A 100%)",
        "cta-gradient": "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      maxWidth: {
        container: "80rem",
      },
    },
  },
  plugins: [],
} satisfies Config;