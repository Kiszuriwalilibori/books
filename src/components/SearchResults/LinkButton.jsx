import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LinkButton = props => {
  const { link, label } = props;
  return (
    <Link to={link} className="button button--ok button--long button--no-underline">
      { }
      {label}
    </Link>
  );
};
export default React.memo(LinkButton);
LinkButton.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
