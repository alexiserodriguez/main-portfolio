/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {zIndex: {
      999: "999",
    },},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#f7f7f7",
      black: "#111111",
      blue: "#13315c",
      bluedark: "#101e32",
      green: "#aad922",
      'turq': "#1D4565",
      'excel': "#388E3C",
      'python': "#FFE56C",
      'pandas': "#FC89CC",
      'numpy': "#4DABCF",
      'seaborn': "#CDE9E3",
      'sql': "#BAD630",
      'mysql': "#03B2D9",
      'mssql': "#B24344",
      'postgresql': "#6DA4D0",
      'tableau': "#E8762D",
      'looker': "#FBBC04",
      'react': "#61DAFB",
      'light': "#303030",
    },
    width: {
      1200: "1200px",
    },
    height: {
      100: "26rem",
    },
    rotate: {
      57: "57deg",
    },

    fontFamily: {
      heading: ["Heebo", "sans-serif"],
      par: ["Arimo", "sans-serif"],
    },
  },
  plugins: [],
}
