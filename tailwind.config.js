/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1A1919",

          secondary: "#474747",

          accent: "#757575",

          neutral: "#A3A3A3",

          "base-100": "#ffffff",

          info: "#8885FE",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",
          dark01: "#1A1919",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
