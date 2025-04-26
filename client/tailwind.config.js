/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Poppins jako domyślny font-sans
      },
      colors: {
        cyloDark: "#1F2023", // Szary (odpowiednik neutral-600)
        cyloDarker: "#0f1112" // Bardziej szary (odpowiednik neutral-700)
      },
    },
  },
  plugins: [],
};

