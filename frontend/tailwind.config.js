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
        mod: '1s bounce 0.5s infinite'
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
        }
      }
    },   
    },
  plugins: [],
};
