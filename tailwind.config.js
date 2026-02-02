/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./ecosystem-new.html",
    "./components.js",
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#EF6113',
        'brand-cream': '#FFF9F2',
        'brand-dark': '#000000',
        'brand-muted': '#666666',
      },
      borderRadius: {
        'brand-xl': '20px',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
