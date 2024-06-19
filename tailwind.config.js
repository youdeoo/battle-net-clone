/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        almostTransparent: 'rgba(255, 255, 255, 10%)',
        almostWhite: '#BDBEC1',
        almostWhiteSecond: '#D9DADB',
        almostWhiteThird: '#DCDCDD',
        darkBlue: '#15171E',
        mediumBlue: '#1A1C23',
        lightBlue: '#0074E0',
        lighterBlue: '#158EFF',
        lightestBlue: '#47A6FF',
        gray: '#88898C',
        mediumGray: "#23252A",
        lightGrayBackground: '#303237',
        lightGray: '#C2C2C4',
        borderGray: '#2F3136',
        lighterBorderGray: '#67686B',
        lightestBorderGray: '#696B6F',
        yellow: '#FFB400'
      },
      keyframes: {
        displayRotateX: {
          '0%': {
            transform: 'rotateX(-15deg)'
          },
          '100%': {
            transform: 'rotateX(0)'
          }
        },
        hideRotateX: {
          '0%': {
            transform: 'rotateX(0)'
          },
          '100%': {
            transform: 'rotateX(-15deg)'
          }
        },
        infiniteCarousel: {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(calc(-100% - 2rem))'
          }
        }
      }
    },
  },
  plugins: [],
}