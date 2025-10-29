/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_includes/**/*.html", "./_layouts/**/*.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#4ED1D1",
        secondary: "#A41E22",
        accent: "#FFFFFF",
        neutral: "#002C3E",
        background: "#EAF9F9",
      },
    },
  },
  plugins: [],
};
