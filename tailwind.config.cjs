/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blueColor: "#000066",
        active: "#555",
        navModal: "#2C2336",
        lightBlue: "#d6daf7",
        blueShade: "#151880",
        blueShader: "#000066",
        button: "#000065",
        buttonG: "#6E7FF3",
        grey: "#2C2336",
        missionBG: "#F8F7F7"
      },
      fontSize:{
        bigger: "2rem",
      },
      letterSpacing: {
        veryWide: "0.5px"
            },
            spacing: {
padWider: "4rem"
            },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Lato", " sans-serif"],
      },
    },
  },
  plugins: [],
};
