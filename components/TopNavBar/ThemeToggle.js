import React from "react";
import { useTheme } from "next-themes";
import NextImage from "../NextImage";

const ThemeToggle = (props) => {
  const { theme, setTheme } = useTheme();

  return (
    <NextImage
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      src="mode"
      alt="Toggle dark theme"
      className="cursor-pointer"
    />
  );
};

export default ThemeToggle;
