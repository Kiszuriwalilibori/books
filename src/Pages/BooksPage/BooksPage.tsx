import { Fade } from "@mui/material";

import { withTableContainerHOC, withNavigationHOC, WithRemoveItemWarningHOC } from "hocs";
import { BooksTableBody, BooksTableHeader, BooksTableFilter } from "./components";
import LogoFactory from "components/LogoFactory/LogoFactory";

const Books = () => {
    return (
        <WithRemoveItemWarningHOC>
            <>
                <LogoFactory />
                <Fade in={true} timeout={700}>
                    <table className="table" aria-label="Table of Books">
                        <thead className="table__header">
                            <BooksTableHeader />
                            <BooksTableFilter />
                        </thead>
                        <BooksTableBody />
                    </table>
                </Fade>
            </>
        </WithRemoveItemWarningHOC>
    );
};

export default withTableContainerHOC(withNavigationHOC(Books));
