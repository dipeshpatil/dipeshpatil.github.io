/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e0e2ff",
        secondary: "#7a83ff",
        accent: "#fc64ab",
        typo: "#202020"
      }
    }
  },
  plugins: []
};
