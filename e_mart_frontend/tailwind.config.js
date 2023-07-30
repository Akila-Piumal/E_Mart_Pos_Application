module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "dark-purple":'#081A51',
        'light-white':'rgba(255,255,255,0.18)',
        'light-blue':'#422AFB'
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
        'h1family':['Impact','Haettenschweiler','"Arial Narrow Bold"','sans-serif']
      },
      lineHeight: {
        '70': '70px',
      },
      margin: {
        10:'10px',
        34:'34px',
        50:'50px',
        100:'100px',
        320: '320px',
        400:'400px',
        490:'490px',
        670:'670px'
      },
      width: {
        70:'70px',
        80:'80px',
        90:'90px',
        150:'150px',
        190: '190px',
        250:'250px',
        275: '275px',
        300: '300px',
        340: '340px',
        350: '350px',
        500:'500px',
        656: '656px',
        880: '880px',
        508: '508px',
      },
      height: {
        80: '80px',
        150:'150px',
        250:'250px',
        300:'300px',
        340: '340px',
        370: '370px',
        420: '420px',
        475:'475px',
        510: '510px',
        600: '600px',
        685: '685px',
        800: '800px',
        '90vh': '90vh',
      },
      flex: {
        0.7: '0.7 1 0%',
      },
      maxHeight: {
        370: '370px',
      },
      minWidth: {
        210: '210px',
        350: '350px',
        620: '620px',
      },
      textColor: {
        lightGray: '#F1EFEE',
        primary: '#FAFAFA',
        secColor: '#efefef',
        navColor: '#BEBEBE',
        myColor:'#1F2937',
        fontColor:'#3b3b3b',
        blue1:'#3022FF',
        blue2:'#7AA2FF',
        green1:'#44FF5A',
        red1:'#FF4545',
        darkGray:'#95a5a6',
        Orange1:'#E85E04',
        black:'#202020'
      },
      backgroundColor: {
        dashboardColor:'#F5F8FE',
        dashboardColor2:'#F4F4FD',

        graynew:'#EEEDED',
        grayNew2:'#E8E2E2',
        grayNew3:'#DCDCDC',
        homeBaground:'#F2F2F2',
        homeBaground2:'#fff',

        social:'#E6EEFF',
        searchBar:'#f5f5f5',

        mainColor: '#FBF8F9',
        secondaryColor: '#F0F0F0',
        blackOverlay: 'rgba(0, 0 ,0 ,0.7)',
        
        BlueSet1:'#171E45',
        OrangeSet1:'#E85E04',
        lightBlueSet1:'#91CDE2',
        YellowSet1:'#F6C35D',

        GreenSet2:'#B9FD4C',
        BlueSet2:'#75BCFF',
        Green2Set2:'#03CD69',
        BlackSet2:'#161616',
        
        BlueSet3:'#2423EC',
        RedSet3:'#E43D3D',
        OrangeSet3:'#FB9A5C',

        BlueSet4:'#1555B6',
        Blue2Set4:'#56B9EE',
        GreenSet4:'#15B96A',
        BlackSet4:'#212226',

        PurpleSet5:'#332E4C',
        RedSet5:'#FF4E4A',
        YellowSet5:'#FF991F',
        BlueSet5:'#4CC9FF',

        BlueSet6:'#1C528A',
        YellowSet6:'#F7C91B',
        RedSet6:'FE5145',
        Blue2Set6:'#01C8F1',

        BlueSet7:'#2517C2',
        YellowSet7:'F7FF82',
        BlackSet7:'010005',
        GraySet7:'515D6F',

        laBlue:'#C0F1FF'

      },
      keyframes: {
        'slide-in': {
          '0%': {
            '-webkit-transform': 'translateX(-200px)',
            transform: 'translateX(-200px)',
          },
          '100%': {
            '-webkit-transform': 'translateX(0px)',
            transform: 'translateX(0px)',
          },
        },

        'slide-fwd': {
          '0%': {
            '-webkit-transform': 'translateZ(0px)',
            transform: 'translateZ(0px)',
          },
          '100%': {
            '-webkit-transform': 'translateZ(160px)',
            transform: 'translateZ(160px)',
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out',
        'slide-fwd': ' slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      transitionProperty: {
        height: 'height',
      },
    },
    cursor: {
      'zoom-in': 'zoom-in',
      pointer: 'pointer',
    },
  },
  variants: {
    // backgroundColor: ['active'],
    extend: {},
  },
  plugins: [],
};