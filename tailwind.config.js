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
      backgroundColor: {
        'primary-yellow': '#FFD235',
        'primary-white': '#F8EFE8',
        'primary-orange': '#E54126',
      },
      textColor: {
        'primary-yellow': '#FFD235',
        'primary-white': '#F8EFE8',
        'primary-orange': '#E54126',
      },
      color: {
        'primary-yellow': '#FFD235',
        'primary-white': '#F8EFE8',
        'primary-orange': '#E54126',
      },
      gridColumn: {
        'span-1/3': '1/3',
        'span-3/-1': '3/-1',
        'span-1/4': '1/4',
        'span-1/5': '1/5',
        'span-1/6': '1/6',
        'span-1/8': '1/8',
        'span-6/-1': '6/-1',
        'span-4/22': '4/22',
      },
      borderColor: {
        'primary-white': '#F8EFE8'
      }
    },
  },
  plugins: [],
};
