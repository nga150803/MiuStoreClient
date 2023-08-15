/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        'wd-primary': '100%',
        'wd-secondary': '90%',
        'wd-tertiary': '80%',
        'wd-small': '70%',
        'wd-medium': '50%'
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      },
      colors: {
        primary: '#FAACA8',
        secondary: '#DDD6F3',
        headingColor: '#2e2e2e',
        textColor: '#515151'
      },
      fontFamily: {
        context: ['Open Sans', 'sans-serif'],
        logo: ['Pacifico', 'cursive']
      },
      fontSize: {
        'tx-secondary': '1.5rem',
        'tx-textLogo': '2rem',

        'tx-md-textLogo': '2rem'
      },
      boxShadow: {
        'sd-primary': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
      },
      backgroundColor: {
        'gradient-color-button': 'linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%'
      }
    }
  },
  plugins: []
}
