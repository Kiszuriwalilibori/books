import * as React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { snackBarTexts } from "../../fixtures/fixtures";
import { connect } from "react-redux";
import { toggleSnackBar } from "../../redux/booksReducer";

const MyAlert = withStyles({
  root: {
    background: "rgba(122, 194, 33, 0.8);",
    color: "white",
    border: "1px solid #298B01",
    boxShadow: "inset 0 0 5px #298B01",
  },
})(Alert);

export const MessageSnackbar = props => {
  const { open, type, item, toggle } = props;
  const clearSnackBar = () => {
    return toggle(null, null);
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={clearSnackBar}>
      <MyAlert severity="success" variant="filled">
        {snackBarTexts[type] + item}
      </MyAlert>
    </Snackbar>
  );
};

const mapStateToProps = state => ({
  open: state.books.isSnackBarVisible,
  type: state.books.snackBarType,
  item: state.books.snackBarItem,
});

const mapDispatchToProps = dispatch => ({
  toggle: (type, value) => dispatch(toggleSnackBar(type, value)),
});

const MySnackBar = connect(mapStateToProps, mapDispatchToProps)(MessageSnackbar);
export default MySnackBar;

MessageSnackbar.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  type: PropTypes.string,
  item: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
