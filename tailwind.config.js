module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#65EADA",
        secondary: "#2D64AC",
        dark: "#1A1F2B",
        grey: "#9EACBE",
        highlight: "#2D3547",
        graySecondary: "#4A5367",
        lightGray: "#EDF2F7",
      },
      fontFamily: {
        "gilroy-bold": ["Gilroy-Bold"],
        "gilroy-bolditalic": ["Gilroy-BoldItalic"],
        "gilroy-medium": ["Gilroy-Medium"],
        "gilroy-mediumitalic": ["Gilroy-MediumItalic"],
        "gilroy-regular": ["Gilroy-Regular"],
        "gilroy-regularitalic": ["Gilroy-RegularItalic"],
        "gilroy-semibold": ["Gilroy-SemiBold"],
        "gilroy-semibolditalic": ["Gilroy-SemiBoldItalic"],
      },
      fontSize: {
        xs: ["14px", { lineHeight: "16px" }],
        sm: ["16px", { lineHeight: "19px" }],
        base: ["18px", { lineHeight: "21px" }],
        lg: ["24px", { lineHeight: "29px" }],
        xl: ["28px", { lineHeight: "33px" }],
        "2xl": ["30px", { lineHeight: "36px" }],
        "3xl": ["38px", { lineHeight: "45px" }],
        "4xl": ["43px", { lineHeight: "51px" }],
        "5xl": ["72px", { lineHeight: "84px" }],
        "6xl": ["88px", { lineHeight: "103px" }],
      },
      boxShadow: {
        default: "0px 1.64948px 7.42268px rgba(45, 100, 172, 0.2)",
      },
    },
  },
  plugins: [],
};
