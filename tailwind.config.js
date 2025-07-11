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
  plugins: [],
  safelist: [
    // Keep any utility that looks like `text-blue-500`, `text-amber-300`, etc.
    {pattern: /^text-[a-z]+-(100|200|300|400|500|600|700|800|900)$/},

    // Colours that have no numeric shade (white, black, current, inherit, etc.)
    {pattern: /^text-(white|black|transparent|current|inherit)$/},

    {pattern: /^text-outline-(white|black)$/},

    // Optional: keep hover / focus variants too
    {
      pattern: /^text-[a-z]+-(100|200|300|400|500|600|700|800|900)$/,
      variants: ["hover", "focus"]
    }
  ]
};
