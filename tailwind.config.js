/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        cursive : ["Salsa","cursive"],
        sans : ["Poppins","sans-serif"]
      },
      colors:{
        primary : "#ff8f00",
        secondary : "#af47d2",
        brandDark : "#26355d",
        yellow : "#ffdb00",
      },
      container:{
        center:true,
        padding : {
          DEFAULT: "1rem",
          sm:"2rem",
        }
      },
      placeholderColor: {
        'custom-color': '#ffffff', // Change this to your desired color
      },
    },
  },
  plugins: [
  ],
}

