import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      keyframes: {
        slide: {
          "100%": { top: "108px" },
        },
      },
      animation: {
        slide: "slide 0.5s linear forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
