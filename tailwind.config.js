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
        primary: '#08CB00',
        secondary: '#253900',
        background: '#000000',
        foreground: '#EEEEEE',
      },
      animation: {
        'scan': 'scan 3s ease-in-out infinite',
        'grid-move': 'grid-move 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
      },
    },
  },
  plugins: [],
}
