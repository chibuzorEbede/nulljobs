/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "hero-pattern": `url('/src/img/confetti-doodles.svg')`,
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
