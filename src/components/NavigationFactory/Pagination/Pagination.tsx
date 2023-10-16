import * as React from "react";

import { connect } from "react-redux";

import { changePage } from "js/redux/actionCreators";
import { AppDispatch, RootStateType } from "types/index";
import { StyledPagination } from "./styled";

const mapStateToProps = (state: RootStateType) => ({
    page: state.books.currentPageNumber,
    count: state.books.numberOfPages,
    variant: "outlined",
    color: "secondary",
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    // event must be here in the line below, do not remove //
    onChange: (event: React.MouseEvent<HTMLElement>, value: number) => {
        dispatch(changePage(value));
    },
});

const Pagination = connect(mapStateToProps, mapDispatchToProps)(StyledPagination);

export default Pagination;
