import uuid from "react-uuid";

import { connect } from "react-redux";

import Cell from "./components/Cell";

import { columns } from "models/columns";
import { RootStateType } from "types";

interface Props {
    books: RootStateType["books"]["currentPageBooksData"];
}

export const BooksTableBody = (props: Props) => {
    const { books } = props;

    if (!books || !books.length) return null;

    return (
        <tbody>
            {books.map(book => (
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
    books: state.books.currentPageBooksData,
});

export default connect(mapStateToProps, {})(BooksTableBody);
