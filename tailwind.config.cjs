/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      height: {
        '1/5': 'calc(100%/5)',
      },
      width: {
        '1/8': 'calc(100% / 8)',
      },
    },
  },
  plugins: [],
};
