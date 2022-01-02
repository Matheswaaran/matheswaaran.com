import React from "react";
import SiteData from "../../data/SiteData.json";
import Image from "next/image";
import images from "../../assets/images";
import { useTheme } from "next-themes";

const SocialMediaProfiles = (props) => {
  const { theme } = useTheme();

  return (
    <React.Fragment>
      <a href={`mailto:${SiteData.mail}`}>
        <Image src={images.mail[theme || "dark"]} alt="Mail address" />
      </a>
      {SiteData.social.github && (
        <a href={SiteData.social.github} target="_blank" rel="noreferrer">
          <Image src={images.github[theme || "dark"]} alt="Github" />
        </a>
      )}
      {SiteData.social.twitter && (
        <a href={SiteData.social.twitter} target="_blank" rel="noreferrer">
          <Image src={images.twitter[theme || "dark"]} alt="Twitter" />
        </a>
      )}
      {SiteData.social.facebook && (
        <a href={SiteData.social.facebook} target="_blank" rel="noreferrer">
          <Image src={images.instagram[theme || "dark"]} alt="Instagram" />
        </a>
      )}
      {SiteData.social.linkedin && (
        <a href={SiteData.social.linkedin} target="_blank" rel="noreferrer">
          <Image src={images.linkedin[theme || "dark"]} alt="LinkedIn" />
        </a>
      )}
      {SiteData.social.instagram && (
        <a href={SiteData.social.instagram} target="_blank" rel="noreferrer">
          <Image src={images.instagram[theme || "dark"]} alt="Instagram" />
        </a>
      )}
      {SiteData.social.dribbble && (
        <a href={SiteData.social.dribbble} target="_blank" rel="noreferrer">
          <Image src={images.dribbble[theme || "dark"]} alt="Dribbble" />
        </a>
      )}
      {SiteData.social.behance && (
        <a href={SiteData.social.behance} target="_blank" rel="noreferrer">
          <Image src={images.behance[theme || "dark"]} alt="Behance" />
        </a>
      )}
    </React.Fragment>
  );
};

export default SocialMediaProfiles;
