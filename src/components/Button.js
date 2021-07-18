import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Button = (props) => {
  return (
    <div className="p-1 px-4 bg-dark shadow-default rounded">
      <Link
        to={props.to}
        className="text-white"
        target={props.external ? "_blank" : ""}
      >
        {props.size === "small" && (
          <span className="text-sm">
            {props.children}
          </span>
        )}
        {props.size === "medium" && (
          <span className="text-lg">
            {props.children}
          </span>
        )}
        {props.size === "large" && (
          <span className="text-3xl">
            {props.children}
          </span>
        )}
      </Link>
    </div>
  )
}

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
}

export default Button;
