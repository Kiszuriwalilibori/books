import * as React from "react";

import { connect } from "react-redux";

import { changePage } from "js/redux/actionCreators";
import { AppDispatch, RootStateType } from "types/index";
import { StyledPagination } from "./Pagination.styles";
import { PaginationProps } from "@mui/material/Pagination";

const mapStateToProps = (state: RootStateType) => ({
    page: state.books.currentPageNumber,
    count: state.books.numberOfPages,
    variant: "outlined" as PaginationProps["variant"],
    color: "secondary" as PaginationProps["color"],
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    // event must be here in the line below, do not remove //
    onChange: (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(changePage(page));
    },
});

const Pagination = connect(mapStateToProps, mapDispatchToProps)(StyledPagination);

export default Pagination;
