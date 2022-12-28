import PropTypes from "prop-types";
import React from "react";

import "./button.css";

export const Button = ({
  variant,
  backgroundColor,
  size,
  label,

  ...props
}) => {
  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        `storybook-button--${variant}`,
      ].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: "primary",
  backgroundColor: null,
  size: "medium",
  onClick: undefined,
};
