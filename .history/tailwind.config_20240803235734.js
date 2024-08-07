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
      txt:'#999999',
    },
    backgroundColor:{
      btn: '#0099FF',
      services:'rgba(215, 241, 246, 0.34)'
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

