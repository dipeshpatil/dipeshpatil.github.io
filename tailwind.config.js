/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff", // white
        secondary: "#EEFF41", // soft mint
        accent: "#59cd90", // lighter burnt orange
        edge: "#9c96ff", // pastel electric blue
        neutral: "#4a4a4a", // mid gray for text
        black: "#1a1a1a" // charcoal black
      }
    }
  },
  plugins: []
};
