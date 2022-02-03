import React from "react";
import SiteData from "../../data/SiteData.json";
import NextImage from "../NextImage";

const SocialMediaProfiles = (props) => {
  return (
    <React.Fragment>
      <a href={`mailto:${SiteData.mail}`}>
        <NextImage src="mail" alt="Mail address" />
      </a>
      {SiteData.social.github && (
        <a href={SiteData.social.github} target="_blank" rel="noreferrer">
          <NextImage src="github" alt="Github" />
        </a>
      )}
      {SiteData.social.twitter && (
        <a href={SiteData.social.twitter} target="_blank" rel="noreferrer">
          <NextImage src="twitter" alt="Twitter" />
        </a>
      )}
      {SiteData.social.facebook && (
        <a href={SiteData.social.facebook} target="_blank" rel="noreferrer">
          <NextImage src="instagram" alt="Instagram" />
        </a>
      )}
      {SiteData.social.linkedin && (
        <a href={SiteData.social.linkedin} target="_blank" rel="noreferrer">
          <NextImage src="linkedin" alt="LinkedIn" />
        </a>
      )}
      {SiteData.social.instagram && (
        <a href={SiteData.social.instagram} target="_blank" rel="noreferrer">
          <NextImage src="instagram" alt="Instagram" />
        </a>
      )}
      {SiteData.social.dribbble && (
        <a href={SiteData.social.dribbble} target="_blank" rel="noreferrer">
          <NextImage src="dribbble" alt="Dribbble" />
        </a>
      )}
      {SiteData.social.behance && (
        <a href={SiteData.social.behance} target="_blank" rel="noreferrer">
          <NextImage src="behance" alt="Behance" />
        </a>
      )}
    </React.Fragment>
  );
};

export default SocialMediaProfiles;
