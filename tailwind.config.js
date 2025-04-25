/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#eef4ff',
          100: '#d9e6ff',
          200: '#bcd4ff',
          300: '#8dbaff',
          400: '#5894ff',
          500: '#3b74fc',
          600: '#2558f2',
          700: '#1e45e0',
          800: '#1f39b5',
          900: '#1e348e',
          950: '#172255',
        },
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};