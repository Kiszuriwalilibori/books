import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const GenericLinkButton = props => {
  const { link, label } = props;
  return (
    <Link to={link} className="no-underline button--ok button-long ">
      {" "}
      {label}
    </Link>
  );
};
export default React.memo(GenericLinkButton);
GenericLinkButton.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
