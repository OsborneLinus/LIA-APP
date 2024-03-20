/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter']
      },
      colors: {
        'gothenburg-grey' : '#4f4f4f',
        'bananpiren-yellow': '#FCFA58;',
        'yrgo-red': '#F52A3B'
      },
    },
  },
  plugins: [],
};
