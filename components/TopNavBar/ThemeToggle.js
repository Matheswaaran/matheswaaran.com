import React from "react";
import { useTheme } from "next-themes";

import images from "../../assets/images";
import Image from "next/image";

const ThemeToggle = (props) => {
  const { theme, setTheme } = useTheme();

  return (
    <Image
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      src={theme === "dark" ? images.lightMode : images.darkMode}
      alt="Toggle dark theme"
      className="cursor-pointer"
    />
  );
};

export default ThemeToggle;
