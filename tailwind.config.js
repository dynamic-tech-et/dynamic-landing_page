/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'service-card-blob': "url('./card-blo.svg')",
        'hero-right-pattern': "url('./src/assets/blob(2).svg')",
        'hero-left-pattern': "url('./src/assets/blob(4).svg')",
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}