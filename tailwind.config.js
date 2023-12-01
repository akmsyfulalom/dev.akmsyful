/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'], // Add your preferred font stack
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
    },
    animation: {
      'spin-slow': 'spin 10s linear infinite',
    },
    backgroundImage:{
      
      backgroundLight: 'repeating-radial-gradient(rgba(0, 0, 0, 0.4), #f5f5f5 5px, #f5f5f5 100px);'
    }
   

      
    },
  },
  plugins: [],
}
