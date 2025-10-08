/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ff88',
        secondary: '#00cc6a',
        background: '#0a0a0a',
        'background-light': '#1a1a1a',
        'background-lighter': '#252525',
        foreground: '#ffffff',
        'foreground-muted': '#aaaaaa',
        'foreground-subtle': '#888888',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        mono: ['monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-delay': 'fadeIn 1s ease-out 0.2s both',
        'fade-in-delay-2': 'fadeIn 1.2s ease-out 0.4s both',
        'rotate-3d': 'rotate3d 20s linear infinite',
        'rotate-3d-reverse': 'rotate3d-reverse 25s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        rotate3d: {
          '0%': {
            transform: 'rotate(0deg) scale(1)',
          },
          '50%': {
            transform: 'rotate(180deg) scale(1.1)',
          },
          '100%': {
            transform: 'rotate(360deg) scale(1)',
          },
        },
        'rotate3d-reverse': {
          '0%': {
            transform: 'rotate(0deg) scale(1)',
          },
          '50%': {
            transform: 'rotate(-180deg) scale(1.1)',
          },
          '100%': {
            transform: 'rotate(-360deg) scale(1)',
          },
        },
      },
      backdropBlur: {
        'lg': '10px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 255, 136, 0.3)',
        'glow-lg': '0 0 40px rgba(0, 255, 136, 0.6)',
        'card': '0 20px 60px rgba(0, 255, 136, 0.1)',
        'card-hover': '0 20px 60px rgba(0, 255, 136, 0.2)',
      },
    },
  },
  plugins: [],
}
