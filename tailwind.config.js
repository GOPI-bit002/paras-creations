/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f6ff',
          100: '#e7ebff',
          200: '#c8d1ff',
          300: '#a3b0ff',
          400: '#7f8cff',
          500: '#5b67f0',
          600: '#4a53d1',
          700: '#3a41a8',
          800: '#2c327f',
          900: '#1f2358',
        },
        accent: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(91, 103, 240, 0.25)',
        card: '0 20px 40px -20px rgba(31, 35, 88, 0.2)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #e7ebff 0%, #f3e8ff 50%, #ffffff 100%)',
        'brand-gradient': 'linear-gradient(135deg, #5b67f0 0%, #a855f7 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
