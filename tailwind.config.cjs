// tailwind.config.cjs
const themes = require('daisyui/src/theming/themes')

module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: { extend: {} },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        luxury: {
          ...themes['luxury'],
          /* Byt secondary (hex eller HSL med mellanslag) */
          secondary: '#D3B60A',
          'secondary-content': '#1a1500', // kontrasttext
        },
      },
      'cupcake',
      'dark',
      'light',
    ],
  },
}