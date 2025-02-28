/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],

  theme: {
    extend: {
      fontFamily: {
        'josefin': ['Josefin Sans', 'serif', 'cursive', 'sans-serif', 'system-ui'],
      },  
    },
  },
  plugins: [
    require('flowbite/plugin') // add this line
  ],
}

