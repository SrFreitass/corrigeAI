import { Config } from 'tailwind-merge';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },

    extend: {
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
      gridTemplateColumns: {
        layout: '1.25fr 1fr',
      },
      gridTemplateRows: {
        layout: '1fr 2fr',
      },
      keyframes: {
        '144': {
          '0%': {},
          '5%': {
            'background-position':
              ' calc(0*100%/3) 50% ,calc(1*100%/3) 50% ,calc(2*100%/3) 50% ,calc(3*100%/3) 50% ',
          },
          '12.5%': {
            'background-position':
              ' calc(0*100%/3) 0   ,calc(1*100%/3) 50% ,calc(2*100%/3) 50% ,calc(3*100%/3) 50% ',
          },
          '25%': {
            'background-position':
              ' calc(0*100%/3) 0   ,calc(1*100%/3) 0   ,calc(2*100%/3) 50% ,calc(3*100%/3) 50% ',
          },
          '37.5%': {
            'background-position':
              ' calc(0*100%/3) 100%,calc(1*100%/3) 0   ,calc(2*100%/3) 0   ,calc(3*100%/3) 50% ',
          },
          '50%': {
            'background-position':
              ' calc(0*100%/3) 100%,calc(1*100%/3) 100%,calc(2*100%/3) 0   ,calc(3*100%/3) 0   ',
          },
          '62.5%': {
            'background-position':
              ' calc(0*100%/3) 50% ,calc(1*100%/3) 100%,calc(2*100%/3) 100%,calc(3*100%/3) 0   ',
          },
          '75%': {
            'background-position':
              ' calc(0*100%/3) 50% ,calc(1*100%/3) 50% ,calc(2*100%/3) 100%,calc(3*100%/3) 100%',
          },
          '87.5%': {
            'background-position':
              ' calc(0*100%/3) 50% ,calc(1*100%/3) 50% ,calc(2*100%/3) 50% ,calc(3*100%/3) 100%',
          },
          '95%': {},
          '100%': {
            'background-position':
              'calc(0*100%/3) 50% ,calc(1*100%/3) 50% ,calc(2*100%/3) 50% ,calc(3*100%/3) 50%',
          },
        },
        'appear-from-below': {
          '0%': { opacity: '0', transform: 'translateY(25px)' },
          '100%': {
            opacity: '1',
          },
        },
        skeleton: {
          '0%': {
            opacity: '0.5',
          },
          '50%': {
            opacity: '1.0',
          },
          '100%': {
            opacity: '0.5',
          },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'loader-essay': 'animation: l44 1s infinite linear alternate',
        'appear-from-below': 'appear-from-below 0.3s ease-in-out',
        skeleton: 'skeleton infinite 1s ease-in-out',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
