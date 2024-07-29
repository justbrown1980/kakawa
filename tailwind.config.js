module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        swap: {
          "0%, 50%": { left: "0%" },
          "50.01%, 100%": { left: "100%" },
        }
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        swap: "swap 20s linear infinite",
      },
    },
  },
  variants: {},
  plugins: [],
};
