module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#65EADA",
        secondary: "#2D64AC",
        dark: "#1A1F2B",
        grey: "#9EACBE",
        highlight: "#2D3547",
        greySecondary: "#4A5367",
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
    },
  },
  plugins: [],
};
