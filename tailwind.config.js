/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],  theme: {
    extend: {
      fontFamily: {
        'doto': ['Doto', 'sans-serif'],
        'matrix': ['Doto', 'monospace'],
      },
      colors: {
        primary: {
          50: '#ffffff',
          100: '#f8fafc',
          200: '#f1f5f9',
          300: '#e2e8f0',
          400: '#cbd5e1',
          500: '#94a3b8',
          600: '#64748b',
          700: '#475569',
          800: '#334155',
          900: '#1e293b',
        },
        chrome: {
          100: '#ffffff',
          200: '#f1f5f9',
          300: '#e2e8f0',
          400: '#cbd5e1',
          500: '#94a3b8',
          600: '#64748b',
          700: '#475569',
          800: '#334155',
          900: '#1e293b',
        },
        metallic: {
          silver: '#ffffff',
          'dark-silver': '#cccccc',
          chrome: '#f1f5f9',
          'dark-chrome': '#e2e8f0',
          steel: '#cbd5e1',
          charcoal: '#94a3b8',
        },
        dark: {
          100: '#333333',
          200: '#2a2a2a',
          300: '#1a1a1a',
          400: '#0d0d0d',
          500: '#000000',
          800: '#000000',
          900: '#000000',
          950: '#000000',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'metallic-gradient': 'linear-gradient(135deg, #ffffff, #f1f5f9, #e2e8f0)',
        'chrome-gradient': 'linear-gradient(135deg, #ffffff, #f1f5f9, #e2e8f0)',
        'robot-gradient': 'linear-gradient(135deg, #000000, #1a1a1a, #333333)',
        'black-gradient': 'linear-gradient(135deg, #000000, #0d0d0d, #1a1a1a)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'metallic-shine': 'metallicShine 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        metallicShine: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
} 