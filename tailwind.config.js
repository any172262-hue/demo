/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: '#121417',
        darksurface: '#181B1F',
        darkcard: '#1E2126',
        darkborder: '#2A2F37',
        darktext: '#E9EAEC',
        darkmuted: '#9CA3AF',
        offwhite: '#F5F5F2',
        purewhite: '#FFFFFF',
        charcoal: '#292D33',
        charcoaldark: '#181B1F',
        charcoallight: '#2C313A',
        slatebg: '#EEF1F6',
        slateborder: '#DFE3E8',
        orange: {
          DEFAULT: '#F47721',
          hover: '#E06410',
          light: '#FDEEE4',
          subtle: '#FFF5EE'
        },
        lightgrey: '#E9EAEC',
        secondary: '#73777D',
        bordergrey: '#DFE1E5',
      },
      fontFamily: {
        sans: ['"Inter"', '"Noto Sans Assamese"', '"Noto Sans Bengali"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', '"Inter"', '"Noto Sans Assamese"', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(41, 45, 51, 0.05), 0 1px 2px rgba(41, 45, 51, 0.03)',
        'premium': '0 4px 20px -2px rgba(41, 45, 51, 0.08)',
        'hover': '0 10px 30px -4px rgba(41, 45, 51, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
