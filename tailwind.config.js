import TailwindAnimated from 'tailwindcss-animated';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-coffee': '#161513',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [TailwindAnimated],
};
