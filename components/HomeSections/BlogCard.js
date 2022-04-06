import React from 'react';

const BlogCard = (props) => {
  return (
    <div className="w-[40vw] font-gilroy-semibold text-highlight dark:text-white">
      <div className="text-4xl">Title</div>
      <p
        className="text-grey font-gilroy-medium text-4xl mt-2"
      >
        Amet minim mollit non deserunt ullamco
        est sit aliqua
        dolor do amet sint. Velit officia consequat duis enim velit mollit.
      </p>
      <div className="text-2xl text-secondary dark:text-primary mt-4">See blog</div>
      <div className="font-gilroy-medium text-4xl text-secondary dark:text-primary mt-16">2018</div>
    </div>
  );
}

export default BlogCard;