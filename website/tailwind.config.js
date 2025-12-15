/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: {
            light: '#88C0C0',
            DEFAULT: '#5F9EA0', // Main teal
            dark: '#2F4F4F',
          },
          gold: {
            light: '#FFE599',
            DEFAULT: '#F4C430', // Main gold/yellow
            dark: '#B8860B',
          },
          surface: '#F5F9F9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
