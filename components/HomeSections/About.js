import React from 'react';
import {Terminal} from "styled-icons/remix-fill"

const About = (props) => {
  return (
    <div className="relative w-[600px]">
      <div className="absolute left-0 bottom-[-250px]">
        <Terminal className="text-secondary dark:text-primary h-[50px] w-[50px]"/>
      </div>
      <p className="text-graySecondary dark:text-grey text-sm font-gilroy-medium mb-4">Developer</p>
      <p className="text-dark dark:text-white text-4xl font-gilroy-semibold">I’m an experienced developer with
        deep
        interest in modern web development.</p>
    </div>
  );
}

export default About;