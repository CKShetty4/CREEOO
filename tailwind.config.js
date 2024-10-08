/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00BCD4",
          100: "#B2EBF2",
          200: "#00BCD4",
          300: '#0097A7',
        },
        secondary: '#FF9800',
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
          200: "#757575"
        },
        pink: {
          DEFAULT: "#FC537C",
          100: "#FC537C",
          200: "#F93866",
          300: "#F93564",
          400: "#E25060"
        },
        Neon: '#43DDB7'
      },
      fontFamily: {
        Love:["Love","sans-serif"],
        HowdyParty:["HowdyParty","Impact"],
        RogshireDemo:["RogshireDemo","sans-serif"],
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],

}

