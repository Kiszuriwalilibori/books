import { connect } from "react-redux";
import uuid from "react-uuid";
import { RootStateType } from "types";
import Cell from "./components/Cell";
import { aryToObj } from "js/utils";
import { columns } from "models/columns";

interface Props {
    books: RootStateType["books"]["currentPageBooksData"];
}

export const BooksTableBody = (props: Props) => {
    const { books: booksRecords } = props;

    if (!booksRecords || !booksRecords.length) return null;

    const bookObjects = booksRecords.map(book => {
        return aryToObj(book);
    });

    return (
        <tbody>
            {bookObjects.map(book => (
                <tr key={uuid()}>
                    {columns.filterFields.map((item, index) => {
                        return <Cell textContent={book[item] as string} index={index} book={book} key={uuid()} />;
                    })}
                </tr>
            ))}
        </tbody>
    );
};

const mapStateToProps = (state: RootStateType) => ({
    books: state.books.currentPageBooksData,
});

export default connect(mapStateToProps, {})(BooksTableBody);
