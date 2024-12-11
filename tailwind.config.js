/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables class-based dark mode
  content: ["./src/**/*.{html,ts}"], // Paths to all templates
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#eae4dd", // Light variant
          DEFAULT: "#dfd5c9", // Default (base) color
          dark: "#b8b8b8", // Dark variant
        },
        secondary: {
          light: "#FFEDD5",
          DEFAULT: "#ffffff",
          dark: "#C87A1F",
        },
        neutral: {
          light: "#F5F5F5",
          DEFAULT: "#fffaf2",
          dark: "#feefde",
        },
        accent: {
          light: "#e0cbb2",
          DEFAULT: "#8b7f6e",
          dark: "#676767",
        },
        tabs: {
          light: "#A5D8FF", // Light variant
          DEFAULT: "#f1eae0", // Default (base) color
          dark: "#b8b8b8", // Dark variant
        },
        header: {
          light: "#A5D8FF", // Light variant
          DEFAULT: "#e0cbb2", // Default (base) color
          dark: "#b8b8b8", // Dark variant
        },
        popular: {
          light: "#FFEDD5",
          DEFAULT: "#8b7f6e",
          dark: "#C87A1F",
        },
      },
    },
  },
  plugins: [],
};
