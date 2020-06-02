module.exports = {
  purge: [],
  theme: {
    screens: {
      md: { raw: "(min-width: 640px)" },
      lg: { raw: "(min-width: 768px)" },
      "base-landscape": {
        raw: "(max-width: 767px) and (orientation: landscape)",
      },
      "lg-tall": { raw: "(min-width: 768px) and (max-aspect-ratio: 2/1)" },
      touch: { raw: "(hover: none)" },
    },
    fontSize: {
      xs: "2.5vmin",
      sm: "4vmin",
      base: "4.5vmin",
      lg: "5vmin",
      xl: "5.5vmin",
      "2xl": "6vmin",
      "3xl": "6.5vmin",
      "header-sm": "9vmin",
      header: "13.5vmin",
      fullscreen: "20vmin",
      "lg/xs": ".75vw",
      "lg/sm": "1.2vw",
      "lg/base": "1.4vw",
      "lg/lg": "1.6vw",
      "lg/xl": "2vw",
      "lg/2xl": "2.4vw",
      "lg/3xl": "3vw",
      "lg/header-sm": "4vw",
      "lg/header": "8vw",
      "lg/fullscreen": "15vw",
    },
    fontFamily: {
      display: ["Messer", "san-serif"],
      body: ["SuisseIntl", "sans-serif"],
    },
    colors: {
      "golden-fizz": { 100: "#EEFD4E" },
      red: { "700": "#C53030" },
      black: "#000000",
      white: "#FFFFFF",
      transparent: "transparent",
    },
    spacing: {
      "0": "0",
      auto: "auto",
      "75vw": "75vw",
      "75vh": "75vh",
      "100vw": "100vw",
      "100vh": "100vh",
      "lg/xs": "0.25vw",
      "lg/sm": "0.5vw",
      "lg/base": "1vw",
      "lg/lg": "2vw",
      "lg/xl": "3vw",
      xs: "1vmin",
      sm: "2.25vmin",
      base: "4.5vmin",
      lg: "6.75vmin",
      xl: "9vmin",
      "2xl": "11vmin",
      span1: "8.333333%",
      span2: "16.666667%",
      span3: "25%",
      span4: "33.333333%",
      span5: "41.666667%",
      span6: "50%",
      span7: "58.333333%",
      span8: "66.666667%",
      span9: "75%",
      span10: "83.333333%",
      span11: "91.666667%",
      "1/2": "50%",
      full: "100%",
    },
    extend: {
      borderRadius: { "50": "50%" },
      borderWidth: { "3": "3px" },
      transitionProperty: { right: "right" },
      inset: { full: "100%" },
      minHeight: { tall: "50vw" },
      maxHeight: { tall: "50vw", "75vh": "75vh" },
      maxWidth: { "75vw": "75vw" },
      lineHeight: { display: "0.9" },
    },
  },
  variants: {},
  plugins: [],
};
