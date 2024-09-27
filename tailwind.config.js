

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        primary: "rgb(var(--primary))",
        secondary: "rgb(var(--secondary))",
        border: "rgb(var(--border))",
        footer: "rgb(var(--footer))"
      },
      fontFamily: {
        "poppins": ['Poppins']
      }
    },
  },
  plugins: [],
};
