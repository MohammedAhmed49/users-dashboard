module.exports = {
  darkMode: "class",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#353D54",
        secondary: "#F4F5FC",
        borderClr: "#0000001F",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
