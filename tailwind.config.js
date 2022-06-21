module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  // ...
  theme: {
    extend: {
      screens: {
        lg2: { max: "1024px" },
        bp1: { max: "800px" },
        bp1sub: { max: "700px" },
        bp2: { max: "600px" },
        bp3: { max: "500px" },
        bp3sub: { max: "481px" },
        bp4: { max: "400px" },
        bp4sub: { max: "374px" },
        bp5: { max: "281px" },
        sm2: { min: "375px" },
        sm5: { min: "398px" },
        sm3: { min: "500px" },
        sm4: { min: "650px" },
        md2: { min: "768px" },
        uhd: { min: "2500px" },
      },
      animation: ["group-hover"],
    },
    // ...
    animation: {
      text: "text 2s ease infinite",
      text2: "text 5s ease infinite",
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
