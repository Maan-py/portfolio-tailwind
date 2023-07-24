/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#64748b",
        dark: "#0f172a",
        cream: "#fbf1c5",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
