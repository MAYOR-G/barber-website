/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0a0a0a',
          charcoal: '#151515',
          cream: '#fdfbf7',
          accent: '#C5A059', // Bronze/Muted Gold
          muted: '#8A8A8A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
