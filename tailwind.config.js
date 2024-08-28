/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '960px',
      xl: '1280px',
    },
    colors: {
      'blue': '#0071e3',
      'red': '#d82425',
      'light': '#ffffff',
      'dark': '#101010',
      'light-dark': '#060708',
      'gray': '#868686',
    },
    fontFamily: {
      sans: ['Neue Haas Grotesk Display Pro', 'sans-serif'],
      light:['light'],
      regular:['regular'],
      medium:['medium'],
      bold:['bold']
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.5625rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.125rem',
    }
  },
  plugins: [],
}