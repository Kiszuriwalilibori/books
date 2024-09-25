import uuid from "react-uuid";

import { connect } from "react-redux";

import Cell from "./components/Cell";

import { columns } from "models/columns";
import { RootStateType } from "types";
import getSinglePageData from "js/BooksManager/tableHelpers/getSinglePageData";

interface Props {
    books: RootStateType["books"]["books"];
    pageNumber: RootStateType["books"]["currentPageNumber"];
    numberOfPages: RootStateType["books"]["numberOfPages"];
}

export const BooksTableBody = (props: Props) => {
    const { books, pageNumber, numberOfPages } = props;
    const data = getSinglePageData(pageNumber, books, numberOfPages);
    if (!data || !data.length) return null;

    return (
        <tbody>
            {data.map(book => (
                <tr key={uuid()}>
                    {columns.fields.map((item, index) => {
                        return <Cell textContent={book[item] as string} index={index} book={book} key={uuid()} />;
                    })}
                </tr>
            ))}
        </tbody>
    );
};

const mapStateToProps = (state: RootStateType) => ({
    books: state.books.books,
    pageNumber: state.books.currentPageNumber,
    numberOfPages: state.books.numberOfPages,
});

export default connect(mapStateToProps, {})(BooksTableBody);
