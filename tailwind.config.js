/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SF: ["SF", "sans-serif"],
        SFThin: ["SF-Thin", "sans-serif"],
        SFMedium: ["SF-Medium", "sans-serif"],
        SFSemiBold: ["SF-SemiBold", "sans-serif"],
        SFBold: ["SF-Bold", "sans-serif"],
      },
      colors: { dark: "#1d1d1f", blue: "#2997ff" },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar-hide")],
};
