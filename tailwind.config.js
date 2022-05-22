const { m } = require("framer-motion");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {'sans':'Open Sauce Sans'},
    colors: {
      'blue': '#00d4a8',
      'orange': '#ffaa17',
      'white': '#fff',
      'transparent':'transparent'
    },
    extend: {},
  },
  plugins: [],
}