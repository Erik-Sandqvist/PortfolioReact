import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        luxury: {
          ...require("daisyui/src/theming/themes")["[data-theme=luxury]"],
          primary: "#fffcfe",
          secondary: "#0b145e", // din secondary-färg
          // "secondary-content": "#0b0b0b", // valfritt: textfärg på secondary
          "base-100": "#010f17",
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
          ...require("daisyui/src/theming/themes")["[data-theme=acid]"],
          primary: "#010f17",
          secondary: "#0b145e", // din secondary-färg
          accent: "#00f5ff",
          neutral: "#1f2937",
          "base-100": "#92bed4",
          // "secondary-content": "#ffffff",
        },
      },]
  }
}
