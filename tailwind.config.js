/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'checklist': {
          'primary': '#2563eb',
          'secondary': '#1e40af',
          'background': '#f8fafc',
        }
      }
    },
  },
  plugins: [],
} 