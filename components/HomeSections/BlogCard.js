import React from 'react';

const BlogCard = (props) => {
  return (
    <div className="w-[40vw]">
      <div className="font-gilroy-semibold text-4xl text-white">Title</div>
      <p className="font-gilroy-semibold text-4xl text-white mt-2">Amet minim mollit non deserunt ullamco est sit aliqua
        dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
      <div className="font-gilroy-semibold text-2xl text-primary mt-4">See blog</div>
      <div className="font-gilroy-medium text-4xl text-primary mt-16">2018</div>
    </div>
  );
}

export default BlogCard;