/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_includes/**/*.html", "./_layouts/**/*.html", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Safira March', 'serif'],
        body: ['Glacial Indifference', 'sans-serif'],
      },
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


