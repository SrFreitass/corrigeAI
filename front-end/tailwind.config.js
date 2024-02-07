/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'appear-from-below': {
          '0%': { opacity: 0, transform: 'translateY(25px)' },
          '100%': {
            opacity: 1,
          },
        },
      },
      animation: {
        'appear-from-below': 'appear-from-below 0.3s ease-in-out',
      },
      gridTemplateColumns: {
        layout: '1.25fr 1fr',
      },
      gridTemplateRows: {
        layout: '1fr 2fr',
      },
      colors: {
        global: '#EFF1F3',
        primary: '#05004E',
        secundary: '#737791',
        third: '#247CFF',
        'gray-1': '#D9D9D9',
        'gray-2': '#C4C4CC',
        'gray-3': '#8D8D99',
        'gray-4': '#969696',
        'blue-5': '#05071D',
        'opaque-red': '#FFE2E5',
        'opaque-yellow': '#FFF4DE',
        'opaque-green': '#DCFCE7',
        'opaque-purple': '#F3E8FF',
      },
      backgroundColor: {
        dark: 'rgba(15, 17, 38, 0.5)',
      },
      backgroundImage: {
        bg: 'url("../../public/images/bg.png")',
      },
      borderRadius: {
        bg: '20px',
      },
    },
  },
  plugins: [],
}
