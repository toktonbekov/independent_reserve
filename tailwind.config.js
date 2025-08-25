/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '.dark-mode'],
  content: [
    './web/app/components/**/*.{vue,js,ts}',
    './web/app/layouts/**/*.{vue,js,ts}',
    './web/app/pages/**/*.{vue,js,ts}',
    './web/app/entities/**/*.{vue,js,ts}',
    './web/app/widgets/**/*.{vue,js,ts}',
    './web/app/features/**/*.{vue,js,ts}',
  ],
  theme: {
    screens: {
      sm: '420px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
      extra: '1441px',
    },

    colors: ({ colors }) => ({
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      'ir-primary': '#fe9a01',
      'ir-secondary': '#1e272e',
    }),

    extend: {},
  },
  plugins: [],
}
