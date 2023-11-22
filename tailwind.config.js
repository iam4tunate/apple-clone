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
      backgroundImage: {
        iphone15pro_lg:
          "url('https://res.cloudinary.com/dk2kchb50/image/upload/v1700554415/apple%20clone/io9fwkqo7ph0iik0lsqd.jpg')",
        iphone15pro_md: "url('./src/assets/hero_iphone15pro_md.jpg')",
        iphone15pro_sm:
          "url('https://res.cloudinary.com/dk2kchb50/image/upload/v1700554415/apple%20clone/u8ksvvd2iuimqcaqkoa9.jpg')",
        iphone15_lg: "url('./src/assets/hero_iphone15_lg.jpg')",
        iphone15_md: "url('./src/assets/hero_iphone15_md.jpg')",
        iphone15_sm: "url('./src/assets/hero_iphone15_sm.jpg')",
        macbook_lg: "url('./src/assets/hero_macbook_lg.jpg')",
        macbook_md: "url('./src/assets/hero_macbook_md.jpg')",
        macbook_sm: "url('./src/assets/hero_macbook_sm.jpg')",
        ipad_lg: "url('./src/assets/promo_ipad_lg.jpg')",
        ipad_md: "url('./src/assets/promo_ipad_md.jpg')",
        ipad_sm: "url('./src/assets/promo_ipad_sm.jpg')",
        macstudio_lg: "url('./src/assets/promo_mac_studio_lg.jpg')",
        macstudio_md: "url('./src/assets/promo_mac_studio_md.jpg')",
        macstudio_sm: "url('./src/assets/promo_mac_studio_sm.jpg')",
        macbookpro_lg: "url('./src/assets/promo_mbp_lg.jpg')",
        macbookpro_md: "url('./src/assets/promo_mbp_md.jpg')",
        macbookpro_sm: "url('./src/assets/promo_mbp_sm.jpg')",
        ipadpro_lg: "url('./src/assets/promo_ipadpro_lg.jpg')",
        ipadpro_md: "url('./src/assets/promo_ipadpro_md.jpg')",
        ipadpro_sm: "url('./src/assets/promo_ipadpro_sm.jpg')",
      },
      screens: {
        sm: "734px",
        md: "1068px",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar-hide")],
};
