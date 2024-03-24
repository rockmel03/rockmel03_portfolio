/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light": "#F5F5F5",
        "dark": "#1B1B1B",
        'yellow-dark' : "#fca311",
      },
      fontFamily: {
        "mont": 'Montserrat, sans-serif',
        "gil": ["gilroy", "sans-serif"]
      }
    },
  },
  plugins: [],
}