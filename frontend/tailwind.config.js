/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['"Outfit"', 'cursive']
      },
      backgroundImage: {
        'header': "url('/header.jpg')",
      },

    },
  },
  plugins: [require("daisyui")],
}
