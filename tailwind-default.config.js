const autoprefixer = require('autoprefixer');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./public/**/*.{html,js,ts}",
            "./src/**/*.{html,js,ts}"],
  theme: {
    extend: {},
  },
  plugins:[], 
}

