/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "radial-light": "repeating-radial-gradient(#0000, #f5f5f5 5px, #fff 100px)",
        "radial-dark": "repeating-radial-gradient(#fff, #1B1B1B 5px,#1B1B1B 100px)"
      },
      colors: {
        "light": "#F5F5F5",
        "dark": "#1B1B1B",
        'yellow-dark': "#fca311",
      },
      fontFamily: {
        "mont": 'Montserrat, sans-serif',
        "gil": ["gilroy", "sans-serif"]
      },
      screens: {
        "ms": "375px",
        "xs": "425px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
}