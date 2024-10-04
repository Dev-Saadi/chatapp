/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      main_bg: "var(--main_bg)",
      page_color: "var(--page_color)",
      input_color: "var(--input_color)",
      line_color: "var(--line_color)",
      primary_bg: "var(--primary_bg)",
      single_color: "var(--single_color)",
      secondary_bg: "var(--secondary_bg)",
      hover_color: "var(--hover_color)",
      blur: "var(--blur)",
      text_color: "var(--text_color)",
      primary_color: "var(--primary_color)",
      secondary_color: "var(--secondary_color)",
      title_color: "var(--title_color)",
      black: "var(--black)",
      white: "var(--white)",
      green: "var(--green)",
      blue: "var(--blue)",
      red: "var(--red)",
      yellow: "var(--yellow)",
      purple: "var(--purple)",
      pink: "var(--pink)",
      cyan: "var(--cyan)",
      blueTeal: "var(--blueTeal)",
      ash: "var(--ash)",
    },
    fontFamily: {
      gilroyBlack: ["Gilroy Black"],

      gilroyBold: ["Gilroy Bold"],

      gilroyExtraBold: ["Gilroy ExtraBold"],

      gilroyLight: ["Gilroy Light"],

      gilroyMedium: ["Gilroy Medium"],

      gilroyRegular: ["Gilroy Regular"],

      gilroySemibold: ["Gilroy SemiBold"],

      exQuite: ["Exquite"],

      moGan: ["Mogan"],

      colomItalic: ["Colombia Italic"],

      colomRegular: ["Colombia Regular"],
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1620px",
        "4xl": "1750px",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
