import React from "react";

import SiteData from "../../data/SiteData.json";
import Button from "../Button";
import ThemeToggle from "./ThemeToggle";
import SocialMediaProfiles from "./SocialMediaProfiles";
import Menus from "./Menus";

import { Menu } from "styled-icons/heroicons-outline";
import { Close } from "@styled-icons/material";

const TopNavBar = (props) => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <React.Fragment>
      <div className="flex items-center justify-between border-grey dark:border-grey border-b px-4">
        <span className="text-base font-gilroy-semibolditalic">
          {SiteData.title}
        </span>
        <div className="flex items-center justify-end">
          <div className="pr-4 py-2 hidden lg:block">
            <Button to={SiteData.resume} external={true}>
              Resume
            </Button>
          </div>
          <div className="border-grey dark:border-grey border-r border-l p-4">
            <ThemeToggle />
          </div>
          <div className="border-grey dark:border-grey border-r p-4 space-x-2 hidden lg:block">
            <SocialMediaProfiles />
          </div>
          <div
            className="flex items-center justify-end border-grey dark:border-grey p-4 pr-0 cursor-pointer"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span className="text-base font-gilroy-medium text-highlight dark:text-white mr-4">
              Menu
            </span>
            {openMenu ? (
              <Close className="text-secondary dark:text-primary h-5 w-5" />
            ) : (
              <Menu className="text-secondary dark:text-primary h-5 w-5" />
            )}
          </div>
        </div>
      </div>
      {openMenu && <Menus open={openMenu} setOpen={setOpenMenu} />}
    </React.Fragment>
  );
};

export default TopNavBar;
