import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        "tomato": "#ff6257",
        "dark-slate": "#242742",
        "charcoal": "#36384e",
        "grey": "#9294a0",
        "white": "#ffffff"
      }
    },
  },
  plugins: [],
} satisfies Config;
