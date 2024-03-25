/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        imageChange: {
          "0%": { backgroundImage: "url('src/assets/Heart.svg')" },
          "50%": { backgroundImage: "url('src/assets/Skull.svg')" },
          "100%": { backgroundImage: "url('src/assets/Heart.svg')" },
        },
      },
      animation: {
        imageChange: "imageChange 3s infinite",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        "gothenburg-grey": "#4f4f4f",
        "bananpiren-yellow": "#FCFA58;",
        "yrgo-red": "#F52A3B",
        "badboy-gray": "#BDBDBD",
      },
    },
  },
  plugins: [],
};
