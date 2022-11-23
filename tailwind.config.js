/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{jsx,js,ts,tsx,css}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      bg_clr: "#000814"
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
        require('tailwind-scrollbar-hide')

  ],
}
