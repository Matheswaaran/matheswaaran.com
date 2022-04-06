import React from 'react';
import PropTypes from "prop-types";

const Section = (props) => {
  return (
    <div
      className="pl-8 pt-8 border-8 border-secondary/20 dark:border-primary/20 absolute top-[-75px] left-[-150px] w-[50vw] h-[50vh]"
    >
      <span className="font-gilroy-semibold text-6xl text-highlight dark:text-white">{props.title}</span>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
}

Section.defaultProps = {
  title: "",
}

export default Section;