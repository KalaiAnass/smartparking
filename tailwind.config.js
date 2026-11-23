/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070B17',
          900: '#0B1020',
          800: '#111831',
          700: '#1A2342',
          600: '#26315A',
        },
        cyan: { glow: '#00D1FF' },
        indigo: { glow: '#5B7FFF' },
        mint: { glow: '#00FFA3' },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #00D1FF 0%, #5B7FFF 50%, #00FFA3 100%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(0,209,255,0.45)',
        'glow-mint': '0 0 40px -10px rgba(0,255,163,0.45)',
      },
      keyframes: {
        'grid-pan': { '0%': { backgroundPosition: '0 0' }, '100%': { backgroundPosition: '48px 48px' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
      animation: {
        'grid-pan': 'grid-pan 6s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
