module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  // ...
  theme: {
    extend: {
      fontFamily: {
        main: "'Roboto', sans-serif",
        secondary: "'Comfortaa', cursive",
      },
      backgroundImage: {
        sand: "url('./public/assets/images/bg/black-sand-beach.jpg')",
      },
      screens: {
        bp1: { max: "800px" },
        bp2: { max: "600px" },
        bp3: { max: "500px" },
        bp3sub: { max: "481px" },
        bp4: { max: "400px" },
        uhd: { min: "2000px" },
      },
    },
  },
};
