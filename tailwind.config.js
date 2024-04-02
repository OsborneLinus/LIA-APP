/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
const svgToDataUri = require("mini-svg-data-uri");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // gridTemplateColumns: {
      //   // Define a custom grid layout
      //   custom: "1fr 2fr", // 1/3 and 2/3 widths
      // },
      boxShadow: {
        "3xl": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      keyframes: {
        imageChange: {
          "0%": { backgroundImage: "url('public/assets/Heart.svg')" },
          "50%": { backgroundImage: "url('public/assets/Skull.svg')" },
          "100%": { backgroundImage: "url('public/assets/Heart.svg')" },
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
        "input-grey": "#f2f2f2",
        "asphalt-grey": "#333",
        "badboy-gray": "#BDBDBD",
        "button-blue": "#001A52",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(({ addComponents }) => {
      const arrowOps = {
        "background-image": `url("${svgToDataUri(
          `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_432_403" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect width="24" height="24" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_432_403)">
          <path d="M12.0001 14.7019L6.69238 9.39422L7.40008 8.68652L12.0001 13.2865L16.6001 8.68652L17.3078 9.39422L12.0001 14.7019Z" fill="black"/>
          </g>
          </svg>`
        )}")`,
      };
      addComponents({
        select: arrowOps,
        ".form-select": arrowOps,
      });
    }),
  ],
};
