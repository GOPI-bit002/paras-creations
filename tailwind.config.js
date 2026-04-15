/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        beige: "#EFE7DA",
        sand: "#E4D9C6",
        softblue: "#CFDDE8",
        midblue: "#6E8AA6",
        ink: "#22303C",
        muted: "#6B7280",
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(34, 48, 60, 0.12)",
        card: "0 20px 40px -15px rgba(34, 48, 60, 0.18)",
        premium:
          "0 30px 60px -25px rgba(34, 48, 60, 0.28), 0 6px 12px -6px rgba(34, 48, 60, 0.08)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #FAF7F2 0%, #EFE7DA 45%, #CFDDE8 100%)",
        "section-fade":
          "linear-gradient(180deg, #FFFFFF 0%, #FAF7F2 100%)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
