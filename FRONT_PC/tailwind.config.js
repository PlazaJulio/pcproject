/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          'from': { opacity: 0, transform: 'translateY(0)' },
          'to': { opacity: 1, transform: 'translateY(-.5rem)' }
        },
        fadeOut: {
          'from': { opacity: 1, transform: 'translateY(-.5rem)' },
          'to': { opacity: 0, transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn .5s ease-in-out',
        fadeOut: 'fadeOut .3s ease-in-out'
      }
    },
  },
  plugins: [],
}

