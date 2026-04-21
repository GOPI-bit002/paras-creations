import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium cafe palette
        brand: {
          green: "#0b4d2c",
          "green-dark": "#062e1a",
          "green-soft": "#14663c",
          cream: "#f6efe0",
          "cream-soft": "#fbf6ea",
          brown: "#6b3b1a",
          "brown-dark": "#3a1f0c",
          gold: "#c9a24b",
          "gold-soft": "#e8c67c",
          "off-white": "#fffaf0",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(11,77,44,0.18)",
        card: "0 20px 40px -20px rgba(11,77,44,0.25)",
        glow: "0 0 40px rgba(201,162,75,0.35)",
      },
      backgroundImage: {
        "cafe-radial":
          "radial-gradient(1200px 600px at 10% -10%, rgba(201,162,75,0.18), transparent 60%), radial-gradient(900px 500px at 110% 10%, rgba(11,77,44,0.12), transparent 60%)",
        "gold-gradient":
          "linear-gradient(135deg, #e8c67c 0%, #c9a24b 50%, #8d6b25 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0) rotate(0)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
