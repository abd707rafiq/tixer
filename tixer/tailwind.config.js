/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {backgroundImage: {
      'fade-to-bottom': 'linear-gradient(to bottom, #121314 0%, rgba(18, 19, 20, 0) 100%)',
    },}
  },
  plugins: [],
}