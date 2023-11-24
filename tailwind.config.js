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
      colors: { dark: "#1d1d1f", blue: "#0066cc" },
      backgroundImage: {
        hero_macbook_xl:
          "url('https://res.cloudinary.com/dk2kchb50/image/upload/v1700791321/apple%20clone/jo94l5lwwdwb1jw6hkws.jpg')",
        hero_macbook_sm:
          "url('https://res.cloudinary.com/dk2kchb50/image/upload/v1700774899/apple%20clone/asaiihjqknhp3rb5gr4d.jpg')",
        hero_imac_xl:
          "url('https://res.cloudinary.com/dk2kchb50/image/upload/v1700791322/apple%20clone/dhbtmdlnw9yparspwue9.jpg')",
        hero_imac_sm:
          "url('https://res.cloudinary.com/dk2kchb50/image/upload/v1700774898/apple%20clone/boiykuqagufy75fdsbuj.jpg')",
        hero_iphone15pro_xl:
          "url('https://res.cloudinary.com/dk2kchb50/image/upload/v1700791322/apple%20clone/frtt8k7iwalhphf2hzge.jpg')",
        hero_iphone15pro_md:
          "url('https://res.cloudinary.com/dk2kchb50/image/upload/v1700554415/apple%20clone/dxaggvtkyzd8suqntx8r.jpg')",
        hero_iphone15pro_sm:
          "url('https://res.cloudinary.com/dk2kchb50/image/upload/v1700554415/apple%20clone/u8ksvvd2iuimqcaqkoa9.jpg')",
        iphone15_lg: "url('https://res.cloudinary.com/dk2kchb50/image/upload/v1700784072/apple%20clone/ffip9pwcc4xog1xqh8cd.jpg')",
        iphone15_md: "url('https://res.cloudinary.com/dk2kchb50/image/upload/v1700784071/apple%20clone/udnbvzjjkun1mcbzfxu3.jpg')",
        iphone15_sm: "url('https://res.cloudinary.com/dk2kchb50/image/upload/v1700784072/apple%20clone/d0skojl1n0bojr9qyftt.jpg')",
        ipad_lg: "url('https://res.cloudinary.com/dk2kchb50/image/upload/v1700554417/apple%20clone/sp8yhalzj4nkp0nlyqfv.jpg')",
        ipad_md: "url('https://res.cloudinary.com/dk2kchb50/image/upload/v1700554417/apple%20clone/heunq4pnkyms1mpxg6lv.jpg')",
        ipad_sm: "url('https://res.cloudinary.com/dk2kchb50/image/upload/v1700554417/apple%20clone/zudyjs9oblcth4gs8qro.jpg')",
        macstudio_lg: "url('https://res.cloudinary.com/dk2kchb50/image/upload/v1700554445/apple%20clone/mu4pocxzditvxrhsqtcr.jpg')",
        macstudio_md: "url('https://res.cloudinary.com/dk2kchb50/image/upload/v1700554489/apple%20clone/butwbsk72ae57ucoa5xy.jpg')",
        macstudio_sm: "url('https://res.cloudinary.com/dk2kchb50/image/upload/v1700554489/apple%20clone/butwbsk72ae57ucoa5xy.jpg')",
        macbookpro_lg: "url('https://res.cloudinary.com/dk2kchb50/image/upload/v1700554511/apple%20clone/gpnpvjs0zzwrfwdypsub.jpg')",
        macbookpro_md: "url('https://res.cloudinary.com/dk2kchb50/image/upload/v1700554533/apple%20clone/xmjwonv16ejnsieglwg8.jpg')",
        macbookpro_sm: "url('https://res.cloudinary.com/dk2kchb50/image/upload/v1700554555/apple%20clone/ybojgtoltooxhix8ljtc.jpg')",
        ipadpro_lg: "url('https://res.cloudinary.com/dk2kchb50/image/upload/v1700554417/apple%20clone/fdsqsetgp8nbytbkygn2.jpg')",
        ipadpro_md: "url('https://res.cloudinary.com/dk2kchb50/image/upload/v1700554418/apple%20clone/uxxzhxvv16szte5jqwav.jpg')",
        ipadpro_sm: "url('https://res.cloudinary.com/dk2kchb50/image/upload/v1700554423/apple%20clone/rapvo4uhx4q8mv1cirgs.jpg')",
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
