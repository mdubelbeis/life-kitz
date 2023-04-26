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
        secondary: '#212934',
        tertiary: '#f1faee',
        quaternary: '#457b9d',
        quinary: '#000',
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
