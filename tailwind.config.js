/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        title: ["Sora", "sans-serif"],
      },
      colors:{
        primaryLightBlue:"#EBFEFF",
        primaryDarkBlue:"#457B9D"
      }
    },
  },
  plugins: [],
}

