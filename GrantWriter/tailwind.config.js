/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B00',
          hover: '#FF8533',
          light: '#FFA366',
          dark: '#CC5500',
        },
        secondary: {
          DEFAULT: '#1A1A1A',
          hover: '#333333',
          light: '#4D4D4D',
          dark: '#000000',
        },
        background: {
          DEFAULT: '#FFFFFF',
          alt: '#F8F8F8',
          dark: '#1A1A1A',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#4D4D4D',
          light: '#FFFFFF',
          muted: '#666666',
        },
        border: {
          DEFAULT: '#E5E5E5',
          dark: '#333333',
        },
        accent: {
          DEFAULT: '#FFB366',
          hover: '#FFC080',
        },
      },
    },
  },
  plugins: [],
} 