/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        church: {
          purple: '#6B21A8',
          'purple-light': '#9333EA',
          'purple-dark': '#4C1D95',
          gold: '#D4AF37',
          cream: '#FAFAF9',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        lato: ['Lato', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
      },
    },
  },
  plugins: [],
}
