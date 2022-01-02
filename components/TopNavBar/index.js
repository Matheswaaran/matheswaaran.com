import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import SiteData from "../../data/SiteData.json";
import images from "../../assets/images";
import Button from "../Button";
import ThemeToggle from "./ThemeToggle";
import SocialMediaProfiles from "./SocialMediaProfiles";

const TopNavBar = (props) => {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-between border-grey dark:border-grey border-b px-4">
      <span className="text-base font-gilroy-semibolditalic">
        {SiteData.title}
      </span>
      <div className="flex items-center justify-end">
        <div className="pr-4 py-2">
          <Button to={SiteData.resume} external={true}>
            Resume
          </Button>
        </div>
        <div className="border-grey dark:border-grey border-r border-l p-4">
          <ThemeToggle />
        </div>
        <div className="border-grey dark:border-grey border-r p-4 space-x-2">
          <SocialMediaProfiles />
        </div>
        <div className="flex items-center justify-end border-grey dark:border-grey p-4 pr-0">
          <span className="text-base font-gilroy-medium text-highlight dark:text-white mr-4">
            Menu
          </span>
          <Image src={images.menu[theme || "dark"]} alt="Menu" />
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
