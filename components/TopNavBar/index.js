import React from "react";

import SiteData from "../../data/SiteData.json";
import Button from "../Button";
import ThemeToggle from "./ThemeToggle";
import SocialMediaProfiles from "./SocialMediaProfiles";
import NextImage from "../NextImage";

const TopNavBar = (props) => {
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
          <NextImage src="menu" alt="Menu" />
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
