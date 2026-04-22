import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        sand: "#F1ECE3",
        forest: {
          DEFAULT: "#1F3D2B",
          dark: "#16301F",
          light: "#2C5A3F",
        },
        gold: {
          DEFAULT: "#C8A96A",
          light: "#E4CFA1",
          dark: "#A0824B",
        },
        charcoal: "#1C1C1E",
        mist: "#E8E2D6",
      },
      fontFamily: {
        serif: ["var(--font-display)", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(28,28,30,0.12)",
        card: "0 20px 50px -20px rgba(28,28,30,0.18)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
