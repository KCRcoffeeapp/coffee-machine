/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables class-based dark mode
  content: ["./src/**/*.{html,ts}"], // Paths to all templates
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#A5D8FF", // Light variant
          DEFAULT: "#d9d9d9", // Default (base) color
          dark: "#b8b8b8", // Dark variant
        },
        secondary: {
          light: "#FFEDD5",
          DEFAULT: "#ffffff",
          dark: "#C87A1F",
        },
        neutral: {
          light: "#F5F5F5",
          DEFAULT: "#f0f0f0",
          dark: "#4B5563",
        },
        accent: {
          light: "#FFD6A5",
          DEFAULT: "#808080",
          dark: "#676767",
        },
      },
    },
  },
  plugins: [],
};
