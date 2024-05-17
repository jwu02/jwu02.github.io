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
      borderRadius: {
        '4xl': '2rem'
      },
      fontFamily: {
        'poppins': ['Poppins'],
      },
      fontSize: {
        'xxs': ['0.68rem', '0.93rem']
      },
      width: {
        'a4': '21cm'
      },
      height: {
        'a4': '29.7cm'
      },
      keyframes: {
        skillProgressBar: {
          '0%': { width: '0', opacity: '0'},
          '100%': { opacity: '1' }
        }
      },
      animation: {
        skillProgressBar: 'skillProgressBar 2s ease-in-out forwards'
      },
      gridTemplateColumns: {
        modulesAutoGrid: "repeat(auto-fit, minmax(min(17rem, 100%), 1fr))"
      }
    },
  },
  plugins: [],
}

