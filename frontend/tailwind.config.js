/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B0D10',
        secondary: '#212934',
        tertiary: '#C4C7C7',
        quaternary: '#66FCF2',
        quinary: '#45A29F',
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
