/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-brown': '#1c0f06',      // Coklat tua (dominant background)
        'accent-gold': '#D4AF37',       // Kuning tua / gold (aksen dan heading)
        'secondary-green': '#2E4D2E',   // Hijau tua (secondary accent)
      }
    },
  },
  plugins: [],
}