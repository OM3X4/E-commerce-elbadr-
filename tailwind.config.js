/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        sans: ["Arial" , "san-serif"],
      },
      colors : {
        primary : "#fed430",
        second : "#fea000",
        foot : "#3a4754"
      }

    },
  },
  plugins: [],
}
