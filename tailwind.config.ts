import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        h1: "70px",
        h2: "54px",
        h3: "22px",
        h4: "20px",
        p: "16px",
      },
      colors: {
        primary: {
          1: "#FFBE0D",
        },
        secondary: {
          1: "#000000",
        },
        neutral: {
          1: "#141414",
        },
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollReverse: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(50%)" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
        scrollReverse: "scrollReverse 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
