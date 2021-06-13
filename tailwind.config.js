const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['./*.html',
  './**/*.html',
],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'background-header': "url('images/desktop/image-header.jpg')",
       }),
       colors:{
        'blue-header': 'rgb(63, 192, 255)',
        'green-footer': 'rgb(144, 212, 197)',
        'green-footer-content': 'rgb(75, 145, 130)'
      },
    },
    fontFamily: {
      'sans':['Barlow', ...defaultTheme.fontFamily.sans],
      'serif':['Fraunces', ...defaultTheme.fontFamily.serif]
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
