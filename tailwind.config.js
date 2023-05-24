/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        calistoga: 'var(--calistoga)',
        outfit: 'var(--outfit)',
      },
      screens: {
        'h-xs': {raw: '(min-height: 580px)'},
        'h-s': {raw: '(min-height: 690px)'},
      },
    },
  },
  plugins: [],
};
