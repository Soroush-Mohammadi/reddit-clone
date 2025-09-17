/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        richBlack: '#111827', // gray-900
        gunMetal: '#1f2937', // gray-800
        seaSalt: '#f9fafb', // gray-100
        cadetGray: '#9ca3af', // gray-400
        persimmon: '#ea580c', // orange-600
        royalBlue: '#2563eb' // blue-600
      }
    }
  },
  plugins: []
};
