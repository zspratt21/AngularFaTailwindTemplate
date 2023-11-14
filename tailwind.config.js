/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  darkMode: 'class',
  mode: 'jit',
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1921px',
      },
    },
  },
  plugins: [],
}

