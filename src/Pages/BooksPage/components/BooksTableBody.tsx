import uuid from "react-uuid";

import { connect } from "react-redux";

import Cell from "./components/Cell";

import { columns } from "models/columns";
import { RootStateType } from "types";

interface Props {
    thisPageBooks: RootStateType["books"]["currentPageBooksData"];
}

export const BooksTableBody = (props: Props) => {
    const { thisPageBooks } = props;

    if (!thisPageBooks || !thisPageBooks.length) return null;

    return (
        <tbody>
            {thisPageBooks.map(book => (
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
    thisPageBooks: state.books.currentPageBooksData,
});

export default connect(mapStateToProps, {})(BooksTableBody);
