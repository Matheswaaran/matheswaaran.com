module.exports = {
  purge: {
    // mode: "all",
    content: ["./src/pages/**/*.js", "./src/components/**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#65EADA",
        dark: "#1A1F2B",
        grey: "#9EACBE",
        white: '#FFFFFF',
        secondary: "#2D64AC",
        textHighlight: "#2D3547",
        greySecondary: "#4A5367",
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
        default: "0px 1.64948px 7.42268px rgba(101, 234, 218, 0.18)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
