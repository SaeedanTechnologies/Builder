/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
      },
      fontFamily: {
        sans: ["Gilroy", "sans-serif"],
      },
      colors: {
        blue: { 600: "#006FF9" },
      },
    },
  },
  plugins: [],
};
