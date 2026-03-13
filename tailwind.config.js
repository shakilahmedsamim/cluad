/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        ink: {
          50: '#f0f0f5',
          100: '#d8d8e8',
          200: '#b0b0cc',
          300: '#8080aa',
          400: '#555580',
          500: '#2a2a55',
          600: '#1e1e42',
          700: '#141430',
          800: '#0d0d20',
          900: '#07070f',
        },
        signal: {
          DEFAULT: '#00e5a0',
          dark: '#00b87d',
          light: '#7fffd4',
        },
        volt: {
          DEFAULT: '#f0ff4b',
          dark: '#c8d600',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

