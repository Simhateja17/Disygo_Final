/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'exo': ['Exo 2', 'sans-serif'],
        'matrix': ['Orbitron', 'sans-serif'],
      },
      colors: {
        // New Cyan/Turquoise Brand Colors
        brand: {
          cyan: '#00FFFF',        // Bright cyan from logo
          'cyan-light': '#7DFFFF', // Lighter cyan
          'cyan-dark': '#00CCCC',  // Darker cyan
          turquoise: '#40E0D0',    // Turquoise accent
          'turquoise-light': '#7FECDE',
          'turquoise-dark': '#20B2AA',
          aqua: '#00F5FF',         // Bright aqua
          teal: '#008B8B',         // Deep teal
          mint: '#B0FFF0',         // Mint accent
        },
        primary: {
          50: '#ECFFFE',
          100: '#CFFFFE',
          200: '#A5FFFC',
          300: '#67FFF9',
          400: '#22FFF3',
          500: '#00FFFF',  // Main brand cyan
          600: '#00CCCC',
          700: '#0099A5',
          800: '#007A85',
          900: '#00666F',
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
          // Add cyan metallic variants
          'cyan-chrome': '#E0FFFF',
          'cyan-steel': '#B0E0E6',
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
        // New cyan gradients
        'cyan-gradient': 'linear-gradient(135deg, #00FFFF, #40E0D0, #00CED1)',
        'cyan-glow': 'radial-gradient(circle, #00FFFF, #40E0D0, transparent)',
        'brand-gradient': 'linear-gradient(135deg, #00FFFF, #7DFFFF, #40E0D0)',
        'cyan-metallic': 'linear-gradient(135deg, #E0FFFF, #B0E0E6, #87CEEB)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'metallic-shine': 'metallicShine 2s ease-in-out infinite',
        'cyan-glow': 'cyanGlow 2s ease-in-out infinite alternate',
        'pulse-cyan': 'pulseCyan 2s ease-in-out infinite',
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
        cyanGlow: {
          '0%': { boxShadow: '0 0 20px #00FFFF' },
          '100%': { boxShadow: '0 0 40px #00FFFF, 0 0 60px #40E0D0' },
        },
        pulseCyan: {
          '0%': { opacity: '0.6' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
} 