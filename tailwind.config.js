/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/flowbite/**/*.js",
    './index.html', './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // Use 'class' for toggling dark mode
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('flowbite/plugin'),
  ],
}
