/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#252E56',
        secondary: '#98D1E6',
        secondaryDark: '#497DAE',
        backgroundDark1: '#30313a',
        backgroundDark2: '#21222D',
        backgroundDark3: '#171821',
        textDashboard: '#a9dfd8'
      },
      animation: {
        slideDown: 'slideDown 1.6s',
        slideLeft: 'slideLeft 1s',
        
    },
    keyframes: {
      slideDown:{
        '0%':{
          transform: 'translateY(-25rem)',
        },
        '100%':{
          transform: 'translateY(0rem)'
        }
      },
      slideLeft:{
        '0%':{
          transform: 'translatex(-7rem)',
          opacity:'0%'
        },
        '25%':{
          opacity:'0%'
        },
        '55%':{
          opacity:'50%'
        },
        '100%':{
          transform: 'translatex(0rem)',
          opacity:'100%'
        }
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
    }
  },
  plugins: [],
}
