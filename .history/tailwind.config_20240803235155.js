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
      title:'#333333',
    },
    backgroundColor:{
      btn: '#0099FF',
      services:'#D7F1F6'
    },
    fontFamily:{
      abc:["Poppins","sans-serif"]
    },
    borderColor:{
      btn: '#0099FF',
    }
  },
  plugins: [],
}

