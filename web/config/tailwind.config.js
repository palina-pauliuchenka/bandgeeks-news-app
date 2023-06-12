/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'chomsky': ['chomsky', 'sans-serif'],
        'gruppo': ['gruppo', 'sans-serif'],
      }},
  },
  plugins: [],
}

