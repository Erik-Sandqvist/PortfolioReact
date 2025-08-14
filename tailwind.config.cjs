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
            ...themes.luxury,
            'base-100': '#0b0c11',
            'base-200': '#11141b',
            'base-300': '#181d26'
          },
      },
      'cupcake',
      'dark',
      'light',
    ],
  },
}