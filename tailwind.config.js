/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "result-success": {
          10: "#EFFAF3",
          100: "#5DC983",
        },
        "result-warning": {
          10: "#FEF6EB",
          100: "#F0A231",
        },
        "result-error": {
          10: "#FAE6E6",
          100: "#c80000",
        },
        "primary-black": {
          10: "#EAEAEC",
          50: "#9797A0",
          100: "#302f41",
        },
        "primary-gray": {
          10: "#F2F2F2",
        },
        "primary-purple": {
          100: "#8430ED",
        },
        "other-pink": "#EFE4EC",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
