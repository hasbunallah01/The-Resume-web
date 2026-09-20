import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0b2a46",
          deep: "#0e2f48",
          footer: "#0e2a42",
          btn: "#16557c",
          dark: "#0d324e",
        },
        ivory: {
          DEFAULT: "#f7f6f1",
          nav: "#f8f7f3",
          card: "#fbfaf8",
        },
        gold: {
          DEFAULT: "#b39669",
        },
        mist: "#ecf1f4",
        ink: {
          body: "#1d4468",
          muted: "#56697a",
          soft: "#6b7b88",
        },
      },
      fontFamily: {
        serif: ['"Newsreader Variable"', "Georgia", "serif"],
        logo: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
