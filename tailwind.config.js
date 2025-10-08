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
        // Tech gradient colors
        'tech-blue': '#00d4ff',
        'tech-purple': '#7c3aed',
        'tech-cyan': '#06b6d4',
        'tech-emerald': '#10b981',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        sans: ['var(--font-montserrat)', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
        'gradient-tech': 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
        'gradient-cyber': 'linear-gradient(135deg, #00ff88 0%, #00d4ff 50%, #7c3aed 100%)',
        'gradient-matrix': 'linear-gradient(135deg, #00ff88 0%, #10b981 50%, #06b6d4 100%)',
        'gradient-grid': 'linear-gradient(90deg, #00ff88 0%, transparent 50%, #00ff88 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-delay': 'fadeIn 1s ease-out 0.2s both',
        'fade-in-delay-2': 'fadeIn 1.2s ease-out 0.4s both',
        'rotate-3d': 'rotate3d 20s linear infinite',
        'rotate-3d-reverse': 'rotate3d-reverse 25s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'matrix-rain': 'matrixRain 20s linear infinite',
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
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(0, 255, 136, 0.6)',
          },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        matrixRain: {
          '0%': {
            transform: 'translateY(-100vh)',
          },
          '100%': {
            transform: 'translateY(100vh)',
          },
        },
      },
      backdropBlur: {
        'lg': '10px',
        'xl': '20px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 255, 136, 0.3)',
        'glow-lg': '0 0 40px rgba(0, 255, 136, 0.6)',
        'card': '0 20px 60px rgba(0, 255, 136, 0.1)',
        'card-hover': '0 20px 60px rgba(0, 255, 136, 0.2)',
        'tech-glow': '0 0 30px rgba(0, 212, 255, 0.4)',
        'cyber-glow': '0 0 50px rgba(124, 58, 237, 0.3)',
      },
    },
  },
  plugins: [],
}
