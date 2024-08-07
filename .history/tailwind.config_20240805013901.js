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
      white:'#FFFFFF'
    },
    backgroundColor:{
      btn: '#0099FF',
      services:'rgba(215, 241, 246, 0.34)',
      aboutus:'rgba(0, 153, 255, 0.04)',
      white:'#FFFFFF',
      black:'#333333',
      input:'#494949'
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

