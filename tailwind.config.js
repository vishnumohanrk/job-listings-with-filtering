const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },

      colors: {
        accent: 'hsl(180, 29%, 50%)',
        primaryBg: 'hsl(180, 52%, 96%)',
        primaryText: 'hsl(180, 14%, 20%)',
        secondaryText: 'hsl(180, 8%, 52%)',
        // 'Light-Grayish-Cyan1': 'hsl(180, 31%, 95%)',
      },

      boxShadow: {
        card: '0px 15px 20px -5px rgba(13, 113, 130, 0.15)',
      },

      borderRadius: {
        5: '5px',
      },
    },
  },

  plugins: [],
};
