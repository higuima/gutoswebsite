/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "white-100": "#FBF7F7",
        "white-200": "#FFFFFF",
        "black-100": "#2D2D2C",
        "black-200": "#161616",
        "black-300": "#0d0d0b",
        "black-400": "#000000",
        "gray-50": "#d9d9d9",
      },
      backgroundImage: () => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        convergence: ["Convergence", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
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
        evolvetext: "url('./assets/EvolveText.png')",
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