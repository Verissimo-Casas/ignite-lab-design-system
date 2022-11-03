/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 22,
        '2xl': 32,
      },
      
      colors: {
        black: '#000',
        with: '#fff',
        
        grey: {
          900: '#121214',
          800: '#202024',
          400: '#7C7C8A',
          200: '#C4C4CC',
          100: '#E1E1E6',
        },

        cyan: {
          500: '#81D8F7',
          300: '#9BE1FB',
        }
        
      },
      fontSize: {
        sans: 'Inter, sans-serif',
      }
    },
  },
  plugins: [],
}