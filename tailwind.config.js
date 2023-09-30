/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,css,ts,tsx}",
    "./components/**/*.{html,css,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-one": "#8886E0",
        "main-two": "#9D3766",
        "main-three": "#F76B56",
      },
    },
  },
  plugins: [],
};
