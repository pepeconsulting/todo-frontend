module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
    theme: {
    fontFamily: {
      primary: ["Poppins", "sans-serif"]
    
    },
    container: {
      padding: {
        DEFAULT: '10px',
      },
    },
    screens: {
      xs:"320px",
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#3C3C3C',
        secondary: '#464646',
        accent: '#00EA84',
      },
      fontSize: {
        sm: '13px',
        reg: '15px',
        reg2:'16px',
        lg: '18px',
        xl: '25px',
        xxl: '30px',
      },
    },
  },
  plugins: [],
}