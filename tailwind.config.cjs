/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'leaguespartan': ['leaguespartan', 'sans-serif'],
        'pacifico': ['pacifico', 'sans-serif']
      },
      colors: {
        'purple': '#8807c9',
        'lightWhite' : "#D9D9D9"
      },
    },
  },
  plugins: [],
}
