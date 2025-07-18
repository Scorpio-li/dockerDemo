/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{ts,tsx}', './src/**/*.{css,scss}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px',
        '7xl': '72px',
      },
      textColor: {
        666: '#666',
      },
      backgroundColor: {
        666: '#666',
      },
    },
  },
  plugins: [],
};

