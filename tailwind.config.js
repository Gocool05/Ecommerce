/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Ensure this is correct
  theme: {
    extend: {
      colors: {
        red: '#4e2a1b',
        yellow: '#FFEEA9',
        white: '#FFEEEE',
        black: '#560000',
        green: '#399918',
      },
      backgroundImage:{
        'Pattern':"url('/public/Assests/homeBg.jpg')",
      },
      fontFamily: {
        Arvo: ['Arvo', 'serif'],
        Serif: ['serif'],
      },
      animation: {
          marquee: 'marquee 15s linear infinite',
          marquee2: 'marquee2 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
    },
    

  },
  plugins: [],
};
