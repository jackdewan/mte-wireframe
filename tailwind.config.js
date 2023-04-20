const tokens = require("./style-dictionary/build/js/tokens");
const colorTokens = Object.values(tokens.color);
const colors = new Object();
colorTokens.forEach((el) => {
  colors[[el.attributes.type]] = el.value;
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Toggle dark-mode based on class or data-mode=”dark”
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    // colors, -- add design token colors
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        cream: "#EDE5C7",
      },
      fontFamily: {
        neutra2: ["NEUTRA2"],
      },
    },
  },
  plugins: [],
};
