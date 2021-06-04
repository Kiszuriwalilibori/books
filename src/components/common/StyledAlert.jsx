import * as React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const NewAlert = withStyles({
  root: {
    background: "#F5C200",
    color: "black",
    border: "1px solid #EE760A",
    fontWeight: "bold",
    margin: "40px auto",
    maxWidth: "300px",
    boxShadow: "inset 0 0 5px #EE760A",
  },
})(Alert);

export const StyledAlert = React.memo(({ isVisible, message }) => {
  return !isVisible ? (
    <NewAlert severity="error">
      <AlertTitle>Uwaga!!!</AlertTitle>
      {message}
    </NewAlert>
  ) : null;
});

StyledAlert.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  mesage: PropTypes.string,
};
