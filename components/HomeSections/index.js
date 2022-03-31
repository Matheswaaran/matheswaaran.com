import React from 'react';
import Intro from "./Intro";
import About from "./About";
import About2 from "./About2";
import Portfolio from "./Portfolio";
import BlogCard from "./BlogCard";
import SayHello from "./SayHello";

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
      x: 350,
      y: -1500,
      rotateZ: 90,
    },
    content: <About2/>
  },
  {
    id: "blog",
    data: {
      x: -1000,
      y: -400,
      rotateZ: 0,
      scale: 6
    },
    content: <Portfolio/>
  },
  {
    id: "blog-1",
    data: {
      x: -1200,
      y: 800,
    },
    content: <BlogCard/>
  },
  {
    id: "blog-2",
    data: {
      x: -300,
      y: 800,
    },
    content: <BlogCard/>
  },
  {
    id: "blog-3",
    data: {
      x: 600,
      y: 800,
    },
    content: <BlogCard/>
  },
  {
    id: "blog-4",
    data: {
      x: 1500,
      y: 800,
    },
    content: <BlogCard/>
  },
  {
    id: "blog-5",
    data: {
      x: 2400,
      y: -200,
    },
    content: <BlogCard/>
  },
  {
    id: "experience",
    data: {
      x: 6000,
      y: 1700,
      rotateY: 180,
      scale: 6
    },
    content: <Portfolio/>
  },
  {
    id: "experience-1",
    data: {
      x: 6200,
      y: 2900,
      rotateY: 180,
    },
    content: <BlogCard/>
  },
  {
    id: "experience-2",
    data: {
      x: 5300,
      y: 2900,
      rotateY: 180,
    },
    content: <BlogCard/>
  },
  {
    id: "experience-3",
    data: {
      x: 4400,
      y: 2900,
      rotateY: 180,
    },
    content: <BlogCard/>
  },
  {
    id: "experience-4",
    data: {
      x: 3500,
      y: 2900,
      rotateY: 180,
    },
    content: <BlogCard/>
  },
  {
    id: "experience-5",
    data: {
      x: 3500,
      y: 1700,
      rotateY: 180,
    },
    content: <BlogCard/>
  },
  {
    id: "skills",
    data: {
      x: 1400,
      y: 3700,
      rotateY: 180,
      rotateZ: 90
    },
    content: <About2/>
  },
  {
    id: "projects",
    data: {
      x: 2500,
      y: 4500,
      rotateY: 180,
      rotateZ: 180
    },
    content: <BlogCard/>
  },
  {
    id: "projects-1",
    data: {
      x: 3400,
      y: 4500,
      rotateY: 180,
      rotateZ: 180
    },
    content: <BlogCard/>
  },
  {
    id: "projects-2",
    data: {
      x: 4300,
      y: 4500,
      rotateY: 180,
      rotateZ: 180
    },
    content: <BlogCard/>
  },
  {
    id: "say-hello",
    data: {
      x: 5500,
      y: 4900,
      rotateY: 180,
      rotateZ: 270
    },
    content: <SayHello/>
  },
];

export default HomeSections;