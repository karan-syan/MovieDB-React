/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{jsx,js,ts,tsx,css}"],
  theme: {
    extend: {},

  },
  plugins: [
    require('tw-elements/dist/plugin'),
        require('tailwind-scrollbar-hide'),
        require('@tailwindcss/line-clamp'),


  ],
}
