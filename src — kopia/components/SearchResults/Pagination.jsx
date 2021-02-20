import { default as UnconnectedPagination } from "@material-ui/lab/Pagination";
import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { changePage } from "../../redux/booksReducer";
import PropTypes from "prop-types";

const mapStateToProps = state => ({
  page: state.books.currentPageNUmber,
  count: state.books.numberOfPages,
  variant: "outlined",
  color: "secondary",
});

const mapDispatchToProps = dispatch => ({
  onChange: (event, value) => dispatch(changePage(value)),
});

export const Pagination = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withStyles({
    root: {
      margin: "40px auto",
      "& button": { background: "rgba(122, 194, 33, 0.8)", color: "white", border: "1px solid #298B01", boxShadow: "inset 0 0 5px #298B01" },
      "& button.Mui-selected": { background: "#F5C200", color: "black", border: "1px solid #EE760A", boxShadow: "inset 0 0 5px #EE760A" },
    },
  })(React.memo(UnconnectedPagination))
);

UnconnectedPagination.propTypes = {
  page: PropTypes.number,
  count: PropTypes.number,
  variant: PropTypes.string,
  color: PropTypes.string,
};
