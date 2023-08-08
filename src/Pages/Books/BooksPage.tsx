import React from "react";

import { Grow } from "@mui/material";

import { withTableContainerHOC, withSnackBarHOC, withRemoveItemWarningModalHOC, withNavigationHOC } from "HOCs";

import { BooksTableBody, BooksTableHeader, BooksTableFilter } from "./components";

let localBooks = () => {
    return (
        <Grow in={true} timeout={1000}>
            <table className="table" aria-label="Table of Books">
                <thead className="table__header">
                    <BooksTableHeader />
                    <BooksTableFilter />
                </thead>
                <BooksTableBody />
            </table>
        </Grow>
    );
};

const Books = React.memo(withRemoveItemWarningModalHOC(withTableContainerHOC(withSnackBarHOC(withNavigationHOC(localBooks)))));
export default Books;
