/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
     "./index.html",
     "./src/**/*.{js,jsx,ts,tsx}", // Adjust this line to include any file types that might contain Tailwind classes
     flowbite.content(),
    ],
     theme: {
       extend: {},
     },
  plugins: [
    flowbite.plugin(),
  ],
}