/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 15px rgba(255, 255, 255, 0.07), 0 25px 50px -12px rgba(255, 255, 255, 0.25)',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      }
      
    },
  },
  plugins: [],
}
