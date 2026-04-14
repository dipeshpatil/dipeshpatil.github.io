export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        typo: "var(--color-typo)"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: [],
  safelist: [
    {pattern: /^text-[a-z]+-(100|200|300|400|500|600|700|800|900)$/},
    {pattern: /^text-(white|black|transparent|current|inherit)$/},
    {
      pattern: /^text-[a-z]+-(100|200|300|400|500|600|700|800|900)$/,
      variants: ["hover", "focus"]
    }
  ]
};
