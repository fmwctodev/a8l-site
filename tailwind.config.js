/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
