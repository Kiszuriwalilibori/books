import uuid from "react-uuid";

import { TableCellRegular } from "./TableCellRegular";
import { TableCellWithButtons } from "./TableCellWithButtons/TableCellWithButtons";
import { columns } from "models";
import { FlatBookRecord } from "types/types";

/**
 * creates cell in table with books
 * @param textContent string that will be displayed in cell
 * @param index number, it will be used as React key
 * @param bookData array of strings - ite represents all strings to be displayed in a given row an - as last item - unique code which will be not displayed
 * @returns component being a cell
 */

interface Props {
    textContent: string;
    index: number;
    book: FlatBookRecord;
}

const Cell = (props: Props) => {
    const { textContent, index, book } = props;

    const bookId = book.id;
    return columns.withButtons[index] ? <TableCellWithButtons title={book.title} cellContent={textContent} index={index} bookID={bookId} key={uuid()} /> : <TableCellRegular cellContent={textContent} key={uuid()} />;
};
export default Cell;
