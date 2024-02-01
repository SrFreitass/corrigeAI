/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        global: '#EFF1F3',
        primary: '#32334A',
        secundary: '#247CFF',
        'gray-1': '#D9D9D9',
        'gray-2': '#C4C4CC',
        'gray-3': '#8D8D99',
        'gray-4': '#969696',
        'blue-5': '#05071D',
      },
    },
  },
  plugins: [],
}
