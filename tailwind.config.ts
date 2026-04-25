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
        navy: "#171e19",
        sage: "#b7c6c2",
        taupe: "#9f8d8b",
        beige: "#d7c5b2",
        cyan: "#d5f4f9",
        "soft-blue": "#bbe2f5",
        charcoal: "#302b2f",
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
        anton: ["Anton", "sans-serif"],
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
        display: ["Anton", "sans-serif"]
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "bounce-slow": "bounceSlow 1.5s ease-in-out infinite",
        "fade-up": "fadeUp 1s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fadeIn 0.5s ease-out both"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" }
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" }
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" }
        }
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
      }
    }
  },
  plugins: []
};

export default config;
