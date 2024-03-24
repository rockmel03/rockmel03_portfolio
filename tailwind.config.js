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
        "radial-dark": "repeating-radial-gradient(#fff, #000 5px,#0000 100px)"
      },
      colors: {
        "light": "#F5F5F5",
        "dark": "#1B1B1B",
        'yellow-dark': "#fca311",
      },
      fontFamily: {
        "mont": 'Montserrat, sans-serif',
        "gil": ["gilroy", "sans-serif"]
      }
    },
  },
  plugins: [],
}