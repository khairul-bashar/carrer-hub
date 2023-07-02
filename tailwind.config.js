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

          info: "rgba(126, 144, 254, 0.05)",

          success: "rgba(152, 115, 255, 0.05)",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
