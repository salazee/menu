const autoprefixer = require('autoprefixer');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./public/*.{html,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: {
    tailwindcss:{},
    autoprefixer:{},
  }
}

