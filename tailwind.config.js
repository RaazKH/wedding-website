/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens
        orange: '#E09F3E',
        'dark-red': '#540B0E',
        blue: '#335C67',
        red: '#9E2A2B',
        yellow: '#FFF380',
        // Keep accent mapped to red for existing utilities
        accent: '#9E2A2B',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'], // titles
        cursive: ['Great Vibes', 'cursive'],
        body: ['Lora', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}