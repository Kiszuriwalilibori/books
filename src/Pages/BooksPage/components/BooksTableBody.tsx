import uuid from "react-uuid";

import { useGetBookTableData } from "hooks";
import { columns } from "models";
import Cell from "./Cell";

export const BooksTableBody = () => {
    const tableData = useGetBookTableData();

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

export default BooksTableBody;
