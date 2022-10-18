const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bright-green": "#00FFA3",
        "bright-red": "#FF4D4D",
        "custom-blue": {
          100: "#737BAE",
          500: "#5A5F7D",
          900: "#14172B",
        },
      },
      fontFamily: {
        tomorrow: ["Tomorrow", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
