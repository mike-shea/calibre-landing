/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-circular)']
      },
      colors: {
        primary: {
          1: 'var(--primaryLight1)',
          2: 'var(--primaryLight2)',
          3: 'var(--primaryLight3)',
          4: 'var(--primaryLight4)',
          5: 'var(--primaryLight5)',
          6: 'var(--primaryLight6)',
          7: 'var(--primaryLight7)',
          8: 'var(--primaryLight8)',
          9: 'var(--primaryLight9)',
          10: 'var(--primaryLight10)',
          11: 'var(--primaryLight11)',
          12: 'var(--primaryLight12)'
        },
        primaryDark: {
          1: 'var(--primaryDark1)',
          2: 'var(--primaryDark2)',
          3: 'var(--primaryDark3)',
          4: 'var(--primaryDark4)',
          5: 'var(--primaryDark5)',
          6: 'var(--primaryDark6)',
          7: 'var(--primaryDark7)',
          8: 'var(--primaryDark8)',
          9: 'var(--primaryDark9)',
          10: 'var(--primaryDark10)',
          11: 'var(--primaryDark11)',
          12: 'var(--primaryDark12)'
        },
        slateDark: {
          1: '#151718',
          2: '#1a1d1e',
          3: '#202425',
          4: '#26292b',
          5: '#2b2f31',
          6: '#313538',
          7: '#3a3f42',
          8: '#4c5155',
          9: '#697177',
          10: '#787f85',
          11: '#9ba1a6',
          12: '#ecedee'
        },
        slate: {
          1: '#fbfcfd',
          2: '#f8f9fa',
          3: '#f1f3f5',
          4: '#eceef0',
          5: '#e6e8eb',
          6: '#dfe3e6',
          7: '#d7dbdf',
          8: '#c1c8cd',
          9: '#889096',
          10: '#7e868c',
          11: '#687076',
          12: '#11181c'
        },
        blue: {
          1: '#fbfdff',
          2: '#f5faff',
          3: '#edf6ff',
          4: '#e1f0ff',
          5: '#cee7fe',
          6: '#b7d9f8',
          7: '#96c7f2',
          8: '#5eb0ef',
          9: '#0091ff',
          10: '#0081f1',
          11: '#006adc',
          12: '#00254d'
        },
        blueDark: {
          1: '#0f1720',
          2: '#0f1b2d',
          3: '#10243e',
          4: '#102a4c',
          5: '#0f3058',
          6: '#0d3868',
          7: '#0a4481',
          8: '#0954a5',
          9: '#0091ff',
          10: '#369eff',
          11: '#52a9ff',
          12: '#eaf6ff'
        },
        green: {
          1: '#fbfefc',
          2: '#f2fcf5',
          3: '#e9f9ee',
          4: '#ddf3e4',
          5: '#ccebd7',
          6: '#b4dfc4',
          7: '#92ceac',
          8: '#5bb98c',
          9: '#30a46c',
          10: '#299764',
          11: '#18794e',
          12: '#153226'
        },
        greenDark: {
          1: '#0d1912',
          2: '#0c1f17',
          3: '#0f291e',
          4: '#113123',
          5: '#133929',
          6: '#164430',
          7: '#1b543a',
          8: '#236e4a',
          9: '#30a46c',
          10: '#3cb179',
          11: '#4cc38a',
          12: '#e5fbeb'
        },
        plum: {
          1: '#fefcff',
          2: '#fff8ff',
          3: '#fceffc',
          4: '#f9e5f9',
          5: '#f3d9f4',
          6: '#ebc8ed',
          7: '#dfafe3',
          8: '#cf91d8',
          9: '#ab4aba',
          10: '#a43cb4',
          11: '#9c2bad',
          12: '#340c3b'
        },
        plumDark: {
          1: '#1d131d',
          2: '#251425',
          3: '#341a34',
          4: '#3e1d40',
          5: '#48214b',
          6: '#542658',
          7: '#692d6f',
          8: '#883894',
          9: '#ab4aba',
          10: '#bd54c6',
          11: '#d864d8',
          12: '#fbecfc'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(10%)', opacity: 0 },
          '100%': { transform: 'translateX(0%)', opacity: 1 }
        },
        slideInRight: {
          '0%': { transform: 'translateX(-10%)', opacity: 0 },
          '100%': { transform: 'translateX(0%)', opacity: 1 }
        },
        slideInTop: {
          '0%': { transform: 'translateY(30%)', opacity: 0 },
          '40%': { transform: 'translateY(10%)', opacity: 0 },
          '100%': { transform: 'translateX(0%)', opacity: 1 }
        },
        slideInBottom: {
          '0%': { transform: 'translateY(-30%)', opacity: 0 },
          '100%': { transform: 'translateX(0%)', opacity: 1 }
        }
      },
      animation: {
        // duration | easing-function | delay | iteration-count | direction | fill-mode | play-state | name
        slideInLeft: 'slideInLeft 0.6s ease-out',
        slideInRight: 'slideInRight 0.6s ease-out',
        slideInTop: 'slideInTop 0.7s ease-out forwards',
        slideInBottom: 'slideInBottom 0.45s ease-out forwards'
      }
    }
  },
  plugins: []
};
