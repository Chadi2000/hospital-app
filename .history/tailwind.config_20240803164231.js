/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    textColor:{
      btn: '#0099FF',
    },
    backgroundColor:{
      btn: '#0099FF',
    },
    fontFamily:{
      abc:["Poppins","sans-serif"]
    }
  },
  plugins: [],
}

