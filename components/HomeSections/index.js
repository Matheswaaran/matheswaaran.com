import React from 'react';
import Intro from "./Intro";
import About from "./About";
import About2 from "./About2";

const HomeSections = [
  {
    id: "intro",
    data: {
      x: -1000,
      y: -1500
    },
    content: <Intro/>,
  },
  {
    id: "about",
    data: {
      x: -300,
      y: -1500
    },
    content: <About/>
  },
  {
    id: "about-2",
    data: {
      x: 450,
      y: -1500,
      rotateZ: 90,
    },
    content: <About2/>
  }
];

export default HomeSections;