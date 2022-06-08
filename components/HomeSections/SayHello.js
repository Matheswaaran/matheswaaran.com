import React from 'react';
import NextImage from "../NextImage";
import SiteData from "../../data/SiteData.json";
import Button from "../Button";

const SayHello = (props) => {
  return (
    <div className="w-[70vw] flex flex-col items-center justify-center text-highlight dark:text-white text-center">
      <span className="font-gilroy-bold text-4xl mb-8">Get in touch <span className="animate-wave">👋🏻</span></span>
      <span className="font-gilroy-medium text-xl mb-4">Feel free to email me about anything. </span>
      <span className="font-gilroy-medium text-gray-600 text-base mb-4">(or)</span>
      <span className="font-gilroy-medium text-xl mb-8">
        Call me at
        <a className="text-secondary dark:text-primary ml-3" href="tel:+919025923103">+91-9025923103</a>.
      </span>
      <span className="font-gilroy-medium text-xl mb-8">
        You can also reach me around the web:
        <br className="block lg:hidden"/>
        <a className="text-secondary dark:text-primary mr-3 ml-3" href="#">GitHub,</a>
        <a className="text-secondary dark:text-primary mr-3" href="#">Twitter,</a>
        <a className="text-secondary dark:text-primary mr-3" href="#">Instagram</a>
      </span>
      <Button size="large" external={true} to={`mailto:${SiteData.mail}`}>
        Say Hello
      </Button>
    </div>
  );
}

export default SayHello;
