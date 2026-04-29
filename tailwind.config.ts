import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "qb-primary": "#304FFE",
        "qb-primary-dark": "#143182",
        "qb-primary-darkest": "#0D2262",
        "qb-primary-light": "#C9D9FF",
        "qb-primary-lightest": "#EDF2FF",
        "qb-secondary": "#304FFE",
      },
    },
  },
  plugins: [],
} satisfies Config;
