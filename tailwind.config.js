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
      backgroundImage: {
        'deco-top-yellow':
          "url('/assets/decoration/mobile top decoration yellow.png')",
        'deco-top': "url('/assets/decoration/mobile top decoration.png')",
        'deco-bottom-yellow':
          "url('/assets/decoration/mobile bottom decoration yellow.png')",
        'deco-bottom': "url('/assets/decoration/mobile bottom decoration.png')",
      },
      screens: {
        'h-xs': {raw: '(min-height: 580px)'},
        'h-s': {raw: '(min-height: 690px)'},
        'max-sm': {max: '640px'},
      },
    },
  },
  plugins: [],
};
