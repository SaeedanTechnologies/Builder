/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      spacing: {
        10: "4.5rem",
      },
      colors: {
        blue: { 600: "#006FF9" },
      },
    },
  },
  plugins: [],
};
