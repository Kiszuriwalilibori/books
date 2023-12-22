import { connect } from "react-redux";

import { Rows } from "./components";
import { RootStateType } from "types";

interface Props {
    books: RootStateType["books"]["currentPageBooksData"];
}

export const BooksTableBody = (props: Props) => {
    const { books: booksRecords } = props;

    if (!booksRecords || !booksRecords.length) return null;

    return <tbody>{Rows(booksRecords)}</tbody>;
};

const mapStateToProps = (state: RootStateType) => ({
    books: state.books.currentPageBooksData,
});

export default connect(mapStateToProps, {})(BooksTableBody);
