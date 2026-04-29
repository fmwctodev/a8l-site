/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        // Existing — used by Hero floating accents and ambient effects.
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        // Premium UI overhaul keyframes (Phase 1 foundation).
        'shimmer': {
          '0%': { transform: 'translateX(-100%) skewX(-12deg)' },
          '100%': { transform: 'translateX(200%) skewX(-12deg)' },
        },
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'magnetic-pulse': {
          '0%, 100%': { 'box-shadow': '0 0 20px 0 rgba(6, 182, 212, 0.15)' },
          '50%': { 'box-shadow': '0 0 40px 4px rgba(6, 182, 212, 0.3)' },
        },
        'underline-grow': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'shimmer': 'shimmer 1.5s ease-out',
        'gradient-shift': 'gradient-shift 12s ease-in-out infinite',
        'magnetic-pulse': 'magnetic-pulse 3s ease-in-out infinite',
        'underline-grow': 'underline-grow 0.3s ease-out forwards',
      },
      boxShadow: {
        // Premium glow tokens — applied on PremiumCard hover and MagneticButton focus.
        'glow-cyan': '0 0 20px 0 rgba(6, 182, 212, 0.25)',
        'glow-cyan-lg': '0 0 40px 4px rgba(6, 182, 212, 0.35)',
        'glow-blue': '0 0 20px 0 rgba(59, 130, 246, 0.25)',
        'glow-blue-lg': '0 0 40px 4px rgba(59, 130, 246, 0.35)',
        'inner-glow': 'inset 0 0 20px 0 rgba(6, 182, 212, 0.1)',
      },
      backgroundImage: {
        'mesh-gradient':
          'radial-gradient(at 27% 37%, rgba(6, 182, 212, 0.12) 0px, transparent 50%), radial-gradient(at 97% 21%, rgba(59, 130, 246, 0.10) 0px, transparent 50%), radial-gradient(at 52% 99%, rgba(168, 85, 247, 0.08) 0px, transparent 50%), radial-gradient(at 10% 89%, rgba(6, 182, 212, 0.08) 0px, transparent 50%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
