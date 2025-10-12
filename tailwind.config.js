import daisyui from 'daisyui'
import themes from 'daisyui/src/theming/themes.js'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'base-primary':
          'linear-gradient(135deg,hsl(var(--b1)) 0%,hsl(var(--p)) 100%)',
      },
      fontFamily: {
        onest: ['"Onest"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        luxury: {
          ...themes['[data-theme=luxury]'],
          primary: '#fffcfe',
          secondary: '#f7d00c',
          'base-100': '#010f17',
        },
      },
      'synthwave',
      'cupcake',
      'dark',
      'light',
      'nord',
      'forest',
      'valentine',
      {
        acid: {
          ...themes['[data-theme=acid]'],
          primary: '#010f17',
          secondary: '#998f03',
          accent: '#00f5ff',
          'base-100': '#a7c3cc',
        },
      },
    ],
  },
}
