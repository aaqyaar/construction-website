/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter'],
        sans: ['Sans-serif'],
      },
      colors: {
        ...colors,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
