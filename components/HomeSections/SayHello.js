import React from 'react';

const SayHello = (props) => {
  return (
    <div className="w-[70vw] flex flex-col items-center justify-center">
      <span className="font-gilroy-bold text-4xl mb-8">Get in touch</span>
      <span className="font-gilroy-medium text-xl mb-8">Feel free to email me about anything. </span>
      <span className="font-gilroy-medium text-xl">
        You can also reach me around the web:
        <a className="text-secondary dark:text-primary mr-3 ml-3" href="#">GitHub,</a>
        <a className="text-secondary dark:text-primary mr-3" href="#">Twitter,</a>
        <a className="text-secondary dark:text-primary mr-3" href="#">Instagram</a>
      </span>
    </div>
  );
}

export default SayHello;