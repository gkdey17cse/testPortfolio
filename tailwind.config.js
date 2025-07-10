// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./views/*.ejs",
    "./public/javascript/*.js"
  ],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        amber: colors.yellow,
        red: colors.orange,
        lime: colors.lime,
        indigo: colors.sky,
        purple: colors.purple,
        cyan: colors.cyan,
        rose: colors.rose,
        green: colors.green,
        blue: colors.indigo
      }
    }
  },
  plugins: [],
};
