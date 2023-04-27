/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1d3557',
        'primary-dark': '#1d3600',
        secondary: '#212934',
        tertiary: '#a8dadc',
        quaternary: '#457b9d',
        quinary: '#212934',
        logo: '#edf6f9',
      },
      fontFamily: {
        cedarville: ['Cedarville Cursive', 'cursive'],
        raleway: ['Raleway Dots', 'cursive'],
        digital: ['digital', 'sans-serif'],
      },
    },
  },

  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
  },
};
