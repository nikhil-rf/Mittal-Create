/** @type {import('tailwindcss').Config} */
export default {
  content: [  
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
   safelist: [
    // Heights
    'h-40', 'h-50', 'h-52', 'h-55', 'h-56', 'h-60', 'h-64', 'h-72', 'h-84', 'h-90', 'h-100',

    // Widths
    'w-58', 'w-60', 'w-70', 'w-80', 'w-full',

    // Top positions
    'top-8', 'top-15', 'top-23', 'top-50', 'top-89', 'top-96', 'top-114', 'top-134',
    '-top-13', '-top-15', '-top-20', '-top-45', '-top-89', '-top-96', '-top-114', '-top-134',

    // Left/right positions
    'left-10', 'left-11', 'left-70', 'left-145', 'left-154', 'left-155',
    'right-63', 'right-138', 'right-140', 'right-145', 'right-217',
    '-left-70', '-right-217',
  ],
  theme: {
    extend: { 
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        58: '14.5rem',
        60: '15rem',
        70: '17.5rem',
        80: '20rem',
        84: '21rem',
        90: '22.5rem',
        100: '25rem',
        114: '28.5rem',
        134: '33.5rem',
        138: '34.5rem',
        140: '35rem',
        145: '36.25rem',
        154: '38.5rem',
        155: '38.75rem',
        217: '54.25rem'
      }
    },
  },
  plugins: [],
}
