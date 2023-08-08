import { connect } from "react-redux";

import { Rows } from "./components";
import { BookRecordsArray, RootStateType } from "types";

interface Props {
    pageContent: BookRecordsArray;
}

export const BooksTableBody = (props: Props) => {
    const { pageContent } = props;

    if (!pageContent || !pageContent.length) return null;

    return <tbody>{Rows(pageContent)}</tbody>;
};

const mapStateToProps = (state: RootStateType) => ({
    pageContent: state.books.currentPageBooksData,
});

export default connect(mapStateToProps, {})(BooksTableBody);
