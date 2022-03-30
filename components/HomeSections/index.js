import {Impress, Step} from 'react-impressjs';
import Steps from "../../data/HomeSections";
import React from "react";

const HomeSections = () => {
  return (
    <Impress
      fallbackMessage={<p>Sorry, your <b>device or browser</b> couldn't support well.</p>}
      hintOn={false}
      // hintMessage={<div className="absolute left-0 bottom-[100px]">Hint</div>}
    >
      <Step
        id="intro"
        data={{
          x: -1000,
          y: -1500
        }}
      >
        <div>
          <p className="text-graySecondary dark:text-grey text-sm font-gilroy-medium mb-4">Hello I’m</p>
          <p className="text-dark dark:text-white text-5xl font-gilroy-semibold">Matheswaaran</p>
        </div>
      </Step>
      <Step
        id="about"
        data={{
          x: -300,
          y: -1500
        }}
      >
        <div className="w-[600px]">
          <p className="text-graySecondary dark:text-grey text-sm font-gilroy-medium mb-4">Developer</p>
          <p className="text-dark dark:text-white text-4xl font-gilroy-semibold">I’m an experienced developer with deep
            interest in modern web development.</p>
        </div>
      </Step>
      <Step
        id="about-2"
        data={{
          x: 450,
          y: -1500,
          rotateZ: 90,
        }}
      >
        <div className="w-[600px]">
          <p className="text-dark dark:text-white text-[50px] font-gilroy-medium">Take a look at my <br/>
            <span className="text-primary">profile</span> <br/>
            and <span className="text-primary">works</span>.
            <br/>
            Don’t worry, they won’t <span className="text-primary">bite</span>.
          </p>
        </div>
      </Step>
      {Steps.map((step, i) => (
        <Step
          key={i}
          id={step.id}
          className={step.className}
          data={step.data}
        >
          {step.content}
        </Step>
      ))}
    </Impress>
  );
};

export default HomeSections;