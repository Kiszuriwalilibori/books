import * as React from "react";

import { withStyles } from "@mui/styles";
import { connect } from "react-redux";

import { changePage } from "js/redux/actionCreators";
import { default as UnconnectedPagination } from "@mui/material/Pagination";

const mapStateToProps = state => ({
  page: state.books.currentPageNumber,
  count: state.books.numberOfPages,
  variant: "outlined",
  color: "secondary",
});

const mapDispatchToProps = dispatch => ({
  // event must be here in the line below, do not remove //
  onChange: (event, value) => {
    dispatch(changePage(value));
  },
});

const Pagination = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withStyles({
    root: {
      margin: "40px auto",
      "& button": {
        background: "rgba(122, 194, 33, 0.8)",
        color: "white",
        border: "1px solid #298B01",
        boxShadow: "inset 0 0 5px #298B01",
      },
      "& button.Mui-selected": {
        background: "#F5C200",
        color: "black",
        border: "1px solid #EE760A",
        boxShadow: "inset 0 0 5px #EE760A",
      },
    },
  })(React.memo(UnconnectedPagination))
);

export default Pagination;
