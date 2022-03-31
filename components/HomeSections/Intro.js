import React from 'react';

const Intro = (props) => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="z-[-100] absolute left-[-120%] top-[-200px] flex items-start text-grey opacity-20">
        <span className="text-[21rem] rotate-90 font-gilroy-bold">{"I'M"}</span>
        <span className="text-[40rem] leading-none font-gilroy-bold">Mat</span>
      </div>
      <div>
        <p className="text-graySecondary dark:text-grey text-sm font-gilroy-medium mb-4">Hello I’m</p>
        <p className="text-dark dark:text-white text-5xl font-gilroy-semibold">Matheswaaran</p>
      </div>
    </div>
  );
}

export default Intro;