/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /^grid-cols-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl']
    },
    {
      pattern: /^gap-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl']
    },
    {
      pattern: /^text-/,
      variants: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    {
      pattern: /^bg-/,
      variants: ['red', 'green', 'blue']
    }
  ],
  theme: {
    extend: {
      fontFamily: {
        permanent: ['Permanent Marker', 'cursive'],
        foldit: ['Foldit', 'cursive']
      },
      colors: {
        primary: '#3533CD',
        secondary: '#1B1A69',
        background: '#000001'
      }
    }
  },
  plugins: []
};
