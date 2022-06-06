import React from "react";
import SiteData from "../../data/SiteData.json";

import {Mail} from "styled-icons/fluentui-system-filled";
import {Behance, Dribbble, Facebook, Github, Instagram, Linkedin, Twitter} from "styled-icons/boxicons-logos";

const SocialMediaProfiles = (props) => {
  return (
    <React.Fragment>
      <a href={`mailto:${SiteData.mail}`}>
        <Mail
          className="cursor-pointer text-highlight hover:text-secondary dark:text-white dark:hover:text-primary h-5 w-5"
        />
      </a>
      {SiteData.social.github && (
        <a href={SiteData.social.github} target="_blank" rel="noreferrer">
          <Github
            className="cursor-pointer text-highlight hover:text-secondary dark:text-white dark:hover:text-primary h-5 w-5"
          />
        </a>
      )}
      {SiteData.social.twitter && (
        <a href={SiteData.social.twitter} target="_blank" rel="noreferrer">
          <Twitter
            className="cursor-pointer text-highlight hover:text-secondary dark:text-white dark:hover:text-primary h-5 w-5"
          />
        </a>
      )}
      {SiteData.social.linkedin && (
        <a href={SiteData.social.linkedin} target="_blank" rel="noreferrer">
          <Linkedin
            className="cursor-pointer text-highlight hover:text-secondary dark:text-white dark:hover:text-primary h-5 w-5"
          />
        </a>
      )}
      {SiteData.social.instagram && (
        <a href={SiteData.social.instagram} target="_blank" rel="noreferrer">
          <Instagram
            className="cursor-pointer text-highlight hover:text-secondary dark:text-white dark:hover:text-primary h-5 w-5"
          />
        </a>
      )}
      {SiteData.social.dribbble && (
        <a href={SiteData.social.dribbble} target="_blank" rel="noreferrer">
          <Dribbble
            className="cursor-pointer text-highlight hover:text-secondary dark:text-white dark:hover:text-primary h-5 w-5"
          />
        </a>
      )}
      {SiteData.social.behance && (
        <a href={SiteData.social.behance} target="_blank" rel="noreferrer">
          <Behance
            className="cursor-pointer text-highlight hover:text-secondary dark:text-white dark:hover:text-primary h-5 w-5"
          />
        </a>
      )}
      {SiteData.social.facebook && (
        <a href={SiteData.social.facebook} target="_blank" rel="noreferrer">
          <Facebook
            className="cursor-pointer text-highlight hover:text-secondary dark:text-white dark:hover:text-primary h-5 w-5"
          />
        </a>
      )}
    </React.Fragment>
  );
};

export default SocialMediaProfiles;
