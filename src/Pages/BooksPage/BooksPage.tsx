import { Grow } from "@mui/material";

import { withTableContainerHOC, withNavigationHOC, WithRemoveItemWarningHOC } from "hocs";
import { BooksTableBody, BooksTableHeader, BooksTableFilter } from "./components";
import LogoFactory from "components/LogoFactory/LogoFactory";

const Books = () => {
    return (
        <WithRemoveItemWarningHOC>
            <>
                <LogoFactory />
                <Grow in={true} timeout={1000}>
                    <table className="table" aria-label="Table of Books">
                        <thead className="table__header">
                            <BooksTableHeader />
                            <BooksTableFilter />
                        </thead>
                        <BooksTableBody />
                    </table>
                </Grow>
            </>
        </WithRemoveItemWarningHOC>
    );
};

export default withTableContainerHOC(withNavigationHOC(Books));
