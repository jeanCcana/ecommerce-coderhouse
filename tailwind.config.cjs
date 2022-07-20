/** @type {import('tailwindcss').Config} */
const iOSHeight = require("@rvxlab/tailwind-plugin-ios-full-height");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [iOSHeight],
};
