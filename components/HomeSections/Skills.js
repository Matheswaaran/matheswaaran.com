import React from "react";
import {Coffee} from "styled-icons/feather"

const Skills = (props) => {
  return (
    <div className="w-[75vw] relative">
      <div className="absolute right-0 bottom-[-250px]">
        <Coffee className="text-secondary dark:text-primary h-[350px] w-[350px] opacity-20"/>
      </div>
      <div className="text-secondary dark:text-primary text-4xl font-gilroy-semibold mb-4">Skills / Languages / Tools
      </div>
      <div className="flex items-center justify-between text-grey text-lg font-gilroy-medium leading-loose">
        <div className="w-1/2 flex flex-col items-start justify-start">
          <span>ReactJs & Redux</span>
          <span>HTML5, CSS3, Javascript, ES6</span>
          <span>React Native</span>
          <span>Node.js, RESTful API, GraphQL</span>
          <span>Hasura</span>
        </div>
        <div className="w-1/2 flex flex-col items-start justify-start">
          <span>Nelify</span>
          <span>Firebase & GCP</span>
          <span>Git</span>
          <span>JIRA, Trello</span>
          <span>Figma</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
