/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#10b981",
        theme: "rgb(var(--colors-theme) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
