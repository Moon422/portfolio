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
        'FFE3BF': '#FFE3BF',
        'FFEED9': '#FFEED9',
        'E1E8EF': '#E1E8EF',
        'B6B7B8': '#B6B7B8',
        '57657A': '#57657A',
        'FFE3BF': '#FFE3BF',
      },
      fontFamily: {
        'raleway': 'raleway',
        'poppins': 'poppins',
        'pacifico': 'pacifico',
      }
    },
  },
  plugins: [],
}
