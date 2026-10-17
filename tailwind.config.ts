import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#142848",
          deep: "#0e1c33",
          footer: "#102038",
          btn: "#163056",
          dark: "#163056",
        },
        ivory: {
          DEFAULT: "#f3f8fc",
          nav: "#f4f9fc",
          card: "#ffffff",
        },
        gold: {
          DEFAULT: "#b39669",
        },
        mist: "#e7f2fa",
        sky: {
          DEFAULT: "#d7ebf8",
          deep: "#c5e2f4",
          ink: "#3d6f96",
        },
        ink: {
          body: "#3d5672",
          muted: "#5c738a",
          soft: "#6d8498",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        logo: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        paper: "0 18px 50px rgba(28, 72, 112, 0.10), 0 2px 8px rgba(28, 72, 112, 0.04)",
        lift: "0 28px 60px rgba(20, 56, 92, 0.16), 0 2px 8px rgba(20, 56, 92, 0.05)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(-36px, 8px, 0)" },
        },
        "drift-reverse": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(28px, -6px, 0)" },
        },
        floaty: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -12px, 0)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        drift: "drift 42s ease-in-out infinite",
        "drift-slow": "drift 58s ease-in-out infinite",
        "drift-reverse": "drift-reverse 48s ease-in-out infinite",
        floaty: "floaty 7.5s ease-in-out infinite",
        "floaty-slow": "floaty 9.5s ease-in-out infinite",
        twinkle: "twinkle 3.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
