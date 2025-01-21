/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      "custom-bg": "#c6daf4",
      "gray-20": "#F4F4F4", // Light gray for backgrounds
      "gray-50": "#D9D9D9", // Medium light gray
      "gray-100": "#B0B0B0", // Neutral gray for borders or text
      "gray-300": "#7E7E7E", // Darker gray for emphasis
      "gray-500": "#4A4A4A", // Charcoal gray for text
      "primary-100": "#E0E7FF", // Light blue for accents
      "primary-300": "#A6C8FF", // Soft blue for highlights
      "primary-500": "#3B82F6", // Strong blue for primary actions
      "secondary-400": "#A7D3FF", // Lighter blue for secondary accents
      "secondary-500": "#1E90FF", // A more muted version for contrast
      "text-color-blue": "#1b2a47",
      "text-color-light": "#3a5ba0",
      white: "#ffffff",
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    backgroundImage: (theme) => ({
      "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
      "mobile-home": "url('./assets/HomePageGraphic.png')",
      "home-img": "url(./assets/Untitled.png)",
    }),
    fontFamily: {
      dmsans: ["DM Sans", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    content: {
      evolvetext: "url('./assets/EvolveText.png')",
      abstractwaves: "url('./assets/AbstractWaves.png')",
      sparkles: "url('./assets/Sparkles.png')",
      circles: "url('./assets/Circles.png')",
    },
  },
  screens: {
    xs: "480px",
    sm: "768px",
    md: "1060px",
  },
};
export const plugins = [];
