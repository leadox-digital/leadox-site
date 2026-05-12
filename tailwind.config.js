/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        'gold-dark': '#B8962E',
        'gray-dark': '#1A1A1A',
        black: '#0D0D0D',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      spacing: {
        'section-y': '80px',
        'section-y-mobile': '40px',
        'section-x': '24px',
        'section-x-mobile': '16px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212,175,55,0.5)' },
          '50%': { boxShadow: '0 0 0 12px rgba(212,175,55,0)' },
        },
      },
    },
  },
  plugins: [],
};
