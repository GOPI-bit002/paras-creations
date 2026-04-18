import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0a0a0a",
          dark: "#141414",
          gray: "#1f1f1f",
          concrete: "#2a2a2a",
          soft: "#f5f5f5",
          gold: "#d4af37",
          goldlight: "#e8c770",
          yellow: "#f5b301"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        premium: "0 10px 40px -10px rgba(0,0,0,0.25)",
        gold: "0 10px 40px -10px rgba(212,175,55,0.45)"
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
        "hero-gradient":
          "linear-gradient(135deg, #0a0a0a 0%, #1f1f1f 50%, #0a0a0a 100%)"
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
        "fade-in": "fadeIn 0.5s ease-out both"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      }
    }
  },
  plugins: []
};

export default config;
