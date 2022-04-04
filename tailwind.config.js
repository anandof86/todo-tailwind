

module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "light-grey": "#E5EEE5",
        purple: "#7652C6",
        bgcolor: "#E5E5E5"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};