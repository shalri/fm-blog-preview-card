/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bp-primary": "hsl(47, 88%, 63%)",
        "bp-white": "hsl(0, 0%, 100%)",
        "bp-grey": "hsl(0, 0%, 50%)",
        "bp-black": "hsl(0, 0%, 7%)",
      },
      fontSize: {
        body: "16px",
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
      fontWeight: {
        normal: "500",
        bold: "800",
      },
      screens: {
        desktop: "1440px",
        mobile: "375px",
      },
      boxShadow: {
        bp: "8px 8px 0px 0px rgba(0,0,0, 1)",
        "bp-active": "16px 16px 0px 0px rgba(0,0,0, 1)",
      },
    },
  },
  plugins: [],
};
