/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm:'480px',
        md:'768px',
        lg:'976px',
        xl:'1440px',
        // 'widescren': { 'raw': '(min-aspet-ratio:3/2)'},
        // 'tallscreen':{ 'raw': '(max-aspect-ratio:13/20)'},
      },
    },
  },
  plugins: [],
}

