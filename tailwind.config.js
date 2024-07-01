
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'calculator-bg': '#1f2937',
        'button-bg': '#374151',
        'button-hover': '#4b5563',
        'button-operator': '#f97316',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
