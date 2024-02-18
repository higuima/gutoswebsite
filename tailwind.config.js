/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "black-100": "#2D2D2C",
        "black-200": "#161616",
        "black-300": "#0d0d0b",
        "black-400": "#000000",
        "gray-50": "#d9d9d9",
        "orange-100": "#FBD994",
        "orange-200": "#FCB47C",
        "orange-300": "#CE754D",
        "white-100": "#FBF7F7",
        "white-200": "#FFFFFF",
      },
      backgroundImage: () => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        convergence: ["Convergence", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        montserratAlternates: ['Montserrat Alternates', "sans-serif"]
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      content: {
        pedroGuitarra: "url('./assets/landingPage/pedroGuitarra.svg')",
        pedroviolao: "url('./assets/landingPage/pedroViolao.svg')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}