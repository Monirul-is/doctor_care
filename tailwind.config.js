/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#E58411",
        "secondery": "#1E1E1E",
        "bg-color":"#F7F7F7"
        
      }
    },
  },
  plugins: [],
}

