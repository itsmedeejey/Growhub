/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],


      },
      colors: {
        gbrown: "#693D14",
        rblue:"#2A3663",
        beige:"#FAF6E3"
      }
    },
  },
  plugins: [],
}