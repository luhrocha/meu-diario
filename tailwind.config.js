/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  
    "./src/pages/**/*.{js,ts,jsx,tsx}",  
    "./src/ui/components/*.{js,ts,jsx,tsx}", 
    "./src/ui/components/**/*.{js,ts,jsx,tsx}",  
    "./src/ui/partials/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'transparent': 'transparent',
      'green-dark': '#7FB77E',
      'green': '#B1D7B4',
      'cream': '#F7F6DC',
      'orange': '#FFC090',      
      'gray-dark': '#333333',
      'gray': '#C3C3C3',
      'gray-light': '#D9D9D9',
      'black': '#000000',
      'white': '#FFFFFF'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Roboto Serif', 'serif'],   
      cursive: ['DynaPuff', 'cursive'],
    },
    extend: {},
  },
  plugins: [],
}
