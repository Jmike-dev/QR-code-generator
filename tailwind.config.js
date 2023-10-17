/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        text: "#03000a",
        background: "#e7dbff",
        primary: "#fe103c",
        secondary: "#ecffc2",
        accent: "#01f4c7",
      },
    },
  },
  plugins: [],
};
