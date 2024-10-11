/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        wiggle: 'wiggle 3s ease-in-out infinite',
        go: 'go 1s ease-in-out infinite',
        mod: '1s bounce 0.5s infinite',
        textappear: 'textappear 2s ease-in-out',
        imageappear: 'imageappear 1s ease-in-out',
      },
      keyframes:{
        wiggle:{
          '0% 100%':{
            transform: "rotate(0deg)",
          },
          "50%": {transform: "rotate(90deg)"},
        },
        bounce: {
          '0%, 100%': {
              transform: "translateY(-30%)",
             
          },
          '50%': {
              transform: "none",
          }
        },
        textappear:{
          '0%':{opacity:'0'},
          '100%':{opacity:'1'}
        },
        imageappear:{
          '0%':{opacity:'1',width:'0px'},
          '100%':{opacity:'1',width:'50px'},

        }


      },
      fontFamily:{
        Roboto: ['Roboto'],
        Poppins: ['Poppins'],
        Pacifico: ['Pacifico'],
      }
    },   
    },
  plugins: [],
};
