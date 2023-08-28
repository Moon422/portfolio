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
        'FF9C1B': '#FF9C1B',
        'EC1B09': '#EC1B09',
        '1A1003': '#1A1003',
        'FFEBD1': '#FFEBD1',
      },
      fontFamily: {
        'raleway': 'raleway',
        'poppins': 'poppins',
      }
    },
  },
  plugins: [],
}
