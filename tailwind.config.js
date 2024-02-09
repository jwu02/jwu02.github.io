/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textUnderlineOffset: {
        'lg': '1rem'
      },
      fontFamily: {
        'poppins': ['Poppins'],
      }
    },
  },
  plugins: [],
}

