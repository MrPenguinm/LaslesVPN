/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx, css}"],
  safelist: ["swiper-pagination-bullet", "swiper-pagination-bullet-active"],

  theme: {
    extend: {
      // Custom Colors
      colors: {
        primaryMain: "#f53838", // Blue
        secondary: "rgb(245, 56, 56, 0.35)", // Yellow
        primaryText: "#4F5665", // Red
        headingText: "#08132A", // Green
      },
      // Custom Font Family
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
      // Custom animation
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
