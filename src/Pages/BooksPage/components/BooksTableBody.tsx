import uuid from "react-uuid";

import { connect } from "react-redux";

import Cell from "./components/Cell";

import { useGetTableData } from "hooks";
import { columns } from "models/columns";
import { RootStateType } from "types";

interface Props {
    books: RootStateType["books"]["books"];
    pageNumber: RootStateType["books"]["currentPageNumber"];
    numberOfPages: RootStateType["books"]["numberOfPages"];
}

export const BooksTableBody = (props: Props) => {
    const { books, pageNumber, numberOfPages } = props;
    const tableData = useGetTableData({ books, pageNumber, numberOfPages });

    if (!tableData || !tableData.length) return null;

    return (
        <tbody>
            {tableData.map(book => (
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
