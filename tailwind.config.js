/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        borderShade: {
          DEFAULT: "rgba(0, 0, 0, 0.1)",
          dark: "rgba(255, 255, 255, 0.1)",
        },
        lightSlate: {
          DEFAULT: colors.slate[50],
          dark: colors.slate[700],
        },
        mediumSlate: {
          DEFAULT: colors.slate[200],
          dark: colors.slate[800],
        },
        deepSlate: {
          DEFAULT: colors.slate[400],
          dark: colors.slate[900],
        },
        darkViolet: {
          DEFAULT: colors.violet[800],
          dark: colors.violet[900],
        },
        textViolet: {
          DEFAULT: colors.violet[800],
          dark: colors.violet[500],
        },
        lightViolet: {
          DEFAULT: colors.violet[600],
          dark: colors.violet[700],
        },
      },
      screens: {
        xm: "320px",
      },
    },
  },
  plugins: [],
};
