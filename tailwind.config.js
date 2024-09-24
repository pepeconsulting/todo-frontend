module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
    
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
        primary: '#0a0a0a',
        accent: '#EDA51A',
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