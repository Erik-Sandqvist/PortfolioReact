// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme-bg': '#0b3b39',
        'theme-text': '#FFEBD0',
        'theme-highlight': '#D3B60A',
      },
    },
  },
  plugins: [],
};
