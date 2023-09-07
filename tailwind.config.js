module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        screen: "#F9FAFA",
        primary: "#006AB5",
        text: "#37565E",
        "text-dark": "#04262F",
        "text-light": "#6D8287",
        "light-green": "#E7FCFF",
        "light-blue": "#E9FCE3",
        "light-gray": "#E2E9FB",
        "light-pink": "#EBE3FC",
        "light-border": "rgba(205, 213, 215, 0.56)",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
      },
      zIndex: {
        1: "1",
      },
      fontFamily: {
        regular: ["Inter-Regular"],
        medium: ["Inter-Medium"],
        semibold: ["Inter-SemiBold"],
        bold: ["Inter-Bold"],
      },
    },
  },
  plugins: [],
  corePlugins: require("tailwind-rn/unsupported-core-plugins"),
};
