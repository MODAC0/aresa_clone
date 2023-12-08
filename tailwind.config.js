/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#f4f5f6",
        "primary-black": "#302f41",
        "primary-black-50": "#9797A0",
      },
    },
  },
  plugins: [],
};
