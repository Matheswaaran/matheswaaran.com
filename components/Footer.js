import React from "react";

import {Logout} from "styled-icons/material-outlined";
import {ArrowLeft, ArrowRight} from "styled-icons/octicons";
import {Heart} from "styled-icons/boxicons-solid"

const Footer = (props) => {
  return (
    <div className="flex items-center justify-between border-grey dark:border-grey border-t">
      <div className="flex items-center px-4 py-2 border-grey dark:border-grey border-r">
        <Logout
          className="cursor-pointer text-highlight hover:text-secondary dark:text-white dark:hover:text-primary h-8 w-8 rotate-[270deg]"
        />
      </div>
      <div className="flex items-center text-sm font-gilroy-medium text-graySecondary dark:text-gray">
        <span className="mr-1">
          Copyright © 2021. All rights reserved | Made with
        </span>
        <Heart className="text-secondary dark:text-primary h-5 w-5"/>
        <span className="mx-1">by</span>
        <a
          className="text-secondary dark:text-primary"
          href="https://matheswaaran.com"
        >
          Mat
        </a>
        <span className="mx-1">and</span>
        <a
          className="text-secondary dark:text-primary"
          href="https://narendraprasath.design"
        >
          Me
        </a>
      </div>
      <div className="flex items-center justify-end">
        <div className="flex items-center px-4 py-2 border-grey dark:border-grey border-l border-r">
          <ArrowLeft
            className="cursor-pointer text-highlight hover:text-secondary dark:text-white dark:hover:text-primary h-8 w-8"
          />
        </div>
        <div className="flex items-center px-4 py-2">
          <ArrowRight
            className="cursor-pointer text-highlight hover:text-secondary dark:text-white dark:hover:text-primary h-8 w-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
