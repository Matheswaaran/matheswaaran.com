import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const ButtonContent = (props) => {
  return (
    <div className="px-4 py-1 rounded cursor-pointer text-highlight dark:text-white shadow-default dark:shadow-primary bg-lightGray dark:bg-transparent">
      {props.size === "small" && (
        <span className="text-sm">{props.children}</span>
      )}
      {props.size === "medium" && (
        <span className="text-lg">{props.children}</span>
      )}
      {props.size === "large" && (
        <span className="text-3xl">{props.children}</span>
      )}
    </div>
  );
};

const Button = (props) => {
  if (props.external) {
    return (
      <a href={props.to} target="_blank" rel="noreferrer">
        <ButtonContent {...props} />
      </a>
    );
  } else {
    return (
      <Link
        href={props.to}
        as={props.to}
        passHref
        target={props.external ? "_blank" : ""}
      >
        <ButtonContent {...props} />
      </Link>
    );
  }
};

Button.defaultProps = {
  onClick: () => {},
  size: "small",
  to: "/",
  external: false,
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  external: PropTypes.bool,
};

export default Button;
