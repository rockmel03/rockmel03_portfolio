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
        "radial-light": "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)",
        "radial-dark": "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 40px)",
        "radial-light-sm": "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)",
        "radial-dark-sm": "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 60px)",
        "radial-light-md": "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)",
        "radial-dark-md": "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 5px,#1b1b1b 80px)",
        "radial-light-lg": "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)",
        "radial-dark-lg": "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)",
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