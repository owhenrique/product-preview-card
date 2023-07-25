/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark_cyan: "hsl(158, 36%, 37%)",
          light_cyan: "hsl(158, 36%, 45%)",
          cream: "hsl(30, 38%, 92%)",
        },
        neutral: {
          dark_blue: "hsl(212, 21%, 14%)",
          grayish_blue: "hsl(228, 12%, 48%)",
          white: "hsl(0, 0%, 100%)",
        },
      },
    },
  },
  plugins: [],
};
