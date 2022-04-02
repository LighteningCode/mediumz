module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': {'max': '767px'},
      'laptop': {'max': '1024px'},
      'desktop': {'max': '1280px'},
      'large-screen':{'max': '1536px'}
    },
    extend: {
      colors:{
        "red-orange":"#F24D2E"
      }
    }
  },
  plugins: [],
}
