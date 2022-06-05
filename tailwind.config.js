module.exports = {
  mode: 'jit',
  purge: [
    './*.html',
    './*.{js,jsx,ts,tsx,vue}',
  ],
  content: [],
  theme: {
    extend: {
      flex: {
        '2': '0 0 auto',
      },
      spacing: {
        33: "33px",
        1: "1px",
      },  
      colors: {
        'bgWhile': 'rgba(255, 255, 255, 0.8)',
        'bg24': 'rgba(0, 0, 0, 0.7)',
        'blurMain': '#3498db !important',
      },
      boxShadow: {
        'drop': '0 6px 12px rgb(0 0 0 / 18%)',
        'optionShadow': '1px 1px 2px 0 #ccc',
      },
    },
    animation: {
      bannerText: 'bannerText 1s ease-in-out',
      bannerDesc: 'bannerDesc 1s ease-in-out',
      bannerBtn:  'bannerBtn 1s ease-in-out',
      servicesItem: 'servicesItem 1s linear',
      themeTitle:'themeTitle 0.5s linear',
      themeButton:'themeButton 0.5s linear',
    },
    keyframes: {
      bannerText: {
        '0%': {transform: 'translateX(-2000px)', opacity: '0'},
        '100%': {transform: 'translateX(0px)', opacity: '1'}
      },
      bannerDesc: {
        '0%': {transform: 'translateX(2000px)', opacity: '0'},
        '100%': {transform: 'translateX(0px)', opacity: '1'}
      },
      bannerBtn: {
        '0%': {transform: 'translateY(-2000px)',opacity: '0'},
        '100%': {transform: 'translateY(0px)',opacity: '1'}
      },
      servicesItem: {
        '0%': {transform: 'translateY(100%)', opacity: '0.3'},
        '100%': {transform: 'translateY(0)', opacity: '1'}
      },
      themeTitle: {
        '0%': {transform: 'translateX(-30%)', opacity: '0'},
        '100%': {transform: 'translateX(0)', opacity: '1'}
      },
      themeButton: {
        '0%': {transform: 'translateX(30%)', opacity: '0'},
        '100%': {transform: 'translateX(0)', opacity: '1'}
      }
      
    },
    screens: {
       'sm': '0px',
       'md': '768px',
       'lg': '1024px',
    }
  },
  plugins: [],
}
