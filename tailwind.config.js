module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  // ...
  theme: {
    extend: {
      screens: {
        bp1: { max: "800px" },
        bp2: { max: "600px" },
        bp3: { max: "500px" },
        bp3sub: { max: "481px" },
        sm2: { min: "375px" },
        md2: { min: "768px" },
        bp4: { max: "400px" },
        bp4sub: { max: "374px" },
        uhd: { min: "2500px" },
        lg2: { max: "1024px" },
      },
      animation: ["group-hover"],
    },
    // ...
    animation: {
      text: "text 5s ease infinite",
    },
    keyframes: {
      text: {
        "0%, 100%": {
          "background-size": "200% 200%",
          "background-position": "left center",
        },
        "50%": {
          "background-size": "200% 200%",
          "background-position": "right center",
        },
      },
    },
  },
};
