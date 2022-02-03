import React from "react";
import NextImage from "./NextImage";

const Footer = (props) => {
  return (
    <div className="flex items-center justify-between border-grey dark:border-grey border-t px-4">
      <div className="pl-0 px-4 py-2 border-grey dark:border-grey border-r">
        <NextImage src="logout" alt="First step" className="cursor-pointer" />
      </div>
      <div className="flex items-center text-sm font-gilroy-medium text-graySecondary dark:text-gray">
        <span className="mr-1">
          Copyright © 2021. All rights reserved | Made with
        </span>
        <NextImage src="heart" alt="Mail address" />
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
      <div className="flex items-stretch justify-end">
        <div className="px-4 py-2 border-grey dark:border-grey border-l border-r">
          <NextImage
            src="arrowLeft"
            alt="First step"
            className="cursor-pointer"
          />
        </div>
        <div className="px-4 py-2 pr-0">
          <NextImage
            src="arrowRight"
            alt="First step"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
