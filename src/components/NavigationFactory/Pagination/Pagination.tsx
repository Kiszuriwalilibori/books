import * as React from "react";

import { connect } from "react-redux";

import { changePage } from "store/actionCreators";
import { AppDispatch, RootStateType } from "types";
import { StyledPagination } from "./Pagination.styles";
import { PaginationProps } from "@mui/material/Pagination";
interface Props {
    page: number;
    count: number;
    variant: PaginationProps["variant"];
    color: PaginationProps["color"];
    onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}
const PaginationWithProps = (props: Props) => {
    const { page, count, variant, color, onChange } = props;

    if (count === 0) return null;
    return <StyledPagination page={page} count={count} variant={variant} color={color} onChange={onChange} />;
};
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

const Pagination = connect(mapStateToProps, mapDispatchToProps)(PaginationWithProps);

export default Pagination;
