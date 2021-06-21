module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  // mode: "jit",
  theme: {
    extend: {},
    boxShadow: {
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.2)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
