/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.625rem', // 10px
      },
      fontFamily: {
        outfit: ['var(--font-outfit)', 'sans-serif'],
      },
      width: {
        4.5: '1.125rem', // 18px
      },
      height: {
        4.5: '1.125rem', // 18px
      },
      size: {
        4.5: '1.125rem', // 18px
      },
      colors: {
        'primary-lightest': 'var(--color-primary-lightest)',
        'primary-light': 'var(--color-primary-light)',
        primary: 'var(--color-primary)',
        'primary-dark': 'var(--color-primary-dark)',
        accent: 'var(--color-accent)',
        'accent-dark': 'var(--color-accent-dark)',
        danger: 'var(--color-danger)',
        'danger-dark': 'var(--color-danger-dark)',
        'gray-lightest': 'var(--color-gray-lightest)',
        'gray-light': 'var(--color-gray-light)',
        gray: 'var(--color-gray)',
        'gray-dark': 'var(--color-gray-dark)',
        overlay: 'var(--color-overlay)',
        white: 'var(--color-white)',
        black: 'var(--color-black)',
      },
      borderRadius: {
        xs: '0.125rem', // 2px
        sm: '0.25rem', // 4px
        DEFAULT: '0.625rem', // 10px
      },
      boxShadow: {
        around: '0 0 8px 4px rgba(0, 0, 0, 0.1)',
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
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        fadeOut: 'fadeOut 0.3s ease-in-out',
        slideInFromBottom: 'slideInFromBottom 0.3s ease-in-out',
        slideOutToBottom: 'slideOutToBottom 0.3s ease-in-out',
        slideInFromRight: 'slideInFromRight 0.3s ease-in-out',
        slideOutToRight: 'slideOutToRight 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
};
