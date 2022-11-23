/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{jsx,js,ts,tsx,css}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      bg_clr: "#00040a",
      bg_clr_2: "#08101c",
      bg_clr_3: "#000814",
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
        require('tailwind-scrollbar-hide'),
        require('@tailwindcss/line-clamp'),


  ],
}
