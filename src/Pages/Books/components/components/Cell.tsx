import uuid from "react-uuid";

import { TableCellRegular } from "./TableCellRegular";
import { TableCellWithButtons } from "./TableCellWithButtons";
import { columns } from "models";

/**
 * checks whether given item is last item in a table
 * @param i item index
 * @param ar array of strings - ite represents all strings to be displayed in a given row an - as last item - unique code which will be not displayed
 * @returns  true if it is last item, false if not
 */

const isLastElementOfTable = (i: number, ar: string[]) => (i === ar.length - 1 ? true : false);

/**
 * creates cell in table with books
 * @param textContent string that will be displayed in cell
 * @param index number, it will be used as React key
 * @param ar array of strings - ite represents all strings to be displayed in a given row an - as last item - unique code which will be not displayed
 * @returns component being a cell
 */

const Cell = (textContent: string, index: number, ar: string[]) => {
    const bookInfos = [...ar];
    const bookId = bookInfos.pop()!;

    return columns.withButtons[index] ? <TableCellWithButtons textContent={textContent} index={index} bookID={bookId} key={uuid()} /> : isLastElementOfTable(index, ar) ? null : <TableCellRegular textContent={textContent} key={uuid()} />;
};
export default Cell;
