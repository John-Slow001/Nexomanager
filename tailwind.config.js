/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nexo: {
          blue: '#1e3a8a',
          slate: '#334155'
        }
      }
    },
  },
  plugins: [],
};