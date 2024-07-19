// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blackish-blue": "#0A0E1A",
      },
      animation: {
        float: "float 15s infinite linear",
      },
      keyframes: {
        float: {
          "0%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "100%": { transform: "translate3d(100vw, -100vh, 0) scale(0)" },
        },
      },
    },
  },
  plugins: [],
};
