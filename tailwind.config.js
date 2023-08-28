/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '0B0909': '#0B0909',
        'F2F7FC': '#F2F7FC',
        'F2F5F9': '#F2F5F9',
        '1A1003': '#1A1003',
      },
      fontFamily: {
        'raleway': 'raleway',
        'poppins': 'poppins',
      }
    },
  },
  plugins: [],
}
