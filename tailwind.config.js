/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "640px",
        md: "768px",
        "2md": "992px",
        lg: "1024px",
        "2lg": "1200px",
        xl: "1280px",
        "2xl": "1366px",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          maxWidth: "100%",
          paddingRight: "8px",
          paddingLeft: "8px",
          margin: "0 auto",
          "@screen md": {
            width: "752px",
          },
          "@screen 2md": {
            width: "976px",
          },
          "@screen 2lg": {
            width: "1280px",
          },
          "@screen 2xl": {
            width: "1366px",
          },
        },
      });
    },
  ],
  corePlugins: {
    container: false,
  },
};
