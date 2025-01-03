/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': 'rgba(108, 99, 255, 1)',
        'purple-light': 'rgba(108, 99, 255, 0.4)',
        'purple-dark': 'rgba(83, 76, 194, 1)',
        'purple-light-2': 'rgba(108, 99, 255, 0.2)',
        'purple-text': 'rgba(195, 193, 229, 1)',
        'light': 'rgba(247, 247, 247, 1)',
        'light-dark': 'rgba(255, 255, 255, 0.4)',
        'grey': 'rgba(102, 102, 102, 1)',
        'dark': 'rgba(37, 37, 37, 1)',      
      },
      boxShadow: {
        'purple-cover': '0 0 0 3px rgba(108, 99, 255, 0.4)',
        'purple-light-cover': '0 0 0 3px rgba(108, 99, 255, 1)',
        'purple': '0 0 5px 0 rgba(108, 99, 255, 0.4)',
        'light-dark-cover': '0 0 0 3px rgba(255, 255, 255, 0.4)'
      },
      fontFamily: {
        kanit: 'Kanit',
      }
    },
  },
  plugins: [],
}
