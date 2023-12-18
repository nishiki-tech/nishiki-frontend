/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    fontSize: {
      '2xs': '0.625rem', // 10px
    },
    extend: {
      colors: {
        'primary-lightest': '#e6f2f1',
        'primary-light': '#abd4cf',
        primary: '#6ab3ab',
        'primary-dark': '#5fa19a',
        accent: '#fcd884',
        danger: '#cd5a5a',
        'danger-dark': '#b95151',
        'gray-lightest': '#f8f8f8',
        'gray-light': '#eeeeee',
        gray: '#bdbdbd',
        'gray-dark': '#777777',
        overlay: 'rgba(0, 0, 0, 0.25)',
        white: '#ffffff',
        black: '#222222',
      },
      borderRadius: {
        xs: '0.125rem', // 2px
        sm: '0.25rem', // 4px
        DEFAULT: '0.625rem', // 10px
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideInFromBottom: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideOutToBottom: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutToRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.25)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        fadeOut: 'fadeOut 0.3s ease-in-out',
        slideInFromBottom: 'slideInFromBottom 0.3s ease-in-out',
        slideOutToBottom: 'slideOutToBottom 0.3s ease-in-out',
        slideInFromRight: 'slideInFromRight 0.3s ease-in-out',
        slideOutToRight: 'slideOutToRight 0.3s ease-in-out',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        pulse: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
