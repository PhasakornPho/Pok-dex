/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mini: "550px",
        // => @media (min-width: 450px) { ... }
        small: "420px",
        // => @media (min-width: 450px) { ... }
      },
    },
  },
  plugins: [require("./node_modules/tailwind-scrollbar")],
};
